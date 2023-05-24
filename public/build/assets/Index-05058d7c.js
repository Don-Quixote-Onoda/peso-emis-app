import{r as o,_ as Y,j as t,R as N,a as e,F as k,n as O}from"./app-f4074e42.js";import{A as V}from"./AuthenticatedLayout-8be89e5e.js";import{F as _}from"./tooltip.esm-78474424.js";import F from"./Table-a5053c79.js";import C from"./View-b5307189.js";import M from"./Edit-7b31f7d5.js";import{D as f}from"./dialog.esm-74d7ecba.js";import{B as p}from"./button.esm-f5b75854.js";import"./lodash-f9852f1c.js";import"./ApplicationLogo-a854fab7.js";import"./Dropdown-3458d7e3.js";import"./transition-8ea57daf.js";import"./hooks.esm-652fc78d.js";import"./column.esm-f87aeff8.js";import"./ripple.esm-2b1ddcca.js";import"./inputtext.esm-48094ba5.js";import"./dropdown.esm-0a2db01b.js";import"./overlayservice.esm-5f19d3c9.js";import"./csstransition.esm-969bb85a.js";import"./calendar.esm-62721a4d.js";import"./radiobutton.esm-35cde0a8.js";import"./checkbox.esm-7d09a25b.js";import"./index-4355d5a8.js";import"./index-419cf3fb.js";import"./PersonalInformation-cbaf8509.js";import"./InputTextWrapper-f6c33450.js";import"./Authorization-fbc3ccb4.js";import"./JobPreference-51058f5d.js";import"./Language-ea1adb67.js";import"./OtherSkills-85700e56.js";import"./Vocational-722c91da.js";import"./WorkExperience-81325759.js";import"./Education-c907bee5.js";function be(i){const[g,E]=o.useState([]),[r,H]=o.useState([]);o.useState("");const[a,s]=o.useState("default"),{data:m,setData:n,post:A,get:q,reset:x,processing:G,errors:T}=Y(r);o.useState({global:{value:null,matchMode:_.CONTAINS}}),o.useEffect(()=>{E(i.applicants),console.log(i.applicants),console.log("props"),console.log(i),console.log("props")});const v=l=>{H(l),s("view")},y=l=>{n(l),s("edit")},c=()=>{s("default"),sessionStorage.clear()},[D,d]=o.useState(!1),[j,u]=o.useState(!1),z=()=>{console.log(m),A(route("hire-applicant"),{forceFormData:!0,onSuccess:()=>{console.log("success"),x(),u(!1),i.setDashBoardType("default")},onError:()=>{console.log(T)}})},B=l=>{n({id:l.id}),u(!0)},w=l=>{d(!0),n({id:l.id})},h=()=>{d(!1)},I=()=>{A(route("delete-applicant"),{forceFormData:!0,onSuccess:()=>{x(),s("default"),console.log(a),d(!1)},onError:()=>{}})},b=t(N.Fragment,{children:[e(p,{label:"No",icon:"pi pi-times",outlined:!0,onClick:h}),e(p,{label:"Yes",icon:"pi pi-check",severity:"danger",onClick:I})]}),S=()=>{u(!1)},R=t(N.Fragment,{children:[e(p,{label:"No",icon:"pi pi-times",outlined:!0,onClick:S}),e(p,{label:"Yes",icon:"pi pi-check",severity:"danger",onClick:z})]});return o.useEffect(()=>{console.log(i)}),t(k,{children:[i.isMatches==!1&&t(V,{auth:i.auth,errors:i.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Applicants"}),children:[e(O,{title:"EMIS - Applicants"}),t("div",{className:" mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:[a=="default"&&e(F,{applicants:g,confirmDeleteApplicant:w,viewApplicant:v,editApplicant:y,isMatches:i.isMatches}),a=="view"&&e(C,{applicant:r,back:c}),a=="edit"&&e(M,{applicant:r,data:m,setData:n,back:c})]}),e(f,{visible:D,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:b,onHide:h,children:t("div",{className:"confirmation-content",children:[e("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),t("span",{children:["Are you sure you want to delete this applicant? ",e("b",{}),"?"]})]})})]}),i.isMatches==!0&&t(k,{children:[a=="default"&&e(F,{applicants:g,confirmDeleteApplicant:w,viewApplicant:v,editApplicant:y,handleHiredApplicantData:B}),a=="view"&&e(C,{applicant:r,back:c}),a=="edit"&&e(M,{applicant:r,data:m,setData:n,back:c}),e(f,{visible:D,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:b,onHide:h,children:t("div",{className:"confirmation-content",children:[e("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),t("span",{children:["Are you sure you want to delete this applicant? ",e("b",{}),"?"]})]})}),e(f,{visible:j,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:R,onHide:S,children:t("div",{className:"confirmation-content",children:[e("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),e("span",{children:"Are you sure you want to hire this applicant?"})]})})]})]})}export{be as default};