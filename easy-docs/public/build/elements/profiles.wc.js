!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function l(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function r(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function f(){return d("")}function m(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function h(t){return function(e){return e.preventDefault(),t.call(this,e)}}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return""===t?null:+t}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}function v(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}function x(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}t.selectedIndex=-1}function w(t){const e={};for(const n of t)e[n.name]=n.value;return e}let k;function _(t){k=t}function E(){if(!k)throw new Error("Function called outside component initialization");return k}function C(){const t=E();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const l=function(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}(e,n);s.slice().forEach((e=>{e.call(t,l)}))}}}function N(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const M=[],R=[],S=[],A=[],F=Promise.resolve();let I=!1;function P(t){S.push(t)}function j(t){A.push(t)}let L=!1;const T=new Set;function H(){if(!L){L=!0;do{for(let t=0;t<M.length;t+=1){const e=M[t];_(e),D(e.$$)}for(_(null),M.length=0;R.length;)R.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];T.has(e)||(T.add(e),e())}S.length=0}while(M.length);for(;A.length;)A.pop()();I=!1,L=!1,T.clear()}}function D(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const V=new Set;let U,q;function z(){U={r:0,c:[],p:U}}function B(){U.r||s(U.c),U=U.p}function O(t,e){t&&t.i&&(V.delete(t),t.i(e))}function X(t,e,n,s){if(t&&t.o){if(V.has(t))return;V.add(t),U.c.push((()=>{V.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function G(t,e){t.d(1),e.delete(t.key)}function K(t,e){X(t,1,1,(()=>{e.delete(t.key)}))}function Y(t,e,n,s,l,o,i,r,c,a,u,d){let p=t.length,f=o.length,m=p;const h={};for(;m--;)h[t[m].key]=m;const b=[],$=new Map,g=new Map;for(m=f;m--;){const t=d(l,o,m),r=n(t);let c=i.get(r);c?s&&c.p(t,e):(c=a(r,t),c.c()),$.set(r,b[m]=c),r in h&&g.set(r,Math.abs(m-h[r]))}const y=new Set,v=new Set;function x(t){O(t,1),t.m(r,u),i.set(t.key,t),u=t.first,f--}for(;p&&f;){const e=b[f-1],n=t[p-1],s=e.key,l=n.key;e===n?(u=e.first,p--,f--):$.has(l)?!i.has(s)||y.has(s)?x(e):v.has(l)?p--:g.get(s)>g.get(l)?(v.add(s),x(e)):(y.add(l),p--):(c(n,i),p--)}for(;p--;){const e=t[p];$.has(e.key)||c(e,i)}for(;f;)x(b[f-1]);return b}function J(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function Q(t){t&&t.c()}function W(t,n,o,i){const{fragment:r,on_mount:c,on_destroy:a,after_update:u}=t.$$;r&&r.m(n,o),i||P((()=>{const n=c.map(e).filter(l);a?a.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(P)}function Z(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(M.push(t),I||(I=!0,F.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,l,o,i,r,c,u,d=[-1]){const p=k;_(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(p?p.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:l.target||p.$$.root};u&&u(f.root);let m=!1;if(f.ctx=o?o(e,l.props||{},((t,n,...s)=>{const l=s.length?s[0]:n;return f.ctx&&r(f.ctx[t],f.ctx[t]=l)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](l),m&&tt(e,t)),n})):[],f.update(),m=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);f.fragment&&f.fragment.l(t),t.forEach(a)}else f.fragment&&f.fragment.c();l.intro&&O(e.$$.fragment),W(e,l.target,l.anchor,l.customElement),H()}_(p)}var nt;"function"==typeof HTMLElement&&(q=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(l);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){s(this.$$.on_disconnect)}$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var st=new Uint8Array(16);function lt(){if(!nt&&!(nt="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return nt(st)}var ot=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function it(t){return"string"==typeof t&&ot.test(t)}for(var rt,ct,at=[],ut=0;ut<256;++ut)at.push((ut+256).toString(16).substr(1));function dt(t,e,n){var s=(t=t||{}).random||(t.rng||lt)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e){n=n||0;for(var l=0;l<16;++l)e[n+l]=s[l];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(at[t[e+0]]+at[t[e+1]]+at[t[e+2]]+at[t[e+3]]+"-"+at[t[e+4]]+at[t[e+5]]+"-"+at[t[e+6]]+at[t[e+7]]+"-"+at[t[e+8]]+at[t[e+9]]+"-"+at[t[e+10]]+at[t[e+11]]+at[t[e+12]]+at[t[e+13]]+at[t[e+14]]+at[t[e+15]]).toLowerCase();if(!it(n))throw TypeError("Stringified UUID is invalid");return n}(s)}function pt(t,e,n){const s=t.slice();return s[18]=e[n],s}function ft(t){let e,n;function s(t,n){return null==e&&(e=!!t[3]()),e?bt:"checkbox"===t[1].type?ht:"select"===t[1].type?mt:void 0}let l=s(t),o=l&&l(t);return{c(){o&&o.c(),n=f()},m(t,e){o&&o.m(t,e),c(t,n,e)},p(t,e){l===(l=s(t))&&o?o.p(t,e):(o&&o.d(1),o=l&&l(t),o&&(o.c(),o.m(n.parentNode,n)))},d(t){o&&o.d(t),t&&a(n)}}}function mt(t){let e,n,l,o,i,d=[],f=new Map,h=t[1].label&&$t(t),$=t[1].options;const g=t=>t[18].value;for(let e=0;e<$.length;e+=1){let n=pt(t,$,e),s=g(n);f.set(s,d[e]=gt(s,n))}return{c(){h&&h.c(),e=p(),n=u("div"),l=u("select");for(let t=0;t<d.length;t+=1)d[t].c();v(l,"width","100%"),void 0===t[0]&&P((()=>t[17].call(l))),b(n,"class","select mb-2"),v(n,"width","100%"),b(n,"id",t[2])},m(s,a){h&&h.m(s,a),c(s,e,a),c(s,n,a),r(n,l);for(let t=0;t<d.length;t+=1)d[t].m(l,null);x(l,t[0]),o||(i=[m(l,"change",t[17]),m(l,"change",t[4])],o=!0)},p(t,n){t[1].label?h?h.p(t,n):(h=$t(t),h.c(),h.m(e.parentNode,e)):h&&(h.d(1),h=null),2&n&&($=t[1].options,d=Y(d,n,g,1,t,$,f,l,G,gt,null,pt)),3&n&&x(l,t[0])},d(t){h&&h.d(t),t&&a(e),t&&a(n);for(let t=0;t<d.length;t+=1)d[t].d();o=!1,s(i)}}}function ht(t){let e,n,l,o,i,f,h,$,y,x,w=t[1].label+"";return{c(){e=u("div"),n=u("label"),l=u("input"),o=p(),i=u("span"),f=p(),h=u("label"),$=d(w),b(l,"class","switch__input"),b(l,"type","checkbox"),b(l,"id",t[2]),b(i,"class","slider"),b(n,"class","switch"),b(h,"for",t[2]),b(h,"class","label ml-2"),v(h,"cursor","pointer"),v(e,"display","flex"),v(e,"align-items","center"),b(e,"class","mb-2")},m(s,a){c(s,e,a),r(e,n),r(n,l),l.checked=t[0],r(n,o),r(n,i),r(e,f),r(e,h),r(h,$),y||(x=[m(l,"change",t[16]),m(l,"change",t[11])],y=!0)},p(t,e){3&e&&(l.checked=t[0]),2&e&&w!==(w=t[1].label+"")&&g($,w)},d(t){t&&a(e),y=!1,s(x)}}}function bt(t){let e,n,s,l,o,i=t[1].label+"";function f(t,e){return"textarea"===t[1].type?wt:"text"===t[1].type?xt:"number"===t[1].type?vt:"password"===t[1].type?yt:void 0}let m=f(t),h=m&&m(t);return{c(){e=u("div"),n=u("p"),s=d(i),l=p(),o=u("div"),h&&h.c(),b(n,"class","label"),b(o,"class","control"),b(e,"class","field"),b(e,"id",t[2])},m(t,i){c(t,e,i),r(e,n),r(n,s),r(e,l),r(e,o),h&&h.m(o,null)},p(t,e){2&e&&i!==(i=t[1].label+"")&&g(s,i),m===(m=f(t))&&h?h.p(t,e):(h&&h.d(1),h=m&&m(t),h&&(h.c(),h.m(o,null)))},d(t){t&&a(e),h&&h.d()}}}function $t(t){let e,n,s=t[1].label+"";return{c(){e=u("p"),n=d(s),b(e,"class","label")},m(t,s){c(t,e,s),r(e,n)},p(t,e){2&e&&s!==(s=t[1].label+"")&&g(n,s)},d(t){t&&a(e)}}}function gt(t,e){let n,s,l,o,i,f,m=e[18].label+"";return{key:t,first:null,c(){n=u("option"),s=d(m),l=p(),n.__value=o=e[18].value,n.value=n.__value,n.selected=i=e[18].selected,n.disabled=f=e[18].disabled,this.first=n},m(t,e){c(t,n,e),r(n,s),r(n,l)},p(t,l){e=t,2&l&&m!==(m=e[18].label+"")&&g(s,m),2&l&&o!==(o=e[18].value)&&(n.__value=o,n.value=n.__value),2&l&&i!==(i=e[18].selected)&&(n.selected=i),2&l&&f!==(f=e[18].disabled)&&(n.disabled=f)},d(t){t&&a(n)}}}function yt(t){let e,n,l,o;return{c(){e=u("input"),b(e,"type","password"),b(e,"class","input"),b(e,"placeholder",n=t[1].placeholder)},m(n,s){c(n,e,s),y(e,t[0]),l||(o=[m(e,"input",t[15]),m(e,"input",t[10])],l=!0)},p(t,s){2&s&&n!==(n=t[1].placeholder)&&b(e,"placeholder",n),3&s&&e.value!==t[0]&&y(e,t[0])},d(t){t&&a(e),l=!1,s(o)}}}function vt(t){let e,n,l,o;return{c(){e=u("input"),b(e,"type","number"),b(e,"class","input"),b(e,"placeholder",n=t[1].placeholder)},m(n,s){c(n,e,s),y(e,t[0]),l||(o=[m(e,"input",t[14]),m(e,"input",t[9])],l=!0)},p(t,s){2&s&&n!==(n=t[1].placeholder)&&b(e,"placeholder",n),3&s&&$(e.value)!==t[0]&&y(e,t[0])},d(t){t&&a(e),l=!1,s(o)}}}function xt(t){let e,n,l,o;return{c(){e=u("input"),b(e,"type","text"),b(e,"class","input"),b(e,"placeholder",n=t[1].placeholder)},m(n,s){c(n,e,s),y(e,t[0]),l||(o=[m(e,"input",t[13]),m(e,"input",t[8])],l=!0)},p(t,s){2&s&&n!==(n=t[1].placeholder)&&b(e,"placeholder",n),3&s&&e.value!==t[0]&&y(e,t[0])},d(t){t&&a(e),l=!1,s(o)}}}function wt(t){let e,n,l,o;return{c(){e=u("textarea"),b(e,"class","textarea"),b(e,"placeholder",n=t[1].placeholder)},m(n,s){c(n,e,s),y(e,t[0]),l||(o=[m(e,"input",t[12]),m(e,"change",t[7])],l=!0)},p(t,s){2&s&&n!==(n=t[1].placeholder)&&b(e,"placeholder",n),3&s&&y(e,t[0])},d(t){t&&a(e),l=!1,s(o)}}}function kt(e){let n,s,l,o=e[1]&&ft(e);return{c(){n=u("div"),s=p(),o&&o.c(),l=f(),this.c=t},m(t,i){c(t,n,i),n.innerHTML=e[5],c(t,s,i),o&&o.m(t,i),c(t,l,i)},p(t,[e]){t[1]?o?o.p(t,e):(o=ft(t),o.c(),o.m(l.parentNode,l)):o&&(o.d(1),o=null)},i:t,o:t,d(t){t&&a(n),t&&a(s),o&&o.d(t),t&&a(l)}}}function _t(t,e,n){let{field:s}=e,{data:l}=e,{selected:o=0}=e;const i=dt();return t.$$set=t=>{"field"in t&&n(1,s=t.field),"data"in t&&n(0,l=t.data),"selected"in t&&n(6,o=t.selected)},[l,s,i,()=>["text","number","password","textarea"].includes(s.type),function(t){const e=t.target;n(6,o=e.selectedIndex)},'\n<style>\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n\n  .switch .switch__input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 34px;\n  }\n\n  .slider:before {\n    position: absolute;\n    content: "";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n\n  .switch__input:checked + .slider {\n    background-color: #2196f3;\n  }\n\n  .switch__input:checked + .slider {\n    box-shadow: 0 0 1px #2196f3;\n  }\n\n  .switch__input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n</style>\n',o,function(e){N.call(this,t,e)},function(e){N.call(this,t,e)},function(e){N.call(this,t,e)},function(e){N.call(this,t,e)},function(e){N.call(this,t,e)},function(){l=this.value,n(0,l),n(1,s)},function(){l=this.value,n(0,l),n(1,s)},function(){l=$(this.value),n(0,l),n(1,s)},function(){l=this.value,n(0,l),n(1,s)},function(){l=this.checked,n(0,l),n(1,s)},function(){l=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(0,l),n(1,s)}]}class Et extends q{constructor(t){super(),et(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},_t,kt,o,{field:1,data:0,selected:6},null),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),H()))}static get observedAttributes(){return["field","data","selected"]}get field(){return this.$$.ctx[1]}set field(t){this.$$set({field:t}),H()}get data(){return this.$$.ctx[0]}set data(t){this.$$set({data:t}),H()}get selected(){return this.$$.ctx[6]}set selected(t){this.$$set({selected:t}),H()}}function Ct(e){let n,s,l,o,i;function d(t){e[4](t)}let p={field:{type:"select",symbol:"selected",options:e[1]}};return void 0!==e[0]&&(p.data=e[0]),l=new Et({props:p}),R.push((()=>J(l,"data",d))),l.$on("change",e[3]),{c(){n=u("div"),s=u("div"),Q(l.$$.fragment),this.c=t,b(n,"class","is-flex is-justify-content-flex-end is-align-items-center")},m(t,e){c(t,n,e),r(n,s),W(l,s,null),i=!0},p(t,[e]){const n={};2&e&&(n.field={type:"select",symbol:"selected",options:t[1]}),!o&&1&e&&(o=!0,n.data=t[0],j((()=>o=!1))),l.$set(n)},i(t){i||(O(l.$$.fragment,t),i=!0)},o(t){X(l.$$.fragment,t),i=!1},d(t){t&&a(n),Z(l)}}}function Nt(t,e,n){let s;var l;const o=C();let r="0";const c=null===(l=window.configs)||void 0===l?void 0:l.baseConfig;let a;i(t,c,(t=>n(7,s=t)));let u=[];function d(){a=s,n(1,u=a.map(((t,e)=>({label:t.name||`Profile ${e+1}`,value:e.toString()})))),o("profile",a[r])}let p=c.subscribe((()=>{d()}));var f;return f=p,E().$$.on_destroy.push(f),[r,u,c,d,function(t){r=t,n(0,r)}]}customElements.define("tf-input",Et);function Mt(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function Rt(t){let e,n=[],s=new Map,l=t[1];const o=t=>t[6].label;for(let e=0;e<l.length;e+=1){let i=Mt(t,l,e),r=o(i);s.set(r,n[e]=At(r,i))}return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=f()},m(t,s){for(let e=0;e<n.length;e+=1)n[e].m(t,s);c(t,e,s)},p(t,i){11&i&&(l=t[1],n=Y(n,i,o,1,t,l,s,e.parentNode,G,At,e,Mt))},d(t){for(let e=0;e<n.length;e+=1)n[e].d(t);t&&a(e)}}}function St(t){let e,n,s;return{c(){e=u("button"),b(e,"class","ml-2 is-small delete")},m(o,i){var r;c(o,e,i),n||(s=m(e,"click",(r=h((function(){l(t[3](t[8]))&&t[3](t[8]).apply(this,arguments)})),function(t){return t.stopPropagation(),r.call(this,t)})),n=!0)},p(e,n){t=e},d(t){t&&a(e),n=!1,s()}}}function At(t,e){let n,s,l,o,i,f,$,y,v,x=e[6].label+"",w=e[6].removable&&St(e);function k(){return e[4](e[6])}return{key:t,first:null,c(){n=u("li"),s=u("a"),l=u("span"),o=d(x),i=p(),w&&w.c(),f=p(),b(s,"href","#!"),b(n,"class",$=e[0]===e[6].value?"is-active":""),this.first=n},m(t,e){c(t,n,e),r(n,s),r(s,l),r(l,o),r(s,i),w&&w.m(s,null),r(n,f),y||(v=m(s,"click",h(k)),y=!0)},p(t,l){e=t,2&l&&x!==(x=e[6].label+"")&&g(o,x),e[6].removable?w?w.p(e,l):(w=St(e),w.c(),w.m(s,null)):w&&(w.d(1),w=null),3&l&&$!==($=e[0]===e[6].value?"is-active":"")&&b(n,"class",$)},d(t){t&&a(n),w&&w.d(),y=!1,v()}}}function Ft(e){let n,s,l,o=e[1]&&Rt(e);return{c(){n=u("div"),s=u("ul"),o&&o.c(),this.c=t,b(n,"class",l="tabs "+(e[2]?"is-centered":""))},m(t,e){c(t,n,e),r(n,s),o&&o.m(s,null)},p(t,[e]){t[1]?o?o.p(t,e):(o=Rt(t),o.c(),o.m(s,null)):o&&(o.d(1),o=null),4&e&&l!==(l="tabs "+(t[2]?"is-centered":""))&&b(n,"class",l)},i:t,o:t,d(t){t&&a(n),o&&o.d()}}}function It(t,e,n){const s=C();let{tabs:l}=e,{active:o}=e,{centered:i=!0}=e;return t.$$set=t=>{"tabs"in t&&n(1,l=t.tabs),"active"in t&&n(0,o=t.active),"centered"in t&&n(2,i=t.centered)},[o,l,i,t=>()=>s("removed",t),t=>n(0,o=t.value)]}customElements.define("tf-select-profile",class extends q{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");</style>',et(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},Nt,Ct,o,{},null),t&&t.target&&c(t.target,this,t.anchor)}});class Pt extends q{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");</style>',et(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},It,Ft,o,{tabs:1,active:0,centered:2},null),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),H()))}static get observedAttributes(){return["tabs","active","centered"]}get tabs(){return this.$$.ctx[1]}set tabs(t){this.$$set({tabs:t}),H()}get active(){return this.$$.ctx[0]}set active(t){this.$$set({active:t}),H()}get centered(){return this.$$.ctx[2]}set centered(t){this.$$set({centered:t}),H()}}customElements.define("tf-tabs",Pt);const{GridClient:jt,Nodes:Lt}=null!==(ct=null===(rt=window.configs)||void 0===rt?void 0:rt.grid3_client)&&void 0!==ct?ct:{};function Tt(t,e,n){const s=t.slice();return s[14]=e[n],s[15]=e,s[16]=n,s}function Ht(t){let e,n,s;function l(e){t[13](e)}let o={field:t[7]};return void 0!==t[0]&&(o.data=t[0]),e=new Et({props:o}),R.push((()=>J(e,"data",l))),{c(){Q(e.$$.fragment)},m(t,n){W(e,t,n),s=!0},p(t,s){const l={};!n&&1&s&&(n=!0,l.data=t[0],j((()=>n=!1))),e.$set(l)},i(t){s||(O(e.$$.fragment,t),s=!0)},o(t){X(e.$$.fragment,t),s=!1},d(t){Z(e,t)}}}function Dt(t){let e,n,s,l,o,i,f,h,$,g,y,v,x=[],w=new Map,k=t[5];const _=t=>t[14].symbol;for(let e=0;e<k.length;e+=1){let n=Tt(t,k,e),s=_(n);w.set(s,x[e]=Vt(s,n))}function E(e){t[12](e)}let C={field:t[1]};return void 0!==t[0]&&(C.data=t[0]),h=new Et({props:C}),R.push((()=>J(h,"data",E))),{c(){e=u("h5"),e.textContent="Nodes Filter",n=p();for(let t=0;t<x.length;t+=1)x[t].c();s=p(),l=u("button"),o=d("Apply Filters"),f=p(),Q(h.$$.fragment),b(e,"class","is-size-3 has-text-weight-bold"),b(l,"class",i="button is-primary mt-2 "+(t[4]?"is-loading":"")),l.disabled=t[4],b(l,"type","button")},m(i,a){c(i,e,a),c(i,n,a);for(let t=0;t<x.length;t+=1)x[t].m(i,a);c(i,s,a),c(i,l,a),r(l,o),c(i,f,a),W(h,i,a),g=!0,y||(v=m(l,"click",t[8]),y=!0)},p(t,e){40&e&&(k=t[5],z(),x=Y(x,e,_,1,t,k,w,s.parentNode,K,Vt,s,Tt),B()),(!g||16&e&&i!==(i="button is-primary mt-2 "+(t[4]?"is-loading":"")))&&b(l,"class",i),(!g||16&e)&&(l.disabled=t[4]);const n={};2&e&&(n.field=t[1]),!$&&1&e&&($=!0,n.data=t[0],j((()=>$=!1))),h.$set(n)},i(t){if(!g){for(let t=0;t<k.length;t+=1)O(x[t]);O(h.$$.fragment,t),g=!0}},o(t){for(let t=0;t<x.length;t+=1)X(x[t]);X(h.$$.fragment,t),g=!1},d(t){t&&a(e),t&&a(n);for(let e=0;e<x.length;e+=1)x[e].d(t);t&&a(s),t&&a(l),t&&a(f),Z(h,t),y=!1,v()}}}function Vt(t,e){let n,s,l,o;function i(t){e[11](t,e[14])}let r={field:e[14]};return void 0!==e[3][e[14].symbol]&&(r.data=e[3][e[14].symbol]),s=new Et({props:r}),R.push((()=>J(s,"data",i))),{key:t,first:null,c(){n=f(),Q(s.$$.fragment),this.first=n},m(t,e){c(t,n,e),W(s,t,e),o=!0},p(t,n){e=t;const o={};!l&&40&n&&(l=!0,o.data=e[3][e[14].symbol],j((()=>l=!1))),s.$set(o)},i(t){o||(O(s.$$.fragment,t),o=!0)},o(t){X(s.$$.fragment,t),o=!1},d(t){t&&a(n),Z(s,t)}}}function Ut(e){let n,s,l,o,i,r,u;function d(t){e[10](t)}let m={field:e[6]};void 0!==e[2]&&(m.data=e[2]),n=new Et({props:m}),R.push((()=>J(n,"data",d)));const h=[Dt,Ht],b=[];function $(t,e){return"automatic"===t[2]?0:"manual"===t[2]?1:-1}return~(o=$(e))&&(i=b[o]=h[o](e)),{c(){Q(n.$$.fragment),l=p(),i&&i.c(),r=f(),this.c=t},m(t,e){W(n,t,e),c(t,l,e),~o&&b[o].m(t,e),c(t,r,e),u=!0},p(t,[e]){const l={};!s&&4&e&&(s=!0,l.data=t[2],j((()=>s=!1))),n.$set(l);let c=o;o=$(t),o===c?~o&&b[o].p(t,e):(i&&(z(),X(b[c],1,1,(()=>{b[c]=null})),B()),~o?(i=b[o],i?i.p(t,e):(i=b[o]=h[o](t),i.c()),O(i,1),i.m(r.parentNode,r)):i=null)},i(t){u||(O(n.$$.fragment,t),O(i),u=!0)},o(t){X(n.$$.fragment,t),X(i),u=!1},d(t){Z(n,t),t&&a(l),~o&&b[o].d(t),t&&a(r)}}}function qt(t,e,n){const s={label:"Node ID",type:"select",symbol:"nodeId",options:[{label:"Please select a node id.",value:null,selected:!0,disabled:!0}]};let l=null;const o={accessNodeV4:!1,accessNodeV6:!0,gateway:!1,city:"",country:"",farmId:null,cru:null,hru:null,mru:null,sru:null};let{profile:i}=e,r=!1;let{data:c}=e;return t.$$set=t=>{"profile"in t&&n(9,i=t.profile),"data"in t&&n(0,c=t.data)},[c,s,l,o,r,[{label:"Access Node V4 Filter",symbol:"accessNodeV4",type:"checkbox"},{label:"Access Node V6 Filter",symbol:"accessNodeV6",type:"checkbox"},{label:"Gateway Filter",symbol:"gateway",type:"checkbox"},{label:"City Filter",symbol:"city",type:"text"},{label:"Country Filter",symbol:"country",type:"text"},{label:"Farm ID Filter",symbol:"farmId",type:"number"},{label:"CRU Filter",symbol:"cru",type:"number"},{label:"HRU Filter",symbol:"hru",type:"number"},{label:"MRU Filter",symbol:"mru",type:"number"},{label:"SRU Filter",symbol:"sru",type:"number"}],{label:"Node Selection",type:"select",symbol:"value",options:[{label:"Choose a way to select node",value:null,selected:!0,disabled:!0},{label:"Automatic",value:"automatic"},{label:"Manual",value:"manual"}]},{label:"Node ID",symbol:"nodeId",type:"number",placeholder:"Your Node ID"},function(){n(4,r=!0),function(t,e){return new Promise((async n=>{const{networkEnv:s}=e,l=new jt("","","",null),{graphql:o,rmbProxy:i}=l.getDefaultUrls(s),r=new Lt(o,i);try{n((await r.filterNodes(t)).map((t=>({label:`NodeID(${t.nodeId}) - FarmID(${t.farm})`,value:t.nodeId}))))}catch(t){n([])}}))}(o,i).then((t=>{const[e]=s.options;t.unshift(e),n(1,s.options=t,s)})).finally((()=>n(4,r=!1)))},i,function(t){l=t,n(2,l)},function(e,s){t.$$.not_equal(o[s.symbol],e)&&(o[s.symbol]=e,n(3,o))},function(t){c=t,n(0,c)},function(t){c=t,n(0,c)}]}function zt(e){let n,s,l,o,i,f,h;return{c(){n=u("div"),s=u("p"),l=d(e[0]),o=p(),i=u("button"),i.innerHTML="<span>-</span>",this.c=t,b(s,"class","is-size-5 has-text-weight-bold"),b(i,"type","button"),b(i,"class","button is-danger"),b(n,"class","is-flex is-justify-content-space-between is-align-items-center")},m(t,a){c(t,n,a),r(n,s),r(s,l),r(n,o),r(n,i),f||(h=m(i,"click",e[1]),f=!0)},p(t,[e]){1&e&&g(l,t[0])},i:t,o:t,d(t){t&&a(n),f=!1,h()}}}function Bt(t,e,n){let{name:s}=e;return t.$$set=t=>{"name"in t&&n(0,s=t.name)},[s,function(e){N.call(this,t,e)}]}customElements.define("tf-select-node-id",class extends q{constructor(t){super(),et(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},qt,Ut,o,{profile:9,data:0},null),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),H()))}static get observedAttributes(){return["profile","data"]}get profile(){return this.$$.ctx[9]}set profile(t){this.$$set({profile:t}),H()}get data(){return this.$$.ctx[0]}set data(t){this.$$set({data:t}),H()}});function Ot(e){let n,s,l,o;return{c(){n=u("div"),s=u("button"),s.innerHTML="<span>+</span>",this.c=t,b(s,"type","button"),b(s,"class","button is-primary"),b(n,"class","is-flex is-justify-content-flex-end is-align-items-center")},m(t,i){c(t,n,i),r(n,s),l||(o=m(s,"click",e[0]),l=!0)},p:t,i:t,o:t,d(t){t&&a(n),l=!1,o()}}}function Xt(t){return[function(e){N.call(this,t,e)}]}customElements.define("tf-delete-btn",class extends q{constructor(t){super(),et(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},Bt,zt,o,{name:0},null),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),H()))}static get observedAttributes(){return["name"]}get name(){return this.$$.ctx[0]}set name(t){this.$$set({name:t}),H()}});function Gt(t){let e;return{c(){e=d("Deploy")},m(t,n){c(t,e,n)},d(t){t&&a(e)}}}function Kt(t){let e;return{c(){e=d("Back")},m(t,n){c(t,e,n)},d(t){t&&a(e)}}}function Yt(e){let n,s,l,o,i;function d(t,e){return t[1]||t[2]?Kt:Gt}let p=d(e),f=p(e);return{c(){n=u("div"),s=u("button"),f.c(),this.c=t,b(s,"class",l="button is-primary "+(e[0]?"is-loading":"")),b(s,"type","submit"),s.disabled=e[3],b(n,"class","is-flex is-justify-content-flex-end is-align-items-center")},m(t,l){c(t,n,l),r(n,s),f.m(s,null),o||(i=m(s,"click",e[4]),o=!0)},p(t,[e]){p!==(p=d(t))&&(f.d(1),f=p(t),f&&(f.c(),f.m(s,null))),1&e&&l!==(l="button is-primary "+(t[0]?"is-loading":""))&&b(s,"class",l),8&e&&(s.disabled=t[3])},i:t,o:t,d(t){t&&a(n),f.d(),o=!1,i()}}}function Jt(t,e,n){let{loading:s}=e,{success:l}=e,{failed:o}=e,{disabled:i}=e;return t.$$set=t=>{"loading"in t&&n(0,s=t.loading),"success"in t&&n(1,l=t.success),"failed"in t&&n(2,o=t.failed),"disabled"in t&&n(3,i=t.disabled)},[s,l,o,i,function(e){N.call(this,t,e)}]}customElements.define("tf-add-btn",class extends q{constructor(t){super(),et(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},Xt,Ot,o,{},null),t&&t.target&&c(t.target,this,t.anchor)}});function Qt(e){let n,s,l,o;return{c(){n=u("div"),s=d("/> "),l=d(e[1]),this.c=t,b(n,"class",o="notification is-"+e[0])},m(t,e){c(t,n,e),r(n,s),r(n,l)},p(t,[e]){2&e&&g(l,t[1]),1&e&&o!==(o="notification is-"+t[0])&&b(n,"class",o)},i:t,o:t,d(t){t&&a(n)}}}function Wt(t,e,n){let{type:s}=e,{message:l}=e;return t.$$set=t=>{"type"in t&&n(0,s=t.type),"message"in t&&n(1,l=t.message)},[s,l]}customElements.define("tf-deploy-btn",class extends q{constructor(t){super(),et(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},Jt,Yt,o,{loading:0,success:1,failed:2,disabled:3},null),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),H()))}static get observedAttributes(){return["loading","success","failed","disabled"]}get loading(){return this.$$.ctx[0]}set loading(t){this.$$set({loading:t}),H()}get success(){return this.$$.ctx[1]}set success(t){this.$$set({success:t}),H()}get failed(){return this.$$.ctx[2]}set failed(t){this.$$set({failed:t}),H()}get disabled(){return this.$$.ctx[3]}set disabled(t){this.$$set({disabled:t}),H()}});class Zt extends q{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");</style>',et(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},Wt,Qt,o,{type:0,message:1},null),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),H()))}static get observedAttributes(){return["type","message"]}get type(){return this.$$.ctx[0]}set type(t){this.$$set({type:t}),H()}get message(){return this.$$.ctx[1]}set message(t){this.$$set({message:t}),H()}}function te(t,e,n){const s=t.slice();return s[18]=e[n],s[19]=e,s[20]=n,s}function ee(e){let n,l,o,i,d,f,h,$;return{c(){n=u("div"),l=u("button"),l.textContent="+ Add Profile",o=p(),i=u("button"),i.textContent="Save",d=p(),f=u("button"),f.textContent="Back",b(l,"class","button is-primary is-outlined mr-2"),b(l,"type","button"),b(i,"class","button is-primary mr-2"),b(i,"type","button"),b(f,"class","button is-danger"),b(f,"type","button")},m(t,s){c(t,n,s),r(n,l),r(n,o),r(n,i),r(n,d),r(n,f),h||($=[m(l,"click",e[6].addProfile),m(i,"click",e[9].bind(void 0,"save")),m(f,"click",e[12])],h=!0)},p:t,d(t){t&&a(n),h=!1,s($)}}}function ne(t){let e,n,l,o,i,f,h,$,g,y,x,w,k,_,E;function C(e){t[16](e)}let N={field:t[8]};void 0!==t[1]&&(N.data=t[1]),e=new Et({props:N}),R.push((()=>J(e,"data",C)));let M=t[5]&&le(t);return{c(){Q(e.$$.fragment),l=p(),M&&M.c(),o=p(),i=u("div"),f=u("button"),h=d("Load"),g=p(),y=u("button"),x=d("Create"),b(f,"class","button is-primary is-outlined mr-2"),b(f,"type","button"),f.disabled=$=""===t[1],b(y,"class","button is-primary"),b(y,"type","button"),y.disabled=w=""===t[1],v(i,"display","flex"),v(i,"justify-content","center")},m(n,s){W(e,n,s),c(n,l,s),M&&M.m(n,s),c(n,o,s),c(n,i,s),r(i,f),r(f,h),r(i,g),r(i,y),r(y,x),k=!0,_||(E=[m(f,"click",t[9].bind(void 0,"load")),m(y,"click",t[9].bind(void 0,"create"))],_=!0)},p(t,s){const l={};!n&&2&s&&(n=!0,l.data=t[1],j((()=>n=!1))),e.$set(l),t[5]?M?(M.p(t,s),32&s&&O(M,1)):(M=le(t),M.c(),O(M,1),M.m(o.parentNode,o)):M&&(z(),X(M,1,1,(()=>{M=null})),B()),(!k||2&s&&$!==($=""===t[1]))&&(f.disabled=$),(!k||2&s&&w!==(w=""===t[1]))&&(y.disabled=w)},i(t){k||(O(e.$$.fragment,t),O(M),k=!0)},o(t){X(e.$$.fragment,t),X(M),k=!1},d(t){Z(e,t),t&&a(l),M&&M.d(t),t&&a(o),t&&a(i),_=!1,s(E)}}}function se(t){let e,n,s,l,o,i=[],r=new Map;function u(e){t[13](e)}let d={tabs:t[4],centered:!1};void 0!==t[0]&&(d.active=t[0]),e=new Pt({props:d}),R.push((()=>J(e,"active",u))),e.$on("removed",t[14]);let m=t[7];const h=t=>t[18].symbol;for(let e=0;e<m.length;e+=1){let n=te(t,m,e),s=h(n);r.set(s,i[e]=oe(s,n))}return{c(){Q(e.$$.fragment),s=p();for(let t=0;t<i.length;t+=1)i[t].c();l=f()},m(t,n){W(e,t,n),c(t,s,n);for(let e=0;e<i.length;e+=1)i[e].m(t,n);c(t,l,n),o=!0},p(t,s){const o={};16&s&&(o.tabs=t[4]),!n&&1&s&&(n=!0,o.active=t[0],j((()=>n=!1))),e.$set(o),136&s&&(m=t[7],z(),i=Y(i,s,h,1,t,m,r,l.parentNode,K,oe,l,te),B())},i(t){if(!o){O(e.$$.fragment,t);for(let t=0;t<m.length;t+=1)O(i[t]);o=!0}},o(t){X(e.$$.fragment,t);for(let t=0;t<i.length;t+=1)X(i[t]);o=!1},d(t){Z(e,t),t&&a(s);for(let e=0;e<i.length;e+=1)i[e].d(t);t&&a(l)}}}function le(t){let e,n;return e=new Zt({props:{type:"danger",message:t[5]}}),{c(){Q(e.$$.fragment)},m(t,s){W(e,t,s),n=!0},p(t,n){const s={};32&n&&(s.message=t[5]),e.$set(s)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function oe(t,e){let n,s,l,o;function i(t){e[15](t,e[18])}let r={field:e[18]};return void 0!==e[3][e[18].symbol]&&(r.data=e[3][e[18].symbol]),s=new Et({props:r}),R.push((()=>J(s,"data",i))),{key:t,first:null,c(){n=f(),Q(s.$$.fragment),this.first=n},m(t,e){c(t,n,e),W(s,t,e),o=!0},p(t,n){e=t;const o={};!l&&136&n&&(l=!0,o.data=e[3][e[18].symbol],j((()=>l=!1))),s.$set(o)},i(t){o||(O(s.$$.fragment,t),o=!0)},o(t){X(s.$$.fragment,t),o=!1},d(t){t&&a(n),Z(s,t)}}}function ie(e){let n,s,l,o,i,d,f,m,h,$,g,y,x,w=e[2]&&ee(e);const k=[se,ne],_=[];function E(t,e){return t[2]?0:1}return g=E(e),y=_[g]=k[g](e),{c(){n=u("section"),s=u("div"),l=u("div"),o=u("h4"),o.textContent="Profile Manager",i=p(),w&&w.c(),d=p(),f=u("p"),f.innerHTML='Please visit <a href="https://library.threefold.me/info/threefold" target="_blank">the manual</a>\n      to <strong>get started.</strong>',m=p(),h=u("hr"),$=p(),y.c(),this.c=t,b(o,"class","is-size-4"),v(l,"display","flex"),v(l,"justify-content","space-between"),v(l,"align-items","center"),b(f,"class","mt-4"),b(s,"class","box"),v(n,"padding","15px")},m(t,e){c(t,n,e),r(n,s),r(s,l),r(l,o),r(l,i),w&&w.m(l,null),r(s,d),r(s,f),r(s,m),r(s,h),r(s,$),_[g].m(s,null),x=!0},p(t,[e]){t[2]?w?w.p(t,e):(w=ee(t),w.c(),w.m(l,null)):w&&(w.d(1),w=null);let n=g;g=E(t),g===n?_[g].p(t,e):(z(),X(_[n],1,1,(()=>{_[n]=null})),B(),y=_[g],y?y.p(t,e):(y=_[g]=k[g](t),y.c()),O(y,1),y.m(s,null))},i(t){x||(O(y),x=!0)},o(t){X(y),x=!1},d(t){t&&a(n),w&&w.d(),_[g].d()}}}function re(t,e,n){let s;var l;const o=null===(l=window.configs)||void 0===l?void 0:l.baseConfig;i(t,o,(t=>n(11,s=t)));let r,c,a="0",u="",d=!1,p=[];let f;return t.$$.update=()=>{3073&t.$$.dirty&&(n(10,r=s),n(3,c=r[a]),n(4,p=r.map(((t,e)=>({label:t.name||`Profile ${e+1}`,value:e.toString(),removable:0!==e})))))},[a,u,d,c,p,f,o,[{label:"Name",symbol:"name",placeholder:"Profile name",type:"text"},{label:"Network Environment",symbol:"networkEnv",type:"select",options:[{label:"Testnet",value:"test"},{label:"Devnet",value:"dev"}]},{label:"Mnemonics",symbol:"mnemonics",placeholder:"Enter your mnemonics",type:"text"},{label:"Store Secret",symbol:"storeSecret",placeholder:"secret key used as profile secret",type:"text"},{label:"Public SSH Key",symbol:"sshKey",placeholder:"Your public ssh key",type:"text"}],{label:"Secret",type:"password",placeholder:"Secret key used for data encryption.",symbol:"secret"},function(t){n(5,f=o[t](u)),f||n(2,d=!0)},r,s,()=>n(2,d=!1),function(t){a=t,n(0,a)},({detail:t})=>o.deleteProfile(t),function(e,l){t.$$.not_equal(c[l.symbol],e)&&(c[l.symbol]=e,n(3,c),n(11,s),n(10,r),n(0,a))},function(t){u=t,n(1,u)}]}customElements.define("tf-alert",Zt);customElements.define("tf-profiles",class extends q{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");</style>',et(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},re,ie,o,{},null),t&&t.target&&c(t.target,this,t.anchor)}})}();
