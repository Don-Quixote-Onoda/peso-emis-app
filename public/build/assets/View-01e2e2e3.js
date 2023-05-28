import{r as s,_ as ue,j as t,R as J,a as e,F as fe}from"./app-7a2e4b19.js";import{I as i}from"./inputtext.esm-6735eb99.js";import{R as o}from"./radiobutton.esm-0bb5b983.js";import{B as m}from"./button.esm-c2ea98f8.js";import{F as ge}from"./tooltip.esm-b1a28351.js";import{D as xe,C as h}from"./column.esm-fe0559a8.js";import ye from"./Add-3ab9b8ef.js";import ve from"./Edit-241c3c42.js";import _e from"./View-63b15e73.js";import{D as Ne}from"./dialog.esm-ea711934.js";import{u as c}from"./hooks.esm-7004e8f9.js";import{s as d}from"./index-4355d5a8.js";import"./ripple.esm-2968c089.js";import"./dropdown.esm-e4f875d6.js";import"./overlayservice.esm-f6f14872.js";import"./csstransition.esm-03e3b17e.js";import"./Dropdown-761e054e.js";import"./transition-54923189.js";import"./calendar.esm-19c13882.js";import"./InputError-f9785a3a.js";import"./index-419cf3fb.js";function Xe({employer:a,back:N}){s.useEffect(()=>{},[]);const[O,q]=s.useState(),{data:we,setData:V,post:W,put:ke,reset:j,processing:Se,errors:Pe}=ue(),[H,G]=s.useState(""),[w,K]=s.useState({global:{value:null,matchMode:ge.CONTAINS}}),[n,De]=s.useState({employer_vacancy_detail:{},employer_posting_detail:{},employer_qualification_requirement:{}});s.useEffect(()=>{q(a.employer_vacancy_detail.filter(l=>l.is_active==1))},[]);const z=l=>{const r=l.target.value;let p={...w};p.global.value=r,K(p),G(r)},Y=l=>parseFloat(l).toLocaleString("en-PH",{style:"currency",currency:"PHP"}),[k,S]=c(sessionStorage.getItem("regionAddr"),"regionAddr"),[P,D]=c(sessionStorage.getItem("provinceAddr"),"provinceAddr"),[E,A]=c("cityAddr","cityAddr"),[Q,C]=c(sessionStorage.getItem("barangayAddr"),"barangayAddr"),[U,X]=c(sessionStorage.getItem("houseNumber_Street_Village"),"houseNumber_Street_Village"),[f,Z]=s.useState([]),[g,$]=s.useState([]),[x,I]=c(sessionStorage.getItem("cityData"),"cityData"),[y,F]=c(sessionStorage.getItem("barangayData"),"barangayData"),[Ee,ee]=c(sessionStorage.getItem("regionCode"),"regionCode");c(sessionStorage.getItem("employedStatusType"),"employedStatusType"),s.useState(""),c(sessionStorage.getItem("unEmployedStatusTypes"),"unEmployedStatusTypes");const T=()=>{d.regions().then(l=>{Z(l)})},te=l=>{S(l.target.selectedOptions[0].text),d.provinces(l.target.value).then(r=>{setProvince(r),setCity([]),setBarangay([]),ee(l.target.value)})},le=l=>{D(l.target.selectedOptions[0].text),d.cities(l.target.value).then(r=>{setCity(r)})},ae=l=>{A(l.target.selectedOptions[0].text),d.barangays(l.target.value).then(r=>{setBarangay(r)})},re=l=>{C(l.target.selectedOptions[0].text)};s.useEffect(()=>{T(),S(a.employer_address.region),D(a.employer_address.province),A(a.employer_address.city_or_municipality),C(a.employer_address.barangay),X(a.employer_address.address),d.regions().then(l=>{l.map(r=>{r.region_name===k&&d.provinces(r.region_code).then(p=>{$(p),I([]),F([]),p.map(L=>{L.province_name===P&&d.cities(L.province_code).then(R=>{I(R),R.map(B=>{B.city_name===E&&d.barangays(B.city_code).then(be=>{F(be)})})})})})})})},[]);const[b,u]=s.useState("default"),se=l=>{a.employer_vacancy_detail.map(r=>{r.id===l.id&&(n.employer_vacancy_detail=r)}),a.employer_posting_detail.map(r=>{r.id===l.id&&(n.employer_posting_detail=r)}),a.employer_qualification_requirement.map(r=>{r.id===l.id&&(n.employer_qualification_requirement=r)}),u("view")},[ie,v]=s.useState(!1),oe=l=>{v(!0),V({id:l.id})},ce=l=>{a.employer_vacancy_detail.map(r=>{r.id===l.id&&(n.employer_vacancy_detail=r)}),a.employer_posting_detail.map(r=>{r.id===l.id&&(n.employer_posting_detail=r)}),a.employer_qualification_requirement.map(r=>{r.id===l.id&&(n.employer_qualification_requirement=r)}),u("edit")},ne=l=>t(J.Fragment,{children:[e(m,{icon:"pi pi-eye",rounded:!0,outlined:!0,className:"mr-2",onClick:()=>se(l)}),e(m,{icon:"pi pi-pencil",rounded:!0,outlined:!0,className:"mr-2",onClick:()=>ce(l)}),e(m,{icon:"pi pi-trash",rounded:!0,outlined:!0,severity:"danger",onClick:()=>oe(l)})]}),de=()=>{u("add")},me=(()=>t("div",{className:"flex flex-wrap gap-2 justify-content-between align-items-center",children:[e("h4",{className:"m-0",children:"Job Posting"}),t("div",{className:"flex gap-2",children:[e(m,{label:"New",icon:"pi pi-plus",className:"p-button-help self-end",onClick:de}),t("span",{className:"p-input-icon-left",children:[e("i",{className:"pi pi-search"}),e(i,{value:H,onChange:z,placeholder:"Keyword Search"})]})]})]}))(),_=()=>{u("default")},M=()=>{v(!1)},he=()=>{W(route("delete-employer-jobposting"),{forceFormData:!0,onSuccess:()=>{j(),N(),v(!1)},onError:()=>{}})},pe=t(J.Fragment,{children:[e(m,{label:"No",icon:"pi pi-times",outlined:!0,onClick:M}),e(m,{label:"Yes",icon:"pi pi-check",severity:"danger",onClick:he})]});return t(fe,{children:[t("div",{class:"step-1",children:[e("div",{class:"card rounded-0 border-0",children:e("div",{class:" bg-light mb-2 font-bold mt-10",children:t("div",{className:"flex justify-between",children:[e("h4",{class:"card-title fw-bold",children:"1. Personal information"}),e(m,{icon:"pi pi-arrow-left",className:"mr-2",label:"Back",onClick:()=>N()})]})})}),t("div",{class:"card-body row p-0",children:[t("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis",children:"Establishment Name:"}),e(i,{disabled:!0,value:a.establishment_name,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name"})]}),t("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:"Acronym/Abbreviation:"}),e(i,{disabled:!0,value:a.establishment_accronym,className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name"})]}),t("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:"Tax Identification Number"}),e(i,{disabled:!0,value:a.TIN_number,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name"})]}),t("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:"Line of Business/Industry:"}),e(i,{disabled:!0,value:a.line_of_business,className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name"})]}),t("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:["Employer type:",e("span",{className:"text-red-500",children:"*"})]}),t("div",{class:"row",children:[e("div",{class:"col-md-12",children:t("div",{className:"flex flex-nowrap items-center",children:[e(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",disabled:!0,value:"Government",checked:a.employer_type==="Government"}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Government"})]})}),e("div",{class:"col-md-12",children:t("div",{className:"flex flex-nowrap items-center",children:[e(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",disabled:!0,value:"Private",checked:a.employer_type==="Private"}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Private"})]})}),e("div",{class:"col-md-12",children:t("div",{className:"flex flex-nowrap items-center",children:[e(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",disabled:!0,value:"Recruitment & Placement Agency (Local)",checked:a.employer_type==="Recruitment & Placement Agency (Local)"}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Recruitment & Placement Agency (Local)"})]})}),e("div",{class:"col-md-12",children:t("div",{className:"flex flex-nowrap items-center",children:[e(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",disabled:!0,value:"Licensed Recruitment Agency (Overseas)",checked:a.employer_type==="Licensed Recruitment Agency (Overseas)"}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Licensed Recruitment Agency (Overseas)"})]})}),e("div",{class:"col-md-6",children:t("div",{className:"flex flex-nowrap items-center",children:[e(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",disabled:!0,value:"DO 174-17, Subcontractor",checked:a.employer_type==="DO 174-17, Subcontractor"}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"DO 174-17, Subcontractor"})]})})]})]}),t("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:["Total Work Force:",e("span",{className:"text-red-500",children:"*"})]}),t("div",{class:"row",children:[e("div",{class:"col-md-6",children:t("div",{className:"flex flex-nowrap items-center",children:[e(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",disabled:!0,value:"Micro (1-9)",checked:a.total_work_force==="Micro (1-9)"}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Micro (1-9)"})]})}),e("div",{class:"col-md-6",children:t("div",{className:"flex flex-nowrap items-center",children:[e(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",disabled:!0,value:"Small (10-99)",checked:a.total_work_force==="Small (10-99)"}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Small (10-99)"})]})}),e("div",{class:"col-md-6",children:t("div",{className:"flex flex-nowrap items-center",children:[e(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",disabled:!0,value:"Medium (100-199)",checked:a.total_work_force==="Medium (100-199)"}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Medium (100-199)"})]})}),e("div",{class:"col-md-6",children:t("div",{className:"flex flex-nowrap items-center",children:[e(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",disabled:!0,value:"Large (200 and up)",checked:a.total_work_force==="Large (200 and up)"}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Large (200 and up)"})]})})]})]}),e("div",{class:"col-md-12 mb-4",children:t("div",{class:"row",children:[t("div",{class:"col-md-6 mb-4 d-flex flex-column justify-content-between",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 text-light-emphasis",children:["Region",e("span",{className:"text-red-500",children:"*"})]}),t("select",{onChange:te,onSelect:T,className:" province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300","aria-label":"Default select example",disabled:!0,children:[e("option",{disabled:!0,children:"Select Region"}),f&&f.length>0&&f.map(l=>e("option",{disabled:!0,value:l.region_code,selected:k==l.region_name?!0:null,children:l.region_name},l.region_code))]})]}),t("div",{class:"col-md-6 mb-4 d-flex flex-column justify-content-between",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 text-light-emphasis",children:["Province",e("span",{className:"text-red-500",children:"*"})]}),t("select",{onChange:le,class:" province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300 form-select border-light-emphasis","aria-label":"Default select example",disabled:!0,children:[e("option",{disabled:!0,children:"Select Province"}),g&&g.length>0&&g.map(l=>e("option",{disabled:!0,value:l.province_code,selected:P==l.province_name?!0:null,children:l.province_name},l.province_code))]})]}),t("div",{class:"col-md-6 mb-4  d-flex flex-column justify-content-between",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 text-light-emphasis",children:["Municipality/City",e("span",{className:"text-red-500",children:"*"})]}),t("select",{onChange:ae,class:" city !text-xs !py-2.5 !rounded form-select !border-gray-300 !text-gray-500 form-select border-light-emphasis","aria-label":"Default select example",disabled:!0,children:[e("option",{disabled:!0,children:"Select City"}),x&&x.length>0&&x.map(l=>e("option",{disabled:!0,value:l.city_code,selected:E==l.city_name?!0:null,children:l.city_name},l.city_code))]})]}),t("div",{class:"col-md-6 mb-4  d-flex flex-column justify-content-between",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 text-light-emphasis",children:["Barangay",e("span",{className:"text-red-500",children:"*"})]}),t("select",{onChange:re,class:" barangay !text-xs !rounded form-select !border-gray-300 !py-2.5 !text-gray-500 form-select border-light-emphasis","aria-label":"Default select example",disabled:!0,children:[e("option",{disabled:!0,children:"Select Barangay"}),y&&y.length>0&&y.map(l=>e("option",{disabled:!0,value:l.brgy_code,selected:Q==l.brgy_name?!0:null,children:l.brgy_name},l.brgy_code))]})]}),t("div",{class:"col-md-12 mb-4  d-flex flex-column justify-content-between",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 text-light-emphasis",children:["House No./ Street Village*",e("span",{className:"text-red-500",children:"*"})]}),e(i,{className:"form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname",value:U,disabled:!0})]})]})})]})]}),e("div",{class:"step-2",children:t("div",{class:"card rounded-0 border-0",children:[e("div",{class:" bg-light mb-2 font-bold mt-10",children:e("h4",{class:"card-title fw-bold",children:"II. ESTABLISHMENT CONTACT DETAILS"})}),t("div",{class:"card-body row",children:[t("div",{class:"col-md-12",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:["Title:",e("span",{className:"text-red-500",children:"*"})]}),t("div",{class:"row",children:[e("div",{class:"col-md-1",children:t("div",{className:"flex flex-nowrap items-center",children:[e(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Mr.",disabled:!0,checked:a.employer_establishment_contact_detail.title==="Mr."}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Mr."})]})}),e("div",{class:"col-md-1",children:t("div",{className:"flex flex-nowrap items-center",children:[e(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Ms.",disabled:!0,checked:a.employer_establishment_contact_detail.title==="Ms."}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Ms."})]})}),e("div",{class:"col-md-1",children:t("div",{className:"flex flex-nowrap items-center",children:[e(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Mrs.",disabled:!0,checked:a.employer_establishment_contact_detail.title==="Mrs."}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Mrs."})]})})]})]}),t("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis",children:"Contact Person (Full Name):"}),e(i,{disabled:!0,value:a.employer_establishment_contact_detail.fullname,className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name"})]}),t("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis",children:"Position:"}),e(i,{disabled:!0,value:a.employer_establishment_contact_detail.position,className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name"})]}),t("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis",children:"Telephone Number:"}),e(i,{disabled:!0,value:a.employer_establishment_contact_detail.telephone_number,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name"})]}),t("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis",children:"Mobile Number:"}),e(i,{disabled:!0,value:a.employer_establishment_contact_detail.mobile_number,className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name"})]}),t("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis",children:"Fax Number:"}),e(i,{disabled:!0,value:a.employer_establishment_contact_detail.fax_number,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name"})]}),t("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis",children:"Email Adress:"}),e(i,{disabled:!0,value:a.employer_establishment_contact_detail.email_address,className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name"})]}),e("div",{class:"col-md-12 mb-4"})]})]})}),b=="default"&&t(xe,{value:O,paginator:!0,header:me,rows:10,className:"mt-5",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[10,25,50],dataKey:"id",filters:w,filterDisplay:"menu",emptyMessage:"No customers found.",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",children:[e(h,{field:"position_title",header:"Position Title",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(h,{field:"nature_of_work",header:"Nature of Work",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(h,{field:"place_of_work",header:"Place of Work",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(h,{field:"salary",header:"Salary",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"},body:Y}),e(h,{field:"vacancy_count",header:"Vacancy Count",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(h,{field:"job_description",header:"Job Description",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(h,{body:ne,exportable:!1,style:{minWidth:"10rem",display:"flex",gap:"0.5rem"}})]}),b=="add"&&e(ye,{backEdit:_}),b=="edit"&&e(ve,{backEdit:_,jobPostings:n}),b=="view"&&e(_e,{backEdit:_,jobPostings:n}),e(Ne,{visible:ie,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:pe,onHide:M,children:t("div",{className:"confirmation-content",children:[e("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),t("span",{children:["Are you sure you want to delete ",e("b",{}),"?"]})]})})]})}export{Xe as default};