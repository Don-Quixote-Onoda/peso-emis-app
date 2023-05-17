import{r as l,_ as D,j as p,R as q,a as t,n as E}from"./app-e50456e4.js";import{A as N}from"./AuthenticatedLayout-eda7782a.js";import S from"./Table-833c2ed5.js";import k from"./Add-46ac418d.js";import A from"./View-89a328ce.js";import C from"./Edit-37462fd0.js";import{D as F}from"./dialog.esm-2f7b9d64.js";import{B as u}from"./button.esm-21e8e238.js";import"./ApplicationLogo-a75b2c7e.js";import"./Dropdown-e99f19d4.js";import"./transition-c982ff3e.js";import"./tooltip.esm-356fa9bd.js";import"./hooks.esm-af47eb61.js";import"./column.esm-5f7441ea.js";import"./ripple.esm-5f51d64d.js";import"./inputtext.esm-05b5c608.js";import"./dropdown.esm-222d988d.js";import"./overlayservice.esm-ac6bc474.js";import"./csstransition.esm-d4c9f030.js";import"./calendar.esm-b7bc9fde.js";import"./radiobutton.esm-f7f88083.js";import"./InputError-c3b0d5f0.js";function le(s){l.useEffect(()=>{});const[a,f]=l.useState([]),{data:B,setData:y,post:_,put:I,reset:g,processing:R,errors:T}=D();l.useEffect(()=>{f(s.employers[0])});const b=()=>{o("add")},[n,o]=l.useState("default"),[r,j]=l.useState({employer_vacancy_detail:{},employer_posting_detail:{},employer_qualification_requirement:{}}),h=i=>{a.employer_vacancy_detail.map(e=>{e.id===i.id&&(r.employer_vacancy_detail=e)}),a.employer_posting_detail.map(e=>{e.id===i.id&&(r.employer_posting_detail=e)}),a.employer_qualification_requirement.map(e=>{e.id===i.id&&(r.employer_qualification_requirement=e)}),o("edit")},m=()=>{o("default")},x=i=>{a.employer_vacancy_detail.map(e=>{e.id===i.id&&(r.employer_vacancy_detail=e)}),a.employer_posting_detail.map(e=>{e.id===i.id&&(r.employer_posting_detail=e)}),a.employer_qualification_requirement.map(e=>{e.id===i.id&&(r.employer_qualification_requirement=e)}),o("view")},[v,c]=l.useState(!1),J=i=>{c(!0),y({id:i.id})},d=()=>{c(!1)},P=()=>{_(route("delete-job-posting"),{forceFormData:!0,onSuccess:()=>{console.log("success"),g(),o("default"),c(!1)},onError:()=>{}})},w=p(q.Fragment,{children:[t(u,{label:"No",icon:"pi pi-times",outlined:!0,onClick:d}),t(u,{label:"Yes",icon:"pi pi-check",severity:"success",onClick:P})]});return p(N,{auth:s.auth,errors:s.errors,header:t("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Job Posting"}),children:[t(E,{title:"EMIS - Job Posting"}),n=="default"&&t("div",{className:"card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:t(S,{employers:a.employer_vacancy_detail,addNew:b,viewJobPosting:x,editJobPosting:h,confirmDeleteJobPosting:J})}),n=="add"&&t(k,{props:s,back:m,setType:o}),n=="view"&&t(A,{props:s,back:m,setType:o,jobPostings:r}),n=="edit"&&t(C,{props:s,back:m,setType:o,jobPostings:r}),t(F,{visible:v,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:w,onHide:d,children:p("div",{className:"confirmation-content",children:[t("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),t("span",{children:"Are you sure you want to change active status?"})]})})]})}export{le as default};
