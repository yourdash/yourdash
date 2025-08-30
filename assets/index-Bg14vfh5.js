(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const Ce=!1,ze=(e,t)=>e===t,V={equals:ze};let _e=me;const B=1,D=2,de={owned:null,cleanups:null,context:null,owner:null};var k=null;let Y=null,Se=null,m=null,b=null,N=null,W=0;function Ie(e,t){const n=m,l=k,s=e.length===0,a=t===void 0?l:t,c=s?de:{owned:null,cleanups:null,context:a?a.context:null,owner:a},o=s?e:()=>e(()=>le(()=>H(c)));k=c,m=null;try{return K(o,!0)}finally{m=n,k=l}}function ae(e,t){t=t?Object.assign({},V,t):V;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},l=s=>(typeof s=="function"&&(s=s(n.value)),he(n,s));return[ge.bind(n),l]}function p(e,t,n){const l=ye(e,t,!1,B);X(l)}function Ae(e,t,n){n=n?Object.assign({},V,n):V;const l=ye(e,t,!0,0);return l.observers=null,l.observerSlots=null,l.comparator=n.equals||void 0,X(l),ge.bind(l)}function le(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function ge(){if(this.sources&&this.state)if(this.state===B)X(this);else{const e=b;b=null,K(()=>G(this),!1),b=e}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function he(e,t,n){let l=e.value;return(!e.comparator||!e.comparator(l,t))&&(e.value=t,e.observers&&e.observers.length&&K(()=>{for(let s=0;s<e.observers.length;s+=1){const a=e.observers[s],c=Y&&Y.running;c&&Y.disposed.has(a),(c?!a.tState:!a.state)&&(a.pure?b.push(a):N.push(a),a.observers&&ve(a)),c||(a.state=B)}if(b.length>1e6)throw b=[],new Error},!1)),t}function X(e){if(!e.fn)return;H(e);const t=W;Te(e,e.value,t)}function Te(e,t,n){let l;const s=k,a=m;m=k=e;try{l=e.fn(t)}catch(c){return e.pure&&(e.state=B,e.owned&&e.owned.forEach(H),e.owned=null),e.updatedAt=n+1,$e(c)}finally{m=a,k=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?he(e,l):e.value=l,e.updatedAt=n)}function ye(e,t,n,l=B,s){const a={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:k,context:k?k.context:null,pure:n};return k===null||k!==de&&(k.owned?k.owned.push(a):k.owned=[a]),a}function pe(e){if(e.state===0)return;if(e.state===D)return G(e);if(e.suspense&&le(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<W);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===B)X(e);else if(e.state===D){const l=b;b=null,K(()=>G(e,t[0]),!1),b=l}}function K(e,t){if(b)return e();let n=!1;t||(b=[]),N?n=!0:N=[],W++;try{const l=e();return Ee(n),l}catch(l){n||(N=null),b=null,$e(l)}}function Ee(e){if(b&&(me(b),b=null),e)return;const t=N;N=null,t.length&&K(()=>_e(t),!1)}function me(e){for(let t=0;t<e.length;t++)pe(e[t])}function G(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const l=e.sources[n];if(l.sources){const s=l.state;s===B?l!==t&&(!l.updatedAt||l.updatedAt<W)&&pe(l):s===D&&G(l,t)}}}function ve(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=D,n.pure?b.push(n):N.push(n),n.observers&&ve(n))}}function H(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),l=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const a=s.pop(),c=n.observerSlots.pop();l<s.length&&(a.sourceSlots[c]=l,s[l]=a,n.observerSlots[l]=c)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)H(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)H(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ne(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function $e(e,t=k){throw Ne(e)}function f(e,t){return le(()=>e(t||{}))}const I=e=>Ae(()=>e());function Be(e,t,n){let l=n.length,s=t.length,a=l,c=0,o=0,u=t[s-1].nextSibling,g=null;for(;c<s||o<a;){if(t[c]===n[o]){c++,o++;continue}for(;t[s-1]===n[a-1];)s--,a--;if(s===c){const y=a<l?o?n[o-1].nextSibling:n[a-o]:u;for(;o<a;)e.insertBefore(n[o++],y)}else if(a===o)for(;c<s;)(!g||!g.has(t[c]))&&t[c].remove(),c++;else if(t[c]===n[a-1]&&n[o]===t[s-1]){const y=t[--s].nextSibling;e.insertBefore(n[o++],t[c++].nextSibling),e.insertBefore(n[--a],y),t[s]=n[a]}else{if(!g){g=new Map;let x=o;for(;x<a;)g.set(n[x],x++)}const y=g.get(t[c]);if(y!=null)if(o<y&&y<a){let x=c,z=1,oe;for(;++x<s&&x<a&&!((oe=g.get(t[x]))==null||oe!==y+z);)z++;if(z>y-o){const xe=t[c];for(;o<y;)e.insertBefore(n[o++],xe)}else e.replaceChild(n[o++],t[c++])}else c++;else t[c++].remove()}}}const se="_$DX_DELEGATE";function Oe(e,t,n,l={}){let s;return Ie(a=>{s=a,t===document?e():h(t,e(),t.firstChild?null:void 0,n)},l.owner),()=>{s(),t.textContent=""}}function w(e,t,n,l){let s;const a=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},c=()=>(s||(s=a())).cloneNode(!0);return c.cloneNode=c,c}function be(e,t=window.document){const n=t[se]||(t[se]=new Set);for(let l=0,s=e.length;l<s;l++){const a=e[l];n.has(a)||(n.add(a),t.addEventListener(a,Ue))}}function C(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function v(e,t){t==null?e.removeAttribute("class"):e.className=t}function Le(e,t,n,l){Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n}function h(e,t,n,l){if(n!==void 0&&!l&&(l=[]),typeof t!="function")return J(e,t,l,n);p(s=>J(e,t(),s,n),l)}function Ue(e){let t=e.target;const n=`$$${e.type}`,l=e.target,s=e.currentTarget,a=u=>Object.defineProperty(e,"target",{configurable:!0,value:u}),c=()=>{const u=t[n];if(u&&!t.disabled){const g=t[`${n}Data`];if(g!==void 0?u.call(t,g,e):u.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&a(t.host),!0},o=()=>{for(;c()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const u=e.composedPath();a(u[0]);for(let g=0;g<u.length-2&&(t=u[g],!!c());g++){if(t._$host){t=t._$host,o();break}if(t.parentNode===s)break}}else o();a(l)}function J(e,t,n,l,s){for(;typeof n=="function";)n=n();if(t===n)return n;const a=typeof t,c=l!==void 0;if(e=c&&n[0]&&n[0].parentNode||e,a==="string"||a==="number"){if(a==="number"&&(t=t.toString(),t===n))return n;if(c){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=O(e,n,l,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||a==="boolean")n=O(e,n,l);else{if(a==="function")return p(()=>{let o=t();for(;typeof o=="function";)o=o();n=J(e,o,n,l)}),()=>n;if(Array.isArray(t)){const o=[],u=n&&Array.isArray(n);if(ne(o,t,n,s))return p(()=>n=J(e,o,n,l,!0)),()=>n;if(o.length===0){if(n=O(e,n,l),c)return n}else u?n.length===0?ce(e,o,l):Be(e,n,o):(n&&O(e),ce(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(c)return n=O(e,n,l,t);O(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ne(e,t,n,l){let s=!1;for(let a=0,c=t.length;a<c;a++){let o=t[a],u=n&&n[e.length],g;if(!(o==null||o===!0||o===!1))if((g=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))s=ne(e,o,u)||s;else if(g==="function")if(l){for(;typeof o=="function";)o=o();s=ne(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||s}else e.push(o),s=!0;else{const y=String(o);u&&u.nodeType===3&&u.data===y?e.push(u):e.push(document.createTextNode(y))}}return s}function ce(e,t,n=null){for(let l=0,s=t.length;l<s;l++)e.insertBefore(t[l],n)}function O(e,t,n,l){if(n===void 0)return e.textContent="";const s=l||document.createTextNode("");if(t.length){let a=!1;for(let c=t.length-1;c>=0;c--){const o=t[c];if(s!==o){const u=o.parentNode===e;!a&&!c?u?e.replaceChild(s,o):e.insertBefore(s,n):u&&o.remove()}else a=!0}}else e.insertBefore(s,n);return[s]}let Fe={data:""},Me=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Fe,je=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,He=/\/\*[^]*?\*\/|  +/g,ue=/\n+/g,E=(e,t)=>{let n="",l="",s="";for(let a in e){let c=e[a];a[0]=="@"?a[1]=="i"?n=a+" "+c+";":l+=a[1]=="f"?E(c,a):a+"{"+E(c,a[1]=="k"?"":t)+"}":typeof c=="object"?l+=E(c,t?t.replace(/([^,])+/g,o=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,o):o?o+" "+u:u)):a):c!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=E.p?E.p(a,c):a+":"+c+";")}return n+(t&&s?t+"{"+s+"}":s)+l},_={},we=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+we(e[n]);return t}return e},Ke=(e,t,n,l,s)=>{let a=we(e),c=_[a]||(_[a]=(u=>{let g=0,y=11;for(;g<u.length;)y=101*y+u.charCodeAt(g++)>>>0;return"go"+y})(a));if(!_[c]){let u=a!==e?e:(g=>{let y,x,z=[{}];for(;y=je.exec(g.replace(He,""));)y[4]?z.shift():y[3]?(x=y[3].replace(ue," ").trim(),z.unshift(z[0][x]=z[0][x]||{})):z[0][y[1]]=y[2].replace(ue," ").trim();return z[0]})(e);_[c]=E(s?{["@keyframes "+c]:u}:u,n?"":"."+c)}let o=n&&_.g?_.g:null;return n&&(_.g=_[c]),((u,g,y,x)=>{x?g.data=g.data.replace(x,u):g.data.indexOf(u)===-1&&(g.data=y?u+g.data:g.data+u)})(_[c],t,l,o),c},Pe=(e,t,n)=>e.reduce((l,s,a)=>{let c=t[a];if(c&&c.call){let o=c(n),u=o&&o.props&&o.props.className||/^go/.test(o)&&o;c=u?"."+u:o&&typeof o=="object"?o.props?"":E(o,""):o===!1?"":o}return l+s+(c??"")},"");function d(e){let t=this||{},n=e.call?e(t.p):e;return Ke(n.unshift?n.raw?Pe(n,[].slice.call(arguments,1),t.p):n.reduce((l,s)=>Object.assign(l,s&&s.call?s(t.p):s),{}):n,Me(t.target),t.g,t.o,t.k)}d.bind({g:1});d.bind({k:1});function r(e){return`${e/16}rem`}function Re(){let e={ref:{palette:{error0:()=>"#000000ff",error10:()=>"#410e0bff",error20:()=>"#601410ff",error30:()=>"#8c1d18ff",error40:()=>"#b3261eff",error50:()=>"#dc362eff",error60:()=>"#e46962ff",error70:()=>"#ec928eff",error80:()=>"#f2b8b5ff",error90:()=>"#f9dedcff",error95:()=>"#fceeeeff",error99:()=>"#fffbf9ff",error100:()=>"#ffffffff",tertiary0:()=>"#000000ff",tertiary10:()=>"#31111dff",tertiary20:()=>"#492532ff",tertiary30:()=>"#633b48ff",tertiary40:()=>"#7d5260ff",tertiary50:()=>"#986977ff",tertiary60:()=>"#b58392ff",tertiary70:()=>"#d29dacff",tertiary80:()=>"#efb8c8ff",tertiary90:()=>"#ffd8e4ff",tertiary95:()=>"#ffecf1ff",tertiary99:()=>"#fffbfaff",tertiary100:()=>"#ffffffff",secondary0:()=>"#000000ff",secondary10:()=>"#1d192bff",secondary20:()=>"#332d41ff",secondary30:()=>"#4a4458ff",secondary40:()=>"#625b71ff",secondary50:()=>"#7a7289ff",secondary60:()=>"#958da5ff",secondary70:()=>"#b0a7c0ff",secondary80:()=>"#ccc2dcff",secondary90:()=>"#e8def8ff",secondary95:()=>"#f6edffff",secondary99:()=>"#fffbfeff",secondary100:()=>"#ffffffff",primary0:()=>"#000000ff",primary10:()=>"#21005dff",primary20:()=>"#381e72ff",primary30:()=>"#4f378bff",primary40:()=>"#6750a4ff",primary50:()=>"#7f67beff",primary60:()=>"#9a82dbff",primary70:()=>"#b69df8ff",primary80:()=>"#d0bcffff",primary90:()=>"#eaddffff",primary95:()=>"#f6edffff",primary99:()=>"#fffbfeff",primary100:()=>"#ffffffff","neutral-variant0":()=>"#000000ff","neutral-variant10":()=>"#1d1a22ff","neutral-variant20":()=>"#322f37ff","neutral-variant30":()=>"#49454fff","neutral-variant40":()=>"#605d66ff","neutral-variant50":()=>"#79747eff","neutral-variant60":()=>"#938f99ff","neutral-variant70":()=>"#aea9b4ff","neutral-variant80":()=>"#cac4d0ff","neutral-variant90":()=>"#e7e0ecff","neutral-variant95":()=>"#f5eefaff","neutral-variant99":()=>"#fffbfeff","neutral-variant100":()=>"#ffffffff",neutral0:()=>"#000000ff",neutral10:()=>"#1c1b1fff",neutral12:()=>"#211F26ff",neutral20:()=>"#313033ff",neutral22:()=>"#36343Bff",neutral30:()=>"#484649ff",neutral40:()=>"#605d62ff",neutral50:()=>"#787579ff",neutral60:()=>"#939094ff",neutral70:()=>"#aeaaaeff",neutral80:()=>"#c9c5caff",neutral90:()=>"#e6e1e5ff",neutral94:()=>"#F3EDF7ff",neutral95:()=>"#f4eff4ff",neutral99:()=>"#fffbfeff",neutral100:()=>"#ffffffff",black:()=>"#000000ff",white:()=>"#ffffffff"},typeface:{plain:()=>"Roboto",brand:()=>"Roboto","weight-bold":()=>"700","weight-medium":()=>"500","weight-regular":()=>"400"}},sys:{typescale:{"label-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(16),"line-height-unit":()=>r(2),"line-height":()=>r(16),"tracking-value":()=>r(.5),"tracking-unit":()=>r(2),tracking:()=>r(.5),"size-value":()=>r(11),"size-unit":()=>r(2),size:()=>r(11),weight:()=>e.ref.typeface["weight-medium"](),font:()=>e.ref.typeface.plain()},"label-medium":{"axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","text-transform":()=>"1","line-height-value":()=>r(16),"line-height-unit":()=>r(2),"line-height":()=>r(16),"tracking-value":()=>r(.5),"tracking-unit":()=>r(2),tracking:()=>r(.5),"size-value":()=>r(12),"size-unit":()=>r(2),size:()=>r(12),weight:()=>e.ref.typeface["weight-medium"](),font:()=>e.ref.typeface.plain()},"label-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(20),"line-height-unit":()=>r(2),"line-height":()=>r(20),"tracking-value":()=>r(.10000000149011612),"tracking-unit":()=>r(2),tracking:()=>r(.10000000149011612),"size-value":()=>r(14),"size-unit":()=>r(2),size:()=>r(14),weight:()=>e.ref.typeface["weight-medium"](),font:()=>e.ref.typeface.plain()},"body-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(16),"line-height-unit":()=>r(2),"line-height":()=>r(16),"tracking-value":()=>r(.4000000059604645),"tracking-unit":()=>r(2),tracking:()=>r(.4000000059604645),"size-value":()=>r(12),"size-unit":()=>r(2),size:()=>r(12),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.plain()},"body-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(20),"line-height-unit":()=>r(2),"line-height":()=>r(20),"tracking-value":()=>r(.25),"tracking-unit":()=>r(2),tracking:()=>r(.25),"size-value":()=>r(14),"size-unit":()=>r(2),size:()=>r(14),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.plain()},"body-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(24),"line-height-unit":()=>r(2),"line-height":()=>r(24),"tracking-value":()=>r(.5),"tracking-unit":()=>r(2),tracking:()=>r(.5),"size-value":()=>r(16),"size-unit":()=>r(2),size:()=>r(16),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.plain()},"title-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(20),"line-height-unit":()=>r(2),"line-height":()=>r(20),"tracking-value":()=>r(.10000000149011612),"tracking-unit":()=>r(2),tracking:()=>r(.10000000149011612),"size-value":()=>r(14),"size-unit":()=>r(2),size:()=>r(14),weight:()=>e.ref.typeface["weight-medium"](),font:()=>e.ref.typeface.plain()},"title-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(24),"line-height-unit":()=>r(2),"line-height":()=>r(24),"tracking-value":()=>r(.15000000596046448),"tracking-unit":()=>r(2),tracking:()=>r(.15000000596046448),"size-value":()=>r(16),"size-unit":()=>r(2),size:()=>r(16),weight:()=>e.ref.typeface["weight-medium"](),font:()=>e.ref.typeface.plain()},"title-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(28),"line-height-unit":()=>r(2),"line-height":()=>r(28),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(22),"size-unit":()=>r(2),size:()=>r(22),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.brand()},"headline-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(32),"line-height-unit":()=>r(2),"line-height":()=>r(32),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(24),"size-unit":()=>r(2),size:()=>r(24),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.brand()},"headline-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(36),"line-height-unit":()=>r(2),"line-height":()=>r(36),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(28),"size-unit":()=>r(2),size:()=>r(28),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.brand()},"headline-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(40),"line-height-unit":()=>r(2),"line-height":()=>r(40),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(32),"size-unit":()=>r(2),size:()=>r(32),font:()=>e.ref.typeface.brand(),weight:()=>e.ref.typeface["weight-regular"]()},"display-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(44),"line-height-unit":()=>r(2),"line-height":()=>r(44),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(36),"size-unit":()=>r(2),size:()=>r(36),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.brand()},"display-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(52),"line-height-unit":()=>r(2),"line-height":()=>r(52),"tracking-value":()=>r(0),"tracking-unit":()=>r(2),tracking:()=>r(0),"size-value":()=>r(45),"size-unit":()=>r(2),size:()=>r(45),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.brand()},"display-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>r(64),"line-height-unit":()=>r(2),"line-height":()=>r(64),"tracking-value":()=>r(-.25),"tracking-unit":()=>r(2),tracking:()=>r(-.25),"size-value":()=>r(57),"size-unit":()=>r(2),size:()=>r(57),weight:()=>e.ref.typeface["weight-regular"](),font:()=>e.ref.typeface.brand()}},elevation:{surface:{"tint-color":()=>e.sys.color.primary()},"level5-value":()=>1,"level5-unit":()=>1,level5:()=>1,"level4-value":()=>8,"level4-unit":()=>1,level4:()=>8,"level3-value":()=>6,"level3-unit":()=>1,level3:()=>6,"level2-value":()=>3,"level2-unit":()=>1,level2:()=>3,"level1-value":()=>1,"level1-unit":()=>1,level1:()=>1,"level0-value":()=>0,"level0-unit":()=>1,level0:()=>0},state:{dragged:{"state-layer-opacity":()=>.1599999964237213},pressed:{"state-layer-opacity":()=>.11999999731779099},focus:{"state-layer-opacity":()=>.11999999731779099},hover:{"state-layer-opacity":()=>.07999999821186066}},shape:{corner:{"full-family":()=>r(3),"extra-large":{top:{family:()=>r(1),"default-size":()=>r(0),"top-left":()=>r(28),"top-right-unit":()=>r(1),"top-right":()=>r(28)},family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(28)},large:{top:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0),"top-left-unit":()=>r(1),"top-left":()=>r(16),"top-right-unit":()=>r(1),"top-right":()=>r(16)},end:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0),"top-right-unit":()=>r(1),"top-right":()=>r(16),"bottom-right-unit":()=>r(1),"bottom-right":()=>r(16)},family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(16)},medium:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(12)},small:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(8)},"extra-small":{top:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0),"top-left-unit":()=>r(1),"top-left":()=>r(4),"top-right-unit":()=>r(1),"top-right":()=>r(4)},family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(4)},none:{family:()=>r(1),"default-size-unit":()=>r(1),"default-size":()=>r(0)},full:()=>r(999)}},motion:{easing:{emphasized:{normal:()=>"cubic-bezier(.3,0,0,1)",accelerate:()=>"cubic-bezier(.3,0,.8,.15)",decelerate:()=>"cubic-bezier(.05,.7,.1,1)"},standard:{normal:()=>"cubic-bezier(0.2, 0, 0, 1)",accelerate:()=>"cubic-bezier(.3,0,1,1)",decelerate:()=>"cubic-bezier(0,0,0,1)"},linear:()=>"linear"},"duration-1000":()=>"1000ms","duration-900":()=>"900ms","duration-800":()=>"800ms","duration-700":()=>"700ms","duration-600":()=>"600ms","duration-550":()=>"550ms","duration-500":()=>"500ms","duration-450":()=>"450ms","duration-400":()=>"400ms","duration-350":()=>"350ms","duration-300":()=>"300ms","duration-250":()=>"250ms","duration-200":()=>"200ms","duration-150":()=>"150ms","duration-100":()=>"100ms","duration-50":()=>"50ms","path-standard-path":()=>"1"},color:{"surface-tint":()=>e.sys.color.primary(),"surface-tint-color":()=>e.sys.color.primary(),"on-error-container":()=>e.ref.palette.error80(),"on-error":()=>e.ref.palette.error20(),"error-container":()=>e.ref.palette.error30(),"on-tertiary-container":()=>e.ref.palette.tertiary90(),"on-tertiary":()=>e.ref.palette.tertiary20(),"tertiary-container":()=>e.ref.palette.tertiary30(),tertiary:()=>e.ref.palette.tertiary80(),shadow:()=>e.ref.palette.neutral0(),error:()=>e.ref.palette.error80(),outline:()=>e.ref.palette["neutral-variant60"](),"outline-variant":()=>e.ref.palette["neutral-variant30"](),"on-background":()=>e.ref.palette.neutral90(),background:()=>e.ref.palette.neutral10(),"inverse-on-surface":()=>e.ref.palette.neutral20(),"inverse-surface":()=>e.ref.palette.neutral90(),"on-surface-variant":()=>e.ref.palette["neutral-variant80"](),"on-surface":()=>e.ref.palette.neutral90(),"surface-variant":()=>e.ref.palette["neutral-variant30"](),surface:()=>e.ref.palette.neutral10(),"surface-container":()=>e.ref.palette.neutral12(),"surface-container-highest":()=>e.ref.palette.neutral22(),"on-secondary-container":()=>e.ref.palette.secondary90(),"on-secondary":()=>e.ref.palette.secondary20(),"secondary-container":()=>e.ref.palette.secondary30(),secondary:()=>e.ref.palette.secondary80(),"inverse-primary":()=>e.ref.palette.primary40(),"on-primary-container":()=>e.ref.palette.primary90(),"on-primary":()=>e.ref.palette.primary20(),"primary-container":()=>e.ref.palette.primary30(),primary:()=>e.ref.palette.primary80()}}};return window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&(e={...e,sys:{...e.sys,color:{...e.sys.color,"surface-tint":()=>e.sys.color.primary(),"surface-tint-color":()=>e.sys.color.primary(),"on-error-container":()=>e.ref.palette.error10(),"on-error":()=>e.ref.palette.error100(),"error-container":()=>e.ref.palette.error90(),"on-tertiary-container":()=>e.ref.palette.tertiary10(),"on-tertiary":()=>e.ref.palette.tertiary100(),"tertiary-container":()=>e.ref.palette.tertiary90(),tertiary:()=>e.ref.palette.tertiary40(),shadow:()=>e.ref.palette.neutral0(),error:()=>e.ref.palette.error40(),outline:()=>e.ref.palette["neutral-variant50"](),"outline-variant":()=>e.ref.palette["neutral-variant80"](),"on-background":()=>e.ref.palette.neutral10(),background:()=>e.ref.palette.neutral99(),"inverse-on-surface":()=>e.ref.palette.neutral95(),"inverse-surface":()=>e.ref.palette.neutral20(),"on-surface-variant":()=>e.ref.palette["neutral-variant30"](),"on-surface":()=>e.ref.palette.neutral10(),"surface-variant":()=>e.ref.palette["neutral-variant90"](),surface:()=>e.ref.palette.neutral99(),"surface-container":()=>e.ref.palette.neutral94(),"surface-container-highest":()=>e.ref.palette.neutral90(),"on-secondary-container":()=>e.ref.palette.secondary10(),"on-secondary":()=>e.ref.palette.secondary100(),"secondary-container":()=>e.ref.palette.secondary90(),secondary:()=>e.ref.palette.secondary40(),"inverse-primary":()=>e.ref.palette.primary80(),"on-primary-container":()=>e.ref.palette.primary10(),"on-primary":()=>e.ref.palette.primary100(),"primary-container":()=>e.ref.palette.primary90(),primary:()=>e.ref.palette.primary40()}}}),e}const i=Re();var qe=w("<div>");const Ve=({children:e})=>(()=>{var t=qe();return h(t,e),p(()=>v(t,d`
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
            `)),t})();function ke(e){var t,n,l="";if(typeof e=="string"||typeof e=="number")l+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=ke(e[t]))&&(l&&(l+=" "),l+=n)}else for(n in e)e[n]&&(l&&(l+=" "),l+=n);return l}function A(){for(var e,t,n=0,l="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=ke(e))&&(l&&(l+=" "),l+=t);return l}var De=w("<span>");function Ge(){return d`
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
        user-select: none;
        pointer-events: none;
        -webkit-font-feature-settings: "liga";
        -webkit-font-smoothing: antialiased;
    `}const Q=e=>(()=>{var t=De();return h(t,()=>e.children),p(()=>v(t,A(Ge(),e.class))),t})();var Je=w("<button>");const fe=d`
    font-size: var(--icon-size);
`;function Qe(e,t){let n=[];switch(n.push(d`
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

                --icon-size: ${r(20)};
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

                --icon-size: ${r(20)};
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

                --icon-size: ${r(24)};
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

                --icon-size: ${r(32)};
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

                --icon-size: ${r(40)};
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
                `);break}return n}const Z=e=>(()=>{var t=Je();return t.$$click=n=>{e.onClick(n)},h(t,(()=>{var n=I(()=>!!e.leadingIcon);return()=>n()&&f(Q,{class:fe,get children(){return e.leadingIcon}})})(),null),h(t,()=>e.children,null),h(t,(()=>{var n=I(()=>!!e.trailingIcon);return()=>n()&&f(Q,{class:fe,get children(){return e.trailingIcon}})})(),null),p(n=>{var l=A(e.class,Qe(e.size,e.toggled)),s=e.disabled,a=e.toggled;return l!==n.e&&v(t,n.e=l),s!==n.t&&(t.disabled=n.t=s),a!==n.a&&C(t,"data-toggled",n.a=a),n},{e:void 0,t:void 0,a:void 0}),t})();be(["click"]);function $(e,t){const n=e.substring(0,7),l=Math.max(0,Math.min(1,t)),a=Math.round(l*255).toString(16).padStart(2,"0");return`${n}${a}`}function We(e){let t=[];return t.push(d`
        background-color: ${i.sys.color.primary()};
        color: ${i.sys.color["on-primary"]()};

        &:hover {
            &::after {
                background-color: ${$(i.sys.color["on-primary"](),i.sys.state.hover["state-layer-opacity"]())};
            }
        }

        &:active {
            &::after {
                background-color: ${$(i.sys.color["on-primary"](),i.sys.state.pressed["state-layer-opacity"]())};
            }
        }

        &[disabled] {
            background-color: ${$(i.sys.color["on-surface"](),.1)};
            color: ${$(i.sys.color["on-surface"](),.38)};

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
        `),t}const L=e=>{const[t,n]=ae(!1);return f(Z,{get size(){return e.size||"s"},get toggled(){return t()},onClick:()=>{e.togglable?(n(!t()),e.onClick(t())):e.onClick()},get class(){return A(We(e.togglable),e.class)},get disabled(){return e.disabled||!1},get leadingIcon(){return e.leadingIcon},get trailingIcon(){return e.trailingIcon},get children(){return e.children}})};var T=(e=>(e[e.vertical=0]="vertical",e[e.horizontal=1]="horizontal",e))(T||{}),Xe=w("<div>");function Ze(e,t){let n=[];switch(n.push(d`
        background-color: ${i.sys.color["outline-variant"]()};
        --thickness: ${r(1)};
    `),e){case T.horizontal:switch(n.push(d`
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
                    `);break}break;case T.vertical:switch(n.push(d`
                width: var(--thickness);
            `),t){case"middle-inset":n.push(d`
                        height: calc(100% - ${r(32)});
                        margin-top: ${r(16)};
                        margin-bottom: ${r(16)};
                    `);break;case"full":n.push(d`
                        width: var(--thickness);
                        height: 100%;
                    `);break}break}return n}const P=e=>(e.width==="inset"&&e.direction===T.vertical&&console.warn("A divider cannot be both vertical and inset"),(()=>{var t=Xe();return p(()=>v(t,A(Ze(e.direction,e.width||"full")))),t})());var Ye=w("<div>");function et(){let e=[];return e.push(d`
        padding-left: ${r(16)};
        padding-right: ${r(16)};
    `),e}const tt=e=>(()=>{var t=Ye();return h(t,()=>e.children),p(()=>v(t,A(e.class,et()))),t})();function rt(){let e=[];return e.push(d`
        background: ${i.sys.color["surface-container-highest"]()};
        box-shadow: 0 0 ${r(1)} ${i.sys.color.shadow()};
        border-radius: ${i.sys.shape.corner.medium["default-size"]()};
    `),e}const ie=e=>f(tt,{get class(){return A(rt())},get children(){return e.children}});function nt(e){let t=[];return t.push(d`
        background-color: ${i.sys.color["secondary-container"]()};
        color: ${i.sys.color["on-secondary-container"]()};

        &:hover {
            &::after {
                background-color: ${$(i.sys.color["on-secondary"](),i.sys.state.hover["state-layer-opacity"]())};
            }
        }

        &:active {
            &::after {
                background-color: ${$(i.sys.color["on-secondary-container"](),i.sys.state.pressed["state-layer-opacity"]())};
            }
        }

        &[disabled] {
            background-color: ${$(i.sys.color["on-surface"](),.1)};
            color: ${$(i.sys.color["on-surface"](),.38)};

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
        `),t}const U=e=>{const[t,n]=ae(!1);return f(Z,{get size(){return e.size||"s"},get toggled(){return t()},onClick:()=>{e.togglable?(n(!t()),e.onClick(t())):e.onClick()},get class(){return A(nt(e.togglable),e.class)},get disabled(){return e.disabled||!1},get leadingIcon(){return e.leadingIcon},get trailingIcon(){return e.trailingIcon},get children(){return e.children}})};function it(e){let t=[];return t.push(d`
        background-color: transparent;
        color: ${i.sys.color["on-surface-variant"]()};
        border-width: ${r(1)};
        border-style: solid;
        border-color: ${i.sys.color["outline-variant"]()};

        &:hover {
            &::after {
                background-color: ${$(i.sys.color["on-surface-variant"](),i.sys.state.hover["state-layer-opacity"]())};
            }
        }

        &:active {
            &::after {
                background-color: ${$(i.sys.color["on-secondary-container"](),i.sys.state.pressed["state-layer-opacity"]())};
            }
        }

        &[disabled] {
            background-color: ${$(i.sys.color["on-surface"](),.1)};
            color: ${$(i.sys.color["on-surface"](),.38)};

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
        `),t}const F=e=>{const[t,n]=ae(!1);return f(Z,{get size(){return e.size||"s"},get toggled(){return t()},onClick:()=>{e.togglable?(n(!t()),e.onClick(t())):e.onClick()},get class(){return A(it(e.togglable),e.class)},get disabled(){return e.disabled||!1},get leadingIcon(){return e.leadingIcon},get trailingIcon(){return e.trailingIcon},get children(){return e.children}})};function at(){let e=[];return e.push(d`
        background-color: transparent;
        color: ${i.sys.color.primary()};

        &:hover {
            &::after {
                background-color: ${$(i.sys.color.primary(),i.sys.state.hover["state-layer-opacity"]())};
            }
        }

        &:active {
            &::after {
                background-color: ${$(i.sys.color.primary(),i.sys.state.pressed["state-layer-opacity"]())};
            }
        }

        &[disabled] {
            background-color: ${$(i.sys.color["on-surface"](),.1)};
            color: ${$(i.sys.color["on-surface"](),.38)};

            &::after {
                background-color: transparent;
            }
        }
    `),e}const M=e=>f(Z,{get size(){return e.size||"s"},toggled:!1,onClick:()=>{e.onClick()},get class(){return A(at(),e.class)},get disabled(){return e.disabled||!1},get leadingIcon(){return e.leadingIcon},get trailingIcon(){return e.trailingIcon},get children(){return e.children}});var ee=w("<div>");const te=({children:e,count:t})=>(()=>{var n=ee();return h(n,e,null),h(n,t===1?(()=>{var l=ee();return p(()=>v(l,d`
                        position: absolute;
                        left: calc(100% - ${r(3)});
                        top: -${r(3)};
                        background-color: ${i.sys.color.error()};
                        height: ${r(6)};
                        width: ${r(6)};
                        border-radius: ${i.sys.shape.corner.full()};
                    `)),l})():t>1?(()=>{var l=ee();return h(l,()=>Math.min(t,999)===999?"999+":t),p(()=>v(l,d`
                        position: absolute;
                        left: calc(100% - ${r(12)});
                        top: -${r(8)};
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
                    `)),l})():null,null),p(()=>v(n,d`
                position: relative;
                width: max-content;
                height: max-content;
            `)),n})(),lt=e=>I(()=>e.children);var ot=w("<div><div><div></div><p>"),R=w("<img>");const st=d`
    display: flex;
    flex-direction: row;
    gap: ${r(16)};
    align-items: center;
    padding-left: ${r(16)};
    padding-right: ${r(16)};
    background-color: ${i.sys.color.surface()};

    &[data-selected="true"] {
        background-color: ${i.sys.color["secondary-container"]()};
    }

    &[data-lines="1"] {
        padding-top: ${r(8)};
        padding-bottom: ${r(8)};
        height: ${r(56)};
    }

    &[data-lines="2"] {
        padding-top: ${r(8)};
        padding-bottom: ${r(8)};
        height: ${r(72)};
    }

    &[data-lines="3"] {
        padding-top: ${r(12)};
        padding-bottom: ${r(12)};
        height: ${r(88)};
    }
`,S=e=>(()=>{var t=ot(),n=t.firstChild,l=n.firstChild,s=l.nextSibling;return Le(t,"click",e.onClick),v(t,st),h(t,(()=>{var a=I(()=>e.leading?.type==="icon");return()=>a()&&f(Q,{get children(){return e.leading.value}})})(),n),h(t,(()=>{var a=I(()=>e.leading?.type==="image");return()=>a()&&(()=>{var c=R();return p(o=>{var u=e.leading.value,g=e.leading.alt||"";return u!==o.e&&C(c,"src",o.e=u),g!==o.t&&C(c,"alt",o.t=g),o},{e:void 0,t:void 0}),c})()})(),n),h(t,(()=>{var a=I(()=>e.leading?.type==="avatar");return()=>a()&&(()=>{var c=R();return p(o=>{var u=e.leading.value,g=e.leading.alt||"";return u!==o.e&&C(c,"src",o.e=u),g!==o.t&&C(c,"alt",o.t=g),o},{e:void 0,t:void 0}),c})()})(),n),h(t,(()=>{var a=I(()=>e.leading?.type==="large-image");return()=>a()&&(()=>{var c=R();return p(o=>{var u=e.leading.value,g=e.leading.alt||"";return u!==o.e&&C(c,"src",o.e=u),g!==o.t&&C(c,"alt",o.t=g),o},{e:void 0,t:void 0}),c})()})(),n),h(t,(()=>{var a=I(()=>e.leading?.type==="video");return()=>a()&&(()=>{var c=R();return p(o=>{var u=e.leading.value,g=e.leading.alt||"";return u!==o.e&&C(c,"src",o.e=u),g!==o.t&&C(c,"alt",o.t=g),o},{e:void 0,t:void 0}),c})()})(),n),h(l,()=>e.headline),h(s,()=>e.supportingText),h(t,(()=>{var a=I(()=>!!e.followingIcon);return()=>a()&&f(Q,{get class(){return d`
                        margin-left: auto;
                    `},get children(){return e.followingIcon}})})(),null),p(a=>{var c=e.lines||2,o=e.selected,u=d`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                `,g=d`
                        color: ${i.sys.color["on-surface"]()};
                    `,y=d`
                        margin: 0;
                        color: ${i.sys.color["on-surface-variant"]()};
                    `;return c!==a.e&&C(t,"data-lines",a.e=c),o!==a.t&&C(t,"data-selected",a.t=o),u!==a.a&&v(n,a.a=u),g!==a.o&&v(l,a.o=g),y!==a.i&&v(s,a.i=y),a},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),t})();be(["click"]);var ct=w("<h1>Button Variant '<!>'"),ut=w("<h2>Filled Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)"),q=w("<div>"),ft=w("<h2>Tonal Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)"),dt=w("<h2>Outlined Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)"),gt=w("<h2>Text Button (default, disabled, icon leading, icon trailing, icon trailing & leading)"),re=w("<h3>Random Placeholder"),ht=w('<span>UIKit Material Expressive for SolidJS | "@yourdash/uikit-mv3-solid" | Created by <a href=https://github.com/ewsgit>Ewsgit');const j=({size:e})=>f(ie,{get children(){return[(()=>{var t=ct(),n=t.firstChild,l=n.nextSibling;return l.nextSibling,h(t,e,l),t})(),ut(),(()=>{var t=q();return h(t,f(L,{size:e,togglable:!0,onClick:()=>{},children:"Confirm"}),null),h(t,f(L,{size:e,onClick:()=>{},children:"Confirm"}),null),h(t,f(L,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),h(t,f(L,{size:e,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),h(t,f(L,{size:e,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),h(t,f(L,{size:e,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),p(()=>v(t,d`
                    display: flex;
                    gap: 0.5rem;
                `)),t})(),ft(),(()=>{var t=q();return h(t,f(U,{size:e,togglable:!0,onClick:()=>{},children:"Confirm"}),null),h(t,f(U,{size:e,onClick:()=>{},children:"Confirm"}),null),h(t,f(U,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),h(t,f(U,{size:e,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),h(t,f(U,{size:e,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),h(t,f(U,{size:e,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),p(()=>v(t,d`
                    display: flex;
                    gap: 0.5rem;
                `)),t})(),dt(),(()=>{var t=q();return h(t,f(F,{size:e,togglable:!0,onClick:()=>{},children:"Confirm"}),null),h(t,f(F,{size:e,onClick:()=>{},children:"Confirm"}),null),h(t,f(F,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),h(t,f(F,{size:e,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),h(t,f(F,{size:e,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),h(t,f(F,{size:e,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),p(()=>v(t,d`
                    display: flex;
                    gap: 0.5rem;
                `)),t})(),gt(),(()=>{var t=q();return h(t,f(M,{size:e,onClick:()=>{},children:"Confirm"}),null),h(t,f(M,{size:e,disabled:!0,onClick:()=>{},children:"Confirm"}),null),h(t,f(M,{size:e,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),h(t,f(M,{size:e,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),h(t,f(M,{size:e,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),p(()=>v(t,d`
                    display: flex;
                    gap: 0.5rem;
                `)),t})()]}});function yt(){return f(Ve,{get children(){return[f(j,{size:"xs"}),f(P,{get direction(){return T.horizontal}}),f(j,{size:"s"}),f(P,{get direction(){return T.horizontal}}),f(j,{size:"m"}),f(P,{get direction(){return T.horizontal}}),f(j,{size:"l"}),f(P,{get direction(){return T.horizontal}}),f(j,{size:"xl"}),f(ie,{get children(){return[f(te,{count:12,get children(){var e=re();return p(()=>v(e,d`
                            background: ${i.sys.color["secondary-container"]()};
                            width: 16rem;
                            margin: 0;
                            padding: 0.25rem;
                        `)),e}}),f(te,{count:1e3,get children(){var e=re();return p(()=>v(e,d`
                            background: ${i.sys.color["secondary-container"]()};
                            width: 16rem;
                            margin: 0;
                            padding: 0.25rem;
                        `)),e}}),f(te,{count:1,get children(){var e=re();return p(()=>v(e,d`
                            background: ${i.sys.color["secondary-container"]()};
                            width: 16rem;
                            margin: 0;
                            padding: 0.25rem;
                        `)),e}})]}}),f(ie,{get children(){return f(lt,{get children(){return[f(S,{headline:"Heading",supportingText:"Supporting text",onClick:()=>{}}),f(S,{headline:"Heading",supportingText:"Supporting text",leading:{type:"icon",value:"arrow_right"},onClick:()=>{}}),f(S,{headline:"Heading",supportingText:"Supporting text",followingIcon:"arrow_left",onClick:()=>{}}),f(S,{headline:"Heading",supportingText:"Supporting text",leading:{type:"icon",value:"arrow_right"},onClick:()=>{},followingIcon:"arrow_left"}),f(S,{headline:"Heading",supportingText:"Supporting text",leading:{type:"avatar",value:"https://google.com/favicon.ico"},onClick:()=>{},followingIcon:"arrow_left"}),f(S,{headline:"Heading",supportingText:"Supporting text",leading:{type:"avatar",value:"https://google.com/favicon.ico"},onClick:()=>{}}),f(S,{headline:"Heading",supportingText:"Supporting text",leading:{type:"image",value:"https://google.com/favicon.ico"},onClick:()=>{},selected:!0}),f(S,{headline:"Heading",supportingText:"Supporting text",leading:{type:"large-image",value:"https://google.com/favicon.ico"},onClick:()=>{},selected:!0}),f(S,{headline:"Heading",supportingText:"Supporting text",leading:{type:"video",value:"https://google.com/favicon.ico"},onClick:()=>{}})]}})}}),ht()]}})}Oe(()=>f(yt,{}),document.getElementById("root"));
