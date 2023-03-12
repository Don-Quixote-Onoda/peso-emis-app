import React, { useState, useRef, useEffect } from "react";

import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import InputTextWrapper from "../../FormComponents/InputTextWrapper";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import NavigatorButton from "../Components/NavigatorButton";
import { Controller, set, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";

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

    const onSubmit = (data) => {
        data.value && show();
        setActiveIndex(activeIndex+1);
        setTitle(data.title);
        setContactPerson(data.contactPerson);
        setPosition(data.position);
        setTelephoneNumber(data.telephoneNumber);
        setMobileNumber(data.mobileNumber);
        setFaxNumber(data.faxNumber);
        setEmailAddress(data.emailAdress);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? (
            <small className="p-error">{errors[name].message}</small>
        ) : (
            <small className="p-error">&nbsp;</small>
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                            
                            
                            <Controller
                                name="title"
                                control={control}
                                rules={{
                                    required: "Title is required.",
                                }}
                                render={({ field }) => (
                                    <>
                                        
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
                                                        {...field}
                                                        inputRef={field.ref}
                                                        value="Mr."
                                                        checked={
                                                            field.value ===
                                                            "Mr."
                                                        }
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
                                                        {...field}
                                                        inputRef={field.ref}
                                                        value="Ms."
                                                        checked={
                                                            field.value ===
                                                            "Ms."
                                                        }
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
                                                        {...field}
                                                        inputRef={field.ref}
                                                        value="Mrs."
                                                        checked={
                                                            field.value ===
                                                            "Mrs."
                                                        }
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
                                                        {...field}
                                                        inputRef={field.ref}
                                                        value="Others (please specify):"
                                                        checked={
                                                            field.value ===
                                                            "Others (please specify):"
                                                            
                                                        }

                                                      
                                                        
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
                                            id={field.name}
                                            className={`form-control col-md-9 !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                field.onChange(e.target.value)
                                            }
                                        />
                                            </div>}
                                        </div>
                                        
                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                        </div>
                        <div class="col-md-6 mb-4">
                           
                            <Controller
                                name="contactPerson"
                                control={control}
                                rules={{
                                    required: "Contact Person (Full Name) is required.",
                                }}
                                render={({ field, fieldState }) => (
                                    <>
                                         <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Contact Person (Full Name):
                            </label>
                                        <InputText
                                            id={field.name}
                                            // value={field.value}
                                            value={field.value}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                        fieldState.error,
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                field.onChange(e.target.value)
                                            }
                                        />

                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                            <span class="text-danger !text-xs contact-person-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                           <Controller
                                name="position"
                                control={control}
                                rules={{
                                    required: "Position is required.",
                                }}
                                render={({ field, fieldState }) => (
                                    <>
                                         <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Position:
                            </label>
                                        <InputText
                                            id={field.name}
                                            // value={field.value}
                                            value={field.value}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                        fieldState.error,
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                field.onChange(e.target.value)
                                            }
                                        />

                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                            <span class="text-danger !text-xs contact-person-position-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                        <Controller
                                name="telephoneNumber"
                                control={control}
                                rules={{
                                    required: "Telephone Number is required.",
                                }}
                                render={({ field, fieldState }) => (
                                    <>
                                         <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Telephone Number:
                            </label>
                                        <InputText
                                            id={field.name}
                                            // value={field.value}
                                            value={field.value}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                        fieldState.error,
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                field.onChange(e.target.value)
                                            }
                                        />

                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                            <span class="text-danger !text-xs contact-person-telephone-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                        <Controller
                                name="mobileNumber"
                                control={control}
                                rules={{
                                    required: "Mobile Number is required.",
                                }}
                                render={({ field, fieldState }) => (
                                    <>
                                         <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Mobile Number:
                            </label>
                                        <InputText
                                            id={field.name}
                                            // value={field.value}
                                            value={field.value}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                        fieldState.error,
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                field.onChange(e.target.value)
                                            }
                                        />

                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                            <span class="text-danger !text-xs contact-person-mobile-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                        <Controller
                                name="faxNumber"
                                control={control}
                                rules={{
                                    required: "Fax Number is required.",
                                }}
                                render={({ field, fieldState }) => (
                                    <>
                                         <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Fax Number:
                            </label>
                                        <InputText
                                            id={field.name}
                                            // value={field.value}
                                            value={field.value}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                        fieldState.error,
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                field.onChange(e.target.value)
                                            }
                                        />

                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                            <span class="text-danger !text-xs contact-person-fax-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                        <Controller
                                name="emailAdress"
                                control={control}
                                rules={{
                                    required: "Email Adress is required.",
                                }}
                                render={({ field, fieldState }) => (
                                    <>
                                         <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Email Adress:
                            </label>
                                        <InputText
                                            id={field.name}
                                            // value={field.value}
                                            value={field.value}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                        fieldState.error,
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                field.onChange(e.target.value)
                                            }
                                        />

                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                            <span class="text-danger !text-xs contact-person-email-error"></span>
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
