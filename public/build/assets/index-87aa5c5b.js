import{r as n,j as p,F as c,a as r,n as f}from"./app-e50456e4.js";import d from"./Header-4bac40d2.js";import E from"./Footer-5ba4b869.js";import g from"./Content-ff3202fa.js";import u from"./NavigatorPage-b3bb80fc.js";import x from"./EstablishmentDetails-0bdcd83b.js";import I from"./PostingDetails-4be6c946.js";import T from"./EstablishmentContactDetails-758f0600.js";import h from"./RegisterEmployer-d3133f0b.js";import"./index-4355d5a8.js";import"./index-419cf3fb.js";import"./hooks.esm-af47eb61.js";import"./inputtext.esm-05b5c608.js";import"./tooltip.esm-356fa9bd.js";import"./radiobutton.esm-f7f88083.js";import"./NavigatorButton-fa69bf12.js";import"./index.esm-197e2066.js";import"./toast.esm-0a7c936f.js";import"./csstransition.esm-d4c9f030.js";import"./ripple.esm-5f51d64d.js";import"./InputError-c3b0d5f0.js";import"./checkbox.esm-a0b05ba9.js";import"./InputLabel-cb7e18fa.js";import"./PrimaryButton-604c5933.js";import"./TextInput-14f27dda.js";function J(){const[t,o]=n.useState(0);n.useRef(null);const e=4,i=()=>{t<4&&o(t+1)},m=()=>{t>=1&&o(t-1)},a=["REGISTRATION","ESTABLISHMENT DETAILS","ESTABLISHMENT CONTACT DETAILS","AUTHORIZATION"];return p(c,{children:[r(f,{title:"EMIS - Employer Forms"}),r(d,{}),r(g,{children:r("div",{class:"d-flex applicant-container max-w-screen-lg mx-auto",children:p("div",{class:"basis-full applicant-content pr-1",children:[r("div",{class:"border-b-2 pl-3 flex gap-2 py-3 pb-4 flex-wrap navigation-top",children:a.map((s,l)=>r(u,{index:l,activeIndex:t,length:a.length,children:s}))}),t==0&&r(h,{activeIndex:t,numberOfPage:e,counterNext:i,counterPrevious:m,setActiveIndex:o}),t==1&&r(x,{activeIndex:t,numberOfPage:e,counterNext:i,counterPrevious:m,setActiveIndex:o}),t==2&&r(T,{activeIndex:t,numberOfPage:e,counterNext:i,counterPrevious:m,setActiveIndex:o}),t==3&&r(I,{activeIndex:t,numberOfPage:e,counterNext:i,counterPrevious:m,setActiveIndex:o})]})})}),r(E,{})]})}export{J as default};
