import{a as D}from"./axios-aba6f0e0.js";import{c as te}from"./deepmerge-89e33937.js";import{l as H}from"./qs-da11641f.js";import{N as x}from"./nprogress-e0bc7c5f.js";import{r as p,R as W}from"./react-9a873dbd.js";import{g as re}from"./lodash.isequal-c571d922.js";function J(e,r){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>e.apply(this,n),r)}}function L(e,r){return document.dispatchEvent(new CustomEvent(`inertia:${e}`,r))}var ne=e=>L("before",{cancelable:!0,detail:{visit:e}}),ie=e=>L("error",{detail:{errors:e}}),oe=e=>L("exception",{cancelable:!0,detail:{exception:e}}),q=e=>L("finish",{detail:{visit:e}}),se=e=>L("invalid",{cancelable:!0,detail:{response:e}}),F=e=>L("navigate",{detail:{page:e}}),ae=e=>L("progress",{detail:{progress:e}}),le=e=>L("start",{detail:{visit:e}}),ce=e=>L("success",{detail:{page:e}});function N(e){return e instanceof File||e instanceof Blob||e instanceof FileList&&e.length>0||e instanceof FormData&&Array.from(e.values()).some(r=>N(r))||typeof e=="object"&&e!==null&&Object.values(e).some(r=>N(r))}function _(e,r=new FormData,t=null){e=e||{};for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&K(r,z(t,n),e[n]);return r}function z(e,r){return e?e+"["+r+"]":r}function K(e,r,t){if(Array.isArray(t))return Array.from(t.keys()).forEach(n=>K(e,z(r,n.toString()),t[n]));if(t instanceof Date)return e.append(r,t.toISOString());if(t instanceof File)return e.append(r,t,t.name);if(t instanceof Blob)return e.append(r,t);if(typeof t=="boolean")return e.append(r,t?"1":"0");if(typeof t=="string")return e.append(r,t);if(typeof t=="number")return e.append(r,`${t}`);if(t==null)return e.append(r,"");_(t,e,r)}var de={modal:null,listener:null,show(e){typeof e=="object"&&(e=`All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(e)}`);let r=document.createElement("html");r.innerHTML=e,r.querySelectorAll("a").forEach(n=>n.setAttribute("target","_top")),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",()=>this.hide());let t=document.createElement("iframe");if(t.style.backgroundColor="white",t.style.borderRadius="5px",t.style.width="100%",t.style.height="100%",this.modal.appendChild(t),document.body.prepend(this.modal),document.body.style.overflow="hidden",!t.contentWindow)throw new Error("iframe not yet ready.");t.contentWindow.document.open(),t.contentWindow.document.write(r.outerHTML),t.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape(e){e.keyCode===27&&this.hide()}};function A(e){return new URL(e.toString(),window.location.toString())}function Q(e,r,t,n="brackets"){let o=/^https?:\/\//.test(r.toString()),w=o||r.toString().startsWith("/"),g=!w&&!r.toString().startsWith("#")&&!r.toString().startsWith("?"),S=r.toString().includes("?")||e==="get"&&Object.keys(t).length,u=r.toString().includes("#"),m=new URL(r.toString(),"http://localhost");return e==="get"&&Object.keys(t).length&&(m.search=H.stringify(te(H.parse(m.search,{ignoreQueryPrefix:!0}),t),{encodeValuesOnly:!0,arrayFormat:n}),t={}),[[o?`${m.protocol}//${m.host}`:"",w?m.pathname:"",g?m.pathname.substring(1):"",S?m.search:"",u?m.hash:""].join(""),t]}function j(e){return e=new URL(e.href),e.hash="",e}var U=typeof window>"u",pe=class{constructor(){this.visitId=null}init({initialPage:e,resolveComponent:r,swapComponent:t}){this.page=e,this.resolveComponent=r,this.swapComponent=t,this.setNavigationType(),this.clearRememberedStateOnReload(),this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()}setNavigationType(){this.navigationType=window.performance&&window.performance.getEntriesByType("navigation").length>0?window.performance.getEntriesByType("navigation")[0].type:"navigate"}clearRememberedStateOnReload(){var e;this.navigationType==="reload"&&((e=window.history.state)!=null&&e.rememberedState)&&delete window.history.state.rememberedState}handleInitialPageVisit(e){this.page.url+=window.location.hash,this.setPage(e,{preserveState:!0}).then(()=>F(e))}setupEventListeners(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",J(this.handleScrollEvent.bind(this),100),!0)}scrollRegions(){return document.querySelectorAll("[scroll-region]")}handleScrollEvent(e){typeof e.target.hasAttribute=="function"&&e.target.hasAttribute("scroll-region")&&this.saveScrollPositions()}saveScrollPositions(){this.replaceState({...this.page,scrollRegions:Array.from(this.scrollRegions()).map(e=>({top:e.scrollTop,left:e.scrollLeft}))})}resetScrollPositions(){window.scrollTo(0,0),this.scrollRegions().forEach(e=>{typeof e.scrollTo=="function"?e.scrollTo(0,0):(e.scrollTop=0,e.scrollLeft=0)}),this.saveScrollPositions(),window.location.hash&&setTimeout(()=>{var e;return(e=document.getElementById(window.location.hash.slice(1)))==null?void 0:e.scrollIntoView()})}restoreScrollPositions(){this.page.scrollRegions&&this.scrollRegions().forEach((e,r)=>{let t=this.page.scrollRegions[r];if(t)typeof e.scrollTo=="function"?e.scrollTo(t.left,t.top):(e.scrollTop=t.top,e.scrollLeft=t.left);else return})}isBackForwardVisit(){return window.history.state&&this.navigationType==="back_forward"}handleBackForwardVisit(e){window.history.state.version=e.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(()=>{this.restoreScrollPositions(),F(e)})}locationVisit(e,r){try{let t={preserveScroll:r};window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify(t)),window.location.href=e.href,j(window.location).href===j(e).href&&window.location.reload()}catch{return!1}}isLocationVisit(){try{return window.sessionStorage.getItem("inertiaLocationVisit")!==null}catch{return!1}}handleLocationVisit(e){var t,n;let r=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),e.url+=window.location.hash,e.rememberedState=((t=window.history.state)==null?void 0:t.rememberedState)??{},e.scrollRegions=((n=window.history.state)==null?void 0:n.scrollRegions)??[],this.setPage(e,{preserveScroll:r.preserveScroll,preserveState:!0}).then(()=>{r.preserveScroll&&this.restoreScrollPositions(),F(e)})}isLocationVisitResponse(e){return!!(e&&e.status===409&&e.headers["x-inertia-location"])}isInertiaResponse(e){return!!(e!=null&&e.headers["x-inertia"])}createVisitId(){return this.visitId={},this.visitId}cancelVisit(e,{cancelled:r=!1,interrupted:t=!1}){e&&!e.completed&&!e.cancelled&&!e.interrupted&&(e.cancelToken.abort(),e.onCancel(),e.completed=!1,e.cancelled=r,e.interrupted=t,q(e),e.onFinish(e))}finishVisit(e){!e.cancelled&&!e.interrupted&&(e.completed=!0,e.cancelled=!1,e.interrupted=!1,q(e),e.onFinish(e))}resolvePreserveOption(e,r){return typeof e=="function"?e(r):e==="errors"?Object.keys(r.props.errors||{}).length>0:e}cancel(){this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}visit(e,{method:r="get",data:t={},replace:n=!1,preserveScroll:o=!1,preserveState:w=!1,only:g=[],headers:S={},errorBag:u="",forceFormData:m=!1,onCancelToken:l=()=>{},onBefore:i=()=>{},onStart:v=()=>{},onProgress:a=()=>{},onFinish:y=()=>{},onCancel:b=()=>{},onSuccess:k=()=>{},onError:P=()=>{},queryStringArrayFormat:V="brackets"}={}){let C=typeof e=="string"?A(e):e;if((N(t)||m)&&!(t instanceof FormData)&&(t=_(t)),!(t instanceof FormData)){let[c,f]=Q(r,C,t,V);C=A(c),t=f}let T={url:C,method:r,data:t,replace:n,preserveScroll:o,preserveState:w,only:g,headers:S,errorBag:u,forceFormData:m,queryStringArrayFormat:V,cancelled:!1,completed:!1,interrupted:!1};if(i(T)===!1||!ne(T))return;this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();let O=this.createVisitId();this.activeVisit={...T,onCancelToken:l,onBefore:i,onStart:v,onProgress:a,onFinish:y,onCancel:b,onSuccess:k,onError:P,queryStringArrayFormat:V,cancelToken:new AbortController},l({cancel:()=>{this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}}),le(T),v(T),D({method:r,url:j(C).href,data:r==="get"?{}:t,params:r==="get"?t:{},signal:this.activeVisit.cancelToken.signal,headers:{...S,Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0,...g.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":g.join(",")}:{},...u&&u.length?{"X-Inertia-Error-Bag":u}:{},...this.page.version?{"X-Inertia-Version":this.page.version}:{}},onUploadProgress:c=>{t instanceof FormData&&(c.percentage=c.progress?Math.round(c.progress*100):0,ae(c),a(c))}}).then(c=>{var h;if(!this.isInertiaResponse(c))return Promise.reject({response:c});let f=c.data;g.length&&f.component===this.page.component&&(f.props={...this.page.props,...f.props}),o=this.resolvePreserveOption(o,f),w=this.resolvePreserveOption(w,f),w&&((h=window.history.state)!=null&&h.rememberedState)&&f.component===this.page.component&&(f.rememberedState=window.history.state.rememberedState);let s=C,d=A(f.url);return s.hash&&!d.hash&&j(s).href===d.href&&(d.hash=s.hash,f.url=d.href),this.setPage(f,{visitId:O,replace:n,preserveScroll:o,preserveState:w})}).then(()=>{let c=this.page.props.errors||{};if(Object.keys(c).length>0){let f=u?c[u]?c[u]:{}:c;return ie(f),P(f)}return ce(this.page),k(this.page)}).catch(c=>{if(this.isInertiaResponse(c.response))return this.setPage(c.response.data,{visitId:O});if(this.isLocationVisitResponse(c.response)){let f=A(c.response.headers["x-inertia-location"]),s=C;s.hash&&!f.hash&&j(s).href===f.href&&(f.hash=s.hash),this.locationVisit(f,o===!0)}else if(c.response)se(c.response)&&de.show(c.response.data);else return Promise.reject(c)}).then(()=>{this.activeVisit&&this.finishVisit(this.activeVisit)}).catch(c=>{if(!D.isCancel(c)){let f=oe(c);if(this.activeVisit&&this.finishVisit(this.activeVisit),f)return Promise.reject(c)}})}setPage(e,{visitId:r=this.createVisitId(),replace:t=!1,preserveScroll:n=!1,preserveState:o=!1}={}){return Promise.resolve(this.resolveComponent(e.component)).then(w=>{r===this.visitId&&(e.scrollRegions=e.scrollRegions||[],e.rememberedState=e.rememberedState||{},t=t||A(e.url).href===window.location.href,t?this.replaceState(e):this.pushState(e),this.swapComponent({component:w,page:e,preserveState:o}).then(()=>{n||this.resetScrollPositions(),t||F(e)}))})}pushState(e){this.page=e,window.history.pushState(e,"",e.url)}replaceState(e){this.page=e,window.history.replaceState(e,"",e.url)}handlePopstateEvent(e){if(e.state!==null){let r=e.state,t=this.createVisitId();Promise.resolve(this.resolveComponent(r.component)).then(n=>{t===this.visitId&&(this.page=r,this.swapComponent({component:n,page:r,preserveState:!1}).then(()=>{this.restoreScrollPositions(),F(r)}))})}else{let r=A(this.page.url);r.hash=window.location.hash,this.replaceState({...this.page,url:r.href}),this.resetScrollPositions()}}get(e,r={},t={}){return this.visit(e,{...t,method:"get",data:r})}reload(e={}){return this.visit(window.location.href,{...e,preserveScroll:!0,preserveState:!0})}replace(e,r={}){return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${r.method??"get"}() instead.`),this.visit(e,{preserveState:!0,...r,replace:!0})}post(e,r={},t={}){return this.visit(e,{preserveState:!0,...t,method:"post",data:r})}put(e,r={},t={}){return this.visit(e,{preserveState:!0,...t,method:"put",data:r})}patch(e,r={},t={}){return this.visit(e,{preserveState:!0,...t,method:"patch",data:r})}delete(e,r={}){return this.visit(e,{preserveState:!0,...r,method:"delete"})}remember(e,r="default"){var t;U||this.replaceState({...this.page,rememberedState:{...(t=this.page)==null?void 0:t.rememberedState,[r]:e}})}restore(e="default"){var r,t;if(!U)return(t=(r=window.history.state)==null?void 0:r.rememberedState)==null?void 0:t[e]}on(e,r){let t=n=>{let o=r(n);n.cancelable&&!n.defaultPrevented&&o===!1&&n.preventDefault()};return document.addEventListener(`inertia:${e}`,t),()=>document.removeEventListener(`inertia:${e}`,t)}},ue={buildDOMElement(e){let r=document.createElement("template");r.innerHTML=e;let t=r.content.firstChild;if(!e.startsWith("<script "))return t;let n=document.createElement("script");return n.innerHTML=t.innerHTML,t.getAttributeNames().forEach(o=>{n.setAttribute(o,t.getAttribute(o)||"")}),n},isInertiaManagedElement(e){return e.nodeType===Node.ELEMENT_NODE&&e.getAttribute("inertia")!==null},findMatchingElementIndex(e,r){let t=e.getAttribute("inertia");return t!==null?r.findIndex(n=>n.getAttribute("inertia")===t):-1},update:J(function(e){let r=e.map(t=>this.buildDOMElement(t));Array.from(document.head.childNodes).filter(t=>this.isInertiaManagedElement(t)).forEach(t=>{var w,g;let n=this.findMatchingElementIndex(t,r);if(n===-1){(w=t==null?void 0:t.parentNode)==null||w.removeChild(t);return}let o=r.splice(n,1)[0];o&&!t.isEqualNode(o)&&((g=t==null?void 0:t.parentNode)==null||g.replaceChild(o,t))}),r.forEach(t=>document.head.appendChild(t))},1)};function he(e,r,t){let n={},o=0;function w(){let l=o+=1;return n[l]=[],l.toString()}function g(l){l===null||Object.keys(n).indexOf(l)===-1||(delete n[l],m())}function S(l,i=[]){l!==null&&Object.keys(n).indexOf(l)>-1&&(n[l]=i),m()}function u(){let l=r(""),i={...l?{title:`<title inertia="">${l}</title>`}:{}},v=Object.values(n).reduce((a,y)=>a.concat(y),[]).reduce((a,y)=>{if(y.indexOf("<")===-1)return a;if(y.indexOf("<title ")===0){let k=y.match(/(<title [^>]+>)(.*?)(<\/title>)/);return a.title=k?`${k[1]}${r(k[2])}${k[3]}`:y,a}let b=y.match(/ inertia="[^"]+"/);return b?a[b[0]]=y:a[Object.keys(a).length]=y,a},i);return Object.values(v)}function m(){e?t(u()):ue.update(u())}return m(),{forceUpdate:m,createProvider:function(){let l=w();return{update:i=>S(l,i),disconnect:()=>g(l)}}}}var G=null;function me(e){document.addEventListener("inertia:start",fe.bind(null,e)),document.addEventListener("inertia:progress",ge),document.addEventListener("inertia:finish",ve)}function fe(e){G=setTimeout(()=>x.start(),e)}function ge(e){var r;x.isStarted()&&((r=e.detail.progress)!=null&&r.percentage)&&x.set(Math.max(x.status,e.detail.progress.percentage/100*.9))}function ve(e){if(clearTimeout(G),x.isStarted())e.detail.visit.completed?x.done():e.detail.visit.interrupted?x.set(0):e.detail.visit.cancelled&&(x.done(),x.remove());else return}function ye(e){let r=document.createElement("style");r.type="text/css",r.textContent=`
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,document.head.appendChild(r)}function we({delay:e=250,color:r="#29d",includeCSS:t=!0,showSpinner:n=!1}={}){me(e),x.configure({showSpinner:n}),t&&ye(r)}function Se(e){let r=e.currentTarget.tagName.toLowerCase()==="a";return!(e.target&&(e==null?void 0:e.target).isContentEditable||e.defaultPrevented||r&&e.which>1||r&&e.altKey||r&&e.ctrlKey||r&&e.metaKey||r&&e.shiftKey)}var R=new pe,Y=p.createContext(void 0);Y.displayName="InertiaHeadContext";var M=Y,Z=p.createContext(void 0);Z.displayName="InertiaPageContext";var B=Z;function ee({children:e,initialPage:r,initialComponent:t,resolveComponent:n,titleCallback:o,onHeadUpdate:w}){let[g,S]=p.useState({component:t||null,page:r,key:null}),u=p.useMemo(()=>he(typeof window>"u",o||(l=>l),w||(()=>{})),[]);if(p.useEffect(()=>{R.init({initialPage:r,resolveComponent:n,swapComponent:async({component:l,page:i,preserveState:v})=>{S(a=>({component:l,page:i,key:v?a.key:Date.now()}))}}),R.on("navigate",()=>u.forceUpdate())},[]),!g.component)return p.createElement(M.Provider,{value:u},p.createElement(B.Provider,{value:g.page},null));let m=e||(({Component:l,props:i,key:v})=>{let a=p.createElement(l,{key:v,...i});return typeof l.layout=="function"?l.layout(a):Array.isArray(l.layout)?l.layout.concat(a).reverse().reduce((y,b)=>p.createElement(b,{children:y,...i})):a});return p.createElement(M.Provider,{value:u},p.createElement(B.Provider,{value:g.page},m({Component:g.component,key:g.key,props:g.page.props})))}ee.displayName="Inertia";async function Le({id:e="app",resolve:r,setup:t,title:n,progress:o={},page:w,render:g}){let S=typeof window>"u",u=S?null:document.getElementById(e),m=w||JSON.parse(u.dataset.page),l=a=>Promise.resolve(r(a)).then(y=>y.default||y),i=[],v=await l(m.component).then(a=>t({el:u,App:ee,props:{initialPage:m,initialComponent:a,resolveComponent:l,titleCallback:n,onHeadUpdate:S?y=>i=y:null}}));if(!S&&o&&we(o),S){let a=await g(p.createElement("div",{id:e,"data-page":JSON.stringify(m)},v));return{head:i,body:a}}}var be=function({children:e,title:r}){let t=p.useContext(M),n=p.useMemo(()=>t.createProvider(),[t]);p.useEffect(()=>()=>{n.disconnect()},[n]);function o(i){return["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].indexOf(i.type)>-1}function w(i){let v=Object.keys(i.props).reduce((a,y)=>{if(["head-key","children","dangerouslySetInnerHTML"].includes(y))return a;let b=i.props[y];return b===""?a+` ${y}`:a+` ${y}="${b}"`},"");return`<${i.type}${v}>`}function g(i){return typeof i.props.children=="string"?i.props.children:i.props.children.reduce((v,a)=>v+S(a),"")}function S(i){let v=w(i);return i.props.children&&(v+=g(i)),i.props.dangerouslySetInnerHTML&&(v+=i.props.dangerouslySetInnerHTML.__html),o(i)||(v+=`</${i.type}>`),v}function u(i){return W.cloneElement(i,{inertia:i.props["head-key"]!==void 0?i.props["head-key"]:""})}function m(i){return S(u(i))}function l(i){let v=W.Children.toArray(i).filter(a=>a).map(a=>m(a));return r&&!v.find(a=>a.startsWith("<title"))&&v.push(`<title inertia>${r}</title>`),v}return n.update(l(e)),null},Ve=be,I=()=>{},Ee=p.forwardRef(({children:e,as:r="a",data:t={},href:n,method:o="get",preserveScroll:w=!1,preserveState:g=null,replace:S=!1,only:u=[],headers:m={},queryStringArrayFormat:l="brackets",onClick:i=I,onCancelToken:v=I,onBefore:a=I,onStart:y=I,onProgress:b=I,onFinish:k=I,onCancel:P=I,onSuccess:V=I,onError:C=I,...T},O)=>{let c=p.useCallback(d=>{i(d),Se(d)&&(d.preventDefault(),R.visit(n,{data:t,method:o,preserveScroll:w,preserveState:g??o!=="get",replace:S,only:u,headers:m,onCancelToken:v,onBefore:a,onStart:y,onProgress:b,onFinish:k,onCancel:P,onSuccess:V,onError:C}))},[t,n,o,w,g,S,u,m,i,v,a,y,b,k,P,V,C]);r=r.toLowerCase(),o=o.toLowerCase();let[f,s]=Q(o,n||"",t,l);return n=f,t=s,r==="a"&&o!=="get"&&console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${n}" method="${o}" as="button">...</Link>`),p.createElement(r,{...T,...r==="a"?{href:n}:{},ref:O,onClick:c},e)}),Oe=Ee;function X(e,r){let[t,n]=p.useState(()=>{let o=R.restore(r);return o!==void 0?o:e});return p.useEffect(()=>{R.remember(t,r)},[t,r]),[t,n]}function $e(e,r){let t=p.useRef(null),n=typeof e=="string"?e:null,[o,w]=p.useState((typeof e=="string"?r:e)||{}),g=p.useRef(null),S=p.useRef(null),[u,m]=n?X(o,`${n}:data`):p.useState(o),[l,i]=n?X({},`${n}:errors`):p.useState({}),[v,a]=p.useState(!1),[y,b]=p.useState(!1),[k,P]=p.useState(null),[V,C]=p.useState(!1),[T,O]=p.useState(!1),c=s=>s;p.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]);let f=p.useCallback((s,d,h={})=>{let $={...h,onCancelToken:E=>{if(g.current=E,h.onCancelToken)return h.onCancelToken(E)},onBefore:E=>{if(C(!1),O(!1),clearTimeout(S.current),h.onBefore)return h.onBefore(E)},onStart:E=>{if(b(!0),h.onStart)return h.onStart(E)},onProgress:E=>{if(P(E),h.onProgress)return h.onProgress(E)},onSuccess:E=>{if(t.current&&(b(!1),P(null),i({}),a(!1),C(!0),O(!0),S.current=setTimeout(()=>{t.current&&O(!1)},2e3)),h.onSuccess)return h.onSuccess(E)},onError:E=>{if(t.current&&(b(!1),P(null),i(E),a(!0)),h.onError)return h.onError(E)},onCancel:()=>{if(t.current&&(b(!1),P(null)),h.onCancel)return h.onCancel()},onFinish:()=>{if(t.current&&(b(!1),P(null)),g.current=null,h.onFinish)return h.onFinish()}};s==="delete"?R.delete(d,{...$,data:c(u)}):R[s](d,c(u),$)},[u,i]);return{data:u,setData(s,d){m(typeof s=="string"?{...u,[s]:d}:typeof s=="function"?h=>s(h):s)},isDirty:!re(u,o),errors:l,hasErrors:v,processing:y,progress:k,wasSuccessful:V,recentlySuccessful:T,transform(s){c=s},setDefaults(s,d){w(typeof s>"u"?()=>u:h=>({...h,...typeof s=="string"?{[s]:d}:s}))},reset(...s){s.length===0?m(o):m(Object.keys(o).filter(d=>s.includes(d)).reduce((d,h)=>(d[h]=o[h],d),{...u}))},setError(s,d){i(h=>{let $={...h,...typeof s=="string"?{[s]:d}:s};return a(Object.keys($).length>0),$})},clearErrors(...s){i(d=>{let h=Object.keys(d).reduce(($,E)=>({...$,...s.length>0&&!s.includes(E)?{[E]:d[E]}:{}}),{});return a(Object.keys(h).length>0),h})},submit:f,get(s,d){f("get",s,d)},post(s,d){f("post",s,d)},put(s,d){f("put",s,d)},patch(s,d){f("patch",s,d)},delete(s,d){f("delete",s,d)},cancel(){g.current&&g.current.cancel()}}}function Re(){let e=p.useContext(B);if(!e)throw new Error("usePage must be used within the Inertia component");return e}export{Le as U,Re as W,$e as _,Oe as d,Ve as n};
