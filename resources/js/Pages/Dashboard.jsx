import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Applicants from "./Admin/Applicants/Index";

export default function Dashboard(props) {
    const [employers, setEmployers] = useState({});
    useEffect(() => {
        setEmployers(props.employers);
        console.log(props);
    });
    const [type, setType] = useState("default");
    const [jobPosts, setJobPosts] = useState();

    const fetchEmployerJobPosting = (employer_id) => {
        return fetch(route("get-all-employer-job_posting", employer_id))
            .then((response) => response.json())
            .then((data) => {
                setType("show_posting_details");
                setJobPosts(data.employer_vacancy_detail);
                console.log(data.employer_vacancy_detail);
            });
    };
    const showEmployerPostingDetails = (cardData) => {
        fetchEmployerJobPosting(cardData.id);
    };

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

    const back = () => {
        setType('default');
    }

    const renderHeader = () => {
        return (
            <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
                <h4 className="m-0">Employers</h4>
                <div className="flex justify-between gap-2">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText
                            value={globalFilterValue}
                            onChange={onGlobalFilterChange}
                            placeholder="Keyword Search"
                        />
                    </span>
                    <Button
                        icon="pi pi-arrow-left"
                        className="mr-2"
                        label="Back"
                        onClick={() => back()}
                    />
                </div>
            </div>
        );
    };

    const [applicantMatches, setApplicantMatches] = useState([]);

    const fetchMatchingApplicants = (jobPostData) => {
        return fetch(route("get-matching-applicants", [jobPostData.position_title, jobPostData.salary]))
            .then((response) => response.json())
            .then((data) => {
                setType("show_applicants");
                // setJobPosts(data.employer_vacancy_detail);
                setApplicantMatches(data);
            });

        console.log(jobPostData);
    };

    const viewMatchingApplicants = (rowData) => {
        fetchMatchingApplicants(rowData);
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-eye"
                    rounded
                    outlined
                    className="mr-2"
                    onClick={() => viewMatchingApplicants(rowData)}
                />
                <Button
                    icon="pi pi-check"
                    rounded
                    outlined
                    severity="success"
                    // onClick={() => confirmDeleteEmployer(rowData)}
                />
            </React.Fragment>
        );
    };

    const header = renderHeader();

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">
                        {type == "default" && (
                            <div
                                className="flex flex-wrap"
                                style={{ gap: "1rem" }}
                            >
                                {props.employers.map((employer) => (
                                    <a
                                        class="relative hover:bg-stone-200 transition flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
                                        href="#"
                                        style={{
                                            "flex-basis":
                                                "calc(calc(100% / 4) - 1rem)",
                                        }}
                                        onClick={() =>
                                            showEmployerPostingDetails(employer)
                                        }
                                    >
                                        <div class="pt-4 text-gray-500">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAs0lEQVR4nO2XQQoCMRAE6+TXXR+q32gR9hQiJOKaxK2COWZJb89ME3jPBbgBDyCD6w5s+5262SYQkKKunwiZwYkU9bpTN5m0uhl94Sik4BSOtHDE2TSe/+rHFIKO1LG1VpqR/Mv6jULQkRiImOzrrN8WFIKO1BkdfDHZC0b/+ehIget3xxzBHKnjjKw0IzFHMBBja+HDap2t1YJC0JETt1YOfuFFIRV0BFtrrRn5xbJgWSFPw22Fit98xUkAAAAASUVORK5CYII=" />

                                            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                                                {
                                                    employer.establishment_accronym
                                                }
                                            </h3>

                                            <p class="mt-2 hidden text-sm sm:block">
                                                {employer.establishment_name}
                                            </p>
                                        </div>

                                        <span class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
                                            {
                                                employer.employer_vacancy_detail
                                                    .length
                                            }
                                        </span>
                                    </a>
                                ))}
                            </div>
                        )}
                        {type == "show_posting_details" && (
                            <DataTable
                                value={jobPosts}
                                paginator
                                header={header}
                                rows={10}
                                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                                rowsPerPageOptions={[10, 25, 50]}
                                dataKey="id"
                                filters={filters}
                                filterDisplay="menu"
                                emptyMessage="No customers found."
                                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                            >
                                <Column
                                    field="position_title"
                                    header="Job Title"
                                    sortable
                                    filter
                                    filterPlaceholder="Search by name"
                                    style={{ minWidth: "14rem" }}
                                />
                                <Column
                                    field="place_of_work"
                                    header="Place of Work"
                                    sortable
                                    filter
                                    filterPlaceholder="Search by name"
                                    style={{ minWidth: "14rem" }}
                                />
                                <Column
                                    field="job_description"
                                    header="Description"
                                    sortable
                                    filter
                                    filterPlaceholder="Search by name"
                                    style={{ minWidth: "14rem" }}
                                />
                                <Column
                                    field="salary"
                                    header="Salary"
                                    sortable
                                    filter
                                    filterPlaceholder="Search by name"
                                    style={{ minWidth: "14rem" }}
                                />
                                <Column
                                    field="vacancy_count"
                                    header="Vacancy"
                                    sortable
                                    filter
                                    filterPlaceholder="Search by name"
                                    style={{ minWidth: "14rem" }}
                                />
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
                        )}
                        {
                            type == 'show_applicants' && <>
                             <Button
                        icon="pi pi-arrow-left"
                        className="mr-2"
                        label="Back"
                        onClick={() => setType('show_posting_details')}
                    />
                            <Applicants applicants={applicantMatches} auth={props.auth} isMatches={true} />
                            </>
                        }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
