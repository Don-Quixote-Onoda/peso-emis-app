import{r as n,j as p,F as c,a as r,n as f}from"./app-0bb05a73.js";import d from"./Header-d13f8572.js";import E from"./Footer-2f15313a.js";import g from"./Content-dff15a21.js";import u from"./NavigatorPage-cbe2f5b6.js";import x from"./EstablishmentDetails-f8d5b309.js";import I from"./PostingDetails-88606184.js";import T from"./EstablishmentContactDetails-e0d7b840.js";import h from"./RegisterEmployer-c9c7c038.js";import"./index-4355d5a8.js";import"./index-419cf3fb.js";import"./hooks.esm-d3e364e1.js";import"./inputtext.esm-730e8e94.js";import"./tooltip.esm-31176c50.js";import"./radiobutton.esm-6e10a346.js";import"./NavigatorButton-6c5d030c.js";import"./index.esm-d3edf24e.js";import"./toast.esm-e029f864.js";import"./csstransition.esm-6c3d9e4e.js";import"./ripple.esm-7dbbab03.js";import"./InputError-68cc916b.js";import"./checkbox.esm-0c256fe2.js";import"./InputLabel-d0a37234.js";import"./PrimaryButton-36ab1d03.js";import"./TextInput-02806378.js";function J(){const[t,o]=n.useState(0);n.useRef(null);const e=4,i=()=>{t<4&&o(t+1)},m=()=>{t>=1&&o(t-1)},a=["REGISTRATION","ESTABLISHMENT DETAILS","ESTABLISHMENT CONTACT DETAILS","AUTHORIZATION"];return p(c,{children:[r(f,{title:"EMIS - Employer Forms"}),r(d,{}),r(g,{children:r("div",{class:"d-flex applicant-container max-w-screen-lg mx-auto",children:p("div",{class:"basis-full applicant-content pr-1",children:[r("div",{class:"border-b-2 pl-3 flex gap-2 py-3 pb-4 flex-wrap navigation-top",children:a.map((s,l)=>r(u,{index:l,activeIndex:t,length:a.length,children:s}))}),t==0&&r(h,{activeIndex:t,numberOfPage:e,counterNext:i,counterPrevious:m,setActiveIndex:o}),t==1&&r(x,{activeIndex:t,numberOfPage:e,counterNext:i,counterPrevious:m,setActiveIndex:o}),t==2&&r(T,{activeIndex:t,numberOfPage:e,counterNext:i,counterPrevious:m,setActiveIndex:o}),t==3&&r(I,{activeIndex:t,numberOfPage:e,counterNext:i,counterPrevious:m,setActiveIndex:o})]})})}),r(E,{})]})}export{J as default};
