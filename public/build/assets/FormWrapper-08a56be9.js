import{r as F,a as r,j as a,F as c}from"./app-e50456e4.js";import{u as S,C as i}from"./index.esm-197e2066.js";import{c as l}from"./hooks.esm-af47eb61.js";import{T as f}from"./toast.esm-0a7c936f.js";import{I as p}from"./inputtext.esm-05b5c608.js";import"./tooltip.esm-356fa9bd.js";import"./csstransition.esm-d4c9f030.js";import"./ripple.esm-5f51d64d.js";function V({children:h}){const o=F.useRef(null),d=()=>{o.current.show({severity:"success",summary:"Form Submitted",detail:g("value")})},v={value:""},{control:t,formState:{errors:s},handleSubmit:N,getValues:g,reset:x}=S({defaultValues:v}),b=e=>{e.value&&d()},u=e=>s[e]?r("small",{className:"p-error",children:s[e].message}):r("small",{className:"p-error",children:" "});return r("div",{className:"card flex justify-content-center",children:a("form",{onSubmit:N(b),children:[r(f,{ref:o}),r(i,{name:"value",control:t,rules:{required:"Name - Surname is required."},render:({field:e,fieldState:m})=>a(c,{children:[r("label",{htmlFor:e.name,className:l({"p-error":s.value})}),a("span",{className:"p-float-label",children:[r(p,{id:e.name,value:e.value,className:l({"p-invalid":m.error}),onChange:n=>e.onChange(n.target.value)}),r("label",{htmlFor:e.name,children:"Name - Surname"})]}),u(e.name)]})}),r(i,{name:"sample",control:t,rules:{required:"Name - Surname is required."},render:({field:e,fieldState:m})=>a(c,{children:[r("label",{htmlFor:e.name,className:l({"p-error":s.value})}),a("span",{className:"p-float-label",children:[r(p,{id:e.name,value:e.value,className:l({"p-invalid":m.error}),onChange:n=>e.onChange(n.target.value)}),r("label",{htmlFor:e.name,children:"Name - Surname"})]}),u(e.name)]})}),h]})})}export{V as default};
