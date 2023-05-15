import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import { useEffect } from "react";
import { slice } from "lodash";
import Footer from "./Employers/Components/Footer";
import '../App.css';

export default function Welcome(props) {
    const [jobInfo, setJobInfo] = useState();
    const [isCompleted, setIsCompleted] = useState(false);
    const [index, setIndex] = useState(5);
    const initialJobInfo = slice(props.jobs, 0, index);

    function timeAgo(date) {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);
        let interval = Math.floor(seconds / 31536000);
      
        if (interval >= 1) {
          return interval + " year" + (interval === 1 ? "" : "s") + " ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
          return interval + " month" + (interval === 1 ? "" : "s") + " ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
          return interval + " day" + (interval === 1 ? "" : "s") + " ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
          return interval + " hour" + (interval === 1 ? "" : "s") + " ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
          return interval + " minute" + (interval === 1 ? "" : "s") + " ago";
        }
        return Math.floor(seconds) + " second" + (seconds === 1 ? "" : "s") + " ago";
      }

    const loadMore = () => {
        setIndex(index + 5);
        if (index >= initialJobInfo) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }
    };

    const [isMobile, setMobile] = useState(false);

    const showMobile = () => {
        setMobile(!isMobile);
    }
    return (
        <>
        <Head title="PESO-EMIS" />

            <header
                id="header"
                className="fixed-top d-flex align-items-center "
            >
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h1>
                            <a href="/">PESO EMIS</a>
                        </h1>
                    </div>

                    <nav id="navbar" className={`navbar ${isMobile? 'is-mobile':''}`}>
                        <ul className="mobile-list">
                            <li>
                                <a
                                    className="nav-link scrollto active"
                                    href="#hero"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link scrollto"
                                    href="#services"
                                >
                                    Registration Forms
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link scrollto "
                                    href="#jobPosting"
                                >
                                    Job Posts
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#team">
                                    Team
                                </a>
                            </li>
                            
                            <li>
                                <a
                                    className="nav-link scrollto"
                                    href="#contact"
                                >
                                    Contact
                                </a>
                            </li>
                            <Link href={route("login")} className="nav-link">
                                Login
                            </Link>
                        </ul>
                        <i className={`bi ${isMobile ? 'bi-x-lg':'bi-list'} mobile-nav-toggle`} onClick={e => showMobile()}></i>
                    </nav>
                </div>
            </header>
            <section
                id="hero"
                className="d-flex flex-column justify-content-end align-items-center"
            >
                <div
                    id="heroCarousel"
                    data-bs-interval="5000"
                    className="container carousel carousel-fade"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-item active">
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">
                                <span>
                                    Welcome to Valencia City PESO Employment
                                    Management Information System
                                </span>
                            </h2>
                            <p className="animate__animated fanimate__adeInUp">
                                The Public Employment Service Office or PESO is
                                a non-fee charging multi-employment service
                                facility or entity established or accredited
                                pursuant to Republic Act No. 8759 otherwise
                                known as the PESO Act of 1999. To carry out full
                                employment and equality of employment
                                opportunities for all, and for this purpose
                                (PESO, 2014).
                            </p>
                            <a
                                href="#about"
                                className="btn-get-started animate__animated animate__fadeInUp scrollto"
                            >
                                Read More
                            </a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">
                                Implementation of programme/ initiative
                            </h2>
                            <p className="animate__animated animate__fadeInUp">
                            PESO is widely implemented across the country and its 
                            general objectives guarantee the job seekers within its 
                            locality that it will deliver updated information about 
                            employment and other DOLE programmes.
                            Concurrently, its specific objectives are to provide a venue 
                            for employment assistance in every locale and to serve as a 
                            referral or recruitment information centre by providing job vacancy 
                            information. PESO is directed to follow up and monitor the status of 
                            the referred job seekers who have been employed by different stakeholders nationwide.
                            </p>
                            <a
                                href="#about"
                                className="btn-get-started animate__animated animate__fadeInUp scrollto"
                            >
                                Read More
                            </a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">
                                About this Employment Management Information System
                            </h2>
                            <p className="animate__animated animate__fadeInUp">
                                This PESO-EMIS will help both jobseekers and establishment owners
                                to smoothly register and file application to the Public Employment Service Office
                                in the City of Valencia. This will help the Local Government monitor the applicants 
                                registered per month and hopefully raise the employment rate among the city.
                            </p>
                            <a
                                href="#about"
                                className="btn-get-started animate__animated animate__fadeInUp scrollto"
                            >
                                Read More
                            </a>
                        </div>
                    </div>

                    <a
                        className="carousel-control-prev"
                        href="#heroCarousel"
                        role="button"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon bx bx-chevron-left"
                            aria-hidden="true"
                        ></span>
                    </a>

                    <a
                        className="carousel-control-next"
                        href="#heroCarousel"
                        role="button"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon bx bx-chevron-right"
                            aria-hidden="true"
                        ></span>
                    </a>
                </div>

                <svg
                    className="hero-waves"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28 "
                    preserveAspectRatio="none"
                >
                    <defs>
                        <path
                            id="wave-path"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        ></path>
                    </defs>
                    <g className="wave1">
                        <use
                            xlink:href="#wave-path"
                            x="50"
                            y="3"
                            fill="rgba(255,255,255, .1)"
                        />
                    </g>
                    <g className="wave2">
                        <use
                            xlink:href="#wave-path"
                            x="50"
                            y="0"
                            fill="rgba(255,255,255, .2)"
                        />
                    </g>
                    <g className="wave3">
                        <use
                            xlink:href="#wave-path"
                            x="50"
                            y="9"
                            fill="#fff"
                        />
                    </g>
                </svg>
            </section>
            <main id="main">
                <section id="about" className="about">
                    <div className="container">
                        <div className="section-title" data-aos="zoom-out">
                            <h2>About</h2>
                            <p>Who we are</p>
                        </div>

                        <div className="row content" data-aos="fade-up">
                            <div className="col-lg-6">
                                <p>
                                    The Valencia City Public Employment Service
                                    Office (PESO) is an office that serves the
                                    public in the employment sector.
                                </p>
                                <p>
                                    The PESO aims to ensure prompt and efficient
                                    delivery of employment facilitation services
                                    as well as to provide timely information on
                                    labor market and DOLE Programs.
                                </p>
                                
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0">
                                <p>
                                PESO is a free multi-employment service facility managed by Local Government Units (LGUs) and 
                                State Universities and Colleges (SUCs) that upholds equal employment opportunities to every individual covered in the locality.
                                </p>
                                <a href="#" className="btn-learn-more">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="features">
                    <div className="container">
                        <ul className="nav nav-tabs row d-flex">
                            <li className="nav-item col-3" data-aos="zoom-in">
                                <a
                                    className="nav-link active show"
                                    data-bs-toggle="tab"
                                    href="#tab-1"
                                >
                                    <i className="ri-gps-line"></i>
                                    <h4 className="d-none d-lg-block">
                                        PESO Programs
                                    </h4>
                                </a>
                            </li>
                            <li
                                className="nav-item col-3"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                            >
                                <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    href="#tab-2"
                                >
                                    <i className="ri-body-scan-line"></i>
                                    <h4 className="d-none d-lg-block">
                                       Beneficiaries
                                    </h4>
                                </a>
                            </li>
                            <li
                                className="nav-item col-3"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    href="#tab-3"
                                >
                                    <i className="ri-sun-line"></i>
                                    <h4 className="d-none d-lg-block">
                                        VISION
                                    </h4>
                                </a>
                            </li>
                            <li
                                className="nav-item col-3"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    href="#tab-4"
                                >
                                    <i className="ri-store-line"></i>
                                    <h4 className="d-none d-lg-block">
                                        MISSION
                                    </h4>
                                </a>
                            </li>
                        </ul>

                        <div className="tab-content" data-aos="fade-up">
                            <div className="tab-pane active show" id="tab-1">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <h3>Programs Implemented:</h3>
                                        <ul>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                Special Program for the
                                                Employment of Students (SPES)
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                Job Fairs
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                PhilJobnet / PESO Employment
                                                Information System (PEIS)
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                National Skills Registry Program
                                                (NSRP)
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                DOLE Government Internship
                                                Program (DOLE-GIP)
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                Tulong Pangkabuhayan para sa
                                                Ating Disadvantaged Workers
                                                (TUPAD)
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                DOLE Integrated Livelihood and
                                                Emergency Employment Program
                                                (DILEEP)
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                JOBSTART
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                Pre-Employment Orientation
                                                Seminar (PAOS)
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img
                                            src="img/homepage/features-1.png"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-2">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <h3>Who does the PESO cater to?</h3>
                                        <ul>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                Jobseekers
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                Employers
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                Students
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                Out-of-School Yout (OSY)
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                Migrant Workers
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                Persons with Disabilities (PWDs)
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                Returning OFWs
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                Displaced Workers
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                Researchers and Planners
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                Senior Citizens
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                Other PESOs and Government
                                                Entities
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img
                                            src="img/homepage/features-2.png"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-3">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <p>
                                        To facilitate equal employment opportunities to the City’s 
                                        constituents through Job Matching and Coaching, employability 
                                        enhancement and referrals for livelihood or training, and promotion 
                                        of industrial peace through tripartism.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                To provide Labor Market Information to the clients 
                                                (Job Seekers, Employers, OFW, Students, Displaced Workers, 
                                                Unemployed, Seeking change in career, etc.)
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                To maintain a fresh, up to date, skills registry system of 
                                                all households in the City.
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                To provide employment facilitation services where people 
                                                can explore various employment options.
                                            </li>
                                        </ul>
                                     
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img
                                            src="img/homepage/features-3.png"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-4">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <p>
                                            
                                        </p>
                                        <p className="fst-italic">
                                            
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                    Ensure the speedy, equitable and efficient delivery of 
                                                    employment services delivery to maximize the impact of various 
                                                    employment programs and services at the grassroots level.
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                    To maintain a fresh, up to date, skills registry system of all 
                                                    households in the City.
                                            </li>
                                            <li>
                                                <i className="ri-check-double-line"></i>
                                                    To maintain a fresh, up to date, skills registry system of all 
                                                    households in the City.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img
                                            src="img/homepage/features-4.png"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                

                <section id="services" className="services">
                    <div className="container">
                        <div className="section-title" data-aos="zoom-out">
                            <h2>Services</h2>
                            <p>REGISTRATION FORMS</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className="icon-box"
                                    data-aos="zoom-in-left"
                                >
                                    <div className="icon">
                                        <i
                                            className="bi bi-briefcase"
                                            style={{ color: "#ff689b" }}
                                        ></i>
                                    </div>
                                    <h4 className="title">
                                        <Link
                                            href={route("employers.index")}
                                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Employers Form
                                        </Link>
                                    </h4>
                                    <p className="description">
                                        Registation Form for Establishments, Please fill out the form correctly and honestly.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                                <div
                                    className="icon-box"
                                    data-aos="zoom-in-left"
                                    data-aos-delay="100"
                                >
                                    <div className="icon">
                                        <i
                                            className="bi bi-book"
                                            style={{ color: "#e9bf06" }}
                                        ></i>
                                    </div>
                                    <h4 className="title">
                                        <Link
                                            href={route("applicants.index")}
                                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Applicants Form
                                        </Link>
                                    </h4>
                                    <p className="description">
                                    Registation Form for Jobseekers, Please fill out the form correctly and honestly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="jobPosting" className="jobPosting">
                    <div className="container">
                        <div className="section-title" data-aos="zoom-out">
                            <h2>Job Posts</h2>
                            <p>Check out the latest Job Postings</p>
                        </div>
                        <div class="row job-postings">
                            <div
                                className={`job-posts ${
                                    jobInfo ? "basis-2/4 showJobInfo" : ""
                                }`}
                            >
                                {initialJobInfo.map(
                                    (job) =>
                                            <div
                                                class="card"
                                                onClick={() => {
                                                    setJobInfo(job);
                                                }}
                                            >
                                                <div class="card-body">
                                                    <h5
                                                        class="card-title"
                                                        style={{
                                                            backgroundColor:
                                                                "rgb(157, 198, 218)",
                                                        }}
                                                    >
                                                        {
                                                            job.employer
                                                                .establishment_accronym
                                                        }
                                                    </h5>
                                                    <div class="card-text">
                                                        <p className="text-md font-bold py-1">
                                                            {job.position_title}
                                                        </p>
                                                        <p className="text-sm py-1">
                                                            {
                                                                job.employer
                                                                    .establishment_name
                                                            }
                                                        </p>
                                                        <p
                                                            className="text-sm py-1"
                                                            style={{
                                                                textTransform:
                                                                    "capitalize",
                                                            }}
                                                        >
                                                            {job.place_of_work}
                                                        </p>
                                                        <p className="text-sm py-1">
                                                            { 
                                                            timeAgo(job.created_at)
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                )}
                            </div>
                            {jobInfo && (
                                <div
                                    className={`job-post-description basis-2/4 ${
                                        jobInfo ? "basis-2/4" : ""
                                    }`}
                                >
                                    <div className="desc-title">
                                        <h1 className="text-xl font-bold mb-3">
                                            {jobInfo.position_title}
                                        </h1>
                                        <div className="card mb-3">
                                            <div class="card-body">
                                                <h5
                                                    class="card-title"
                                                    style={{
                                                        backgroundColor:
                                                            "rgb(157, 198, 218)",
                                                    }}
                                                >
                                                    {
                                                        jobInfo.employer
                                                            .establishment_accronym
                                                    }
                                                </h5>
                                                <div class="card-text">
                                                    <p className="text-sm py-1">
                                                        {jobInfo.position_title}
                                                    </p>
                                                    <p
                                                        className="text-sm py-1"
                                                        style={{
                                                            textTransform:
                                                                "capitalize",
                                                        }}
                                                    >
                                                        {jobInfo.place_of_work}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                            className="cursor !my-3 inline-flex gap-2 items-center transition hover:bg-rose-400 my-5 bg-rose-500 p-3 rounded text-white"
                                            href={`mailto:${jobInfo.employer.employer_establishment_contact_detail.email_address}`}
                                        >
                                            <i className="pi pi-envelope "></i>
                                            Email your application
                                        </a>
                                        <p className="my-2">
                                            {
                                                timeAgo(jobInfo.created_at)
                                            }
                                        </p>
                                        <h4 className="text-md font-bold my-3">
                                            Qualifications:
                                        </h4>
                                        <ul
                                            style={{
                                                listStyleType: "disc",
                                                marginLeft: "1rem",
                                            }}
                                            className=""
                                        >
                                            <li>{
                                                    jobInfo.employer.employer_qualification_requirement[jobInfo.id-1].other_qualification
                                                }</li>
                                        </ul>
                                        <p className="my-2">
                                            Salary: {parseFloat(jobInfo.salary).toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })} per month
                                        </p>
                                        <p className="text-md font-bold my-3">
                                            Experience: {
                                                    jobInfo.employer.employer_qualification_requirement[jobInfo.id-1].work_of_experience
                                                }
                                        </p>
                                        <ul
                                            style={{
                                                listStyleType: "disc",
                                                marginLeft: "1rem",
                                            }}
                                            className=""
                                        >
                                            <li>
                                                {
                                                    jobInfo.employer.employer_qualification_requirement[jobInfo.id-1].other_qualification
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        {isCompleted ? (
                        //     <button 
                        //     onClick={loadMore}
                        //     className="cursor transition hover:bg-stone-400 my-5 bg-stone-500 p-3 rounded text-white">
                        //     See Mores
                        // </button>
                        <span></span>
                        ) : (
                            initialJobInfo.length > 5 &&  <button 
                            onClick={loadMore}
                            className="cursor transition hover:bg-stone-400 my-5 bg-stone-500 p-3 rounded text-white">
                            See More
                        </button>
                        )}
                        
                    </div>
                </section>

                <section id="faq" className="faq">
                    <div className="container">
                        <div className="section-title" data-aos="zoom-out">
                            <h2>F.A.Q</h2>
                            <p>Frequently Asked Questions</p>
                        </div>

                        <ul className="faq-list">
                            <li>
                                <div
                                    data-bs-toggle="collapse"
                                    className="collapsed question"
                                    href="#faq1"
                                >
                                    Non consectetur a erat nam at lectus urna
                                    duis?
                                    <i className="bi bi-chevron-down icon-show"></i>
                                    <i className="bi bi-chevron-up icon-close"></i>
                                </div>
                                <div
                                    id="faq1"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Feugiat pretium nibh ipsum consequat.
                                        Tempus iaculis urna id volutpat lacus
                                        laoreet non curabitur gravida. Venenatis
                                        lectus magna fringilla urna porttitor
                                        rhoncus dolor purus non.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div
                                    data-bs-toggle="collapse"
                                    href="#faq2"
                                    className="collapsed question"
                                >
                                    Feugiat scelerisque varius morbi enim nunc
                                    faucibus a pellentesque?
                                    <i className="bi bi-chevron-down icon-show"></i>
                                    <i className="bi bi-chevron-up icon-close"></i>
                                </div>
                                <div
                                    id="faq2"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Dolor sit amet consectetur adipiscing
                                        elit pellentesque habitant morbi. Id
                                        interdum velit laoreet id donec
                                        ultrices. Fringilla phasellus faucibus
                                        scelerisque eleifend donec pretium. Est
                                        pellentesque elit ullamcorper dignissim.
                                        Mauris ultrices eros in cursus turpis
                                        massa tincidunt dui.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div
                                    data-bs-toggle="collapse"
                                    href="#faq3"
                                    className="collapsed question"
                                >
                                    Dolor sit amet consectetur adipiscing elit
                                    pellentesque habitant morbi?
                                    <i className="bi bi-chevron-down icon-show"></i>
                                    <i className="bi bi-chevron-up icon-close"></i>
                                </div>
                                <div
                                    id="faq3"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Eleifend mi in nulla posuere
                                        sollicitudin aliquam ultrices sagittis
                                        orci. Faucibus pulvinar elementum
                                        integer enim. Sem nulla pharetra diam
                                        sit amet nisl suscipit. Rutrum tellus
                                        pellentesque eu tincidunt. Lectus urna
                                        duis convallis convallis tellus. Urna
                                        molestie at elementum eu facilisis sed
                                        odio morbi quis
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div
                                    data-bs-toggle="collapse"
                                    href="#faq4"
                                    className="collapsed question"
                                >
                                    Ac odio tempor orci dapibus. Aliquam
                                    eleifend mi in nulla?
                                    <i className="bi bi-chevron-down icon-show"></i>
                                    <i className="bi bi-chevron-up icon-close"></i>
                                </div>
                                <div
                                    id="faq4"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Dolor sit amet consectetur adipiscing
                                        elit pellentesque habitant morbi. Id
                                        interdum velit laoreet id donec
                                        ultrices. Fringilla phasellus faucibus
                                        scelerisque eleifend donec pretium. Est
                                        pellentesque elit ullamcorper dignissim.
                                        Mauris ultrices eros in cursus turpis
                                        massa tincidunt dui.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div
                                    data-bs-toggle="collapse"
                                    href="#faq5"
                                    className="collapsed question"
                                >
                                    Tempus quam pellentesque nec nam aliquam sem
                                    et tortor consequat?
                                    <i className="bi bi-chevron-down icon-show"></i>
                                    <i className="bi bi-chevron-up icon-close"></i>
                                </div>
                                <div
                                    id="faq5"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Molestie a iaculis at erat pellentesque
                                        adipiscing commodo. Dignissim
                                        suspendisse in est ante in. Nunc vel
                                        risus commodo viverra maecenas accumsan.
                                        Sit amet nisl suscipit adipiscing
                                        bibendum est. Purus gravida quis blandit
                                        turpis cursus in
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div
                                    data-bs-toggle="collapse"
                                    href="#faq6"
                                    className="collapsed question"
                                >
                                    Tortor vitae purus faucibus ornare. Varius
                                    vel pharetra vel turpis nunc eget lorem
                                    dolor?
                                    <i className="bi bi-chevron-down icon-show"></i>
                                    <i className="bi bi-chevron-up icon-close"></i>
                                </div>
                                <div
                                    id="faq6"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Laoreet sit amet cursus sit amet dictum
                                        sit amet justo. Mauris vitae ultricies
                                        leo integer malesuada nunc vel.
                                        Tincidunt eget nullam non nisi est sit
                                        amet. Turpis nunc eget lorem dolor sed.
                                        Ut venenatis tellus in metus vulputate
                                        eu scelerisque. Pellentesque diam
                                        volutpat commodo sed egestas egestas
                                        fringilla phasellus faucibus. Nibh
                                        tellus molestie nunc non blandit massa
                                        enim nec.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section id="team" className="team">
                    <div className="container">
                        <div className="section-title" data-aos="zoom-out">
                            <h2>Organizational Chart</h2>
                            <p>Our Hardworking Team</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up">
                                    <div className="member-img">
                                        <img
                                            src="img/homepage/team/team-1.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div
                                    className="member"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    <div className="member-img">
                                        <img
                                            src="img/homepage/team/team-2.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Product Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div
                                    className="member"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <div className="member-img">
                                        <img
                                            src="img/homepage/team/team-3.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div
                                    className="member"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <div className="member-img">
                                        <img
                                            src="img/homepage/team/team-4.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact">
                    <div className="container">
                        <div className="section-title" data-aos="zoom-out">
                            <h2>Contact</h2>
                            <p>Contact Us</p>
                        </div>

                        <div className="row mt-5">
                            <div className="col-lg-4" data-aos="fade-right">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p>
                                            Catarata Street, Brgy. Poblacion,
                                            City of Valencia, Bukidnon
                                        </p>
                                    </div>

                                    <div className="email">
                                        <i className="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>pesovalencia@gmail.com</p>
                                    </div>

                                    <div className="phone">
                                        <i className="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p>00000000000</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-lg-8 mt-5 mt-lg-0"
                                data-aos="fade-left"
                            >
                                <form
                                    action="forms/contact.php"
                                    method="post"
                                    role="form"
                                    className="php-email-form"
                                >
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Your Email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            id="subject"
                                            placeholder="Subject"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows="5"
                                            placeholder="Message"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">
                                            Your message has been sent. Thank
                                            you!
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
