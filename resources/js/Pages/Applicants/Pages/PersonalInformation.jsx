import React, { useState, useRef } from "react";
import NavigatorButton from "../Components/NavigatorButton";

import { InputText } from 'primereact/inputtext';
import { useSessionStorage, useLocalStorage } from "primereact/hooks";

import { Calendar } from 'primereact/calendar';
        
import { RadioButton } from 'primereact/radiobutton';

import { Dropdown } from 'primereact/dropdown';
        
        

export default function PersonalInformation({
    activeIndex,
    numberOfPage,
    setActiveIndex,
    counterPrevious,
}) {
    const [surname, setSurname] = useSessionStorage(
        sessionStorage.getItem("surname"),
        "surname"
    );

    const [firstname, setFirstname] = useSessionStorage(
        sessionStorage.getItem("firstname"),
        "firstname"
    );

    const [middlename, setMiddlename] = useSessionStorage(
        sessionStorage.getItem("middlename"),
        "middlename"
    );

    const [suffix, setSuffix] = useSessionStorage(
        sessionStorage.getItem("suffix"),
        "suffix"
    );

    const [birthdate, setBithdate] = useSessionStorage(
        sessionStorage.getItem("birthdate"),
        "birthdate"
    );

    const [religion, setReligion] = useSessionStorage(
        sessionStorage.getItem("religion"),
        "religion"
    );

    const [height, setHeight] = useSessionStorage(
        sessionStorage.getItem("height"),
        "height"
    );

    const [birthOfPlaceHouseOrStreet, setBirthOfPlaceHouseOrStreet] = useSessionStorage(
        sessionStorage.getItem("birthOfPlaceHouseOrStreet"),
        "birthOfPlaceHouseOrStreet"
    );

    const [presentAddressHouseOrStreet, setpresentAddressHouseOrStreet] = useSessionStorage(
        sessionStorage.getItem("presentAddressHouseOrStreet"),
        "presentAddressHouseOrStreet"
    );

    const [emailAddress, setEmailAddress] = useSessionStorage(
        sessionStorage.getItem("emailAddress"),
        "emailAddress"
    );

    const [phoneNumber, setPhoneNumber] = useSessionStorage(
        sessionStorage.getItem("phoneNumber"),
        "phoneNumber"
    );

    const [landlineNumber, setLandlineNumber] = useSessionStorage(
        sessionStorage.getItem("landlineNumber"),
        "landlineNumber"
    );

    const [GSISNumber, setGSISNumber] = useSessionStorage(
        sessionStorage.getItem("GSISNumber"),
        "GSISNumber"
    );

    const [pagIbigNumber, setPagIbigNumber] = useSessionStorage(
        sessionStorage.getItem("pagIbigNumber"),
        "pagIbigNumber"
    );

    const [philhealthNumber, setPhilhealthNumber] = useSessionStorage(
        sessionStorage.getItem("philhealthNumber"),
        "philhealthNumber"
    );

    const [sex, setSex] = useSessionStorage(
        sessionStorage.getItem("sex"),
        "sex"
    );

    const [civilStatus, setCivilStatus] = useSessionStorage(
        sessionStorage.getItem("civilStatus"),
        "civilStatus"
    );

    const [disability, setDisability] = useSessionStorage(
        sessionStorage.getItem("disability"),
        "disability"
    );

    const [activelyLookingForWork, setActivelyLookingForWork] = useSessionStorage(
        sessionStorage.getItem("activelyLookingForWork"),
        "activelyLookingForWork"
    );


    const [willingToWorkImmediately, setWillingToWorkImmediately] = useSessionStorage(
        sessionStorage.getItem("willingToWorkImmediately"),
        "willingToWorkImmediately"
    );

    const [is4psBeneficiary, setIs4psBeneficiary] = useSessionStorage(
        sessionStorage.getItem("is4psBeneficiary"),
        "is4psBeneficiary"
    );

    const [employementStatus, setEmployementStatus] = useSessionStorage(
        sessionStorage.getItem("employementStatus"),
        "employementStatus"
    );

    const civilStatuses = [
        { name: 'Single' },
        { name: 'Married' },
        { name: 'Widowed' },
        { name: 'Seperated' },
        { name: 'Live-in' },
    ];

    const disabilities = [
        { name: 'Visual' },
        { name: 'Hearing' },
        { name: 'Speech' },
        { name: 'Physical' },
        { name: 'Others' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveIndex(activeIndex + 1);
    }
    return (
        
        <form onSubmit={e => handleSubmit(e)}>
            <div class="step-1">
            <div class="card rounded-0 border-0">
                <div class=" bg-light mb-2 font-bold mt-10">
                    <h4 class="card-title fw-bold">1. Personal information</h4>
                </div>
                <div class="card-body row">
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Surname
                        </label>
                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                        <span class="text-danger !text-xs pi_surname-error"></span>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                        >
                            First Name
                        </label>
                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />

                        <span class="text-danger !text-xs pi_firstname-error"></span>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Middle Name
                        </label>
                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={middlename} onChange={(e) => setMiddlename(e.target.value)} />
                        <span class="text-danger !text-xs pi_middlename-error"></span>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Suffix
                        </label>
                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={suffix} onChange={(e) => setSuffix(e.target.value)} />
                        <span class="text-danger !text-xs pi_suffix-error"></span>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Date of Birth
                        </label>
                        <Calendar className="form-control p-0 border-0" value={birthdate} setBithdate={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
                        <span class="text-danger !text-xs pi_date_of_birth-error"></span>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Religion
                        </label>
                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={religion} onChange={(e) => setReligion(e.target.value)} />
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
                                <div class="form-check">
                                     <RadioButton inputId="ingredient1" name="sex" value="Male" onChange={(e) => setSex(e.value)} checked={sex === 'Male'} />
                                    <label
                                        class="form-check-label !text-xs !text-gray-500"
                                        for="exampleRadios1"
                                    >
                                        Male
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-check">
                                <RadioButton inputId="ingredient1" name="sex" value="Female" onChange={(e) => setSex(e.value)} checked={sex === 'Female'} />

                                    <label
                                        class="form-check-label !text-xs !text-gray-500"
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
                        
                        <Dropdown value={civilStatus} onChange={(e) => setCivilStatus(e.value)} options={civilStatuses} optionLabel="name" 
                editable placeholder="Select a Civil Status" className="form-select !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis" />
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
                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={height} onChange={(e) => setHeight(e.target.value)} />
                            <span class="input-group-text !text-gray-500 !text-xs border-light-emphasis">
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
                                <div class="col-md-2">
                                    <div class="form-check">
                                    <RadioButton inputId="ingredient1" name="activilyLookingForWork" value="Yes" onChange={(e) => setActivelyLookingForWork(e.value)} checked={activelyLookingForWork === 'Yes'} />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                            for="exampleRadios1"
                                        >
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <div class="form-check">
                                    <RadioButton inputId="ingredient1" name="activilyLookingForWork" value="No" onChange={(e) => setActivelyLookingForWork(e.value)} checked={activelyLookingForWork === 'No'} />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                            for="exampleRadios2"
                                        >
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <span class="text-danger !text-xs pi_looking_for_work-error"></span>
                            <div class="col-md-12 mb-4 is_actively_looking_for_work d-none">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    How long have you been looking for work?
                                </label>
                                <input
                                    type="text"
                                    class="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                />
                                <span class="text-danger !text-xs pi_is_actively_looking_for_work-error"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Willing to work immediately?{" "}
                        </label>
                        <div class="row">
                            <div class="col-md-2">
                                <div class="form-check">
                                <RadioButton inputId="ingredient1" name="willingToWorkImmediately" value="Yes" onChange={(e) => setWillingToWorkImmediately(e.value)} checked={willingToWorkImmediately === 'Yes'} />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                        for="exampleRadios1"
                                    >
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-10">
                                <div class="form-check">
                                <RadioButton inputId="ingredient1" name="willingToWorkImmediately" value="No" onChange={(e) => setWillingToWorkImmediately(e.value)} checked={willingToWorkImmediately === 'No'} />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                        for="exampleRadios2"
                                    >
                                        No
                                    </label>
                                </div>
                            </div>
                            <span class="text-danger !text-xs pi_when_to_work-error"></span>
                            <div class="col-md-12 mb-4 is_not_when_to_work d-none">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    If no, when?
                                </label>
                                <input
                                    type="text"
                                    class="form-control !py-2.5  pi_not_when_to_work !text-xs !text-gray-500 border-light-emphasis"
                                />
                                <span class="text-danger !text-xs pi_not_when_to_work-error"></span>
                            </div>
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
                            <div class="col-md-2">
                                <div class="form-check">
                                <RadioButton inputId="ingredient1" name="is4psBeneficiary" value="Yes" onChange={(e) => setIs4psBeneficiary(e.value)} checked={is4psBeneficiary === 'Yes'} />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                        for="exampleRadios1"
                                    >
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-10">
                                <div class="form-check">
                                <RadioButton inputId="ingredient1" name="is4psBeneficiary" value="No" onChange={(e) => setIs4psBeneficiary(e.value)} checked={is4psBeneficiary === 'No'} />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                        for="exampleRadios2"
                                    >
                                        No
                                    </label>
                                </div>
                            </div>
                            <span class="text-danger !text-xs pi_4ps_beneficiary-error"></span>
                            <div class="col-md-12 mb-4 is_4ps_beneficiary d-none">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    If yes, Household ID No.{" "}
                                </label>
                                <input
                                    type="text"
                                    class="form-control !py-2.5 pi_4ps_household_id !text-xs !text-gray-500 border-light-emphasis"
                                />
                                <span class="text-danger !text-xs pi_4ps_household_id-error"></span>
                            </div>
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
                                </label>
                                <select
                                    class="form-select pob_province border-light-emphasis !text-xs !py-2.5 !text-gray-500"
                                    aria-label="Default select example"
                                >
                                    <option value="0">Select Province</option>
                                </select>
                            </div>
                            <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                >
                                    Municipality/City
                                </label>
                                <select
                                    class="form-select pob_city !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                    aria-label="Default select example"
                                >
                                    <option value="0">
                                        Select Municipality
                                    </option>
                                </select>
                            </div>
                            <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                >
                                    Barangay
                                </label>
                                <select
                                    class=" pob_barangay  !text-xs !py-2.5 !text-gray-500 form-select border-light-emphasis"
                                    aria-label="Default select example"
                                >
                                    <option value="0">Select Barangay</option>
                                    <option value="1">Poblacion</option>
                                    <option value="2">Lumbo</option>
                                </select>
                            </div>
                            <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                <label
                                    for="inputEmail4"
                                    class="form-label pop_street !text-xs !text-gray-400 text-light-emphasis"
                                >
                                    House No./ Street Village
                                </label>
                                <input
                                    type="input"
                                    class="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <h5 class="fw-bold text-gray-500 text-dark-emphasis mb-4">
                            Present Address
                        </h5>
                        <div class="row">
                            <div class="col-md-12 mb-4 d-flex flex-column justify-content-between">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                >
                                    Province
                                </label>
                                <select
                                    class=" pa_province !text-xs !py-2.5 !text-gray-500 form-select border-light-emphasis"
                                    aria-label="Default select example"
                                >
                                    <option value="0">Select Province</option>
                                </select>
                            </div>
                            <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                >
                                    Municipality/City
                                </label>
                                <select
                                    class=" pa_city !text-xs !py-2.5 !text-gray-500 form-select border-light-emphasis"
                                    aria-label="Default select example"
                                >
                                    <option value="0">
                                        Select Municipality
                                    </option>
                                </select>
                            </div>
                            <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                >
                                    Barangay
                                </label>
                                <select
                                    class=" pa_barangay !text-xs !py-2.5 !text-gray-500 form-select border-light-emphasis"
                                    aria-label="Default select example"
                                >
                                    <option value="0">Select Barangay</option>
                                </select>
                            </div>
                            <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                >
                                    House No./ Street Village
                                </label>
                                <input
                                    type="input"
                                    class="form-control pa_street !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body row">
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Email Address
                        </label>
                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                        <span class="text-danger !text-xs pi_email_address-error"></span>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Cellphone Number
                        </label>
                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        <span class="text-danger !text-xs pi_celphone_number-error"></span>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Landline Number
                        </label>
                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={landlineNumber} onChange={(e) => setLandlineNumber(e.target.value)} />
                        <span class="text-danger !text-xs pi_landine_number-error"></span>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            GSIS/SSS Number
                        </label>
                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={GSISNumber} onChange={(e) => setGSISNumber(e.target.value)} />
                        <span class="text-danger !text-xs pi_sss_number-error"></span>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Pag-ibig Number
                        </label>
                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={pagIbigNumber} onChange={(e) => setPagIbigNumber(e.target.value)} />
                        <span class="text-danger !text-xs pi_pag_ibig_number-error"></span>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            PhilHealth Number
                        </label>
                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={philhealthNumber} onChange={(e) => setPhilhealthNumber(e.target.value)} />
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
                            <Dropdown value={disability} onChange={(e) => setDisability(e.value)} options={disabilities} optionLabel="name" 
                editable placeholder="Select a Disability" className="form-select !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis" />
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
                                    <div class="form-check">
                                    <RadioButton inputId="ingredient1" name="employementStatus" value="Employed" onChange={(e) => setEmployementStatus(e.value)} checked={employementStatus === 'Employed'} />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                            for="exampleRadios1"
                                        >
                                            Employed
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-check">
                                    <RadioButton inputId="ingredient1" name="employementStatus" value="Unemployed" onChange={(e) => setEmployementStatus(e.value)} checked={employementStatus === 'Unemployed'} />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                            for="exampleRadios2"
                                        >
                                            Unemployed
                                        </label>
                                    </div>
                                </div>
                                <span class="text-danger !text-xs pi_employed-error"></span>
                            </div>
                        </div>
                        <div class="col-md-12 mb-4 employed-status d-none">
                            <select
                                class="form-select  border-light-emphasis pi_employed_status  !text-xs !py-2.5 !text-gray-500"
                                aria-label="Default select example"
                            >
                                <option value="Wage Employed">
                                    Wage Employed
                                </option>
                                <option value="Self Employed">
                                    Self Employed
                                </option>
                            </select>
                            <span class="text-danger !text-xs pi_employed_status-error"></span>
                        </div>
                        <div class="col-md-12 mb-4 unemployed-status d-none">
                            <select
                                class="form-select pi_unemployed_status unemployed-status-select border-light-emphasis !text-xs !py-2.5 !text-gray-500"
                                aria-label="Default select example"
                            >
                                <option selected value="">
                                    Please Select unemployed status
                                </option>
                                <option value="0">
                                    New Entrant/Fresh Graduate
                                </option>
                                <option value="2">Finished Contract </option>
                                <option value="3">Resigned </option>
                                <option value="4">Retired </option>
                                <option value="5">
                                    Terminated/Laidoff(local)
                                </option>
                                <option value="6">
                                    Terminated/Laidoff(abroad), specify country
                                </option>
                                <option value="7">Others, specify </option>
                            </select>
                            <span class="text-danger !text-xs pi_unemployed_status-error"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <NavigatorButton
                activeIndex={activeIndex}
                numberOfPage={numberOfPage}
                setActiveIndex={setActiveIndex}
                counterPrevious={counterPrevious}
            />
        </form>
    );
}
