import{j as s,a as e}from"./app-8152747c.js";import{r as x}from"./react-9a873dbd.js";import{u as r,T as F,R as b,I as i,c as u}from"./primereact-81f5fb97.js";import q from"./NavigatorButton-f2b9f056.js";import{u as O}from"./react-hook-form-20ad6bdc.js";import{I as h}from"./InputError-a1a7a641.js";import"./jspdf-7a201d71.js";import"./@babel-e66356b2.js";import"./fflate-8981c52c.js";import"./axios-aba6f0e0.js";import"./react-dom-3eb6303a.js";import"./call-bind-2ea32180.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./scheduler-04ce0582.js";import"./@inertiajs-ef2582a9.js";import"./deepmerge-89e33937.js";import"./qs-da11641f.js";import"./side-channel-9a8f457d.js";import"./object-inspect-4012e9c9.js";import"./nprogress-e0bc7c5f.js";import"./lodash.isequal-c571d922.js";import"./laravel-vite-plugin-d10ca5e8.js";/* empty css                   */import"./react-transition-group-0105c8fc.js";import"./dom-helpers-9a525042.js";function de({activeIndex:g,numberOfPage:v,setActiveIndex:f,counterPrevious:N}){const[l,d]=r(sessionStorage.getItem("title"),"title"),[y,p]=x.useState(!1),[o,C]=r(sessionStorage.getItem("contactPerson"),"contactPerson"),[m,S]=r(sessionStorage.getItem("postion"),"postion"),[E,I]=r(sessionStorage.getItem("telephoneNumber"),"telephoneNumber"),[n,k]=r(sessionStorage.getItem("mobileNumber"),"mobileNumber"),[M,w]=r(sessionStorage.getItem("faxNumber"),"faxNumber"),[c,T]=r(sessionStorage.getItem("emailAdress"),"emailAdress"),P=x.useRef(null),[a,A]=x.useState(!1);return O({defaultValues:{value:""}}),s("form",{onSubmit:t=>{t.preventDefault(),A(!0),l&&o&&m&&n&&c&&f(g+1)},children:[e(F,{ref:P}),e("div",{class:"step-2",children:s("div",{class:"card rounded-0 border-0",children:[e("div",{class:" bg-light mb-2 font-bold mt-10",children:e("h4",{class:"card-title fw-bold",children:"II. ESTABLISHMENT CONTACT DETAILS"})}),s("div",{class:"card-body row",children:[s("div",{class:"col-md-12",children:[s("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Title:",e("span",{className:"text-red-500",children:"*"})]}),s("div",{class:"row",children:[e("div",{class:"col-md-1",children:s("div",{className:"flex flex-nowrap items-center",onClick:t=>p(!1),children:[e(b,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Mr.",checked:l==="Mr.",onChange:t=>d(t.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Mr."})]})}),e("div",{class:"col-md-1",children:s("div",{className:"flex flex-nowrap items-center",onClick:t=>p(!1),children:[e(b,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Ms.",checked:l==="Ms.",onChange:t=>d(t.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Ms."})]})}),e("div",{class:"col-md-1",children:s("div",{className:"flex flex-nowrap items-center",onClick:t=>p(!1),children:[e(b,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Mrs.",checked:l==="Mrs.",onChange:t=>d(t.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Mrs."})]})}),e("div",{class:"col-md-9",children:s("div",{className:"flex flex-nowrap items-center",onClick:t=>p(!0),children:[e(b,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Others (please specify):",checked:l!=="Others (please specify):"&&l!=="Mrs."&&l!=="Ms."&&l!=="Mr.",onChange:t=>d(t.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Others (please specify):"})]})}),y&&e("div",{className:"col-md-6 mt-3",children:e(i,{className:"form-control col-md-9 !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name",onChange:t=>d(t.target.value)})}),a&&(l==""||l==null)&&e(h,{message:"Establishment Name is required!",className:"mt-2 text-xs"})]})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Contact Person (Full Name):"}),e(i,{value:o,className:`form-control !text-xs !py-2.5 ${u({"p-invalid":a&&(o==""||o==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>C(t.target.value)}),a&&(o==""||o==null)&&e(h,{message:"Contact Person is required!",className:"mt-2 text-xs"})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Position:"}),e(i,{value:m,className:`form-control !text-xs !py-2.5 ${u({"p-invalid":a&&(m==""||m==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>S(t.target.value)}),a&&(m==""||m==null)&&e(h,{message:"Position is required!",className:"mt-2 text-xs"})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Telephone Number:"}),e(i,{value:E,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name",onChange:t=>I(t.target.value)})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Mobile Number:"}),e(i,{value:n,className:`form-control !text-xs !py-2.5 ${u({"p-invalid":a&&(n==""||n==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>k(t.target.value)}),a&&(n==""||n==null)&&e(h,{message:"Mobile Number is required!",className:"mt-2 text-xs"})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Fax Number:"}),e(i,{value:M,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name",onChange:t=>w(t.target.value)})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Email Adress:"}),e(i,{value:c,className:`form-control !text-xs !py-2.5 ${u({"p-invalid":a&&(c==""||c==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>T(t.target.value)}),a&&(c==""||c==null)&&e(h,{message:"Email Address is required!",className:"mt-2 text-xs"})]}),e("div",{class:"col-md-12 mb-4"})]})]})}),e(q,{activeIndex:g,numberOfPage:v,setActiveIndex:f,counterPrevious:N})]})}export{de as default};