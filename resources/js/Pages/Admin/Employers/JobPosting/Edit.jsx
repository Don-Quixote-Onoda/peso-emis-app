import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { MultiSelect } from "primereact/multiselect";
import { Slider } from "primereact/slider";
import { Tag } from "primereact/tag";
import { RadioButton } from "primereact/radiobutton";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';


export default function EditJobPosting({props, backEdit, setType, viewJobPosting, jobPostings}) {

    useEffect(() => {
        console.log(jobPostings);
    },[])
    
    const handleDisabilityAccepted = (value, e) => {
        if(e.target.checked && !data.disabilityAccepted.includes(value)) {
    
            setData('disabilityAccepted', data.disabilityAccepted + ", " + value);
    
        }
        else {
            setData('disabilityAccepted', data.disabilityAccepted.replace(value,''));
        }
        // if(value === 'input') 
        //     setDisabilityAccepted(disabilityAccepted + " " + e.target.value);
    };

    const [qualificationRequirementNatureOfWork, setQualificationRequirementNatureOfWork] = useSessionStorage(
        "",
        "qualificationRequirementNatureOfWork"
    );

    const [isSubmitted, setSubmitted] = useState(false);

    
    

    const handleNatureOfWork = (value, e) => {
        if(e.target.checked && !data.natureOfWork.includes(value)) {
            setData('natureOfWork', data.natureOfWork + ", " + value);
        }
        else {
            setData('natureOfWork', data.natureOfWork.replace(value,''));
        }
        
};

const handleQualificationRequirementNatureOfWork = (value, e) => {
    if(e.target.checked && !data.qualificationRequirementNatureOfWork.includes(value)) {

        setData('qualificationRequirementNatureOfWork', data.qualificationRequirementNatureOfWork + ", " + value);

    }
    else {
        setData('qualificationRequirementNatureOfWork', data.qualificationRequirementNatureOfWork.replace(value,''));
    }

};

const { data, setData, post, put, reset, processing, errors } = useForm({
        positionTitle: jobPostings.employer_vacancy_detail.position_title,
        jobDescription: jobPostings.employer_vacancy_detail.job_description,
        natureOfWork: jobPostings.employer_vacancy_detail.nature_of_work,
        placeOfWork: jobPostings.employer_vacancy_detail.place_of_work,
        salary: jobPostings.employer_vacancy_detail.salary,
        vacancyCount: jobPostings.employer_vacancy_detail.vacancy_count,
        workExperience: jobPostings.employer_qualification_requirement.work_of_experience,
        religion: jobPostings.employer_qualification_requirement.religion,

        otherQualifications: jobPostings.employer_qualification_requirement.other_qualification,
        license: jobPostings.employer_qualification_requirement.license,
        certification: jobPostings.employer_qualification_requirement.certification,
        qualificationRequirementNatureOfWork: jobPostings.employer_qualification_requirement.nature_of_work,
        sex: jobPostings.employer_qualification_requirement.sex,
        civilStatus: jobPostings.employer_qualification_requirement.civil_status,
        educationalLevel: jobPostings.employer_qualification_requirement.educational_level,
        courseOrMajor: jobPostings.employer_qualification_requirement.course_or_major,
        eligibility: jobPostings.employer_qualification_requirement.eligibility,
        languageOrDialectSpoken: jobPostings.employer_qualification_requirement.language_or_dialect,
        preferredResidence: jobPostings.employer_qualification_requirement.preferred_residence,
        isAcceptDisability: jobPostings.employer_qualification_requirement.is_accept_disability,
        disabilityAccepted: jobPostings.employer_qualification_requirement.disability_type,
        postingDate: jobPostings.employer_posting_detail.posting_date,
        validUntil: jobPostings.employer_posting_detail.valid_until,
        id: jobPostings.employer_posting_detail.id
});

const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if(
        data.positionTitle &&
        data.jobDescription && 
        data.natureOfWork && 
        data.placeOfWork && 
        data.salary && 
        data.vacancyCount &&
        data.workExperience && 
        data.sex && 
        data.isAcceptDisability &&
        data.qualificationRequirementNatureOfWork && 
        data.religion && 
        data.civilStatus && 
        data.postingDate && 
        data.validUntil
    )
     {
        post(route('update-job-posting'), {
            forceFormData: true,
            onSuccess: () =>{
                console.log('success');
                sessionStorage.clear(); 
                reset();
                setSubmitted(false);
                setType('default');
            },
            onError: () => {
                // console.log(errors);
            },
        });
        console.log(data);
     }

    
};

    return (
        <div className="card my-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <form onSubmit={onSubmit}>
            <div class="step-3">
                <div class="card rounded-0 border-0">
                    <div class=" bg-light mb-2 font-bold mt-10 flex justify-between">
                        <h4 class="card-title fw-bold">
                            III. VACANCY DETAILS
                        </h4>
                        <Button
                            label="Back"
                            icon="pi pi-arrow-left"
                            className="p-button-help self-end"
                            onClick={backEdit}
                        />
                    </div>
                    <div class="card-body row">
                        <div class="col-md-6">
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    className={`form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis`}
                                >
                                    Position Title:
                                    <span className="text-red-500">
                                        *
                                    </span>
                                </label>
                                <InputText
                                    value={data.positionTitle}
                                    className={`form-control p-error !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                    onChange={(e) =>
                                        setData('positionTitle', e.target.value)
                                    }
                                />
                                {isSubmitted &&
                                    (data.positionTitle == "" ||
                                        data.positionTitle == null) && (
                                        <InputError
                                            message="Position Title is required!"
                                            className="mt-2 text-xs"
                                        />
                                    )}
                            </div>
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Job Description:
                                </label>
                                <div class="form-floating">
                                    <textarea
                                        class="form-control text-xs text-gray-500 vacancy-job-description"
                                        placeholder="Leave a comment here"
                                        id="floatingTextarea2"
                                        style={{ height: "250px" }}
                                        onChange={(e) => setData('jobDescription', e.target.value)}
                                    >
                                        {data.jobDescription}
                                    </textarea>
                                </div>
                                {isSubmitted &&
                                    (data.jobDescription == "" ||
                                        data.jobDescription == null) && (
                                        <InputError
                                            message="Job Description is required!"
                                            className="mt-2 text-xs"
                                        />
                                    )}
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                    >
                                        Nature of Work:
                                    </label>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input vacancy-nature-of-work  border-light-emphasis "
                                                    name="vacancy-nature-of-work[]"
                                                    type="checkbox"
                                                    value="Permanent"
                                                    id="vacancy-nature-of-work"
                                                    onChange={(e) =>
                                                        handleNatureOfWork(
                                                            "Permanent",
                                                            e
                                                        )
                                                    }
                                                    checked={data.natureOfWork.includes("Permanent")}
                                                />
                                                <label
                                                    class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                    for="flexCheckDefault"
                                                >
                                                    Permanent
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input vacancy-nature-of-work  border-light-emphasis "
                                                    name="vacancy-nature-of-work[]"
                                                    type="checkbox"
                                                    value="Contractual"
                                                    id="vacancy-nature-of-work"
                                                    onChange={(e) =>
                                                        handleNatureOfWork(
                                                            "Contractual",
                                                            e
                                                        )
                                                    }
                                                    checked={data.natureOfWork.includes("Contractual")}
                                                />
                                                <label
                                                    class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                    for="flexCheckDefault"
                                                >
                                                    Contractual
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input vacancy-nature-of-work  border-light-emphasis "
                                                    name="vacancy-nature-of-work[]"
                                                    type="checkbox"
                                                    value="Project-based"
                                                    id="vacancy-nature-of-work"
                                                    onChange={(e) =>
                                                        handleNatureOfWork(
                                                            "Project-based",
                                                            e
                                                        )
                                                    }
                                                    checked={data.natureOfWork.includes("Project-based")}
                                                />
                                                <label
                                                    class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                    for="flexCheckDefault"
                                                >
                                                    Project-based
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input vacancy-nature-of-work  border-light-emphasis "
                                                    name="vacancy-nature-of-work[]"
                                                    type="checkbox"
                                                    value="Internship / OJT"
                                                    id="vacancy-nature-of-work"
                                                    onChange={(e) =>
                                                        handleNatureOfWork(
                                                            "Internship / OJT",
                                                            e
                                                        )
                                                    }
                                                    checked={data.natureOfWork.includes("Internship / OJT")}
                                                />
                                                <label
                                                    class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                    for="flexCheckDefault"
                                                >
                                                    Internship / OJT
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input vacancy-nature-of-work  border-light-emphasis "
                                                    name="vacancy-nature-of-work[]"
                                                    type="checkbox"
                                                    value="Part-time"
                                                    id="vacancy-nature-of-work"
                                                    onChange={(e) =>
                                                        handleNatureOfWork(
                                                            "Part-time",
                                                            e
                                                        )
                                                    }
                                                    checked={data.natureOfWork.includes("Part-time")}
                                                />
                                                <label
                                                    class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                    for="flexCheckDefault"
                                                >
                                                    Part-time
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input vacancy-nature-of-work  border-light-emphasis "
                                                    name="vacancy-nature-of-work[]"
                                                    type="checkbox"
                                                    value="Work from home / online-job"
                                                    id="vacancy-nature-of-work"
                                                    onChange={(e) =>
                                                        handleNatureOfWork(
                                                            "Work from home / online-job",
                                                            e
                                                        )
                                                    }
                                                    checked={data.natureOfWork.includes("Work from home / online-job")}
                                                />
                                                <label
                                                    class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                    for="flexCheckDefault"
                                                >
                                                    Work from home /
                                                    online-job
                                                </label>
                                            </div>
                                        </div>
                                        {isSubmitted &&
                                    (data.natureOfWork == "" ||
                                        data.natureOfWork == null) && (
                                        <InputError
                                            message="Nature of Work is required!"
                                            className="mt-2 text-xs"
                                        />
                                    )}
                                    </div>
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs !text-gray-400 fw-bold text-light-emphasis`}
                                    >
                                        Place of Work:
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <InputText
                                        value={data.placeOfWork}
                                        onChange={(e) => setData('placeOfWork', e.target.value)}
                                        className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                    />
                                    {isSubmitted &&
                                    (data.placeOfWork == "" ||
                                        data.placeOfWork == null) && (
                                        <InputError
                                            message="Place of Work is required!"
                                            className="mt-2 text-xs"
                                        />
                                    )}
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis`}
                                    >
                                        Salary:
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <InputText
                                        value={data.salary}
                                        onChange={(e) => setData('salary', e.target.value)}
                                        className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                    />
                                    {isSubmitted &&
                                    (data.salary == "" ||
                                        data.salary == null) && (
                                        <InputError
                                            message="Salary is required!"
                                            className="mt-2 text-xs"
                                        />
                                    )}
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis`}
                                    >
                                        Vacancy Count:
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <InputText
                                        value={data.vacancyCount}
                                        onChange={(e) => setData('vacancyCount',e.target.value)}
                                        className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                    />
                                    {isSubmitted &&
                                    (data.vacancyCount == "" ||
                                        data.vacancyCount == null) && (
                                        <InputError
                                            message="Vacancy Count is required!"
                                            className="mt-2 text-xs"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 mb-4"></div>
                    </div>
                </div>
            </div>
            <div class="step-4">
                <div class="card rounded-0 border-0">
                    <div class=" bg-light mb-2 font-bold mt-10">
                        <h4 class="card-title fw-bold">
                            IV. QUALIFICATION REQUIREMENTS
                        </h4>
                    </div>
                    <div class="card-body row">
                        <div class="col-md-6">
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    className={`form-label !text-xs $ !text-gray-400 fw-bold text-light-emphasis`}
                                >
                                    Work Experience:
                                    <span className="text-red-500">
                                        *
                                    </span>
                                </label>
                                <InputText
                                    value={data.workExperience}
                                    onChange={(e) => setData('workExperience', e.target.value)}
                                    className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                />
                                {isSubmitted &&
                                    (data.workExperience == "" ||
                                        data.workExperience == null) && (
                                        <InputError
                                            message="Work Experience is required!"
                                            className="mt-2 text-xs"
                                        />
                                    )}
                            </div>

                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    className={`form-label !text-xs !text-gray-400 fw-bold text-light-emphasis`}
                                >
                                    Religion:
                                    <span className="text-red-500">
                                        *
                                    </span>
                                </label>
                                <InputText
                                    value={data.religion}
                                    onChange={(e) => setData('religion', e.target.value)}
                                    className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                />
                                {isSubmitted &&
                                    (data.religion == "" ||
                                        data.religion == null) && (
                                        <InputError
                                            message="Religion is required!"
                                            className="mt-2 text-xs"
                                        />
                                    )}
                            </div>
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Other Qualifications:
                                </label>
                                <div class="form-floating">
                                    <textarea
                                        class="form-control text-xs text-gray-500 other-qualification"
                                        placeholder="Leave a comment here"
                                        id="floatingTextarea2"
                                        style={{ height: "197px" }}
                                        onClick={(e) => setData('otherQualifications', e.target.value)}
                                    >
                                        {data.otherQualifications}
                                    </textarea>
                                </div>
                                
                            </div>
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    className={`form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis`}
                                >
                                    License:
                                    <span className="text-red-500">
                                        *
                                    </span>
                                </label>
                                <InputText
                                    value={data.license}
                                    onChange={(e) => setData('license', e.target.value)}
                                    className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                />
                            </div>
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    className={`form-label !text-xs !text-gray-400 fw-bold text-light-emphasis`}
                                >
                                    Certification:
                                    <span className="text-red-500">
                                        *
                                    </span>
                                </label>
                                <InputText
                                    value={data.certification}
                                    onChange={(e) => setData('certification', e.target.value)}
                                    className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                />
                            </div>
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Accepts:
                                </label>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input border-light-emphasis qnof"
                                                type="checkbox"
                                                value="PESO"
                                                id="qnof"
                                                name="qnof"
                                                onChange={(e) =>
                                                    handleQualificationRequirementNatureOfWork(
                                                        "PESO",
                                                        e
                                                    )
                                                }
                                                checked={data.qualificationRequirementNatureOfWork.includes('PESO')}
                                            />
                                            <label
                                                class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                for="flexCheckDefault"
                                            >
                                                PESO
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input border-light-emphasis qnof"
                                                type="checkbox"
                                                value="SPES"
                                                id="qnof"
                                                name="qnof"
                                                onChange={(e) =>
                                                    handleQualificationRequirementNatureOfWork(
                                                        "SPES",
                                                        e
                                                    )
                                                }
                                                checked={data.qualificationRequirementNatureOfWork.includes('SPES')}
                                            />
                                            <label
                                                class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                for="flexCheckDefault"
                                            >
                                                SPES
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input border-light-emphasis qnof"
                                                type="checkbox"
                                                value="GIP"
                                                id="qnof"
                                                name="qnof"
                                                onChange={(e) =>
                                                    handleQualificationRequirementNatureOfWork(
                                                        "GIP",
                                                        e
                                                    )
                                                }
                                                checked={data.qualificationRequirementNatureOfWork.includes('GIP')}
                                            />
                                            <label
                                                class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                for="flexCheckDefault"
                                            >
                                                GIP
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input border-light-emphasis qnof"
                                                type="checkbox"
                                                value="Job Start Philippines"
                                                id="qnof"
                                                name="qnof"
                                                onChange={(e) =>
                                                    handleQualificationRequirementNatureOfWork(
                                                        "Job Start Philippines",
                                                        e
                                                    )
                                                }
                                                checked={data.qualificationRequirementNatureOfWork.includes('Job Start Philippines')}
                                            />
                                            <label
                                                class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                for="flexCheckDefault"
                                            >
                                                Job Start Philippines
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input border-light-emphasis qnof"
                                                type="checkbox"
                                                value="K-12 AMP"
                                                id="qnof"
                                                name="qnof"
                                                onChange={(e) =>
                                                    handleQualificationRequirementNatureOfWork(
                                                        "K-12 AMP",
                                                        e
                                                    )
                                                }
                                                checked={data.qualificationRequirementNatureOfWork.includes('K-12 AMP')}
                                            />
                                            <label
                                                class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                for="flexCheckDefault"
                                            >
                                                K-12 AMP
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input border-light-emphasis qnof"
                                                type="checkbox"
                                                value="Trabajo"
                                                id="qnof"
                                                name="qnof"
                                                onChange={(e) =>
                                                    handleQualificationRequirementNatureOfWork(
                                                        "Trabajo",
                                                        e
                                                    )
                                                }
                                                checked={data.qualificationRequirementNatureOfWork.includes('Trabajo')}
                                            />
                                            <label
                                                class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                for="flexCheckDefault"
                                            >
                                                Trabajo
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {isSubmitted &&
                                    (data.qualificationRequirementNatureOfWork == "" ||
                                        data.qualificationRequirementNatureOfWork == null) && (
                                        <InputError
                                            message="Accepts is required!"
                                            className="mt-2 text-xs"
                                        />
                                    )}
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                                    >
                                        Sex:
                                    </label>

                                    <div class="row">
                                        <div class="col-md-4">
                                            <div className="flex flex-nowrap items-center">
                                                <RadioButton
                                                    className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                    inputId="f5"
                                                    value="Male"
                                                    checked={
                                                        data.sex ===
                                                        "Male"
                                                    }
                                                    onChange={(e) => setData('sex', e.target.value)}
                                                />
                                                <label
                                                    htmlFor="f5"
                                                    className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                >
                                                    Male
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div className="flex flex-nowrap items-center">
                                                <RadioButton
                                                    className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                    inputId="f5"
                                                    value="Female"
                                                    checked={
                                                        data.sex ===
                                                        "Female"
                                                    }
                                                    onChange={(e) => setData('sex', e.target.value)}
                                                />
                                                <label
                                                    htmlFor="f5"
                                                    className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                >
                                                    Female
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div className="flex flex-nowrap items-center">
                                                <RadioButton
                                                    className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                    inputId="f5"
                                                    value="No Preference"
                                                    checked={
                                                        data.sex ===
                                                        "No Preference"
                                                    }
                                                    onChange={(e) => setData('sex', e.target.value)}
                                                />
                                                <label
                                                    htmlFor="f5"
                                                    className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                >
                                                    No Preference
                                                </label>
                                            </div>
                                        </div>
                                        {isSubmitted &&
                                    (data.sex == "" ||
                                        data.sex == null) && (
                                        <InputError
                                            message="Sex is required!"
                                            className="mt-2 text-xs"
                                        />
                                    )}
                                    </div>
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                    >
                                        Civil Status:{" "}
                                    </label>

                                    <div class="row">
                                        <div class="col-md-4">
                                            <div className="flex flex-nowrap items-center">
                                                <RadioButton
                                                    className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                    inputId="f5"
                                                    value="Single"
                                                    checked={
                                                        data.civilStatus ===
                                                        "Single"
                                                    }
                                                    onChange={(e) => setData('civilStatus', e.target.value)}
                                                />
                                                <label
                                                    htmlFor="f5"
                                                    className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                >
                                                    Single
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div className="flex flex-nowrap items-center">
                                                <RadioButton
                                                    className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                    inputId="f5"
                                                    value="Married"
                                                    checked={
                                                        data.civilStatus ===
                                                        "Married"
                                                    }
                                                    onChange={(e) => setData('civilStatus', e.target.value)}
                                                />
                                                <label
                                                    htmlFor="f5"
                                                    className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                >
                                                    Married
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div className="flex flex-nowrap items-center">
                                                <RadioButton
                                                    className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                    inputId="f5"
                                                    value="No Preference"
                                                    checked={
                                                        data.civilStatus ===
                                                        "No Preference"
                                                    }
                                                    onChange={(e) => setData('civilStatus', e.target.value)}
                                                />
                                                <label
                                                    htmlFor="f5"
                                                    className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                >
                                                    No Preference
                                                </label>
                                            </div>
                                        </div>
                                        {isSubmitted &&
                                    (data.civilStatus == "" ||
                                        data.civilStatus == null) && (
                                        <InputError
                                            message="Civil Status is required!"
                                            className="mt-2 text-xs"
                                        />
                                    )}
                                    </div>
                                    <span class="text-danger !text-xs qualification_civil_status-error"></span>
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs !text-gray-400 fw-bold text-light-emphasis`}
                                    >
                                        Educational Level:
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <InputText
                                        className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                        value={data.educationalLevel}
                                        onChange={(e) => setData('educationalLevel', e.target.value)}
                                    />
                                    
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis`}
                                    >
                                        Course or Major:
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <InputText
                                        className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                            value={data.courseOrMajor}
                                            onChange={(e) => setData('courseOrMajor', e.target.value)}
                                    />
                                    
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis`}
                                    >
                                        Eligibility:
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <InputText
                                        value={data.eligibility}
                                        className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                        onChange={(e) => setData('eligibility', e.target.value)}
                                    />
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis`}
                                    >
                                        Language or Dialect Spoken:
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <InputText
                                        value={data.languageOrDialectSpoken}
                                        className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                        onChange={(e) => setData('languageOrDialectSpoken', e.target.value)}
                                    />

                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs !text-gray-400 fw-bold text-light-emphasis`}
                                    >
                                        Preferred Residence:
                                        
                                    </label>
                                    <InputText
                                        className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                        value={data.preferredResidence}
                                        onChange={(e) => setData('preferredResidence', e.target.value)}
                                    />
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                    >
                                        Accepts Disability:
                                    </label>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input qualification_accept_disability border-light-emphasis "
                                                    type="radio"
                                                    value="Yes"
                                                    checked= {data.isAcceptDisability == "Yes"}
                                                    id="qualification_accept_disability"
                                                    name="qualification_accept_disability"
                                                    onChange={() =>
                                                        setData('isAcceptDisability', "Yes")
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                    for="flexCheckDefault"
                                                >
                                                    Yes
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input qualification_accept_disability border-light-emphasis "
                                                    type="radio"
                                                    value="No"
                                                    checked= {data.isAcceptDisability == "No"}
                                                    id="qualification_accept_disability"
                                                    name="qualification_accept_disability"
                                                    onChange={() =>
                                                        setData('isAcceptDisability', "No")
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                    for="flexCheckDefault"
                                                >
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {isSubmitted &&
                                    (data.isAcceptDisability == "" ||
                                        data.isAcceptDisability == null) && (
                                        <InputError
                                            message="Posting Date is required!"
                                            className="mt-2 text-xs"
                                        />
                                    )}
                                </div>
                                {data.isAcceptDisability == "Yes" && (
                                    <div class="col-md-12 mb-4">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            If "yes":{" "}
                                        </label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-check">
                                                    <input
                                                        class="form-check-input qualification_accept_disability_yes border-light-emphasis "
                                                        type="checkbox"
                                                        value="Visual"
                                                        id="qualification_accept_disability_yes"
                                                        name="qualification_accept_disability_yes[]"
                                                        onChange={(
                                                            e
                                                        ) =>
                                                            handleDisabilityAccepted(
                                                                "Visual",
                                                                e
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                        for="flexCheckDefault"
                                                    >
                                                        Visual
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input
                                                        class="form-check-input qualification_accept_disability_yes border-light-emphasis "
                                                        type="checkbox"
                                                        value="Physical"
                                                        id="qualification_accept_disability_yes"
                                                        name="qualification_accept_disability_yes[]"
                                                        onChange={(
                                                            e
                                                        ) =>
                                                            handleDisabilityAccepted(
                                                                "Physical",
                                                                e
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                        for="flexCheckDefault"
                                                    >
                                                        Physical
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input
                                                        class="form-check-input qualification_accept_disability_yes border-light-emphasis "
                                                        type="checkbox"
                                                        value="Hearing"
                                                        id="qualification_accept_disability_yes"
                                                        name="qualification_accept_disability_yes[]"
                                                        onChange={(
                                                            e
                                                        ) =>
                                                            handleDisabilityAccepted(
                                                                "Hearing",
                                                                e
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                        for="flexCheckDefault"
                                                    >
                                                        Hearing
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-check">
                                                    <input
                                                        class="form-check-input qualification_accept_disability_yes border-light-emphasis "
                                                        type="checkbox"
                                                        value="Speech"
                                                        id="qualification_accept_disability_yes"
                                                        name="qualification_accept_disability_yes[]"
                                                        onChange={(
                                                            e
                                                        ) =>
                                                            handleDisabilityAccepted(
                                                                "Speech",
                                                                e
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                        for="flexCheckDefault"
                                                    >
                                                        Speech
                                                    </label>
                                                </div>
                                                <div class="col-md-12 mb-4">
                                                    <label
                                                        for="inputEmail4"
                                                        class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                                    >
                                                        Others
                                                        (please
                                                        specify):
                                                    </label>
                                                    <input
                                                        type="input"
                                                        class="form-control qualification_accept_disability_yes_others !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                                        id="qualification_accept_disability_yes_others"
                                                        name="qualification_accept_disability_yes_others"
                                                        onChange={(
                                                            e
                                                        ) =>
                                                            handleDisabilityAccepted(
                                                                "input",
                                                                e
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <span class="text-danger !text-xs qualification_accept_disability-type-error"></span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div class="col-md-12 mb-4"></div>
                    </div>
                </div>
            </div>
            <div class=" bg-light mb-2 font-bold mt-10">
                <h4 class="card-title fw-bold">
                    V. POSTING DETAILS
                </h4>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="col-md-12 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Posting Date
                        </label>
                        <Calendar
                            className="form-control !border-0 "
                            value={new Date(data.postingDate)}
                            onChange={(e) =>
                                setData('postingDate', e.value)
                            }
                        />
                       {isSubmitted &&
                                    (data.postingDate == "" ||
                                        data.postingDate == null) && (
                                        <InputError
                                            message="Posting Date is required!"
                                            className="mt-2 text-xs"
                                        />
                                    )}
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="col-md-12 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Valid Until
                        </label>
                        <Calendar
                            className="form-control !border-0 "
                            value={new Date(data.validUntil)}
                            onChange={(e) => setData('validUntil', e.value)}
                        />
                        {isSubmitted &&
                                    (data.validUntil == "" ||
                                        data.validUntil == null) && (
                                        <InputError
                                            message="Valid Until is required!"
                                            className="mt-2 text-xs"
                                        />
                                    )}
                    </div>
                </div>
            </div>
            <Button
                label="Save"
                type="submit"
                className="p-button-help self-end"
                // onClick={addNew}
            />
        </form>
    </div>
    );
}
