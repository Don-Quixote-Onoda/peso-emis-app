import{j as r,a as e}from"./app-8152747c.js";import{A as y}from"./AuthenticatedLayout-87c74c07.js";import{n as g}from"./@inertiajs-ef2582a9.js";import{r as a}from"./react-9a873dbd.js";import{F as b,D as x,C as t,I as P}from"./primereact-81f5fb97.js";import"./jspdf-7a201d71.js";import"./@babel-e66356b2.js";import"./fflate-8981c52c.js";import"./axios-aba6f0e0.js";import"./react-dom-3eb6303a.js";import"./call-bind-2ea32180.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./scheduler-04ce0582.js";import"./laravel-vite-plugin-d10ca5e8.js";/* empty css                   */import"./deepmerge-89e33937.js";import"./qs-da11641f.js";import"./side-channel-9a8f457d.js";import"./object-inspect-4012e9c9.js";import"./nprogress-e0bc7c5f.js";import"./lodash.isequal-c571d922.js";import"./react-transition-group-0105c8fc.js";import"./dom-helpers-9a525042.js";import"./ApplicationLogo-ba68fffa.js";import"./Dropdown-c2b3f592.js";import"./@headlessui-7974b500.js";function Y(o){const[l,n]=a.useState([]),[p,c]=a.useState(""),[i,d]=a.useState({global:{value:null,matchMode:b.CONTAINS}});a.useEffect(()=>{n(o.employers),console.log(l)});const h=f=>{const s=f.target.value;let m={...i};m.global.value=s,d(m),c(s)},u=(()=>r("div",{className:"flex flex-wrap gap-2 justify-content-between align-items-center",children:[e("h4",{className:"m-0",children:"Customers"}),r("span",{className:"p-input-icon-left",children:[e("i",{className:"pi pi-search"}),e(P,{value:p,onChange:h,placeholder:"Keyword Search"})]})]}))();return r(y,{auth:o.auth,errors:o.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Employers"}),children:[e(g,{title:"Employers"}),e("div",{className:"card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:r(x,{value:l,paginator:!0,header:u,rows:10,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[10,25,50],dataKey:"id",filters:i,filterDisplay:"menu",emptyMessage:"No customers found.",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",children:[e(t,{selectionMode:"multiple",headerStyle:{width:"3rem"}}),e(t,{field:"establishment_name",header:"Establishment Accronym",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(t,{field:"employer_type",header:"Employer Type",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(t,{field:"line_of_business",header:"Line of Business",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(t,{field:"total_work_force",header:"Total Work Force",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}})]})})]})}export{Y as default};