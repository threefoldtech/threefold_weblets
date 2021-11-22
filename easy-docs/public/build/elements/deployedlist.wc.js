!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function l(t){t.forEach(n)}function o(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(n,e,l){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const l=n.subscribe(...e);return l.unsubscribe?()=>l.unsubscribe():l}(e,l))}function c(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function a(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function m(){return f(" ")}function h(){return f("")}function p(t,n,e,l){return t.addEventListener(n,e,l),()=>t.removeEventListener(n,e,l)}function b(t){return function(n){return n.preventDefault(),t.call(this,n)}}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function k(t,n,e,l){t.style.setProperty(n,e,l?"important":"")}function y(t){const n={};for(const e of t)n[e.name]=e.value;return n}let $;function w(t){$=t}function x(){if(!$)throw new Error("Function called outside component initialization");return $}const _=[],C=[],P=[],E=[],M=Promise.resolve();let I=!1;function L(t){P.push(t)}let N=!1;const S=new Set;function T(){if(!N){N=!0;do{for(let t=0;t<_.length;t+=1){const n=_[t];w(n),j(n.$$)}for(w(null),_.length=0;C.length;)C.pop()();for(let t=0;t<P.length;t+=1){const n=P[t];S.has(n)||(S.add(n),n())}P.length=0}while(_.length);for(;E.length;)E.pop()();I=!1,N=!1,S.clear()}}function j(t){if(null!==t.fragment){t.update(),l(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}const K=new Set;let V,D;function H(t,n){t&&t.i&&(K.delete(t),t.i(n))}function O(t,n){const e=n.token={};function o(t,o,r,i){if(n.token!==e)return;n.resolved=i;let c=n.ctx;void 0!==r&&(c=c.slice(),c[r]=i);const s=t&&(n.current=t)(c);let u=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(V={r:0,c:[],p:V},function(t,n,e,l){if(t&&t.o){if(K.has(t))return;K.add(t),V.c.push((()=>{K.delete(t),l&&(e&&t.d(1),l())})),t.o(n)}}(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),V.r||l(V.c),V=V.p)})):n.block.d(1),s.c(),H(s,1),s.m(n.mount(),n.anchor),u=!0),n.block=s,n.blocks&&(n.blocks[o]=s),u&&T()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=x();if(t.then((t=>{w(e),o(n.then,1,n.value,t),w(null)}),(t=>{if(w(e),o(n.catch,2,n.error,t),w(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}function A(t,n,e){const l=n.slice(),{resolved:o}=t;t.current===t.then&&(l[t.value]=o),t.current===t.catch&&(l[t.error]=o),t.block.p(l,e)}function F(t,n){t.d(1),n.delete(t.key)}function R(t,n,e,l,o,r,i,c,s,u,a,d){let f=t.length,m=r.length,h=f;const p={};for(;h--;)p[t[h].key]=h;const b=[],g=new Map,v=new Map;for(h=m;h--;){const t=d(o,r,h),c=e(t);let s=i.get(c);s?l&&s.p(t,n):(s=u(c,t),s.c()),g.set(c,b[h]=s),c in p&&v.set(c,Math.abs(h-p[c]))}const k=new Set,y=new Set;function $(t){H(t,1),t.m(c,a),i.set(t.key,t),a=t.first,m--}for(;f&&m;){const n=b[m-1],e=t[f-1],l=n.key,o=e.key;n===e?(a=n.first,f--,m--):g.has(o)?!i.has(l)||k.has(l)?$(n):y.has(o)?f--:v.get(l)>v.get(o)?(y.add(l),$(n)):(k.add(o),f--):(s(e,i),f--)}for(;f--;){const n=t[f];g.has(n.key)||s(n,i)}for(;m;)$(b[m-1]);return b}function B(t,n){-1===t.$$.dirty[0]&&(_.push(t),I||(I=!0,M.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function q(r,i,c,s,a,d,f,m=[-1]){const h=$;w(r);const p=r.$$={fragment:null,ctx:null,props:d,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(h?h.$$.context:[])),callbacks:e(),dirty:m,skip_bound:!1,root:i.target||h.$$.root};f&&f(p.root);let b=!1;if(p.ctx=c?c(r,i.props||{},((t,n,...e)=>{const l=e.length?e[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=l)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](l),b&&B(r,t)),n})):[],p.update(),b=!0,l(p.before_update),p.fragment=!!s&&s(p.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();i.intro&&H(r.$$.fragment),function(t,e,r,i){const{fragment:c,on_mount:s,on_destroy:u,after_update:a}=t.$$;c&&c.m(e,r),i||L((()=>{const e=s.map(n).filter(o);u?u.push(...e):l(e),t.$$.on_mount=[]})),a.forEach(L)}(r,i.target,i.anchor,i.customElement),T()}w(h)}var z,G,J,U;"function"==typeof HTMLElement&&(D=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(o);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){l(this.$$.on_disconnect)}$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(l(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});const{HTTPMessageBusClient:W}=null!==(G=null===(z=window.configs)||void 0===z?void 0:z.client)&&void 0!==G?G:{},{GridClient:Q}=null!==(U=null===(J=window.configs)||void 0===J?void 0:J.grid3_client)&&void 0!==U?U:{};class X{constructor(t){this.grid=t}_loadK8s(t){return new Promise((n=>{this.grid.k8s.getObj(t).then((e=>{n({name:t,master:e.masters[0],workers:e.workers.length,details:e})})).catch((()=>n(null)))}))}loadK8s(){return this.grid.k8s.list().then((t=>Promise.all(t.map((t=>this._loadK8s(t)))))).then((t=>t.filter((t=>null!==t))))}_loadVm(t){return new Promise((n=>{this.grid.machines.getObj(t).then((([t])=>n(t))).catch((()=>n(null)))}))}loadVm(){return this.grid.machines.list().then((t=>Promise.all(t.map((t=>this._loadVm(t)))))).then((t=>t.filter((t=>null!==t))))}loadCaprover(){return this.loadVm().then((t=>t.filter((t=>t.name.startsWith("caprover_leader")))))}static async init(t){const{mnemonics:n,networkEnv:e,storeSecret:l}=t,o=new W(0,""),r=new Q(e,n,l,o,"","tfkvstore");return await r.connect(),new X(r)}}var Y,Z,tt,nt;const{GridClient:et}=null!==(Z=null===(Y=window.configs)||void 0===Y?void 0:Y.grid3_client)&&void 0!==Z?Z:{},{HTTPMessageBusClient:lt}=null!==(nt=null===(tt=window.configs)||void 0===tt?void 0:tt.client)&&void 0!==nt?nt:{};function ot(t,n,e){const l=t.slice();return l[28]=n[e],l[26]=e,l}function rt(t,n,e){const l=t.slice();return l[28]=n[e],l[26]=e,l}function it(t,n,e){const l=t.slice();return l[0]=n[e],l}function ct(t,n,e){const l=t.slice();return l[8]=n[e],l[26]=e,l}function st(t){let n,e,l,o=t[0].toLocaleUpperCase()+"";return{c(){n=f("("),e=f(o),l=f(")")},m(t,o){s(t,n,o),s(t,e,o),s(t,l,o)},p(t,n){1&n[0]&&o!==(o=t[0].toLocaleUpperCase()+"")&&v(e,o)},d(t){t&&u(n),t&&u(e),t&&u(l)}}}function ut(t){let n,e,l,o,r,i,a,f,b=!t[0]&&ft(t),v=(!t[0]&&"Kubernetes"===t[1]||"k8s"===t[0])&&ht(t),y=("Virtual Machines"===t[1]||"Caprover"===t[1]||"caprover"===t[0]||"vm"===t[0])&&_t(t);return{c(){n=d("div"),e=d("button"),e.textContent="Back",l=m(),b&&b.c(),o=m(),v&&v.c(),r=m(),y&&y.c(),i=h(),g(e,"class","button is-primary is-outlined mr-2"),k(n,"display","flex")},m(u,d){s(u,n,d),c(n,e),c(n,l),b&&b.m(n,null),s(u,o,d),v&&v.m(u,d),s(u,r,d),y&&y.m(u,d),s(u,i,d),a||(f=p(e,"click",t[16]),a=!0)},p(t,e){t[0]?b&&(b.d(1),b=null):b?b.p(t,e):(b=ft(t),b.c(),b.m(n,null)),!t[0]&&"Kubernetes"===t[1]||"k8s"===t[0]?v?v.p(t,e):(v=ht(t),v.c(),v.m(r.parentNode,r)):v&&(v.d(1),v=null),"Virtual Machines"===t[1]||"Caprover"===t[1]||"caprover"===t[0]||"vm"===t[0]?y?y.p(t,e):(y=_t(t),y.c(),y.m(i.parentNode,i)):y&&(y.d(1),y=null)},d(t){t&&u(n),b&&b.d(),t&&u(o),v&&v.d(t),t&&u(r),y&&y.d(t),t&&u(i),a=!1,f()}}}function at(t){let n,e,o,r,i,a,h,v,y,$,w,x=[],_=new Map,C=t[7];const P=t=>t[26];for(let n=0;n<C.length;n+=1){let e=ct(t,C,n),l=P(e);_.set(l,x[n]=Vt(l,e))}return{c(){n=d("form"),e=d("div"),o=d("div"),r=d("select");for(let t=0;t<x.length;t+=1)x[t].c();i=m(),a=d("div"),h=d("button"),v=f("List"),g(o,"class","select mb-4"),k(o,"display","flex"),k(o,"justify-content","flex-end"),k(e,"display","flex"),k(e,"justify-content","center"),h.disabled=y=!t[8]||""===t[8].mnemonics||""===t[8].storeSecret,g(h,"type","submit"),g(h,"class","button is-primary"),k(a,"display","flex"),k(a,"justify-content","center")},m(l,u){s(l,n,u),c(n,e),c(e,o),c(o,r);for(let t=0;t<x.length;t+=1)x[t].m(r,null);c(n,i),c(n,a),c(a,h),c(h,v),$||(w=[p(r,"change",t[12]),p(n,"submit",b(t[11]))],$=!0)},p(t,n){128&n[0]&&(C=t[7],x=R(x,n,P,1,t,C,_,r,F,Vt,null,ct)),256&n[0]&&y!==(y=!t[8]||""===t[8].mnemonics||""===t[8].storeSecret)&&(h.disabled=y)},d(t){t&&u(n);for(let t=0;t<x.length;t+=1)x[t].d();$=!1,l(w)}}}function dt(n){let e;return{c(){e=d("p"),e.textContent="Loading...",g(e,"style","text-align: center; mt-2 mb-2")},m(t,n){s(t,e,n)},p:t,d(t){t&&u(e)}}}function ft(t){let n,e,l,o=[],r=new Map,i=t[9];const a=t=>t[0].label;for(let n=0;n<i.length;n+=1){let e=it(t,i,n),l=a(e);r.set(l,o[n]=mt(l,e))}return{c(){n=d("div"),e=d("div"),l=d("ul");for(let t=0;t<o.length;t+=1)o[t].c();g(e,"class","tabs is-centered"),k(n,"width","100%")},m(t,r){s(t,n,r),c(n,e),c(e,l);for(let t=0;t<o.length;t+=1)o[t].m(l,null)},p(t,n){514&n[0]&&(i=t[9],o=R(o,n,a,1,t,i,r,l,F,mt,null,it))},d(t){t&&u(n);for(let t=0;t<o.length;t+=1)o[t].d()}}}function mt(t,n){let e,l,o,r,i,a,h,v,k=n[0].label+"";function y(){return n[17](n[0])}return{key:t,first:null,c(){e=d("li"),l=d("a"),o=d("span"),r=f(k),i=m(),g(l,"href","#!"),g(e,"class",a=n[1]===n[0].label?"is-active":""),this.first=e},m(t,n){s(t,e,n),c(e,l),c(l,o),c(o,r),c(e,i),h||(v=p(l,"click",b(y)),h=!0)},p(t,l){n=t,2&l[0]&&a!==(a=n[1]===n[0].label?"is-active":"")&&g(e,"class",a)},d(t){t&&u(e),h=!1,v()}}}function ht(t){let n,e,l={ctx:t,current:null,token:null,hasCatch:!0,pending:xt,then:kt,catch:pt,value:27,error:30};return O(e=t[4].loadK8s(),l),{c(){n=h(),l.block.c()},m(t,e){s(t,n,e),l.block.m(t,l.anchor=e),l.mount=()=>n.parentNode,l.anchor=n},p(n,o){t=n,l.ctx=t,16&o[0]&&e!==(e=t[4].loadK8s())&&O(e,l)||A(l,t,o)},d(t){t&&u(n),l.block.d(t),l.token=null,l=null}}}function pt(t){let n,e;function l(t,n){return t[30]&&t[30].message?vt:"string"==typeof t[30]?gt:bt}let o=l(t),r=o(t);return{c(){n=d("div"),e=f(">\n            "),r.c(),g(n,"class","notification is-danger mt-2")},m(t,l){s(t,n,l),c(n,e),r.m(n,null)},p(t,e){o===(o=l(t))&&r?r.p(t,e):(r.d(1),r=o(t),r&&(r.c(),r.m(n,null)))},d(t){t&&u(n),r.d()}}}function bt(t){let n,e,l;return{c(){n=f("Failed to list "),e=f(t[1]),l=f(".")},m(t,o){s(t,n,o),s(t,e,o),s(t,l,o)},p(t,n){2&n[0]&&v(e,t[1])},d(t){t&&u(n),t&&u(e),t&&u(l)}}}function gt(t){let n,e=t[30]+"";return{c(){n=f(e)},m(t,e){s(t,n,e)},p(t,l){16&l[0]&&e!==(e=t[30]+"")&&v(n,e)},d(t){t&&u(n)}}}function vt(t){let n,e=t[30].message+"";return{c(){n=f(e)},m(t,e){s(t,n,e)},p(t,l){16&l[0]&&e!==(e=t[30].message+"")&&v(n,e)},d(t){t&&u(n)}}}function kt(t){let n,e,l,o,r,i=t[27],f=[];for(let n=0;n<i.length;n+=1)f[n]=wt(rt(t,i,n));return{c(){n=d("div"),e=d("table"),l=d("thead"),l.innerHTML='<tr><th title="position">#</th> \n                  <th>Name</th> \n                  <th>Public IP</th> \n                  <th>Planetary Network IP</th> \n                  <th>Workers</th> \n                  <th>Details</th> \n                  <th>Delete</th></tr>',o=m(),r=d("tbody");for(let t=0;t<f.length;t+=1)f[t].c();g(e,"class","table"),g(n,"class","table-container mt-2")},m(t,i){s(t,n,i),c(n,e),c(e,l),c(e,o),c(e,r);for(let t=0;t<f.length;t+=1)f[t].m(r,null)},p(t,n){if(8304&n[0]){let e;for(i=t[27],e=0;e<i.length;e+=1){const l=rt(t,i,e);f[e]?f[e].p(l,n):(f[e]=wt(l),f[e].c(),f[e].m(r,null))}for(;e<f.length;e+=1)f[e].d(1);f.length=i.length}},d(t){t&&u(n),a(f,t)}}}function yt(n){let e;return{c(){e=d("td"),e.textContent="-"},m(t,n){s(t,e,n)},p:t,d(t){t&&u(e)}}}function $t(t){let n,e,l=t[28].master.publicIP.ip+"";return{c(){n=d("td"),e=f(l)},m(t,l){s(t,n,l),c(n,e)},p(t,n){16&n[0]&&l!==(l=t[28].master.publicIP.ip+"")&&v(e,l)},d(t){t&&u(n)}}}function wt(t){let n,e,o,r,i,a,h,b,k,y,$,w,x,_,C,P,E,M,I,L,N,S,T,j,K,V,D,H=t[26]+1+"",O=t[28].name+"",A=t[28].master.yggIP+"",F=t[28].workers+"";function R(t,n){return t[28].master.publicIP?$t:yt}let B=R(t),q=B(t);function z(){return t[18](t[28])}function G(){return t[19](t[28])}return{c(){n=d("tr"),e=d("th"),o=f(H),r=m(),i=d("td"),a=f(O),h=m(),q.c(),b=m(),k=d("td"),y=f(A),$=m(),w=d("td"),x=f(F),_=m(),C=d("td"),P=d("button"),E=f("Show Details"),I=m(),L=d("td"),N=d("button"),S=f("Remove"),K=m(),g(P,"class","button is-outlined is-primary"),P.disabled=M=t[5].includes(t[28].name),g(N,"class",T="button is-danger "+(t[5].includes(t[28].name)?"is-loading":"")),N.disabled=j=t[5].includes(t[28].name)},m(t,l){s(t,n,l),c(n,e),c(e,o),c(n,r),c(n,i),c(i,a),c(n,h),q.m(n,null),c(n,b),c(n,k),c(k,y),c(n,$),c(n,w),c(w,x),c(n,_),c(n,C),c(C,P),c(P,E),c(n,I),c(n,L),c(L,N),c(N,S),c(n,K),V||(D=[p(P,"click",z),p(N,"click",G)],V=!0)},p(e,l){t=e,16&l[0]&&O!==(O=t[28].name+"")&&v(a,O),B===(B=R(t))&&q?q.p(t,l):(q.d(1),q=B(t),q&&(q.c(),q.m(n,b))),16&l[0]&&A!==(A=t[28].master.yggIP+"")&&v(y,A),16&l[0]&&F!==(F=t[28].workers+"")&&v(x,F),48&l[0]&&M!==(M=t[5].includes(t[28].name))&&(P.disabled=M),48&l[0]&&T!==(T="button is-danger "+(t[5].includes(t[28].name)?"is-loading":""))&&g(N,"class",T),48&l[0]&&j!==(j=t[5].includes(t[28].name))&&(N.disabled=j)},d(t){t&&u(n),q.d(),V=!1,l(D)}}}function xt(n){let e;return{c(){e=d("div"),e.textContent="> Loading...",g(e,"class","notification is-info mt-2")},m(t,n){s(t,e,n)},p:t,d(t){t&&u(e)}}}function _t(t){let n,e,l={ctx:t,current:null,token:null,hasCatch:!0,pending:Tt,then:It,catch:Ct,value:27,error:30};return O(e="Caprover"===t[1]||"caprover"===t[0]?t[4].loadCaprover():t[4].loadVm(),l),{c(){n=h(),l.block.c()},m(t,e){s(t,n,e),l.block.m(t,l.anchor=e),l.mount=()=>n.parentNode,l.anchor=n},p(n,o){t=n,l.ctx=t,19&o[0]&&e!==(e="Caprover"===t[1]||"caprover"===t[0]?t[4].loadCaprover():t[4].loadVm())&&O(e,l)||A(l,t,o)},d(t){t&&u(n),l.block.d(t),l.token=null,l=null}}}function Ct(t){let n,e;function l(t,n){return t[30]&&t[30].message?Mt:"string"==typeof t[30]?Et:Pt}let o=l(t),r=o(t);return{c(){n=d("div"),e=f(">\n            "),r.c(),g(n,"class","notification is-danger mt-2")},m(t,l){s(t,n,l),c(n,e),r.m(n,null)},p(t,e){o===(o=l(t))&&r?r.p(t,e):(r.d(1),r=o(t),r&&(r.c(),r.m(n,null)))},d(t){t&&u(n),r.d()}}}function Pt(t){let n,e,l;return{c(){n=f("Failed to list "),e=f(t[1]),l=f(".")},m(t,o){s(t,n,o),s(t,e,o),s(t,l,o)},p(t,n){2&n[0]&&v(e,t[1])},d(t){t&&u(n),t&&u(e),t&&u(l)}}}function Et(t){let n,e=t[30]+"";return{c(){n=f(e)},m(t,e){s(t,n,e)},p(t,l){19&l[0]&&e!==(e=t[30]+"")&&v(n,e)},d(t){t&&u(n)}}}function Mt(t){let n,e=t[30].message+"";return{c(){n=f(e)},m(t,e){s(t,n,e)},p(t,l){19&l[0]&&e!==(e=t[30].message+"")&&v(n,e)},d(t){t&&u(n)}}}function It(t){let n,e,l,o,r,i=t[27],f=[];for(let n=0;n<i.length;n+=1)f[n]=St(ot(t,i,n));return{c(){n=d("div"),e=d("table"),l=d("thead"),l.innerHTML='<tr><th title="position">#</th> \n                  <th>Name</th> \n                  <th>Public IP</th> \n                  <th>Planetary Network IP</th> \n                  <th>Flist</th> \n                  <th>Details</th> \n                  <th>Delete</th></tr>',o=m(),r=d("tbody");for(let t=0;t<f.length;t+=1)f[t].c();g(e,"class","table"),g(n,"class","table-container mt-2")},m(t,i){s(t,n,i),c(n,e),c(e,l),c(e,o),c(e,r);for(let t=0;t<f.length;t+=1)f[t].m(r,null)},p(t,n){if(8307&n[0]){let e;for(i=t[27],e=0;e<i.length;e+=1){const l=ot(t,i,e);f[e]?f[e].p(l,n):(f[e]=St(l),f[e].c(),f[e].m(r,null))}for(;e<f.length;e+=1)f[e].d(1);f.length=i.length}},d(t){t&&u(n),a(f,t)}}}function Lt(n){let e;return{c(){e=d("td"),e.textContent="-"},m(t,n){s(t,e,n)},p:t,d(t){t&&u(e)}}}function Nt(t){let n,e,l=t[28].publicIP.ip+"";return{c(){n=d("td"),e=f(l)},m(t,l){s(t,n,l),c(n,e)},p(t,n){19&n[0]&&l!==(l=t[28].publicIP.ip+"")&&v(e,l)},d(t){t&&u(n)}}}function St(t){let n,e,o,r,i,a,h,b,k,y,$,w,x,_,C,P,E,M,I,L,N,S,T,j,K,V,D,H=t[26]+1+"",O=t[28].name+"",A=t[28].yggIP+"",F=t[28].flist+"";function R(t,n){return t[28].publicIP?Nt:Lt}let B=R(t),q=B(t);function z(){return t[20](t[28])}function G(){return t[21](t[28])}return{c(){n=d("tr"),e=d("th"),o=f(H),r=m(),i=d("td"),a=f(O),h=m(),q.c(),b=m(),k=d("td"),y=f(A),$=m(),w=d("td"),x=f(F),_=m(),C=d("td"),P=d("button"),E=f("Show Details"),I=m(),L=d("td"),N=d("button"),S=f("Remove"),K=m(),g(P,"class","button is-outlined is-primary"),P.disabled=M=t[5].includes(t[28].name),g(N,"class",T="button is-danger "+(t[5].includes(t[28].name)?"is-loading":"")),N.disabled=j=t[5].includes(t[28].name)},m(t,l){s(t,n,l),c(n,e),c(e,o),c(n,r),c(n,i),c(i,a),c(n,h),q.m(n,null),c(n,b),c(n,k),c(k,y),c(n,$),c(n,w),c(w,x),c(n,_),c(n,C),c(C,P),c(P,E),c(n,I),c(n,L),c(L,N),c(N,S),c(n,K),V||(D=[p(P,"click",z),p(N,"click",G)],V=!0)},p(e,l){t=e,19&l[0]&&O!==(O=t[28].name+"")&&v(a,O),B===(B=R(t))&&q?q.p(t,l):(q.d(1),q=B(t),q&&(q.c(),q.m(n,b))),19&l[0]&&A!==(A=t[28].yggIP+"")&&v(y,A),19&l[0]&&F!==(F=t[28].flist+"")&&v(x,F),51&l[0]&&M!==(M=t[5].includes(t[28].name))&&(P.disabled=M),51&l[0]&&T!==(T="button is-danger "+(t[5].includes(t[28].name)?"is-loading":""))&&g(N,"class",T),51&l[0]&&j!==(j=t[5].includes(t[28].name))&&(N.disabled=j)},d(t){t&&u(n),q.d(),V=!1,l(D)}}}function Tt(n){let e;return{c(){e=d("div"),e.textContent="> Loading...",g(e,"class","notification is-info mt-2")},m(t,n){s(t,e,n)},p:t,d(t){t&&u(e)}}}function jt(t){let n,e,l,o=t[26]+1+"";return{c(){n=f("Profile "),e=f(o),l=m()},m(t,o){s(t,n,o),s(t,e,o),s(t,l,o)},p(t,n){128&n[0]&&o!==(o=t[26]+1+"")&&v(e,o)},d(t){t&&u(n),t&&u(e),t&&u(l)}}}function Kt(t){let n,e,l=t[8].name+"";return{c(){n=f(l),e=m()},m(t,l){s(t,n,l),s(t,e,l)},p(t,e){128&e[0]&&l!==(l=t[8].name+"")&&v(n,l)},d(t){t&&u(n),t&&u(e)}}}function Vt(t,n){let e,l;function o(t,n){return t[8].name?Kt:jt}let r=o(n),i=r(n);return{key:t,first:null,c(){e=d("option"),i.c(),e.__value=l=n[26],e.value=e.__value,this.first=e},m(t,n){s(t,e,n),i.m(e,null)},p(t,c){r===(r=o(n=t))&&i?i.p(n,c):(i.d(1),i=r(n),i&&(i.c(),i.m(e,null))),128&c[0]&&l!==(l=n[26])&&(e.__value=l,e.value=e.__value)},d(t){t&&u(e),i.d()}}}function Dt(t){let n,e,l,o,r,i,a,h,b,y;return{c(){n=d("div"),e=d("div"),l=m(),o=d("div"),r=d("div"),i=f(t[6]),a=m(),h=d("button"),g(e,"class","modal-background"),g(r,"class","box"),k(r,"white-space","pre"),g(o,"class","modal-content"),g(h,"class","modal-close is-large"),g(h,"aria-label","close"),g(n,"class","modal is-active")},m(u,d){s(u,n,d),c(n,e),c(n,l),c(n,o),c(o,r),c(r,i),c(n,a),c(n,h),b||(y=p(h,"click",t[22]),b=!0)},p(t,n){64&n[0]&&v(i,t[6])},d(t){t&&u(n),b=!1,y()}}}function Ht(n){let e,l,o,r,i,a,p,b,v,y=("k8s"===n[0]||"vm"===n[0]||"caprover"===n[0])&&st(n);function $(t,n){return t[2]?dt:t[3]?ut:at}let w=$(n),x=w(n),_=n[6]&&Dt(n);return{c(){e=d("div"),l=d("section"),o=d("h4"),r=f("Deployment List\n      "),y&&y.c(),i=m(),a=d("hr"),p=m(),x.c(),b=m(),_&&_.c(),v=h(),this.c=t,g(o,"class","is-size-4 mb-4"),g(l,"class","box"),k(e,"padding","15px")},m(t,n){s(t,e,n),c(e,l),c(l,o),c(o,r),y&&y.m(o,null),c(l,i),c(l,a),c(l,p),x.m(l,null),s(t,b,n),_&&_.m(t,n),s(t,v,n)},p(t,n){"k8s"===t[0]||"vm"===t[0]||"caprover"===t[0]?y?y.p(t,n):(y=st(t),y.c(),y.m(o,null)):y&&(y.d(1),y=null),w===(w=$(t))&&x?x.p(t,n):(x.d(1),x=w(t),x&&(x.c(),x.m(l,null))),t[6]?_?_.p(t,n):(_=Dt(t),_.c(),_.m(v.parentNode,v)):_&&(_.d(1),_=null)},i:t,o:t,d(t){t&&u(e),y&&y.d(),x.d(),t&&u(b),_&&_.d(t),t&&u(v)}}}function Ot(t,n,e){let l,o,r;var c;let{tab:s}=n;let u,a="Kubernetes",d=!1,f=!1;const m=null===(c=window.configs)||void 0===c?void 0:c.baseConfig;i(t,m,(t=>e(15,r=t)));let h=0;let p=[];function b(t,n){e(5,p=[...p,n]);const l=p.length-1;(function(t,n,e){const{mnemonics:l,networkEnv:o,storeSecret:r}=t,i=new lt(0,""),c=new et(o,l,r,i,void 0,"tfkvstore");return c.connect().then((()=>c[n].delete({name:e})))})(o,t,n).then((t=>{console.log("Removed",t),0===t.deleted.length&&(p.splice(l,1),e(5,p)),function(){const t=a;e(1,a=""),requestAnimationFrame((()=>{e(1,a=t)}))}()})).catch((t=>{console.log("Error while removing",t)}))}let g="";return t.$$set=t=>{"tab"in t&&e(0,s=t.tab)},t.$$.update=()=>{32768&t.$$.dirty[0]&&e(7,l=r),49152&t.$$.dirty[0]&&e(8,o=r[h])},[s,a,d,f,u,p,g,l,o,[{label:"Kubernetes"},{label:"Virtual Machines"},{label:"Caprover"}],m,function(){e(3,f=!0),e(2,d=!0),X.init(o).then((t=>{e(4,u=t)})).finally((()=>e(2,d=!1)))},t=>e(14,h=t.target.selectedIndex),b,h,r,()=>e(3,f=!1),t=>e(1,a=t.label),t=>{e(6,g=JSON.stringify(t.details,void 0,4))},t=>b("k8s",t.name),t=>{e(6,g=JSON.stringify(t,void 0,4))},t=>b("machines",t.name),()=>e(6,g="")]}!function(t,n){try{customElements.define(`tf-${t}`,n)}catch(n){console.warn(`Element with name '${t}' already defined.`)}}("deployedlist",class extends D{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");.table{width:100%}</style>',q(this,{target:this.shadowRoot,props:y(this.attributes),customElement:!0},Ot,Ht,r,{tab:0},null,[-1,-1]),t&&(t.target&&s(t.target,this,t.anchor),t.props&&(this.$set(t.props),T()))}static get observedAttributes(){return["tab"]}get tab(){return this.$$.ctx[0]}set tab(t){this.$$set({tab:t}),T()}})}();
