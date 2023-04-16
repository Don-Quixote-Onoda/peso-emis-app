import React, { useState, useEffect } from "react";

import EstablishmentDetails from "./Pages/EstablishmentDetails";
import EstablishmentContactDetails from "./Pages/EstablishmentContactDetails";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import AddNewJobPosting from "./JobPosting/Add";
import EditJobPosting from "./JobPosting/Edit";
import ViewJobPosting from "./JobPosting/View";
import { useForm } from '@inertiajs/react';
import { Dialog } from "primereact/dialog";

export default function EditApplicant({ employer, back, setType }) {
    

    const [postingDetails, setPostingDetails] = useState();

    const [globalFilterValue, setGlobalFilterValue] = useState("");

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const [editType, setEditType] = useState('default');
    const backEdit = () => {
        setEditType('default');
    }

    const [deleteJobPostingDialog, setDeleteJobPostingDialog] = useState(false);

    useEffect(() => {
        setPostingDetails(employer.employer_vacancy_detail);
        console.log(employer.employer_vacancy_detail)
    })
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters["global"].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const deleteJobPosting = () => {
        post(route('delete-job-posting'), {
            forceFormData: true,
            onSuccess: () =>{
                console.log('success');
                reset();
                setType('default');
                setDeleteJobPostingDialog(false);
            },
            onError: () => {
                // console.log(errors);
            },
        });
    }
    const hideDeleteJobPostingDialog = () => {
        setDeleteJobPostingDialog(false);
    };

    const confirmDeleteJobPosting = (jobPosting) => {
        setDeleteJobPostingDialog(true);
        setData({"id": jobPosting.id});
    };

    const deleteJobPostingDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideDeleteJobPostingDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={confirmDeleteJobPosting}
            />
        </React.Fragment>
    );

    const [jobPostings, setJobPostings] = useState({
        employer_vacancy_detail: {},
        employer_posting_detail: {},
        employer_qualification_requirement: {},
    });

    const editJobPosting = (jobPosting) => {
        employer.employer_vacancy_detail.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_vacancy_detail"] = data;
            }
        });

        employer.employer_posting_detail.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_posting_detail"] = data;
            }
        });

        employer.employer_qualification_requirement.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_qualification_requirement"] = data;
            }
        });
        setEditType('edit');
    };

    

    const viewJobPosting = (jobPosting) => {
        employer.employer_vacancy_detail.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_vacancy_detail"] = data;
            }
        });

        employer.employer_posting_detail.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_posting_detail"] = data;
            }
        });

        employer.employer_qualification_requirement.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_qualification_requirement"] = data;
            }
        });

        setEditType('view');

    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-eye"
                    rounded
                    outlined
                    className="mr-2"
                    onClick={() => viewJobPosting(rowData)}
                />
                <Button
                    icon="pi pi-pencil"
                    rounded
                    outlined
                    className="mr-2"
                    onClick={() => editJobPosting(rowData)}
                />
                <Button
                    icon="pi pi-trash"
                    rounded
                    outlined
                    severity="danger"
                    onClick={() => confirmDeleteJobPosting(rowData)}
                />
            </React.Fragment>
        );
    };

    const addNew = () => {
        setEditType('add');
    }

    const renderHeader = () => {
        return (
            <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
                <h4 className="m-0">Job Posting</h4>
                <div className="flex gap-2">
                    <Button
                        label="New"
                        icon="pi pi-plus"
                        className="p-button-help self-end"
                        onClick={addNew}
                    />
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText
                            value={globalFilterValue}
                            onChange={onGlobalFilterChange}
                            placeholder="Keyword Search"
                        />
                    </span>
                </div>
            </div>
        );
    };

    const header = renderHeader();
    return (
        <>
        <EstablishmentDetails employer={employer} back={back} setType={setType}  />
        <EstablishmentContactDetails employer={employer.employer_establishment_contact_detail} back={back} setType={setType}  />
        {
            editType == 'default' && <DataTable
            value={postingDetails}
            paginator
            header={header}
            rows={10}
            className="mt-5"
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
                header="Position Title"
                sortable
                filter
                filterPlaceholder="Search by name"
                style={{ minWidth: "14rem" }}
            />
            
            <Column
                field="nature_of_work"
                header="Nature of Work"
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
                field="salary"
                header="Salary"
                sortable
                filter
                filterPlaceholder="Search by name"
                style={{ minWidth: "14rem" }}
            />
            <Column
                field="vacancy_count"
                header="Vacancy Count"
                sortable
                filter
                filterPlaceholder="Search by name"
                style={{ minWidth: "14rem" }}
            />
            <Column
                field="job_description"
                header="Job Description"
                sortable
                filter
                filterPlaceholder="Search by name"
                style={{ minWidth: "14rem" }}
            />
            <Column
    body={actionBodyTemplate}
    exportable={false}
    style={{ minWidth: "10rem", display: "flex", gap: "0.5rem" }}
></Column>
        </DataTable>
        }
        {
                editType == 'add' && <AddNewJobPosting backEdit={backEdit}/>
            }
            {
                editType == 'view' && <ViewJobPosting backEdit={backEdit} jobPostings={jobPostings} />
            }

{
                editType == 'edit' && <EditJobPosting backEdit={backEdit} jobPostings={jobPostings}/>
            }
            <Dialog
                visible={deleteJobPostingDialog}
                style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deleteJobPostingDialogFooter}
                onHide={hideDeleteJobPostingDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                        <span>
                            Are you sure you want to delete <b></b>?
                        </span>
                </div>
            </Dialog>
        </>
    );
}
