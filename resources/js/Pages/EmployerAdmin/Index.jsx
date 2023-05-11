import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import JobPostingTable from "./Table";
import AddNewJobPosting from "./Add";
import ViewJobPosting from "./View";
import EditJobPosting from "./Edit";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useForm } from '@inertiajs/react';

export default function Index(props) {
    useEffect(() => {
        // console.log(props.employers);
    });
    const [employers, setEmployers] = useState([]);
    const { data, setData, post, put, reset, processing, errors } = useForm();

    useEffect(() => {
        setEmployers(props.employers[0]);
    });

    const addNew = () => {
        setType("add");
    };

    const [type, setType] = useState("default");

    const [jobPostings, setJobPostings] = useState({
        employer_vacancy_detail: {},
        employer_posting_detail: {},
        employer_qualification_requirement: {},
    });

    const editJobPosting = (jobPosting) => {
        employers.employer_vacancy_detail.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_vacancy_detail"] = data;
            }
        });

        employers.employer_posting_detail.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_posting_detail"] = data;
            }
        });

        employers.employer_qualification_requirement.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_qualification_requirement"] = data;
            }
        });
        setType('edit');
    };

    const back = () => {
        setType("default");
    };

    const viewJobPosting = (jobPosting) => {
        employers.employer_vacancy_detail.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_vacancy_detail"] = data;
            }
        });

        employers.employer_posting_detail.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_posting_detail"] = data;
            }
        });

        employers.employer_qualification_requirement.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_qualification_requirement"] = data;
            }
        });

        setType("view");
    };

    const [deleteJobPostingDialog, setDeleteJobPostingDialog] = useState(false);
    

    const confirmDeleteJobPosting = (jobPosting) => {
        setDeleteJobPostingDialog(true);
        setData({"id": jobPosting.id});
    };

    const hideDeleteJobPostingDialog = () => {
        setDeleteJobPostingDialog(false);
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
                severity="success"
                onClick={deleteJobPosting}
            />
        </React.Fragment>
    );

    

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Job Posting
                </h2>
            }
        >
            <Head title="Job Posting" />
            {type == "default" && (
                <div className="card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <JobPostingTable
                        employers={employers.employer_vacancy_detail}
                        addNew={addNew}
                        viewJobPosting={viewJobPosting}
                        editJobPosting={editJobPosting}
                        confirmDeleteJobPosting={confirmDeleteJobPosting}
                    />
                </div>
            )}
            {type == "add" && (
                <AddNewJobPosting props={props} back={back} setType={setType} />
            )}

            {type == "view" && (
                <ViewJobPosting props={props} back={back} setType={setType} jobPostings={jobPostings} />
            )}

{type == "edit" && (
                <EditJobPosting props={props} back={back} setType={setType} jobPostings={jobPostings} />
            )}
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
                            Are you sure you want to change active status?
                        </span>
                </div>
            </Dialog>
        </AuthenticatedLayout>
    );
}
