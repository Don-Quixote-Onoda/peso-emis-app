import{r as p,j as a,F as l,a as r,n as f}from"./app-457c3987.js";import d from"./Header-a45405b2.js";import u from"./Footer-066ed3be.js";import g from"./Content-7231ce85.js";import x from"./PersonalInformation-c8a46975.js";import h from"./Authorization-d7f49799.js";import v from"./Education-4bfc5bfe.js";import E from"./JobPreference-57f956fb.js";import I from"./Language-704353ff.js";import A from"./OtherSkills-69f05009.js";import P from"./Vocational-aecd962c.js";import b from"./WorkExperience-ab40b6b7.js";import O from"./NavigatorPage-02184607.js";import"./NavigatorButton-30aed1b7.js";import"./inputtext.esm-b791c4ca.js";import"./tooltip.esm-99ee236f.js";import"./hooks.esm-dfd2d112.js";import"./calendar.esm-d3797f72.js";import"./button.esm-94cd04c6.js";import"./ripple.esm-f16d8e90.js";import"./overlayservice.esm-d89628ad.js";import"./csstransition.esm-774be7cd.js";import"./radiobutton.esm-ebdb3ab4.js";import"./dropdown.esm-2421b17a.js";import"./InputTextWrapper-16c31274.js";import"./index-4355d5a8.js";import"./index-419cf3fb.js";import"./checkbox.esm-caa6cb0d.js";function $(){const[o,t]=p.useState(0);p.useRef(null);const i=8,e=()=>{o<7&&t(o+1),console.log(o)},n=()=>{o>=1&&t(o-1)},m=["personal info","Job Preference","LANGUAGE","education","VOCATIONAL","work EXPERIENCE","OTHER SKILLS","AUTHORIZATION"];return a(l,{children:[r(f,{title:"EMIS - Applicant Forms"}),r(d,{}),r(g,{children:r("div",{class:"d-flex applicant-container",children:a("div",{class:"basis-full applicant-content pr-1",children:[r("div",{class:"border-b-2 pl-3 flex gap-2 py-3 pb-4 flex-wrap navigation-top",children:m.map((c,s)=>r(O,{index:s,activeIndex:o,length:m.length,children:c}))}),a("div",{class:"px-3",children:[o==0&&r(x,{activeIndex:o,numberOfPage:i,counterNext:e,counterPrevious:n,setActiveIndex:t}),o==1&&r(E,{activeIndex:o,numberOfPage:i,counterNext:e,counterPrevious:n,setActiveIndex:t}),o==2&&r(I,{activeIndex:o,numberOfPage:i,counterNext:e,counterPrevious:n,setActiveIndex:t}),o==3&&r(v,{activeIndex:o,numberOfPage:i,counterNext:e,counterPrevious:n,setActiveIndex:t}),o==4&&r(P,{activeIndex:o,numberOfPage:i,counterNext:e,counterPrevious:n,setActiveIndex:t}),o==5&&r(b,{activeIndex:o,numberOfPage:i,counterNext:e,counterPrevious:n,setActiveIndex:t}),o==6&&r(A,{activeIndex:o,numberOfPage:i,counterNext:e,counterPrevious:n,setActiveIndex:t}),o==7&&r(h,{activeIndex:o,numberOfPage:i,counterNext:e,counterPrevious:n,setActiveIndex:t})]})]})})}),r(u,{})]})}export{$ as default};
