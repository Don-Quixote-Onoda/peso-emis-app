import{r as o,_ as x,j as s,a as e}from"./app-5a7a9fd1.js";import{u as a}from"./hooks.esm-a34a9d06.js";import I from"./NavigatorButton-2813b437.js";import{T as S}from"./toast.esm-81f16656.js";import{C as w}from"./checkbox.esm-8a18b5ee.js";import"./tooltip.esm-e9f9bfaf.js";import"./csstransition.esm-e846696c.js";import"./ripple.esm-8552c990.js";function U({activeIndex:c,numberOfPage:d,setActiveIndex:m,counterPrevious:p}){a(sessionStorage.getItem("postingDate"),"postingDate");const[r,i]=o.useState(!1);a(sessionStorage.getItem("validUntil"),"validUntil");const{data:E,setData:h,post:f,processing:N,errors:u}=x(sessionStorage),g=o.useRef(null),b=t=>{t.preventDefault(),n&&!r&&f("/api/employers",{onSuccess:()=>{sessionStorage.clear()},onError:()=>{console.log(u)}})};o.useState(()=>{},[]);const[n,y]=a(sessionStorage.getItem("authorizationAccepted"),"authorizationAccepted"),v=(t,A)=>{let l=t.target.value.split(".").pop();l==="png"||l==="jpg"?(i(!1),sessionStorage.setItem("e_signature",JSON.stringify(t.target.files[0])),h("e_signature",t.target.files[0])):i(!0)};return s("form",{onSubmit:t=>b(t),children:[e(S,{ref:g}),e("div",{class:"step-5",children:s("div",{class:"py-5 card border-0 rounded-0",children:[e("h4",{class:"card-header pl-0 border-0 text-center fw-bold mt-5",children:"CERTIFICATION/AUTHORIZATION"}),e("div",{class:"card-body pl-0 pt-3",children:s("div",{class:"row",children:[e("div",{className:"col-md-1 flex justify-end",children:e(w,{className:"mr-3",onChange:t=>y(t.checked),checked:n})}),e("div",{className:"col-md-11",children:e("h6",{class:" !text-gray-500",children:"This is to certify that all data/information that I have provided in this form are true to the best of my knowledge.This Is also to authorized the DOLE to include my profile in the PESO Employment Information System , which ia a subsystem of the PhilJobNet. It is understood that my name shall be made available to employers who have access to the Registry. I am also aware that DOLE is not obliged to seek employment on my behalf."})})]})}),e("div",{class:"row mt-5",children:e("div",{class:"flex justify-center",children:s("div",{class:"mb-3 w-96",children:[e("label",{for:"formFile",class:"form-label inline-block mb-2 text-gray-700",children:"Upload applicant signature"}),e("input",{class:`form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      upload-applicant-signature
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`,type:"file",id:"formFile",onChange:t=>v(t)}),r&&e("span",{className:"text-red-500 text-xs",children:"File must be png or jpg."})]})})})]})}),e(I,{activeIndex:c,numberOfPage:d,setActiveIndex:m,counterPrevious:p})]})}export{U as default};
