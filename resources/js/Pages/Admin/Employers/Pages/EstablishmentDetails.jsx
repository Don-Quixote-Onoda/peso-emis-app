import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';
import InputTextWrapper from "../../../FormComponents/InputTextWrapper";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import { useForm } from '@inertiajs/react';
import {
    regions,
    provinces,
    cities,
    barangays,
} from "select-philippines-address";
import { classNames } from "primereact/utils";

export default function EstablishmentDetails({ employer, back, setType }) {
    const { data, setData, post, reset, processing, errors } = useForm({
        establishment_accronym: employer.establishment_accronym,
        establishment_name: employer.establishment_name,
        is_authorization_accepted: employer.is_authorization_accepted,
        line_of_business: employer.line_of_business,
        total_work_force: employer.total_work_force,
        TIN_number: employer.TIN_number,
        e_signature: employer.e_signature,
        employer_type: employer.employer_type,
        id: employer.id
});
    useEffect(() => {
        console.log(data);
        console.log(employer);
    }, []);

    const [isSubmitted, setSubmitted] = useState(false);

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

    const onSubmit = (e) => {
        setSubmitted(true);
        
        if(
            data.establishment_accronym &&
            data.establishment_name &&
            data.is_authorization_accepted &&
            data.line_of_business &&
            data.total_work_force &&
            data.TIN_number &&
            data.e_signature &&
            data.employer_type
        )
         {
            post('/api/update-employer-establishment-details', {
                forceFormData: true,
                onSuccess: () =>{
                    console.log('success');
                    // sessionStorage.clear();
                    reset();
                    setSubmitted(false);
                    setType('default');
                },
                onError: () => {
                    // console.log(errors);
                },
            });
         }
    
        
    };

    return (
        <>
        <div class="step-1">
                <div class="card rounded-0 border-0">
                    <div class=" bg-light mb-2 font-bold mt-10">
                        <div className="flex justify-between">
                        <h4 class="card-title fw-bold">
                        I. ESTABLISHMENT DETAILS
                        </h4>
                        <Button
                    icon="pi pi-arrow-left"
                    className="mr-2"
                    label="Back"
                    onClick={() => back()}
                />
                        </div>
                    </div>
                    <div class="card-body row p-0">
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                className={`form-label !text-xs !text-gray-400 fw-bold text-light-emphasis`}
                            >
                                {" "}
                                Establishment Name:
                                <span className="text-red-500">*</span>{" "}
                            </label>
                            <InputText
                                // value={field.value}
                                value={data.establishment_name}
                                className={`form-control !text-xs !py-2.5 ${classNames(
                                    {
                                        "p-invalid":
                                            isSubmitted &&
                                            (data.establishment_name == "" ||
                                                data.establishment_name == null),
                                    }
                                )} !text-gray-500 border-light-emphasis establishment-name`}
                                onChange={(e) =>
                                    setData('establishment_name', e.target.value)
                                }
                            />
                            {isSubmitted &&
                                (data.establishment_name == "" ||
                                    data.establishment_name == null) && (
                                    <InputError
                                        message="Establishment Name is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                className={`form-label !text-xs ${classNames({
                                    "p-error": isSubmitted &&
                                    (data.establishment_accronym == "" ||
                                        data.establishment_accronym == null),
                                })} !text-gray-400 fw-bold text-light-emphasis`}
                            >
                                {" "}
                                Acronym/Abbreviation:
                                <span className="text-red-500">*</span>{" "}
                            </label>
                            <InputText
                                value={data.establishment_accronym}
                                className={`form-control !text-xs !py-2.5 ${classNames(
                                    {
                                        "p-invalid": isSubmitted &&
                                        (data.establishment_accronym == "" ||
                                            data.establishment_accronym == null),
                                    }
                                )} !text-gray-500 border-light-emphasis establishment-name`}
                                onChange={(e) => setData('establishment_accronym', e.target.value)}
                            />
                            {isSubmitted &&
                                (data.establishment_accronym == "" ||
                                    data.establishment_accronym == null) && (
                                    <InputError
                                        message="Establishment Abbreviation is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>
                        <div class="col-md-6 mb-4">
                                        <label
                                            for="inputEmail4"
                                            className={`form-label !text-xs ${classNames(
                                                { "p-error": errors.value }
                                            )} !text-gray-400 fw-bold text-light-emphasis`}
                                        >
                                            {" "}
                                            Tax Identification Number
                                            <span className="text-red-500">
                                                *
                                            </span>{" "}
                                        </label>
                                        <InputText
                                            value={data.TIN_number}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                    isSubmitted &&
                                                    (data.TIN_number == "" ||
                                                        data.TIN_number == null),
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                setData('TIN_number', e.target.value)
                                            }
                                        />
                                        {isSubmitted &&
                                (data.TIN_number == "" ||
                                    data.TIN_number == null) && (
                                    <InputError
                                        message="Tax Identification Number is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>
                        <div class="col-md-6 mb-4">
                                        <label
                                            for="inputEmail4"
                                            className={`form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis`}
                                        >
                                            {" "}
                                            Line of Business/Industry:
                                            <span className="text-red-500">
                                                *
                                            </span>{" "}
                                        </label>
                                        <InputText
                                            value={data.line_of_business}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                    isSubmitted &&
                                                    (data.line_of_business == "" ||
                                                        data.line_of_business == null),
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                setData('line_of_business', e.target.value)
                                            }
                                        />
                                        {isSubmitted &&
                                (data.line_of_business == "" ||
                                    data.line_of_business == null) && (
                                    <InputError
                                        message="Line of Business is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>

                        <div class="col-md-6 mb-4">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Employer type:
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Government"
                                                        checked={
                                                            data.employer_type ===
                                                            "Government"
                                                        }
                                                        onChange={(e) => setData('employer_type', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Government
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Private"
                                                        checked={
                                                            data.employer_type ===
                                                            "Private"
                                                        }
                                                        onChange={(e) => setData('employer_type', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Private
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Recruitment & Placement Agency (Local)"
                                                        checked={
                                                            data.employer_type ===
                                                            "Recruitment & Placement Agency (Local)"
                                                        }
                                                        onChange={(e) => setData('employer_type', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Recruitment & Placement
                                                        Agency (Local)
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Licensed Recruitment Agency (Overseas)"
                                                        checked={
                                                            data.employer_type ===
                                                            "Licensed Recruitment Agency (Overseas)"
                                                        }
                                                        onChange={(e) => setData('employer_type', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Licensed Recruitment
                                                        Agency (Overseas)
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="DO 174-17, Subcontractor"
                                                        checked={
                                                            data.employer_type ===
                                                            "DO 174-17, Subcontractor"
                                                        }

                                                        onChange={(e) => setData('employer_type', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        DO 174-17, Subcontractor
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {isSubmitted &&
                                (data.employer_type == "" ||
                                    data.employer_type == null) && (
                                    <InputError
                                        message="Employer Type is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>
                        <div class="col-md-6 mb-4">
                            
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Total Work Force:
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Micro (1-9)"
                                                        checked={
                                                            data.total_work_force ===
                                                            "Micro (1-9)"
                                                        }
                                                        onChange={(e) => setData('total_work_force', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Micro (1-9)
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Small (10-99)"
                                                        checked={
                                                            data.total_work_force ===
                                                            "Small (10-99)"
                                                        }

                                                        onChange={(e) => setData('total_work_force', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Small (10-99)
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Medium (100-199)"
                                                        checked={
                                                            data.total_work_force ===
                                                            "Medium (100-199)"
                                                        }
                                                        onChange={(e) => setData('total_work_force', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Medium (100-199)
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Large (200 and up)"
                                                        checked={
                                                            data.total_work_force ===
                                                            "Large (200 and up)"
                                                        }
                                                        onChange={(e) => setData('total_work_force', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Large (200 and up)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {isSubmitted &&
                                (data.total_work_force == "" ||
                                    data.total_work_force == null) && (
                                    <InputError
                                        message="Employer Type is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>

                        {/* <div class="col-md-12 mb-4">
                            <div class="row">
                                <div class="col-md-6 mb-4 d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Region
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={province}
                                        onSelect={region}
                                        className=" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>Select Region</option>
                                        {regionData &&
                                            regionData.length > 0 &&
                                            regionData.map((item) => (
                                                <option
                                                    key={item.region_code}
                                                    value={item.region_code}
                                                    selected={
                                                        regionAddr ==
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
                                <div class="col-md-6 mb-4 d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Province
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={city}
                                        class=" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>
                                            Select Province
                                        </option>
                                        {provinceData &&
                                            provinceData.length > 0 &&
                                            provinceData.map((item) => (
                                                <option
                                                    key={item.province_code}
                                                    value={item.province_code}
                                                    selected={
                                                        provinceAddr ==
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
                                <div class="col-md-6 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Municipality/City
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={barangay}
                                        class=" pa_city !text-xs !py-2.5 !rounded form-select !border-gray-300 !text-gray-500 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>Select City</option>
                                        {cityData &&
                                            cityData.length > 0 &&
                                            cityData.map((item) => (
                                                <option
                                                    key={item.city_code}
                                                    value={item.city_code}
                                                    selected={
                                                        cityAddr ==
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
                                <div class="col-md-6 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Barangay
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={brgy}
                                        class=" pa_barangay !text-xs !rounded form-select !border-gray-300 !py-2.5 !text-gray-500 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>
                                            Select Barangay
                                        </option>
                                        {barangayData &&
                                            barangayData.length > 0 &&
                                            barangayData.map((item) => (
                                                <option
                                                    key={item.brgy_code}
                                                    value={item.brgy_code}
                                                    selected={
                                                        barangayAddr ==
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
                                        stateValue={houseNumber_Street_Village}
                                        stateMethod={
                                            setHouseNumber_Street_Village
                                        }
                                        isRequired={false}
                                        label={"House No./ Street Village"}
                                    />
                                    {isSubmitted && !isCompleteAddress && (
                                <InputError
                                    message="Complete Address is required!"
                                    className="mt-2"
                                />
                            )}
                                </div>
                                
                            </div>
                            
                        </div> */}
                    </div>
                </div>
            </div>
            <Button
                    className="mr-2 w-20"
                    label="Save"
                    onClick={() => onSubmit()}
                />
        </>
    );
}
