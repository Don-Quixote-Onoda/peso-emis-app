import{r,j as a,a as e,n as y}from"./app-0bb05a73.js";import{A as g}from"./AuthenticatedLayout-3234f75d.js";import{F as b}from"./tooltip.esm-31176c50.js";import{D as x,C as t}from"./column.esm-3452d3de.js";import{I as P}from"./inputtext.esm-730e8e94.js";import"./ApplicationLogo-4a89ffa2.js";import"./Dropdown-673c3a47.js";import"./transition-6cb7ce1a.js";import"./hooks.esm-d3e364e1.js";import"./ripple.esm-7dbbab03.js";import"./dropdown.esm-58f5b8ae.js";import"./overlayservice.esm-ea0b374b.js";import"./csstransition.esm-6c3d9e4e.js";import"./button.esm-67b3c8e3.js";function D(l){const[o,m]=r.useState([]),[c,d]=r.useState(""),[s,p]=r.useState({global:{value:null,matchMode:b.CONTAINS}});r.useEffect(()=>{m(l.employers),console.log(o)});const h=f=>{const i=f.target.value;let n={...s};n.global.value=i,p(n),d(i)},u=(()=>a("div",{className:"flex flex-wrap gap-2 justify-content-between align-items-center",children:[e("h4",{className:"m-0",children:"Customers"}),a("span",{className:"p-input-icon-left",children:[e("i",{className:"pi pi-search"}),e(P,{value:c,onChange:h,placeholder:"Keyword Search"})]})]}))();return a(g,{auth:l.auth,errors:l.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Employers"}),children:[e(y,{title:"Employers"}),e("div",{className:"card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:a(x,{value:o,paginator:!0,header:u,rows:10,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[10,25,50],dataKey:"id",filters:s,filterDisplay:"menu",emptyMessage:"No customers found.",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",children:[e(t,{selectionMode:"multiple",headerStyle:{width:"3rem"}}),e(t,{field:"establishment_name",header:"Establishment Accronym",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(t,{field:"employer_type",header:"Employer Type",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(t,{field:"line_of_business",header:"Line of Business",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(t,{field:"total_work_force",header:"Total Work Force",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}})]})})]})}export{D as default};