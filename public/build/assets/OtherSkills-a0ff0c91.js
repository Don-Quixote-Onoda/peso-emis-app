import{r as i,j as c,a as e}from"./app-0c6b84dc.js";import m from"./NavigatorButton-b3656e99.js";import{u as k}from"./hooks.esm-70fbc7d3.js";function x({activeIndex:r,numberOfPage:n,setActiveIndex:s,counterPrevious:h}){i.useState(!1);const[l,t]=i.useState(""),[w,d]=k(sessionStorage.getItem("OtherSkills"),"OtherSkills"),o=(a,p)=>{p.target.checked&&!l.includes(a)?t(l+" "+a):t(l.replace(a,"")),console.log(l)},f=a=>{a.preventDefault(),s(r+1),d(l)};return c("form",{onSubmit:a=>f(a),children:[e("div",{class:"step-9",children:c("div",{class:"py-5 card border-0 rounded-0",children:[c("h4",{class:"card-header pl-0 border-0 fw-bold",children:["8. OTHER SKILLS ACQUIRED WITHOUT FORMAL TRAINING"," "]}),e("div",{class:"card-body pl-0 pt-3",children:c("div",{class:"row",children:[e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Auto Mechanic",onChange:a=>o("Auto Mechanic",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Auto Mechanic"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Electrician",onChange:a=>o("Electrician",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Electrician"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Photography",onChange:a=>o("Photography",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Photography"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Beautician",onChange:a=>o("Beautician",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Beautician"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Embroidery",onChange:a=>o("Embroidery",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Embroidery"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Plumbing",onChange:a=>o("Plumbing",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Plumbing"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Carpentry Work",onChange:a=>o("Carpentry Work",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Carpentry Work"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Gardening",onChange:a=>o("Gardening",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Gardening"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Sewing Dresses",onChange:a=>o("Sewing Dresses",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Sewing Dresses"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Computer Literate",onChange:a=>o("Computer Literate",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Computer Literate"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Masonry",onChange:a=>o("Masonry",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Masonry"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Stenography",onChange:a=>o("Stenography",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Stenography"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Domestic Chores",onChange:a=>o("Domestic Chores",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Domestic Chores"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Painter/Artist",onChange:a=>o("Painter/Artist",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Painter/Artist"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Tailoring",onChange:a=>o("Tailoring",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Tailoring"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Driving",onChange:a=>o("Driving",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Driving"})]})}),e("div",{class:"col-md-4",children:c("div",{class:"form-check",children:[e("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Painting Jobs",onChange:a=>o("Painting Jobs",a)}),e("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Painting Jobs"})]})}),e("div",{class:"col-md-4",children:e("input",{type:"input",placeholder:"Others: ",class:"form-control osawft-others !text-xs !py-2.5 !text-gray-500 border-light-emphasis"})})]})})]})}),e(m,{activeIndex:r,numberOfPage:n,setActiveIndex:s,counterPrevious:h})]})}export{x as default};