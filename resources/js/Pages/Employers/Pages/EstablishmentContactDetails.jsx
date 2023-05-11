import React, { useState, useRef, useEffect } from "react";

import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import InputTextWrapper from "../../FormComponents/InputTextWrapper";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import NavigatorButton from "../Components/NavigatorButton";
import { Controller, set, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import InputError from "../../../Components/InputError";
import { Toast } from "primereact/toast";

export default function EstablishmentContactDetails({
    activeIndex,
    numberOfPage,
    setActiveIndex,
    counterPrevious,
}) {

    const [title, setTitle] = useSessionStorage(
        sessionStorage.getItem("title"),
        "title"
    );
    const [otherTitle, setOtherTitle] = useState(false);

    const [contactPerson, setContactPerson] = useSessionStorage(
        sessionStorage.getItem("contactPerson"),
        "contactPerson"
    );

    const [postion, setPosition] = useSessionStorage(
        sessionStorage.getItem("postion"),
        "postion"
    );

    const [telephoneNumber, setTelephoneNumber] = useSessionStorage(
        sessionStorage.getItem("telephoneNumber"),
        "telephoneNumber"
    );

    const [mobileNumber, setMobileNumber] = useSessionStorage(
        sessionStorage.getItem("mobileNumber"),
        "mobileNumber"
    );

    const [faxNumber, setFaxNumber] = useSessionStorage(
        sessionStorage.getItem("faxNumber"),
        "faxNumber"
    );

    const [emailAdress, setEmailAddress] = useSessionStorage(
        sessionStorage.getItem("emailAdress"),
        "emailAdress"
    );

    const toast = useRef(null);

    const show = () => {
        toast.current.show({
            severity: "success",
            summary: "Form Submitted",
            detail: getValues("value"),
        });
    };
    const [isSubmitted, setSubmitted] = useState(false);

    const defaultValues = {
        value: "",
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset,
    } = useForm({ defaultValues });

    const onSubmit = (e) => {
        e.preventDefault();
       
        setSubmitted(true);

        if(
            title &&
            contactPerson &&
            postion &&
            mobileNumber &&
            emailAdress
        )
        setActiveIndex(activeIndex + 1);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? (
            <small className="p-error">{errors[name].message}</small>
        ) : (
            <small className="p-error">&nbsp;</small>
        );
    };

    return (
        <form onSubmit={onSubmit}>
            <Toast ref={toast} />
            <div class="step-2">
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
                                                <div className="flex flex-nowrap items-center" onClick={(e) => setOtherTitle(false)}>
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Mr."
                                                        checked={
                                                            title ===
                                                            "Mr."
                                                        }
                                                        onChange={(e) => setTitle(e.target.value)}
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
                                                            title ===
                                                            "Ms."
                                                        }
                                                        onChange={(e) => setTitle(e.target.value)}
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
                                                            title ===
                                                            "Mrs."
                                                        }
                                                        onChange={(e) => setTitle(e.target.value)}
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
                                                <div className="flex flex-nowrap items-center"   onClick={(e) => setOtherTitle(true)}>
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Others (please specify):"
                                                        checked={
                                                            title !==
                                                            "Others (please specify):" && title !==
                                                            "Mrs." && title !==
                                                            "Ms." && title !==
                                                            "Mr."
                                                            
                                                        }
                                                        onChange={(e) => setTitle(e.target.value)}
                                                    />
                                                    
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Others (please specify):
                                                    </label>
                                                </div>
                                            </div>
                                            {otherTitle && <div className="col-md-6 mt-3">
                                            <InputText
                                            className={`form-control col-md-9 !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />

                                            </div>}
                                            {isSubmitted &&
                                (title == "" ||
                                    title == null) && (
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
                                            value={contactPerson}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                    isSubmitted &&
                                                    (contactPerson == "" ||
                                                        contactPerson == null),
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                setContactPerson(e.target.value)
                                            }
                                        />
                           {isSubmitted &&
                                (contactPerson == "" ||
                                    contactPerson == null) && (
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
                                            value={postion}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                    isSubmitted &&
                                                    (postion == "" ||
                                                        postion == null),
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                               setPosition(e.target.value)
                                            }
                                        />
                            {isSubmitted &&
                                (postion == "" ||
                                    postion == null) && (
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
                                            value={telephoneNumber}
                                            className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                setTelephoneNumber(e.target.value)
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
                                            value={mobileNumber}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                    isSubmitted &&
                                                    (mobileNumber == "" ||
                                                        mobileNumber == null),
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                setMobileNumber(e.target.value)
                                            }
                                        />
                           {isSubmitted &&
                                (mobileNumber == "" ||
                                    mobileNumber == null) && (
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
                                            value={faxNumber}
                                            className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                setFaxNumber(e.target.value)
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
                                            value={emailAdress}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                    isSubmitted &&
                                                    (emailAdress == "" ||
                                                        emailAdress == null),
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                setEmailAddress(e.target.value)
                                            }
                                        />
                            {isSubmitted &&
                                (emailAdress == "" ||
                                    emailAdress == null) && (
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
            <NavigatorButton
                activeIndex={activeIndex}
                numberOfPage={numberOfPage}
                setActiveIndex={setActiveIndex}
                counterPrevious={counterPrevious}
            />
        </form>
    );
}
