import{a as e,j as l}from"./app-8152747c.js";import{r as x}from"./react-9a873dbd.js";import"./Dropdown-c2b3f592.js";import{_ as N}from"./@inertiajs-ef2582a9.js";import{u as w,B as u,I as r,R as d,b}from"./primereact-81f5fb97.js";import{I as c}from"./InputError-a1a7a641.js";import"./jspdf-7a201d71.js";import"./@babel-e66356b2.js";import"./fflate-8981c52c.js";import"./axios-aba6f0e0.js";import"./react-dom-3eb6303a.js";import"./call-bind-2ea32180.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./scheduler-04ce0582.js";import"./laravel-vite-plugin-d10ca5e8.js";/* empty css                   */import"./deepmerge-89e33937.js";import"./qs-da11641f.js";import"./side-channel-9a8f457d.js";import"./object-inspect-4012e9c9.js";import"./nprogress-e0bc7c5f.js";import"./lodash.isequal-c571d922.js";import"./react-transition-group-0105c8fc.js";import"./dom-helpers-9a525042.js";import"./@headlessui-7974b500.js";function le({props:f,back:g,setType:y,viewJobPosting:C}){x.useEffect(()=>{console.log(f)},[]);const m=(a,h)=>{h.target.checked&&!t.disabilityAccepted.includes(a)?i("disabilityAccepted",t.disabilityAccepted+", "+a):i("disabilityAccepted",t.disabilityAccepted.replace(a,""))};w("","qualificationRequirementNatureOfWork");const[s,p]=x.useState(!1),o=(a,h)=>{h.target.checked&&!t.natureOfWork.includes(a)?i("natureOfWork",t.natureOfWork+", "+a):i("natureOfWork",t.natureOfWork.replace(a,""))},n=(a,h)=>{h.target.checked&&!t.qualificationRequirementNatureOfWork.includes(a)?i("qualificationRequirementNatureOfWork",t.qualificationRequirementNatureOfWork+", "+a):i("qualificationRequirementNatureOfWork",t.qualificationRequirementNatureOfWork.replace(a,""))},{data:t,setData:i,post:v,reset:k,processing:q,errors:_}=N({positionTitle:"",jobDescription:"",natureOfWork:"",placeOfWork:"",salary:"",vacancyCount:"",workExperience:"",religion:"",otherQualifications:"",license:"",certification:"",qualificationRequirementNatureOfWork:"",sex:"",civilStatus:"",educationalLevel:"",courseOrMajor:"",eligibility:"",languageOrDialectSpoken:"",preferredResidence:"",isAcceptDisability:"",disabilityAccepted:"",postingDate:"",validUntil:"",user_id:f.auth.user.id});return e("div",{className:"card my-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:l("form",{onSubmit:a=>{a.preventDefault(),p(!0),t.positionTitle&&t.jobDescription&&t.natureOfWork&&t.placeOfWork&&t.salary&&t.vacancyCount&&t.workExperience&&t.sex&&t.isAcceptDisability&&t.qualificationRequirementNatureOfWork&&t.religion&&t.civilStatus&&t.postingDate&&t.validUntil&&v("/api/job-posting",{forceFormData:!0,onSuccess:()=>{k(),p(!1),y("default")},onError:()=>{}})},children:[e("div",{class:"step-3",children:l("div",{class:"card rounded-0 border-0",children:[l("div",{class:" bg-light mb-2 font-bold mt-10 flex justify-between",children:[e("h4",{class:"card-title fw-bold",children:"III. VACANCY DETAILS"}),e(u,{label:"Back",icon:"pi pi-arrow-left",className:"p-button-help self-end",onClick:g})]}),l("div",{class:"card-body row",children:[l("div",{class:"col-md-6",children:[l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:["Position Title:",e("span",{className:"text-red-500",children:"*"})]}),e(r,{value:t.positionTitle,className:"form-control p-error !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name",onChange:a=>i("positionTitle",a.target.value)}),s&&(t.positionTitle==""||t.positionTitle==null)&&e(c,{message:"Position Title is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Job Description:"}),e("div",{class:"form-floating",children:e("textarea",{class:"form-control text-xs text-gray-500 vacancy-job-description",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"250px"},onChange:a=>i("jobDescription",a.target.value),children:t.jobDescription})}),s&&(t.jobDescription==""||t.jobDescription==null)&&e(c,{message:"Job Description is required!",className:"mt-2 text-xs"})]})]}),e("div",{class:"col-md-6",children:l("div",{class:"row",children:[l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Nature of Work:"}),l("div",{class:"row",children:[l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[e("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",value:"Permanent",id:"vacancy-nature-of-work",onChange:a=>o("Permanent",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Permanent"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",value:"Contractual",id:"vacancy-nature-of-work",onChange:a=>o("Contractual",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Contractual"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",value:"Project-based",id:"vacancy-nature-of-work",onChange:a=>o("Project-based",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Project-based"})]})]}),l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[e("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",value:"Internship / OJT",id:"vacancy-nature-of-work",onChange:a=>o("Internship / OJT",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Internship / OJT"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",value:"Part-time",id:"vacancy-nature-of-work",onChange:a=>o("Part-time",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Part-time"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",value:"Work from home / online-job",id:"vacancy-nature-of-work",onChange:a=>o("Work from home / online-job",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Work from home / online-job"})]})]}),s&&(t.natureOfWork==""||t.natureOfWork==null)&&e(c,{message:"Nature of Work is required!",className:"mt-2 text-xs"})]})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Place of Work:",e("span",{className:"text-red-500",children:"*"})]}),e(r,{value:t.placeOfWork,onChange:a=>i("placeOfWork",a.target.value),className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name"}),s&&(t.placeOfWork==""||t.placeOfWork==null)&&e(c,{message:"Place of Work is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:["Salary:",e("span",{className:"text-red-500",children:"*"})]}),e(r,{value:t.salary,onChange:a=>i("salary",a.target.value),className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name"}),s&&(t.salary==""||t.salary==null)&&e(c,{message:"Salary is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:["Vacancy Count:",e("span",{className:"text-red-500",children:"*"})]}),e(r,{value:t.vacancyCount,onChange:a=>i("vacancyCount",a.target.value),className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name"}),s&&(t.vacancyCount==""||t.vacancyCount==null)&&e(c,{message:"Vacancy Count is required!",className:"mt-2 text-xs"})]})]})}),e("div",{class:"col-md-12 mb-4"})]})]})}),e("div",{class:"step-4",children:l("div",{class:"card rounded-0 border-0",children:[e("div",{class:" bg-light mb-2 font-bold mt-10",children:e("h4",{class:"card-title fw-bold",children:"IV. QUALIFICATION REQUIREMENTS"})}),l("div",{class:"card-body row",children:[l("div",{class:"col-md-6",children:[l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs $ !text-gray-400 fw-bold text-light-emphasis",children:["Work Experience:",e("span",{className:"text-red-500",children:"*"})]}),e(r,{value:t.workExperience,onChange:a=>i("workExperience",a.target.value),className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name"}),s&&(t.workExperience==""||t.workExperience==null)&&e(c,{message:"Work Experience is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Religion:",e("span",{className:"text-red-500",children:"*"})]}),e(r,{value:t.religion,onChange:a=>i("religion",a.target.value),className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name"}),s&&(t.religion==""||t.religion==null)&&e(c,{message:"Religion is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Other Qualifications:"}),e("div",{class:"form-floating",children:e("textarea",{class:"form-control text-xs text-gray-500 other-qualification",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"197px"},onClick:a=>i("otherQualifications",a.target.value),children:t.otherQualifications})})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:["License:",e("span",{className:"text-red-500",children:"*"})]}),e(r,{value:t.license,onChange:a=>i("license",a.target.value),className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name"})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Certification:",e("span",{className:"text-red-500",children:"*"})]}),e(r,{value:t.certification,onChange:a=>i("certification",a.target.value),className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name"})]}),l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Accepts:"}),l("div",{class:"row",children:[l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[e("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",value:"PESO",id:"qnof",name:"qnof",onChange:a=>n("PESO",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"PESO"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",value:"SPES",id:"qnof",name:"qnof",onChange:a=>n("SPES",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"SPES"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",value:"GIP",id:"qnof",name:"qnof",onChange:a=>n("GIP",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"GIP"})]})]}),l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[e("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",value:"Job Start Philippines",id:"qnof",name:"qnof",onChange:a=>n("JobStart Philippines",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"JobStart Philippines"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",value:"K-12 AMP",id:"qnof",name:"qnof",onChange:a=>n("K-12 AMP",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"K-12 AMP"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",value:"Trabajo",id:"qnof",name:"qnof",onChange:a=>n("Trabajo",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Trabajo"})]})]})]}),s&&(t.qualificationRequirementNatureOfWork==""||t.qualificationRequirementNatureOfWork==null)&&e(c,{message:"Accepts is required!",className:"mt-2 text-xs"})]})]}),e("div",{class:"col-md-6",children:l("div",{class:"row",children:[l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Sex:"}),l("div",{class:"row",children:[e("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[e(d,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Male",checked:t.sex==="Male",onChange:a=>i("sex",a.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Male"})]})}),e("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[e(d,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Female",checked:t.sex==="Female",onChange:a=>i("sex",a.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Female"})]})}),e("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[e(d,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"No Preference",checked:t.sex==="No Preference",onChange:a=>i("sex",a.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"No Preference"})]})}),s&&(t.sex==""||t.sex==null)&&e(c,{message:"Sex is required!",className:"mt-2 text-xs"})]})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Civil Status:"," "]}),l("div",{class:"row",children:[e("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[e(d,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Single",checked:t.civilStatus==="Single",onChange:a=>i("civilStatus",a.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Single"})]})}),e("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[e(d,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Married",checked:t.civilStatus==="Married",onChange:a=>i("civilStatus",a.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Married"})]})}),e("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[e(d,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"No Preference",checked:t.civilStatus==="No Preference",onChange:a=>i("civilStatus",a.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"No Preference"})]})}),s&&(t.civilStatus==""||t.civilStatus==null)&&e(c,{message:"Civil Status is required!",className:"mt-2 text-xs"})]}),e("span",{class:"text-danger !text-xs qualification_civil_status-error"})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Educational Level:",e("span",{className:"text-red-500",children:"*"})]}),e(r,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name",value:t.educationalLevel,onChange:a=>i("educationalLevel",a.target.value)})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:["Course or Major:",e("span",{className:"text-red-500",children:"*"})]}),e(r,{className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name",value:t.courseOrMajor,onChange:a=>i("courseOrMajor",a.target.value)})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:["Eligibility:",e("span",{className:"text-red-500",children:"*"})]}),e(r,{value:t.eligibility,className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name",onChange:a=>i("eligibility",a.target.value)})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:["Language or Dialect Spoken:",e("span",{className:"text-red-500",children:"*"})]}),e(r,{value:t.languageOrDialectSpoken,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name",onChange:a=>i("languageOrDialectSpoken",a.target.value)}),e("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Preferred Residence:"}),e(r,{className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name",value:t.preferredResidence,onChange:a=>i("preferredResidence",a.target.value)})]}),l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Accepts Disability:"}),l("div",{class:"row",children:[e("div",{class:"col-md-4",children:l("div",{class:"form-check",children:[e("input",{class:"form-check-input qualification_accept_disability border-light-emphasis ",type:"radio",value:"Yes",checked:t.isAcceptDisability=="Yes",id:"qualification_accept_disability",name:"qualification_accept_disability",onChange:()=>i("isAcceptDisability","Yes")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Yes"})]})}),e("div",{class:"col-md-4",children:l("div",{class:"form-check",children:[e("input",{class:"form-check-input qualification_accept_disability border-light-emphasis ",type:"radio",value:"No",checked:t.isAcceptDisability=="No",id:"qualification_accept_disability",name:"qualification_accept_disability",onChange:()=>i("isAcceptDisability","No")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"No"})]})})]}),s&&(t.isAcceptDisability==""||t.isAcceptDisability==null)&&e(c,{message:"Posting Date is required!",className:"mt-2 text-xs"})]}),t.isAcceptDisability=="Yes"&&l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:['If "yes":'," "]}),l("div",{class:"row",children:[l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[e("input",{class:"form-check-input qualification_accept_disability_yes border-light-emphasis ",type:"checkbox",value:"Visual",id:"qualification_accept_disability_yes",name:"qualification_accept_disability_yes[]",onChange:a=>m("Visual",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Visual"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input qualification_accept_disability_yes border-light-emphasis ",type:"checkbox",value:"Physical",id:"qualification_accept_disability_yes",name:"qualification_accept_disability_yes[]",onChange:a=>m("Physical",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Physical"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input qualification_accept_disability_yes border-light-emphasis ",type:"checkbox",value:"Hearing",id:"qualification_accept_disability_yes",name:"qualification_accept_disability_yes[]",onChange:a=>m("Hearing",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Hearing"})]})]}),l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[e("input",{class:"form-check-input qualification_accept_disability_yes border-light-emphasis ",type:"checkbox",value:"Speech",id:"qualification_accept_disability_yes",name:"qualification_accept_disability_yes[]",onChange:a=>m("Speech",a)}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Speech"})]}),l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Others (please specify):"}),e("input",{type:"input",class:"form-control qualification_accept_disability_yes_others !py-2.5 !text-xs !text-gray-500 border-light-emphasis",id:"qualification_accept_disability_yes_others",name:"qualification_accept_disability_yes_others",onChange:a=>m("input",a)})]})]})]}),e("span",{class:"text-danger !text-xs qualification_accept_disability-type-error"})]})]})}),e("div",{class:"col-md-12 mb-4"})]})]})}),e("div",{class:" bg-light mb-2 font-bold mt-10",children:e("h4",{class:"card-title fw-bold",children:"V. POSTING DETAILS"})}),l("div",{class:"row",children:[e("div",{class:"col-md-6",children:l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Posting Date"}),e(b,{className:"form-control !border-0 ",value:new Date(t.postingDate),onChange:a=>i("postingDate",a.value)}),s&&(t.postingDate==""||t.postingDate==null)&&e(c,{message:"Posting Date is required!",className:"mt-2 text-xs"})]})}),e("div",{class:"col-md-6",children:l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Valid Until"}),e(b,{className:"form-control !border-0 ",value:new Date(t.validUntil),onChange:a=>i("validUntil",a.value)}),s&&(t.validUntil==""||t.validUntil==null)&&e(c,{message:"Valid Until is required!",className:"mt-2 text-xs"})]})})]}),e(u,{label:"Add",type:"submit",icon:"pi pi-plus",className:"p-button-help self-end"})]})})}export{le as default};
