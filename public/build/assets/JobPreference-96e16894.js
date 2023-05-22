import{_ as b,r as v,a as e,j as r}from"./app-4ecd0c8f.js";import{I as t}from"./inputtext.esm-17943032.js";import{C as c}from"./checkbox.esm-a704ecff.js";import{u as s}from"./hooks.esm-ff015a60.js";import{C as u}from"./calendar.esm-53a57c7c.js";import"./tooltip.esm-39c229da.js";import"./button.esm-e80e863f.js";import"./ripple.esm-07ab1fcb.js";import"./overlayservice.esm-9d29e258.js";import"./csstransition.esm-f59a366a.js";function z({values:l,job_preference_location:k,personal_information:y}){const{data:i,setData:L,post:O,processing:S,errors:I}=b(l);v.useEffect(()=>{console.log("data"),console.log(i)},[]);const[d,n]=s(sessionStorage.getItem("checkedLocal"),"checkedLocal"),[o,p]=s(sessionStorage.getItem("checkedOverseas"),"checkedOverseas");s(sessionStorage.getItem("preferredOccupation1"),"preferredOccupation1"),s(sessionStorage.getItem("preferredOccupation2"),"preferredOccupation2"),s(sessionStorage.getItem("preferredOccupation3"),"preferredOccupation3"),s(sessionStorage.getItem("preferredOccupation4"),"preferredOccupation4"),s(sessionStorage.getItem("preferredWorkLocationLocal1"),"preferredWorkLocationLocal1"),s(sessionStorage.getItem("preferredWorkLocationLocal2"),"preferredWorkLocationLocal2"),s(sessionStorage.getItem("preferredWorkLocationLocal3"),"preferredWorkLocationLocal3");const[m,x]=s(sessionStorage.getItem("preferredWorkLocationOverseas1"),"preferredWorkLocationOverseas1");s(sessionStorage.getItem("preferredWorkLocationOverseas2"),"preferredWorkLocationOverseas2"),s(sessionStorage.getItem("preferredWorkLocationOverseas3"),"preferredWorkLocationOverseas3");const[_,h]=s(sessionStorage.getItem("expectedSalary"),"expectedSalary"),[w,g]=s(sessionStorage.getItem("passportNumber"),"passportNumber"),[W,f]=s(sessionStorage.getItem("expiryDate"),"expiryDate");return e("div",{class:"step-3",children:r("div",{class:"py-5 card border-0 rounded-0",children:[r("h4",{class:"card-header pl-0 border-0 fw-bold",children:["2. Job Preference"," "]}),e("div",{class:"card-body pl-0 pt-3",children:r("div",{class:"row",children:[r("div",{class:"col-md-12 mb-4",children:[e("h5",{class:"fw-bold text-dark-emphasis  mb-4 text-gray-500 !text-md",children:"Preferred Occupation"}),e("div",{class:"row",children:e("span",{class:"text-danger !text-xs preferred_occupation-error"})})]}),r("div",{class:"col-md-12 mb-4",children:[e("h5",{class:"fw-bold text-gray-500 text-dark-emphasis mb-4",children:"Preferred Work Location"}),r("div",{class:"row",children:[e("div",{class:"col-md-6 mb-4",children:r("div",{class:"row",children:[e("div",{class:"col-md-12",children:r("div",{class:"form-check pl-0 flex items-center gap-2",children:[e(c,{onChange:a=>n(a.checked),checked:d}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"exampleRadios1",children:"Local,specify cities/municipalities:"})]})}),e("span",{class:"text-danger !text-xs islocal_preferred_work_location-error"})]})}),e("div",{class:"col-md-6 mb-4",children:r("div",{class:"row",children:[e("div",{class:"col-md-12",children:r("div",{class:"form-check pl-0   flex items-center gap-2",children:[e(c,{onChange:a=>p(a.checked),checked:o}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"exampleRadios1",children:"Overseas,specify countries:"})]})}),r("div",{class:"col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(t,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",disabled:!o,value:m,onChange:a=>x(a.target.value)})]}),e("span",{class:"text-danger !text-xs isoverseas_preferred_work_location-error"})]})})]})]}),r("div",{class:"col-md-4 mb-4",children:[r("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Expected Salary (Range)"," "]}),e(t,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",onChange:a=>h(a.target.value)}),e("span",{class:"text-danger !text-xs expected_salary-error"})]}),r("div",{class:"col-md-4 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Passport No."}),e(t,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",onChange:a=>g(a.target.value)}),e("span",{class:"text-danger !text-xs passport_number-error"})]}),r("div",{class:"col-md-4 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Expiry date"}),e(u,{className:"form-control h-10 p-0 border-0",value:new Date,onChange:a=>f(a.value)}),e("span",{class:"text-danger !text-xs expiry_date-error"})]})]})})]})})}export{z as default};
