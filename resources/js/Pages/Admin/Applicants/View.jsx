import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';

export default function ViewApplicant({ applicant, back }) {
    useEffect(() => {
        console.log(applicant);
        console.log(
            applicant.skills_without_formal_training.includes("Auto Mechanic")
        );
    }, []);

    const civilStatuses = [
        { name: "Single" },
        { name: "Married" },
        { name: "Widowed" },
        { name: "Seperated" },
        { name: "Live-in" },
    ];

    const disabilities = [
        { name: "Visual" },
        { name: "Hearing" },
        { name: "Speech" },
        { name: "Physical" },
        { name: "Others" },
    ];

    const handleChecked = (val) => {
        return true;
    };

    return (
        <>
            <div class="step-1">
                <div class="card rounded-0 border-0">
                    <div class=" bg-light mb-2 font-bold mt-10">
                        <div className="flex justify-between">
                        <h4 class="card-title fw-bold">
                            1. Personal information
                        </h4>
                        <Button
                    icon="pi pi-arrow-left"
                    className="mr-2"
                    label="Back"
                    onClick={() => back()}
                />
                        </div>
                    </div>
                    <div class="card-body pb-0 row">
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Surname
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                value={applicant.surname}
                                disabled
                            />
                            <span class="text-danger !text-xs pi_surname-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                            >
                                First Name
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                value={applicant.firstname}
                                disabled
                            />

                            <span class="text-danger !text-xs pi_firstname-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Middle Name
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                value={applicant.middlename}
                                disabled
                            />
                            <span class="text-danger !text-xs pi_middlename-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Suffix
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                value={applicant.suffix}
                                disabled
                            />
                            <span class="text-danger !text-xs pi_suffix-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Date of Birth
                            </label>
                            <Calendar
                                className="form-control h-10 p-0 border-0"
                                value={new Date(applicant.birthdate)}
                                disabled
                            />
                            <span class="text-danger !text-xs pi_date_of_birth-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Religion
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                value={applicant.religion}
                                disabled
                            />
                            <span class="text-danger !text-xs pi_religion-error"></span>
                        </div>
                        <div class="col-md-4 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Sex
                            </label>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-check pl-0 flex items-center gap-2">
                                        <RadioButton
                                            inputId="ingredient1"
                                            name="sex"
                                            value="Male"
                                            checked={applicant.sex === "Male"}
                                            disabled
                                        />
                                        <label
                                            class="form-check-label !text-xs !text-gray-900"
                                            for="exampleRadios1"
                                        >
                                            Male
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-check flex  pl-0 items-center gap-2">
                                        <RadioButton
                                            inputId="ingredient1"
                                            name="sex"
                                            value="Female"
                                            checked={applicant.sex === "Female"}
                                            disabled
                                        />

                                        <label
                                            class="form-check-label !text-xs !text-gray-900"
                                            for="exampleRadios2"
                                        >
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <span class="text-danger !text-xs pi_sex-error"></span>
                        </div>
                        <div class="col-md-4 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Civil Status
                            </label>

                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                value={applicant.civil_status}
                                disabled
                            />
                            <span class="text-danger !text-xs pi_civil_status-error h-10"></span>
                        </div>
                        <div class="col-md-4 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Height
                            </label>
                            <div class="input-group mb-3">
                                <InputText
                                    className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                    value={applicant.height}
                                    disabled
                                />
                                <span class="input-group-text !text-gray-900 !text-xs border-light-emphasis">
                                    cm
                                </span>
                            </div>
                            <span class="text-danger !text-xs pi_height-error"></span>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="row">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Are you actively looking for work?
                                </label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check pl-0 flex items-center gap-2">
                                            <RadioButton
                                                inputId="ingredient1"
                                                name="activilyLookingForWork"
                                                value="Yes"
                                                checked={
                                                    applicant.is_actively_looking_for_work ===
                                                    1
                                                }
                                                disabled
                                            />
                                            <label
                                                class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                                for="exampleRadios1"
                                            >
                                                Yes
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check pl-0  flex items-center gap-2">
                                            <RadioButton
                                                inputId="ingredient1"
                                                name="activilyLookingForWork"
                                                value="No"
                                                checked={
                                                    applicant.is_actively_looking_for_work ===
                                                    0
                                                }
                                                disabled
                                            />
                                            <label
                                                class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                                for="exampleRadios2"
                                            >
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <span class="text-danger !text-xs pi_looking_for_work-error"></span>
                                {applicant.is_actively_looking_for_work ==
                                    1 && (
                                    <div class="col-md-12 mb-4 is_actively_looking_for_work">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            How long have you been looking for
                                            work?
                                        </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-900 border-light-emphasis"
                                            value={applicant.find_job_duration}
                                            disabled
                                        />
                                        <span class="text-danger !text-xs pi_is_actively_looking_for_work-error"></span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Willing to work immediately?
                            </label>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-check pl-0 flex items-center gap-2">
                                        <RadioButton
                                            inputId="ingredient1"
                                            name="willingToWorkImmediately"
                                            value="Yes"
                                            checked={
                                                applicant.is_willing_to_work_immidiately ===
                                                1
                                            }
                                            disabled
                                        />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                            for="exampleRadios1"
                                        >
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-check flex pl-0  items-center gap-2">
                                        <RadioButton
                                            inputId="ingredient1"
                                            name="willingToWorkImmediately"
                                            value="No"
                                            checked={
                                                applicant.is_willing_to_work_immidiately ===
                                                0
                                            }
                                            disabled
                                        />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                            for="exampleRadios2"
                                        >
                                            No
                                        </label>
                                    </div>
                                </div>
                                <span class="text-danger !text-xs pi_when_to_work-error"></span>
                                {applicant.is_willing_to_work_immidiately ==
                                    0 && (
                                    <div class="col-md-12 mb-4 is_not_when_to_work">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            If no, when?
                                        </label>
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={
                                                new Date(
                                                    applicant.when_to_start_working
                                                )
                                            }
                                            disabled
                                        />

                                        <span class="text-danger !text-xs pi_not_when_to_work-error"></span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Are you a 4Ps beneficiary?{" "}
                            </label>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-check pl-0 flex items-center gap-2">
                                        <RadioButton
                                            inputId="ingredient1"
                                            name="is4psBeneficiary"
                                            value="Yes"
                                            checked={applicant.is_4Ps === 1}
                                            disabled
                                        />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                            for="exampleRadios1"
                                        >
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-check pl-0  flex items-center gap-2">
                                        <RadioButton
                                            inputId="ingredient1"
                                            name="is4psBeneficiary"
                                            value="No"
                                            checked={applicant.is_4Ps === 0}
                                            disabled
                                        />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                            for="exampleRadios2"
                                        >
                                            No
                                        </label>
                                    </div>
                                </div>
                                <span class="text-danger !text-xs pi_4ps_beneficiary-error"></span>
                                {applicant.is_4Ps === 1 && (
                                    <div class="col-md-12 mb-4 is_4ps_beneficiary">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            If yes, Household ID No.
                                        </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-900 border-light-emphasis"
                                            value={applicant.household_id_4ps}
                                            disabled
                                        />
                                        <span class="text-danger !text-xs pi_4ps_household_id-error"></span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <h5 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                Place of Birth
                            </h5>
                            <div class="row">
                                <div class="col-md-12 mb-4 d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Province
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <InputText
                                        className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                        value={
                                            applicant.applicant_address[0]
                                                .province
                                        }
                                        disabled
                                    />
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Municipality/City
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <InputText
                                        className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                        value={
                                            applicant.applicant_address[0]
                                                .municipality_or_city
                                        }
                                        disabled
                                    />
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Barangay
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <InputText
                                        className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                        value={
                                            applicant.applicant_address[0]
                                                .barangay
                                        }
                                        disabled
                                    />
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Barangay
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <InputText
                                        className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                        value={
                                            applicant.applicant_address[0]
                                                .house_no_or_street
                                        }
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <h5 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                Present Address
                            </h5>
                            <div class="row">
                                <div class="col-md-12 mb-4 d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Province
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <InputText
                                        className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                        value={
                                            applicant.applicant_address[1]
                                                .province
                                        }
                                        disabled
                                    />
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Municipality/City
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <InputText
                                        className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                        value={
                                            applicant.applicant_address[1]
                                                .municipality_or_city
                                        }
                                        disabled
                                    />
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Barangay
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <InputText
                                        className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                        value={
                                            applicant.applicant_address[1]
                                                .barangay
                                        }
                                        disabled
                                    />
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Barangay
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <InputText
                                        className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                        value={
                                            applicant.applicant_address[0]
                                                .house_no_or_street
                                        }
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body pt-0 row">
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Email Address
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                value={applicant.email_address}
                                disabled
                            />
                            <span class="text-danger !text-xs pi_email_address-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Cellphone Number
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                value={applicant.phone_number}
                                disabled
                            />
                            <span class="text-danger !text-xs pi_celphone_number-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Landline Number
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                value={applicant.landline_number}
                                disabled
                            />
                            <span class="text-danger !text-xs pi_landine_number-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                GSIS/SSS Number
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                value={applicant.GSIS_SSS_id}
                                disabled
                            />
                            <span class="text-danger !text-xs pi_sss_number-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Pag-ibig Number
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                value={applicant.pag_ibig_number}
                                disabled
                            />
                            <span class="text-danger !text-xs pi_pag_ibig_number-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                PhilHealth Number
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                value={applicant.philhealth_id}
                                disabled
                            />
                            <span class="text-danger !text-xs pi_philheath_number-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                TIN Number
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                value={applicant.TIN_number}
                                disabled
                            />
                            <span class="text-danger !text-xs pi_philheath_number-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                >
                                    Disability
                                </label>
                                <InputText
                                    className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                    value={applicant.disability}
                                    disabled
                                />
                                <span class="text-danger !text-xs pi_disability-error"></span>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="col-md-4 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Employment Status
                                </label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check pl-0 flex items-center gap-2">
                                            <RadioButton
                                                inputId="ingredient1"
                                                name="employementStatus"
                                                value="Employed"
                                                checked={
                                                    applicant.applicant_status
                                                        .applicant_type === 0
                                                }
                                                disabled
                                            />
                                            <label
                                                class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                                for="exampleRadios1"
                                            >
                                                Employed
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check  pl-0 flex items-center gap-2">
                                            <RadioButton
                                                inputId="ingredient1"
                                                name="employementStatus"
                                                value="Unemployed"
                                                checked={
                                                    applicant.applicant_status
                                                        .applicant_type === 1
                                                }
                                                disabled
                                            />
                                            <label
                                                class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                                for="exampleRadios2"
                                            >
                                                Unemployed
                                            </label>
                                        </div>
                                    </div>
                                    <span class="text-danger !text-xs pi_employed-error"></span>
                                </div>

                                {applicant.applicant_status.applicant_type ===
                                    0 && (
                                    <div class="row ">
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Wage Employed"
                                                    checked={
                                                        applicant
                                                            .applicant_status
                                                            .applicant_status_type ===
                                                        "Wage Employed"
                                                    }
                                                    disabled
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                                    for="osawft"
                                                >
                                                    Wage Employed
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Self Employed"
                                                    checked={
                                                        applicant
                                                            .applicant_status
                                                            .applicant_status_type ===
                                                        "Self Employed"
                                                    }
                                                    disabled
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                                    for="osawft"
                                                >
                                                    Self Employed
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {applicant.applicant_status.applicant_type ===
                                    1 && (
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="New Entrant/Fresh Graduate"
                                                    checked={
                                                        applicant
                                                            .applicant_status
                                                            .applicant_status_type ===
                                                        "New Entrant/Fresh Graduate"
                                                    }
                                                    disabled
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                                    for="osawft"
                                                >
                                                    New Entrant/Fresh Graduate
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Finished Contract"
                                                    checked={
                                                        applicant
                                                            .applicant_status
                                                            .applicant_status_type ===
                                                        "Finished Contract"
                                                    }
                                                    disabled
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                                    for="osawft"
                                                >
                                                    Finished Contract
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Resigned"
                                                    checked={
                                                        applicant
                                                            .applicant_status
                                                            .applicant_status_type ===
                                                        "Resigned"
                                                    }
                                                    disabled
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                                    for="osawft"
                                                >
                                                    Resigned
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    checked={
                                                        applicant
                                                            .applicant_status
                                                            .applicant_status_type ===
                                                        "Retired"
                                                    }
                                                    disabled
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                                    for="osawft"
                                                >
                                                    Retired
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Terminated/Laidoff(local)"
                                                    checked={
                                                        applicant
                                                            .applicant_status
                                                            .applicant_status_type ===
                                                        "Terminated/Laidoff(local)"
                                                    }
                                                    disabled
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                                    for="osawft"
                                                >
                                                    Terminated/Laidoff(local)
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Teminated/Laidoff(abroad)"
                                                    checked={
                                                        applicant
                                                            .applicant_status
                                                            .applicant_status_type ===
                                                        "Teminated/Laidoff(abroad)"
                                                    }
                                                    disabled
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                                    for="osawft"
                                                >
                                                    Teminated/Laidoff(abroad)
                                                </label>
                                            </div>
                                            {/* {
                                                applicant.applicant_status.applicant_status_type == "" && <InputText
                                                className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-900 border-light-emphasis"
                                                value={applicant.applicant_status.applicant_status_type}
                                                
                                            />
                                            } */}
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Others, specify"
                                                    checked={
                                                        applicant
                                                            .applicant_status
                                                            .applicant_status_type ===
                                                        "Others, specify"
                                                    }
                                                    disabled
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                                    for="osawft"
                                                >
                                                    Others, specify
                                                </label>
                                            </div>
                                            {/* {
                                                employedStatusOthers && <InputText
                                                className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-900 border-light-emphasis"
                                                value={unEmployedStatusOthersValue}
                                                
                                            />
                                            } */}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="step-3">
                <div class="py-5 card border-0 rounded-0">
                    <h4 class="card-header pl-0 border-0 fw-bold">
                        2. Job Preference{" "}
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row">
                            <div class="col-md-12 mb-4">
                                <h5 class="fw-bold text-dark-emphasis  mb-4 text-gray-500 !text-md">
                                    Preferred Occupation
                                </h5>
                                <div class="row">
                                    {applicant.applicant_job_preference.map(
                                        (data) => (
                                            <div class="col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ">
                                                <label
                                                    for="inputEmail4"
                                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                                ></label>
                                                <InputText
                                                    className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                                    value={data.occupation}
                                                    disabled
                                                />
                                            </div>
                                        )
                                    )}
                                    <span class="text-danger !text-xs preferred_occupation-error"></span>
                                </div>
                            </div>

                            <div class="col-md-12 mb-4">
                                <h5 class="fw-bold text-gray-500 text-dark-emphasis mb-4">
                                    Preferred Work Location
                                </h5>
                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-check pl-0 flex items-center gap-2">
                                                    <label
                                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                                        for="exampleRadios1"
                                                    >
                                                        Local,specify
                                                        cities/municipalities:
                                                    </label>
                                                </div>
                                            </div>

                                            {applicant.applicant_job_preference_location.map(
                                                (data) =>
                                                    data.type == 0 && (
                                                        <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                                            <label
                                                                for="inputEmail4"
                                                                class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                                            >
                                                                {data.id}
                                                            </label>
                                                            <InputText
                                                                className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                                                value={
                                                                    data.location
                                                                }
                                                                disabled
                                                            />
                                                        </div>
                                                    )
                                            )}
                                            <span class="text-danger !text-xs islocal_preferred_work_location-error"></span>
                                        </div>
                                    </div>

                                    <div class="col-md-6 mb-4">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-check pl-0   flex items-center gap-2">
                                                    <label
                                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                                        for="exampleRadios1"
                                                    >
                                                        Overseas,specify
                                                        countries:
                                                    </label>
                                                </div>
                                            </div>
                                            {applicant.applicant_job_preference_location.map(
                                                (data) =>
                                                    data.type == 1 && (
                                                        <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                                            <label
                                                                for="inputEmail4"
                                                                class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                                            >
                                                                {data.id}
                                                            </label>
                                                            <InputText
                                                                className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                                                value={
                                                                    data.location
                                                                }
                                                                disabled
                                                            />
                                                        </div>
                                                    )
                                            )}
                                            <span class="text-danger !text-xs isoverseas_preferred_work_location-error"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Expected Salary (Range){" "}
                                </label>
                                <InputText
                                    className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                    value={applicant.expected_salary}
                                    disabled
                                />
                                <span class="text-danger !text-xs expected_salary-error"></span>
                            </div>
                            <div class="col-md-4 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Passport No.
                                </label>
                                <InputText
                                    className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                    value={applicant.passport_number}
                                    disabled
                                />
                                <span class="text-danger !text-xs passport_number-error"></span>
                            </div>
                            <div class="col-md-4 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Expiry date
                                </label>
                                <Calendar
                                    className="form-control h-10 p-0 border-0"
                                    value={new Date(applicant.expiry_date)}
                                    disabled
                                />
                                <span class="text-danger !text-xs expiry_date-error"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="step-4">
                <div class="py-5 card border-0 rounded-0">
                    <h4 class="card-header pl-0 border-0 fw-bold">
                        3. LANGUAGE / DIALECT PROFICIENCY{" "}
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row">
                            <div class="col-md-4">
                                <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                    Check if applicable
                                </h6>
                            </div>
                            <div class="col-md-8">
                                <div class="row responsive-text-md-none">
                                    <div class="col-md-3">
                                        <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                            Read
                                        </h6>
                                    </div>
                                    <div class="col-md-3">
                                        <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                            Write
                                        </h6>
                                    </div>
                                    <div class="col-md-3">
                                        <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                            Speak
                                        </h6>
                                    </div>
                                    <div class="col-md-3">
                                        <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                            Understand
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {applicant.applicant_language_spoken.map((data) => (
                            <div class="row mb-4">
                                <div class="col-md-4">
                                    <input
                                        type="input"
                                        value={data.language_spoken}
                                        class="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis"
                                        disabled="disabled"
                                    />
                                </div>
                                <div class="col-md-8">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <Checkbox
                                                checked={
                                                    data.can_read == 1
                                                        ? true
                                                        : false
                                                }
                                                disabled
                                            ></Checkbox>
                                            <label className="pl-3 responsive-text-md-block">
                                                Read
                                            </label>
                                        </div>
                                        <div class="col-md-3">
                                            <Checkbox
                                                checked={
                                                    data.can_write == 1
                                                        ? true
                                                        : false
                                                }
                                                disabled
                                            ></Checkbox>
                                            <label className="pl-3 responsive-text-md-block">
                                                Write
                                            </label>
                                        </div>
                                        <div class="col-md-3">
                                            <Checkbox
                                                checked={
                                                    data.can_speak == 1
                                                        ? true
                                                        : false
                                                }
                                                disabled
                                            ></Checkbox>
                                            <label className="pl-3 responsive-text-md-block">
                                                Speak
                                            </label>
                                        </div>
                                        <div class="col-md-3">
                                            <Checkbox
                                                checked={
                                                    data.can_understand == 1
                                                        ? true
                                                        : false
                                                }
                                                disabled
                                            ></Checkbox>
                                            <label className="pl-3 responsive-text-md-block">
                                                Understand
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div class="step-5">
                <div class="py-5 card border-0 rounded-0">
                    <h4 class="card-header pl-0 border-0 fw-bold">
                        4. Educational Background
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row">
                            {applicant.applicant_educational_background.map(
                                (data) => (
                                    <div class="col-md-6">
                                        <div class="row mb-4">
                                            <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                                {data.type == 0 && "Elementary"}
                                                {data.type == 1 && "Secondary"}
                                                {data.type == 2 && "Tertiary"}
                                                {data.type == 3 &&
                                                    "Graduate Studies"}
                                            </h6>
                                            <div class="col-md-12 mb-2">
                                                <label
                                                    for="inputEmail4"
                                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                                >
                                                    School
                                                </label>
                                                <InputText
                                                    className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                                    value={data.school}
                                                    disabled
                                                />
                                            </div>
                                            <div class="col-md-12 mb-2">
                                                <label
                                                    for="inputEmail4"
                                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                                >
                                                    Course
                                                </label>
                                                <InputText
                                                    className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                                    value={data.course}
                                                    disabled
                                                />
                                            </div>
                                            <div class="col-md-12 mb-2">
                                                <label
                                                    for="inputEmail4"
                                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                                >
                                                    Year Graduated
                                                </label>
                                                <InputText
                                                    className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                                    value={data.year_graduated}
                                                    disabled
                                                />
                                            </div>
                                            <div class="row !pr-0">
                                                <h6 class="fw-bold text-dark-emphasis !text-xs text-gray-500 !pr-0 !text-md">
                                                    If undergraduate,{" "}
                                                </h6>
                                                <div class="col-md-6 mb-2">
                                                    <label
                                                        for="inputEmail4"
                                                        class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                                    >
                                                        What level?
                                                    </label>
                                                    <InputText
                                                        className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                                        value={data.level}
                                                        disabled
                                                    />
                                                </div>
                                                <div class="col-md-6 mb-2 !pr-0">
                                                    <label
                                                        for="inputEmail4"
                                                        class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                                    >
                                                        year last attended
                                                    </label>
                                                    <InputText
                                                        className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                                        value={
                                                            data.year_last_attended
                                                        }
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-md-12 mb-2">
                                                <label
                                                    for="inputEmail4"
                                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                                >
                                                    Awards recieved
                                                </label>
                                                <InputText
                                                    className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                                    value={data.awards}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div class="step-6">
                <div class="pt-5 card border-0 rounded-0">
                    <h4 class="card-header pl-0 border-0 fw-bold">
                        6. TECHNICAL/VOCATIONAL AND OTHER TRAINING (Include
                        courses takens as part of college education){" "}
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row">
                            <div class="col-md-3">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    TRAINING/VOCATIONAL COURSE
                                </h6>
                            </div>
                            <div class="col-md-3 responsive-text-md-none">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Duration
                                </h6>
                            </div>
                            <div class="col-md-3 responsive-text-md-none">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Training Institution
                                </h6>
                            </div>
                            <div class="col-md-3 responsive-text-md-none">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Certificates Received
                                </h6>
                            </div>
                        </div>

                        {applicant.applicant_vocational_course.map((data) => (
                            <div class="row mb-4">
                                <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                    >
                                        {data.id}
                                    </label>
                                    <InputText
                                        className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-900 border-light-emphasis"
                                        value={data.training_or_courses}
                                        placeholder="Training / Vocational Course"
                                        disabled
                                    />
                                </div>
                                <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                    >
                                        {data.id}
                                    </label>
                                    <InputText
                                        className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-900 border-light-emphasis"
                                        value={data.duration}
                                        placeholder="Duration"
                                        disabled
                                    />
                                </div>
                                <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                    >
                                        {data.id}
                                    </label>
                                    <InputText
                                        className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-900 border-light-emphasis"
                                        value={data.instituition}
                                        placeholder="Training Instituition"
                                        disabled
                                    />
                                </div>
                                <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                        for="inputEmail4"
                                        class="form-label responsive-visibility-md !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                    >
                                        {data.id}
                                    </label>
                                    <InputText
                                        placeholder="(NC I, NC II, NC II, NC IV, etc)"
                                        className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-900 border-light-emphasis"
                                        value={data.certificates}
                                        disabled
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div class="step-7">
                <div class="pb-5 card border-0 rounded-0">
                    <h4 class="card-header pl-0 border-0 fw-bold">
                        7. ELIGIBILITY/ PROFESSIONAL LICENSE
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row">
                            <div class="col-md-4">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    ELIGIBILITY (Civil Service)
                                </h6>
                            </div>
                            <div class="col-md-4 responsive-text-md-none">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Rating
                                </h6>
                            </div>
                            <div class="col-md-4 responsive-text-md-none">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Date of examination
                                </h6>
                            </div>
                        </div>

                        {applicant.applicant_eligibility.map((data) => (
                            <div class="row mb-4">
                                <div class="col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                    >
                                        1
                                    </label>
                                    <InputText
                                        className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-900 border-light-emphasis"
                                        value={data.eligibility}
                                        placeholder="Eligibility (Civil Service)"
                                        disabled
                                    />
                                </div>
                                <div class="col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                    >
                                        1
                                    </label>
                                    <InputText
                                        className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-900 border-light-emphasis"
                                        value={data.rating}
                                        placeholder="Rating"
                                        disabled
                                    />
                                </div>
                                <div class="col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                    >
                                        1
                                    </label>
                                    <Calendar
                                        className="form-control calendar-text-xs h-10 p-0 border-0"
                                        value={
                                            new Date(data.date_of_examination)
                                        }
                                        dateFormat="dd/mm/yy"
                                        disabled
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div class="step-8">
                <div class="py-5 card border-0 rounded-0">
                    <h4 class="card-header pl-0 border-0 fw-bold">
                        8. WORK EXPERIENCE (Limit to 10 year period, start with
                        the most recent employment){" "}
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row responsive-text-md-none">
                            <div class="col-md-4">
                                <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                    Company Name
                                </h6>
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3">
                                        <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                            Address
                                        </h6>
                                    </div>
                                    <div class="col-md-3">
                                        <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                            Position
                                        </h6>
                                    </div>
                                    <div class="col-md-3">
                                        <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                            Inclusive Date
                                        </h6>
                                    </div>
                                    <div class="col-md-3">
                                        <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                            Status
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {applicant.applicant_work_experience.map(
                            (data, index) => (
                                <div class="row mb-4">
                                    <div class="col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                        >
                                            {index + 1}
                                        </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-900 border-light-emphasis"
                                            value={data.company_name}
                                            placeholder="Company Name"
                                            disabled
                                        />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="row">
                                            <div class="col-md-3  mb-4  d-flex flex-row align-items-center gap-3 ">
                                                <label
                                                    for="inputEmail4"
                                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                                >
                                                    {index + 1}
                                                </label>
                                                <InputText
                                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-900 border-light-emphasis"
                                                    value={data.address}
                                                    placeholder="Address"
                                                    disabled
                                                />
                                            </div>
                                            <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                                <label
                                                    for="inputEmail4"
                                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                                >
                                                    {index + 1}
                                                </label>
                                                <InputText
                                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-900 border-light-emphasis"
                                                    value={data.position}
                                                    placeholder="Position"
                                                    disabled
                                                />
                                            </div>
                                            <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                                <label
                                                    for="inputEmail4"
                                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                                >
                                                    {index + 1}
                                                </label>
                                                <Calendar
                                                    className="form-control calendar-text-xs h-10 p-0 border-0"
                                                    value={data.inclusive_date}
                                                    placeholder="Inclusive Date"
                                                    disabled
                                                />
                                            </div>
                                            <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                                <label
                                                    for="inputEmail4"
                                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                                >
                                                    {index + 1}
                                                </label>
                                                <InputText
                                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-900 border-light-emphasis"
                                                    value={data.status}
                                                    placeholder="Position"
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
            <div class="step-9">
                <div class="py-5 card border-0 rounded-0">
                    <h4 class="card-header pl-0 border-0 fw-bold">
                        8. OTHER SKILLS ACQUIRED WITHOUT FORMAL TRAINING{" "}
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Auto Mechanic"
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Auto Mechanic"
                                        )}
                                        disabled
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Auto Mechanic
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Electrician"
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Electrician"
                                        )}
                                        disabled
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Electrician
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Photography"
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Photography"
                                        )}
                                        disabled
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Photography
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Beautician"
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Beautician"
                                        )}
                                        disabled
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Beautician
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Embroidery"
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Embroidery"
                                        )}
                                        disabled
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Embroidery
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Plumbing"
                                        disabled
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Plumbing"
                                        )}
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Plumbing
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Carpentry Work"
                                        disabled
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Carpentry Work"
                                        )}
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Carpentry Work
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Gardening"
                                        disabled
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Gardening"
                                        )}
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Gardening
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Sewing Dresses"
                                        disabled
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Sewing Dresses"
                                        )}
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Sewing Dresses
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Computer Literate"
                                        disabled
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Computer Literate"
                                        )}
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Computer Literate
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Masonry"
                                        disabled
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Masonry"
                                        )}
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Masonry
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Stenography"
                                        disabled
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Stenography"
                                        )}
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Stenography
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Domestic Chores"
                                        disabled
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Domestic Chores"
                                        )}
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Domestic Chores
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Painter/Artist"
                                        disabled
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Painter/Artist"
                                        )}
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Painter/Artist
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Tailoring"
                                        disabled
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Tailoring"
                                        )}
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Tailoring
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Driving"
                                        disabled
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Driving"
                                        )}
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Driving
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="osawft"
                                        id="osawft"
                                        value="Painting Jobs"
                                        disabled
                                        checked={applicant.skills_without_formal_training.includes(
                                            "Painting Jobs"
                                        )}
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-900"
                                        for="osawft"
                                    >
                                        Painting Jobs
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <input
                                disabled
                                    type="input"
                                    placeholder="Others: "
                                    class="form-control osawft-others !text-xs !py-2.5 !text-gray-900 border-light-emphasis"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="step-10">
                <div class="py-5 card border-0 rounded-0">
                    <h4 class="card-header pl-0 border-0 text-center fw-bold">
                        CERTIFICATION/AUTHORIZATION
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row">
                            <h6 class="indent-16 !text-gray-900">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Auto Mechanic"
                                    disabled
                                    checked={
                                        applicant.is_authorization_accepted
                                    }
                                />
                                This is to certify that all data/information
                                that I have provided in this form are true to
                                the best of my knowledge.This Is also to
                                authorized the DOLE to include my profile in the
                                PESO Employment Information System , which ia a
                                subsystem of the PhilJobNet. It is understood
                                that my name shall be made available to
                                employers who have access to the Registry. I am
                                also aware that DOLE is not obliged to seek
                                employment on my behalf.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
