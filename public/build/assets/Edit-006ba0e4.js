import{r as c,j as s,a as e}from"./app-f4074e42.js";import"./Dropdown-3458d7e3.js";import{I as r}from"./InputError-f505fc3e.js";import{I as t}from"./InputLabel-973d001b.js";import{P as v}from"./PrimaryButton-0641bcb0.js";import{T as i}from"./TextInput-e66527b2.js";import{B as h}from"./button.esm-f5b75854.js";import{D as N}from"./dropdown.esm-0a2db01b.js";import"./transition-8ea57daf.js";import"./ripple.esm-2b1ddcca.js";import"./tooltip.esm-78474424.js";import"./hooks.esm-652fc78d.js";import"./overlayservice.esm-5f19d3c9.js";import"./csstransition.esm-969bb85a.js";function L({back:n,user:g,data:o,setData:l,processing:u,errors:m,reset:d,post:p}){c.useEffect(()=>{console.log(o)}),c.useEffect(()=>()=>{d("password","password_confirmation")},[]);const f=a=>{a.preventDefault(),p(route("update-user"),{onSuccess:()=>{n()},onError:()=>{console.log(m)}})},w=[{name:"Administrator",value:1},{name:"Employer",value:0}];return s("div",{className:"card my-5 w-2/4 mx-auto py-6 px-4 sm:px-6 lg:px-8",children:[s("div",{className:"flex justify-between",children:[e("h4",{class:"card-title fw-bold",children:"Edit User"}),e(h,{icon:"pi pi-arrow-left",className:"mr-2",label:"Back",onClick:()=>n()})]}),s("form",{onSubmit:f,children:[s("div",{children:[e(t,{htmlFor:"name",value:"Name"}),e(i,{id:"name",name:"name",value:o.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:a=>l("name",a.target.value),required:!0}),e(r,{message:m.name,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(t,{htmlFor:"email",value:"Email"}),e(i,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>l("email",a.target.value),required:!0}),e(r,{message:m.email,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(t,{htmlFor:"role",value:"Role"}),e(N,{value:o.role,onChange:a=>l("role",a.value),options:w,optionLabel:"name",editable:!0,placeholder:"Select a Role",className:"w-full md:w-14rem",required:!0}),e(r,{message:m.role,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(t,{htmlFor:"password",value:"Password"}),e(i,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>l("password",a.target.value)}),e(r,{message:m.password,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(t,{htmlFor:"password_confirmation",value:"Confirm Password"}),e(i,{id:"password_confirmation",type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>l("password_confirmation",a.target.value)}),e(r,{message:m.password_confirmation,className:"mt-2"})]}),e("div",{className:"flex items-center justify-end mt-4",children:e(v,{className:"ml-4",disabled:u,children:"Save"})})]})]})}export{L as default};