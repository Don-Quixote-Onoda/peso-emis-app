import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';
import InputTextWrapper from "@/Pages/FormComponents/InputTextWrapper";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import {
    regions,
    provinces,
    cities,
    barangays,
} from "select-philippines-address";

export default function EditApplicant({ data, setData, back }) {
    useEffect(() => {
        console.log(data);
        
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
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={data.surname}
                                onChange={(e) => setData('surname', e.target.value)}
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
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={data.firstname}
                                onChange={(e) => setData('firstname', e.target.value)}
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
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={data.middlename}
                                onChange={(e) => setData('middlename', e.target.value)}
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
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={data.suffix}
                                onChange={(e) => setData('suffix',e.target.value)}
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
                                value={new Date(data.birthdate)}
                                onChange={(e) => setData('birthdate', e.value)}
                                dateFormat="dd/mm/yy"
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
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={data.religion}
                                onChange={(e) => setData('religion',e.target.value)}
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
                                            onChange={(e) => setData('sex', e.value)}
                                            checked={data.sex === "Male"}
                                        />
                                        <label
                                            class="form-check-label !text-xs !text-gray-500"
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
                                            onChange={(e) => setData('sex', e.value)}
                                            checked={data.sex === "Female"}
                                        />

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

                            <Dropdown
                                value={data.civil_status}
                                onChange={(e) => setData('civil_status', e.value)}
                                options={civilStatuses}
                                optionLabel="name"
                                editable
                                placeholder="Select a Civil Status"
                                className="form-select h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"
                            />
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
                                    className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                    value={data.height}
                                    onChange={(e) => setData('height', e.target.value)}
                                />
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
                                    <div class="col-md-6">
                                        <div class="form-check pl-0 flex items-center gap-2">
                                            <RadioButton
                                                inputId="ingredient1"
                                                name="activilyLookingForWork"
                                                value="Yes"
                                                onChange={(e) =>
                                                    setData(
                                                        'is_actively_looking_for_work',
                                                        e.value
                                                    )
                                                }
                                                checked={
                                                    data.is_actively_looking_for_work ===
                                                    1
                                                }
                                            />
                                            <label
                                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
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
                                                onChange={(e) =>
                                                    setData(
                                                        'is_actively_looking_for_work',
                                                        e.value
                                                    )
                                                }
                                                checked={
                                                    data.is_actively_looking_for_work ===
                                                    0
                                                }
                                            />
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
                                {data.is_actively_looking_for_work == 1 && (
                                    <div class="col-md-12 mb-4 is_actively_looking_for_work">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            How long have you been looking for
                                            work?
                                        </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={data.find_job_duration}
                                            onChange={(e) =>
                                                setData(
                                                    'find_job_duration',
                                                    e.target.value
                                                )
                                            }
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
                                Willing to work immediately?{" "}
                            </label>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-check pl-0 flex items-center gap-2">
                                        <RadioButton
                                            inputId="ingredient1"
                                            name="willingToWorkImmediately"
                                            value="Yes"
                                            onChange={(e) =>
                                                setData(
                                                    'is_willing_to_work_immidiately',
                                                    e.value
                                                )
                                            }
                                            checked={
                                                data.is_willing_to_work_immidiately ===
                                                1
                                            }
                                        />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-500"
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
                                            onChange={(e) =>
                                                setData(
                                                    'is_willing_to_work_immidiately',
                                                    e.value
                                                )
                                            }
                                            checked={
                                                data.is_willing_to_work_immidiately ===
                                                0
                                            }
                                        />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                            for="exampleRadios2"
                                        >
                                            No
                                        </label>
                                    </div>
                                </div>
                                <span class="text-danger !text-xs pi_when_to_work-error"></span>
                                {data.is_willing_to_work_immidiately == 0 && (
                                    <div class="col-md-12 mb-4 is_not_when_to_work">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            If no, when?
                                        </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={noWhenToWork}
                                            onChange={(e) =>
                                                setData('when_to_start_working', e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setData('is_4Ps', e.value)
                                            }
                                            checked={data.is_4Ps === 1}
                                        />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-500"
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
                                            onChange={(e) =>
                                                setData('is_4Ps', e.value)
                                            }
                                            checked={data.is_4Ps === 0}
                                        />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                            for="exampleRadios2"
                                        >
                                            No
                                        </label>
                                    </div>
                                </div>
                                <span class="text-danger !text-xs pi_4ps_beneficiary-error"></span>
                                {data.is_4Ps == 1 && (
                                    <div class="col-md-12 mb-4 is_4ps_beneficiary">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            If yes, Household ID No.
                                        </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={data.household_id_4ps}
                                            onChange={(e) =>
                                                setData(
                                                    'household_id_4ps',
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <span class="text-danger !text-xs pi_4ps_household_id-error"></span>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* <div class="col-md-6 mb-4">
                            <h5 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                Place of Birth
                            </h5>
                            <div class="row">
                                <div class="col-md-12 mb-4 d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Region
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pob_province}
                                        onSelect={pob_region}
                                        className=" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>Select Region</option>
                                        {pob_regionData &&
                                            pob_regionData.length > 0 &&
                                            pob_regionData.map((item) => (
                                                <option
                                                    key={item.region_code}
                                                    value={item.region_code}
                                                    selected={
                                                        pob_regionAddr ==
                                                        item.region_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.region_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4 d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Province
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pob_city}
                                        class=" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>
                                            Select Province
                                        </option>
                                        {pob_provinceData &&
                                            pob_provinceData.length > 0 &&
                                            pob_provinceData.map((item) => (
                                                <option
                                                    key={item.province_code}
                                                    value={item.province_code}
                                                    selected={
                                                        pob_provinceAddr ==
                                                        item.province_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.province_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Municipality/City
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pob_barangay}
                                        class=" pa_city !text-xs !py-2.5 !rounded form-select !border-gray-300 !text-gray-500 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>Select City</option>
                                        {pob_cityData &&
                                            pob_cityData.length > 0 &&
                                            pob_cityData.map((item) => (
                                                <option
                                                    key={item.city_code}
                                                    value={item.city_code}
                                                    selected={
                                                        pob_cityAddr ==
                                                        item.city_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.city_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Barangay
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pob_brgy}
                                        class=" pa_barangay !text-xs !rounded form-select !border-gray-300 !py-2.5 !text-gray-500 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>
                                            Select Barangay
                                        </option>
                                        {pob_barangayData &&
                                            pob_barangayData.length > 0 &&
                                            pob_barangayData.map((item) => (
                                                <option
                                                    key={item.brgy_code}
                                                    value={item.brgy_code}
                                                    selected={
                                                        pob_barangayAddr ==
                                                        item.brgy_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.brgy_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <InputTextWrapper
                                        stateValue={
                                            pob_houseNumber_Street_Village
                                        }
                                        stateMethod={
                                            pob_setHouseNumber_Street_Village
                                        }
                                        isRequired={false}
                                        label={"House No./ Street Village"}
                                    />
                                </div>
                            </div>
                        </div> */}

                        {/* <div class="col-md-6 mb-4">
                            <h5 class="fw-bold text-gray-500 text-dark-emphasis mb-4">
                                Present Address
                            </h5>
                            <div class="row">
                                <div class="col-md-12 mb-4 d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Region
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pa_province}
                                        onSelect={pa_region}
                                        className=" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>Select Region</option>
                                        {pa_regionData &&
                                            pa_regionData.length > 0 &&
                                            pa_regionData.map((item) => (
                                                <option
                                                    key={item.region_code}
                                                    value={item.region_code}
                                                    selected={
                                                        pa_regionAddr ==
                                                        item.region_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.region_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4 d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Province
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pa_city}
                                        class=" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>
                                            Select Province
                                        </option>
                                        {pa_provinceData &&
                                            pa_provinceData.length > 0 &&
                                            pa_provinceData.map((item) => (
                                                <option
                                                    key={item.province_code}
                                                    value={item.province_code}
                                                    selected={
                                                        pa_provinceAddr ==
                                                        item.province_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.province_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Municipality/City
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pa_barangay}
                                        class=" pa_city !text-xs !py-2.5 !rounded form-select !border-gray-300 !text-gray-500 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>Select City</option>
                                        {pa_cityData &&
                                            pa_cityData.length > 0 &&
                                            pa_cityData.map((item) => (
                                                <option
                                                    key={item.city_code}
                                                    value={item.city_code}
                                                    selected={
                                                        pa_cityAddr ==
                                                        item.city_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.city_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Barangay
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pa_brgy}
                                        class=" pa_barangay !text-xs !rounded form-select !border-gray-300 !py-2.5 !text-gray-500 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>
                                            Select Barangay
                                        </option>
                                        {pa_barangayData &&
                                            pa_barangayData.length > 0 &&
                                            pa_barangayData.map((item) => (
                                                <option
                                                    key={item.brgy_code}
                                                    value={item.brgy_code}
                                                    selected={
                                                        pa_barangayAddr ==
                                                        item.brgy_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.brgy_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <InputTextWrapper
                                        stateValue={
                                            pa_houseNumber_Street_Village
                                        }
                                        stateMethod={
                                            pa_setHouseNumber_Street_Village
                                        }
                                        isRequired={false}
                                        label={"House No./ Street Village"}
                                    />
                                </div>
                            </div>
                        </div> */}
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
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={data.email_address}
                                onChange={(e) =>
                                    setData('email_address', e.target.value)
                                }
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
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={data.phone_number}
                                onChange={(e) => setData('phone_number', e.target.value)}
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
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={data.landline_number}
                                onChange={(e) =>
                                    setData('landline_number', e.target.value)
                                }
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
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={data.GSIS_SSS_id}
                                onChange={(e) => setData('GSIS_SSS_id', e.target.value)}
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
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={data.pag_ibig_number}
                                onChange={(e) =>
                                    setData('pag_ibig_number', e.target.value)
                                }
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
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={data.pag_ibig_number}
                                onChange={(e) =>
                                    setData('pag_ibig_number', e.target.value)
                                }
                            />
                            <span class="text-danger !text-xs pi_philheath_number-error"></span>
                        </div>
                        {/* <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                TIN Number
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={TINNumber}
                                onChange={(e) => setTINNumber(e.target.value)}
                            />
                            <span class="text-danger !text-xs pi_philheath_number-error"></span>
                        </div> */}
                        {/* <div class="col-md-6 mb-4">
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                >
                                    Disability
                                </label>
                                <Dropdown
                                    value={disability}
                                    onChange={(e) => setDisability(e.value)}
                                    options={disabilities}
                                    optionLabel="name"
                                    editable
                                    placeholder="Select a Disability"
                                    className="form-select h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"
                                />
                                <span class="text-danger !text-xs pi_disability-error"></span>
                            </div>
                        </div> */}
                        {/* <div class="col-md-6 mb-4">
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
                                                onChange={(e) =>
                                                    setEmployementStatus(
                                                        e.value
                                                    )
                                                }
                                                checked={
                                                    employementStatus ===
                                                    "Employed"
                                                }
                                            />
                                            <label
                                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
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
                                                onChange={(e) =>
                                                    setEmployementStatus(
                                                        e.value
                                                    )
                                                }
                                                checked={
                                                    employementStatus ===
                                                    "Unemployed"
                                                }
                                            />
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

                                {employementStatus === "Employed" && (
                                    <div class="row ">
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Wage Employed"
                                                    onChange={(e) =>
                                                        handleEmployedStatusTypeWageEmployed(
                                                            "Wage Employed"
                                                        )
                                                    }

                                                    checked={employedStatusTypeWageEmployed === "Wage Employed"}
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
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
                                                    checked={employedStatusTypeSelfEmployed === "Self Employed"}
                                                    onChange={(e) =>
                                                        handleEmployedStatusTypeSelfEmployed(
                                                            "Self Employed"
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                    for="osawft"
                                                >
                                                    Self Employed
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {employementStatus === "Unemployed" && (
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="New Entrant/Fresh Graduate"
                                                    checked={unEmployedStatusNewEntrant === "New Entrant/Fresh Graduate"}
                                                    onChange={(e) =>
                                                        handleUnEmployedStatusNewEntrant(
                                                            "New Entrant/Fresh Graduate"
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
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
                                                    checked={unEmployedStatusFinishedContract === "Finished Contract"}
                                                    onChange={(e) =>
                                                        handleUnEmployedStatusFinishedContract(
                                                            "Finished Contract"
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
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
                                                    checked={unEmployedStatusResigned === "Resigned"}
                                                    onChange={(e) =>
                                                        handleUnEmployedStatusResigned(
                                                            "Resigned"
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
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
                                                    checked={unEmployedStatusRetired === "Retired"}
                                                    onChange={(e) =>
                                                        handleUnEmployedStatusRetired(
                                                            "Retired"
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
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
                                                    checked={unEmployedStatusTerminatedLocal === "Terminated/Laidoff(local)"}
                                                    onChange={(e) =>
                                                        handleUnEmployedStatusTerminatedLocal(
                                                            "Terminated/Laidoff(local)"
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
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
                                                    checked={unEmployedStatusTerminatedAbroad === "Teminated/Laidoff(abroad)"}
                                                    onChange={(e) =>
                                                        handleUnEmployedStatusTerminatedAbroad(
                                                            "Teminated/Laidoff(abroad)", e
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                    for="osawft"
                                                >
                                                    Teminated/Laidoff(abroad)
                                                </label>
                                            </div>
                                            {
                                                teminated_Laidoff_abroad && <InputText
                                                className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                                value={unEmployedStatusTerminatedAbroadValue}
                                                onChange={(e) =>
                                                    setUnEmployedStatusTerminatedAbroadValue(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            }
                                            
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Others, specify"
                                                    checked={unEmployedStatusOthers === "Others, specify"}
                                                    onChange={(e) =>
                                                        handleUnEmployedStatusTerminatedOthers(
                                                            "Others, specify", e
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                    for="osawft"
                                                >
                                                    Others, specify
                                                </label>
                                            </div>
                                            {
                                                employedStatusOthers && <InputText
                                                className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                                value={unEmployedStatusOthersValue}
                                                onChange={(e) =>
                                                    setUnEmployedStatusOthersValue(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            }
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
