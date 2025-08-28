(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const me=!1,be=(e,t)=>e===t,K={equals:be};let $e=fe;const T=1,q=2,le={owned:null,cleanups:null,context:null,owner:null};var v=null;let W=null,ve=null,m=null,$=null,E=null,G=0;function we(e,t){const n=m,a=v,o=e.length===0,l=t===void 0?a:t,c=o?le:{owned:null,cleanups:null,context:l?l.context:null,owner:l},u=o?e:()=>e(()=>J(()=>M(c)));v=c,m=null;try{return j(u,!0)}finally{m=n,v=a}}function Z(e,t){t=t?Object.assign({},K,t):K;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},a=o=>(typeof o=="function"&&(o=o(n.value)),se(n,o));return[oe.bind(n),a]}function k(e,t,n){const a=ue(e,t,!1,T);H(a)}function ke(e,t,n){n=n?Object.assign({},K,n):K;const a=ue(e,t,!0,0);return a.observers=null,a.observerSlots=null,a.comparator=n.equals||void 0,H(a),oe.bind(a)}function J(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function oe(){if(this.sources&&this.state)if(this.state===T)H(this);else{const e=$;$=null,j(()=>V(this),!1),$=e}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function se(e,t,n){let a=e.value;return(!e.comparator||!e.comparator(a,t))&&(e.value=t,e.observers&&e.observers.length&&j(()=>{for(let o=0;o<e.observers.length;o+=1){const l=e.observers[o],c=W&&W.running;c&&W.disposed.has(l),(c?!l.tState:!l.state)&&(l.pure?$.push(l):E.push(l),l.observers&&de(l)),c||(l.state=T)}if($.length>1e6)throw $=[],new Error},!1)),t}function H(e){if(!e.fn)return;M(e);const t=G;Ce(e,e.value,t)}function Ce(e,t,n){let a;const o=v,l=m;m=v=e;try{a=e.fn(t)}catch(c){return e.pure&&(e.state=T,e.owned&&e.owned.forEach(M),e.owned=null),e.updatedAt=n+1,ge(c)}finally{m=l,v=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?se(e,a):e.value=a,e.updatedAt=n)}function ue(e,t,n,a=T,o){const l={fn:e,state:a,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:v,context:v?v.context:null,pure:n};return v===null||v!==le&&(v.owned?v.owned.push(l):v.owned=[l]),l}function ce(e){if(e.state===0)return;if(e.state===q)return V(e);if(e.suspense&&J(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<G);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===T)H(e);else if(e.state===q){const a=$;$=null,j(()=>V(e,t[0]),!1),$=a}}function j(e,t){if($)return e();let n=!1;t||($=[]),E?n=!0:E=[],G++;try{const a=e();return xe(n),a}catch(a){n||(E=null),$=null,ge(a)}}function xe(e){if($&&(fe($),$=null),e)return;const t=E;E=null,t.length&&j(()=>$e(t),!1)}function fe(e){for(let t=0;t<e.length;t++)ce(e[t])}function V(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const a=e.sources[n];if(a.sources){const o=a.state;o===T?a!==t&&(!a.updatedAt||a.updatedAt<G)&&ce(a):o===q&&V(a,t)}}}function de(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=q,n.pure?$.push(n):E.push(n),n.observers&&de(n))}}function M(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),a=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const l=o.pop(),c=n.observerSlots.pop();a<o.length&&(l.sourceSlots[c]=a,o[a]=l,n.observerSlots[a]=c)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)M(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)M(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ze(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ge(e,t=v){throw ze(e)}function d(e,t){return J(()=>e(t||{}))}const ee=e=>ke(()=>e());function Ie(e,t,n){let a=n.length,o=t.length,l=a,c=0,u=0,f=t[o-1].nextSibling,y=null;for(;c<o||u<l;){if(t[c]===n[u]){c++,u++;continue}for(;t[o-1]===n[l-1];)o--,l--;if(o===c){const p=l<a?u?n[u-1].nextSibling:n[l-u]:f;for(;u<l;)e.insertBefore(n[u++],p)}else if(l===u)for(;c<o;)(!y||!y.has(t[c]))&&t[c].remove(),c++;else if(t[c]===n[l-1]&&n[u]===t[o-1]){const p=t[--o].nextSibling;e.insertBefore(n[u++],t[c++].nextSibling),e.insertBefore(n[--l],p),t[o]=n[l]}else{if(!y){y=new Map;let w=u;for(;w<l;)y.set(n[w],w++)}const p=y.get(t[c]);if(p!=null)if(u<p&&p<l){let w=c,x=1,Y;for(;++w<o&&w<l&&!((Y=y.get(t[w]))==null||Y!==p+x);)x++;if(x>p-u){const pe=t[c];for(;u<p;)e.insertBefore(n[u++],pe)}else e.replaceChild(n[u++],t[c++])}else c++;else t[c++].remove()}}}const te="_$DX_DELEGATE";function Ae(e,t,n,a={}){let o;return we(l=>{o=l,t===document?e():h(t,e(),t.firstChild?null:void 0,n)},a.owner),()=>{o(),t.textContent=""}}function C(e,t,n,a){let o;const l=()=>{const u=document.createElement("template");return u.innerHTML=e,u.content.firstChild},c=()=>(o||(o=l())).cloneNode(!0);return c.cloneNode=c,c}function Se(e,t=window.document){const n=t[te]||(t[te]=new Set);for(let a=0,o=e.length;a<o;a++){const l=e[a];n.has(l)||(n.add(l),t.addEventListener(l,Ee))}}function _e(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function I(e,t){t==null?e.removeAttribute("class"):e.className=t}function h(e,t,n,a){if(n!==void 0&&!a&&(a=[]),typeof t!="function")return D(e,t,a,n);k(o=>D(e,t(),o,n),a)}function Ee(e){let t=e.target;const n=`$$${e.type}`,a=e.target,o=e.currentTarget,l=f=>Object.defineProperty(e,"target",{configurable:!0,value:f}),c=()=>{const f=t[n];if(f&&!t.disabled){const y=t[`${n}Data`];if(y!==void 0?f.call(t,y,e):f.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&l(t.host),!0},u=()=>{for(;c()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const f=e.composedPath();l(f[0]);for(let y=0;y<f.length-2&&(t=f[y],!!c());y++){if(t._$host){t=t._$host,u();break}if(t.parentNode===o)break}}else u();l(a)}function D(e,t,n,a,o){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,c=a!==void 0;if(e=c&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(l==="number"&&(t=t.toString(),t===n))return n;if(c){let u=n[0];u&&u.nodeType===3?u.data!==t&&(u.data=t):u=document.createTextNode(t),n=N(e,n,a,u)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean")n=N(e,n,a);else{if(l==="function")return k(()=>{let u=t();for(;typeof u=="function";)u=u();n=D(e,u,n,a)}),()=>n;if(Array.isArray(t)){const u=[],f=n&&Array.isArray(n);if(X(u,t,n,o))return k(()=>n=D(e,u,n,a,!0)),()=>n;if(u.length===0){if(n=N(e,n,a),c)return n}else f?n.length===0?re(e,u,a):Ie(e,n,u):(n&&N(e),re(e,u));n=u}else if(t.nodeType){if(Array.isArray(n)){if(c)return n=N(e,n,a,t);N(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function X(e,t,n,a){let o=!1;for(let l=0,c=t.length;l<c;l++){let u=t[l],f=n&&n[e.length],y;if(!(u==null||u===!0||u===!1))if((y=typeof u)=="object"&&u.nodeType)e.push(u);else if(Array.isArray(u))o=X(e,u,f)||o;else if(y==="function")if(a){for(;typeof u=="function";)u=u();o=X(e,Array.isArray(u)?u:[u],Array.isArray(f)?f:[f])||o}else e.push(u),o=!0;else{const p=String(u);f&&f.nodeType===3&&f.data===p?e.push(f):e.push(document.createTextNode(p))}}return o}function re(e,t,n=null){for(let a=0,o=t.length;a<o;a++)e.insertBefore(t[a],n)}function N(e,t,n,a){if(n===void 0)return e.textContent="";const o=a||document.createTextNode("");if(t.length){let l=!1;for(let c=t.length-1;c>=0;c--){const u=t[c];if(o!==u){const f=u.parentNode===e;!l&&!c?f?e.replaceChild(o,u):e.insertBefore(o,n):f&&u.remove()}else l=!0}}else e.insertBefore(o,n);return[o]}let Te={data:""},Ne=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Te,Be=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Oe=/\/\*[^]*?\*\/|  +/g,ne=/\n+/g,_=(e,t)=>{let n="",a="",o="";for(let l in e){let c=e[l];l[0]=="@"?l[1]=="i"?n=l+" "+c+";":a+=l[1]=="f"?_(c,l):l+"{"+_(c,l[1]=="k"?"":t)+"}":typeof c=="object"?a+=_(c,t?t.replace(/([^,])+/g,u=>l.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,f=>/&/.test(f)?f.replace(/&/g,u):u?u+" "+f:f)):l):c!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=_.p?_.p(l,c):l+":"+c+";")}return n+(t&&o?t+"{"+o+"}":o)+a},z={},he=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+he(e[n]);return t}return e},Fe=(e,t,n,a,o)=>{let l=he(e),c=z[l]||(z[l]=(f=>{let y=0,p=11;for(;y<f.length;)p=101*p+f.charCodeAt(y++)>>>0;return"go"+p})(l));if(!z[c]){let f=l!==e?e:(y=>{let p,w,x=[{}];for(;p=Be.exec(y.replace(Oe,""));)p[4]?x.shift():p[3]?(w=p[3].replace(ne," ").trim(),x.unshift(x[0][w]=x[0][w]||{})):x[0][p[1]]=p[2].replace(ne," ").trim();return x[0]})(e);z[c]=_(o?{["@keyframes "+c]:f}:f,n?"":"."+c)}let u=n&&z.g?z.g:null;return n&&(z.g=z[c]),((f,y,p,w)=>{w?y.data=y.data.replace(w,f):y.data.indexOf(f)===-1&&(y.data=p?f+y.data:y.data+f)})(z[c],t,a,u),c},Le=(e,t,n)=>e.reduce((a,o,l)=>{let c=t[l];if(c&&c.call){let u=c(n),f=u&&u.props&&u.props.className||/^go/.test(u)&&u;c=f?"."+f:u&&typeof u=="object"?u.props?"":_(u,""):u===!1?"":u}return a+o+(c??"")},"");function g(e){let t=this||{},n=e.call?e(t.p):e;return Fe(n.unshift?n.raw?Le(n,[].slice.call(arguments,1),t.p):n.reduce((a,o)=>Object.assign(a,o&&o.call?o(t.p):o),{}):n,Ne(t.target),t.g,t.o,t.k)}g.bind({g:1});g.bind({k:1});function r(e){return`${e/16}rem`}let s={ref:{palette:{error0:()=>"#000000ff",error10:()=>"#410e0bff",error20:()=>"#601410ff",error30:()=>"#8c1d18ff",error40:()=>"#b3261eff",error50:()=>"#dc362eff",error60:()=>"#e46962ff",error70:()=>"#ec928eff",error80:()=>"#f2b8b5ff",error90:()=>"#f9dedcff",error95:()=>"#fceeeeff",error99:()=>"#fffbf9ff",error100:()=>"#ffffffff",tertiary0:()=>"#000000ff",tertiary10:()=>"#31111dff",tertiary20:()=>"#492532ff",tertiary30:()=>"#633b48ff",tertiary40:()=>"#7d5260ff",tertiary50:()=>"#986977ff",tertiary60:()=>"#b58392ff",tertiary70:()=>"#d29dacff",tertiary80:()=>"#efb8c8ff",tertiary90:()=>"#ffd8e4ff",tertiary95:()=>"#ffecf1ff",tertiary99:()=>"#fffbfaff",tertiary100:()=>"#ffffffff",secondary0:()=>"#000000ff",secondary10:()=>"#1d192bff",secondary20:()=>"#332d41ff",secondary30:()=>"#4a4458ff",secondary40:()=>"#625b71ff",secondary50:()=>"#7a7289ff",secondary60:()=>"#958da5ff",secondary70:()=>"#b0a7c0ff",secondary80:()=>"#ccc2dcff",secondary90:()=>"#e8def8ff",secondary95:()=>"#f6edffff",secondary99:()=>"#fffbfeff",secondary100:()=>"#ffffffff",primary0:()=>"#000000ff",primary10:()=>"#21005dff",primary20:()=>"#381e72ff",primary30:()=>"#4f378bff",primary40:()=>"#6750a4ff",primary50:()=>"#7f67beff",primary60:()=>"#9a82dbff",primary70:()=>"#b69df8ff",primary80:()=>"#d0bcffff",primary90:()=>"#eaddffff",primary95:()=>"#f6edffff",primary99:()=>"#fffbfeff",primary100:()=>"#ffffffff","neutral-variant0":()=>"#000000ff","neutral-variant10":()=>"#1d1a22ff","neutral-variant20":()=>"#322f37ff","neutral-variant30":()=>"#49454fff","neutral-variant40":()=>"#605d66ff","neutral-variant50":()=>"#79747eff","neutral-variant60":()=>"#938f99ff","neutral-variant70":()=>"#aea9b4ff","neutral-variant80":()=>"#cac4d0ff","neutral-variant90":()=>"#e7e0ecff","neutral-variant95":()=>"#f5eefaff","neutral-variant99":()=>"#fffbfeff","neutral-variant100":()=>"#ffffffff",neutral0:()=>"#000000ff",neutral10:()=>"#1c1b1fff",neutral12:()=>"#211F26ff",neutral20:()=>"#313033ff",neutral22:()=>"#36343Bff",neutral30:()=>"#484649ff",neutral40:()=>"#605d62ff",neutral50:()=>"#787579ff",neutral60:()=>"#939094ff",neutral70:()=>"#aeaaaeff",neutral80:()=>"#c9c5caff",neutral90:()=>"#e6e1e5ff",neutral94:()=>"#F3EDF7ff",neutral95:()=>"#f4eff4ff",neutral99:()=>"#fffbfeff",neutral100:()=>"#ffffffff",black:()=>"#000000ff",white:()=>"#ffffffff"},typeface:{plain:()=>"Roboto",brand:()=>"Roboto","weight-bold":()=>"700","weight-medium":()=>"500","weight-regular":()=>"400"}},sys:{typescale:{"label-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(16),"line-height-unit":()=>r(2),"line-height":()=>r(16),"tracking-value":()=>r(.5),"tracking-unit":()=>r(2),tracking:()=>r(.5),"size-value":()=>r(11),"size-unit":()=>r(2),size:()=>r(11),weight:()=>s.ref.typeface["weight-medium"](),font:()=>s.ref.typeface.plain()},"label-medium":{"axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","text-transform":()=>"1","line-height-value":()=>r(16),"line-height-unit":()=>r(2),"line-height":()=>r(16),"tracking-value":()=>r(.5),"tracking-unit":()=>r(2),tracking:()=>r(.5),"size-value":()=>r(12),"size-unit":()=>r(2),size:()=>r(12),weight:()=>s.ref.typeface["weight-medium"](),font:()=>s.ref.typeface.plain()},"label-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(20),"line-height-unit":()=>r(2),"line-height":()=>r(20),"tracking-value":()=>r(.10000000149011612),"tracking-unit":()=>r(2),tracking:()=>r(.10000000149011612),"size-value":()=>r(14),"size-unit":()=>r(2),size:()=>r(14),weight:()=>s.ref.typeface["weight-medium"](),font:()=>s.ref.typeface.plain()},"body-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(16),"line-height-unit":()=>r(2),"line-height":()=>r(16),"tracking-value":()=>r(.4000000059604645),"tracking-unit":()=>r(2),tracking:()=>r(.4000000059604645),"size-value":()=>r(12),"size-unit":()=>r(2),size:()=>r(12),weight:()=>s.ref.typeface["weight-regular"](),font:()=>s.ref.typeface.plain()},"body-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(20),"line-height-unit":()=>r(2),"line-height":()=>r(20),"tracking-value":()=>r(.25),"tracking-unit":()=>r(2),tracking:()=>r(.25),"size-value":()=>r(14),"size-unit":()=>r(2),size:()=>r(14),weight:()=>s.ref.typeface["weight-regular"](),font:()=>s.ref.typeface.plain()},"body-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(24),"line-height-unit":()=>r(2),"line-height":()=>r(24),"tracking-value":()=>r(.5),"tracking-unit":()=>r(2),tracking:()=>r(.5),"size-value":()=>r(16),"size-unit":()=>r(2),size:()=>r(16),weight:()=>s.ref.typeface["weight-regular"](),font:()=>s.ref.typeface.plain()},"title-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(20),"line-height-unit":()=>r(2),"line-height":()=>r(20),"tracking-value":()=>r(.10000000149011612),"tracking-unit":()=>r(2),tracking:()=>r(.10000000149011612),"size-value":()=>r(14),"size-unit":()=>r(2),size:()=>r(14),weight:()=>s.ref.typeface["weight-medium"](),font:()=>s.ref.typeface.plain()},"title-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(24),"line-height-unit":()=>r(2),"line-height":()=>r(24),"tracking-value":()=>r(.15000000596046448),"tracking-unit":()=>r(2),tracking:()=>r(.15000000596046448),"size-value":()=>r(16),"size-unit":()=>r(2),size:()=>r(16),weight:()=>s.ref.typeface["weight-medium"](),font:()=>s.ref.typeface.plain()},"title-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(28),"line-height-unit":()=>r(2),"line-height":()=>r(28),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(22),"size-unit":()=>r(2),size:()=>r(22),weight:()=>s.ref.typeface["weight-regular"](),font:()=>s.ref.typeface.brand()},"headline-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(32),"line-height-unit":()=>r(2),"line-height":()=>r(32),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(24),"size-unit":()=>r(2),size:()=>r(24),weight:()=>s.ref.typeface["weight-regular"](),font:()=>s.ref.typeface.brand()},"headline-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(36),"line-height-unit":()=>r(2),"line-height":()=>r(36),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(28),"size-unit":()=>r(2),size:()=>r(28),weight:()=>s.ref.typeface["weight-regular"](),font:()=>s.ref.typeface.brand()},"headline-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(40),"line-height-unit":()=>r(2),"line-height":()=>r(40),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(32),"size-unit":()=>r(2),size:()=>r(32),font:()=>s.ref.typeface.brand(),weight:()=>s.ref.typeface["weight-regular"]()},"display-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(44),"line-height-unit":()=>r(2),"line-height":()=>r(44),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(36),"size-unit":()=>r(2),size:()=>r(36),weight:()=>s.ref.typeface["weight-regular"](),font:()=>s.ref.typeface.brand()},"display-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(52),"line-height-unit":()=>r(2),"line-height":()=>r(52),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(45),"size-unit":()=>r(2),size:()=>r(45),weight:()=>s.ref.typeface["weight-regular"](),font:()=>s.ref.typeface.brand()},"display-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(64),"line-height-unit":()=>r(2),"line-height":()=>r(64),"tracking-value":()=>r(-.25),"tracking-unit":()=>r(2),tracking:()=>r(-.25),"size-value":()=>r(57),"size-unit":()=>r(2),size:()=>r(57),weight:()=>s.ref.typeface["weight-regular"](),font:()=>s.ref.typeface.brand()}},elevation:{surface:{"tint-color":()=>s.sys.color.primary()},"level5-value":()=>1,"level5-unit":()=>1,level5:()=>1,"level4-value":()=>8,"level4-unit":()=>1,level4:()=>8,"level3-value":()=>6,"level3-unit":()=>1,level3:()=>6,"level2-value":()=>3,"level2-unit":()=>1,level2:()=>3,"level1-value":()=>1,"level1-unit":()=>1,level1:()=>1,"level0-value":()=>0,"level0-unit":()=>1,level0:()=>0},state:{dragged:{"state-layer-opacity":()=>.1599999964237213},pressed:{"state-layer-opacity":()=>.11999999731779099},focus:{"state-layer-opacity":()=>.11999999731779099},hover:{"state-layer-opacity":()=>.07999999821186066}},shape:{corner:{"full-family":()=>r(3),"extra-large":{top:{family:()=>r(1),"default-size":()=>r(0),"top-left":()=>r(28),"top-right-unit":()=>r(1),"top-right":()=>r(28)},family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(28)},large:{top:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0),"top-left-unit":()=>r(1),"top-left":()=>r(16),"top-right-unit":()=>r(1),"top-right":()=>r(16)},end:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0),"top-right-unit":()=>r(1),"top-right":()=>r(16),"bottom-right-unit":()=>r(1),"bottom-right":()=>r(16)},family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(16)},medium:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(12)},small:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(8)},"extra-small":{top:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0),"top-left-unit":()=>r(1),"top-left":()=>r(4),"top-right-unit":()=>r(1),"top-right":()=>r(4)},family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(4)},none:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0)},full:()=>r(999)}},motion:{easing:{emphasized:{normal:()=>"cubic-bezier(.3,0,0,1)",accelerate:()=>"cubic-bezier(.3,0,.8,.15)",decelerate:()=>"cubic-bezier(.05,.7,.1,1)"},standard:{normal:()=>"cubic-bezier(0.2, 0, 0, 1)",accelerate:()=>"cubic-bezier(.3,0,1,1)",decelerate:()=>"cubic-bezier(0,0,0,1)"},linear:()=>"linear"},"duration-1000":()=>"1000ms","duration-900":()=>"900ms","duration-800":()=>"800ms","duration-700":()=>"700ms","duration-600":()=>"600ms","duration-550":()=>"550ms","duration-500":()=>"500ms","duration-450":()=>"450ms","duration-400":()=>"400ms","duration-350":()=>"350ms","duration-300":()=>"300ms","duration-250":()=>"250ms","duration-200":()=>"200ms","duration-150":()=>"150ms","duration-100":()=>"100ms","duration-50":()=>"50ms","path-standard-path":()=>"1"},color:{"surface-tint":()=>s.sys.color.primary(),"surface-tint-color":()=>s.sys.color.primary(),"on-error-container":()=>s.ref.palette.error80(),"on-error":()=>s.ref.palette.error20(),"error-container":()=>s.ref.palette.error30(),"on-tertiary-container":()=>s.ref.palette.tertiary90(),"on-tertiary":()=>s.ref.palette.tertiary20(),"tertiary-container":()=>s.ref.palette.tertiary30(),tertiary:()=>s.ref.palette.tertiary80(),shadow:()=>s.ref.palette.neutral0(),error:()=>s.ref.palette.error80(),outline:()=>s.ref.palette["neutral-variant60"](),"outline-variant":()=>s.ref.palette["neutral-variant30"](),"on-background":()=>s.ref.palette.neutral90(),background:()=>s.ref.palette.neutral10(),"inverse-on-surface":()=>s.ref.palette.neutral20(),"inverse-surface":()=>s.ref.palette.neutral90(),"on-surface-variant":()=>s.ref.palette["neutral-variant80"](),"on-surface":()=>s.ref.palette.neutral90(),"surface-variant":()=>s.ref.palette["neutral-variant30"](),surface:()=>s.ref.palette.neutral10(),"surface-container":()=>s.ref.palette.neutral12(),"surface-container-highest":()=>s.ref.palette.neutral22(),"on-secondary-container":()=>s.ref.palette.secondary90(),"on-secondary":()=>s.ref.palette.secondary20(),"secondary-container":()=>s.ref.palette.secondary30(),secondary:()=>s.ref.palette.secondary80(),"inverse-primary":()=>s.ref.palette.primary40(),"on-primary-container":()=>s.ref.palette.primary90(),"on-primary":()=>s.ref.palette.primary20(),"primary-container":()=>s.ref.palette.primary30(),primary:()=>s.ref.palette.primary80()}}};const i=s;window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&(s={...s,sys:{...s.sys,color:{...s.sys.color,"surface-tint":()=>s.sys.color.primary(),"surface-tint-color":()=>s.sys.color.primary(),"on-error-container":()=>s.ref.palette.error10(),"on-error":()=>s.ref.palette.error100(),"error-container":()=>s.ref.palette.error90(),"on-tertiary-container":()=>s.ref.palette.tertiary10(),"on-tertiary":()=>s.ref.palette.tertiary100(),"tertiary-container":()=>s.ref.palette.tertiary90(),tertiary:()=>s.ref.palette.tertiary40(),shadow:()=>s.ref.palette.neutral0(),error:()=>s.ref.palette.error40(),outline:()=>s.ref.palette["neutral-variant50"](),"outline-variant":()=>s.ref.palette["neutral-variant80"](),"on-background":()=>s.ref.palette.neutral10(),background:()=>s.ref.palette.neutral99(),"inverse-on-surface":()=>s.ref.palette.neutral95(),"inverse-surface":()=>s.ref.palette.neutral20(),"on-surface-variant":()=>s.ref.palette["neutral-variant30"](),"on-surface":()=>s.ref.palette.neutral10(),"surface-variant":()=>s.ref.palette["neutral-variant90"](),surface:()=>s.ref.palette.neutral99(),"surface-container":()=>s.ref.palette.neutral94(),"surface-container-highest":()=>s.ref.palette.neutral90(),"on-secondary-container":()=>s.ref.palette.secondary10(),"on-secondary":()=>s.ref.palette.secondary100(),"secondary-container":()=>s.ref.palette.secondary90(),secondary:()=>s.ref.palette.secondary40(),"inverse-primary":()=>s.ref.palette.primary80(),"on-primary-container":()=>s.ref.palette.primary10(),"on-primary":()=>s.ref.palette.primary100(),"primary-container":()=>s.ref.palette.primary90(),primary:()=>s.ref.palette.primary40()}}});var Ue=C("<div>");const Me=({children:e})=>(()=>{var t=Ue();return h(t,e),k(()=>I(t,g`
                background-color: ${i.sys.color.background()};
                min-height: 100vh;
                width: 100%;

                /* debug purposes */
                display: flex;
                padding: 1rem;
                flex-direction: column;
                gap: 1rem;
                font-family: Roboto;
                color: white;
            `)),t})();function ye(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=ye(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function A(){for(var e,t,n=0,a="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=ye(e))&&(a&&(a+=" "),a+=t);return a}var je=C("<span>");function Pe(){return g`
        font-family: "Material Symbols Rounded";
        font-weight: normal;
        font-style: normal;
        font-size: var(--icon-size, 24px);
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: "liga";
        -webkit-font-smoothing: antialiased;
    `}const ie=e=>(()=>{var t=je();return h(t,()=>e.children),k(()=>I(t,A(Pe(),e.class))),t})();var Re=C("<button>");const ae=g`
    font-size: var(--icon-size);
`;function Ke(e,t){let n=[];switch(n.push(g`
        position: relative;
        border: none;
        overflow: hidden;
        font-family: ${i.ref.typeface.plain()};
        user-select: none;
        display: flex;
        align-items: center;

        outline-style: solid;
        outline-offset: ${r(2)};
        outline-width: 0;
        outline-color: transparent;

        &::after {
            transition: background-color ${i.sys.motion["duration-100"]()}
                ${i.sys.motion.easing.standard.decelerate()};
            content: "";
            position: absolute;
            background-color: transparent;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        &:hover {
            &::after {
                transition: background-color ${i.sys.motion["duration-100"]()}
                    ${i.sys.motion.easing.standard.accelerate()};
            }
        }

        &[disabled] {
            cursor: not-allowed;
        }
    `),e){case"xs":n.push(g`
                height: ${r(32)};
                border-width: ${r(1)};
                padding-left: ${r(12)};
                padding-right: ${r(12)};
                gap: ${r(8)};
                font-weight: ${i.ref.typeface["weight-medium"]()};
                font-size: ${r(14)};
                line-height: ${r(20)};
                letter-spacing: ${r(.1)};

                --icon-size: ${r(20)};
            `),t?n.push(g`
                    border-radius: ${i.sys.shape.corner.medium["default-size"]()};
                    transition: all ${i.sys.motion["duration-200"]()}
                        ${i.sys.motion.easing.standard.decelerate()};

                    &:not(&[disabled]) {
                        &:active {
                            border-radius: ${i.sys.shape.corner.full()};
                            transition: border-radius ${i.sys.motion["duration-50"]()}
                                ${i.sys.motion.easing.standard.decelerate()};
                        }

                        &:focus-visible {
                            outline-color: ${i.sys.color.outline()};
                            outline-width: ${r(4)};
                        }
                    }
                `):n.push(g`
                    border-radius: ${r(32)};
                    transition: all ${i.sys.motion["duration-200"]()}
                        ${i.sys.motion.easing.standard.accelerate()};

                    &:not(&[disabled]) {
                        &:active {
                            border-radius: ${i.sys.shape.corner.small["default-size"]()};
                            transition: border-radius ${i.sys.motion["duration-50"]()}
                                ${i.sys.motion.easing.standard.decelerate()};
                        }

                        &:focus-visible {
                            outline-color: ${i.sys.color.outline()};
                            outline-width: ${r(4)};
                        }
                    }
                `);break;case"s":n.push(g`
                height: ${r(40)};
                border-width: ${r(1)};
                padding-left: ${r(16)};
                padding-right: ${r(16)};
                gap: ${r(8)};
                font-weight: ${i.ref.typeface["weight-medium"]()};
                font-size: ${r(14)};
                line-height: ${r(20)};
                letter-spacing: ${r(.1)};

                --icon-size: ${r(20)};
            `),t?n.push(g`
                    border-radius: ${i.sys.shape.corner.medium["default-size"]()};
                    transition: all ${i.sys.motion["duration-200"]()}
                        ${i.sys.motion.easing.standard.decelerate()};

                    &:not(&[disabled]) {
                        &:active {
                            border-radius: ${r(40)};
                            transition: border-radius ${i.sys.motion["duration-50"]()}
                                ${i.sys.motion.easing.standard.decelerate()};
                        }

                        &:focus-visible {
                            outline-color: ${i.sys.color.outline()};
                            outline-width: ${r(4)};
                        }
                    }
                `):n.push(g`
                    border-radius: ${r(40)};
                    transition: all ${i.sys.motion["duration-200"]()}
                        ${i.sys.motion.easing.standard.accelerate()};

                    &:not(&[disabled]) {
                        &:active {
                            border-radius: ${i.sys.shape.corner.medium["default-size"]()};
                            transition: border-radius ${i.sys.motion["duration-50"]()}
                                ${i.sys.motion.easing.standard.decelerate()};
                        }

                        &:focus-visible {
                            outline-color: ${i.sys.color.outline()};
                            outline-width: ${r(4)};
                        }
                    }
                `);break;case"m":if(n.push(g`
                height: ${r(56)};
                border-width: ${r(1)};
                padding-left: ${r(24)};
                padding-right: ${r(24)};
                gap: ${r(8)};
                font-weight: ${i.ref.typeface["weight-medium"]()};
                font-size: ${r(16)};
                line-height: ${r(24)};
                letter-spacing: ${r(.15)};

                --icon-size: ${r(24)};
            `),t)n.push(g`
                    border-radius: ${i.sys.shape.corner.large["default-size"]()};
                    transition: all ${i.sys.motion["duration-200"]()}
                        ${i.sys.motion.easing.standard.decelerate()};

                    &:not(&[disabled]) {
                        &:active {
                            border-radius: ${r(40)};
                            transition: border-radius ${i.sys.motion["duration-50"]()}
                                ${i.sys.motion.easing.standard.decelerate()};
                        }

                        &:focus-visible {
                            outline-color: ${i.sys.color.outline()};
                            outline-width: ${r(4)};
                        }
                    }
                `);else{n.push(g`
                    border-radius: ${r(56)};
                    transition: all ${i.sys.motion["duration-200"]()}
                        ${i.sys.motion.easing.standard.accelerate()};

                    &:not(&[disabled]) {
                        &:active {
                            border-radius: ${i.sys.shape.corner.medium["default-size"]()};
                            transition: border-radius ${i.sys.motion["duration-50"]()}
                                ${i.sys.motion.easing.standard.decelerate()};
                        }

                        &:focus-visible {
                            outline-color: ${i.sys.color.outline()};
                            outline-width: ${r(4)};
                        }
                    }
                `);break}break;case"l":if(n.push(g`
                height: ${r(96)};
                border-width: ${r(2)};
                padding-left: ${r(48)};
                padding-right: ${r(48)};
                gap: ${r(12)};
                font-weight: ${i.ref.typeface["weight-regular"]()};
                font-size: ${r(24)};
                line-height: ${r(32)};
                letter-spacing: 0;

                --icon-size: ${r(32)};
            `),t)n.push(g`
                    border-radius: ${i.sys.shape.corner.large["default-size"]()};
                    transition: all ${i.sys.motion["duration-200"]()}
                        ${i.sys.motion.easing.standard.decelerate()};

                    &:not(&[disabled]) {
                        &:active {
                            border-radius: ${r(40)};
                            transition: border-radius ${i.sys.motion["duration-50"]()}
                                ${i.sys.motion.easing.standard.decelerate()};
                        }

                        &:focus-visible {
                            outline-color: ${i.sys.color.outline()};
                            outline-width: ${r(4)};
                        }
                    }
                `);else{n.push(g`
                    border-radius: ${r(96)};
                    transition: all ${i.sys.motion["duration-200"]()}
                        ${i.sys.motion.easing.standard.accelerate()};

                    &:not(&[disabled]) {
                        &:active {
                            border-radius: ${i.sys.shape.corner.large["default-size"]()};
                            transition: border-radius ${i.sys.motion["duration-50"]()}
                                ${i.sys.motion.easing.standard.decelerate()};
                        }

                        &:focus-visible {
                            outline-color: ${i.sys.color.outline()};
                            outline-width: ${r(4)};
                        }
                    }
                `);break}break;case"xl":n.push(g`
                height: ${r(132)};
                border-width: ${r(3)};
                padding-left: ${r(64)};
                padding-right: ${r(64)};
                gap: ${r(16)};
                font-weight: ${i.ref.typeface["weight-regular"]()};
                font-size: ${r(32)};
                line-height: ${r(40)};
                letter-spacing: 0;

                --icon-size: ${r(40)};
            `),t?n.push(g`
                    border-radius: ${i.sys.shape.corner["extra-large"]["default-size"]()};
                    transition: all ${i.sys.motion["duration-200"]()}
                        ${i.sys.motion.easing.standard.decelerate()};

                    &:not(&[disabled]) {
                        &:active {
                            border-radius: ${r(40)};
                            transition: border-radius ${i.sys.motion["duration-50"]()}
                                ${i.sys.motion.easing.standard.decelerate()};
                        }

                        &:focus-visible {
                            outline-color: ${i.sys.color.outline()};
                            outline-width: ${r(4)};
                        }
                    }
                `):n.push(g`
                    border-radius: ${r(132)};
                    transition: all ${i.sys.motion["duration-200"]()}
                        ${i.sys.motion.easing.standard.accelerate()};

                    &:not(&[disabled]) {
                        &:active {
                            border-radius: ${i.sys.shape.corner.large["default-size"]()};
                            transition: border-radius ${i.sys.motion["duration-50"]()}
                                ${i.sys.motion.easing.standard.decelerate()};
                        }

                        &:focus-visible {
                            outline-color: ${i.sys.color.outline()};
                            outline-width: ${r(4)};
                        }
                    }
                `);break}return n}const Q=e=>(()=>{var t=Re();return t.$$click=n=>{e.onClick(n)},h(t,(()=>{var n=ee(()=>!!e.leadingIcon);return()=>n()&&d(ie,{class:ae,get children(){return e.leadingIcon}})})(),null),h(t,()=>e.children,null),h(t,(()=>{var n=ee(()=>!!e.trailingIcon);return()=>n()&&d(ie,{class:ae,get children(){return e.trailingIcon}})})(),null),k(n=>{var a=A(e.class,Ke(e.size,e.toggled)),o=e.disabled,l=e.toggled;return a!==n.e&&I(t,n.e=a),o!==n.t&&(t.disabled=n.t=o),l!==n.a&&_e(t,"data-toggled",n.a=l),n},{e:void 0,t:void 0,a:void 0}),t})();Se(["click"]);function b(e,t){const n=e.substring(0,7),a=Math.max(0,Math.min(1,t)),l=Math.round(a*255).toString(16).padStart(2,"0");return`${n}${l}`}function qe(e){let t=[];return t.push(g`
        background-color: ${i.sys.color.primary()};
        color: ${i.sys.color["on-primary"]()};

        &:hover {
            &::after {
                background-color: ${b(i.sys.color["on-primary"](),i.sys.state.hover["state-layer-opacity"]())};
            }
        }

        &:active {
            &::after {
                background-color: ${b(i.sys.color["on-primary"](),i.sys.state.pressed["state-layer-opacity"]())};
            }
        }

        &[disabled] {
            background-color: ${b(i.sys.color["on-surface"](),.1)};
            color: ${b(i.sys.color["on-surface"](),.38)};

            &::after {
                background-color: transparent;
            }
        }
    `),e&&t.push(g`
            background: ${i.sys.color["surface-container"]()};
            color: ${i.sys.color["on-surface-variant"]()};

            &[data-toggled="true"] {
                background: ${i.sys.color.primary()};
                color: ${i.sys.color["on-primary"]()};
            }
        `),t}const B=e=>{const[t,n]=Z(!1);return d(Q,{get size(){return e.size||"s"},get toggled(){return t()},onClick:()=>{e.togglable?(n(!t()),e.onClick(t())):e.onClick()},get class(){return A(qe(e.togglable),e.class)},get disabled(){return e.disabled||!1},get leadingIcon(){return e.leadingIcon},get trailingIcon(){return e.trailingIcon},get children(){return e.children}})};var S=(e=>(e[e.vertical=0]="vertical",e[e.horizontal=1]="horizontal",e))(S||{}),Ve=C("<div>");function De(e,t){let n=[];switch(n.push(g`
        background-color: ${i.sys.color["outline-variant"]()};
        --thickness: ${r(1)};
    `),e){case S.horizontal:switch(n.push(g`
                height: var(--thickness);
            `),t){case"full":n.push(g`
                        width: 100%;
                    `);break;case"inset":n.push(g`
                        width: calc(100% - ${r(16)});
                        margin-left: ${r(16)};
                    `);break;case"middle-inset":n.push(g`
                        width: calc(100% - ${r(32)});
                        margin-left: ${r(16)};
                        margin-right: ${r(16)};
                    `);break}break;case S.vertical:switch(n.push(g`
                width: var(--thickness);
            `),t){case"middle-inset":n.push(g`
                        height: calc(100% - ${r(32)});
                        margin-top: ${r(16)};
                        margin-bottom: ${r(16)};
                    `);break;case"full":n.push(g`
                        width: var(--thickness);
                        height: 100%;
                    `);break}break}return n}const P=e=>(e.width==="inset"&&e.direction===S.vertical&&console.warn("A divider cannot be both vertical and inset"),(()=>{var t=Ve();return k(()=>I(t,A(De(e.direction,e.width||"full")))),t})());var Ge=C("<div>");function He(){let e=[];return e.push(g`
        padding: 1rem;
    `),e}const Qe=e=>(()=>{var t=Ge();return h(t,()=>e.children),k(()=>I(t,A(e.class,He()))),t})();function We(){let e=[];return e.push(g`
        background: ${i.sys.color["surface-container-highest"]()};
        box-shadow: 0 0 ${r(1)} ${i.sys.color.shadow()};
        border-radius: ${i.sys.shape.corner.medium["default-size"]()};
    `),e}const Xe=e=>d(Qe,{get class(){return A(We())},get children(){return e.children}});function Ze(e){let t=[];return t.push(g`
        background-color: ${i.sys.color["secondary-container"]()};
        color: ${i.sys.color["on-secondary-container"]()};

        &:hover {
            &::after {
                background-color: ${b(i.sys.color["on-secondary"](),i.sys.state.hover["state-layer-opacity"]())};
            }
        }

        &:active {
            &::after {
                background-color: ${b(i.sys.color["on-secondary-container"](),i.sys.state.pressed["state-layer-opacity"]())};
            }
        }

        &[disabled] {
            background-color: ${b(i.sys.color["on-surface"](),.1)};
            color: ${b(i.sys.color["on-surface"](),.38)};

            &::after {
                background-color: transparent;
            }
        }
    `),e&&t.push(g`
            background: ${i.sys.color["secondary-container"]()};
            color: ${i.sys.color["on-secondary-container"]()};

            &[data-toggled="true"] {
                background: ${i.sys.color.secondary()};
                color: ${i.sys.color["on-secondary"]()};
            }
        `),t}const O=e=>{const[t,n]=Z(!1);return d(Q,{get size(){return e.size||"s"},get toggled(){return t()},onClick:()=>{e.togglable?(n(!t()),e.onClick(t())):e.onClick()},get class(){return A(Ze(e.togglable),e.class)},get disabled(){return e.disabled||!1},get leadingIcon(){return e.leadingIcon},get trailingIcon(){return e.trailingIcon},get children(){return e.children}})};function Je(e){let t=[];return t.push(g`
        background-color: transparent;
        color: ${i.sys.color["on-surface-variant"]()};
        border-width: ${r(1)};
        border-style: solid;
        border-color: ${i.sys.color["outline-variant"]()};

        &:hover {
            &::after {
                background-color: ${b(i.sys.color["on-surface-variant"](),i.sys.state.hover["state-layer-opacity"]())};
            }
        }

        &:active {
            &::after {
                background-color: ${b(i.sys.color["on-secondary-container"](),i.sys.state.pressed["state-layer-opacity"]())};
            }
        }

        &[disabled] {
            background-color: ${b(i.sys.color["on-surface"](),.1)};
            color: ${b(i.sys.color["on-surface"](),.38)};

            &::after {
                background-color: transparent;
            }
        }
    `),e&&t.push(g`
            &.${t[0]} {
                color: ${i.sys.color["on-surface-variant"]()};

                &[data-toggled="true"] {
                    background: ${i.sys.color["inverse-surface"]()};
                    color: ${i.sys.color["inverse-on-surface"]()};
                }
            }
        `),t}const F=e=>{const[t,n]=Z(!1);return d(Q,{get size(){return e.size||"s"},get toggled(){return t()},onClick:()=>{e.togglable?(n(!t()),e.onClick(t())):e.onClick()},get class(){return A(Je(e.togglable),e.class)},get disabled(){return e.disabled||!1},get leadingIcon(){return e.leadingIcon},get trailingIcon(){return e.trailingIcon},get children(){return e.children}})};function Ye(){let e=[];return e.push(g`
        background-color: transparent;
        color: ${i.sys.color.primary()};

        &:hover {
            &::after {
                background-color: ${b(i.sys.color.primary(),i.sys.state.hover["state-layer-opacity"]())};
            }
        }

        &:active {
            &::after {
                background-color: ${b(i.sys.color.primary(),i.sys.state.pressed["state-layer-opacity"]())};
            }
        }

        &[disabled] {
            background-color: ${b(i.sys.color["on-surface"](),.1)};
            color: ${b(i.sys.color["on-surface"](),.38)};

            &::after {
                background-color: transparent;
            }
        }
    `),e}const L=e=>d(Q,{get size(){return e.size||"s"},toggled:!1,onClick:()=>{e.onClick()},get class(){return A(Ye(),e.class)},get disabled(){return e.disabled||!1},get leadingIcon(){return e.leadingIcon},get trailingIcon(){return e.trailingIcon},get children(){return e.children}});var et=C("<h1>Button Variant '<!>'"),tt=C("<h2>Filled Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)"),R=C("<div>"),rt=C("<h2>Tonal Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)"),nt=C("<h2>Outlined Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)"),it=C("<h2>Text Button (default, disabled, icon leading, icon trailing, icon trailing & leading)");const U=({size:e})=>d(Xe,{get children(){return[(()=>{var t=et(),n=t.firstChild,a=n.nextSibling;return a.nextSibling,h(t,e,a),t})(),tt(),(()=>{var t=R();return h(t,d(B,{size:e,togglable:!0,onClick:()=>{},children:"Confirm"}),null),h(t,d(B,{size:e,onClick:()=>{},children:"Confirm"}),null),h(t,d(B,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),h(t,d(B,{size:e,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),h(t,d(B,{size:e,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),h(t,d(B,{size:e,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),k(()=>I(t,g`
                    display: flex;
                    gap: 0.5rem;
                `)),t})(),rt(),(()=>{var t=R();return h(t,d(O,{size:e,togglable:!0,onClick:()=>{},children:"Confirm"}),null),h(t,d(O,{size:e,onClick:()=>{},children:"Confirm"}),null),h(t,d(O,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),h(t,d(O,{size:e,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),h(t,d(O,{size:e,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),h(t,d(O,{size:e,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),k(()=>I(t,g`
                    display: flex;
                    gap: 0.5rem;
                `)),t})(),nt(),(()=>{var t=R();return h(t,d(F,{size:e,togglable:!0,onClick:()=>{},children:"Confirm"}),null),h(t,d(F,{size:e,onClick:()=>{},children:"Confirm"}),null),h(t,d(F,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),h(t,d(F,{size:e,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),h(t,d(F,{size:e,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),h(t,d(F,{size:e,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),k(()=>I(t,g`
                    display: flex;
                    gap: 0.5rem;
                `)),t})(),it(),(()=>{var t=R();return h(t,d(L,{size:e,onClick:()=>{},children:"Confirm"}),null),h(t,d(L,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),h(t,d(L,{size:e,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),h(t,d(L,{size:e,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),h(t,d(L,{size:e,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),k(()=>I(t,g`
                    display: flex;
                    gap: 0.5rem;
                `)),t})()]}});function at(){return d(Me,{get children(){return[d(U,{size:"xs"}),d(P,{get direction(){return S.horizontal}}),d(U,{size:"s"}),d(P,{get direction(){return S.horizontal}}),d(U,{size:"m"}),d(P,{get direction(){return S.horizontal}}),d(U,{size:"l"}),d(P,{get direction(){return S.horizontal}}),d(U,{size:"xl"})]}})}Ae(()=>d(at,{}),document.getElementById("root"));
