import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import JobPostingTable from "./Table";
import AddNewJobPosting from "./Add";
import ViewJobPosting from "./View";

export default function Index(props) {
    useEffect(() => {
        // console.log(props.employers);
    });
    const [employers, setEmployers] = useState([]);

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
        // console.log(jobPosting)
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
                    />
                </div>
            )}
            {type == "add" && (
                <AddNewJobPosting props={props} back={back} setType={setType} />
            )}

            {type == "view" && (
                <ViewJobPosting props={props} back={back} setType={setType} jobPostings={jobPostings} />
            )}
        </AuthenticatedLayout>
    );
}
