(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const $e=!1,ve=(e,t)=>e===t,K={equals:ve};let we=ge;const E=1,R=2,se={owned:null,cleanups:null,context:null,owner:null};var v=null;let J=null,ke=null,p=null,$=null,A=null,D=0;function Ce(e,t){const n=p,a=v,o=e.length===0,l=t===void 0?a:t,c=o?se:{owned:null,cleanups:null,context:l?l.context:null,owner:l},s=o?e:()=>e(()=>ee(()=>F(c)));v=c,p=null;try{return M(s,!0)}finally{p=n,v=a}}function Y(e,t){t=t?Object.assign({},K,t):K;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},a=o=>(typeof o=="function"&&(o=o(n.value)),ue(n,o));return[ce.bind(n),a]}function m(e,t,n){const a=fe(e,t,!1,E);G(a)}function xe(e,t,n){n=n?Object.assign({},K,n):K;const a=fe(e,t,!0,0);return a.observers=null,a.observerSlots=null,a.comparator=n.equals||void 0,G(a),ce.bind(a)}function ee(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function ce(){if(this.sources&&this.state)if(this.state===E)G(this);else{const e=$;$=null,M(()=>q(this),!1),$=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function ue(e,t,n){let a=e.value;return(!e.comparator||!e.comparator(a,t))&&(e.value=t,e.observers&&e.observers.length&&M(()=>{for(let o=0;o<e.observers.length;o+=1){const l=e.observers[o],c=J&&J.running;c&&J.disposed.has(l),(c?!l.tState:!l.state)&&(l.pure?$.push(l):A.push(l),l.observers&&he(l)),c||(l.state=E)}if($.length>1e6)throw $=[],new Error},!1)),t}function G(e){if(!e.fn)return;F(e);const t=D;ze(e,e.value,t)}function ze(e,t,n){let a;const o=v,l=p;p=v=e;try{a=e.fn(t)}catch(c){return e.pure&&(e.state=E,e.owned&&e.owned.forEach(F),e.owned=null),e.updatedAt=n+1,ye(c)}finally{p=l,v=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ue(e,a):e.value=a,e.updatedAt=n)}function fe(e,t,n,a=E,o){const l={fn:e,state:a,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:v,context:v?v.context:null,pure:n};return v===null||v!==se&&(v.owned?v.owned.push(l):v.owned=[l]),l}function de(e){if(e.state===0)return;if(e.state===R)return q(e);if(e.suspense&&ee(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<D);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===E)G(e);else if(e.state===R){const a=$;$=null,M(()=>q(e,t[0]),!1),$=a}}function M(e,t){if($)return e();let n=!1;t||($=[]),A?n=!0:A=[],D++;try{const a=e();return _e(n),a}catch(a){n||(A=null),$=null,ye(a)}}function _e(e){if($&&(ge($),$=null),e)return;const t=A;A=null,t.length&&M(()=>we(t),!1)}function ge(e){for(let t=0;t<e.length;t++)de(e[t])}function q(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const a=e.sources[n];if(a.sources){const o=a.state;o===E?a!==t&&(!a.updatedAt||a.updatedAt<D)&&de(a):o===R&&q(a,t)}}}function he(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=R,n.pure?$.push(n):A.push(n),n.observers&&he(n))}}function F(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),a=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const l=o.pop(),c=n.observerSlots.pop();a<o.length&&(l.sourceSlots[c]=a,o[a]=l,n.observerSlots[a]=c)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)F(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)F(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ie(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ye(e,t=v){throw Ie(e)}function f(e,t){return ee(()=>e(t||{}))}const re=e=>xe(()=>e());function Se(e,t,n){let a=n.length,o=t.length,l=a,c=0,s=0,d=t[o-1].nextSibling,h=null;for(;c<o||s<l;){if(t[c]===n[s]){c++,s++;continue}for(;t[o-1]===n[l-1];)o--,l--;if(o===c){const y=l<a?s?n[s-1].nextSibling:n[l-s]:d;for(;s<l;)e.insertBefore(n[s++],y)}else if(l===s)for(;c<o;)(!h||!h.has(t[c]))&&t[c].remove(),c++;else if(t[c]===n[l-1]&&n[s]===t[o-1]){const y=t[--o].nextSibling;e.insertBefore(n[s++],t[c++].nextSibling),e.insertBefore(n[--l],y),t[o]=n[l]}else{if(!h){h=new Map;let k=s;for(;k<l;)h.set(n[k],k++)}const y=h.get(t[c]);if(y!=null)if(s<y&&y<l){let k=c,x=1,te;for(;++k<o&&k<l&&!((te=h.get(t[k]))==null||te!==y+x);)x++;if(x>y-s){const be=t[c];for(;s<y;)e.insertBefore(n[s++],be)}else e.replaceChild(n[s++],t[c++])}else c++;else t[c++].remove()}}}const ne="_$DX_DELEGATE";function Ae(e,t,n,a={}){let o;return Ce(l=>{o=l,t===document?e():g(t,e(),t.firstChild?null:void 0,n)},a.owner),()=>{o(),t.textContent=""}}function C(e,t,n,a){let o;const l=()=>{const s=document.createElement("template");return s.innerHTML=e,s.content.firstChild},c=()=>(o||(o=l())).cloneNode(!0);return c.cloneNode=c,c}function Ee(e,t=window.document){const n=t[ne]||(t[ne]=new Set);for(let a=0,o=e.length;a<o;a++){const l=e[a];n.has(l)||(n.add(l),t.addEventListener(l,Ne))}}function Te(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function w(e,t){t==null?e.removeAttribute("class"):e.className=t}function g(e,t,n,a){if(n!==void 0&&!a&&(a=[]),typeof t!="function")return V(e,t,a,n);m(o=>V(e,t(),o,n),a)}function Ne(e){let t=e.target;const n=`$$${e.type}`,a=e.target,o=e.currentTarget,l=d=>Object.defineProperty(e,"target",{configurable:!0,value:d}),c=()=>{const d=t[n];if(d&&!t.disabled){const h=t[`${n}Data`];if(h!==void 0?d.call(t,h,e):d.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&l(t.host),!0},s=()=>{for(;c()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const d=e.composedPath();l(d[0]);for(let h=0;h<d.length-2&&(t=d[h],!!c());h++){if(t._$host){t=t._$host,s();break}if(t.parentNode===o)break}}else s();l(a)}function V(e,t,n,a,o){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,c=a!==void 0;if(e=c&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(l==="number"&&(t=t.toString(),t===n))return n;if(c){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=T(e,n,a,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean")n=T(e,n,a);else{if(l==="function")return m(()=>{let s=t();for(;typeof s=="function";)s=s();n=V(e,s,n,a)}),()=>n;if(Array.isArray(t)){const s=[],d=n&&Array.isArray(n);if(Z(s,t,n,o))return m(()=>n=V(e,s,n,a,!0)),()=>n;if(s.length===0){if(n=T(e,n,a),c)return n}else d?n.length===0?ie(e,s,a):Se(e,n,s):(n&&T(e),ie(e,s));n=s}else if(t.nodeType){if(Array.isArray(n)){if(c)return n=T(e,n,a,t);T(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Z(e,t,n,a){let o=!1;for(let l=0,c=t.length;l<c;l++){let s=t[l],d=n&&n[e.length],h;if(!(s==null||s===!0||s===!1))if((h=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))o=Z(e,s,d)||o;else if(h==="function")if(a){for(;typeof s=="function";)s=s();o=Z(e,Array.isArray(s)?s:[s],Array.isArray(d)?d:[d])||o}else e.push(s),o=!0;else{const y=String(s);d&&d.nodeType===3&&d.data===y?e.push(d):e.push(document.createTextNode(y))}}return o}function ie(e,t,n=null){for(let a=0,o=t.length;a<o;a++)e.insertBefore(t[a],n)}function T(e,t,n,a){if(n===void 0)return e.textContent="";const o=a||document.createTextNode("");if(t.length){let l=!1;for(let c=t.length-1;c>=0;c--){const s=t[c];if(o!==s){const d=s.parentNode===e;!l&&!c?d?e.replaceChild(o,s):e.insertBefore(o,n):d&&s.remove()}else l=!0}}else e.insertBefore(o,n);return[o]}let Be={data:""},Oe=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Be,Le=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ue=/\/\*[^]*?\*\/|  +/g,ae=/\n+/g,S=(e,t)=>{let n="",a="",o="";for(let l in e){let c=e[l];l[0]=="@"?l[1]=="i"?n=l+" "+c+";":a+=l[1]=="f"?S(c,l):l+"{"+S(c,l[1]=="k"?"":t)+"}":typeof c=="object"?a+=S(c,t?t.replace(/([^,])+/g,s=>l.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,s):s?s+" "+d:d)):l):c!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=S.p?S.p(l,c):l+":"+c+";")}return n+(t&&o?t+"{"+o+"}":o)+a},z={},pe=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+pe(e[n]);return t}return e},Fe=(e,t,n,a,o)=>{let l=pe(e),c=z[l]||(z[l]=(d=>{let h=0,y=11;for(;h<d.length;)y=101*y+d.charCodeAt(h++)>>>0;return"go"+y})(l));if(!z[c]){let d=l!==e?e:(h=>{let y,k,x=[{}];for(;y=Le.exec(h.replace(Ue,""));)y[4]?x.shift():y[3]?(k=y[3].replace(ae," ").trim(),x.unshift(x[0][k]=x[0][k]||{})):x[0][y[1]]=y[2].replace(ae," ").trim();return x[0]})(e);z[c]=S(o?{["@keyframes "+c]:d}:d,n?"":"."+c)}let s=n&&z.g?z.g:null;return n&&(z.g=z[c]),((d,h,y,k)=>{k?h.data=h.data.replace(k,d):h.data.indexOf(d)===-1&&(h.data=y?d+h.data:h.data+d)})(z[c],t,a,s),c},Me=(e,t,n)=>e.reduce((a,o,l)=>{let c=t[l];if(c&&c.call){let s=c(n),d=s&&s.props&&s.props.className||/^go/.test(s)&&s;c=d?"."+d:s&&typeof s=="object"?s.props?"":S(s,""):s===!1?"":s}return a+o+(c??"")},"");function u(e){let t=this||{},n=e.call?e(t.p):e;return Fe(n.unshift?n.raw?Me(n,[].slice.call(arguments,1),t.p):n.reduce((a,o)=>Object.assign(a,o&&o.call?o(t.p):o),{}):n,Oe(t.target),t.g,t.o,t.k)}u.bind({g:1});u.bind({k:1});function r(e){return`${e/16}rem`}function je(){let e={ref:{palette:{error0:()=>"#000000ff",error10:()=>"#410e0bff",error20:()=>"#601410ff",error30:()=>"#8c1d18ff",error40:()=>"#b3261eff",error50:()=>"#dc362eff",error60:()=>"#e46962ff",error70:()=>"#ec928eff",error80:()=>"#f2b8b5ff",error90:()=>"#f9dedcff",error95:()=>"#fceeeeff",error99:()=>"#fffbf9ff",error100:()=>"#ffffffff",tertiary0:()=>"#000000ff",tertiary10:()=>"#31111dff",tertiary20:()=>"#492532ff",tertiary30:()=>"#633b48ff",tertiary40:()=>"#7d5260ff",tertiary50:()=>"#986977ff",tertiary60:()=>"#b58392ff",tertiary70:()=>"#d29dacff",tertiary80:()=>"#efb8c8ff",tertiary90:()=>"#ffd8e4ff",tertiary95:()=>"#ffecf1ff",tertiary99:()=>"#fffbfaff",tertiary100:()=>"#ffffffff",secondary0:()=>"#000000ff",secondary10:()=>"#1d192bff",secondary20:()=>"#332d41ff",secondary30:()=>"#4a4458ff",secondary40:()=>"#625b71ff",secondary50:()=>"#7a7289ff",secondary60:()=>"#958da5ff",secondary70:()=>"#b0a7c0ff",secondary80:()=>"#ccc2dcff",secondary90:()=>"#e8def8ff",secondary95:()=>"#f6edffff",secondary99:()=>"#fffbfeff",secondary100:()=>"#ffffffff",primary0:()=>"#000000ff",primary10:()=>"#21005dff",primary20:()=>"#381e72ff",primary30:()=>"#4f378bff",primary40:()=>"#6750a4ff",primary50:()=>"#7f67beff",primary60:()=>"#9a82dbff",primary70:()=>"#b69df8ff",primary80:()=>"#d0bcffff",primary90:()=>"#eaddffff",primary95:()=>"#f6edffff",primary99:()=>"#fffbfeff",primary100:()=>"#ffffffff","neutral-variant0":()=>"#000000ff","neutral-variant10":()=>"#1d1a22ff","neutral-variant20":()=>"#322f37ff","neutral-variant30":()=>"#49454fff","neutral-variant40":()=>"#605d66ff","neutral-variant50":()=>"#79747eff","neutral-variant60":()=>"#938f99ff","neutral-variant70":()=>"#aea9b4ff","neutral-variant80":()=>"#cac4d0ff","neutral-variant90":()=>"#e7e0ecff","neutral-variant95":()=>"#f5eefaff","neutral-variant99":()=>"#fffbfeff","neutral-variant100":()=>"#ffffffff",neutral0:()=>"#000000ff",neutral10:()=>"#1c1b1fff",neutral12:()=>"#211F26ff",neutral20:()=>"#313033ff",neutral22:()=>"#36343Bff",neutral30:()=>"#484649ff",neutral40:()=>"#605d62ff",neutral50:()=>"#787579ff",neutral60:()=>"#939094ff",neutral70:()=>"#aeaaaeff",neutral80:()=>"#c9c5caff",neutral90:()=>"#e6e1e5ff",neutral94:()=>"#F3EDF7ff",neutral95:()=>"#f4eff4ff",neutral99:()=>"#fffbfeff",neutral100:()=>"#ffffffff",black:()=>"#000000ff",white:()=>"#ffffffff"},typeface:{plain:()=>"Roboto",brand:()=>"Roboto","weight-bold":()=>"700","weight-medium":()=>"500","weight-regular":()=>"400"}},sys:{typescale:{"label-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(16),"line-height-unit":()=>r(2),"line-height":()=>r(16),"tracking-value":()=>r(.5),"tracking-unit":()=>r(2),tracking:()=>r(.5),"size-value":()=>r(11),"size-unit":()=>r(2),size:()=>r(11),weight:()=>e.ref.typeface["weight-medium"](),font:()=>e.ref.typeface.plain()},"label-medium":{"axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","text-transform":()=>"1","line-height-value":()=>r(16),"line-height-unit":()=>r(2),"line-height":()=>r(16),"tracking-value":()=>r(.5),"tracking-unit":()=>r(2),tracking:()=>r(.5),"size-value":()=>r(12),"size-unit":()=>r(2),size:()=>r(12),weight:()=>e.ref.typeface["weight-medium"](),font:()=>e.ref.typeface.plain()},"label-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(20),"line-height-unit":()=>r(2),"line-height":()=>r(20),"tracking-value":()=>r(.10000000149011612),"tracking-unit":()=>r(2),tracking:()=>r(.10000000149011612),"size-value":()=>r(14),"size-unit":()=>r(2),size:()=>r(14),weight:()=>e.ref.typeface["weight-medium"](),font:()=>e.ref.typeface.plain()},"body-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(16),"line-height-unit":()=>r(2),"line-height":()=>r(16),"tracking-value":()=>r(.4000000059604645),"tracking-unit":()=>r(2),tracking:()=>r(.4000000059604645),"size-value":()=>r(12),"size-unit":()=>r(2),size:()=>r(12),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.plain()},"body-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(20),"line-height-unit":()=>r(2),"line-height":()=>r(20),"tracking-value":()=>r(.25),"tracking-unit":()=>r(2),tracking:()=>r(.25),"size-value":()=>r(14),"size-unit":()=>r(2),size:()=>r(14),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.plain()},"body-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(24),"line-height-unit":()=>r(2),"line-height":()=>r(24),"tracking-value":()=>r(.5),"tracking-unit":()=>r(2),tracking:()=>r(.5),"size-value":()=>r(16),"size-unit":()=>r(2),size:()=>r(16),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.plain()},"title-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(20),"line-height-unit":()=>r(2),"line-height":()=>r(20),"tracking-value":()=>r(.10000000149011612),"tracking-unit":()=>r(2),tracking:()=>r(.10000000149011612),"size-value":()=>r(14),"size-unit":()=>r(2),size:()=>r(14),weight:()=>e.ref.typeface["weight-medium"](),font:()=>e.ref.typeface.plain()},"title-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(24),"line-height-unit":()=>r(2),"line-height":()=>r(24),"tracking-value":()=>r(.15000000596046448),"tracking-unit":()=>r(2),tracking:()=>r(.15000000596046448),"size-value":()=>r(16),"size-unit":()=>r(2),size:()=>r(16),weight:()=>e.ref.typeface["weight-medium"](),font:()=>e.ref.typeface.plain()},"title-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(28),"line-height-unit":()=>r(2),"line-height":()=>r(28),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(22),"size-unit":()=>r(2),size:()=>r(22),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.brand()},"headline-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(32),"line-height-unit":()=>r(2),"line-height":()=>r(32),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(24),"size-unit":()=>r(2),size:()=>r(24),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.brand()},"headline-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(36),"line-height-unit":()=>r(2),"line-height":()=>r(36),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(28),"size-unit":()=>r(2),size:()=>r(28),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.brand()},"headline-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(40),"line-height-unit":()=>r(2),"line-height":()=>r(40),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(32),"size-unit":()=>r(2),size:()=>r(32),font:()=>e.ref.typeface.brand(),weight:()=>e.ref.typeface["weight-regular"]()},"display-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(44),"line-height-unit":()=>r(2),"line-height":()=>r(44),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(36),"size-unit":()=>r(2),size:()=>r(36),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.brand()},"display-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(52),"line-height-unit":()=>r(2),"line-height":()=>r(52),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(45),"size-unit":()=>r(2),size:()=>r(45),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.brand()},"display-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(64),"line-height-unit":()=>r(2),"line-height":()=>r(64),"tracking-value":()=>r(-.25),"tracking-unit":()=>r(2),tracking:()=>r(-.25),"size-value":()=>r(57),"size-unit":()=>r(2),size:()=>r(57),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.brand()}},elevation:{surface:{"tint-color":()=>e.sys.color.primary()},"level5-value":()=>1,"level5-unit":()=>1,level5:()=>1,"level4-value":()=>8,"level4-unit":()=>1,level4:()=>8,"level3-value":()=>6,"level3-unit":()=>1,level3:()=>6,"level2-value":()=>3,"level2-unit":()=>1,level2:()=>3,"level1-value":()=>1,"level1-unit":()=>1,level1:()=>1,"level0-value":()=>0,"level0-unit":()=>1,level0:()=>0},state:{dragged:{"state-layer-opacity":()=>.1599999964237213},pressed:{"state-layer-opacity":()=>.11999999731779099},focus:{"state-layer-opacity":()=>.11999999731779099},hover:{"state-layer-opacity":()=>.07999999821186066}},shape:{corner:{"full-family":()=>r(3),"extra-large":{top:{family:()=>r(1),"default-size":()=>r(0),"top-left":()=>r(28),"top-right-unit":()=>r(1),"top-right":()=>r(28)},family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(28)},large:{top:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0),"top-left-unit":()=>r(1),"top-left":()=>r(16),"top-right-unit":()=>r(1),"top-right":()=>r(16)},end:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0),"top-right-unit":()=>r(1),"top-right":()=>r(16),"bottom-right-unit":()=>r(1),"bottom-right":()=>r(16)},family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(16)},medium:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(12)},small:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(8)},"extra-small":{top:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0),"top-left-unit":()=>r(1),"top-left":()=>r(4),"top-right-unit":()=>r(1),"top-right":()=>r(4)},family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(4)},none:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0)},full:()=>r(999)}},motion:{easing:{emphasized:{normal:()=>"cubic-bezier(.3,0,0,1)",accelerate:()=>"cubic-bezier(.3,0,.8,.15)",decelerate:()=>"cubic-bezier(.05,.7,.1,1)"},standard:{normal:()=>"cubic-bezier(0.2, 0, 0, 1)",accelerate:()=>"cubic-bezier(.3,0,1,1)",decelerate:()=>"cubic-bezier(0,0,0,1)"},linear:()=>"linear"},"duration-1000":()=>"1000ms","duration-900":()=>"900ms","duration-800":()=>"800ms","duration-700":()=>"700ms","duration-600":()=>"600ms","duration-550":()=>"550ms","duration-500":()=>"500ms","duration-450":()=>"450ms","duration-400":()=>"400ms","duration-350":()=>"350ms","duration-300":()=>"300ms","duration-250":()=>"250ms","duration-200":()=>"200ms","duration-150":()=>"150ms","duration-100":()=>"100ms","duration-50":()=>"50ms","path-standard-path":()=>"1"},color:{"surface-tint":()=>e.sys.color.primary(),"surface-tint-color":()=>e.sys.color.primary(),"on-error-container":()=>e.ref.palette.error80(),"on-error":()=>e.ref.palette.error20(),"error-container":()=>e.ref.palette.error30(),"on-tertiary-container":()=>e.ref.palette.tertiary90(),"on-tertiary":()=>e.ref.palette.tertiary20(),"tertiary-container":()=>e.ref.palette.tertiary30(),tertiary:()=>e.ref.palette.tertiary80(),shadow:()=>e.ref.palette.neutral0(),error:()=>e.ref.palette.error80(),outline:()=>e.ref.palette["neutral-variant60"](),"outline-variant":()=>e.ref.palette["neutral-variant30"](),"on-background":()=>e.ref.palette.neutral90(),background:()=>e.ref.palette.neutral10(),"inverse-on-surface":()=>e.ref.palette.neutral20(),"inverse-surface":()=>e.ref.palette.neutral90(),"on-surface-variant":()=>e.ref.palette["neutral-variant80"](),"on-surface":()=>e.ref.palette.neutral90(),"surface-variant":()=>e.ref.palette["neutral-variant30"](),surface:()=>e.ref.palette.neutral10(),"surface-container":()=>e.ref.palette.neutral12(),"surface-container-highest":()=>e.ref.palette.neutral22(),"on-secondary-container":()=>e.ref.palette.secondary90(),"on-secondary":()=>e.ref.palette.secondary20(),"secondary-container":()=>e.ref.palette.secondary30(),secondary:()=>e.ref.palette.secondary80(),"inverse-primary":()=>e.ref.palette.primary40(),"on-primary-container":()=>e.ref.palette.primary90(),"on-primary":()=>e.ref.palette.primary20(),"primary-container":()=>e.ref.palette.primary30(),primary:()=>e.ref.palette.primary80()}}};return window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&(e={...e,sys:{...e.sys,color:{...e.sys.color,"surface-tint":()=>e.sys.color.primary(),"surface-tint-color":()=>e.sys.color.primary(),"on-error-container":()=>e.ref.palette.error10(),"on-error":()=>e.ref.palette.error100(),"error-container":()=>e.ref.palette.error90(),"on-tertiary-container":()=>e.ref.palette.tertiary10(),"on-tertiary":()=>e.ref.palette.tertiary100(),"tertiary-container":()=>e.ref.palette.tertiary90(),tertiary:()=>e.ref.palette.tertiary40(),shadow:()=>e.ref.palette.neutral0(),error:()=>e.ref.palette.error40(),outline:()=>e.ref.palette["neutral-variant50"](),"outline-variant":()=>e.ref.palette["neutral-variant80"](),"on-background":()=>e.ref.palette.neutral10(),background:()=>e.ref.palette.neutral99(),"inverse-on-surface":()=>e.ref.palette.neutral95(),"inverse-surface":()=>e.ref.palette.neutral20(),"on-surface-variant":()=>e.ref.palette["neutral-variant30"](),"on-surface":()=>e.ref.palette.neutral10(),"surface-variant":()=>e.ref.palette["neutral-variant90"](),surface:()=>e.ref.palette.neutral99(),"surface-container":()=>e.ref.palette.neutral94(),"surface-container-highest":()=>e.ref.palette.neutral90(),"on-secondary-container":()=>e.ref.palette.secondary10(),"on-secondary":()=>e.ref.palette.secondary100(),"secondary-container":()=>e.ref.palette.secondary90(),secondary:()=>e.ref.palette.secondary40(),"inverse-primary":()=>e.ref.palette.primary80(),"on-primary-container":()=>e.ref.palette.primary10(),"on-primary":()=>e.ref.palette.primary100(),"primary-container":()=>e.ref.palette.primary90(),primary:()=>e.ref.palette.primary40()}}}),e}const i=je();var Pe=C("<div>");const Ke=({children:e})=>(()=>{var t=Pe();return g(t,e),m(()=>w(t,u`
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
            `)),t})();function me(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=me(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function _(){for(var e,t,n=0,a="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=me(e))&&(a&&(a+=" "),a+=t);return a}var Re=C("<span>");function qe(){return u`
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
    `}const le=e=>(()=>{var t=Re();return g(t,()=>e.children),m(()=>w(t,_(qe(),e.class))),t})();var Ve=C("<button>");const oe=u`
    font-size: var(--icon-size);
`;function De(e,t){let n=[];switch(n.push(u`
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
    `),e){case"xs":n.push(u`
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
            `),t?n.push(u`
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
                `):n.push(u`
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
                `);break;case"s":n.push(u`
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
            `),t?n.push(u`
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
                `):n.push(u`
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
                `);break;case"m":if(n.push(u`
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
            `),t)n.push(u`
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
                `);else{n.push(u`
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
                `);break}break;case"l":if(n.push(u`
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
            `),t)n.push(u`
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
                `);else{n.push(u`
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
                `);break}break;case"xl":n.push(u`
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
            `),t?n.push(u`
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
                `):n.push(u`
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
                `);break}return n}const H=e=>(()=>{var t=Ve();return t.$$click=n=>{e.onClick(n)},g(t,(()=>{var n=re(()=>!!e.leadingIcon);return()=>n()&&f(le,{class:oe,get children(){return e.leadingIcon}})})(),null),g(t,()=>e.children,null),g(t,(()=>{var n=re(()=>!!e.trailingIcon);return()=>n()&&f(le,{class:oe,get children(){return e.trailingIcon}})})(),null),m(n=>{var a=_(e.class,De(e.size,e.toggled)),o=e.disabled,l=e.toggled;return a!==n.e&&w(t,n.e=a),o!==n.t&&(t.disabled=n.t=o),l!==n.a&&Te(t,"data-toggled",n.a=l),n},{e:void 0,t:void 0,a:void 0}),t})();Ee(["click"]);function b(e,t){const n=e.substring(0,7),a=Math.max(0,Math.min(1,t)),l=Math.round(a*255).toString(16).padStart(2,"0");return`${n}${l}`}function Ge(e){let t=[];return t.push(u`
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
    `),e&&t.push(u`
            background: ${i.sys.color["surface-container"]()};
            color: ${i.sys.color["on-surface-variant"]()};

            &[data-toggled="true"] {
                background: ${i.sys.color.primary()};
                color: ${i.sys.color["on-primary"]()};
            }
        `),t}const N=e=>{const[t,n]=Y(!1);return f(H,{get size(){return e.size||"s"},get toggled(){return t()},onClick:()=>{e.togglable?(n(!t()),e.onClick(t())):e.onClick()},get class(){return _(Ge(e.togglable),e.class)},get disabled(){return e.disabled||!1},get leadingIcon(){return e.leadingIcon},get trailingIcon(){return e.trailingIcon},get children(){return e.children}})};var I=(e=>(e[e.vertical=0]="vertical",e[e.horizontal=1]="horizontal",e))(I||{}),He=C("<div>");function Je(e,t){let n=[];switch(n.push(u`
        background-color: ${i.sys.color["outline-variant"]()};
        --thickness: ${r(1)};
    `),e){case I.horizontal:switch(n.push(u`
                height: var(--thickness);
            `),t){case"full":n.push(u`
                        width: 100%;
                    `);break;case"inset":n.push(u`
                        width: calc(100% - ${r(16)});
                        margin-left: ${r(16)};
                    `);break;case"middle-inset":n.push(u`
                        width: calc(100% - ${r(32)});
                        margin-left: ${r(16)};
                        margin-right: ${r(16)};
                    `);break}break;case I.vertical:switch(n.push(u`
                width: var(--thickness);
            `),t){case"middle-inset":n.push(u`
                        height: calc(100% - ${r(32)});
                        margin-top: ${r(16)};
                        margin-bottom: ${r(16)};
                    `);break;case"full":n.push(u`
                        width: var(--thickness);
                        height: 100%;
                    `);break}break}return n}const j=e=>(e.width==="inset"&&e.direction===I.vertical&&console.warn("A divider cannot be both vertical and inset"),(()=>{var t=He();return m(()=>w(t,_(Je(e.direction,e.width||"full")))),t})());var Qe=C("<div>");function We(){let e=[];return e.push(u`
        padding-left: ${r(16)};
        padding-right: ${r(16)};
    `),e}const Xe=e=>(()=>{var t=Qe();return g(t,()=>e.children),m(()=>w(t,_(e.class,We()))),t})();function Ze(){let e=[];return e.push(u`
        background: ${i.sys.color["surface-container-highest"]()};
        box-shadow: 0 0 ${r(1)} ${i.sys.color.shadow()};
        border-radius: ${i.sys.shape.corner.medium["default-size"]()};
    `),e}const Ye=e=>f(Xe,{get class(){return _(Ze())},get children(){return e.children}});function et(e){let t=[];return t.push(u`
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
    `),e&&t.push(u`
            background: ${i.sys.color["secondary-container"]()};
            color: ${i.sys.color["on-secondary-container"]()};

            &[data-toggled="true"] {
                background: ${i.sys.color.secondary()};
                color: ${i.sys.color["on-secondary"]()};
            }
        `),t}const B=e=>{const[t,n]=Y(!1);return f(H,{get size(){return e.size||"s"},get toggled(){return t()},onClick:()=>{e.togglable?(n(!t()),e.onClick(t())):e.onClick()},get class(){return _(et(e.togglable),e.class)},get disabled(){return e.disabled||!1},get leadingIcon(){return e.leadingIcon},get trailingIcon(){return e.trailingIcon},get children(){return e.children}})};function tt(e){let t=[];return t.push(u`
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
    `),e&&t.push(u`
            &.${t[0]} {
                color: ${i.sys.color["on-surface-variant"]()};

                &[data-toggled="true"] {
                    background: ${i.sys.color["inverse-surface"]()};
                    color: ${i.sys.color["inverse-on-surface"]()};
                }
            }
        `),t}const O=e=>{const[t,n]=Y(!1);return f(H,{get size(){return e.size||"s"},get toggled(){return t()},onClick:()=>{e.togglable?(n(!t()),e.onClick(t())):e.onClick()},get class(){return _(tt(e.togglable),e.class)},get disabled(){return e.disabled||!1},get leadingIcon(){return e.leadingIcon},get trailingIcon(){return e.trailingIcon},get children(){return e.children}})};function rt(){let e=[];return e.push(u`
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
    `),e}const L=e=>f(H,{get size(){return e.size||"s"},toggled:!1,onClick:()=>{e.onClick()},get class(){return _(rt(),e.class)},get disabled(){return e.disabled||!1},get leadingIcon(){return e.leadingIcon},get trailingIcon(){return e.trailingIcon},get children(){return e.children}});var Q=C("<div>");const W=({children:e,count:t})=>(()=>{var n=Q();return g(n,e,null),g(n,t===1?(()=>{var a=Q();return m(()=>w(a,u`
                        position: absolute;
                        left: calc(100% - ${r(12)});
                        top: 0;
                        background-color: ${i.sys.color.error()};
                        height: ${r(6)};
                        width: ${r(6)};
                        border-radius: ${i.sys.shape.corner.full()};
                    `)),a})():t>1?(()=>{var a=Q();return g(a,()=>Math.min(t,999)===999?"999+":t),m(()=>w(a,u`
                        position: absolute;
                        left: calc(100% - ${r(12)});
                        top: 0;
                        background-color: ${i.sys.color.error()};
                        height: ${r(16)};
                        border-radius: ${i.sys.shape.corner.full()};

                        color: ${i.sys.color["on-error"]()};
                        font-family: ${i.sys.typescale["label-small"].font()};
                        font-size: ${i.sys.typescale["label-small"].size()};
                        font-kerning: ${i.sys.typescale["label-small"].tracking()};
                        font-weight: ${i.sys.typescale["label-small"].weight()};
                        line-height: ${i.sys.typescale["label-small"]["line-height"]()};
                        padding-left: ${r(4)};
                        padding-right: ${r(4)};
                    `)),a})():null,null),m(()=>w(n,u`
                position: relative;
                width: max-content;
                height: max-content;
            `)),n})();var nt=C("<h1>Button Variant '<!>'"),it=C("<h2>Filled Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)"),P=C("<div>"),at=C("<h2>Tonal Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)"),lt=C("<h2>Outlined Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)"),ot=C("<h2>Text Button (default, disabled, icon leading, icon trailing, icon trailing & leading)"),X=C("<h3>Random Placeholder"),st=C('<span>UIKit Material Expressive for SolidJS | "@yourdash/uikit-mv3-solid" | Created by <a href=https://github.com/ewsgit>Ewsgit');const U=({size:e})=>f(Ye,{get children(){return[(()=>{var t=nt(),n=t.firstChild,a=n.nextSibling;return a.nextSibling,g(t,e,a),t})(),it(),(()=>{var t=P();return g(t,f(N,{size:e,togglable:!0,onClick:()=>{},children:"Confirm"}),null),g(t,f(N,{size:e,onClick:()=>{},children:"Confirm"}),null),g(t,f(N,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),g(t,f(N,{size:e,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),g(t,f(N,{size:e,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),g(t,f(N,{size:e,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),m(()=>w(t,u`
                    display: flex;
                    gap: 0.5rem;
                `)),t})(),at(),(()=>{var t=P();return g(t,f(B,{size:e,togglable:!0,onClick:()=>{},children:"Confirm"}),null),g(t,f(B,{size:e,onClick:()=>{},children:"Confirm"}),null),g(t,f(B,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),g(t,f(B,{size:e,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),g(t,f(B,{size:e,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),g(t,f(B,{size:e,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),m(()=>w(t,u`
                    display: flex;
                    gap: 0.5rem;
                `)),t})(),lt(),(()=>{var t=P();return g(t,f(O,{size:e,togglable:!0,onClick:()=>{},children:"Confirm"}),null),g(t,f(O,{size:e,onClick:()=>{},children:"Confirm"}),null),g(t,f(O,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),g(t,f(O,{size:e,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),g(t,f(O,{size:e,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),g(t,f(O,{size:e,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),m(()=>w(t,u`
                    display: flex;
                    gap: 0.5rem;
                `)),t})(),ot(),(()=>{var t=P();return g(t,f(L,{size:e,onClick:()=>{},children:"Confirm"}),null),g(t,f(L,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),g(t,f(L,{size:e,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),g(t,f(L,{size:e,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),g(t,f(L,{size:e,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),m(()=>w(t,u`
                    display: flex;
                    gap: 0.5rem;
                `)),t})()]}});function ct(){return f(Ke,{get children(){return[f(U,{size:"xs"}),f(j,{get direction(){return I.horizontal}}),f(U,{size:"s"}),f(j,{get direction(){return I.horizontal}}),f(U,{size:"m"}),f(j,{get direction(){return I.horizontal}}),f(U,{size:"l"}),f(j,{get direction(){return I.horizontal}}),f(U,{size:"xl"}),f(W,{count:12,get children(){var e=X();return m(()=>w(e,u`
                        width: 16rem;
                    `)),e}}),f(W,{count:1e3,get children(){var e=X();return m(()=>w(e,u`
                        width: 16rem;
                    `)),e}}),f(W,{count:1,get children(){var e=X();return m(()=>w(e,u`
                        width: 16rem;
                    `)),e}}),st()]}})}Ae(()=>f(ct,{}),document.getElementById("root"));
