import{j as t,a as e}from"./app-0bb05a73.js";import le from"./NavigatorButton-0b223fa0.js";import{I as s}from"./inputtext.esm-730e8e94.js";import{C as l}from"./calendar.esm-bf0c27d6.js";import{u as r}from"./hooks.esm-d3e364e1.js";import"./tooltip.esm-31176c50.js";import"./button.esm-67b3c8e3.js";import"./ripple.esm-7dbbab03.js";import"./overlayservice.esm-ea0b374b.js";import"./csstransition.esm-6c3d9e4e.js";function xe({activeIndex:d,numberOfPage:i,setActiveIndex:o,counterPrevious:n}){const c=a=>{a.preventDefault(),o(d+1)},[m,h]=r(sessionStorage.getItem("schoolElementary"),"schoolElementary"),[u,g]=r(sessionStorage.getItem("courseElementary"),"courseElementary"),[y,x]=r(sessionStorage.getItem("yearGraduateElementary"),"yearGraduateElementary"),[b,p]=r(sessionStorage.getItem("undergraduateLevelElementary"),"undergraduateLevelElementary"),[v,f]=r(sessionStorage.getItem("awardsRecievedElementary"),"awardsRecievedElementary"),[S,w]=r(sessionStorage.getItem("yearLastAttendedElementary"),"yearLastAttendedElementary"),[E,G]=r(sessionStorage.getItem("schoolSecondary"),"schoolSecondary"),[C,L]=r(sessionStorage.getItem("courseSecondary"),"courseSecondary"),[I,T]=r(sessionStorage.getItem("yearGraduateSecondary"),"yearGraduateSecondary"),[N,A]=r(sessionStorage.getItem("undergraduateLevelSecondary"),"undergraduateLevelSecondary"),[R,_]=r(sessionStorage.getItem("awardsRecievedSecondary"),"awardsRecievedSecondary"),[Y,k]=r(sessionStorage.getItem("yearLastAttendedSecondary"),"yearLastAttendedSecondary"),[F,U]=r(sessionStorage.getItem("schoolTertiary"),"schoolTertiary"),[W,j]=r(sessionStorage.getItem("courseTertiary"),"courseTertiary"),[B,D]=r(sessionStorage.getItem("yearGraduateTertiary"),"yearGraduateTertiary"),[q,z]=r(sessionStorage.getItem("undergraduateLevelTertiary"),"undergraduateLevelTertiary"),[H,J]=r(sessionStorage.getItem("awardsRecievedTertiary"),"awardsRecievedTertiary"),[K,M]=r(sessionStorage.getItem("yearLastAttendedTertiary"),"yearLastAttendedTertiary"),[O,P]=r(sessionStorage.getItem("schoolGraduateStudies"),"schoolGraduateStudies"),[Q,V]=r(sessionStorage.getItem("courseGraduateStudies"),"courseGraduateStudies"),[X,Z]=r(sessionStorage.getItem("yearGraduateGraduateStudies"),"yearGraduateGraduateStudies"),[$,ee]=r(sessionStorage.getItem("undergraduateLevelGraduateStudies"),"undergraduateLevelGraduateStudies"),[ae,te]=r(sessionStorage.getItem("awardsRecievedGraduateStudies"),"awardsRecievedGraduateStudies"),[re,se]=r(sessionStorage.getItem("yearLastAttendedGraduateStudies"),"yearLastAttendedGraduateStudies");return t("form",{onSubmit:a=>c(a),children:[e("div",{class:"step-5",children:t("div",{class:"py-5 card border-0 rounded-0",children:[e("h4",{class:"card-header pl-0 border-0 fw-bold",children:"4. Educational Background"}),e("div",{class:"card-body pl-0 pt-3",children:t("div",{class:"row",children:[e("div",{class:"col-md-6",children:t("div",{class:"row mb-4",children:[e("h6",{class:"fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md",children:"Elementary"}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"School"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:m,onChange:a=>h(a.target.value)})]}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Course"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:u,onChange:a=>g(a.target.value)})]}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Year Graduated"}),e(l,{className:"form-control h-10 p-0 border-0",value:y,onChange:a=>x(a.value),dateFormat:"dd/mm/yy"})]}),t("div",{class:"row !pr-0",children:[t("h6",{class:"fw-bold text-dark-emphasis !text-xs text-gray-500 !pr-0 !text-md",children:["If undergraduate,"," "]}),t("div",{class:"col-md-6 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"What level?"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:b,onChange:a=>p(a.target.value)})]}),t("div",{class:"col-md-6 mb-2 !pr-0",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"year last attended"}),e(l,{className:"form-control h-10 p-0 border-0",value:S,onChange:a=>w(a.value),dateFormat:"dd/mm/yy"})]})]}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Awards recieved"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:v,onChange:a=>f(a.target.value)})]})]})}),e("div",{class:"col-md-6",children:t("div",{class:"row mb-4",children:[e("h6",{class:"fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md",children:"Secondary"}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"School"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:E,onChange:a=>G(a.target.value)})]}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Course"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:C,onChange:a=>L(a.target.value)})]}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Year Graduated"}),e(l,{className:"form-control h-10 p-0 border-0",value:I,onChange:a=>T(a.value),dateFormat:"dd/mm/yy"})]}),t("div",{class:"row !pr-0",children:[t("h6",{class:"fw-bold text-dark-emphasis !text-xs text-gray-500 !pr-0 !text-md",children:["If undergraduate,"," "]}),t("div",{class:"col-md-6 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"What level?"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:N,onChange:a=>A(a.target.value)})]}),t("div",{class:"col-md-6 mb-2 !pr-0",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"year last attended"}),e(l,{className:"form-control h-10 p-0 border-0",value:Y,onChange:a=>k(a.value),dateFormat:"dd/mm/yy"})]})]}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Awards recieved"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:R,onChange:a=>_(a.target.value)})]})]})}),e("div",{class:"col-md-6",children:t("div",{class:"row mb-4",children:[e("h6",{class:"fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md",children:"Tertiary"}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"School"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:F,onChange:a=>U(a.target.value)})]}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Course"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:W,onChange:a=>j(a.target.value)})]}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Year Graduated"}),e(l,{className:"form-control h-10 p-0 border-0",value:B,onChange:a=>D(a.value),dateFormat:"dd/mm/yy"})]}),t("div",{class:"row !pr-0",children:[t("h6",{class:"fw-bold text-dark-emphasis !text-xs text-gray-500 !pr-0 !text-md",children:["If undergraduate,"," "]}),t("div",{class:"col-md-6 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"What level?"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:q,onChange:a=>z(a.target.value)})]}),t("div",{class:"col-md-6 mb-2 !pr-0",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"year last attended"}),e(l,{className:"form-control h-10 p-0 border-0",value:K,onChange:a=>M(a.value),dateFormat:"dd/mm/yy"})]})]}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Awards recieved"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:H,onChange:a=>J(a.target.value)})]})]})}),e("div",{class:"col-md-6",children:t("div",{class:"row mb-4",children:[e("h6",{class:"fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md",children:"Graduate Studies"}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"School"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:O,onChange:a=>P(a.target.value)})]}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Course"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:Q,onChange:a=>V(a.target.value)})]}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Year Graduated"}),e(l,{className:"form-control h-10 p-0 border-0",value:X,onChange:a=>Z(a.value),dateFormat:"dd/mm/yy"})]}),t("div",{class:"row !pr-0",children:[t("h6",{class:"fw-bold text-dark-emphasis !text-xs text-gray-500 !pr-0 !text-md",children:["If undergraduate,"," "]}),t("div",{class:"col-md-6 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"What level?"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:$,onChange:a=>ee(a.target.value)})]}),t("div",{class:"col-md-6 mb-2 !pr-0",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"year last attended"}),e(l,{className:"form-control h-10 p-0 border-0",value:re,onChange:a=>se(a.value),dateFormat:"dd/mm/yy"})]})]}),t("div",{class:"col-md-12 mb-2",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Awards recieved"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:ae,onChange:a=>te(a.target.value)})]})]})})]})})]})}),e(le,{activeIndex:d,numberOfPage:i,setActiveIndex:o,counterPrevious:n})]})}export{xe as default};
