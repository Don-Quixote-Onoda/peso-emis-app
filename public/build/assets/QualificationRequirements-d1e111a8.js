import{r as g,j as l,a,F as m}from"./app-0bb05a73.js";import{u as s,c as t}from"./hooks.esm-d3e364e1.js";import{I as h}from"./inputtext.esm-730e8e94.js";import{R as p}from"./radiobutton.esm-6e10a346.js";import J from"./NavigatorButton-6c5d030c.js";import{u as K,C as d}from"./index.esm-d3edf24e.js";import{T as B}from"./toast.esm-e029f864.js";import"./tooltip.esm-31176c50.js";import"./csstransition.esm-6c3d9e4e.js";import"./ripple.esm-7dbbab03.js";function ve({activeIndex:v,numberOfPage:S,setActiveIndex:y,counterPrevious:C}){const[w,k]=s(sessionStorage.getItem("isAcceptDisability"),"isAcceptDisability"),[U,E]=s(sessionStorage.getItem("workExperience"),"workExperience"),[Y,I]=s(sessionStorage.getItem("sex"),"sex"),[z,D]=s(sessionStorage.getItem("civilStatus"),"civilStatus"),[X,R]=s(sessionStorage.getItem("religion"),"religion"),[Z,P]=s(sessionStorage.getItem("educationalLevel"),"educationalLevel");s(sessionStorage.getItem("otherQualifications"),"otherQualifications");const[ee,O]=s(sessionStorage.getItem("license"),"license"),[ae,M]=s(sessionStorage.getItem("certification"),"certification"),[le,$]=s(sessionStorage.getItem("courseOrMajor"),"courseOrMajor"),[ie,A]=s(sessionStorage.getItem("eligibility"),"eligibility"),[te,L]=s(sessionStorage.getItem("languageOrDialectSpoken"),"languageOrDialectSpoken"),[re,F]=s(sessionStorage.getItem("preferredResidence"),"preferredResidence"),[f,q]=g.useState(""),[se,j]=s(sessionStorage.getItem("disabilitiesAccepted"),"disabilitiesAccepted"),[x,N]=g.useState(""),[ce,W]=s(sessionStorage.getItem("qualificationRequirementNatureOfWorks"),"qualificationRequirementNatureOfWorks"),_=g.useRef(null),T=()=>{_.current.show({severity:"success",summary:"Form Submitted",detail:G("value")})},Q={value:""},{control:c,formState:{errors:n},handleSubmit:V,getValues:G,reset:ne}=K({defaultValues:Q}),H=e=>{e.value&&T(),M(e.certification),D(e.civilStatus),$(e.courseOrMajor),P(e.educationalLevel),A(e.eligibility),L(e.languageOrDialectSpoken),O(e.license),F(e.preferredResidence),R(e.religion),I(e.sex),W(x),j(f),y(v+1),E(e.workExperience),console.log(e)},o=e=>n[e]?a("small",{className:"p-error",children:n[e].message}):a("small",{className:"p-error",children:" "}),u=(e,i)=>{i.target.checked&&!x.includes(e)?N(x+" "+e):N(x.replace(e,"")),console.log(x)},b=(e,i)=>{i.target.checked&&!f.includes(e)?q(f+" "+e):q(f.replace(e,"")),console.log(f)};return l("form",{onSubmit:V(H),children:[a(B,{ref:_}),a("div",{class:"step-4",children:l("div",{class:"card rounded-0 border-0",children:[a("div",{class:" bg-light mb-2 font-bold mt-10",children:a("h4",{class:"card-title fw-bold",children:"IV. QUALIFICATION REQUIREMENTS"})}),l("div",{class:"card-body row",children:[l("div",{class:"col-md-6",children:[a("div",{class:"col-md-12 mb-4",children:a(d,{name:"workExperience",control:c,rules:{required:"Work Experience is required."},render:({field:e,fieldState:i})=>l(m,{children:[l("label",{for:"inputEmail4",className:`form-label !text-xs ${t({"p-error":n.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Work Experience:",a("span",{className:"text-red-500",children:"*"})," "]}),a(h,{id:e.name,value:e.value,className:`form-control !text-xs !py-2.5 ${t({"p-invalid":i.error})} !text-gray-500 border-light-emphasis establishment-name`,onChange:r=>e.onChange(r.target.value)}),o(e.name)]})})}),l("div",{class:"col-md-12 mb-4",children:[a(d,{name:"religion",control:c,rules:{required:"Religion is required."},render:({field:e,fieldState:i})=>l(m,{children:[l("label",{for:"inputEmail4",className:`form-label !text-xs ${t({"p-error":n.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Religion:",a("span",{className:"text-red-500",children:"*"})," "]}),a(h,{id:e.name,value:e.value,className:`form-control !text-xs !py-2.5 ${t({"p-invalid":i.error})} !text-gray-500 border-light-emphasis establishment-name`,onChange:r=>e.onChange(r.target.value)}),o(e.name)]})}),a("span",{class:"text-danger !text-xs qualification-religion-error"})]}),l("div",{class:"col-md-12 mb-4",children:[a("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Other Qualifications:"}),a("div",{class:"form-floating",children:a("textarea",{class:"form-control other-qualification",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"197px"}})}),a("span",{class:"text-danger !text-xs other-qualification-error"})]}),l("div",{class:"col-md-12 mb-4",children:[a(d,{name:"license",control:c,rules:{required:"License is required."},render:({field:e,fieldState:i})=>l(m,{children:[l("label",{for:"inputEmail4",className:`form-label !text-xs ${t({"p-error":n.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","License:",a("span",{className:"text-red-500",children:"*"})," "]}),a(h,{id:e.name,value:e.value,className:`form-control !text-xs !py-2.5 ${t({"p-invalid":i.error})} !text-gray-500 border-light-emphasis establishment-name`,onChange:r=>e.onChange(r.target.value)}),o(e.name)]})}),a("span",{class:"text-danger !text-xs qualification-license-error"})]}),a("div",{class:"col-md-12 mb-4",children:a(d,{name:"certification",control:c,rules:{required:"Certification is required."},render:({field:e,fieldState:i})=>l(m,{children:[l("label",{for:"inputEmail4",className:`form-label !text-xs ${t({"p-error":n.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Certification:",a("span",{className:"text-red-500",children:"*"})," "]}),a(h,{id:e.name,value:e.value,className:`form-control !text-xs !py-2.5 ${t({"p-invalid":i.error})} !text-gray-500 border-light-emphasis establishment-name`,onChange:r=>e.onChange(r.target.value)}),o(e.name)]})})}),l("div",{class:"col-md-12 mb-4",children:[a("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Nature of Work:"}),l("div",{class:"row",children:[l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[a("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",value:"PESO",id:"qnof",name:"qnof",onChange:e=>u("PESO",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"PESO"})]}),l("div",{class:"form-check",children:[a("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",value:"SPES",id:"qnof",name:"qnof",onChange:e=>u("SPES",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"SPES"})]}),l("div",{class:"form-check",children:[a("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",value:"GIP",id:"qnof",name:"qnof",onChange:e=>u("GIP",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"GIP"})]})]}),l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[a("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",value:"Job Start Philippines",id:"qnof",name:"qnof",onChange:e=>u("JobStart Philippines",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"JobStart Philippines"})]}),l("div",{class:"form-check",children:[a("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",value:"K-12 AMP",id:"qnof",name:"qnof",onChange:e=>u("K-12 AMP",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"K-12 AMP"})]}),l("div",{class:"form-check",children:[a("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",value:"Trabajo",id:"qnof",name:"qnof",onChange:e=>u("Trabajo",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Trabajo"})]})]})]}),a("span",{class:"text-danger !text-xs qnof-error"})]})]}),a("div",{class:"col-md-6",children:l("div",{class:"row",children:[l("div",{class:"col-md-12 mb-4",children:[a("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Sex:"}),a(d,{name:"sex",control:c,rules:{required:"Sex is required."},render:({field:e})=>l(m,{children:[l("div",{class:"row",children:[a("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[a(p,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",...e,inputRef:e.ref,value:"Male",checked:e.value==="Male"}),a("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Male"})]})}),a("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[a(p,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",...e,inputRef:e.ref,value:"Female",checked:e.value==="Female"}),a("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Female"})]})}),a("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[a(p,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",...e,inputRef:e.ref,value:"No Preference",checked:e.value==="No Preference"}),a("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"No Preference"})]})})]}),o(e.name)]})})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Civil Status:"," "]}),a(d,{name:"civilStatus",control:c,rules:{required:"Civil Status is required."},render:({field:e})=>l(m,{children:[l("div",{class:"row",children:[a("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[a(p,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",...e,inputRef:e.ref,value:"Single",checked:e.value==="Single"}),a("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Single"})]})}),a("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[a(p,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",...e,inputRef:e.ref,value:"Married",checked:e.value==="Married"}),a("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Married"})]})}),a("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[a(p,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",...e,inputRef:e.ref,value:"No Preference",checked:e.value==="No Preference"}),a("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"No Preference"})]})})]}),o(e.name)]})}),a("span",{class:"text-danger !text-xs qualification_civil_status-error"})]}),a("div",{class:"col-md-12 mb-4",children:a(d,{name:"educationalLevel",control:c,rules:{required:"Educational Level is required."},render:({field:e,fieldState:i})=>l(m,{children:[l("label",{for:"inputEmail4",className:`form-label !text-xs ${t({"p-error":n.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Educational Level:",a("span",{className:"text-red-500",children:"*"})," "]}),a(h,{id:e.name,value:e.value,className:`form-control !text-xs !py-2.5 ${t({"p-invalid":i.error})} !text-gray-500 border-light-emphasis establishment-name`,onChange:r=>e.onChange(r.target.value)}),o(e.name)]})})}),l("div",{class:"col-md-12 mb-4",children:[a(d,{name:"courseOrMajor",control:c,rules:{required:"Course or Major is required."},render:({field:e,fieldState:i})=>l(m,{children:[l("label",{for:"inputEmail4",className:`form-label !text-xs ${t({"p-error":n.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Course or Major:",a("span",{className:"text-red-500",children:"*"})," "]}),a(h,{id:e.name,value:e.value,className:`form-control !text-xs !py-2.5 ${t({"p-invalid":i.error})} !text-gray-500 border-light-emphasis establishment-name`,onChange:r=>e.onChange(r.target.value)}),o(e.name)]})}),a("span",{class:"text-danger !text-xs qualification-course-error"})]}),l("div",{class:"col-md-12 mb-4",children:[a(d,{name:"eligibility",control:c,rules:{required:"Eligibility is required."},render:({field:e,fieldState:i})=>l(m,{children:[l("label",{for:"inputEmail4",className:`form-label !text-xs ${t({"p-error":n.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Eligibility:",a("span",{className:"text-red-500",children:"*"})," "]}),a(h,{id:e.name,value:e.value,className:`form-control !text-xs !py-2.5 ${t({"p-invalid":i.error})} !text-gray-500 border-light-emphasis establishment-name`,onChange:r=>e.onChange(r.target.value)}),o(e.name)]})}),a("span",{class:"text-danger !text-xs qualification-eligibility-error"})]}),l("div",{class:"col-md-12 mb-4",children:[a(d,{name:"languageOrDialectSpoken",control:c,rules:{required:"Language or Dialect Spoken is required."},render:({field:e,fieldState:i})=>l(m,{children:[l("label",{for:"inputEmail4",className:`form-label !text-xs ${t({"p-error":n.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Language or Dialect Spoken:",a("span",{className:"text-red-500",children:"*"})," "]}),a(h,{id:e.name,value:e.value,className:`form-control !text-xs !py-2.5 ${t({"p-invalid":i.error})} !text-gray-500 border-light-emphasis establishment-name`,onChange:r=>e.onChange(r.target.value)}),o(e.name)]})}),a("span",{class:"text-danger !text-xs qualification-languange-spoken-error"})]}),a("div",{class:"col-md-12 mb-4",children:a(d,{name:"preferredResidence",control:c,rules:{required:"Preferred Residence is required."},render:({field:e,fieldState:i})=>l(m,{children:[l("label",{for:"inputEmail4",className:`form-label !text-xs ${t({"p-error":n.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Preferred Residence:",a("span",{className:"text-red-500",children:"*"})," "]}),a(h,{id:e.name,value:e.value,className:`form-control !text-xs !py-2.5 ${t({"p-invalid":i.error})} !text-gray-500 border-light-emphasis establishment-name`,onChange:r=>e.onChange(r.target.value)}),o(e.name)]})})}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Accepts Disability:"," "]}),l("div",{class:"row",children:[a("div",{class:"col-md-4",children:l("div",{class:"form-check",children:[a("input",{class:"form-check-input qualification_accept_disability border-light-emphasis ",type:"radio",value:"Yes",id:"qualification_accept_disability",name:"qualification_accept_disability",onChange:()=>k(!0)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Yes"})]})}),a("div",{class:"col-md-4",children:l("div",{class:"form-check",children:[a("input",{class:"form-check-input qualification_accept_disability border-light-emphasis ",type:"radio",value:"No",id:"qualification_accept_disability",name:"qualification_accept_disability",onChange:()=>k(!1)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"No"})]})})]}),a("span",{class:"text-danger !text-xs qualification_accept_disability-error"})]}),w&&l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:['If "yes":'," "]}),l("div",{class:"row",children:[l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[a("input",{class:"form-check-input qualification_accept_disability_yes border-light-emphasis ",type:"checkbox",value:"Visual",id:"qualification_accept_disability_yes",name:"qualification_accept_disability_yes[]",onChange:e=>b("Visual",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Visual"})]}),l("div",{class:"form-check",children:[a("input",{class:"form-check-input qualification_accept_disability_yes border-light-emphasis ",type:"checkbox",value:"Physical",id:"qualification_accept_disability_yes",name:"qualification_accept_disability_yes[]",onChange:e=>b("Physical",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Physical"})]}),l("div",{class:"form-check",children:[a("input",{class:"form-check-input qualification_accept_disability_yes border-light-emphasis ",type:"checkbox",value:"Hearing",id:"qualification_accept_disability_yes",name:"qualification_accept_disability_yes[]",onChange:e=>b("Hearing",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Hearing"})]})]}),l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[a("input",{class:"form-check-input qualification_accept_disability_yes border-light-emphasis ",type:"checkbox",value:"Speech",id:"qualification_accept_disability_yes",name:"qualification_accept_disability_yes[]",onChange:e=>b("Speech",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Speech"})]}),l("div",{class:"col-md-12 mb-4",children:[a("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Others (please specify):"}),a("input",{type:"input",class:"form-control qualification_accept_disability_yes_others !py-2.5 !text-xs !text-gray-500 border-light-emphasis",id:"qualification_accept_disability_yes_others",name:"qualification_accept_disability_yes_others",onChange:e=>b("input",e)})]})]})]}),a("span",{class:"text-danger !text-xs qualification_accept_disability-type-error"})]})]})}),a("div",{class:"col-md-12 mb-4"})]})]})}),a(J,{activeIndex:v,numberOfPage:S,setActiveIndex:y,counterPrevious:C})]})}export{ve as default};