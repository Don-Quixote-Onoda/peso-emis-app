import{j as a,a as e}from"./app-8152747c.js";import{r as u}from"./react-9a873dbd.js";import{G as c}from"./GuestLayout-41abd5b5.js";import{I as m}from"./InputError-a1a7a641.js";import{I as i}from"./InputLabel-6701bef9.js";import{P as f}from"./PrimaryButton-797948d3.js";import{T as n}from"./TextInput-534a9aa4.js";import{_ as w,n as g,d as h}from"./@inertiajs-ef2582a9.js";import"./jspdf-7a201d71.js";import"./@babel-e66356b2.js";import"./fflate-8981c52c.js";import"./axios-aba6f0e0.js";import"./react-dom-3eb6303a.js";import"./call-bind-2ea32180.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./scheduler-04ce0582.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./primereact-81f5fb97.js";import"./react-transition-group-0105c8fc.js";import"./dom-helpers-9a525042.js";/* empty css                   */import"./deepmerge-89e33937.js";import"./qs-da11641f.js";import"./side-channel-9a8f457d.js";import"./object-inspect-4012e9c9.js";import"./nprogress-e0bc7c5f.js";import"./lodash.isequal-c571d922.js";import"./ApplicationLogo-ba68fffa.js";function X(){const{data:t,setData:o,post:l,processing:p,errors:s,reset:d}=w({name:"",email:"",password:"",password_confirmation:"",role:1});return u.useEffect(()=>()=>{d("password","password_confirmation")},[]),a(c,{children:[e(g,{title:"Register"}),a("form",{onSubmit:r=>{r.preventDefault(),l(route("register"))},children:[a("div",{children:[e(i,{htmlFor:"name",value:"Name"}),e(n,{id:"name",name:"name",value:t.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:r=>o("name",r.target.value),required:!0}),e(m,{message:s.name,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(i,{htmlFor:"email",value:"Email"}),e(n,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",onChange:r=>o("email",r.target.value),required:!0}),e(m,{message:s.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(i,{htmlFor:"password",value:"Password"}),e(n,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:r=>o("password",r.target.value),required:!0}),e(m,{message:s.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(i,{htmlFor:"password_confirmation",value:"Confirm Password"}),e(n,{id:"password_confirmation",type:"password",name:"password_confirmation",value:t.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:r=>o("password_confirmation",r.target.value),required:!0}),e(m,{message:s.password_confirmation,className:"mt-2"})]}),a("div",{className:"flex items-center justify-end mt-4",children:[e(h,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Already registered?"}),e(f,{className:"ml-4",disabled:p,children:"Register"})]})]})]})}export{X as default};