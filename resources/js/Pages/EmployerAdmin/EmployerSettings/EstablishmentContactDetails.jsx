import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';
import InputTextWrapper from "../../FormComponents/InputTextWrapper";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import { useForm } from '@inertiajs/react';
import {
    regions,
    provinces,
    cities,
    barangays,
} from "select-philippines-address";
import { classNames } from "primereact/utils";

export default function EstablishmentContactDetails({ employer, back, setType }) {
    const { data, setData, post, reset, processing, errors } = useForm({
        email_address: employer.email_address,
        fax_number: employer.fax_number,
        fullname: employer.fullname,
        mobile_number: employer.mobile_number,
        position: employer.position,
        telephone_number: employer.telephone_number,
        title: employer.title,
        employer_id: employer.employer_id,
        id: employer.id
});
    useEffect(() => {
        console.log(data);
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
        
       
            post(route('update-establishment-contact-details'), {
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
        
    };

    return (
        <>
        <div class="step-1">
                <div class="card rounded-0 border-0">
                    <div class=" bg-light mb-2 font-bold mt-10">
                        <h4 class="card-title fw-bold">
                        II. ESTABLISHMENT CONTACT DETAILS
                        </h4>
                    </div>
                    <div class="card-body row">
                        <div class="col-md-12">
                            
                            
                            
                                        
                                        <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Title:<span className="text-red-500">
                                                *
                                            </span>
                            </label>
                                        <div class="row">
                                            <div class="col-md-1">
                                                <div className="flex flex-nowrap items-center" >
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Mr."
                                                        checked={
                                                            data.title ===
                                                            "Mr."
                                                        }
                                                        onChange={(e) => setData('title', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Mr.
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-1">
                                                <div className="flex flex-nowrap items-center" onClick={(e) => setOtherTitle(false)}>
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Ms."
                                                        checked={
                                                            data.title ===
                                                            "Ms."
                                                        }
                                                        onChange={(e) => setData('title', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Ms.
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-1">
                                                <div className="flex flex-nowrap items-center" onClick={(e) => setOtherTitle(false)}>
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Mrs."
                                                        checked={
                                                            data.title ===
                                                            "Mrs."
                                                        }
                                                        onChange={(e) => setData('title', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Mrs.
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-9">
                                                <div className="flex flex-nowrap items-center" >
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Others (please specify):"
                                                        checked={
                                                            data.title !==
                                                            "Others (please specify):" && data.title !==
                                                            "Mrs." && data.title !==
                                                            "Ms." && data.title !==
                                                            "Mr."
                                                            
                                                        }
                                                        onChange={(e) => setData('title', e.target.value)}
                                                    />
                                                    
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Others (please specify):
                                                    </label>
                                                </div>
                                            </div>
                                            {/* {otherTitle && <div className="col-md-6 mt-3">
                                            <InputText
                                            className={`form-control col-md-9 !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />

                                            </div>} */}
                                            {isSubmitted &&
                                (data.title == "" ||
                                    data.title == null) && (
                                    <InputError
                                        message="Establishment Name is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                                        </div>
                        </div>
                        <div class="col-md-6 mb-4">
                           
                            
                                         <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Contact Person (Full Name):
                            </label>
                                        <InputText
                                            // value={field.value}
                                            value={data.fullname}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                    isSubmitted &&
                                                    (data.fullname == "" ||
                                                        data.fullname == null),
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                setData('fullname', e.target.value)
                                            }
                                        />
                           {isSubmitted &&
                                (data.fullname == "" ||
                                    data.fullname == null) && (
                                    <InputError
                                        message="Contact Person is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>
                        <div class="col-md-6 mb-4">
                          
                                         <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Position:
                            </label>
                                        <InputText
                                            // value={field.value}
                                            value={data.position}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                    isSubmitted &&
                                                    (data.position == "" ||
                                                        data.position == null),
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                               setData('position',e.target.value)
                                            }
                                        />
                            {isSubmitted &&
                                (data.position == "" ||
                                    data.position == null) && (
                                    <InputError
                                        message="Position is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>
                        <div class="col-md-6 mb-4">
                       
                                         <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Telephone Number:
                            </label>
                                        <InputText
                                            value={data.telephone_number}
                                            className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                setData('telephone_number', e.target.value)
                                            }
                                        />
                            
                        </div>
                        <div class="col-md-6 mb-4">
                       
                                         <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Mobile Number:
                            </label>
                                        <InputText
                                            value={data.mobile_number}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                    isSubmitted &&
                                                    (data.mobile_number == "" ||
                                                        data.mobile_number == null),
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                setData('mobile_number', e.target.value)
                                            }
                                        />
                           {isSubmitted &&
                                (data.mobile_number == "" ||
                                    data.mobile_number == null) && (
                                    <InputError
                                        message="Mobile Number is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>
                        <div class="col-md-6 mb-4">
                        
                                         <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Fax Number:
                            </label>
                                        <InputText
                                            value={data.fax_number}
                                            className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                setData('fax_number', e.target.value)
                                            }
                                        />
                            
                        </div>
                        <div class="col-md-6 mb-4">
                       
                                         <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Email Adress:
                            </label>
                                        <InputText
                                            value={data.email_address}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                    isSubmitted &&
                                                    (data.email_address == "" ||
                                                        data.email_address == null),
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                setData('email_address', e.target.value)
                                            }
                                        />
                            {isSubmitted &&
                                (data.email_address == "" ||
                                    data.email_address == null) && (
                                    <InputError
                                        message="Email Address is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>
                        <div class="col-md-12 mb-4"></div>
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
