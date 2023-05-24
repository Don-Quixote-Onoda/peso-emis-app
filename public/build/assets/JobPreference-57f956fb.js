import{r as H,j as t,a as e}from"./app-457c3987.js";import K from"./NavigatorButton-30aed1b7.js";import{I as s}from"./inputtext.esm-b791c4ca.js";import{C as y}from"./checkbox.esm-caa6cb0d.js";import{u as a}from"./hooks.esm-dfd2d112.js";import{C as M}from"./calendar.esm-d3797f72.js";import"./tooltip.esm-99ee236f.js";import"./button.esm-94cd04c6.js";import"./ripple.esm-f16d8e90.js";import"./overlayservice.esm-d89628ad.js";import"./csstransition.esm-774be7cd.js";function ae({activeIndex:b,numberOfPage:k,setActiveIndex:v,counterPrevious:L}){const O=r=>{r.preventDefault(),R(!0),(f!==null&&f!==""&&(o!==null&&o!==""||c!==null&&c!==""||l!==null&&l!==""||i!==null&&i!=="")&&(n!==null&&n!==""||d!==null&&d!==""||l!==null&&l!=="")||m!==null&&m!==""||p!==null&&p!==""||x!==null&&x!=="")&&v(b+1)},[g,w]=a(sessionStorage.getItem("checkedLocal"),"checkedLocal"),[h,S]=a(sessionStorage.getItem("checkedOverseas"),"checkedOverseas"),[o,W]=a(sessionStorage.getItem("preferredOccupation1"),"preferredOccupation1"),[c,_]=a(sessionStorage.getItem("preferredOccupation2"),"preferredOccupation2"),[l,C]=a(sessionStorage.getItem("preferredOccupation3"),"preferredOccupation3"),[i,E]=a(sessionStorage.getItem("preferredOccupation4"),"preferredOccupation4"),[n,N]=a(sessionStorage.getItem("preferredWorkLocationLocal1"),"preferredWorkLocationLocal1"),[d,I]=a(sessionStorage.getItem("preferredWorkLocationLocal2"),"preferredWorkLocationLocal2"),[P,D]=a(sessionStorage.getItem("preferredWorkLocationLocal3"),"preferredWorkLocationLocal3"),[m,j]=a(sessionStorage.getItem("preferredWorkLocationOverseas1"),"preferredWorkLocationOverseas1"),[p,q]=a(sessionStorage.getItem("preferredWorkLocationOverseas2"),"preferredWorkLocationOverseas2"),[u,R]=H.useState(!1),[x,J]=a(sessionStorage.getItem("preferredWorkLocationOverseas3"),"preferredWorkLocationOverseas3"),[f,B]=a(sessionStorage.getItem("expectedSalary"),"expectedSalary"),[F,T]=a(sessionStorage.getItem("passportNumber"),"passportNumber"),[z,G]=a(sessionStorage.getItem("expiryDate"),"expiryDate");return t("form",{onSubmit:r=>O(r),children:[e("div",{class:"step-3",children:t("div",{class:"py-5 card border-0 rounded-0",children:[t("h4",{class:"card-header pl-0 border-0 fw-bold",children:["2. Job Preference"," "]}),e("div",{class:"card-body pl-0 pt-3",children:t("div",{class:"row",children:[t("div",{class:"col-md-12 mb-4",children:[e("h5",{class:"fw-bold text-dark-emphasis  mb-4 text-gray-500 !text-md",children:"Preferred Occupation"}),t("div",{class:"row",children:[t("div",{class:"col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:o,onChange:r=>W(r.target.value)})]}),t("div",{class:"col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"2"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:c,onChange:r=>_(r.target.value)})]}),t("div",{class:"col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"3"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:l,onChange:r=>C(r.target.value)})]}),t("div",{class:"col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label  !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"4"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:i,onChange:r=>E(r.target.value)})]}),e("span",{class:"text-danger !text-xs preferred_occupation-error"})]}),u&&(o===null||o==="")&&(c===null||c==="")&&(l===null||l==="")&&(i===null||i==="")&&e("span",{class:"text-danger !text-xs pi_firstname-error",children:"Preferred Occupation is required!"})]}),t("div",{class:"col-md-12 mb-4",children:[e("h5",{class:"fw-bold text-gray-500 text-dark-emphasis mb-4",children:"Preferred Work Location"}),t("div",{class:"row",children:[e("div",{class:"col-md-6 mb-4",children:t("div",{class:"row",children:[e("div",{class:"col-md-12",children:t("div",{class:"form-check pl-0 flex items-center gap-2",children:[e(y,{onChange:r=>w(r.checked),checked:g}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"exampleRadios1",children:"Local,specify cities/municipalities:"})]})}),t("div",{class:"col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",disabled:!g,value:n,onChange:r=>N(r.target.value)})]}),t("div",{class:"col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"2"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",disabled:!g,value:d,onChange:r=>I(r.target.value)})]}),t("div",{class:"col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"3"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",disabled:!g,value:P,onChange:r=>D(r.target.value)})]}),e("span",{class:"text-danger !text-xs islocal_preferred_work_location-error"})]})}),e("div",{class:"col-md-6 mb-4",children:t("div",{class:"row",children:[e("div",{class:"col-md-12",children:t("div",{class:"form-check pl-0   flex items-center gap-2",children:[e(y,{onChange:r=>S(r.checked),checked:h}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"exampleRadios1",children:"Overseas,specify countries:"})]})}),t("div",{class:"col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",disabled:!h,value:m,onChange:r=>j(r.target.value)})]}),t("div",{class:"col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"2"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",disabled:!h,value:p,onChange:r=>q(r.target.value)})]}),t("div",{class:"col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"3"}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",disabled:!h,value:x,onChange:r=>J(r.target.value)})]}),e("span",{class:"text-danger !text-xs isoverseas_preferred_work_location-error"})]})})]}),u&&(n===null||n==="")&&(d===null||d==="")&&(l===null||l==="")&&(m===null||m==="")&&(p===null||p==="")&&(x===null||x==="")&&e("span",{class:"text-danger !text-xs pi_firstname-error",children:"Preferred Work Location is required!"})]}),t("div",{class:"col-md-4 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Expected Salary (Range)"," "]}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:f,onChange:r=>B(r.target.value)}),u&&(f===null||f==="")&&e("span",{class:"text-danger !text-xs pi_firstname-error",children:"Expected Salary is required!"})]}),t("div",{class:"col-md-4 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Passport No."}),e(s,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:F,onChange:r=>T(r.target.value)}),e("span",{class:"text-danger !text-xs passport_number-error"})]}),t("div",{class:"col-md-4 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Expiry date"}),e(M,{className:"form-control h-10 p-0 border-0",value:z,onChange:r=>G(r.value),dateFormat:"dd/mm/yy"}),e("span",{class:"text-danger !text-xs expiry_date-error"})]})]})})]})}),e(K,{activeIndex:b,numberOfPage:k,setActiveIndex:v,counterPrevious:L})]})}export{ae as default};
