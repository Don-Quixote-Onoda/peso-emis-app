<<<<<<<< HEAD:public/build/assets/EstablishmentDetails-b01d7201.js
import{W as H,_ as z,r as h,j as l,F as W,a as t}from"./app-795d5ab7.js";import{I as p}from"./inputtext.esm-3956e564.js";import{R as o}from"./radiobutton.esm-f9988d29.js";import{B as J}from"./button.esm-ce7d9b02.js";import{u as i,c as d}from"./hooks.esm-336a0b9f.js";import{s as m}from"./index-4355d5a8.js";import"./tooltip.esm-6a5d9820.js";import"./ripple.esm-279372dc.js";import"./index-419cf3fb.js";function de({back:K,setType:E}){const s=H().props.employers[0],{data:a,setData:r,post:A,reset:C,processing:Q,errors:D}=z({establishment_accronym:s.establishment_accronym,establishment_name:s.establishment_name,is_authorization_accepted:s.is_authorization_accepted,line_of_business:s.line_of_business,total_work_force:s.total_work_force,TIN_number:s.TIN_number,e_signature:s.e_signature,employer_type:s.employer_type,id:s.id,region:s.employer_address.region,province:s.employer_address.province,city_or_municipality:s.employer_address.city_or_municipality,barangay:s.employer_address.barangay,address:s.employer_address.address}),[n,_]=h.useState(!1),T=e=>{_(!0),A(route("update-establishment-details"),{forceFormData:!0,onSuccess:()=>{console.log("success"),C(),_(!1),E("default")},onError:()=>{}})},[U,O]=i(sessionStorage.getItem("regionAddr"),"regionAddr"),[X,F]=i(sessionStorage.getItem("provinceAddr"),"provinceAddr"),[Y,L]=i("cityAddr","cityAddr"),[Z,R]=i(sessionStorage.getItem("barangayAddr"),"barangayAddr"),[P,ee]=i(sessionStorage.getItem("houseNumber_Street_Village"),"houseNumber_Street_Village"),[b,B]=h.useState([]),[y,v]=h.useState([]),[x,g]=i(sessionStorage.getItem("cityData"),"cityData"),[f,u]=i(sessionStorage.getItem("barangayData"),"barangayData"),[te,j]=i(sessionStorage.getItem("regionCode"),"regionCode");i(sessionStorage.getItem("employedStatusType"),"employedStatusType"),h.useState(""),i(sessionStorage.getItem("unEmployedStatusTypes"),"unEmployedStatusTypes");const N=()=>{m.regions().then(e=>{B(e)})},M=e=>{O(e.target.selectedOptions[0].text),r("region",e.target.selectedOptions[0].text),m.provinces(e.target.value).then(c=>{v(c),g([]),u([]),j(e.target.value)})},q=e=>{F(e.target.selectedOptions[0].text),r("province",e.target.selectedOptions[0].text),m.cities(e.target.value).then(c=>{g(c)})},$=e=>{r("city_or_municipality",e.target.selectedOptions[0].text),L(e.target.selectedOptions[0].text),m.barangays(e.target.value).then(c=>{u(c)})},V=e=>{r("barangay",e.target.selectedOptions[0].text),R(e.target.selectedOptions[0].text)};return h.useEffect(()=>{N(),m.regions().then(e=>{e.map(c=>{c.region_name===a.region&&m.provinces(c.region_code).then(S=>{v(S),g([]),u([]),S.map(k=>{k.province_name===a.province&&m.cities(k.province_code).then(I=>{g(I),I.map(w=>{w.city_name===a.city&&m.barangays(w.city_code).then(G=>{u(G)})})})})})})})},[]),l(W,{children:[t("div",{class:"step-1",children:l("div",{class:"card rounded-0 border-0",children:[t("div",{class:" bg-light mb-2 font-bold mt-10",children:t("h4",{class:"card-title fw-bold",children:"I. ESTABLISHMENT DETAILS"})}),l("div",{class:"card-body row p-0",children:[l("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:[" ","Establishment Name:",t("span",{className:"text-red-500",children:"*"})," "]}),t(p,{value:a.establishment_name,className:`form-control !text-xs !py-2.5 ${d({"p-invalid":n&&(a.establishment_name==""||a.establishment_name==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:e=>r("establishment_name",e.target.value)}),n&&(a.establishment_name==""||a.establishment_name==null)&&t(InputError,{message:"Establishment Name is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",className:`form-label !text-xs ${d({"p-error":n&&(a.establishment_accronym==""||a.establishment_accronym==null)})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Acronym/Abbreviation:",t("span",{className:"text-red-500",children:"*"})," "]}),t(p,{value:a.establishment_accronym,className:`form-control !text-xs !py-2.5 ${d({"p-invalid":n&&(a.establishment_accronym==""||a.establishment_accronym==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:e=>r("establishment_accronym",e.target.value)}),n&&(a.establishment_accronym==""||a.establishment_accronym==null)&&t(InputError,{message:"Establishment Abbreviation is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",className:`form-label !text-xs ${d({"p-error":D.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Tax Identification Number",t("span",{className:"text-red-500",children:"*"})," "]}),t(p,{value:a.TIN_number,className:`form-control !text-xs !py-2.5 ${d({"p-invalid":n&&(a.TIN_number==""||a.TIN_number==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:e=>r("TIN_number",e.target.value)}),n&&(a.TIN_number==""||a.TIN_number==null)&&t(InputError,{message:"Tax Identification Number is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:[" ","Line of Business/Industry:",t("span",{className:"text-red-500",children:"*"})," "]}),t(p,{value:a.line_of_business,className:`form-control !text-xs !py-2.5 ${d({"p-invalid":n&&(a.line_of_business==""||a.line_of_business==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:e=>r("line_of_business",e.target.value)}),n&&(a.line_of_business==""||a.line_of_business==null)&&t(InputError,{message:"Line of Business is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Employer type:",t("span",{className:"text-red-500",children:"*"})]}),l("div",{class:"row",children:[t("div",{class:"col-md-12",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Government",checked:a.employer_type==="Government",onChange:e=>r("employer_type",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Government"})]})}),t("div",{class:"col-md-12",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Private",checked:a.employer_type==="Private",onChange:e=>r("employer_type",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Private"})]})}),t("div",{class:"col-md-12",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Recruitment & Placement Agency (Local)",checked:a.employer_type==="Recruitment & Placement Agency (Local)",onChange:e=>r("employer_type",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Recruitment & Placement Agency (Local)"})]})}),t("div",{class:"col-md-12",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Licensed Recruitment Agency (Overseas)",checked:a.employer_type==="Licensed Recruitment Agency (Overseas)",onChange:e=>r("employer_type",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Licensed Recruitment Agency (Overseas)"})]})}),t("div",{class:"col-md-6",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"DO 174-17, Subcontractor",checked:a.employer_type==="DO 174-17, Subcontractor",onChange:e=>r("employer_type",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"DO 174-17, Subcontractor"})]})})]}),n&&(a.employer_type==""||a.employer_type==null)&&t(InputError,{message:"Employer Type is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Total Work Force:",t("span",{className:"text-red-500",children:"*"})]}),l("div",{class:"row",children:[t("div",{class:"col-md-6",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Micro (1-9)",checked:a.total_work_force==="Micro (1-9)",onChange:e=>r("total_work_force",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Micro (1-9)"})]})}),t("div",{class:"col-md-6",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Small (10-99)",checked:a.total_work_force==="Small (10-99)",onChange:e=>r("total_work_force",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Small (10-99)"})]})}),t("div",{class:"col-md-6",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Medium (100-199)",checked:a.total_work_force==="Medium (100-199)",onChange:e=>r("total_work_force",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Medium (100-199)"})]})}),t("div",{class:"col-md-6",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Large (200 and up)",checked:a.total_work_force==="Large (200 and up)",onChange:e=>r("total_work_force",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Large (200 and up)"})]})})]}),n&&(a.total_work_force==""||a.total_work_force==null)&&t(InputError,{message:"Employer Type is required!",className:"mt-2 text-xs"})]})]})]})}),t("div",{class:"col-md-12 mb-4",children:l("div",{class:"row",children:[l("div",{class:"col-md-6 mb-4 d-flex flex-column justify-content-between",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 text-light-emphasis",children:["Region",t("span",{className:"text-red-500",children:"*"})]}),l("select",{onChange:M,onSelect:N,className:" province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300","aria-label":"Default select example",children:[t("option",{disabled:!0,children:"Select Region"}),b&&b.length>0&&b.map(e=>t("option",{value:e.region_code,selected:a.region==e.region_name?!0:null,children:e.region_name},e.region_code))]})]}),l("div",{class:"col-md-6 mb-4 d-flex flex-column justify-content-between",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 text-light-emphasis",children:["Province",t("span",{className:"text-red-500",children:"*"})]}),l("select",{onChange:q,class:" province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300 form-select border-light-emphasis","aria-label":"Default select example",children:[t("option",{children:"Select Province"}),y&&y.length>0&&y.map(e=>t("option",{value:e.province_code,selected:a.province==e.province_name?!0:null,children:e.province_name},e.province_code))]})]}),l("div",{class:"col-md-6 mb-4  d-flex flex-column justify-content-between",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 text-light-emphasis",children:["Municipality/City",t("span",{className:"text-red-500",children:"*"})]}),l("select",{onChange:$,class:" city !text-xs !py-2.5 !rounded form-select !border-gray-300 !text-gray-500 form-select border-light-emphasis","aria-label":"Default select example",children:[t("option",{children:"Select City"}),x&&x.length>0&&x.map(e=>t("option",{value:e.city_code,selected:a.city==e.city_name?!0:null,children:e.city_name},e.city_code))]})]}),l("div",{class:"col-md-6 mb-4  d-flex flex-column justify-content-between",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 text-light-emphasis",children:["Barangay",t("span",{className:"text-red-500",children:"*"})]}),l("select",{onChange:V,class:" barangay !text-xs !rounded form-select !border-gray-300 !py-2.5 !text-gray-500 form-select border-light-emphasis","aria-label":"Default select example",children:[t("option",{children:"Select Barangay"}),f&&f.length>0&&f.map(e=>t("option",{value:e.brgy_code,selected:a.barangay==e.brgy_name?!0:null,children:e.brgy_name},e.brgy_code))]})]}),l("div",{class:"col-md-12 mb-4  d-flex flex-column justify-content-between",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 text-light-emphasis",children:["House No./ Street Village*",t("span",{className:"text-red-500",children:"*"})]}),t(p,{className:"form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname",value:P})]})]})}),t(J,{className:"mr-2 w-20",label:"Save",onClick:()=>T()})]})}export{de as default};
========
import{W as H,_ as z,r as h,j as l,F as W,a as t}from"./app-e30f9f78.js";import{I as p}from"./inputtext.esm-e8014367.js";import{R as o}from"./radiobutton.esm-7d4a1520.js";import{B as J}from"./button.esm-05f78bae.js";import{u as i,c as d}from"./hooks.esm-beec91a3.js";import{s as m}from"./index-4355d5a8.js";import"./tooltip.esm-61b54ee6.js";import"./ripple.esm-4f3f9eec.js";import"./index-419cf3fb.js";function de({back:K,setType:E}){const s=H().props.employers[0],{data:a,setData:r,post:A,reset:C,processing:Q,errors:D}=z({establishment_accronym:s.establishment_accronym,establishment_name:s.establishment_name,is_authorization_accepted:s.is_authorization_accepted,line_of_business:s.line_of_business,total_work_force:s.total_work_force,TIN_number:s.TIN_number,e_signature:s.e_signature,employer_type:s.employer_type,id:s.id,region:s.employer_address.region,province:s.employer_address.province,city_or_municipality:s.employer_address.city_or_municipality,barangay:s.employer_address.barangay,address:s.employer_address.address}),[n,_]=h.useState(!1),T=e=>{_(!0),A(route("update-establishment-details"),{forceFormData:!0,onSuccess:()=>{console.log("success"),C(),_(!1),E("default")},onError:()=>{}})},[U,O]=i(sessionStorage.getItem("regionAddr"),"regionAddr"),[X,F]=i(sessionStorage.getItem("provinceAddr"),"provinceAddr"),[Y,L]=i("cityAddr","cityAddr"),[Z,R]=i(sessionStorage.getItem("barangayAddr"),"barangayAddr"),[P,ee]=i(sessionStorage.getItem("houseNumber_Street_Village"),"houseNumber_Street_Village"),[b,B]=h.useState([]),[y,v]=h.useState([]),[x,g]=i(sessionStorage.getItem("cityData"),"cityData"),[f,u]=i(sessionStorage.getItem("barangayData"),"barangayData"),[te,j]=i(sessionStorage.getItem("regionCode"),"regionCode");i(sessionStorage.getItem("employedStatusType"),"employedStatusType"),h.useState(""),i(sessionStorage.getItem("unEmployedStatusTypes"),"unEmployedStatusTypes");const N=()=>{m.regions().then(e=>{B(e)})},M=e=>{O(e.target.selectedOptions[0].text),r("region",e.target.selectedOptions[0].text),m.provinces(e.target.value).then(c=>{v(c),g([]),u([]),j(e.target.value)})},q=e=>{F(e.target.selectedOptions[0].text),r("province",e.target.selectedOptions[0].text),m.cities(e.target.value).then(c=>{g(c)})},$=e=>{r("city_or_municipality",e.target.selectedOptions[0].text),L(e.target.selectedOptions[0].text),m.barangays(e.target.value).then(c=>{u(c)})},V=e=>{r("barangay",e.target.selectedOptions[0].text),R(e.target.selectedOptions[0].text)};return h.useEffect(()=>{N(),m.regions().then(e=>{e.map(c=>{c.region_name===a.region&&m.provinces(c.region_code).then(S=>{v(S),g([]),u([]),S.map(k=>{k.province_name===a.province&&m.cities(k.province_code).then(I=>{g(I),I.map(w=>{w.city_name===a.city&&m.barangays(w.city_code).then(G=>{u(G)})})})})})})})},[]),l(W,{children:[t("div",{class:"step-1",children:l("div",{class:"card rounded-0 border-0",children:[t("div",{class:" bg-light mb-2 font-bold mt-10",children:t("h4",{class:"card-title fw-bold",children:"I. ESTABLISHMENT DETAILS"})}),l("div",{class:"card-body row p-0",children:[l("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:[" ","Establishment Name:",t("span",{className:"text-red-500",children:"*"})," "]}),t(p,{value:a.establishment_name,className:`form-control !text-xs !py-2.5 ${d({"p-invalid":n&&(a.establishment_name==""||a.establishment_name==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:e=>r("establishment_name",e.target.value)}),n&&(a.establishment_name==""||a.establishment_name==null)&&t(InputError,{message:"Establishment Name is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",className:`form-label !text-xs ${d({"p-error":n&&(a.establishment_accronym==""||a.establishment_accronym==null)})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Acronym/Abbreviation:",t("span",{className:"text-red-500",children:"*"})," "]}),t(p,{value:a.establishment_accronym,className:`form-control !text-xs !py-2.5 ${d({"p-invalid":n&&(a.establishment_accronym==""||a.establishment_accronym==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:e=>r("establishment_accronym",e.target.value)}),n&&(a.establishment_accronym==""||a.establishment_accronym==null)&&t(InputError,{message:"Establishment Abbreviation is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",className:`form-label !text-xs ${d({"p-error":D.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Tax Identification Number",t("span",{className:"text-red-500",children:"*"})," "]}),t(p,{value:a.TIN_number,className:`form-control !text-xs !py-2.5 ${d({"p-invalid":n&&(a.TIN_number==""||a.TIN_number==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:e=>r("TIN_number",e.target.value)}),n&&(a.TIN_number==""||a.TIN_number==null)&&t(InputError,{message:"Tax Identification Number is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:[" ","Line of Business/Industry:",t("span",{className:"text-red-500",children:"*"})," "]}),t(p,{value:a.line_of_business,className:`form-control !text-xs !py-2.5 ${d({"p-invalid":n&&(a.line_of_business==""||a.line_of_business==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:e=>r("line_of_business",e.target.value)}),n&&(a.line_of_business==""||a.line_of_business==null)&&t(InputError,{message:"Line of Business is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Employer type:",t("span",{className:"text-red-500",children:"*"})]}),l("div",{class:"row",children:[t("div",{class:"col-md-12",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Government",checked:a.employer_type==="Government",onChange:e=>r("employer_type",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Government"})]})}),t("div",{class:"col-md-12",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Private",checked:a.employer_type==="Private",onChange:e=>r("employer_type",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Private"})]})}),t("div",{class:"col-md-12",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Recruitment & Placement Agency (Local)",checked:a.employer_type==="Recruitment & Placement Agency (Local)",onChange:e=>r("employer_type",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Recruitment & Placement Agency (Local)"})]})}),t("div",{class:"col-md-12",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Licensed Recruitment Agency (Overseas)",checked:a.employer_type==="Licensed Recruitment Agency (Overseas)",onChange:e=>r("employer_type",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Licensed Recruitment Agency (Overseas)"})]})}),t("div",{class:"col-md-6",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"DO 174-17, Subcontractor",checked:a.employer_type==="DO 174-17, Subcontractor",onChange:e=>r("employer_type",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"DO 174-17, Subcontractor"})]})})]}),n&&(a.employer_type==""||a.employer_type==null)&&t(InputError,{message:"Employer Type is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Total Work Force:",t("span",{className:"text-red-500",children:"*"})]}),l("div",{class:"row",children:[t("div",{class:"col-md-6",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Micro (1-9)",checked:a.total_work_force==="Micro (1-9)",onChange:e=>r("total_work_force",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Micro (1-9)"})]})}),t("div",{class:"col-md-6",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Small (10-99)",checked:a.total_work_force==="Small (10-99)",onChange:e=>r("total_work_force",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Small (10-99)"})]})}),t("div",{class:"col-md-6",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Medium (100-199)",checked:a.total_work_force==="Medium (100-199)",onChange:e=>r("total_work_force",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Medium (100-199)"})]})}),t("div",{class:"col-md-6",children:l("div",{className:"flex flex-nowrap items-center",children:[t(o,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Large (200 and up)",checked:a.total_work_force==="Large (200 and up)",onChange:e=>r("total_work_force",e.target.value)}),t("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Large (200 and up)"})]})})]}),n&&(a.total_work_force==""||a.total_work_force==null)&&t(InputError,{message:"Employer Type is required!",className:"mt-2 text-xs"})]})]})]})}),t("div",{class:"col-md-12 mb-4",children:l("div",{class:"row",children:[l("div",{class:"col-md-6 mb-4 d-flex flex-column justify-content-between",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 text-light-emphasis",children:["Region",t("span",{className:"text-red-500",children:"*"})]}),l("select",{onChange:M,onSelect:N,className:" province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300","aria-label":"Default select example",children:[t("option",{disabled:!0,children:"Select Region"}),b&&b.length>0&&b.map(e=>t("option",{value:e.region_code,selected:a.region==e.region_name?!0:null,children:e.region_name},e.region_code))]})]}),l("div",{class:"col-md-6 mb-4 d-flex flex-column justify-content-between",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 text-light-emphasis",children:["Province",t("span",{className:"text-red-500",children:"*"})]}),l("select",{onChange:q,class:" province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300 form-select border-light-emphasis","aria-label":"Default select example",children:[t("option",{children:"Select Province"}),y&&y.length>0&&y.map(e=>t("option",{value:e.province_code,selected:a.province==e.province_name?!0:null,children:e.province_name},e.province_code))]})]}),l("div",{class:"col-md-6 mb-4  d-flex flex-column justify-content-between",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 text-light-emphasis",children:["Municipality/City",t("span",{className:"text-red-500",children:"*"})]}),l("select",{onChange:$,class:" city !text-xs !py-2.5 !rounded form-select !border-gray-300 !text-gray-500 form-select border-light-emphasis","aria-label":"Default select example",children:[t("option",{children:"Select City"}),x&&x.length>0&&x.map(e=>t("option",{value:e.city_code,selected:a.city==e.city_name?!0:null,children:e.city_name},e.city_code))]})]}),l("div",{class:"col-md-6 mb-4  d-flex flex-column justify-content-between",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 text-light-emphasis",children:["Barangay",t("span",{className:"text-red-500",children:"*"})]}),l("select",{onChange:V,class:" barangay !text-xs !rounded form-select !border-gray-300 !py-2.5 !text-gray-500 form-select border-light-emphasis","aria-label":"Default select example",children:[t("option",{children:"Select Barangay"}),f&&f.length>0&&f.map(e=>t("option",{value:e.brgy_code,selected:a.barangay==e.brgy_name?!0:null,children:e.brgy_name},e.brgy_code))]})]}),l("div",{class:"col-md-12 mb-4  d-flex flex-column justify-content-between",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 text-light-emphasis",children:["House No./ Street Village*",t("span",{className:"text-red-500",children:"*"})]}),t(p,{className:"form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname",value:P})]})]})}),t(J,{className:"mr-2 w-20",label:"Save",onClick:()=>T()})]})}export{de as default};
>>>>>>>> 3769a2dc8d43bb95264cb390435b9dadd026943e:public/build/assets/EstablishmentDetails-f4d1e116.js
