import{r}from"./app-e50456e4.js";import{D as v,O as m,b as V,c as C,I as F}from"./hooks.esm-af47eb61.js";import{T as H}from"./tooltip.esm-356fa9bd.js";function h(){return h=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},h.apply(this,arguments)}function B(t){if(Array.isArray(t))return t}function K(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var o,s,f,i,u=[],a=!0,p=!1;try{if(f=(e=e.call(t)).next,n===0){if(Object(e)!==e)return;a=!1}else for(;!(a=(o=f.call(e)).done)&&(u.push(o.value),u.length!==n);a=!0);}catch(g){p=!0,s=g}finally{try{if(!a&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(p)throw s}}return u}}function P(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function U(t,n){if(t){if(typeof t=="string")return P(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return P(t,n)}}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(t,n){return B(t)||K(t,n)||U(t,n)||q()}var b={defaultProps:{__TYPE:"Checkbox",id:null,inputRef:null,inputId:null,value:null,name:null,checked:!1,trueValue:!0,falseValue:!1,style:null,className:null,disabled:!1,required:!1,readOnly:!1,tabIndex:null,icon:"pi pi-check",tooltip:null,tooltipOptions:null,onChange:null,onMouseDown:null,onContextMenu:null,children:void 0},getProps:function(n){return m.getMergedProps(n,b.defaultProps)},getOtherProps:function(n){return m.getDiffProps(n,b.defaultProps)}},$=r.memo(r.forwardRef(function(t,n){var e=b.getProps(t),o=r.useState(!1),s=L(o,2),f=s[0],i=s[1],u=r.useRef(null),a=r.useRef(e.inputRef),p=function(l){if(!e.disabled&&!e.readOnly&&e.onChange){var x=y(),T=l.target instanceof HTMLDivElement||l.target instanceof HTMLSpanElement,M=l.target===a.current,N=T&&l.target.checked!==x;if(M||N){var O=x?e.falseValue:e.trueValue;e.onChange({originalEvent:l,value:e.value,checked:O,stopPropagation:function(){},preventDefault:function(){},target:{type:"checkbox",name:e.name,id:e.id,value:e.value,checked:O}})}v.focus(a.current),l.preventDefault()}},g=function(){i(!0)},E=function(){i(!1)},I=function(l){(l.code==="Space"||l.key===" ")&&p(l)},y=function(){return e.checked===e.trueValue};r.useImperativeHandle(n,function(){return{props:e,focus:function(){return v.focus(a.current)},getElement:function(){return u.current},getInput:function(){return a.current}}}),r.useEffect(function(){m.combinedRefs(a,e.inputRef)},[a,e.inputRef]),V(function(){a.current.checked=y()},[e.checked,e.trueValue]);var d=y(),R=m.isNotEmpty(e.tooltip),k=b.getOtherProps(e),S=m.reduceKeys(k,v.ARIA_PROPS),D=C("p-checkbox p-component",{"p-checkbox-checked":d,"p-checkbox-disabled":e.disabled,"p-checkbox-focused":f},e.className),w=C("p-checkbox-box",{"p-highlight":d,"p-disabled":e.disabled,"p-focus":f}),A=F.getJSXIcon(d?e.icon:"",{className:"p-checkbox-icon p-c"},{props:e,checked:d});return r.createElement(r.Fragment,null,r.createElement("div",h({ref:u,id:e.id,className:D,style:e.style},k,{onClick:p,onContextMenu:e.onContextMenu,onMouseDown:e.onMouseDown}),r.createElement("div",{className:"p-hidden-accessible"},r.createElement("input",h({ref:a,type:"checkbox",id:e.inputId,name:e.name,tabIndex:e.tabIndex,defaultChecked:d,onFocus:g,onBlur:E,onKeyDown:I,disabled:e.disabled,readOnly:e.readOnly,required:e.required},S))),r.createElement("div",{className:w},A)),R&&r.createElement(H,h({target:u,content:e.tooltip},e.tooltipOptions)))}));$.displayName="Checkbox";export{$ as C};
