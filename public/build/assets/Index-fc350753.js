import{r,j as a,a as t,n as i}from"./app-6c5c40eb.js";import s from"./EstablishmentContactDetails-531e60c9.js";import l from"./EstablishmentDetails-b14cdddd.js";import{A as p}from"./AuthenticatedLayout-d93447bc.js";import"./inputtext.esm-dccf838e.js";import"./tooltip.esm-aa814582.js";import"./hooks.esm-a69b8e5c.js";import"./radiobutton.esm-77e5a923.js";import"./button.esm-9c34fa01.js";import"./ripple.esm-403a413e.js";import"./index-419cf3fb.js";import"./index-4355d5a8.js";import"./ApplicationLogo-6afe5874.js";import"./Dropdown-23df0daf.js";import"./transition-94bd252a.js";function v(m){const[e,o]=r.useState([]);return r.useEffect(()=>{o(m.employers[0]),console.log(e.employer_establishment_contact_detail)}),a(p,{auth:m.auth,errors:m.errors,header:t("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Employer Settings"}),children:[t(i,{title:"EMIS - Employer Settings"}),t("div",{className:"card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:e&&t(l,{employer:e})}),t("div",{className:"card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 mb-5",children:e.employer_establishment_contact_detail&&t(s,{employer:e.employer_establishment_contact_detail})})]})}export{v as default};