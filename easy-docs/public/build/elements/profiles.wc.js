!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(e,n,i){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const i=e.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}(n,i))}function l(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function p(){return u(" ")}function f(){return u("")}function h(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function m(t){return function(e){return e.preventDefault(),t.call(this,e)}}function b(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return""===t?null:+t}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}function x(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function w(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e)return void(i.selected=!0)}t.selectedIndex=-1}function k(t){const e={};for(const n of t)e[n.name]=n.value;return e}let _;function E(t){_=t}function S(){if(!_)throw new Error("Function called outside component initialization");return _}function C(){const t=S();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const o=function(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}(e,n);i.slice().forEach((e=>{e.call(t,o)}))}}}function M(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const P=[],T=[],A=[],L=[],j=Promise.resolve();let B=!1;function H(t){A.push(t)}function R(t){L.push(t)}let N=!1;const I=new Set;function z(){if(!N){N=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];E(e),Y(e.$$)}for(E(null),P.length=0;T.length;)T.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];I.has(e)||(I.add(e),e())}A.length=0}while(P.length);for(;L.length;)L.pop()();B=!1,N=!1,I.clear()}}function Y(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const V=new Set;let X,F;function K(){X={r:0,c:[],p:X}}function U(){X.r||i(X.c),X=X.p}function q(t,e){t&&t.i&&(V.delete(t),t.i(e))}function D(t,e,n,i){if(t&&t.o){if(V.has(t))return;V.add(t),X.c.push((()=>{V.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}function O(t,e){t.d(1),e.delete(t.key)}function G(t,e){D(t,1,1,(()=>{e.delete(t.key)}))}function J(t,e,n,i,o,s,r,l,a,c,d,u){let p=t.length,f=s.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const b=[],g=new Map,v=new Map;for(h=f;h--;){const t=u(o,s,h),l=n(t);let a=r.get(l);a?i&&a.p(t,e):(a=c(l,t),a.c()),g.set(l,b[h]=a),l in m&&v.set(l,Math.abs(h-m[l]))}const y=new Set,$=new Set;function x(t){q(t,1),t.m(l,d),r.set(t.key,t),d=t.first,f--}for(;p&&f;){const e=b[f-1],n=t[p-1],i=e.key,o=n.key;e===n?(d=e.first,p--,f--):g.has(o)?!r.has(i)||y.has(i)?x(e):$.has(o)?p--:v.get(i)>v.get(o)?($.add(i),x(e)):(y.add(o),p--):(a(n,r),p--)}for(;p--;){const e=t[p];g.has(e.key)||a(e,r)}for(;f;)x(b[f-1]);return b}function Q(t,e,n){const i=t.$$.props[e];void 0!==i&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function W(t){t&&t.c()}function Z(t,n,s,r){const{fragment:l,on_mount:a,on_destroy:c,after_update:d}=t.$$;l&&l.m(n,s),r||H((()=>{const n=a.map(e).filter(o);c?c.push(...n):i(n),t.$$.on_mount=[]})),d.forEach(H)}function tt(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&(P.push(t),B||(B=!0,j.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,o,s,r,l,a,d,u=[-1]){const p=_;E(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(p?p.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:o.target||p.$$.root};d&&d(f.root);let h=!1;if(f.ctx=s?s(e,o.props||{},((t,n,...i)=>{const o=i.length?i[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),h&&et(e,t)),n})):[],f.update(),h=!0,i(f.before_update),f.fragment=!!r&&r(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();o.intro&&q(e.$$.fragment),Z(e,o.target,o.anchor,o.customElement),z()}E(p)}var it,ot,st,rt;"function"==typeof HTMLElement&&(F=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(o);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){i(this.$$.on_disconnect)}$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});const{GridClient:lt}=null!==(ot=null===(it=window.configs)||void 0===it?void 0:it.grid3_client)&&void 0!==ot?ot:{},{HTTPMessageBusClient:at}=null!==(rt=null===(st=window.configs)||void 0===st?void 0:st.client)&&void 0!==rt?rt:{};var ct,dt,ut,pt;const{HTTPMessageBusClient:ft}=null!==(dt=null===(ct=window.configs)||void 0===ct?void 0:ct.client)&&void 0!==dt?dt:{},{GridClient:ht}=null!==(pt=null===(ut=window.configs)||void 0===ut?void 0:ut.grid3_client)&&void 0!==pt?pt:{};async function mt(t){if(!t)return null;const{networkEnv:e,mnemonics:n,storeSecret:i}=t,o=new ht(e,n,i,new ft(0,""),void 0,"tfkvstore");return o.connect().then((()=>o.balance.getMyBalance())).then((async({free:t})=>(o.disconnect(),t)))}var bt,gt=new Uint8Array(16);function vt(){if(!bt&&!(bt="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return bt(gt)}var yt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function $t(t){return"string"==typeof t&&yt.test(t)}for(var xt=[],wt=0;wt<256;++wt)xt.push((wt+256).toString(16).substr(1));function kt(t,e,n){var i=(t=t||{}).random||(t.rng||vt)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=i[o];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(xt[t[e+0]]+xt[t[e+1]]+xt[t[e+2]]+xt[t[e+3]]+"-"+xt[t[e+4]]+xt[t[e+5]]+"-"+xt[t[e+6]]+xt[t[e+7]]+"-"+xt[t[e+8]]+xt[t[e+9]]+"-"+xt[t[e+10]]+xt[t[e+11]]+xt[t[e+12]]+xt[t[e+13]]+xt[t[e+14]]+xt[t[e+15]]).toLowerCase();if(!$t(n))throw TypeError("Stringified UUID is invalid");return n}(i)}function _t(t,e,n){const i=t.slice();return i[21]=e[n],i}function Et(t){let e,n,i;function o(t,e){return null==n&&(n=!!t[6]()),n?Mt:"checkbox"===t[1].type?Ct:"select"===t[1].type?St:void 0}let s=o(t),r=s&&s(t),u=t[1].tooltip&&Nt(t);return{c(){e=d("div"),r&&r.c(),i=p(),u&&u.c(),g(e,"class","tooltip mb-2")},m(t,n){a(t,e,n),r&&r.m(e,null),l(e,i),u&&u.m(e,null)},p(t,n){s===(s=o(t))&&r?r.p(t,n):(r&&r.d(1),r=s&&s(t),r&&(r.c(),r.m(e,i))),t[1].tooltip?u?u.p(t,n):(u=Nt(t),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(t){t&&c(e),r&&r.d(),u&&u.d()}}}function St(t){let e,n,o,s,r,u,f,m,b=[],v=new Map,y=t[1].label&&Pt(t),$=t[1].options;const k=t=>t[21].value;for(let e=0;e<$.length;e+=1){let n=_t(t,$,e),i=k(n);v.set(i,b[e]=Tt(i,n))}let _=(t[1].error||t[2])&&At(t);return{c(){y&&y.c(),e=p(),n=d("div"),o=d("select");for(let t=0;t<b.length;t+=1)b[t].c();r=p(),_&&_.c(),o.disabled=s=t[1].disabled,x(o,"width","100%"),void 0===t[0]&&H((()=>t[19].call(o))),g(n,"class",u="select mb-2"+(t[1].error||t[2]?" is-danger":"")),x(n,"width","100%"),g(n,"id",t[5])},m(i,s){y&&y.m(i,s),a(i,e,s),a(i,n,s),l(n,o);for(let t=0;t<b.length;t+=1)b[t].m(o,null);w(o,t[0]),l(n,r),_&&_.m(n,null),f||(m=[h(o,"change",t[19]),h(o,"change",t[7])],f=!0)},p(t,i){t[1].label?y?y.p(t,i):(y=Pt(t),y.c(),y.m(e.parentNode,e)):y&&(y.d(1),y=null),2&i&&($=t[1].options,b=J(b,i,k,1,t,$,v,o,O,Tt,null,_t)),2&i&&s!==(s=t[1].disabled)&&(o.disabled=s),3&i&&w(o,t[0]),t[1].error||t[2]?_?_.p(t,i):(_=At(t),_.c(),_.m(n,null)):_&&(_.d(1),_=null),6&i&&u!==(u="select mb-2"+(t[1].error||t[2]?" is-danger":""))&&g(n,"class",u)},d(t){y&&y.d(t),t&&c(e),t&&c(n);for(let t=0;t<b.length;t+=1)b[t].d();_&&_.d(),f=!1,i(m)}}}function Ct(t){let e,n,o,s,r,f,m,b,v,$,w,k=t[1].label+"";return{c(){e=d("div"),n=d("label"),o=d("input"),r=p(),f=d("span"),m=p(),b=d("label"),v=u(k),g(o,"class","switch__input"),g(o,"type","checkbox"),g(o,"id",t[5]),o.disabled=s=t[1].disabled,g(f,"class","slider"),g(n,"class","switch"),g(b,"for",t[5]),g(b,"class","label ml-2"),x(b,"cursor","pointer"),x(e,"display","flex"),x(e,"align-items","center"),g(e,"class","mb-2")},m(i,s){a(i,e,s),l(e,n),l(n,o),o.checked=t[0],l(n,r),l(n,f),l(e,m),l(e,b),l(b,v),$||(w=[h(o,"change",t[18]),h(o,"input",t[11])],$=!0)},p(t,e){2&e&&s!==(s=t[1].disabled)&&(o.disabled=s),3&e&&(o.checked=t[0]),2&e&&k!==(k=t[1].label+"")&&y(v,k)},d(t){t&&c(e),$=!1,i(w)}}}function Mt(t){let e,n,i,o,s,r,f,h=t[1].label+"";function m(t,e){return"textarea"===t[1].type?Ht:"text"===t[1].type?Bt:"number"===t[1].type?jt:"password"===t[1].type?Lt:void 0}let b=m(t),v=b&&b(t),$=(t[1].error||t[2])&&Rt(t);return{c(){e=d("div"),n=d("p"),i=u(h),o=p(),s=d("div"),v&&v.c(),f=p(),$&&$.c(),g(n,"class","label"),g(s,"class",r="control"+("password"===t[1].type?" has-icons-right":"")),g(e,"class","field"),g(e,"id",t[5])},m(t,r){a(t,e,r),l(e,n),l(n,i),l(e,o),l(e,s),v&&v.m(s,null),l(e,f),$&&$.m(e,null)},p(t,n){2&n&&h!==(h=t[1].label+"")&&y(i,h),b===(b=m(t))&&v?v.p(t,n):(v&&v.d(1),v=b&&b(t),v&&(v.c(),v.m(s,null))),2&n&&r!==(r="control"+("password"===t[1].type?" has-icons-right":""))&&g(s,"class",r),t[1].error||t[2]?$?$.p(t,n):($=Rt(t),$.c(),$.m(e,null)):$&&($.d(1),$=null)},d(t){t&&c(e),v&&v.d(),$&&$.d()}}}function Pt(t){let e,n,i=t[1].label+"";return{c(){e=d("p"),n=u(i),g(e,"class","label")},m(t,i){a(t,e,i),l(e,n)},p(t,e){2&e&&i!==(i=t[1].label+"")&&y(n,i)},d(t){t&&c(e)}}}function Tt(t,e){let n,i,o,s,r,f,h=e[21].label+"";return{key:t,first:null,c(){n=d("option"),i=u(h),o=p(),n.__value=s=e[21].value,n.value=n.__value,n.selected=r=e[21].selected,n.disabled=f=e[21].disabled,this.first=n},m(t,e){a(t,n,e),l(n,i),l(n,o)},p(t,o){e=t,2&o&&h!==(h=e[21].label+"")&&y(i,h),2&o&&s!==(s=e[21].value)&&(n.__value=s,n.value=n.__value),2&o&&r!==(r=e[21].selected)&&(n.selected=r),2&o&&f!==(f=e[21].disabled)&&(n.disabled=f)},d(t){t&&c(n)}}}function At(t){let e,n,i=(t[1].error||t[2])+"";return{c(){e=d("p"),n=u(i),g(e,"class","help is-danger")},m(t,i){a(t,e,i),l(e,n)},p(t,e){6&e&&i!==(i=(t[1].error||t[2])+"")&&y(n,i)},d(t){t&&c(e)}}}function Lt(t){let e,n,o,s,r,u,f,m,b,v;return{c(){e=d("input"),r=p(),u=d("span"),f=d("i"),g(e,"type","password"),g(e,"class",n="input"+(t[1].error||t[2]?" is-danger":"")),g(e,"placeholder",o=t[1].placeholder),e.disabled=s=t[1].disabled,g(f,"class",m="fas "+(t[3]?"far fa-eye-slash":"fa-eye")),x(u,"position","absolute"),x(u,"top","50%"),x(u,"right","15px"),x(u,"transform","translateY(-50%)"),x(u,"cursor","pointer")},m(n,i){a(n,e,i),$(e,t[0]),t[16](e),a(n,r,i),a(n,u,i),l(u,f),b||(v=[h(e,"input",t[15]),h(e,"input",t[8]),h(u,"click",t[17])],b=!0)},p(t,i){6&i&&n!==(n="input"+(t[1].error||t[2]?" is-danger":""))&&g(e,"class",n),2&i&&o!==(o=t[1].placeholder)&&g(e,"placeholder",o),2&i&&s!==(s=t[1].disabled)&&(e.disabled=s),3&i&&e.value!==t[0]&&$(e,t[0]),8&i&&m!==(m="fas "+(t[3]?"far fa-eye-slash":"fa-eye"))&&g(f,"class",m)},d(n){n&&c(e),t[16](null),n&&c(r),n&&c(u),b=!1,i(v)}}}function jt(t){let e,n,o,s,r,l;return{c(){e=d("input"),g(e,"type","number"),g(e,"class",n="input"+(t[1].error||t[2]?" is-danger":"")),g(e,"placeholder",o=t[1].placeholder),e.disabled=s=t[1].disabled},m(n,i){a(n,e,i),$(e,t[0]),r||(l=[h(e,"input",t[14]),h(e,"input",t[8])],r=!0)},p(t,i){6&i&&n!==(n="input"+(t[1].error||t[2]?" is-danger":""))&&g(e,"class",n),2&i&&o!==(o=t[1].placeholder)&&g(e,"placeholder",o),2&i&&s!==(s=t[1].disabled)&&(e.disabled=s),3&i&&v(e.value)!==t[0]&&$(e,t[0])},d(t){t&&c(e),r=!1,i(l)}}}function Bt(t){let e,n,o,s,r,l;return{c(){e=d("input"),g(e,"type","text"),g(e,"class",n="input"+(t[1].error||t[2]?" is-danger":"")),g(e,"placeholder",o=t[1].placeholder),e.disabled=s=t[1].disabled},m(n,i){a(n,e,i),$(e,t[0]),r||(l=[h(e,"input",t[13]),h(e,"input",t[8])],r=!0)},p(t,i){6&i&&n!==(n="input"+(t[1].error||t[2]?" is-danger":""))&&g(e,"class",n),2&i&&o!==(o=t[1].placeholder)&&g(e,"placeholder",o),2&i&&s!==(s=t[1].disabled)&&(e.disabled=s),3&i&&e.value!==t[0]&&$(e,t[0])},d(t){t&&c(e),r=!1,i(l)}}}function Ht(t){let e,n,o,s,r,l;return{c(){e=d("textarea"),g(e,"class",n="textarea"+(t[1].error||t[2]?" is-danger":"")),g(e,"placeholder",o=t[1].placeholder),e.disabled=s=t[1].disabled},m(n,i){a(n,e,i),$(e,t[0]),r||(l=[h(e,"input",t[12]),h(e,"input",t[8])],r=!0)},p(t,i){6&i&&n!==(n="textarea"+(t[1].error||t[2]?" is-danger":""))&&g(e,"class",n),2&i&&o!==(o=t[1].placeholder)&&g(e,"placeholder",o),2&i&&s!==(s=t[1].disabled)&&(e.disabled=s),3&i&&$(e,t[0])},d(t){t&&c(e),r=!1,i(l)}}}function Rt(t){let e,n,i=(t[1].error||t[2])+"";return{c(){e=d("p"),n=u(i),g(e,"class","help is-danger")},m(t,i){a(t,e,i),l(e,n)},p(t,e){6&e&&i!==(i=(t[1].error||t[2])+"")&&y(n,i)},d(t){t&&c(e)}}}function Nt(t){let e,n,i=t[1].tooltip+"";return{c(){e=d("span"),n=u(i),g(e,"class","tooltip__text")},m(t,i){a(t,e,i),l(e,n)},p(t,e){2&e&&i!==(i=t[1].tooltip+"")&&y(n,i)},d(t){t&&c(e)}}}function It(e){let n,i,o,s=e[1]&&Et(e);return{c(){n=d("div"),i=p(),s&&s.c(),o=f(),this.c=t},m(t,r){a(t,n,r),n.innerHTML=e[9],a(t,i,r),s&&s.m(t,r),a(t,o,r)},p(t,[e]){t[1]?s?s.p(t,e):(s=Et(t),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null)},i:t,o:t,d(t){t&&c(n),t&&c(i),s&&s.d(t),t&&c(o)}}}function zt(t,e,n){const i=C();let{field:o}=e,{data:s}=e,{selected:r=0}=e;const l=kt();let a;let c,d=!1;return t.$$set=t=>{"field"in t&&n(1,o=t.field),"data"in t&&n(0,s=t.data),"selected"in t&&n(10,r=t.selected)},[s,o,a,d,c,l,()=>["text","number","password","textarea"].includes(o.type),function(t){i("input",t);const e=t.target;n(10,r=e.selectedIndex)},function(t){if(o.validator){const e=t.target;n(2,a=o.validator(e.value))}i("input",t)},'\n<style>\n  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");\n\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n\n  .switch .switch__input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 34px;\n  }\n\n  .slider:before {\n    position: absolute;\n    content: "";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n\n  .switch__input:checked + .slider {\n    background-color: #2196f3;\n  }\n\n  .switch__input:checked + .slider {\n    box-shadow: 0 0 1px #2196f3;\n  }\n\n  .switch__input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n\n  .tooltip {\n    position: relative;\n  }\n\n  .tooltip__text {\n    position: absolute;\n    top: -20px;\n    left: 50%;\n    padding: 10px 15px;\n    border-radius: 5px;\n    background-color: rgba(51, 51, 51, 0.9);\n    color: white;\n    z-index: 9;\n    max-width: min(1000px, calc(100% - 30px));\n    display: block;\n\n    transition-property: opacity, transform, visibility;\n    transition-timing-function: ease;\n    transition-duration: 300ms;\n    pointer-events: none;\n    opacity: 0;\n    visibility: hidden;\n    transform: translateX(-50%) translateY(20px) scale(0);\n  }\n\n  .tooltip:hover > .tooltip__text {\n    pointer-events: all;\n    opacity: 1;\n    visibility: visible;\n    transform: translateX(-50%) translateY(0) scale(1);\n  }\n</style>\n',r,function(e){M.call(this,t,e)},function(){s=this.value,n(0,s),n(1,o)},function(){s=this.value,n(0,s),n(1,o)},function(){s=v(this.value),n(0,s),n(1,o)},function(){s=this.value,n(0,s),n(1,o)},function(t){T[t?"unshift":"push"]((()=>{c=t,n(4,c)}))},()=>{n(3,d=!d),n(4,c.type=d?"text":"password",c)},function(){s=this.checked,n(0,s),n(1,o)},function(){s=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(0,s),n(1,o)}]}class Yt extends F{constructor(t){super(),nt(this,{target:this.shadowRoot,props:k(this.attributes),customElement:!0},zt,It,s,{field:1,data:0,selected:10},null),t&&(t.target&&a(t.target,this,t.anchor),t.props&&(this.$set(t.props),z()))}static get observedAttributes(){return["field","data","selected"]}get field(){return this.$$.ctx[1]}set field(t){this.$$set({field:t}),z()}get data(){return this.$$.ctx[0]}set data(t){this.$$set({data:t}),z()}get selected(){return this.$$.ctx[10]}set selected(t){this.$$set({selected:t}),z()}}function Vt(t,e,n){const i=t.slice();return i[7]=e[n],i[9]=n,i}function Xt(t){let e,n=[],i=new Map,o=t[1];const s=t=>t[7].label;for(let e=0;e<o.length;e+=1){let r=Vt(t,o,e),l=s(r);i.set(l,n[e]=Kt(l,r))}return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=f()},m(t,i){for(let e=0;e<n.length;e+=1)n[e].m(t,i);a(t,e,i)},p(t,r){51&r&&(o=t[1],n=J(n,r,s,1,t,o,i,e.parentNode,O,Kt,e,Vt))},d(t){for(let e=0;e<n.length;e+=1)n[e].d(t);t&&c(e)}}}function Ft(t){let e,n,i;return{c(){e=d("button"),g(e,"class","ml-2 is-small delete")},m(s,r){a(s,e,r),n||(i=h(e,"click",b(m((function(){o(t[4](t[9]))&&t[4](t[9]).apply(this,arguments)})))),n=!0)},p(e,n){t=e},d(t){t&&c(e),n=!1,i()}}}function Kt(t,e){let n,i,s,r,f,b,v,$,x,w=e[7].label+"",k=e[7].removable&&Ft(e);return{key:t,first:null,c(){n=d("li"),i=d("a"),s=d("span"),r=u(w),f=p(),k&&k.c(),b=p(),g(i,"href","#!"),g(n,"class",v=e[0]===e[7].value?"is-active":""),this.first=n},m(t,c){a(t,n,c),l(n,i),l(i,s),l(s,r),l(i,f),k&&k.m(i,null),l(n,b),$||(x=h(i,"click",m((function(){o(e[5].bind(void 0,e[7].value))&&e[5].bind(void 0,e[7].value).apply(this,arguments)}))),$=!0)},p(t,o){e=t,2&o&&w!==(w=e[7].label+"")&&y(r,w),e[7].removable?k?k.p(e,o):(k=Ft(e),k.c(),k.m(i,null)):k&&(k.d(1),k=null),3&o&&v!==(v=e[0]===e[7].value?"is-active":"")&&g(n,"class",v)},d(t){t&&c(n),k&&k.d(),$=!1,x()}}}function Ut(e){let n,i,o,s,r=e[1]&&Xt(e);return{c(){n=d("div"),i=d("ul"),r&&r.c(),this.c=t,g(i,"style",o=e[3]?"pointer-events: none; cursor: default;":""),g(n,"class",s="tabs "+(e[2]?"is-centered":""))},m(t,e){a(t,n,e),l(n,i),r&&r.m(i,null)},p(t,[e]){t[1]?r?r.p(t,e):(r=Xt(t),r.c(),r.m(i,null)):r&&(r.d(1),r=null),8&e&&o!==(o=t[3]?"pointer-events: none; cursor: default;":"")&&g(i,"style",o),4&e&&s!==(s="tabs "+(t[2]?"is-centered":""))&&g(n,"class",s)},i:t,o:t,d(t){t&&c(n),r&&r.d()}}}function qt(t,e,n){const i=C();let{tabs:o}=e,{active:s}=e,{centered:r=!0}=e,{disabled:l=!1}=e;return t.$$set=t=>{"tabs"in t&&n(1,o=t.tabs),"active"in t&&n(0,s=t.active),"centered"in t&&n(2,r=t.centered),"disabled"in t&&n(3,l=t.disabled)},[s,o,r,l,t=>()=>i("removed",t),function(t){s!==t&&(n(0,s=t),i("select",t))}]}customElements.define("tf-input",Yt);class Dt extends F{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");</style>',nt(this,{target:this.shadowRoot,props:k(this.attributes),customElement:!0},qt,Ut,s,{tabs:1,active:0,centered:2,disabled:3},null),t&&(t.target&&a(t.target,this,t.anchor),t.props&&(this.$set(t.props),z()))}static get observedAttributes(){return["tabs","active","centered","disabled"]}get tabs(){return this.$$.ctx[1]}set tabs(t){this.$$set({tabs:t}),z()}get active(){return this.$$.ctx[0]}set active(t){this.$$set({active:t}),z()}get centered(){return this.$$.ctx[2]}set centered(t){this.$$set({centered:t}),z()}get disabled(){return this.$$.ctx[3]}set disabled(t){this.$$set({disabled:t}),z()}}function Ot(e){let n,i,o;return{c(){n=d("div"),i=u(e[1]),this.c=t,g(n,"class",o="notification is-"+e[0])},m(t,e){a(t,n,e),l(n,i)},p(t,[e]){2&e&&y(i,t[1]),1&e&&o!==(o="notification is-"+t[0])&&g(n,"class",o)},i:t,o:t,d(t){t&&c(n)}}}function Gt(t,e,n){let{type:i}=e,{message:o}=e;return t.$$set=t=>{"type"in t&&n(0,i=t.type),"message"in t&&n(1,o=t.message)},[i,o]}customElements.define("tf-tabs",Dt);class Jt extends F{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");</style>',nt(this,{target:this.shadowRoot,props:k(this.attributes),customElement:!0},Gt,Ot,s,{type:0,message:1},null),t&&(t.target&&a(t.target,this,t.anchor),t.props&&(this.$set(t.props),z()))}static get observedAttributes(){return["type","message"]}get type(){return this.$$.ctx[0]}set type(t){this.$$set({type:t}),z()}get message(){return this.$$.ctx[1]}set message(t){this.$$set({message:t}),z()}}function Qt(t,e,n){const i=t.slice();return i[29]=e[n],i[30]=e,i[31]=n,i}function Wt(t){let e,n,i,o,s=t[6].name+"";function r(t,e){return t[7]?te:t[6].balance?Zt:void 0}let f=r(t),h=f&&f(t);return{c(){e=d("div"),n=d("p"),i=u(s),o=p(),h&&h.c(),g(e,"class","profile-active")},m(t,s){a(t,e,s),l(e,n),l(n,i),l(e,o),h&&h.m(e,null)},p(t,n){64&n[0]&&s!==(s=t[6].name+"")&&y(i,s),f===(f=r(t))&&h?h.p(t,n):(h&&h.d(1),h=f&&f(t),h&&(h.c(),h.m(e,null)))},d(t){t&&c(e),h&&h.d()}}}function Zt(t){let e,n,i,o,s,r=t[6].balance+"";return{c(){e=d("p"),n=u("Balance: "),i=d("span"),o=u(r),s=u(" TFT")},m(t,r){a(t,e,r),l(e,n),l(e,i),l(i,o),l(e,s)},p(t,e){64&e[0]&&r!==(r=t[6].balance+"")&&y(o,r)},d(t){t&&c(e)}}}function te(e){let n;return{c(){n=d("p"),n.textContent="Loading Account Balance"},m(t,e){a(t,n,e)},p:t,d(t){t&&c(n)}}}function ee(e){let n,o,s,r,u,f,m,b;return{c(){n=d("div"),o=d("button"),o.textContent="+ Add Profile",s=p(),r=d("button"),r.textContent="Save",u=p(),f=d("button"),f.textContent="Back",g(o,"class","button is-primary is-outlined mr-2"),g(o,"type","button"),g(r,"class","button is-primary mr-2"),g(r,"type","button"),g(f,"class","button is-danger"),g(f,"type","button")},m(t,i){a(t,n,i),l(n,o),l(n,s),l(n,r),l(n,u),l(n,f),m||(b=[h(o,"click",e[12].addProfile),h(r,"click",e[14].bind(void 0,"save")),h(f,"click",e[21])],m=!0)},p:t,d(t){t&&c(n),m=!1,i(b)}}}function ne(t){let e,n,o,s,r,f,b,v,y,$,w,k,_,E,S,C;function M(e){t[26](e)}let P={field:t[13]};void 0!==t[1]&&(P.data=t[1]),n=new Yt({props:P}),T.push((()=>Q(n,"data",M)));let A=t[10]&&oe(t);return{c(){e=d("form"),W(n.$$.fragment),s=p(),A&&A.c(),r=p(),f=d("div"),b=d("button"),v=u("Unlock Store"),$=p(),w=d("button"),k=u("Create a New Store"),g(b,"class","button is-primary mr-2"),g(b,"type","submit"),b.disabled=y=""===t[1],g(w,"class","button is-primary is-outlined"),g(w,"type","button"),w.disabled=_=""===t[1],x(f,"display","flex"),x(f,"justify-content","center")},m(i,o){a(i,e,o),Z(n,e,null),l(e,s),A&&A.m(e,null),l(e,r),l(e,f),l(f,b),l(b,v),l(f,$),l(f,w),l(w,k),E=!0,S||(C=[h(w,"click",t[14].bind(void 0,"create")),h(e,"submit",m(t[14].bind(void 0,"load")))],S=!0)},p(t,i){const s={};!o&&2&i[0]&&(o=!0,s.data=t[1],R((()=>o=!1))),n.$set(s),t[10]?A?(A.p(t,i),1024&i[0]&&q(A,1)):(A=oe(t),A.c(),q(A,1),A.m(e,r)):A&&(K(),D(A,1,1,(()=>{A=null})),U()),(!E||2&i[0]&&y!==(y=""===t[1]))&&(b.disabled=y),(!E||2&i[0]&&_!==(_=""===t[1]))&&(w.disabled=_)},i(t){E||(q(n.$$.fragment,t),q(A),E=!0)},o(t){D(n.$$.fragment,t),D(A),E=!1},d(t){t&&c(e),tt(n),A&&A.d(),S=!1,i(C)}}}function ie(t){let e,n,i,o,s,r,m,b,v,$,x,w,k,_=t[4]===t[3]?.id?"Active":"Activate";function E(e){t[22](e)}let S={tabs:t[8],centered:!1};void 0!==t[0]&&(S.active=t[0]),e=new Dt({props:S}),T.push((()=>Q(e,"active",E))),e.$on("removed",t[23]),e.$on("select",t[24]);let C=t[3]&&se(t);return{c(){W(e.$$.fragment),i=p(),o=d("div"),s=d("button"),r=u(_),v=p(),C&&C.c(),$=f(),g(s,"class",m="button is-success"+(t[11]?" is-loading":"")),s.disabled=b=t[11]||t[4]===t[3]?.id,g(o,"class","is-flex is-justify-content-flex-end")},m(n,c){Z(e,n,c),a(n,i,c),a(n,o,c),l(o,s),l(s,r),a(n,v,c),C&&C.m(n,c),a(n,$,c),x=!0,w||(k=h(s,"click",t[15]),w=!0)},p(t,i){const o={};256&i[0]&&(o.tabs=t[8]),!n&&1&i[0]&&(n=!0,o.active=t[0],R((()=>n=!1))),e.$set(o),(!x||24&i[0])&&_!==(_=t[4]===t[3]?.id?"Active":"Activate")&&y(r,_),(!x||2048&i[0]&&m!==(m="button is-success"+(t[11]?" is-loading":"")))&&g(s,"class",m),(!x||2072&i[0]&&b!==(b=t[11]||t[4]===t[3]?.id))&&(s.disabled=b),t[3]?C?(C.p(t,i),8&i[0]&&q(C,1)):(C=se(t),C.c(),q(C,1),C.m($.parentNode,$)):C&&(K(),D(C,1,1,(()=>{C=null})),U())},i(t){x||(q(e.$$.fragment,t),q(C),x=!0)},o(t){D(e.$$.fragment,t),D(C),x=!1},d(t){tt(e,t),t&&c(i),t&&c(o),t&&c(v),C&&C.d(t),t&&c($),w=!1,k()}}}function oe(t){let e,n;return e=new Jt({props:{type:"danger",message:t[10]}}),{c(){W(e.$$.fragment)},m(t,i){Z(e,t,i),n=!0},p(t,n){const i={};1024&n[0]&&(i.message=t[10]),e.$set(i)},i(t){n||(q(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function se(t){let e,n,i=[],o=new Map,s=t[9];const r=t=>t[29].symbol;for(let e=0;e<s.length;e+=1){let n=Qt(t,s,e),l=r(n);o.set(l,i[e]=re(l,n))}return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=f()},m(t,o){for(let e=0;e<i.length;e+=1)i[e].m(t,o);a(t,e,o),n=!0},p(t,n){536&n[0]&&(s=t[9],K(),i=J(i,n,r,1,t,s,o,e.parentNode,G,re,e,Qt),U())},i(t){if(!n){for(let t=0;t<s.length;t+=1)q(i[t]);n=!0}},o(t){for(let t=0;t<i.length;t+=1)D(i[t]);n=!1},d(t){for(let e=0;e<i.length;e+=1)i[e].d(t);t&&c(e)}}}function re(t,e){let n,i,o,s;function r(t){e[25](t,e[29])}let l={field:{...e[29],disabled:e[4]===e[3].id}};return void 0!==e[3][e[29].symbol]&&(l.data=e[3][e[29].symbol]),i=new Yt({props:l}),T.push((()=>Q(i,"data",r))),{key:t,first:null,c(){n=f(),W(i.$$.fragment),this.first=n},m(t,e){a(t,n,e),Z(i,t,e),s=!0},p(t,n){e=t;const s={};536&n[0]&&(s.field={...e[29],disabled:e[4]===e[3].id}),!o&&520&n[0]&&(o=!0,s.data=e[3][e[29].symbol],R((()=>o=!1))),i.$set(s)},i(t){s||(q(i.$$.fragment,t),s=!0)},o(t){D(i.$$.fragment,t),s=!1},d(t){t&&c(n),tt(i,t)}}}function le(e){let n,o,s,r,u,f,m,v,y,$,w,k,_,E,S,C,M,P,T,A,L,j,B=e[6]&&Wt(e),H=e[2]&&ee(e);const R=[ie,ne],N=[];function I(t,e){return t[2]?0:1}return C=I(e),M=N[C]=R[C](e),{c(){n=d("div"),o=d("button"),o.textContent="Manage",s=p(),B&&B.c(),r=p(),u=d("div"),f=d("section"),m=d("div"),v=d("div"),y=d("h4"),y.textContent="Profile Manager",$=p(),H&&H.c(),w=p(),k=d("p"),k.innerHTML='Please visit <a href="https://library.threefold.me/info/threefold" target="_blank">the manual</a>\n        to <strong>get started.</strong>',_=p(),E=d("hr"),S=p(),M.c(),this.c=t,g(o,"type","button"),g(n,"class","profile-menu"),g(y,"class","is-size-4"),x(v,"display","flex"),x(v,"justify-content","space-between"),x(v,"align-items","center"),g(k,"class","mt-4"),g(m,"class","box"),g(f,"class",P="profile-container"+(e[5]?" is-active":"")),g(u,"class",T="profile-overlay"+(e[5]?" is-active":""))},m(t,i){a(t,n,i),l(n,o),l(n,s),B&&B.m(n,null),a(t,r,i),a(t,u,i),l(u,f),l(f,m),l(m,v),l(v,y),l(v,$),H&&H.m(v,null),l(m,w),l(m,k),l(m,_),l(m,E),l(m,S),N[C].m(m,null),A=!0,L||(j=[h(n,"click",b(e[20])),h(f,"click",b(e[19]))],L=!0)},p(t,e){t[6]?B?B.p(t,e):(B=Wt(t),B.c(),B.m(n,null)):B&&(B.d(1),B=null),t[2]?H?H.p(t,e):(H=ee(t),H.c(),H.m(v,null)):H&&(H.d(1),H=null);let i=C;C=I(t),C===i?N[C].p(t,e):(K(),D(N[i],1,1,(()=>{N[i]=null})),U(),M=N[C],M?M.p(t,e):(M=N[C]=R[C](t),M.c()),q(M,1),M.m(m,null)),(!A||32&e[0]&&P!==(P="profile-container"+(t[5]?" is-active":"")))&&g(f,"class",P),(!A||32&e[0]&&T!==(T="profile-overlay"+(t[5]?" is-active":"")))&&g(u,"class",T)},i(t){A||(q(M),A=!0)},o(t){D(M),A=!1},d(t){t&&c(n),B&&B.d(),t&&c(r),t&&c(u),H&&H.d(),N[C].d(),L=!1,i(j)}}}function ae(t,e,n){let i;var o;const s=null===(o=window.configs)||void 0===o?void 0:o.baseConfig;r(t,s,(t=>n(18,i=t)));let l,a,c,d,u="0",p="",f=!1,h=!1,m=!1,b=[],g=!1;const v=[{label:"Profile Name",symbol:"name",placeholder:"Profile name",type:"text"},{label:"Network Environment",symbol:"networkEnv",type:"select",options:[{label:"Testnet",value:"test"},{label:"Devnet",value:"dev"}]},{label:"Mnemonics",symbol:"mnemonics",placeholder:"Enter your mnemonics",type:"password"},{label:"TFChain Configurations Secret",symbol:"storeSecret",placeholder:"Secret key used to encrypt your data on TFChain",type:"password"},{label:"Public SSH Key",symbol:"sshKey",placeholder:"Your public SSH key, will be added as default to all deployments.",type:"text"}];let y;let $=!1;const x=()=>n(5,h=!1);var w;w=()=>window.addEventListener("click",x),S().$$.on_mount.push(w),function(t){S().$$.on_destroy.push(t)}((()=>window.removeEventListener("click",x)));return t.$$.update=()=>{if(458753&t.$$.dirty[0]){let t=i;t&&(!g&&t.loaded&&(n(17,g=!0),n(2,f=!0),n(7,m=!0),mt(s.getActiveProfile()).then((t=>{s.setBalance(t)})).catch((t=>{console.log("Error",t)})).finally((()=>n(7,m=!1)))),n(16,l=t.profiles),n(3,a=l[u]),n(4,c=t.activeProfile),n(6,d=s.getActiveProfile()),n(8,b=l.map(((t,e)=>({label:t.name||`Profile ${e+1}`,value:e.toString(),removable:0!==e})))))}},[u,p,f,a,c,h,d,m,b,v,y,$,s,{label:"Browser Session Secret",type:"password",placeholder:"Browser Session Secret",symbol:"secret",tooltip:"Browser Session Secret"},function(t){n(10,y=s[t](p)),y||n(2,f=!0)},function(){n(11,$=!0);let t=!1;(function(t){const{networkEnv:e,mnemonics:n,storeSecret:i}=t,o=new at(0,""),s=new lt(e,n,i,o,void 0,"tfkvstore");return s.connect().then((()=>s.disconnect())).then((()=>!0)).catch((()=>!1))})(a).then((e=>(t=t||!e,n(9,v[2].error=e?null:"Invalid Mnemonics. Could it be that your account is not activated? or using the wrong network?",v),""!==a.storeSecret))).then((e=>(t=t||!e,n(9,v[3].error=e?null:"Invalid storeSecret",v),""!==a.sshKey))).then((e=>(t=t||!e,n(9,v[4].error=e?null:"Invalid SSH Key",v),""!==a.name))).then((e=>(t=t||!e,n(9,v[0].error=e?null:"Please provide a profile name",v),!t))).then((t=>{if(t)return s.setActiveProfile(a.id,p),n(7,m=!0),mt(a)})).then((t=>{s.setBalance(t)})).catch((t=>{console.log("Error",t)})).finally((()=>{n(11,$=!1),n(7,m=!1)}))},l,g,i,function(e){M.call(this,t,e)},()=>n(5,h=!h),()=>{n(2,f=!1),sessionStorage.removeItem("session_password")},function(t){u=t,n(0,u)},({detail:t})=>s.deleteProfile(t),()=>[2,3,4].forEach((t=>n(9,v[t].error=null,v))),function(e,o){t.$$.not_equal(a[o.symbol],e)&&(a[o.symbol]=e,n(3,a),n(18,i),n(17,g),n(16,l),n(0,u))},function(t){p=t,n(1,p)}]}customElements.define("tf-alert",Jt);customElements.define("tf-profiles",class extends F{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");.profile-menu{position:fixed;top:15px;right:15px;display:flex;align-items:center;z-index:999;padding:15px;background-color:white;border-radius:50px;border:1px solid #ddd8d8;cursor:pointer}.profile-menu button{height:60px;width:90px;border-radius:70%;border:none;cursor:inherit;font-weight:bold;font-size:20px}.profile-menu .profile-active{padding-left:15px}.profile-menu .profile-active>p:first-of-type{font-weight:bold;margin-bottom:-5px}.profile-menu .profile-active>p:last-of-type span{font-weight:bold}.profile-overlay{position:fixed;top:0;left:0;bottom:0;right:0;background-color:rgba(0, 0, 0, 0.8);z-index:998;transition-timing-function:ease;transition-property:opacity, visibility;transition-duration:0.35s;opacity:0;visibility:hidden;pointer-events:none}.profile-overlay.is-active{opacity:1;visibility:visible;pointer-events:all}.profile-container{position:fixed;top:100px;right:15px;width:calc(100% - 275px);padding:15px;max-height:calc(100vh - 115px);overflow-y:auto;transition-duration:0.35s;transition-property:transform, opacity, visibility;transition-timing-function:ease;transform:translateY(50px);opacity:0;visibility:hidden;pointer-events:none}.is-active{transform:translateY(0);opacity:1;visibility:visible;pointer-events:all}</style>',nt(this,{target:this.shadowRoot,props:k(this.attributes),customElement:!0},ae,le,s,{},null,[-1,-1]),t&&t.target&&a(t.target,this,t.anchor)}})}();
