import{j as e,a as t,F as N}from"./app-8152747c.js";import{A as R}from"./AuthenticatedLayout-87c74c07.js";import{_ as Y,n as O}from"./@inertiajs-ef2582a9.js";import{r as a,R as k}from"./react-9a873dbd.js";import{F as V,B as c,a as f}from"./primereact-81f5fb97.js";import F from"./Table-fbeb1d05.js";import C from"./View-883462ae.js";import M from"./Edit-e217d66c.js";import"./lodash-437d4b3b.js";import"./jspdf-7a201d71.js";import"./@babel-e66356b2.js";import"./fflate-8981c52c.js";import"./axios-aba6f0e0.js";import"./react-dom-3eb6303a.js";import"./call-bind-2ea32180.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./scheduler-04ce0582.js";import"./laravel-vite-plugin-d10ca5e8.js";/* empty css                   */import"./deepmerge-89e33937.js";import"./qs-da11641f.js";import"./side-channel-9a8f457d.js";import"./object-inspect-4012e9c9.js";import"./nprogress-e0bc7c5f.js";import"./lodash.isequal-c571d922.js";import"./react-transition-group-0105c8fc.js";import"./dom-helpers-9a525042.js";import"./ApplicationLogo-ba68fffa.js";import"./Dropdown-c2b3f592.js";import"./@headlessui-7974b500.js";import"./select-philippines-address-196c85dc.js";import"./PersonalInformation-cf197477.js";import"./InputTextWrapper-15805da1.js";import"./Authorization-d19dd150.js";import"./JobPreference-9bdf0716.js";import"./Language-beb8f4b2.js";import"./OtherSkills-5c92cdd5.js";import"./Vocational-1df8b8c1.js";import"./WorkExperience-91fd5e24.js";import"./Education-735edc25.js";function jt(i){const[g,E]=a.useState([]),[l,H]=a.useState([]);a.useState("");const[o,p]=a.useState("default"),{data:m,setData:n,post:A,get:_,reset:x,processing:q,errors:G}=Y(l);a.useState({global:{value:null,matchMode:V.CONTAINS}}),a.useEffect(()=>{E(i.applicants),console.log(i.applicants)});const v=r=>{H(r),p("view")},y=r=>{n(r),p("edit")},s=()=>{p("default"),sessionStorage.clear()},[w,d]=a.useState(!1),[T,u]=a.useState(!1),j=()=>{console.log(m),A(route("hire-applicant"),{forceFormData:!0,onSuccess:()=>{x(),i.setDashBoardType("default"),u(!1)},onError:()=>{}})},z=r=>{n({id:r.id}),u(!0)},D=r=>{d(!0),n({id:r.id})},h=()=>{d(!1)},B=()=>{A(route("delete-applicant"),{forceFormData:!0,onSuccess:()=>{x(),p("default"),console.log(o),d(!1)},onError:()=>{}})},b=e(k.Fragment,{children:[t(c,{label:"No",icon:"pi pi-times",outlined:!0,onClick:h}),t(c,{label:"Yes",icon:"pi pi-check",severity:"danger",onClick:B})]}),S=()=>{u(!1)},I=e(k.Fragment,{children:[t(c,{label:"No",icon:"pi pi-times",outlined:!0,onClick:S}),t(c,{label:"Yes",icon:"pi pi-check",severity:"danger",onClick:j})]});return a.useEffect(()=>{console.log(i)}),e(N,{children:[i.isMatches==!1&&e(R,{auth:i.auth,errors:i.errors,header:t("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Applicants"}),children:[t(O,{title:"EMIS - Applicants"}),e("div",{className:" mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:[o=="default"&&t(F,{applicants:g,confirmDeleteApplicant:D,viewApplicant:v,editApplicant:y,isMatches:i.isMatches}),o=="view"&&t(C,{applicant:l,back:s}),o=="edit"&&t(M,{applicant:l,data:m,setData:n,back:s})]}),t(f,{visible:w,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:b,onHide:h,children:e("div",{className:"confirmation-content",children:[t("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),e("span",{children:["Are you sure you want to delete this applicant? ",t("b",{}),"?"]})]})})]}),i.isMatches==!0&&e(N,{children:[o=="default"&&t(F,{applicants:g,confirmDeleteApplicant:D,viewApplicant:v,editApplicant:y,handleHiredApplicantData:z}),o=="view"&&t(C,{applicant:l,back:s}),o=="edit"&&t(M,{applicant:l,data:m,setData:n,back:s}),t(f,{visible:w,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:b,onHide:h,children:e("div",{className:"confirmation-content",children:[t("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),e("span",{children:["Are you sure you want to delete this applicant? ",t("b",{}),"?"]})]})}),t(f,{visible:T,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:I,onHide:S,children:e("div",{className:"confirmation-content",children:[t("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),t("span",{children:"Are you sure you want to hire this applicant?"})]})})]})]})}export{jt as default};