import{r as n,a as e,j as a,R as P}from"./app-e50456e4.js";import{F as N}from"./tooltip.esm-356fa9bd.js";import{D as k,C as r}from"./column.esm-5f7441ea.js";import{I as v}from"./inputtext.esm-05b5c608.js";import{B as l}from"./button.esm-21e8e238.js";import"./hooks.esm-af47eb61.js";import"./ripple.esm-5f51d64d.js";import"./dropdown.esm-222d988d.js";import"./overlayservice.esm-ac6bc474.js";import"./csstransition.esm-d4c9f030.js";function j({employers:m,confirmDeleteEmployer:c,viewEmployer:d,editEmployer:p}){const[u,h]=n.useState(""),[i,f]=n.useState({global:{value:null,matchMode:N.CONTAINS}}),y=t=>{const o=t.target.value;let s={...i};s.global.value=o,f(s),h(o)},g=()=>a("div",{className:"flex flex-wrap gap-2 justify-content-between align-items-center",children:[e("h4",{className:"m-0",children:"Employers"}),a("span",{className:"p-input-icon-left",children:[e("i",{className:"pi pi-search"}),e(v,{value:u,onChange:y,placeholder:"Keyword Search"})]})]}),b=t=>a(P.Fragment,{children:[e(l,{icon:"pi pi-eye",rounded:!0,outlined:!0,className:"mr-2",onClick:()=>d(t)}),e(l,{icon:"pi pi-pencil",rounded:!0,outlined:!0,className:"mr-2",onClick:()=>p(t)}),e(l,{icon:"pi pi-trash",rounded:!0,outlined:!0,severity:"danger",onClick:()=>c(t)})]}),x=g();return e("div",{className:"card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:a(k,{value:m,paginator:!0,header:x,rows:10,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[10,25,50],dataKey:"id",filters:i,filterDisplay:"menu",emptyMessage:"No customers found.",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",children:[e(r,{field:"establishment_name",header:"Establishment Accronym",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(r,{field:"employer_type",header:"Employer Type",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(r,{field:"line_of_business",header:"Line of Business",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(r,{field:"total_work_force",header:"Total Work Force",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(r,{body:b,exportable:!1,style:{minWidth:"12rem",display:"flex",gap:"0.5rem"}})]})})}export{j as default};
