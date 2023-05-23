import{r as a}from"./app-6c5c40eb.js";import{R as T}from"./ripple.esm-403a413e.js";import{T as x}from"./tooltip.esm-aa814582.js";import{O as s,c as d,I as R}from"./hooks.esm-a69b8e5c.js";function c(){return c=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(n[e]=o[e])}return n},c.apply(this,arguments)}function l(n){return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(n)}function z(n,t){if(l(n)!=="object"||n===null)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var e=o.call(n,t||"default");if(l(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function L(n){var t=z(n,"string");return l(t)==="symbol"?t:String(t)}function i(n,t,o){return t=L(t),t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}var u={defaultProps:{__TYPE:"Button",label:null,icon:null,iconPos:"left",badge:null,severity:null,rounded:!1,raised:!1,outlined:!1,text:!1,link:!1,badgeClassName:null,tooltip:null,size:null,tooltipOptions:null,disabled:!1,loading:!1,loadingIcon:"pi pi-spinner pi-spin",visible:!0,children:void 0},getProps:function(t){return s.getMergedProps(t,u.defaultProps)},getOtherProps:function(t){return s.getDiffProps(t,u.defaultProps)}},M=a.memo(a.forwardRef(function(n,t){var o,e=u.getProps(n),r=a.useRef(t);if(a.useEffect(function(){s.combinedRefs(r,t)},[r,t]),e.visible===!1)return null;var g=function(){var b=e.loading?e.loadingIcon:e.icon,w=d("p-button-icon p-c",i({"p-button-loading-icon":e.loading},"p-button-icon-".concat(e.iconPos),e.label));return R.getJSXIcon(b,{className:w},{props:e})},v=function(){return e.label?a.createElement("span",{className:"p-button-label p-c"},e.label):!e.children&&!e.label&&a.createElement("span",{className:"p-button-label p-c",dangerouslySetInnerHTML:{__html:"&nbsp;"}})},y=function(){if(e.badge){var b=d("p-badge",e.badgeClassName);return a.createElement("span",{className:b},e.badge)}return null},p=e.disabled||e.loading,P=!p||e.tooltipOptions&&e.tooltipOptions.showOnDisabled,h=s.isNotEmpty(e.tooltip)&&P,N=u.getOtherProps(e),O={large:"lg",small:"sm"},f=O[e.size],E=d("p-button p-component",e.className,(o={"p-button-icon-only":(e.icon||e.loading&&e.loadingIcon)&&!e.label&&!e.children,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-disabled":p,"p-button-loading":e.loading,"p-button-outlined":e.outlined,"p-button-raised":e.raised,"p-button-link":e.link,"p-button-text":e.text,"p-button-rounded":e.rounded,"p-button-loading-label-only":e.loading&&!e.icon&&e.label},i(o,"p-button-loading-".concat(e.iconPos),e.loading&&e.loadingIcon&&e.label),i(o,"p-button-".concat(f),f),i(o,"p-button-".concat(e.severity),e.severity),o)),I=g(),S=v(),_=y(),B=e.label?e.label+(e.badge?" "+e.badge:""):e["aria-label"];return a.createElement(a.Fragment,null,a.createElement("button",c({ref:r,"aria-label":B},N,{className:E,disabled:p}),I,S,e.children,_,a.createElement(T,null)),h&&a.createElement(x,c({target:r,content:e.tooltip},e.tooltipOptions)))}));M.displayName="Button";export{M as B};