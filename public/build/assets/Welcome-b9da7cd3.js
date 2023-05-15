import{r as c,j as a,F as y,a as e,n as k,d}from"./app-0bb05a73.js";import{l as w}from"./lodash-4ceef0c3.js";import x from"./Footer-2f15313a.js";function E(u){const[l,p]=c.useState(),[b,m]=c.useState(!1),[r,f]=c.useState(5),t=w.slice(u.jobs,0,r);function h(s){const n=Math.floor((new Date-new Date(s))/1e3);let i=Math.floor(n/31536e3);return i>=1?i+" year"+(i===1?"":"s")+" ago":(i=Math.floor(n/2592e3),i>=1?i+" month"+(i===1?"":"s")+" ago":(i=Math.floor(n/86400),i>=1?i+" day"+(i===1?"":"s")+" ago":(i=Math.floor(n/3600),i>=1?i+" hour"+(i===1?"":"s")+" ago":(i=Math.floor(n/60),i>=1?i+" minute"+(i===1?"":"s")+" ago":Math.floor(n)+" second"+(n===1?"":"s")+" ago"))))}const N=()=>{f(r+5),r>=t?m(!0):m(!1)},[o,g]=c.useState(!1),v=()=>{g(!o)};return a(y,{children:[e(k,{title:"PESO-EMIS"}),e("header",{id:"header",className:"fixed-top d-flex align-items-center ",children:a("div",{className:"container d-flex align-items-center justify-content-between",children:[e("div",{className:"logo",children:e("h1",{children:e("a",{href:"/",children:"PESO EMIS"})})}),a("nav",{id:"navbar",className:`navbar ${o?"is-mobile":""}`,children:[a("ul",{className:"mobile-list",children:[e("li",{children:e("a",{className:"nav-link scrollto active",href:"#hero",children:"Home"})}),e("li",{children:e("a",{className:"nav-link scrollto",href:"#about",children:"About"})}),e("li",{children:e("a",{className:"nav-link scrollto",href:"#services",children:"Registration Forms"})}),e("li",{children:e("a",{className:"nav-link scrollto ",href:"#jobPosting",children:"Job Posts"})}),e("li",{children:e("a",{className:"nav-link scrollto",href:"#team",children:"Team"})}),e("li",{children:e("a",{className:"nav-link scrollto",href:"#contact",children:"Contact"})}),e(d,{href:route("login"),className:"nav-link",children:"Login"})]}),e("i",{className:`bi ${o?"bi-x-lg":"bi-list"} mobile-nav-toggle`,onClick:s=>v()})]})]})}),a("section",{id:"hero",className:"d-flex flex-column justify-content-end align-items-center",children:[a("div",{id:"heroCarousel","data-bs-interval":"5000",className:"container carousel carousel-fade","data-bs-ride":"carousel",children:[e("div",{className:"carousel-item active",children:a("div",{className:"carousel-container",children:[e("h2",{className:"animate__animated animate__fadeInDown",children:e("span",{children:"Welcome to Valencia City PESO Employment Management Information System"})}),e("p",{className:"animate__animated fanimate__adeInUp",children:"The Public Employment Service Office or PESO is a non-fee charging multi-employment service facility or entity established or accredited pursuant to Republic Act No. 8759 otherwise known as the PESO Act of 1999. To carry out full employment and equality of employment opportunities for all, and for this purpose (PESO, 2014)."}),e("a",{href:"#about",className:"btn-get-started animate__animated animate__fadeInUp scrollto",children:"Read More"})]})}),e("div",{className:"carousel-item",children:a("div",{className:"carousel-container",children:[e("h2",{className:"animate__animated animate__fadeInDown",children:"Implementation of programme/ initiative"}),e("p",{className:"animate__animated animate__fadeInUp",children:"PESO is widely implemented across the country and its general objectives guarantee the job seekers within its locality that it will deliver updated information about employment and other DOLE programmes. Concurrently, its specific objectives are to provide a venue for employment assistance in every locale and to serve as a referral or recruitment information centre by providing job vacancy information. PESO is directed to follow up and monitor the status of the referred job seekers who have been employed by different stakeholders nationwide."}),e("a",{href:"#about",className:"btn-get-started animate__animated animate__fadeInUp scrollto",children:"Read More"})]})}),e("div",{className:"carousel-item",children:a("div",{className:"carousel-container",children:[e("h2",{className:"animate__animated animate__fadeInDown",children:"About this Employment Management Information System"}),e("p",{className:"animate__animated animate__fadeInUp",children:"This PESO-EMIS will help both jobseekers and establishment owners to smoothly register and file application to the Public Employment Service Office in the City of Valencia. This will help the Local Government monitor the applicants registered per month and hopefully raise the employment rate among the city."}),e("a",{href:"#about",className:"btn-get-started animate__animated animate__fadeInUp scrollto",children:"Read More"})]})}),e("a",{className:"carousel-control-prev",href:"#heroCarousel",role:"button","data-bs-slide":"prev",children:e("span",{className:"carousel-control-prev-icon bx bx-chevron-left","aria-hidden":"true"})}),e("a",{className:"carousel-control-next",href:"#heroCarousel",role:"button","data-bs-slide":"next",children:e("span",{className:"carousel-control-next-icon bx bx-chevron-right","aria-hidden":"true"})})]}),a("svg",{className:"hero-waves",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28 ",preserveAspectRatio:"none",children:[e("defs",{children:e("path",{id:"wave-path",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})}),e("g",{className:"wave1",children:e("use",{"xlink:href":"#wave-path",x:"50",y:"3",fill:"rgba(255,255,255, .1)"})}),e("g",{className:"wave2",children:e("use",{"xlink:href":"#wave-path",x:"50",y:"0",fill:"rgba(255,255,255, .2)"})}),e("g",{className:"wave3",children:e("use",{"xlink:href":"#wave-path",x:"50",y:"9",fill:"#fff"})})]})]}),a("main",{id:"main",children:[e("section",{id:"about",className:"about",children:a("div",{className:"container",children:[a("div",{className:"section-title","data-aos":"zoom-out",children:[e("h2",{children:"About"}),e("p",{children:"Who we are"})]}),a("div",{className:"row content","data-aos":"fade-up",children:[a("div",{className:"col-lg-6",children:[e("p",{children:"The Valencia City Public Employment Service Office (PESO) is an office that serves the public in the employment sector."}),e("p",{children:"The PESO aims to ensure prompt and efficient delivery of employment facilitation services as well as to provide timely information on labor market and DOLE Programs."})]}),a("div",{className:"col-lg-6 pt-4 pt-lg-0",children:[e("p",{children:"PESO is a free multi-employment service facility managed by Local Government Units (LGUs) and State Universities and Colleges (SUCs) that upholds equal employment opportunities to every individual covered in the locality."}),e("a",{href:"#",className:"btn-learn-more",children:"Learn More"})]})]})]})}),e("section",{id:"features",className:"features",children:a("div",{className:"container",children:[a("ul",{className:"nav nav-tabs row d-flex",children:[e("li",{className:"nav-item col-3","data-aos":"zoom-in",children:a("a",{className:"nav-link active show","data-bs-toggle":"tab",href:"#tab-1",children:[e("i",{className:"ri-gps-line"}),e("h4",{className:"d-none d-lg-block",children:"PESO Programs"})]})}),e("li",{className:"nav-item col-3","data-aos":"zoom-in","data-aos-delay":"100",children:a("a",{className:"nav-link","data-bs-toggle":"tab",href:"#tab-2",children:[e("i",{className:"ri-body-scan-line"}),e("h4",{className:"d-none d-lg-block",children:"Beneficiaries"})]})}),e("li",{className:"nav-item col-3","data-aos":"zoom-in","data-aos-delay":"200",children:a("a",{className:"nav-link","data-bs-toggle":"tab",href:"#tab-3",children:[e("i",{className:"ri-sun-line"}),e("h4",{className:"d-none d-lg-block",children:"VISION"})]})}),e("li",{className:"nav-item col-3","data-aos":"zoom-in","data-aos-delay":"300",children:a("a",{className:"nav-link","data-bs-toggle":"tab",href:"#tab-4",children:[e("i",{className:"ri-store-line"}),e("h4",{className:"d-none d-lg-block",children:"MISSION"})]})})]}),a("div",{className:"tab-content","data-aos":"fade-up",children:[e("div",{className:"tab-pane active show",id:"tab-1",children:a("div",{className:"row",children:[a("div",{className:"col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0",children:[e("h3",{children:"Programs Implemented:"}),a("ul",{children:[a("li",{children:[e("i",{className:"ri-check-double-line"}),"Special Program for the Employment of Students (SPES)"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"Job Fairs"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"PhilJobnet / PESO Employment Information System (PEIS)"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"National Skills Registry Program (NSRP)"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"DOLE Government Internship Program (DOLE-GIP)"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"Tulong Pangkabuhayan para sa Ating Disadvantaged Workers (TUPAD)"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"DOLE Integrated Livelihood and Emergency Employment Program (DILEEP)"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"JOBSTART"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"Pre-Employment Orientation Seminar (PAOS)"]})]})]}),e("div",{className:"col-lg-6 order-1 order-lg-2 text-center",children:e("img",{src:"img/homepage/features-1.png",alt:"",className:"img-fluid"})})]})}),e("div",{className:"tab-pane",id:"tab-2",children:a("div",{className:"row",children:[a("div",{className:"col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0",children:[e("h3",{children:"Who does the PESO cater to?"}),a("ul",{children:[a("li",{children:[e("i",{className:"ri-check-double-line"}),"Jobseekers"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"Employers"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"Students"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"Out-of-School Yout (OSY)"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"Migrant Workers"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"Persons with Disabilities (PWDs)"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"Returning OFWs"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"Displaced Workers"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"Researchers and Planners"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"Senior Citizens"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"Other PESOs and Government Entities"]})]})]}),e("div",{className:"col-lg-6 order-1 order-lg-2 text-center",children:e("img",{src:"img/homepage/features-2.png",alt:"",className:"img-fluid"})})]})}),e("div",{className:"tab-pane",id:"tab-3",children:a("div",{className:"row",children:[a("div",{className:"col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0",children:[e("p",{children:"To facilitate equal employment opportunities to the City’s constituents through Job Matching and Coaching, employability enhancement and referrals for livelihood or training, and promotion of industrial peace through tripartism."}),a("ul",{children:[a("li",{children:[e("i",{className:"ri-check-double-line"}),"To provide Labor Market Information to the clients (Job Seekers, Employers, OFW, Students, Displaced Workers, Unemployed, Seeking change in career, etc.)"]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"To maintain a fresh, up to date, skills registry system of all households in the City."]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"To provide employment facilitation services where people can explore various employment options."]})]})]}),e("div",{className:"col-lg-6 order-1 order-lg-2 text-center",children:e("img",{src:"img/homepage/features-3.png",alt:"",className:"img-fluid"})})]})}),e("div",{className:"tab-pane",id:"tab-4",children:a("div",{className:"row",children:[a("div",{className:"col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0",children:[e("p",{}),e("p",{className:"fst-italic"}),a("ul",{children:[a("li",{children:[e("i",{className:"ri-check-double-line"}),"Ensure the speedy, equitable and efficient delivery of employment services delivery to maximize the impact of various employment programs and services at the grassroots level."]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"To maintain a fresh, up to date, skills registry system of all households in the City."]}),a("li",{children:[e("i",{className:"ri-check-double-line"}),"To maintain a fresh, up to date, skills registry system of all households in the City."]})]})]}),e("div",{className:"col-lg-6 order-1 order-lg-2 text-center",children:e("img",{src:"img/homepage/features-4.png",alt:"",className:"img-fluid"})})]})})]})]})}),e("section",{id:"services",className:"services",children:a("div",{className:"container",children:[a("div",{className:"section-title","data-aos":"zoom-out",children:[e("h2",{children:"Services"}),e("p",{children:"REGISTRATION FORMS"})]}),a("div",{className:"row",children:[e("div",{className:"col-lg-4 col-md-6",children:a("div",{className:"icon-box","data-aos":"zoom-in-left",children:[e("div",{className:"icon",children:e("i",{className:"bi bi-briefcase",style:{color:"#ff689b"}})}),e("h4",{className:"title",children:e(d,{href:route("employers.index"),className:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Employers Form"})}),e("p",{className:"description",children:"Registation Form for Establishments, Please fill out the form correctly and honestly."})]})}),e("div",{className:"col-lg-4 col-md-6 mt-5 mt-md-0",children:a("div",{className:"icon-box","data-aos":"zoom-in-left","data-aos-delay":"100",children:[e("div",{className:"icon",children:e("i",{className:"bi bi-book",style:{color:"#e9bf06"}})}),e("h4",{className:"title",children:e(d,{href:route("applicants.index"),className:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Applicants Form"})}),e("p",{className:"description",children:"Registation Form for Jobseekers, Please fill out the form correctly and honestly."})]})})]})]})}),e("section",{id:"jobPosting",className:"jobPosting",children:a("div",{className:"container",children:[a("div",{className:"section-title","data-aos":"zoom-out",children:[e("h2",{children:"Job Posts"}),e("p",{children:"Check out the latest Job Postings"})]}),a("div",{class:"row job-postings",children:[e("div",{className:`job-posts ${l?"basis-2/4 showJobInfo":""}`,children:t.map(s=>e("div",{class:"card",onClick:()=>{p(s)},children:a("div",{class:"card-body",children:[e("h5",{class:"card-title",style:{backgroundColor:"rgb(157, 198, 218)"},children:s.employer.establishment_accronym}),a("div",{class:"card-text",children:[e("p",{className:"text-md font-bold py-1",children:s.position_title}),e("p",{className:"text-sm py-1",children:s.employer.establishment_name}),e("p",{className:"text-sm py-1",style:{textTransform:"capitalize"},children:s.place_of_work}),e("p",{className:"text-sm py-1",children:h(s.created_at)})]})]})}))}),l&&e("div",{className:`job-post-description basis-2/4 ${l?"basis-2/4":""}`,children:a("div",{className:"desc-title",children:[e("h1",{className:"text-xl font-bold mb-3",children:l.position_title}),e("div",{className:"card mb-3",children:a("div",{class:"card-body",children:[e("h5",{class:"card-title",style:{backgroundColor:"rgb(157, 198, 218)"},children:l.employer.establishment_accronym}),a("div",{class:"card-text",children:[e("p",{className:"text-sm py-1",children:l.position_title}),e("p",{className:"text-sm py-1",style:{textTransform:"capitalize"},children:l.place_of_work})]})]})}),a("a",{className:"cursor !my-3 inline-flex gap-2 items-center transition hover:bg-rose-400 my-5 bg-rose-500 p-3 rounded text-white",href:`mailto:${l.employer.employer_establishment_contact_detail.email_address}`,children:[e("i",{className:"pi pi-envelope "}),"Email your application"]}),e("p",{className:"my-2",children:h(l.created_at)}),e("h4",{className:"text-md font-bold my-3",children:"Qualifications:"}),e("ul",{style:{listStyleType:"disc",marginLeft:"1rem"},className:"",children:e("li",{children:l.employer.employer_qualification_requirement[l.id-1].other_qualification})}),a("p",{className:"my-2",children:["Salary: ",parseFloat(l.salary).toLocaleString("en-PH",{style:"currency",currency:"PHP"})," per month"]}),a("p",{className:"text-md font-bold my-3",children:["Experience: ",l.employer.employer_qualification_requirement[l.id-1].work_of_experience]}),e("ul",{style:{listStyleType:"disc",marginLeft:"1rem"},className:"",children:e("li",{children:l.employer.employer_qualification_requirement[l.id-1].other_qualification})})]})})]}),b?e("span",{}):t.length>5&&e("button",{onClick:N,className:"cursor transition hover:bg-stone-400 my-5 bg-stone-500 p-3 rounded text-white",children:"See More"})]})}),e("section",{id:"faq",className:"faq",children:a("div",{className:"container",children:[a("div",{className:"section-title","data-aos":"zoom-out",children:[e("h2",{children:"F.A.Q"}),e("p",{children:"Frequently Asked Questions"})]}),a("ul",{className:"faq-list",children:[a("li",{children:[a("div",{"data-bs-toggle":"collapse",className:"collapsed question",href:"#faq1",children:["Non consectetur a erat nam at lectus urna duis?",e("i",{className:"bi bi-chevron-down icon-show"}),e("i",{className:"bi bi-chevron-up icon-close"})]}),e("div",{id:"faq1",className:"collapse","data-bs-parent":".faq-list",children:e("p",{children:"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."})})]}),a("li",{children:[a("div",{"data-bs-toggle":"collapse",href:"#faq2",className:"collapsed question",children:["Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",e("i",{className:"bi bi-chevron-down icon-show"}),e("i",{className:"bi bi-chevron-up icon-close"})]}),e("div",{id:"faq2",className:"collapse","data-bs-parent":".faq-list",children:e("p",{children:"Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."})})]}),a("li",{children:[a("div",{"data-bs-toggle":"collapse",href:"#faq3",className:"collapsed question",children:["Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?",e("i",{className:"bi bi-chevron-down icon-show"}),e("i",{className:"bi bi-chevron-up icon-close"})]}),e("div",{id:"faq3",className:"collapse","data-bs-parent":".faq-list",children:e("p",{children:"Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis"})})]}),a("li",{children:[a("div",{"data-bs-toggle":"collapse",href:"#faq4",className:"collapsed question",children:["Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",e("i",{className:"bi bi-chevron-down icon-show"}),e("i",{className:"bi bi-chevron-up icon-close"})]}),e("div",{id:"faq4",className:"collapse","data-bs-parent":".faq-list",children:e("p",{children:"Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."})})]}),a("li",{children:[a("div",{"data-bs-toggle":"collapse",href:"#faq5",className:"collapsed question",children:["Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",e("i",{className:"bi bi-chevron-down icon-show"}),e("i",{className:"bi bi-chevron-up icon-close"})]}),e("div",{id:"faq5",className:"collapse","data-bs-parent":".faq-list",children:e("p",{children:"Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in"})})]}),a("li",{children:[a("div",{"data-bs-toggle":"collapse",href:"#faq6",className:"collapsed question",children:["Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?",e("i",{className:"bi bi-chevron-down icon-show"}),e("i",{className:"bi bi-chevron-up icon-close"})]}),e("div",{id:"faq6",className:"collapse","data-bs-parent":".faq-list",children:e("p",{children:"Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec."})})]})]})]})}),e("section",{id:"team",className:"team",children:a("div",{className:"container",children:[a("div",{className:"section-title","data-aos":"zoom-out",children:[e("h2",{children:"Organizational Chart"}),e("p",{children:"Our Hardworking Team"})]}),a("div",{className:"row",children:[e("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch",children:a("div",{className:"member","data-aos":"fade-up",children:[a("div",{className:"member-img",children:[e("img",{src:"img/homepage/team/team-1.jpg",className:"img-fluid",alt:""}),a("div",{className:"social",children:[e("a",{href:"",children:e("i",{className:"bi bi-twitter"})}),e("a",{href:"",children:e("i",{className:"bi bi-facebook"})}),e("a",{href:"",children:e("i",{className:"bi bi-instagram"})}),e("a",{href:"",children:e("i",{className:"bi bi-linkedin"})})]})]}),a("div",{className:"member-info",children:[e("h4",{children:"Walter White"}),e("span",{children:"Chief Executive Officer"})]})]})}),e("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch",children:a("div",{className:"member","data-aos":"fade-up","data-aos-delay":"100",children:[a("div",{className:"member-img",children:[e("img",{src:"img/homepage/team/team-2.jpg",className:"img-fluid",alt:""}),a("div",{className:"social",children:[e("a",{href:"",children:e("i",{className:"bi bi-twitter"})}),e("a",{href:"",children:e("i",{className:"bi bi-facebook"})}),e("a",{href:"",children:e("i",{className:"bi bi-instagram"})}),e("a",{href:"",children:e("i",{className:"bi bi-linkedin"})})]})]}),a("div",{className:"member-info",children:[e("h4",{children:"Sarah Jhonson"}),e("span",{children:"Product Manager"})]})]})}),e("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch",children:a("div",{className:"member","data-aos":"fade-up","data-aos-delay":"200",children:[a("div",{className:"member-img",children:[e("img",{src:"img/homepage/team/team-3.jpg",className:"img-fluid",alt:""}),a("div",{className:"social",children:[e("a",{href:"",children:e("i",{className:"bi bi-twitter"})}),e("a",{href:"",children:e("i",{className:"bi bi-facebook"})}),e("a",{href:"",children:e("i",{className:"bi bi-instagram"})}),e("a",{href:"",children:e("i",{className:"bi bi-linkedin"})})]})]}),a("div",{className:"member-info",children:[e("h4",{children:"William Anderson"}),e("span",{children:"CTO"})]})]})}),e("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch",children:a("div",{className:"member","data-aos":"fade-up","data-aos-delay":"300",children:[a("div",{className:"member-img",children:[e("img",{src:"img/homepage/team/team-4.jpg",className:"img-fluid",alt:""}),a("div",{className:"social",children:[e("a",{href:"",children:e("i",{className:"bi bi-twitter"})}),e("a",{href:"",children:e("i",{className:"bi bi-facebook"})}),e("a",{href:"",children:e("i",{className:"bi bi-instagram"})}),e("a",{href:"",children:e("i",{className:"bi bi-linkedin"})})]})]}),a("div",{className:"member-info",children:[e("h4",{children:"Amanda Jepson"}),e("span",{children:"Accountant"})]})]})})]})]})}),e("section",{id:"contact",className:"contact",children:a("div",{className:"container",children:[a("div",{className:"section-title","data-aos":"zoom-out",children:[e("h2",{children:"Contact"}),e("p",{children:"Contact Us"})]}),a("div",{className:"row mt-5",children:[e("div",{className:"col-lg-4","data-aos":"fade-right",children:a("div",{className:"info",children:[a("div",{className:"address",children:[e("i",{className:"bi bi-geo-alt"}),e("h4",{children:"Location:"}),e("p",{children:"Catarata Street, Brgy. Poblacion, City of Valencia, Bukidnon"})]}),a("div",{className:"email",children:[e("i",{className:"bi bi-envelope"}),e("h4",{children:"Email:"}),e("p",{children:"pesovalencia@gmail.com"})]}),a("div",{className:"phone",children:[e("i",{className:"bi bi-phone"}),e("h4",{children:"Call:"}),e("p",{children:"00000000000"})]})]})}),e("div",{className:"col-lg-8 mt-5 mt-lg-0","data-aos":"fade-left",children:a("form",{action:"forms/contact.php",method:"post",role:"form",className:"php-email-form",children:[a("div",{className:"row",children:[e("div",{className:"col-md-6 form-group",children:e("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name",required:!0})}),e("div",{className:"col-md-6 form-group mt-3 mt-md-0",children:e("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email",required:!0})})]}),e("div",{className:"form-group mt-3",children:e("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject",required:!0})}),e("div",{className:"form-group mt-3",children:e("textarea",{className:"form-control",name:"message",rows:"5",placeholder:"Message",required:!0})}),a("div",{className:"my-3",children:[e("div",{className:"loading",children:"Loading"}),e("div",{className:"error-message"}),e("div",{className:"sent-message",children:"Your message has been sent. Thank you!"})]}),e("div",{className:"text-center",children:e("button",{type:"submit",children:"Send Message"})})]})})]})]})})]}),e(x,{})]})}export{E as default};