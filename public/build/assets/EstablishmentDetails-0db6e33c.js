import{_ as y,r as d,j as t,F as g,a as e}from"./app-e50456e4.js";import{I as c}from"./inputtext.esm-05b5c608.js";import{R as n}from"./radiobutton.esm-f7f88083.js";import{B as h}from"./button.esm-21e8e238.js";import"./index-419cf3fb.js";import{c as i}from"./hooks.esm-af47eb61.js";import"./tooltip.esm-356fa9bd.js";import"./ripple.esm-5f51d64d.js";function F({employer:m,back:p,setType:b}){const{data:l,setData:s,post:u,reset:f,processing:v,errors:x}=y({establishment_accronym:m.establishment_accronym,establishment_name:m.establishment_name,is_authorization_accepted:m.is_authorization_accepted,line_of_business:m.line_of_business,total_work_force:m.total_work_force,TIN_number:m.TIN_number,e_signature:m.e_signature,employer_type:m.employer_type,id:m.id});d.useEffect(()=>{console.log(l),console.log(m)},[]);const[r,o]=d.useState(!1),_=a=>{o(!0),l.establishment_accronym&&l.establishment_name&&l.is_authorization_accepted&&l.line_of_business&&l.total_work_force&&l.TIN_number&&l.e_signature&&l.employer_type&&u("/api/update-employer-establishment-details",{forceFormData:!0,onSuccess:()=>{console.log("success"),f(),o(!1),b("default")},onError:()=>{}})};return t(g,{children:[e("div",{class:"step-1",children:t("div",{class:"card rounded-0 border-0",children:[e("div",{class:" bg-light mb-2 font-bold mt-10",children:t("div",{className:"flex justify-between",children:[e("h4",{class:"card-title fw-bold",children:"I. ESTABLISHMENT DETAILS"}),e(h,{icon:"pi pi-arrow-left",className:"mr-2",label:"Back",onClick:()=>p()})]})}),t("div",{class:"card-body row p-0",children:[t("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:[" ","Establishment Name:",e("span",{className:"text-red-500",children:"*"})," "]}),e(c,{value:l.establishment_name,className:`form-control !text-xs !py-2.5 ${i({"p-invalid":r&&(l.establishment_name==""||l.establishment_name==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:a=>s("establishment_name",a.target.value)}),r&&(l.establishment_name==""||l.establishment_name==null)&&e(InputError,{message:"Establishment Name is required!",className:"mt-2 text-xs"})]}),t("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",className:`form-label !text-xs ${i({"p-error":r&&(l.establishment_accronym==""||l.establishment_accronym==null)})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Acronym/Abbreviation:",e("span",{className:"text-red-500",children:"*"})," "]}),e(c,{value:l.establishment_accronym,className:`form-control !text-xs !py-2.5 ${i({"p-invalid":r&&(l.establishment_accronym==""||l.establishment_accronym==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:a=>s("establishment_accronym",a.target.value)}),r&&(l.establishment_accronym==""||l.establishment_accronym==null)&&e(InputError,{message:"Establishment Abbreviation is required!",className:"mt-2 text-xs"})]}),t("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",className:`form-label !text-xs ${i({"p-error":x.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Tax Identification Number",e("span",{className:"text-red-500",children:"*"})," "]}),e(c,{value:l.TIN_number,className:`form-control !text-xs !py-2.5 ${i({"p-invalid":r&&(l.TIN_number==""||l.TIN_number==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:a=>s("TIN_number",a.target.value)}),r&&(l.TIN_number==""||l.TIN_number==null)&&e(InputError,{message:"Tax Identification Number is required!",className:"mt-2 text-xs"})]}),t("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:[" ","Line of Business/Industry:",e("span",{className:"text-red-500",children:"*"})," "]}),e(c,{value:l.line_of_business,className:`form-control !text-xs !py-2.5 ${i({"p-invalid":r&&(l.line_of_business==""||l.line_of_business==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:a=>s("line_of_business",a.target.value)}),r&&(l.line_of_business==""||l.line_of_business==null)&&e(InputError,{message:"Line of Business is required!",className:"mt-2 text-xs"})]}),t("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Employer type:",e("span",{className:"text-red-500",children:"*"})]}),t("div",{class:"row",children:[e("div",{class:"col-md-12",children:t("div",{className:"flex flex-nowrap items-center",children:[e(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Government",checked:l.employer_type==="Government",onChange:a=>s("employer_type",a.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Government"})]})}),e("div",{class:"col-md-12",children:t("div",{className:"flex flex-nowrap items-center",children:[e(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Private",checked:l.employer_type==="Private",onChange:a=>s("employer_type",a.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Private"})]})}),e("div",{class:"col-md-12",children:t("div",{className:"flex flex-nowrap items-center",children:[e(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Recruitment & Placement Agency (Local)",checked:l.employer_type==="Recruitment & Placement Agency (Local)",onChange:a=>s("employer_type",a.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Recruitment & Placement Agency (Local)"})]})}),e("div",{class:"col-md-12",children:t("div",{className:"flex flex-nowrap items-center",children:[e(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Licensed Recruitment Agency (Overseas)",checked:l.employer_type==="Licensed Recruitment Agency (Overseas)",onChange:a=>s("employer_type",a.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Licensed Recruitment Agency (Overseas)"})]})}),e("div",{class:"col-md-6",children:t("div",{className:"flex flex-nowrap items-center",children:[e(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"DO 174-17, Subcontractor",checked:l.employer_type==="DO 174-17, Subcontractor",onChange:a=>s("employer_type",a.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"DO 174-17, Subcontractor"})]})})]}),r&&(l.employer_type==""||l.employer_type==null)&&e(InputError,{message:"Employer Type is required!",className:"mt-2 text-xs"})]}),t("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Total Work Force:",e("span",{className:"text-red-500",children:"*"})]}),t("div",{class:"row",children:[e("div",{class:"col-md-6",children:t("div",{className:"flex flex-nowrap items-center",children:[e(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Micro (1-9)",checked:l.total_work_force==="Micro (1-9)",onChange:a=>s("total_work_force",a.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Micro (1-9)"})]})}),e("div",{class:"col-md-6",children:t("div",{className:"flex flex-nowrap items-center",children:[e(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Small (10-99)",checked:l.total_work_force==="Small (10-99)",onChange:a=>s("total_work_force",a.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Small (10-99)"})]})}),e("div",{class:"col-md-6",children:t("div",{className:"flex flex-nowrap items-center",children:[e(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Medium (100-199)",checked:l.total_work_force==="Medium (100-199)",onChange:a=>s("total_work_force",a.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Medium (100-199)"})]})}),e("div",{class:"col-md-6",children:t("div",{className:"flex flex-nowrap items-center",children:[e(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Large (200 and up)",checked:l.total_work_force==="Large (200 and up)",onChange:a=>s("total_work_force",a.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Large (200 and up)"})]})})]}),r&&(l.total_work_force==""||l.total_work_force==null)&&e(InputError,{message:"Employer Type is required!",className:"mt-2 text-xs"})]})]})]})}),e(h,{className:"mr-2 w-20",label:"Save",onClick:()=>_()})]})}export{F as default};
