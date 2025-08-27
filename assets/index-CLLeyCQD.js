(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();const de=!1,ge=(e,t)=>e===t,J={equals:ge};let he=se;const _=1,j=2,ne={owned:null,cleanups:null,context:null,owner:null};var v=null;let V=null,ye=null,p=null,$=null,E=null,R=0;function pe(e,t){const n=p,a=v,l=e.length===0,s=t===void 0?a:t,f=l?ne:{owned:null,cleanups:null,context:s?s.context:null,owner:s},u=l?e:()=>e(()=>W(()=>O(f)));v=f,p=null;try{return F(u,!0)}finally{p=n,v=a}}function Q(e,t){t=t?Object.assign({},J,t):J;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},a=l=>(typeof l=="function"&&(l=l(n.value)),ie(n,l));return[me.bind(n),a]}function T(e,t,n){const a=$e(e,t,!1,_);X(a)}function W(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function me(){if(this.sources&&this.state)if(this.state===_)X(this);else{const e=$;$=null,F(()=>M(this),!1),$=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function ie(e,t,n){let a=e.value;return(!e.comparator||!e.comparator(a,t))&&(e.value=t,e.observers&&e.observers.length&&F(()=>{for(let l=0;l<e.observers.length;l+=1){const s=e.observers[l],f=V&&V.running;f&&V.disposed.has(s),(f?!s.tState:!s.state)&&(s.pure?$.push(s):E.push(s),s.observers&&le(s)),f||(s.state=_)}if($.length>1e6)throw $=[],new Error},!1)),t}function X(e){if(!e.fn)return;O(e);const t=R;be(e,e.value,t)}function be(e,t,n){let a;const l=v,s=p;p=v=e;try{a=e.fn(t)}catch(f){return e.pure&&(e.state=_,e.owned&&e.owned.forEach(O),e.owned=null),e.updatedAt=n+1,oe(f)}finally{p=s,v=l}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ie(e,a):e.value=a,e.updatedAt=n)}function $e(e,t,n,a=_,l){const s={fn:e,state:a,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:v,context:v?v.context:null,pure:n};return v===null||v!==ne&&(v.owned?v.owned.push(s):v.owned=[s]),s}function ae(e){if(e.state===0)return;if(e.state===j)return M(e);if(e.suspense&&W(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<R);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===_)X(e);else if(e.state===j){const a=$;$=null,F(()=>M(e,t[0]),!1),$=a}}function F(e,t){if($)return e();let n=!1;t||($=[]),E?n=!0:E=[],R++;try{const a=e();return ve(n),a}catch(a){n||(E=null),$=null,oe(a)}}function ve(e){if($&&(se($),$=null),e)return;const t=E;E=null,t.length&&F(()=>he(t),!1)}function se(e){for(let t=0;t<e.length;t++)ae(e[t])}function M(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const a=e.sources[n];if(a.sources){const l=a.state;l===_?a!==t&&(!a.updatedAt||a.updatedAt<R)&&ae(a):l===j&&M(a,t)}}}function le(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=j,n.pure?$.push(n):E.push(n),n.observers&&le(n))}}function O(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),a=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const s=l.pop(),f=n.observerSlots.pop();a<l.length&&(s.sourceSlots[f]=a,l[a]=s,n.observerSlots[a]=f)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)O(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)O(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function we(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function oe(e,t=v){throw we(e)}function h(e,t){return W(()=>e(t||{}))}function ke(e,t,n){let a=n.length,l=t.length,s=a,f=0,u=0,c=t[l-1].nextSibling,g=null;for(;f<l||u<s;){if(t[f]===n[u]){f++,u++;continue}for(;t[l-1]===n[s-1];)l--,s--;if(l===f){const y=s<a?u?n[u-1].nextSibling:n[s-u]:c;for(;u<s;)e.insertBefore(n[u++],y)}else if(s===u)for(;f<l;)(!g||!g.has(t[f]))&&t[f].remove(),f++;else if(t[f]===n[s-1]&&n[u]===t[l-1]){const y=t[--l].nextSibling;e.insertBefore(n[u++],t[f++].nextSibling),e.insertBefore(n[--s],y),t[l]=n[s]}else{if(!g){g=new Map;let w=u;for(;w<s;)g.set(n[w],w++)}const y=g.get(t[f]);if(y!=null)if(u<y&&y<s){let w=f,k=1,Z;for(;++w<l&&w<s&&!((Z=g.get(t[w]))==null||Z!==y+k);)k++;if(k>y-u){const ce=t[f];for(;u<y;)e.insertBefore(n[u++],ce)}else e.replaceChild(n[u++],t[f++])}else f++;else t[f++].remove()}}}const Y="_$DX_DELEGATE";function ze(e,t,n,a={}){let l;return pe(s=>{l=s,t===document?e():m(t,e(),t.firstChild?null:void 0,n)},a.owner),()=>{l(),t.textContent=""}}function z(e,t,n,a){let l;const s=()=>{const u=document.createElement("template");return u.innerHTML=e,u.content.firstChild},f=()=>(l||(l=s())).cloneNode(!0);return f.cloneNode=f,f}function xe(e,t=window.document){const n=t[Y]||(t[Y]=new Set);for(let a=0,l=e.length;a<l;a++){const s=e[a];n.has(s)||(n.add(s),t.addEventListener(s,Ae))}}function Ce(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function K(e,t){t==null?e.removeAttribute("class"):e.className=t}function m(e,t,n,a){if(n!==void 0&&!a&&(a=[]),typeof t!="function")return P(e,t,a,n);T(l=>P(e,t(),l,n),a)}function Ae(e){let t=e.target;const n=`$$${e.type}`,a=e.target,l=e.currentTarget,s=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),f=()=>{const c=t[n];if(c&&!t.disabled){const g=t[`${n}Data`];if(g!==void 0?c.call(t,g,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&s(t.host),!0},u=()=>{for(;f()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();s(c[0]);for(let g=0;g<c.length-2&&(t=c[g],!!f());g++){if(t._$host){t=t._$host,u();break}if(t.parentNode===l)break}}else u();s(a)}function P(e,t,n,a,l){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,f=a!==void 0;if(e=f&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(f){let u=n[0];u&&u.nodeType===3?u.data!==t&&(u.data=t):u=document.createTextNode(t),n=N(e,n,a,u)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=N(e,n,a);else{if(s==="function")return T(()=>{let u=t();for(;typeof u=="function";)u=u();n=P(e,u,n,a)}),()=>n;if(Array.isArray(t)){const u=[],c=n&&Array.isArray(n);if(H(u,t,n,l))return T(()=>n=P(e,u,n,a,!0)),()=>n;if(u.length===0){if(n=N(e,n,a),f)return n}else c?n.length===0?ee(e,u,a):ke(e,n,u):(n&&N(e),ee(e,u));n=u}else if(t.nodeType){if(Array.isArray(n)){if(f)return n=N(e,n,a,t);N(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function H(e,t,n,a){let l=!1;for(let s=0,f=t.length;s<f;s++){let u=t[s],c=n&&n[e.length],g;if(!(u==null||u===!0||u===!1))if((g=typeof u)=="object"&&u.nodeType)e.push(u);else if(Array.isArray(u))l=H(e,u,c)||l;else if(g==="function")if(a){for(;typeof u=="function";)u=u();l=H(e,Array.isArray(u)?u:[u],Array.isArray(c)?c:[c])||l}else e.push(u),l=!0;else{const y=String(u);c&&c.nodeType===3&&c.data===y?e.push(c):e.push(document.createTextNode(y))}}return l}function ee(e,t,n=null){for(let a=0,l=t.length;a<l;a++)e.insertBefore(t[a],n)}function N(e,t,n,a){if(n===void 0)return e.textContent="";const l=a||document.createTextNode("");if(t.length){let s=!1;for(let f=t.length-1;f>=0;f--){const u=t[f];if(l!==u){const c=u.parentNode===e;!s&&!f?c?e.replaceChild(l,u):e.insertBefore(l,n):c&&u.remove()}else s=!0}}else e.insertBefore(l,n);return[l]}let Se={data:""},Ee=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Se,Te=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,_e=/\/\*[^]*?\*\/|  +/g,te=/\n+/g,S=(e,t)=>{let n="",a="",l="";for(let s in e){let f=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+f+";":a+=s[1]=="f"?S(f,s):s+"{"+S(f,s[1]=="k"?"":t)+"}":typeof f=="object"?a+=S(f,t?t.replace(/([^,])+/g,u=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,u):u?u+" "+c:c)):s):f!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=S.p?S.p(s,f):s+":"+f+";")}return n+(t&&l?t+"{"+l+"}":l)+a},x={},ue=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+ue(e[n]);return t}return e},Ne=(e,t,n,a,l)=>{let s=ue(e),f=x[s]||(x[s]=(c=>{let g=0,y=11;for(;g<c.length;)y=101*y+c.charCodeAt(g++)>>>0;return"go"+y})(s));if(!x[f]){let c=s!==e?e:(g=>{let y,w,k=[{}];for(;y=Te.exec(g.replace(_e,""));)y[4]?k.shift():y[3]?(w=y[3].replace(te," ").trim(),k.unshift(k[0][w]=k[0][w]||{})):k[0][y[1]]=y[2].replace(te," ").trim();return k[0]})(e);x[f]=S(l?{["@keyframes "+f]:c}:c,n?"":"."+f)}let u=n&&x.g?x.g:null;return n&&(x.g=x[f]),((c,g,y,w)=>{w?g.data=g.data.replace(w,c):g.data.indexOf(c)===-1&&(g.data=y?c+g.data:g.data+c)})(x[f],t,a,u),f},Be=(e,t,n)=>e.reduce((a,l,s)=>{let f=t[s];if(f&&f.call){let u=f(n),c=u&&u.props&&u.props.className||/^go/.test(u)&&u;f=c?"."+c:u&&typeof u=="object"?u.props?"":S(u,""):u===!1?"":u}return a+l+(f??"")},"");function d(e){let t=this||{},n=e.call?e(t.p):e;return Ne(n.unshift?n.raw?Be(n,[].slice.call(arguments,1),t.p):n.reduce((a,l)=>Object.assign(a,l&&l.call?l(t.p):l),{}):n,Ee(t.target),t.g,t.o,t.k)}d.bind({g:1});d.bind({k:1});function r(e){return`${e/16}rem`}let o={ref:{palette:{error0:()=>"#000000ff",error10:()=>"#410e0bff",error20:()=>"#601410ff",error30:()=>"#8c1d18ff",error40:()=>"#b3261eff",error50:()=>"#dc362eff",error60:()=>"#e46962ff",error70:()=>"#ec928eff",error80:()=>"#f2b8b5ff",error90:()=>"#f9dedcff",error95:()=>"#fceeeeff",error99:()=>"#fffbf9ff",error100:()=>"#ffffffff",tertiary0:()=>"#000000ff",tertiary10:()=>"#31111dff",tertiary20:()=>"#492532ff",tertiary30:()=>"#633b48ff",tertiary40:()=>"#7d5260ff",tertiary50:()=>"#986977ff",tertiary60:()=>"#b58392ff",tertiary70:()=>"#d29dacff",tertiary80:()=>"#efb8c8ff",tertiary90:()=>"#ffd8e4ff",tertiary95:()=>"#ffecf1ff",tertiary99:()=>"#fffbfaff",tertiary100:()=>"#ffffffff",secondary0:()=>"#000000ff",secondary10:()=>"#1d192bff",secondary20:()=>"#332d41ff",secondary30:()=>"#4a4458ff",secondary40:()=>"#625b71ff",secondary50:()=>"#7a7289ff",secondary60:()=>"#958da5ff",secondary70:()=>"#b0a7c0ff",secondary80:()=>"#ccc2dcff",secondary90:()=>"#e8def8ff",secondary95:()=>"#f6edffff",secondary99:()=>"#fffbfeff",secondary100:()=>"#ffffffff",primary0:()=>"#000000ff",primary10:()=>"#21005dff",primary20:()=>"#381e72ff",primary30:()=>"#4f378bff",primary40:()=>"#6750a4ff",primary50:()=>"#7f67beff",primary60:()=>"#9a82dbff",primary70:()=>"#b69df8ff",primary80:()=>"#d0bcffff",primary90:()=>"#eaddffff",primary95:()=>"#f6edffff",primary99:()=>"#fffbfeff",primary100:()=>"#ffffffff","neutral-variant0":()=>"#000000ff","neutral-variant10":()=>"#1d1a22ff","neutral-variant20":()=>"#322f37ff","neutral-variant30":()=>"#49454fff","neutral-variant40":()=>"#605d66ff","neutral-variant50":()=>"#79747eff","neutral-variant60":()=>"#938f99ff","neutral-variant70":()=>"#aea9b4ff","neutral-variant80":()=>"#cac4d0ff","neutral-variant90":()=>"#e7e0ecff","neutral-variant95":()=>"#f5eefaff","neutral-variant99":()=>"#fffbfeff","neutral-variant100":()=>"#ffffffff",neutral0:()=>"#000000ff",neutral10:()=>"#1c1b1fff",neutral12:()=>"#211F26ff",neutral20:()=>"#313033ff",neutral22:()=>"#36343Bff",neutral30:()=>"#484649ff",neutral40:()=>"#605d62ff",neutral50:()=>"#787579ff",neutral60:()=>"#939094ff",neutral70:()=>"#aeaaaeff",neutral80:()=>"#c9c5caff",neutral90:()=>"#e6e1e5ff",neutral94:()=>"#F3EDF7ff",neutral95:()=>"#f4eff4ff",neutral99:()=>"#fffbfeff",neutral100:()=>"#ffffffff",black:()=>"#000000ff",white:()=>"#ffffffff"},typeface:{plain:()=>"Roboto",brand:()=>"Roboto","weight-bold":()=>"700","weight-medium":()=>"500","weight-regular":()=>"400"}},sys:{typescale:{"label-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(16),"line-height-unit":()=>r(2),"line-height":()=>r(16),"tracking-value":()=>r(.5),"tracking-unit":()=>r(2),tracking:()=>r(.5),"size-value":()=>r(11),"size-unit":()=>r(2),size:()=>r(11),weight:()=>o.ref.typeface["weight-medium"](),font:()=>o.ref.typeface.plain()},"label-medium":{"axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","text-transform":()=>"1","line-height-value":()=>r(16),"line-height-unit":()=>r(2),"line-height":()=>r(16),"tracking-value":()=>r(.5),"tracking-unit":()=>r(2),tracking:()=>r(.5),"size-value":()=>r(12),"size-unit":()=>r(2),size:()=>r(12),weight:()=>o.ref.typeface["weight-medium"](),font:()=>o.ref.typeface.plain()},"label-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(20),"line-height-unit":()=>r(2),"line-height":()=>r(20),"tracking-value":()=>r(.10000000149011612),"tracking-unit":()=>r(2),tracking:()=>r(.10000000149011612),"size-value":()=>r(14),"size-unit":()=>r(2),size:()=>r(14),weight:()=>o.ref.typeface["weight-medium"](),font:()=>o.ref.typeface.plain()},"body-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(16),"line-height-unit":()=>r(2),"line-height":()=>r(16),"tracking-value":()=>r(.4000000059604645),"tracking-unit":()=>r(2),tracking:()=>r(.4000000059604645),"size-value":()=>r(12),"size-unit":()=>r(2),size:()=>r(12),weight:()=>o.ref.typeface["weight-regular"](),font:()=>o.ref.typeface.plain()},"body-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(20),"line-height-unit":()=>r(2),"line-height":()=>r(20),"tracking-value":()=>r(.25),"tracking-unit":()=>r(2),tracking:()=>r(.25),"size-value":()=>r(14),"size-unit":()=>r(2),size:()=>r(14),weight:()=>o.ref.typeface["weight-regular"](),font:()=>o.ref.typeface.plain()},"body-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(24),"line-height-unit":()=>r(2),"line-height":()=>r(24),"tracking-value":()=>r(.5),"tracking-unit":()=>r(2),tracking:()=>r(.5),"size-value":()=>r(16),"size-unit":()=>r(2),size:()=>r(16),weight:()=>o.ref.typeface["weight-regular"](),font:()=>o.ref.typeface.plain()},"title-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(20),"line-height-unit":()=>r(2),"line-height":()=>r(20),"tracking-value":()=>r(.10000000149011612),"tracking-unit":()=>r(2),tracking:()=>r(.10000000149011612),"size-value":()=>r(14),"size-unit":()=>r(2),size:()=>r(14),weight:()=>o.ref.typeface["weight-medium"](),font:()=>o.ref.typeface.plain()},"title-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(24),"line-height-unit":()=>r(2),"line-height":()=>r(24),"tracking-value":()=>r(.15000000596046448),"tracking-unit":()=>r(2),tracking:()=>r(.15000000596046448),"size-value":()=>r(16),"size-unit":()=>r(2),size:()=>r(16),weight:()=>o.ref.typeface["weight-medium"](),font:()=>o.ref.typeface.plain()},"title-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(28),"line-height-unit":()=>r(2),"line-height":()=>r(28),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(22),"size-unit":()=>r(2),size:()=>r(22),weight:()=>o.ref.typeface["weight-regular"](),font:()=>o.ref.typeface.brand()},"headline-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(32),"line-height-unit":()=>r(2),"line-height":()=>r(32),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(24),"size-unit":()=>r(2),size:()=>r(24),weight:()=>o.ref.typeface["weight-regular"](),font:()=>o.ref.typeface.brand()},"headline-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(36),"line-height-unit":()=>r(2),"line-height":()=>r(36),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(28),"size-unit":()=>r(2),size:()=>r(28),weight:()=>o.ref.typeface["weight-regular"](),font:()=>o.ref.typeface.brand()},"headline-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(40),"line-height-unit":()=>r(2),"line-height":()=>r(40),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(32),"size-unit":()=>r(2),size:()=>r(32),font:()=>o.ref.typeface.brand(),weight:()=>o.ref.typeface["weight-regular"]()},"display-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(44),"line-height-unit":()=>r(2),"line-height":()=>r(44),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(36),"size-unit":()=>r(2),size:()=>r(36),weight:()=>o.ref.typeface["weight-regular"](),font:()=>o.ref.typeface.brand()},"display-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(52),"line-height-unit":()=>r(2),"line-height":()=>r(52),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(45),"size-unit":()=>r(2),size:()=>r(45),weight:()=>o.ref.typeface["weight-regular"](),font:()=>o.ref.typeface.brand()},"display-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(64),"line-height-unit":()=>r(2),"line-height":()=>r(64),"tracking-value":()=>r(-.25),"tracking-unit":()=>r(2),tracking:()=>r(-.25),"size-value":()=>r(57),"size-unit":()=>r(2),size:()=>r(57),weight:()=>o.ref.typeface["weight-regular"](),font:()=>o.ref.typeface.brand()}},elevation:{surface:{"tint-color":()=>o.sys.color.primary()},"level5-value":()=>1,"level5-unit":()=>1,level5:()=>1,"level4-value":()=>8,"level4-unit":()=>1,level4:()=>8,"level3-value":()=>6,"level3-unit":()=>1,level3:()=>6,"level2-value":()=>3,"level2-unit":()=>1,level2:()=>3,"level1-value":()=>1,"level1-unit":()=>1,level1:()=>1,"level0-value":()=>0,"level0-unit":()=>1,level0:()=>0},state:{dragged:{"state-layer-opacity":()=>.1599999964237213},pressed:{"state-layer-opacity":()=>.11999999731779099},focus:{"state-layer-opacity":()=>.11999999731779099},hover:{"state-layer-opacity":()=>.07999999821186066}},shape:{corner:{"full-family":()=>r(3),"extra-large":{top:{family:()=>r(1),"default-size":()=>r(0),"top-left":()=>r(28),"top-right-unit":()=>r(1),"top-right":()=>r(28)},family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(28)},large:{top:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0),"top-left-unit":()=>r(1),"top-left":()=>r(16),"top-right-unit":()=>r(1),"top-right":()=>r(16)},end:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0),"top-right-unit":()=>r(1),"top-right":()=>r(16),"bottom-right-unit":()=>r(1),"bottom-right":()=>r(16)},family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(16)},medium:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(12)},small:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(8)},"extra-small":{top:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0),"top-left-unit":()=>r(1),"top-left":()=>r(4),"top-right-unit":()=>r(1),"top-right":()=>r(4)},family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(4)},none:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0)},full:()=>r(999)}},motion:{easing:{emphasized:{normal:()=>"cubic-bezier(.3,0,0,1)",accelerate:()=>"cubic-bezier(.3,0,.8,.15)",decelerate:()=>"cubic-bezier(.05,.7,.1,1)"},standard:{normal:()=>"cubic-bezier(0.2, 0, 0, 1)",accelerate:()=>"cubic-bezier(.3,0,1,1)",decelerate:()=>"cubic-bezier(0,0,0,1)"},linear:()=>"linear"},"duration-1000":()=>"1000ms","duration-900":()=>"900ms","duration-800":()=>"800ms","duration-700":()=>"700ms","duration-600":()=>"600ms","duration-550":()=>"550ms","duration-500":()=>"500ms","duration-450":()=>"450ms","duration-400":()=>"400ms","duration-350":()=>"350ms","duration-300":()=>"300ms","duration-250":()=>"250ms","duration-200":()=>"200ms","duration-150":()=>"150ms","duration-100":()=>"100ms","duration-50":()=>"50ms","path-standard-path":()=>"1"},color:{"surface-tint":()=>o.sys.color.primary(),"surface-tint-color":()=>o.sys.color.primary(),"on-error-container":()=>o.ref.palette.error80(),"on-error":()=>o.ref.palette.error20(),"error-container":()=>o.ref.palette.error30(),"on-tertiary-container":()=>o.ref.palette.tertiary90(),"on-tertiary":()=>o.ref.palette.tertiary20(),"tertiary-container":()=>o.ref.palette.tertiary30(),tertiary:()=>o.ref.palette.tertiary80(),shadow:()=>o.ref.palette.neutral0(),error:()=>o.ref.palette.error80(),outline:()=>o.ref.palette["neutral-variant60"](),"outline-variant":()=>o.ref.palette["neutral-variant30"](),"on-background":()=>o.ref.palette.neutral90(),background:()=>o.ref.palette.neutral10(),"inverse-on-surface":()=>o.ref.palette.neutral20(),"inverse-surface":()=>o.ref.palette.neutral90(),"on-surface-variant":()=>o.ref.palette["neutral-variant80"](),"on-surface":()=>o.ref.palette.neutral90(),"surface-variant":()=>o.ref.palette["neutral-variant30"](),surface:()=>o.ref.palette.neutral10(),"surface-container":()=>o.ref.palette.neutral12(),"surface-container-highest":()=>o.ref.palette.neutral22(),"on-secondary-container":()=>o.ref.palette.secondary90(),"on-secondary":()=>o.ref.palette.secondary20(),"secondary-container":()=>o.ref.palette.secondary30(),secondary:()=>o.ref.palette.secondary80(),"inverse-primary":()=>o.ref.palette.primary40(),"on-primary-container":()=>o.ref.palette.primary90(),"on-primary":()=>o.ref.palette.primary20(),"primary-container":()=>o.ref.palette.primary30(),primary:()=>o.ref.palette.primary80()}}};const i=o;window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&(o={...o,sys:{...o.sys,color:{...o.sys.color,"surface-tint":()=>o.sys.color.primary(),"surface-tint-color":()=>o.sys.color.primary(),"on-error-container":()=>o.ref.palette.error10(),"on-error":()=>o.ref.palette.error100(),"error-container":()=>o.ref.palette.error90(),"on-tertiary-container":()=>o.ref.palette.tertiary10(),"on-tertiary":()=>o.ref.palette.tertiary100(),"tertiary-container":()=>o.ref.palette.tertiary90(),tertiary:()=>o.ref.palette.tertiary40(),shadow:()=>o.ref.palette.neutral0(),error:()=>o.ref.palette.error40(),outline:()=>o.ref.palette["neutral-variant50"](),"outline-variant":()=>o.ref.palette["neutral-variant80"](),"on-background":()=>o.ref.palette.neutral10(),background:()=>o.ref.palette.neutral99(),"inverse-on-surface":()=>o.ref.palette.neutral95(),"inverse-surface":()=>o.ref.palette.neutral20(),"on-surface-variant":()=>o.ref.palette["neutral-variant30"](),"on-surface":()=>o.ref.palette.neutral10(),"surface-variant":()=>o.ref.palette["neutral-variant90"](),surface:()=>o.ref.palette.neutral99(),"surface-container":()=>o.ref.palette.neutral94(),"surface-container-highest":()=>o.ref.palette.neutral90(),"on-secondary-container":()=>o.ref.palette.secondary10(),"on-secondary":()=>o.ref.palette.secondary100(),"secondary-container":()=>o.ref.palette.secondary90(),secondary:()=>o.ref.palette.secondary40(),"inverse-primary":()=>o.ref.palette.primary80(),"on-primary-container":()=>o.ref.palette.primary10(),"on-primary":()=>o.ref.palette.primary100(),"primary-container":()=>o.ref.palette.primary90(),primary:()=>o.ref.palette.primary40()}}});var Oe=z("<div>");const Fe=({children:e})=>(()=>{var t=Oe();return m(t,e),T(()=>K(t,d`
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
            `)),t})();function fe(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(t=0;t<l;t++)e[t]&&(n=fe(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function A(){for(var e,t,n=0,a="",l=arguments.length;n<l;n++)(e=arguments[n])&&(t=fe(e))&&(a&&(a+=" "),a+=t);return a}var Le=z("<button>");function Ue(e,t){let n=[];switch(n.push(d`
        position: relative;
        border: none;
        overflow: hidden;
        font-family: ${i.ref.typeface.plain()};
        user-select: none;

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
    `),e){case"xs":n.push(d`
                height: ${r(32)};
                border-width: ${r(1)};
                padding-left: ${r(12)};
                padding-right: ${r(12)};
                gap: ${r(8)};
                font-weight: ${i.ref.typeface["weight-medium"]()};
                font-size: ${r(14)};
                line-height: ${r(20)};
                letter-spacing: ${r(.1)};
            `),t?n.push(d`
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
                `):n.push(d`
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
                `);break;case"s":n.push(d`
                height: ${r(40)};
                border-width: ${r(1)};
                padding-left: ${r(16)};
                padding-right: ${r(16)};
                gap: ${r(8)};
                font-weight: ${i.ref.typeface["weight-medium"]()};
                font-size: ${r(14)};
                line-height: ${r(20)};
                letter-spacing: ${r(.1)};
            `),t?n.push(d`
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
                `):n.push(d`
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
                `);break;case"m":if(n.push(d`
                height: ${r(56)};
                border-width: ${r(1)};
                padding-left: ${r(24)};
                padding-right: ${r(24)};
                gap: ${r(8)};
                font-weight: ${i.ref.typeface["weight-medium"]()};
                font-size: ${r(16)};
                line-height: ${r(24)};
                letter-spacing: ${r(.15)};
            `),t)n.push(d`
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
                `);else{n.push(d`
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
                `);break}break;case"l":if(n.push(d`
                height: ${r(96)};
                border-width: ${r(2)};
                padding-left: ${r(48)};
                padding-right: ${r(48)};
                gap: ${r(12)};
                font-weight: ${i.ref.typeface["weight-regular"]()};
                font-size: ${r(24)};
                line-height: ${r(32)};
                letter-spacing: 0;
            `),t)n.push(d`
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
                `);else{n.push(d`
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
                `);break}break;case"xl":n.push(d`
                height: ${r(132)};
                border-width: ${r(3)};
                padding-left: ${r(64)};
                padding-right: ${r(64)};
                gap: ${r(16)};
                font-weight: ${i.ref.typeface["weight-regular"]()};
                font-size: ${r(32)};
                line-height: ${r(40)};
                letter-spacing: 0;
            `),t?n.push(d`
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
                `):n.push(d`
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
                `);break}return n}const I=e=>(()=>{var t=Le();return t.$$click=n=>{e.onClick(n)},m(t,()=>e.children),T(n=>{var a=A(e.class,Ue(e.size,e.toggled)),l=e.disabled,s=e.toggled;return a!==n.e&&K(t,n.e=a),l!==n.t&&(t.disabled=n.t=l),s!==n.a&&Ce(t,"data-toggled",n.a=s),n},{e:void 0,t:void 0,a:void 0}),t})();xe(["click"]);function b(e,t){const n=e.substring(0,7),a=Math.max(0,Math.min(1,t)),s=Math.round(a*255).toString(16).padStart(2,"0");return`${n}${s}`}function je(e){let t=[];return t.push(d`
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
    `),e&&t.push(d`
            background: ${i.sys.color["surface-container"]()};
            color: ${i.sys.color["on-surface-variant"]()};

            &[data-toggled="true"] {
                background: ${i.sys.color.primary()};
                color: ${i.sys.color["on-primary"]()};
            }
        `),t}const q=e=>{const[t,n]=Q(!1);return h(I,{get size(){return e.size||"s"},get toggled(){return t()},onClick:()=>{e.togglable?(n(!t()),e.onClick(t())):e.onClick()},get class(){return A(je(e.togglable),e.class)},get disabled(){return e.disabled||!1},get children(){return e.children}})};var C=(e=>(e[e.vertical=0]="vertical",e[e.horizontal=1]="horizontal",e))(C||{}),Me=z("<div>");function Pe(e,t){let n=[];switch(n.push(d`
        background-color: ${i.sys.color["outline-variant"]()};
        --thickness: ${r(1)};
    `),e){case C.horizontal:switch(n.push(d`
                height: var(--thickness);
            `),t){case"full":n.push(d`
                        width: 100%;
                    `);break;case"inset":n.push(d`
                        width: calc(100% - ${r(16)});
                        margin-left: ${r(16)};
                    `);break;case"middle-inset":n.push(d`
                        width: calc(100% - ${r(32)});
                        margin-left: ${r(16)};
                        margin-right: ${r(16)};
                    `);break}break;case C.vertical:switch(n.push(d`
                width: var(--thickness);
            `),t){case"middle-inset":n.push(d`
                        height: calc(100% - ${r(32)});
                        margin-top: ${r(16)};
                        margin-bottom: ${r(16)};
                    `);break;case"full":n.push(d`
                        width: var(--thickness);
                        height: 100%;
                    `);break}break}return n}const L=e=>(e.width==="inset"&&e.direction===C.vertical&&console.warn("A divider cannot be both vertical and inset"),(()=>{var t=Me();return T(()=>K(t,A(Pe(e.direction,e.width||"full")))),t})());var Re=z("<div>");function Ke(){let e=[];return e.push(d`
        padding: 1rem;
    `),e}const Ie=e=>(()=>{var t=Re();return m(t,()=>e.children),T(()=>K(t,A(e.class,Ke()))),t})();function Ve(){let e=[];return e.push(d`
        background: ${i.sys.color["surface-container-highest"]()};
        box-shadow: 0 0 ${r(1)} ${i.sys.color.shadow()};
        border-radius: ${i.sys.shape.corner.medium["default-size"]()};
    `),e}const qe=e=>h(Ie,{get class(){return A(Ve())},get children(){return e.children}});function De(e){let t=[];return t.push(d`
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
    `),e&&t.push(d`
            background: ${i.sys.color["secondary-container"]()};
            color: ${i.sys.color["on-secondary-container"]()};

            &[data-toggled="true"] {
                background: ${i.sys.color.secondary()};
                color: ${i.sys.color["on-secondary"]()};
            }
        `),t}const D=e=>{const[t,n]=Q(!1);return h(I,{get size(){return e.size||"s"},get toggled(){return t()},onClick:()=>{e.togglable?(n(!t()),e.onClick(t())):e.onClick()},get class(){return A(De(e.togglable),e.class)},get disabled(){return e.disabled||!1},get children(){return e.children}})};function Ge(e){let t=[];return t.push(d`
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
    `),e&&t.push(d`
            &.${t[0]} {
                color: ${i.sys.color["on-surface-variant"]()};

                &[data-toggled="true"] {
                    background: ${i.sys.color["inverse-surface"]()};
                    color: ${i.sys.color["inverse-on-surface"]()};
                }
            }
        `),t}const G=e=>{const[t,n]=Q(!1);return h(I,{get size(){return e.size||"s"},get toggled(){return t()},onClick:()=>{e.togglable?(n(!t()),e.onClick(t())):e.onClick()},get class(){return A(Ge(e.togglable),e.class)},get disabled(){return e.disabled||!1},get children(){return e.children}})};function He(){let e=[];return e.push(d`
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
    `),e}const re=e=>h(I,{get size(){return e.size||"s"},toggled:!1,onClick:()=>{e.onClick()},get class(){return A(He(),e.class)},get disabled(){return e.disabled||!1},get children(){return e.children}});var Qe=z("<h1>Button Variant '<!>'"),We=z("<h2>Filled Button (toggle, default, disabled)"),U=z("<div>"),Xe=z("<h2>Tonal Button (toggle, default, disabled)"),Ze=z("<h2>Outlined Button (toggle, default, disabled)"),Je=z("<h2>Text Button (default, disabled)");const B=({size:e})=>h(qe,{get children(){return[(()=>{var t=Qe(),n=t.firstChild,a=n.nextSibling;return a.nextSibling,m(t,e,a),t})(),We(),(()=>{var t=U();return m(t,h(q,{size:e,togglable:!0,onClick:()=>{},children:"Confirm"}),null),m(t,h(q,{size:e,onClick:()=>{},children:"Confirm"}),null),m(t,h(q,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),t})(),Xe(),(()=>{var t=U();return m(t,h(D,{size:e,togglable:!0,onClick:()=>{},children:"Confirm"}),null),m(t,h(D,{size:e,onClick:()=>{},children:"Confirm"}),null),m(t,h(D,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),t})(),Ze(),(()=>{var t=U();return m(t,h(G,{size:e,togglable:!0,onClick:()=>{},children:"Confirm"}),null),m(t,h(G,{size:e,onClick:()=>{},children:"Confirm"}),null),m(t,h(G,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),t})(),Je(),(()=>{var t=U();return m(t,h(re,{size:e,onClick:()=>{},children:"Confirm"}),null),m(t,h(re,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),t})()]}});function Ye(){return h(Fe,{get children(){return[h(B,{size:"xs"}),h(L,{get direction(){return C.horizontal}}),h(B,{size:"s"}),h(L,{get direction(){return C.horizontal}}),h(B,{size:"m"}),h(L,{get direction(){return C.horizontal}}),h(B,{size:"l"}),h(L,{get direction(){return C.horizontal}}),h(B,{size:"xl"})]}})}ze(()=>h(Ye,{}),document.getElementById("root"));
