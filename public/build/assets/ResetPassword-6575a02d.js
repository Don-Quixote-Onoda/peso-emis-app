import{_ as f,r as h,j as a,a as s,n as v}from"./app-0bb05a73.js";import{G as g}from"./GuestLayout-8bb77b53.js";import{I as m}from"./InputError-68cc916b.js";import{I as l}from"./InputLabel-d0a37234.js";import{P as N}from"./PrimaryButton-36ab1d03.js";import{T as n}from"./TextInput-02806378.js";import"./ApplicationLogo-4a89ffa2.js";function E({token:i,email:d}){const{data:o,setData:p,post:c,processing:u,errors:r,reset:w}=f({token:i,email:d,password:"",password_confirmation:""});h.useEffect(()=>()=>{w("password","password_confirmation")},[]);const t=e=>{p(e.target.name,e.target.value)};return a(g,{children:[s(v,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),c(route("password.store"))},children:[a("div",{children:[s(l,{htmlFor:"email",value:"Email"}),s(n,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",onChange:t}),s(m,{message:r.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{htmlFor:"password",value:"Password"}),s(n,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:t}),s(m,{message:r.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{htmlFor:"password_confirmation",value:"Confirm Password"}),s(n,{type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:t}),s(m,{message:r.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(N,{className:"ml-4",disabled:u,children:"Reset Password"})})]})]})}export{E as default};
