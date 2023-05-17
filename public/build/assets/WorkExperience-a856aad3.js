import{a as e,j as s}from"./app-e50456e4.js";import{I as a}from"./inputtext.esm-05b5c608.js";import{C as o}from"./calendar.esm-b7bc9fde.js";import{u as l}from"./hooks.esm-af47eb61.js";import{D as r}from"./dropdown.esm-222d988d.js";import"./tooltip.esm-356fa9bd.js";import"./button.esm-21e8e238.js";import"./ripple.esm-5f51d64d.js";import"./overlayservice.esm-ac6bc474.js";import"./csstransition.esm-d4c9f030.js";function he(ae){const[f,y]=l(sessionStorage.getItem("companyName1"),"companyName1"),[u,_]=l(sessionStorage.getItem("address1"),"address1"),[w,N]=l(sessionStorage.getItem("position1"),"position1"),[C,S]=l(sessionStorage.getItem("inclusive1"),"inclusive1"),[k,I]=l(sessionStorage.getItem("status1"),"status1"),[E,P]=l(sessionStorage.getItem("companyName2"),"companyName2"),[A,D]=l(sessionStorage.getItem("address2"),"address2"),[L,F]=l(sessionStorage.getItem("position2"),"position2"),[j,R]=l(sessionStorage.getItem("inclusive2"),"inclusive2"),[W,K]=l(sessionStorage.getItem("status2"),"status2"),[n,m]=l(sessionStorage.getItem("companyName3"),"companyName3"),[c,d]=l(sessionStorage.getItem("address3"),"address3"),[p,x]=l(sessionStorage.getItem("position3"),"position3"),[g,h]=l(sessionStorage.getItem("inclusive3"),"inclusive3"),[b,v]=l(sessionStorage.getItem("status3"),"status3"),[O,T]=l(sessionStorage.getItem("companyName4"),"companyName4"),[X,q]=l(sessionStorage.getItem("address4"),"address4"),[z,B]=l(sessionStorage.getItem("position4"),"position4"),[G,H]=l(sessionStorage.getItem("inclusive4"),"inclusive4"),[J,M]=l(sessionStorage.getItem("status4"),"status4"),[Q,U]=l(sessionStorage.getItem("companyName5"),"companyName5"),[V,Y]=l(sessionStorage.getItem("address5"),"address5"),[Z,$]=l(sessionStorage.getItem("position5"),"position5"),[ee,te]=l(sessionStorage.getItem("inclusive5"),"inclusive5"),[se,le]=l(sessionStorage.getItem("status5"),"status5"),i=[{name:"Permanent"},{name:"Contractual"},{name:"Part-time"},{name:"Probationary"}];return e("div",{class:"step-8",children:s("div",{class:"py-5 card border-0 rounded-0",children:[s("h4",{class:"card-header pl-0 border-0 fw-bold",children:["8. WORK EXPERIENCE (Limit to 10 year period, start with the most recent employment)"," "]}),s("div",{class:"card-body pl-0 pt-3",children:[s("div",{class:"row responsive-text-md-none",children:[e("div",{class:"col-md-4",children:e("h6",{class:"fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md",children:"Company Name"})}),e("div",{class:"col-md-8",children:s("div",{class:"row",children:[e("div",{class:"col-md-3",children:e("h6",{class:"fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md",children:"Address"})}),e("div",{class:"col-md-3",children:e("h6",{class:"fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md",children:"Position"})}),e("div",{class:"col-md-3",children:e("h6",{class:"fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md",children:"Inclusive Date"})}),e("div",{class:"col-md-3",children:e("h6",{class:"fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md",children:"Status"})})]})})]}),s("div",{class:"row mb-4",children:[s("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:f,placeholder:"Company Name",onChange:t=>y(t.target.value)})]}),e("div",{class:"col-md-8",children:s("div",{class:"row",children:[s("div",{class:"col-md-3  mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:u,placeholder:"Address",onChange:t=>_(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:w,placeholder:"Position",onChange:t=>N(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control calendar-text-xs h-10 p-0 border-0",value:C,placeholder:"Inclusive Date",onChange:t=>S(t.value),dateFormat:"dd/mm/yy"})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(r,{value:k,onChange:t=>I(t.value),options:i,optionLabel:"name",editable:!0,placeholder:"Select a Status",className:"form-select p-0 h-10 calendar-text-xs !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"})]})]})})]}),s("div",{class:"row mb-4",children:[s("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"2"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:E,placeholder:"Company Name",onChange:t=>P(t.target.value)})]}),e("div",{class:"col-md-8",children:s("div",{class:"row",children:[s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",placeholder:"Address",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:A,placeholder:"Address",onChange:t=>D(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:L,placeholder:"Position",onChange:t=>F(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control h-10 calendar-text-xs p-0 border-0",value:j,placeholder:"Inclusive Date",onChange:t=>R(t.value),dateFormat:"dd/mm/yy"})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(r,{value:W,onChange:t=>K(t.value),options:i,optionLabel:"name",editable:!0,placeholder:"Select a Status",className:"form-select p-0 calendar-text-xs h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"})]})]})})]}),s("div",{class:"row mb-4",children:[s("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"3"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:n,placeholder:"Company Name",onChange:t=>m(t.target.value)})]}),e("div",{class:"col-md-8",children:s("div",{class:"row",children:[s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-3.5 !text-xs !text-gray-500 border-light-emphasis",value:c,placeholder:"Address",onChange:t=>d(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-3.5 !text-xs !text-gray-500 border-light-emphasis",value:p,placeholder:"Position",onChange:t=>x(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control calendar-text-xs h-10 p-0 border-0",placeholder:"Inclusive Date",value:g,onChange:t=>h(t.value),dateFormat:"dd/mm/yy"})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(r,{value:b,onChange:t=>v(t.value),options:i,optionLabel:"name",editable:!0,placeholder:"Select a Status",className:"form-select p-0 calendar-text-xs h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"})]})]})})]}),s("div",{class:"row mb-4",children:[s("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"4"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:n,placeholder:"Company Name",onChange:t=>m(t.target.value)})]}),e("div",{class:"col-md-8",children:s("div",{class:"row",children:[s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-3.5 !text-xs !text-gray-500 border-light-emphasis",value:c,placeholder:"Address",onChange:t=>d(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-3.5 !text-xs !text-gray-500 border-light-emphasis",value:p,placeholder:"Position",onChange:t=>x(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{placeholder:"Inclusive Date",className:"form-control calendar-text-xs h-10 p-0 border-0",value:g,onChange:t=>h(t.value),dateFormat:"dd/mm/yy"})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(r,{value:b,onChange:t=>v(t.value),options:i,optionLabel:"name",editable:!0,placeholder:"Select a Status",className:"form-select calendar-text-xs p-0 h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"})]})]})})]}),s("div",{class:"row mb-4",children:[s("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"5"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:O,placeholder:"Company Name",onChange:t=>T(t.target.value)})]}),e("div",{class:"col-md-8",children:s("div",{class:"row",children:[s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-4.5 !text-xs !text-gray-500 border-light-emphasis",value:X,placeholder:"Address",onChange:t=>q(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-4.5 !text-xs !text-gray-500 border-light-emphasis",value:z,placeholder:"Position",onChange:t=>B(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control calendar-text-xs h-10 p-0 border-0",value:G,placeholder:"Inclusive Date",onChange:t=>H(t.value),dateFormat:"dd/mm/yy"})]}),s("div",{class:"col-md-3 mb-4 calendar-text-xs   d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(r,{value:J,onChange:t=>M(t.value),options:i,optionLabel:"name",editable:!0,placeholder:"Select a Status",className:"form-select h-10 calendar-text-xs p-0 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"})]})]})})]}),s("div",{class:"row mb-4",children:[s("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"6"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:Q,placeholder:"Company name",onChange:t=>U(t.target.value)})]}),e("div",{class:"col-md-8",children:s("div",{class:"row",children:[s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-5.5 !text-xs !text-gray-500 border-light-emphasis",value:V,placeholder:"Address",onChange:t=>Y(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-5.5 !text-xs !text-gray-500 border-light-emphasis",value:Z,placeholder:"Position",onChange:t=>$(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control calendar-text-xs h-10 p-0 border-0",value:ee,placeholder:"Inclusive Date",onChange:t=>te(t.value),dateFormat:"dd/mm/yy"})]}),s("div",{class:"col-md-3 mb-4 calendar-text-xs d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(r,{value:se,onChange:t=>le(t.value),options:i,optionLabel:"name",editable:!0,placeholder:"Select a Status",className:"form-select h-10 calendar-text-xs p-0 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"})]})]})})]})]})]})})}export{he as default};
