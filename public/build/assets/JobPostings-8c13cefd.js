import{r as o,j as l,F as C,a as e,n as D,d as T,R as q}from"./app-7a2e4b19.js";import"./lodash-a1d73444.js";import J from"./Footer-bf4a7b48.js";import{D as E}from"./dialog.esm-ea711934.js";import{F as L}from"./tooltip.esm-b1a28351.js";import{D as R,C as n}from"./column.esm-fe0559a8.js";import{I as W}from"./inputtext.esm-6735eb99.js";import{B as H}from"./button.esm-c2ea98f8.js";import"./csstransition.esm-03e3b17e.js";import"./hooks.esm-7004e8f9.js";import"./ripple.esm-2968c089.js";import"./dropdown.esm-e4f875d6.js";import"./overlayservice.esm-f6f14872.js";function ee(c){const[r,f]=o.useState();o.useState(!1),o.useState(5);const[u,p]=o.useState([]);c.jobs.length;const[b,d]=o.useState(!1),[y,g]=o.useState(""),[m,N]=o.useState({global:{value:null,matchMode:L.CONTAINS}}),v=a=>{const i=a.target.value;let t={...m};t.global.value=i,N(t),g(i)},x=()=>e("div",{className:"flex flex-wrap gap-2 justify-content-between align-items-center",children:l("span",{className:"p-input-icon-left",children:[e("i",{className:"pi pi-search"}),e(W,{value:y,onChange:v,placeholder:"Search for Job Posting"})]})}),P=a=>e(q.Fragment,{children:e(H,{icon:"pi pi-eye",rounded:!0,outlined:!0,className:"mr-2",onClick:()=>w(a)})}),_=x();function h(a){const i=Math.floor((new Date-new Date(a))/1e3);let t=Math.floor(i/31536e3);return t>=1?t+" year"+(t===1?"":"s")+" ago":(t=Math.floor(i/2592e3),t>=1?t+" month"+(t===1?"":"s")+" ago":(t=Math.floor(i/86400),t>=1?t+" day"+(t===1?"":"s")+" ago":(t=Math.floor(i/3600),t>=1?t+" hour"+(t===1?"":"s")+" ago":(t=Math.floor(i/60),t>=1?t+" minute"+(t===1?"":"s")+" ago":Math.floor(i)+" second"+(i===1?"":"s")+" ago"))))}o.useState(()=>{p(c.jobs.reverse())});const w=a=>{f(a),console.log(a),d(!0)},[s,S]=o.useState(!1),k=()=>{S(!s)},M=a=>{const i=new Intl.NumberFormat("en-PH",{style:"currency",currency:"PHP"}).format(a.salary);return e("span",{children:i})},F=a=>{let i=a.employer.employer_qualification_requirement.filter(t=>a.id===t.id);return e("span",{children:i[0].other_qualification})},j=a=>e("span",{children:h(a.created_at)}),I=a=>{let i=a.employer.employer_qualification_requirement.filter(t=>a.id===t.id);return e("span",{children:i[0].work_of_experience})};return l(C,{children:[e(D,{title:"PESO-EMIS"}),e("header",{id:"header",className:"fixed-top d-flex align-items-center ",children:l("div",{className:"container d-flex align-items-center justify-content-between",children:[e("div",{className:"logo",children:e("h1",{children:e("a",{href:"/",children:"PESO EMIS"})})}),l("nav",{id:"navbar",className:`navbar ${s?"is-mobile":""}`,children:[l("ul",{className:"mobile-list",children:[e("li",{children:e("a",{className:"nav-link scrollto active",href:"#hero",children:"Home"})}),e("li",{children:e("a",{className:"nav-link scrollto",href:"#about",children:"About"})}),e("li",{children:e("a",{className:"nav-link scrollto",href:"#services",children:"Registration Forms"})}),e("li",{children:e("a",{className:"nav-link scrollto ",href:"#jobPosting",children:"Job Posts"})}),e("li",{children:e("a",{className:"nav-link scrollto",href:"#team",children:"Team"})}),e("li",{children:e("a",{className:"nav-link scrollto",href:"#contact",children:"Contact"})}),e(T,{href:route("login"),className:"nav-link",children:"Login"})]}),e("i",{className:`bi ${s?"bi-x-lg":"bi-list"} mobile-nav-toggle`,onClick:a=>k()})]})]})}),e("main",{id:"main",children:e("section",{id:"jobPosting",className:"jobPosting",children:l("div",{className:"container",children:[e("div",{className:"section-title flex justify-content-between","data-aos":"zoom-out",children:l("div",{children:[e("h2",{children:"Job Posts"}),e("p",{children:"Check out the latest Job Postings"})]})}),l("div",{className:"card  mx-auto py-6 px-4 sm:px-6 lg:px-8",children:[l(R,{value:u,paginator:!0,header:_,rows:10,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[10,25,50],dataKey:"id",filters:m,filterDisplay:"menu",emptyMessage:"No customers found.",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",children:[e(n,{field:"position_title",header:"Job Title",style:{minWidth:"10rem"}}),e(n,{field:"employer.establishment_name",header:"Establishment Name",style:{minWidth:"14rem"}}),e(n,{field:"salary",header:"Salary",body:M,style:{minWidth:"5rem"}}),e(n,{field:"total_work_force",body:F,header:"Qualifications",style:{minWidth:"14rem"}}),e(n,{field:"total_work_force",body:I,header:"Experience Needed",style:{minWidth:"14rem"}}),e(n,{field:"created_at",body:j,header:"Posted Time",style:{minWidth:"14rem"}}),e(n,{body:P,exportable:!1,style:{minWidth:"12rem",display:"flex",gap:"0.5rem"}})]}),e(E,{header:"Job Information",visible:b,style:{width:"50vw"},onHide:()=>d(!1),children:r&&e("div",{className:`job-post-description basis-2/4 ${r?"basis-2/4":""}`,children:l("div",{className:"desc-title",children:[e("h1",{className:"text-xl font-bold mb-3",children:r.position_title}),e("div",{className:"card mb-3",children:l("div",{class:"card-body",children:[e("h5",{class:"card-title",children:r.employer.establishment_accronym}),l("div",{class:"card-text",children:[e("p",{className:"text-sm py-1",children:r.position_title}),e("p",{className:"text-sm py-1",style:{textTransform:"capitalize"},children:r.place_of_work})]})]})}),l("a",{className:"cursor !my-3 inline-flex gap-2 items-center transition hover:bg-rose-400 my-5 bg-rose-500 p-3 rounded text-white",href:`mailto:${r.employer.employer_establishment_contact_detail.email_address}`,children:[e("i",{className:"pi pi-envelope "}),"Email your application"]}),e("p",{className:"my-2",children:h(r.created_at)}),l("p",{className:"my-2",children:["Salary: ",parseFloat(r.salary).toLocaleString("en-PH",{style:"currency",currency:"PHP"})," per month"]})]})})})]})]})})}),e(J,{})]})}export{ee as default};
