import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout';
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
import InputError from '../../Components/InputError';


export default function ViewJobPosting({props, back, setType, jobPostings}) {

    return (
        <div className="card my-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
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
                            onClick={back}
                        />
                    </div>
                    <div class="card-body row">
                        <div class="col-md-6">
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    className={`form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis`}
                                >
                                    Position Title:
                                </label>
                                <InputText
                                    disabled
                                    value={jobPostings.employer_vacancy_detail.position_title}
                                    className={`form-control p-error !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                    
                                />
                               
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
                                    >
                                        {jobPostings.employer_vacancy_detail.job_description}
                                    </textarea>
                                </div>
                               
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-900 fw-bold text-light-emphasis"
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
                                                    disabled
                                                    value="Permanent"
                                                    id="vacancy-nature-of-work"
                                                    checked={jobPostings.employer_vacancy_detail.nature_of_work.includes('Permanent')}
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
                                                    disabled
                                                    value="Contractual"
                                                    id="vacancy-nature-of-work"
                                                    checked={jobPostings.employer_vacancy_detail.nature_of_work.includes('Contractual')}
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
                                                    disabled
                                                    value="Project-based"
                                                    id="vacancy-nature-of-work"
                                                    checked={jobPostings.employer_vacancy_detail.nature_of_work.includes('Project-based')}
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
                                                    disabled
                                                    value="Internship / OJT"
                                                    id="vacancy-nature-of-work"
                                                    checked={jobPostings.employer_vacancy_detail.nature_of_work.includes('Internship / OJT')}
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
                                                    disabled
                                                    value="Part-time"
                                                    id="vacancy-nature-of-work"
                                                    checked={jobPostings.employer_vacancy_detail.nature_of_work.includes('Part-time')}
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
                                                    disabled
                                                    value="Work from home / online-job"
                                                    id="vacancy-nature-of-work"
                                                    checked={jobPostings.employer_vacancy_detail.nature_of_work.includes('Work from home / online-job')}
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
                                        
                                    </div>
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs !text-gray-900 fw-bold text-light-emphasis`}
                                    >
                                        Place of Work:
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <InputText
                                        disabled
                                        value={jobPostings.employer_vacancy_detail.place_of_work}
                                        className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                    />
                                  
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis`}
                                    >
                                        Salary:
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <InputText
                                        disabled
                                        value={jobPostings.employer_vacancy_detail.salary}
                                        
                                        className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                    />
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis`}
                                    >
                                        Vacancy Count:
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <InputText
                                        disabled
                                        value={jobPostings.employer_vacancy_detail.vacancy_count}
                                        className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                    />
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
                                    className={`form-label !text-xs $ !text-gray-900 fw-bold text-light-emphasis`}
                                >
                                    Work Experience:
                                    <span className="text-red-500">
                                        *
                                    </span>
                                </label>
                                <InputText
                                    disabled
                                    value={jobPostings.employer_qualification_requirement.work_of_experience}
                                    className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                />
                            </div>

                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    className={`form-label !text-xs !text-gray-900 fw-bold text-light-emphasis`}
                                >
                                    Religion:
                                    <span className="text-red-500">
                                        *
                                    </span>
                                </label>
                                <InputText
                                    disabled
                                    value={jobPostings.employer_qualification_requirement.religion}
                                    className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                />
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
                                        disabledonClick={(e) => setData('otherQualifications', e.target.
                                        value)}
                                    >
                                        {jobPostings.employer_qualification_requirement.other_qualification}
                                    </textarea>
                                </div>
                                
                            </div>
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    className={`form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis`}
                                >
                                    License:
                                    <span className="text-red-500">
                                        *
                                    </span>
                                </label>
                                <InputText
                                    disabled
                                    value={jobPostings.employer_qualification_requirement.license}
                                    className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                />
                            </div>
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    className={`form-label !text-xs !text-gray-900 fw-bold text-light-emphasis`}
                                >
                                    Certification:
                                    <span className="text-red-500">
                                        *
                                    </span>
                                </label>
                                <InputText
                                   disabled
                                   value={jobPostings.employer_qualification_requirement.certification}
                                    className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                />
                            </div>
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-900 fw-bold text-light-emphasis"
                                >
                                    Accepts:
                                </label>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input border-light-emphasis qnof"
                                                type="checkbox"
                                                disabled
                                                value="PESO"
                                                id="qnof"
                                                name="qnof"
                                                checked={jobPostings.employer_qualification_requirement.nature_of_work.includes('PESO')}
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
                                                disabled
                                                value="SPES"
                                                id="qnof"
                                                name="qnof"
                                                checked={jobPostings.employer_qualification_requirement.nature_of_work.includes('SPES')}
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
                                                disabled
                                                value="GIP"
                                                id="qnof"
                                                name="qnof"
                                                checked={jobPostings.employer_qualification_requirement.nature_of_work.includes('GIP')}
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
                                                disabled
                                                value="Job Start Philippines"
                                                id="qnof"
                                                name="qnof"
                                                checked={jobPostings.employer_qualification_requirement.nature_of_work.includes('Job Start Philippines')}
                                            />
                                            <label
                                                class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                for="flexCheckDefault"
                                            >
                                                JobStart Philippines
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input border-light-emphasis qnof"
                                                type="checkbox"
                                                disabled
                                                value="K-12 AMP"
                                                id="qnof"
                                                name="qnof"
                                                checked={jobPostings.employer_qualification_requirement.nature_of_work.includes('K-12 AMP')}
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
                                                disabled
                                                value="Trabajo"
                                                id="qnof"
                                                name="qnof"
                                                checked={jobPostings.employer_qualification_requirement.nature_of_work.includes('Trabajo')}
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
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis"
                                    >
                                        Sex:
                                    </label>

                                    <div class="row">
                                        <div class="col-md-4">
                                            <div className="flex flex-nowrap items-center">
                                                <RadioButton
                                                    className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                    inputId="f5"
                                                    disabled
                                                    value="Male"
                                                    checked={
                                                        jobPostings.employer_qualification_requirement.sex ===
                                                        "Male"
                                                    }
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
                                                    disabled
                                                    value="Female"
                                                    checked={
                                                        jobPostings.employer_qualification_requirement.sex ===
                                                        "Female"
                                                    }
                                                    disabledonChange={(e) => setData('sex', e.target.
                                                    value)}
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
                                                    disabled
                                                    value="No Preference"
                                                    checked={
                                                        jobPostings.employer_qualification_requirement.sex ===
                                                        "No Preference"
                                                    }
                                                    disabledonChange={(e) => setData('sex', e.target.
                                                    value)}
                                                />
                                                <label
                                                    htmlFor="f5"
                                                    className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                >
                                                    No Preference
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-900 fw-bold text-light-emphasis"
                                    >
                                        Civil Status:{" "}
                                    </label>

                                    <div class="row">
                                        <div class="col-md-4">
                                            <div className="flex flex-nowrap items-center">
                                                <RadioButton
                                                    className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                    inputId="f5"
                                                    disabled
                                                    value="Single"
                                                    checked={
                                                        jobPostings.employer_qualification_requirement.civil_status ===
                                                        "Single"
                                                    }
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
                                                    disabled
                                                    value="Married"
                                                    checked={
                                                        jobPostings.employer_qualification_requirement.civil_status ===
                                                        "Married"
                                                    }
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
                                                    disabled
                                                    value="No Preference"
                                                    checked={
                                                        jobPostings.employer_qualification_requirement.civil_status ===
                                                        "No Preference"
                                                    }
                                                />
                                                <label
                                                    htmlFor="f5"
                                                    className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                >
                                                    No Preference
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="text-danger !text-xs qualification_civil_status-error"></span>
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs !text-gray-900 fw-bold text-light-emphasis`}
                                    >
                                        Educational Level:
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <InputText
                                        className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                        disabled
                                        value={jobPostings.employer_qualification_requirement.educational_level}
                                    />
                                    
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis`}
                                    >
                                        Course or Major:
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <InputText
                                        className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                        disabled
                                        value={jobPostings.employer_qualification_requirement.course_or_major}
                                    />
                                    
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis`}
                                    >
                                        Eligibility:
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <InputText
                                        disabled
                                        value={jobPostings.employer_qualification_requirement.eligibility}
                                        className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                    />
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis`}
                                    >
                                        Language or Dialect Spoken:
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <InputText
                                        disabled
                                        value={jobPostings.employer_qualification_requirement.language_or_dialect}
                                        className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                    />

                                    <label
                                        for="inputEmail4"
                                        className={`form-label !text-xs !text-gray-900 fw-bold text-light-emphasis`}
                                    >
                                        Preferred Residence:
                                        
                                    </label>
                                    <InputText
                                        className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                        disabled
                                        value={jobPostings.employer_qualification_requirement.preferred_residence}
                                       
                                    />
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-900 fw-bold text-light-emphasis"
                                    >
                                        Accepts Disability:
                                    </label>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input qualification_accept_disability border-light-emphasis "
                                                    type="radio"
                                                    disabled
                                                    value="Yes"
                                                    checked= {jobPostings.employer_qualification_requirement.is_accept_disability == "Yes"}
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
                                                    disabled
                                                    value="No"
                                                    checked= {jobPostings.employer_qualification_requirement.is_accept_disability == "No"}
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
                                   
                                </div>
                                {jobPostings.employer_qualification_requirement.is_accept_disability == "Yes" && (
                                    <div class="col-md-12 mb-4">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-900 fw-bold text-light-emphasis"
                                        >
                                            If "yes":{" "}
                                        </label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-check">
                                                    <input
                                                        class="form-check-input qualification_accept_disability_yes border-light-emphasis "
                                                        type="checkbox"
                                                        disabled
                                                        value="Visual"
                                                        id="qualification_accept_disability_yes"
                                                        name="qualification_accept_disability_yes[]"
                                                        checked= {jobPostings.employer_qualification_requirement.disability_type.includes("Visual")}
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
                                                        disabled
                                                        value="Physical"
                                                        id="qualification_accept_disability_yes"
                                                        name="qualification_accept_disability_yes[]"
                                                        checked= {jobPostings.employer_qualification_requirement.disability_type.includes("Physical")}
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
                                                        disabled
                                                        value="Hearing"
                                                        id="qualification_accept_disability_yes"
                                                        name="qualification_accept_disability_yes[]"
                                                        checked= {jobPostings.employer_qualification_requirement.disability_type.includes("Hearing")}
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
                                                        disabled
                                                        value="Speech"
                                                        id="qualification_accept_disability_yes"
                                                        name="qualification_accept_disability_yes[]"
                                                        checked= {jobPostings.employer_qualification_requirement.disability_type.includes("Speech")}
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
                                                        class="form-label !text-xs !text-gray-900 fw-bold text-light-emphasis"
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
                            class="form-label !text-xs !text-gray-900 fw-bold text-light-emphasis"
                        >
                            Posting Date
                        </label>
                        <Calendar
                            className="form-control !border-0 "
                            disabled
                            value={new Date(jobPostings.employer_posting_detail.posting_date)}
                           
                        />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="col-md-12 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-900 fw-bold text-light-emphasis"
                        >
                            Valid Until
                        </label>
                        <Calendar
                            className="form-control !border-0 "
                            disabled
                            value={new Date(jobPostings.employer_posting_detail.valid_until)}
                        />
                    </div>
                </div>
            </div>
    </div>
    );
}
