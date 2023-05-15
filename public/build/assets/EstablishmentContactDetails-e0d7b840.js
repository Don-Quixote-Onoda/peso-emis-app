import{r as x,j as s,a as e}from"./app-0bb05a73.js";import{u as r,c as u}from"./hooks.esm-d3e364e1.js";import{I as i}from"./inputtext.esm-730e8e94.js";import{R as p}from"./radiobutton.esm-6e10a346.js";import F from"./NavigatorButton-6c5d030c.js";import{u as q}from"./index.esm-d3edf24e.js";import{I as h}from"./InputError-68cc916b.js";import{T as O}from"./toast.esm-e029f864.js";import"./tooltip.esm-31176c50.js";import"./csstransition.esm-6c3d9e4e.js";import"./ripple.esm-7dbbab03.js";function U({activeIndex:f,numberOfPage:v,setActiveIndex:g,counterPrevious:N}){const[l,d]=r(sessionStorage.getItem("title"),"title"),[y,b]=x.useState(!1),[o,C]=r(sessionStorage.getItem("contactPerson"),"contactPerson"),[m,S]=r(sessionStorage.getItem("postion"),"postion"),[E,I]=r(sessionStorage.getItem("telephoneNumber"),"telephoneNumber"),[n,k]=r(sessionStorage.getItem("mobileNumber"),"mobileNumber"),[M,w]=r(sessionStorage.getItem("faxNumber"),"faxNumber"),[c,T]=r(sessionStorage.getItem("emailAdress"),"emailAdress"),P=x.useRef(null),[a,A]=x.useState(!1);return q({defaultValues:{value:""}}),s("form",{onSubmit:t=>{t.preventDefault(),A(!0),l&&o&&m&&n&&c&&g(f+1)},children:[e(O,{ref:P}),e("div",{class:"step-2",children:s("div",{class:"card rounded-0 border-0",children:[e("div",{class:" bg-light mb-2 font-bold mt-10",children:e("h4",{class:"card-title fw-bold",children:"II. ESTABLISHMENT CONTACT DETAILS"})}),s("div",{class:"card-body row",children:[s("div",{class:"col-md-12",children:[s("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Title:",e("span",{className:"text-red-500",children:"*"})]}),s("div",{class:"row",children:[e("div",{class:"col-md-1",children:s("div",{className:"flex flex-nowrap items-center",onClick:t=>b(!1),children:[e(p,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Mr.",checked:l==="Mr.",onChange:t=>d(t.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Mr."})]})}),e("div",{class:"col-md-1",children:s("div",{className:"flex flex-nowrap items-center",onClick:t=>b(!1),children:[e(p,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Ms.",checked:l==="Ms.",onChange:t=>d(t.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Ms."})]})}),e("div",{class:"col-md-1",children:s("div",{className:"flex flex-nowrap items-center",onClick:t=>b(!1),children:[e(p,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Mrs.",checked:l==="Mrs.",onChange:t=>d(t.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Mrs."})]})}),e("div",{class:"col-md-9",children:s("div",{className:"flex flex-nowrap items-center",onClick:t=>b(!0),children:[e(p,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Others (please specify):",checked:l!=="Others (please specify):"&&l!=="Mrs."&&l!=="Ms."&&l!=="Mr.",onChange:t=>d(t.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Others (please specify):"})]})}),y&&e("div",{className:"col-md-6 mt-3",children:e(i,{className:"form-control col-md-9 !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name",onChange:t=>d(t.target.value)})}),a&&(l==""||l==null)&&e(h,{message:"Establishment Name is required!",className:"mt-2 text-xs"})]})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Contact Person (Full Name):"}),e(i,{value:o,className:`form-control !text-xs !py-2.5 ${u({"p-invalid":a&&(o==""||o==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>C(t.target.value)}),a&&(o==""||o==null)&&e(h,{message:"Contact Person is required!",className:"mt-2 text-xs"})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Position:"}),e(i,{value:m,className:`form-control !text-xs !py-2.5 ${u({"p-invalid":a&&(m==""||m==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>S(t.target.value)}),a&&(m==""||m==null)&&e(h,{message:"Position is required!",className:"mt-2 text-xs"})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Telephone Number:"}),e(i,{value:E,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name",onChange:t=>I(t.target.value)})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Mobile Number:"}),e(i,{value:n,className:`form-control !text-xs !py-2.5 ${u({"p-invalid":a&&(n==""||n==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>k(t.target.value)}),a&&(n==""||n==null)&&e(h,{message:"Mobile Number is required!",className:"mt-2 text-xs"})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Fax Number:"}),e(i,{value:M,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name",onChange:t=>w(t.target.value)})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Email Adress:"}),e(i,{value:c,className:`form-control !text-xs !py-2.5 ${u({"p-invalid":a&&(c==""||c==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>T(t.target.value)}),a&&(c==""||c==null)&&e(h,{message:"Email Address is required!",className:"mt-2 text-xs"})]}),e("div",{class:"col-md-12 mb-4"})]})]})}),e(F,{activeIndex:f,numberOfPage:v,setActiveIndex:g,counterPrevious:N})]})}export{U as default};
