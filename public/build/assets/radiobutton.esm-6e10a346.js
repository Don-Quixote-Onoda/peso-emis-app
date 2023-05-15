import{r}from"./app-0bb05a73.js";import{T as B}from"./tooltip.esm-31176c50.js";import{O as p,D as h,c as E}from"./hooks.esm-d3e364e1.js";function m(){return m=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},m.apply(this,arguments)}function F(t){if(Array.isArray(t))return t}function H(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var o,s,f,c,i=[],a=!0,v=!1;try{if(f=(e=e.call(t)).next,n===0){if(Object(e)!==e)return;a=!1}else for(;!(a=(o=f.call(e)).done)&&(i.push(o.value),i.length!==n);a=!0);}catch(d){v=!0,s=d}finally{try{if(!a&&e.return!=null&&(c=e.return(),Object(c)!==c))return}finally{if(v)throw s}}return i}}function O(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function K(t,n){if(t){if(typeof t=="string")return O(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return O(t,n)}}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(t,n){return F(t)||H(t,n)||K(t,n)||q()}var g={defaultProps:{__TYPE:"RadioButton",id:null,inputRef:null,inputId:null,name:null,value:null,checked:!1,style:null,className:null,disabled:!1,required:!1,tabIndex:null,tooltip:null,tooltipOptions:null,onChange:null,children:void 0},getProps:function(n){return p.getMergedProps(n,g.defaultProps)},getOtherProps:function(n){return p.getDiffProps(n,g.defaultProps)}},$=r.memo(r.forwardRef(function(t,n){var e=g.getProps(t),o=r.useState(!1),s=M(o,2),f=s[0],c=s[1],i=r.useRef(null),a=r.useRef(e.inputRef),v=function(u){d(u)},d=function(u){if(!e.disabled&&e.onChange){var b=e.checked,j=u.target instanceof HTMLDivElement,w=u.target===a.current,T=w&&u.target.checked!==b,R=j&&(h.hasClass(i.current,"p-radiobutton-checked")===b?!b:!1);if(T||R){var y=!b;e.onChange({originalEvent:u,value:e.value,checked:y,stopPropagation:function(){},preventDefault:function(){},target:{type:"radio",name:e.name,id:e.id,value:e.value,checked:y}}),R&&(a.current.checked=y)}h.focus(a.current),u.preventDefault()}},k=function(){c(!0)},I=function(){c(!1)},A=function(u){(u.code==="Space"||u.key===" ")&&d(u)};r.useEffect(function(){a.current&&(a.current.checked=e.checked)},[e.checked]),r.useEffect(function(){p.combinedRefs(a,e.inputRef)},[a,e.inputRef]),r.useImperativeHandle(n,function(){return{props:e,select:v,focus:function(){return h.focus(a.current)},getElement:function(){return i.current},getInput:function(){return a.current}}});var S=p.isNotEmpty(e.tooltip),P=g.getOtherProps(e),N=p.reduceKeys(P,h.ARIA_PROPS),C=E("p-radiobutton p-component",{"p-radiobutton-checked":e.checked,"p-radiobutton-disabled":e.disabled,"p-radiobutton-focused":f},e.className),D=E("p-radiobutton-box",{"p-highlight":e.checked,"p-disabled":e.disabled,"p-focus":f});return r.createElement(r.Fragment,null,r.createElement("div",m({ref:i,id:e.id,className:C,style:e.style},P,{onClick:d}),r.createElement("div",{className:"p-hidden-accessible"},r.createElement("input",m({ref:a,id:e.inputId,type:"radio",name:e.name,defaultChecked:e.checked,onFocus:k,onBlur:I,onKeyDown:A,disabled:e.disabled,required:e.required,tabIndex:e.tabIndex},N))),r.createElement("div",{className:D},r.createElement("div",{className:"p-radiobutton-icon"}))),S&&r.createElement(B,m({target:i,content:e.tooltip},e.tooltipOptions)))}));$.displayName="RadioButton";export{$ as R};
