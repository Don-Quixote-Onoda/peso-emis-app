import{r,j as a,a as e}from"./app-0bb05a73.js";import{I as m}from"./InputLabel-d0a37234.js";import{T as t}from"./TextInput-02806378.js";import{B as s}from"./button.esm-67b3c8e3.js";import"./ripple.esm-7dbbab03.js";import"./tooltip.esm-31176c50.js";import"./hooks.esm-d3e364e1.js";function x({back:i,user:l}){return r.useEffect(()=>{console.log(l)}),a("div",{className:"card my-5 w-2/4 mx-auto py-6 px-4 sm:px-6 lg:px-8",children:[a("div",{className:"flex justify-between",children:[e("h4",{class:"card-title fw-bold",children:"View User"}),e(s,{icon:"pi pi-arrow-left",className:"mr-2",label:"Back",onClick:()=>i()})]}),a("form",{children:[a("div",{children:[e(m,{htmlFor:"name",value:"Name"}),e(t,{id:"name",name:"name",value:l.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,disabled:!0})]}),a("div",{className:"mt-4",children:[e(m,{htmlFor:"email",value:"Email"}),e(t,{id:"email",type:"email",name:"email",value:l.email,className:"mt-1 block w-full",autoComplete:"username",disabled:!0})]})]})]})}export{x as default};