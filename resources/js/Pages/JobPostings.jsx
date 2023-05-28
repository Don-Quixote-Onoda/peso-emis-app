import { Link, Head } from "@inertiajs/react";
import { slice } from "lodash";
import Footer from "./Employers/Components/Footer";
import '../App.css';
import { Dialog } from "primereact/dialog";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import React, { useState, useEffect } from "react";

export default function Welcome(props) {
    const [jobInfo, setJobInfo] = useState();
    const [isCompleted, setIsCompleted] = useState(false);
    const [index, setIndex] = useState(5);
    const [initialJobInfo, setInitialJobInfo] = useState([]);
    const totalJobs = props.jobs.length;
    const [showDialog, setShowDialog] = useState(false);

    const [globalFilterValue, setGlobalFilterValue] = useState("");

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters["global"].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText
                        value={globalFilterValue}
                        onChange={onGlobalFilterChange}
                        placeholder="Keyword Search"
                    />
                </span>
            </div>
        );
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-eye"
                    rounded
                    outlined
                    className="mr-2"
                    onClick={() => handleShowDialog(rowData)}
                />
            </React.Fragment>
        );
    };

    const header = renderHeader();
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

      useState(() => {
        setInitialJobInfo(props.jobs.reverse());

      })

      const searchJobPosts = (e) => {
        let searchResults = props.jobs.filter(job => job.position_title.toLowerCase().includes(e.target.value.toLowerCase()));
       setInitialJobInfo(searchResults);
      }

      const handleShowDialog = (data) => {
        setJobInfo(data);
        console.log(data);
        setShowDialog(true);
      }


    const loadMore = () => {
       
            setInitialJobInfo(slice(props.jobs, 0, index+1));
            setIndex(index+1);
    };

    const [isMobile, setMobile] = useState(false);

    const showMobile = () => {
        setMobile(!isMobile);
    }

    const monetaryBodyFormat = (rowData) => {
        const formattedAmount = new Intl.NumberFormat('en-PH', {
            style: 'currency',
            currency: 'PHP'
          }).format(rowData.salary);
        return (
            <span>{formattedAmount}</span>
        )
    }

    const qualificationRequirementBody = (rowData) => {

          let qualifications = rowData.employer.employer_qualification_requirement.filter(data=> {
          
            return rowData.id === data.id;
            
          })
        return (
            <span>{qualifications[0].other_qualification}</span>
        )
    }
    
    const handeDatePosted = (rowData) => {

        return (
            <span>{timeAgo(rowData.created_at)}</span>
        )
  }
    

    const experienceNeededBody = (rowData) => {
        let qualifications = rowData.employer.employer_qualification_requirement.filter(data=> {
          
            return rowData.id === data.id;
            
          })
        return (
            <span>{qualifications[0].work_of_experience}</span>
        )
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
           
            <main id="main">
              

                <section id="jobPosting" className="jobPosting">
                    <div className="container">
                        <div className="section-title flex justify-content-between" data-aos="zoom-out">
                            <div>
                            <h2>Job Posts</h2>
                            <p>Check out the latest Job Postings</p>
                            </div>
                            <input type="text" name="" id="" className="w-80 form-control rounded-pill mr-1 pr-5" onChange={(e) => searchJobPosts(e)} placeholder="Search job posts" />
                        </div>
                        
                        <div className="card  mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <DataTable value={initialJobInfo} paginator header={header} rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    rowsPerPageOptions={[10, 25, 50]} dataKey="id" 
                    filters={filters} filterDisplay="menu"
                    emptyMessage="No customers found." currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                <Column field="position_title" header="Job Title" style={{ minWidth: '10rem' }} />
                <Column field="employer.establishment_name" header="Establishment Name" style={{ minWidth: '14rem' }} />
                <Column field="salary" header="Salary"  body={monetaryBodyFormat} style={{ minWidth: '5rem' }} />
                <Column field="total_work_force" body={qualificationRequirementBody} header="Qualifications" style={{ minWidth: '14rem' }} />
                <Column field="total_work_force" body={experienceNeededBody} header="Experience Needed" style={{ minWidth: '14rem' }} />
                <Column field="created_at" body={handeDatePosted} header="Posted Time" style={{ minWidth: '14rem' }} />
                <Column
                    body={actionBodyTemplate}
                    exportable={false}
                    style={{
                        minWidth: "12rem",
                        display: "flex",
                        gap: "0.5rem",
                    }}
                ></Column>
            </DataTable>
            <Dialog
                            header="Job Information"
                            visible={showDialog}
                            style={{ width: "50vw" }}
                            onHide={() => setShowDialog(false)}
                        >
                           
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
                                        
                                        <p className="my-2">
                                            Salary: {parseFloat(jobInfo.salary).toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })} per month
                                        </p>
                                       
                                    </div>
                                </div>
                            )}
                           
                        </Dialog>
        </div>
                                
                        
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
