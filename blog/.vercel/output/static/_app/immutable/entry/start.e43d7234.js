import{o as De,t as se}from"../chunks/index.1dee7e1b.js";import{S as Me,a as ze,I as q,g as Ne,f as Ce,b as ge,c as le,s as F,i as qe,d as Z,e as V,P as Fe,h as We}from"../chunks/singletons.c97a2287.js";import{u as Ye}from"../chunks/parse.d12b0d5b.js";function Xe(n,i){return n==="/"||i==="ignore"?n:i==="never"?n.endsWith("/")?n.slice(0,-1):n:i==="always"&&!n.endsWith("/")?n+"/":n}function Qe(n){return n.split("%25").map(decodeURI).join("%25")}function Ze(n){for(const i in n)n[i]=decodeURIComponent(n[i]);return n}const et=["href","pathname","search","searchParams","toString","toJSON"];function tt(n,i){const l=new URL(n);for(const f of et){let m=l[f];Object.defineProperty(l,f,{get(){return i(),m},enumerable:!0,configurable:!0})}return nt(l),l}function nt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const at="/__data.json";function rt(n){return n.replace(/\/$/,"")+at}function Ve(n){try{return JSON.parse(sessionStorage[n])}catch{}}function He(n,i){const l=JSON.stringify(i);try{sessionStorage[n]=l}catch{}}function ot(...n){let i=5381;for(const l of n)if(typeof l=="string"){let f=l.length;for(;f;)i=i*33^l.charCodeAt(--f)}else if(ArrayBuffer.isView(l)){const f=new Uint8Array(l.buffer,l.byteOffset,l.byteLength);let m=f.length;for(;m;)i=i*33^f[--m]}else throw new TypeError("value must be a string or TypedArray");return(i>>>0).toString(36)}const ce=window.fetch;window.fetch=(n,i)=>((n instanceof Request?n.method:(i==null?void 0:i.method)||"GET")!=="GET"&&te.delete(ve(n)),ce(n,i));const te=new Map;function it(n,i){const l=ve(n,i),f=document.querySelector(l);if(f!=null&&f.textContent){const{body:m,...E}=JSON.parse(f.textContent),R=f.getAttribute("data-ttl");return R&&te.set(l,{body:m,init:E,ttl:1e3*Number(R)}),Promise.resolve(new Response(m,E))}return ce(n,i)}function st(n,i,l){if(te.size>0){const f=ve(n,l),m=te.get(f);if(m){if(performance.now()<m.ttl&&["default","force-cache","only-if-cached",void 0].includes(l==null?void 0:l.cache))return new Response(m.body,m.init);te.delete(f)}}return ce(i,l)}function ve(n,i){let f=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(i!=null&&i.headers||i!=null&&i.body){const m=[];i.headers&&m.push([...new Headers(i.headers)].join(",")),i.body&&(typeof i.body=="string"||ArrayBuffer.isView(i.body))&&m.push(i.body),f+=`[data-hash="${ot(...m)}"]`}return f}const lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ct(n){const i=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${ut(n).map(f=>{const m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(m)return i.push({name:m[1],matcher:m[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const E=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(f);if(E)return i.push({name:E[1],matcher:E[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!f)return;const R=f.split(/\[(.+?)\](?!\])/);return"/"+R.map((w,k)=>{if(k%2){if(w.startsWith("x+"))return ye(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return ye(String.fromCharCode(...w.slice(2).split("-").map(x=>parseInt(x,16))));const g=lt.exec(w);if(!g)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,j,$,L]=g;return i.push({name:$,matcher:L,optional:!!D,rest:!!j,chained:j?k===1&&R[0]==="":!1}),j?"(.*?)":D?"([^/]*)?":"([^/]+?)"}return ye(w)}).join("")}).join("")}/?$`),params:i}}function ft(n){return!/^\([^)]+\)$/.test(n)}function ut(n){return n.slice(1).split("/").filter(ft)}function dt(n,i,l){const f={},m=n.slice(1);let E=0;for(let R=0;R<i.length;R+=1){const y=i[R],w=m[R-E];if(y.chained&&y.rest&&E){f[y.name]=m.slice(R-E,R+1).filter(k=>k).join("/"),E=0;continue}if(w===void 0){y.rest&&(f[y.name]="");continue}if(!y.matcher||l[y.matcher](w)){f[y.name]=w;continue}if(y.optional&&y.chained){E++;continue}return}if(!E)return f}function ye(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ht({nodes:n,server_loads:i,dictionary:l,matchers:f}){const m=new Set(i);return Object.entries(l).map(([y,[w,k,g]])=>{const{pattern:D,params:j}=ct(y),$={id:y,exec:L=>{const x=D.exec(L);if(x)return dt(x,j,f)},errors:[1,...g||[]].map(L=>n[L]),layouts:[0,...k||[]].map(R),leaf:E(w)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function E(y){const w=y<0;return w&&(y=~y),[w,n[y]]}function R(y){return y===void 0?y:[m.has(y),n[y]]}}let ee=class{constructor(i,l){this.status=i,typeof l=="string"?this.body={message:l}:l?this.body=l:this.body={message:`Error: ${i}`}}toString(){return JSON.stringify(this.body)}},Je=class{constructor(i,l){this.status=i,this.location=l}};async function pt(n){var i;for(const l in n)if(typeof((i=n[l])==null?void 0:i.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([f,m])=>[f,await m])));return n}function mt(n){return n.filter(i=>i!=null)}const z=Ve(Me)??{},Q=Ve(ze)??{};function we(n){z[n]=Z()}function gt(n,i){var Ie;const l=ht(n),f=n.nodes[0],m=n.nodes[1];f(),m();const E=document.documentElement,R=[],y=[];let w=null;const k={before_navigate:[],after_navigate:[]};let g={branch:[],error:null,url:null},D=!1,j=!1,$=!0,L=!1,x=!1,B=!1,H=!1,J,O=(Ie=history.state)==null?void 0:Ie[q];O||(O=Date.now(),history.replaceState({...history.state,[q]:O},"",location.href));const fe=z[O];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let K,be,ne;async function Ee(){ne=ne||Promise.resolve(),await ne,ne=null;const t=new URL(location.href),e=W(t,!0);w=null,await xe(e,t,[])}function Se(t){y.some(e=>e==null?void 0:e.snapshot)&&(Q[t]=y.map(e=>{var r;return(r=e==null?void 0:e.snapshot)==null?void 0:r.capture()}))}function ke(t){var e;(e=Q[t])==null||e.forEach((r,a)=>{var s,o;(o=(s=y[a])==null?void 0:s.snapshot)==null||o.restore(r)})}async function ue(t,{noScroll:e=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:o=!1},u,c){return typeof t=="string"&&(t=new URL(t,Ne(document))),ie({url:t,scroll:e?Z():null,keepfocus:a,redirect_chain:u,details:{state:s,replaceState:r},nav_token:c,accepted:()=>{o&&(H=!0)},blocked:()=>{},type:"goto"})}async function Re(t){return w={id:t.id,promise:Ue(t).then(e=>(e.type==="loaded"&&e.state.error&&(w=null),e))},w.promise}async function ae(...t){const r=l.filter(a=>t.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}async function xe(t,e,r,a,s,o={},u){var h,d,S;be=o;let c=t&&await Ue(t);if(c||(c=await $e(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)),e=(t==null?void 0:t.url)||e,be!==o)return!1;if(c.type==="redirect")if(r.length>10||r.includes(e.pathname))c=await re({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return ue(new URL(c.location,e).href,{},[...r,e.pathname],o),!1;else((h=c.props.page)==null?void 0:h.status)>=400&&await F.updated.check()&&await Y(e);if(R.length=0,H=!1,L=!0,a&&(we(a),Se(a)),(d=c.props.page)!=null&&d.url&&c.props.page.url.pathname!==e.pathname&&(e.pathname=(S=c.props.page)==null?void 0:S.url.pathname),s&&s.details){const{details:v}=s,P=v.replaceState?0:1;if(v.state[q]=O+=P,history[v.replaceState?"replaceState":"pushState"](v.state,"",e),!v.replaceState){let b=O+1;for(;Q[b]||z[b];)delete Q[b],delete z[b],b+=1}}if(w=null,j?(g=c.state,c.props.page&&(c.props.page.url=e),J.$set(c.props)):Le(c),s){const{scroll:v,keepfocus:P}=s,{activeElement:b}=document;await se();const p=document.activeElement!==b&&document.activeElement!==document.body;if(!P&&!p&&await _e(),$){const U=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));v?scrollTo(v.x,v.y):U?U.scrollIntoView():scrollTo(0,0)}}else await se();$=!0,c.props.page&&(K=c.props.page),u&&u(),L=!1}function Le(t){var a;g=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),K=t.props.page,J=new n.root({target:i,props:{...t.props,stores:F,components:y},hydrate:!0}),ke(O);const r={from:null,to:{params:g.params,route:{id:((a=g.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};k.after_navigate.forEach(s=>s(r)),j=!0}async function G({url:t,params:e,branch:r,status:a,error:s,route:o,form:u}){let c="never";for(const b of r)(b==null?void 0:b.slash)!==void 0&&(c=b.slash);t.pathname=Xe(t.pathname,c),t.search=t.search;const h={type:"loaded",state:{url:t,params:e,branch:r,error:s,route:o},props:{constructors:mt(r).map(b=>b.node.component)}};u!==void 0&&(h.props.form=u);let d={},S=!K,v=0;for(let b=0;b<Math.max(r.length,g.branch.length);b+=1){const p=r[b],U=g.branch[b];(p==null?void 0:p.data)!==(U==null?void 0:U.data)&&(S=!0),p&&(d={...d,...p.data},S&&(h.props[`data_${v}`]=d),v+=1)}return(!g.url||t.href!==g.url.href||g.error!==s||u!==void 0&&u!==K.form||S)&&(h.props.page={error:s,params:e,route:{id:(o==null?void 0:o.id)??null},status:a,url:new URL(t),form:u??null,data:S?d:K.data}),h}async function de({loader:t,parent:e,url:r,params:a,route:s,server_data_node:o}){var d,S,v;let u=null;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},h=await t();if((d=h.universal)!=null&&d.load){let P=function(...p){for(const U of p){const{href:N}=new URL(U,r);c.dependencies.add(N)}};const b={route:{get id(){return c.route=!0,s.id}},params:new Proxy(a,{get:(p,U)=>(c.params.add(U),p[U])}),data:(o==null?void 0:o.data)??null,url:tt(r,()=>{c.url=!0}),async fetch(p,U){let N;p instanceof Request?(N=p.url,U={body:p.method==="GET"||p.method==="HEAD"?void 0:await p.blob(),cache:p.cache,credentials:p.credentials,headers:p.headers,integrity:p.integrity,keepalive:p.keepalive,method:p.method,mode:p.mode,redirect:p.redirect,referrer:p.referrer,referrerPolicy:p.referrerPolicy,signal:p.signal,...U}):N=p;const C=new URL(N,r);return P(C.href),C.origin===r.origin&&(N=C.href.slice(r.origin.length)),j?st(N,C.href,U):it(N,U)},setHeaders:()=>{},depends:P,parent(){return c.parent=!0,e()}};u=await h.universal.load.call(null,b)??null,u=u?await pt(u):null}return{node:h,loader:t,server:o,universal:(S=h.universal)!=null&&S.load?{type:"data",data:u,uses:c}:null,data:u??(o==null?void 0:o.data)??null,slash:((v=h.universal)==null?void 0:v.trailingSlash)??(o==null?void 0:o.slash)}}function Pe(t,e,r,a,s){if(H)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&r)return!0;for(const o of a.params)if(s[o]!==g.params[o])return!0;for(const o of a.dependencies)if(R.some(u=>u(new URL(o))))return!0;return!1}function he(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}async function Ue({id:t,invalidating:e,url:r,params:a,route:s}){if((w==null?void 0:w.id)===t)return w.promise;const{errors:o,layouts:u,leaf:c}=s,h=[...u,c];o.forEach(_=>_==null?void 0:_().catch(()=>{})),h.forEach(_=>_==null?void 0:_[1]().catch(()=>{}));let d=null;const S=g.url?t!==g.url.pathname+g.url.search:!1,v=g.route?s.id!==g.route.id:!1;let P=!1;const b=h.map((_,T)=>{var M;const A=g.branch[T],I=!!(_!=null&&_[0])&&((A==null?void 0:A.loader)!==_[1]||Pe(P,v,S,(M=A.server)==null?void 0:M.uses,a));return I&&(P=!0),I});if(b.some(Boolean)){try{d=await Ke(r,b)}catch(_){return re({status:_ instanceof ee?_.status:500,error:await X(_,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let U=!1;const N=h.map(async(_,T)=>{var pe;if(!_)return;const A=g.branch[T],I=p==null?void 0:p[T];if((!I||I.type==="skip")&&_[1]===(A==null?void 0:A.loader)&&!Pe(U,v,S,(pe=A.universal)==null?void 0:pe.uses,a))return A;if(U=!0,(I==null?void 0:I.type)==="error")throw I;return de({loader:_[1],url:r,params:a,route:s,parent:async()=>{var Te;const je={};for(let me=0;me<T;me+=1)Object.assign(je,(Te=await N[me])==null?void 0:Te.data);return je},server_data_node:he(I===void 0&&_[0]?{type:"skip"}:I??null,_[0]?A==null?void 0:A.server:void 0)})});for(const _ of N)_.catch(()=>{});const C=[];for(let _=0;_<h.length;_+=1)if(h[_])try{C.push(await N[_])}catch(T){if(T instanceof Je)return{type:"redirect",location:T.location};let A=500,I;if(p!=null&&p.includes(T))A=T.status??A,I=T.error;else if(T instanceof ee)A=T.status,I=T.body;else{if(await F.updated.check())return await Y(r);I=await X(T,{params:a,url:r,route:{id:s.id}})}const M=await Ae(_,C,o);return M?await G({url:r,params:a,branch:C.slice(0,M.idx).concat(M.node),status:A,error:I,route:s}):await $e(r,{id:s.id},I,A)}else C.push(void 0);return await G({url:r,params:a,branch:C,status:200,error:null,route:s,form:e?void 0:null})}async function Ae(t,e,r){for(;t--;)if(r[t]){let a=t;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await r[t](),loader:r[t],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:t,error:e,url:r,route:a}){const s={};let o=null;if(n.server_loads[0]===0)try{const d=await Ke(r,[!0]);if(d.type!=="data"||d.nodes[0]&&d.nodes[0].type!=="data")throw 0;o=d.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||D)&&await Y(r)}const c=await de({loader:f,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:he(o)}),h={node:await m(),loader:m,universal:null,server:null,data:null};return await G({url:r,params:s,branch:[c,h],status:t,error:e,route:null})}function W(t,e){if(qe(t,V))return;const r=oe(t);for(const a of l){const s=a.exec(r);if(s)return{id:t.pathname+t.search,invalidating:e,route:a,params:Ze(s),url:t}}}function oe(t){return Qe(t.pathname.slice(V.length)||"/")}function Oe({url:t,type:e,intent:r,delta:a}){var c,h;let s=!1;const o={from:{params:g.params,route:{id:((c=g.route)==null?void 0:c.id)??null},url:g.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((h=r==null?void 0:r.route)==null?void 0:h.id)??null},url:t},willUnload:!r,type:e};a!==void 0&&(o.delta=a);const u={...o,cancel:()=>{s=!0}};return x||k.before_navigate.forEach(d=>d(u)),s?null:o}async function ie({url:t,scroll:e,keepfocus:r,redirect_chain:a,details:s,type:o,delta:u,nav_token:c,accepted:h,blocked:d}){const S=W(t,!1),v=Oe({url:t,type:o,delta:u,intent:S});if(!v){d();return}const P=O;h(),x=!0,j&&F.navigating.set(v),await xe(S,t,a,P,{scroll:e,keepfocus:r,details:s},c,()=>{x=!1,k.after_navigate.forEach(b=>b(v)),F.navigating.set(null)})}async function $e(t,e,r,a){return t.origin===location.origin&&t.pathname===location.pathname&&!D?await re({status:a,error:r,url:t,route:e}):await Y(t)}function Y(t){return location.href=t.href,new Promise(()=>{})}function Ge(){let t;E.addEventListener("mousemove",o=>{const u=o.target;clearTimeout(t),t=setTimeout(()=>{a(u,2)},20)});function e(o){a(o.composedPath()[0],1)}E.addEventListener("mousedown",e),E.addEventListener("touchstart",e,{passive:!0});const r=new IntersectionObserver(o=>{for(const u of o)u.isIntersecting&&(ae(oe(new URL(u.target.href))),r.unobserve(u.target))},{threshold:0});function a(o,u){const c=Ce(o,E);if(!c)return;const{url:h,external:d}=ge(c,V);if(d)return;const S=le(c);if(!S.reload)if(u<=S.preload_data){const v=W(h,!1);v&&Re(v)}else u<=S.preload_code&&ae(oe(h))}function s(){r.disconnect();for(const o of E.querySelectorAll("a")){const{url:u,external:c}=ge(o,V);if(c)continue;const h=le(o);h.reload||(h.preload_code===Fe.viewport&&r.observe(o),h.preload_code===Fe.eager&&ae(oe(u)))}}k.after_navigate.push(s),s()}function X(t,e){return t instanceof ee?t.body:n.hooks.handleError({error:t,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{De(()=>(k.after_navigate.push(t),()=>{const e=k.after_navigate.indexOf(t);k.after_navigate.splice(e,1)}))},before_navigate:t=>{De(()=>(k.before_navigate.push(t),()=>{const e=k.before_navigate.indexOf(t);k.before_navigate.splice(e,1)}))},disable_scroll_handling:()=>{(L||!j)&&($=!1)},goto:(t,e={})=>ue(t,e,[]),invalidate:t=>{if(typeof t=="function")R.push(t);else{const{href:e}=new URL(t,location.href);R.push(r=>r.href===e)}return Ee()},invalidateAll:()=>(H=!0,Ee()),preload_data:async t=>{const e=new URL(t,Ne(document)),r=W(e,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${e}`);await Re(r)},preload_code:ae,apply_action:async t=>{if(t.type==="error"){const e=new URL(location.href),{branch:r,route:a}=g;if(!a)return;const s=await Ae(g.branch.length,r,a.errors);if(s){const o=await G({url:e,params:g.params,branch:r.slice(0,s.idx).concat(s.node),status:t.status??500,error:t.error,route:a});g=o.state,J.$set(o.props),se().then(_e)}}else if(t.type==="redirect")ue(t.location,{invalidateAll:!0},[]);else{const e={form:t.data,page:{...K,form:t.data,status:t.status}};J.$set(e),t.type==="success"&&se().then(_e)}},_start_router:()=>{var t;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{var a;let r=!1;if(!x){const s={from:{params:g.params,route:{id:((a=g.route)==null?void 0:a.id)??null},url:g.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};k.before_navigate.forEach(o=>o(s))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(we(O),He(Me,z),Se(O),He(ze,Q))}),(t=navigator.connection)!=null&&t.saveData||Ge(),E.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Ce(e.composedPath()[0],E);if(!r)return;const{url:a,external:s,target:o}=ge(r,V);if(!a)return;if(o==="_parent"||o==="_top"){if(window.parent!==window)return}else if(o&&o!=="_self")return;const u=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:"))return;if(s||u.reload){Oe({url:a,type:"link"})||e.preventDefault(),x=!0;return}const[h,d]=a.href.split("#");if(d!==void 0&&h===location.href.split("#")[0]){B=!0,we(O),g.url=a,F.page.set({...K,url:a}),F.page.notify();return}ie({url:a,scroll:u.noscroll?Z():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:a.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),E.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(qe(o,V))return;const u=e.target,{noscroll:c,reload:h}=le(u);if(h)return;e.preventDefault(),e.stopPropagation();const d=new FormData(u),S=a==null?void 0:a.getAttribute("name");S&&d.append(S,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(d).toString(),ie({url:o,scroll:c?Z():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[q]){if(e.state[q]===O)return;const a=z[e.state[q]];if(g.url.href.split("#")[0]===location.href.split("#")[0]){z[O]=Z(),O=e.state[q],scrollTo(a.x,a.y);return}const s=e.state[q]-O;let o=!1;await ie({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=e.state[q]},blocked:()=>{history.go(-s),o=!0},type:"popstate",delta:s}),o||ke(O)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[q]:++O},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&F.navigating.set(null)})},_hydrate:async({status:t=200,error:e,node_ids:r,params:a,route:s,data:o,form:u})=>{D=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=W(c,!1)||{});let h;try{const d=r.map(async(S,v)=>{const P=o[v];return P!=null&&P.uses&&(P.uses=Be(P.uses)),de({loader:n.nodes[S],url:c,params:a,route:s,parent:async()=>{const b={};for(let p=0;p<v;p+=1)Object.assign(b,(await d[p]).data);return b},server_data_node:he(P)})});h=await G({url:c,params:a,branch:await Promise.all(d),status:t,error:e,form:u,route:l.find(({id:S})=>S===s.id)??null})}catch(d){if(d instanceof Je){await Y(new URL(d.location,location.href));return}h=await re({status:d instanceof ee?d.status:500,error:await X(d,{url:c,params:a,route:s}),url:c,route:s})}Le(h)}}}async function Ke(n,i){const l=new URL(n);l.pathname=rt(n.pathname),l.searchParams.append("x-sveltekit-invalidated",i.map(m=>m?"1":"").join("_"));const f=await ce(l.href);if(!f.ok)throw new ee(f.status,await f.json());return new Promise(async m=>{var g;const E=new Map,R=f.body.getReader(),y=new TextDecoder;function w(D){return Ye(D,{Promise:j=>new Promise(($,L)=>{E.set(j,{fulfil:$,reject:L})})})}let k="";for(;;){const{done:D,value:j}=await R.read();if(D&&!k)break;for(k+=!j&&k?`
`:y.decode(j);;){const $=k.indexOf(`
`);if($===-1)break;const L=JSON.parse(k.slice(0,$));if(k=k.slice($+1),L.type==="redirect")return m(L);if(L.type==="data")(g=L.nodes)==null||g.forEach(x=>{(x==null?void 0:x.type)==="data"&&(x.uses=Be(x.uses),x.data=w(x.data))}),m(L);else if(L.type==="chunk"){const{id:x,data:B,error:H}=L,J=E.get(x);E.delete(x),H?J.reject(w(H)):J.fulfil(w(B))}}}})}function Be(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function _e(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const i=document.body,l=i.getAttribute("tabindex");return i.tabIndex=-1,i.focus({preventScroll:!0}),l!==null?i.setAttribute("tabindex",l):i.removeAttribute("tabindex"),new Promise(f=>{setTimeout(()=>{var m;f((m=getSelection())==null?void 0:m.removeAllRanges())})})}}async function Et(n,i,l){const f=gt(n,i);We({client:f}),l?await f._hydrate(l):f.goto(location.href,{replaceState:!0}),f._start_router()}export{Et as start};
