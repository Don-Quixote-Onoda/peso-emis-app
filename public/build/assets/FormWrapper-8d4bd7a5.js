import{a as e,j as a,F as p}from"./app-8152747c.js";import{r as F}from"./react-9a873dbd.js";import{u as S,C as u}from"./react-hook-form-20ad6bdc.js";import{T as x,c as t,I as c}from"./primereact-81f5fb97.js";import"./jspdf-7a201d71.js";import"./@babel-e66356b2.js";import"./fflate-8981c52c.js";import"./axios-aba6f0e0.js";import"./react-dom-3eb6303a.js";import"./call-bind-2ea32180.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./scheduler-04ce0582.js";import"./@inertiajs-ef2582a9.js";import"./deepmerge-89e33937.js";import"./qs-da11641f.js";import"./side-channel-9a8f457d.js";import"./object-inspect-4012e9c9.js";import"./nprogress-e0bc7c5f.js";import"./lodash.isequal-c571d922.js";import"./laravel-vite-plugin-d10ca5e8.js";/* empty css                   */import"./react-transition-group-0105c8fc.js";import"./dom-helpers-9a525042.js";function X({children:h}){const l=F.useRef(null),d=()=>{l.current.show({severity:"success",summary:"Form Submitted",detail:g("value")})},v={value:""},{control:n,formState:{errors:m},handleSubmit:N,getValues:g,reset:C}=S({defaultValues:v}),b=r=>{r.value&&d()},i=r=>m[r]?e("small",{className:"p-error",children:m[r].message}):e("small",{className:"p-error",children:" "});return e("div",{className:"card flex justify-content-center",children:a("form",{onSubmit:N(b),children:[e(x,{ref:l}),e(u,{name:"value",control:n,rules:{required:"Name - Surname is required."},render:({field:r,fieldState:o})=>a(p,{children:[e("label",{htmlFor:r.name,className:t({"p-error":m.value})}),a("span",{className:"p-float-label",children:[e(c,{id:r.name,value:r.value,className:t({"p-invalid":o.error}),onChange:s=>r.onChange(s.target.value)}),e("label",{htmlFor:r.name,children:"Name - Surname"})]}),i(r.name)]})}),e(u,{name:"sample",control:n,rules:{required:"Name - Surname is required."},render:({field:r,fieldState:o})=>a(p,{children:[e("label",{htmlFor:r.name,className:t({"p-error":m.value})}),a("span",{className:"p-float-label",children:[e(c,{id:r.name,value:r.value,className:t({"p-invalid":o.error}),onChange:s=>r.onChange(s.target.value)}),e("label",{htmlFor:r.name,children:"Name - Surname"})]}),i(r.name)]})}),h]})})}export{X as default};
