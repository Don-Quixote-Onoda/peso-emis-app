import{r as a}from"./app-457c3987.js";import{P as g}from"./tooltip.esm-99ee236f.js";import{a as h,b as E,d as T,D as t}from"./hooks.esm-dfd2d112.js";var y=a.memo(a.forwardRef(function(){var e=a.useRef(null),r=a.useRef(null),s=function(){return e.current&&e.current.parentElement},f=function(){r.current&&(r.current.addEventListener("mousedown",p),t.isTouchDevice()&&r.current.addEventListener("touchstart",l))},d=function(){r.current&&(r.current.removeEventListener("mousedown",p),t.isTouchDevice()&&r.current.removeEventListener("touchstart",l))},l=function(n){var u=t.getOffset(r.current),c=n.targetTouches[0].pageX-u.left+document.body.scrollTop-t.getWidth(e.current)/2,i=n.targetTouches[0].pageY-u.top+document.body.scrollLeft-t.getHeight(e.current)/2;v(c,i)},p=function(n){if(!t.isTouchDevice()){var u=t.getOffset(r.current),c=n.pageX-u.left+document.body.scrollTop-t.getWidth(e.current)/2,i=n.pageY-u.top+document.body.scrollLeft-t.getHeight(e.current)/2;v(c,i)}},v=function(n,u){if(!(!e.current||getComputedStyle(e.current,null).display==="none")){if(t.removeClass(e.current,"p-ink-active"),!t.getHeight(e.current)&&!t.getWidth(e.current)){var c=Math.max(t.getOuterWidth(r.current),t.getOuterHeight(r.current));e.current.style.height=c+"px",e.current.style.width=c+"px"}e.current.style.top=u+"px",e.current.style.left=n+"px",t.addClass(e.current,"p-ink-active")}},m=function(n){t.removeClass(n.currentTarget,"p-ink-active")};return h(function(){e.current&&(r.current=s(),f())}),E(function(){e.current&&!r.current&&(r.current=s(),f())}),T(function(){e.current&&(r.current=null,d())}),g.ripple?a.createElement("span",{role:"presentation",ref:e,className:"p-ink",onAnimationEnd:m}):null}));y.displayName="Ripple";export{y as R};
