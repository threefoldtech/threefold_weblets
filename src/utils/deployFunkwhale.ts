import type { default as VM } from "../types/vm";
import type { IProfile } from "../types/Profile";
import deploy from "./deploy";

import { getUniqueName, selectGatewayNode } from "./gatewayHelpers";

const { HTTPMessageBusClient } = window.configs?.client ?? {};
const {
  DiskModel,
  MachineModel,
  MachinesModel,
  GridClient,
  GatewayNameModel,
  NetworkModel,
} = window.configs?.grid3_client ?? {};

export default async function deployFunkwhale(data: VM, profile: IProfile) {
  const { envs, disks, ...base } = data;
  let { name, flist, cpu, memory, entrypoint, network: nw } = base;
  const { publicIp, planetary, nodeId, rootFsSize } = base;
  const { mnemonics, storeSecret, networkEnv } = profile;

  const http = new HTTPMessageBusClient(0, "");
  const client = new GridClient(
    networkEnv as any,
    mnemonics,
    storeSecret,
    http,
    undefined,
    "tfkvstore" as any
  );
  let workloadSuffix = Math.floor(Math.random() * 10000000);

  await client.connect();

  // Make sure the name is valid
  name = await getUniqueName(client, name);

  // Gateway node Id and domain
  let [gwNodeId, gwDomain] = await selectGatewayNode();
  const domain = `${name}.${gwDomain}`;

  // define network
  const network = new NetworkModel();
  network.name = "FWNT" + workloadSuffix;
  network.ip_range = "10.1.0.0/16";

  await deployFunkwhaleVM(profile, client, name, network, nodeId, domain, workloadSuffix);

  const info = await getFunkwhaleInfo(client, "FWVMs" + workloadSuffix);
  const planetaryIP = info[0]["planetary"];

  await deployPrefixGateway(profile, client, name, planetaryIP, gwNodeId);

  const gatewayInfo = await getGatewayInfo(client, name);
  return { domain, planetaryIP };
}

async function deployFunkwhaleVM(
  profile: IProfile,
  client: any,
  name: string,
  network: any,
  nodeId: number,
  domain: string,
  workloadSuffix: number
) {


  const disk = new DiskModel();
  disk.name = "FWD" + workloadSuffix;
  disk.size = 10;
  disk.mountpoint = "/data";

  const vm = new MachineModel();
  vm.name = "FWVM" + workloadSuffix;
  vm.node_id = nodeId;
  vm.disks = [disk];
  vm.public_ip = false;
  vm.planetary = true;
  vm.cpu = 2;
  vm.memory = 1024 * 2;
  vm.rootfs_size = 2;
  vm.flist = "https://hub.grid.tf/tf-official-apps/threefoldtech-funk-latest.flist";
  vm.entrypoint = "/init.sh";
  vm.env = {
    FUNKWHALE_HOSTNAME: domain,
  };

  const vms = new MachinesModel();
  vms.name = "FWVMs" + workloadSuffix;
  vms.network = network;
  vms.machines = [vm];

  return deploy(profile, "Funkwhale", name, (grid) => {
    return grid.machines
      .deploy(vms)
      .then(() => grid.machines.getObj(name))
      .then(([vm]) => vm);
  });
}

async function deployPrefixGateway(
  profile: IProfile,
  client: any,
  name: string,
  backend: string,
  nodeId: number
) {
  const gw = new GatewayNameModel();
  gw.name = name;
  gw.node_id = nodeId;
  gw.tls_passthrough = false;
  gw.backends = [`http://[${backend}]:80/`];

  return deploy(profile, "GatewayName", name, (grid) => {
    return grid.gateway
      .deploy_name(gw)
      .then(() => grid.gateway.getObj(name))
      .then(([gw]) => gw);
  });
}

async function getFunkwhaleInfo(client: any, name: string) {
  const info = await client.machines.getObj(name);
  return info;
}

async function getGatewayInfo(client: any, name: string) {
  const info = await client.gateway.getObj(name);
  return info;
}
