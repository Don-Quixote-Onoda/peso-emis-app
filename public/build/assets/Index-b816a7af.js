import{r as t,_ as N,j as i,R as A,a as e,n as k}from"./app-e50456e4.js";import{A as C}from"./AuthenticatedLayout-eda7782a.js";import{F}from"./tooltip.esm-356fa9bd.js";import M from"./Table-41c38c7a.js";import j from"./View-ab11b140.js";import T from"./Edit-a6ddb0d4.js";import{D as B}from"./dialog.esm-2f7b9d64.js";import{B as d}from"./button.esm-21e8e238.js";import"./ApplicationLogo-a75b2c7e.js";import"./Dropdown-e99f19d4.js";import"./transition-c982ff3e.js";import"./hooks.esm-af47eb61.js";import"./column.esm-5f7441ea.js";import"./ripple.esm-5f51d64d.js";import"./inputtext.esm-05b5c608.js";import"./dropdown.esm-222d988d.js";import"./overlayservice.esm-ac6bc474.js";import"./csstransition.esm-d4c9f030.js";import"./radiobutton.esm-f7f88083.js";import"./Add-448b68e7.js";import"./calendar.esm-b7bc9fde.js";import"./InputError-c3b0d5f0.js";import"./Edit-914fa3d7.js";import"./View-2ecfc29f.js";import"./index-4355d5a8.js";import"./index-419cf3fb.js";import"./EstablishmentDetails-0db6e33c.js";import"./EstablishmentContactDetails-6c722b4d.js";function ce(l){const[u,y]=t.useState([]),[p,f]=t.useState([]);t.useState("");const[s,o]=t.useState("default"),{data:h,setData:m,post:E,get:I,reset:g,processing:R,errors:z}=N(p);t.useState({global:{value:null,matchMode:F.CONTAINS}}),t.useEffect(()=>{y(l.employers)});const x=r=>{f(r),o("view")},S=r=>{m(r),o("edit")},n=()=>{o("default"),sessionStorage.clear()},[v,a]=t.useState(!1),D=r=>{a(!0),m("id",r.id)},c=()=>{a(!1)},b=()=>{E(route("delete-employer"),{onSuccess:()=>{g(),o("default"),a(!1)},onError:()=>{}})},w=i(A.Fragment,{children:[e(d,{label:"No",icon:"pi pi-times",outlined:!0,onClick:c}),e(d,{label:"Yes",icon:"pi pi-check",severity:"danger",onClick:b})]});return i(C,{auth:l.auth,errors:l.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"employers"}),children:[e(k,{title:"EMIS - Employers"}),i("div",{className:"mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:[s=="default"&&e(M,{employers:u,viewEmployer:x,editEmployer:S,confirmDeleteEmployer:D}),s=="view"&&e(j,{employer:p,back:n}),s=="edit"&&e(T,{employer:h,setData:m,back:n,setType:o}),e(B,{visible:v,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:w,onHide:c,children:i("div",{className:"confirmation-content",children:[e("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),i("span",{children:["Are you sure you want to delete this employer ",e("b",{}),"?"]})]})})]})]})}export{ce as default};
