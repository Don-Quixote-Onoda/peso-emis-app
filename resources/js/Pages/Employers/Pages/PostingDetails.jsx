import React, { useState, useRef, useEffect } from "react";

import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import NavigatorButton from "../Components/NavigatorButton";

import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";

import { useForm } from '@inertiajs/react'
import axios from "axios";
import { Checkbox } from "primereact/checkbox";

export default function EstablishmentContactDetails({
    activeIndex,
    numberOfPage,
    setActiveIndex,
    counterPrevious,
}) {
    const [postingDate, setPostingDate] = useSessionStorage(
        sessionStorage.getItem("postingDate"),
        "postingDate"
    );
    
    const [isErrorImage, setErrorImage] = useState(false);
    const [validUntil, setValidUntil] = useSessionStorage(
        sessionStorage.getItem("validUntil"),
        "validUntil"
    );

    const defaultValues = {
        value: "",
    };

    const { data, setData, post, processing, errors } = useForm(sessionStorage)
      

    const toast = useRef(null);


    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     // post(route('register-employer'));
    //     console.log(data);

    //     const res = await axios.post('/api/employers', data);
    // };

    const submit = (e) => {
        e.preventDefault()
        if(authorizationAccepted && !isErrorImage)
            post('/api/employers', {
                onSuccess: () =>{
                    sessionStorage.clear();
                },
                onError: () => {
                    console.log(errors);
                },})
           
      }

    useState(()=>{
        
    }, []);
    const [authorizationAccepted, setAuthorizationAccepted] = useSessionStorage(
        sessionStorage.getItem("authorizationAccepted"),
        "authorizationAccepted"
    );

    const chooseOptions = {
        icon: "pi pi-fw pi-images",
        iconOnly: true,
        className: "custom-choose-btn p-button-rounded p-button-outlined",
    };
    const uploadOptions = {
        icon: "pi pi-fw pi-cloud-upload",
        iconOnly: true,
        className:
            "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
    };
    const cancelOptions = {
        icon: "pi pi-fw pi-times",
        iconOnly: true,
        className:
            "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
    };

    const handleFileUpload = (e, filename) => {
        let fileExtension = e.target.value.split('.').pop();
        if(fileExtension === 'png' || fileExtension === 'jpg')
        {
            setErrorImage(false);
           sessionStorage.setItem('e_signature', JSON.stringify(e.target.files[0]));
           setData('e_signature', e.target.files[0] );
        }
        else {
            setErrorImage(true);
        }
    }

    return (
        <form onSubmit={(e) => submit(e)}>
            <Toast ref={toast} />
            <div class="step-5">
                <div class="py-5 card border-0 rounded-0">
                    {/* <div class=" bg-light mb-2 font-bold mt-10">
                        <h4 class="card-title fw-bold">V. POSTING DETAILS</h4>
                    </div> */}
                    {/* <div class="row">
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
                                    value={postingDate}
                                    onChange={(e) => setPostingDate(e.value)}
                                />
                                <span class="text-danger !text-xs posting-details-date-error"></span>
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
                                    value={validUntil}
                                    onChange={(e) => setValidUntil(e.value)}
                                />
                                <span class="text-danger !text-xs posting-details-valid-until-error"></span>
                            </div>
                        </div>
                    </div> */}
                    <h4 class="card-header pl-0 border-0 text-center fw-bold mt-5">
                        CERTIFICATION/AUTHORIZATION
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row">
                        <div className="col-md-1 flex justify-end">
                        <Checkbox
                                    className="mr-3"
                                    onChange={(e) =>
                                        setAuthorizationAccepted(e.checked)
                                    }
                                    checked={authorizationAccepted}
                                ></Checkbox>
                        </div>
                            <div className="col-md-11">
                            <h6 class=" !text-gray-500">
                            
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
                    <div class="row mt-5">
                        <div class="flex justify-center">
                            <div class="mb-3 w-96">
                                <label
                                    for="formFile"
                                    class="form-label inline-block mb-2 text-gray-700"
                                >
                                    Upload applicant signature
                                </label>
                                <input
                                    class="form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      upload-applicant-signature
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    type="file"
                                    id="formFile"
                                    onChange={(e) => handleFileUpload(e, "product_image")}
                                />
                                {isErrorImage && <span className="text-red-500 text-xs">File must be png or jpg.</span>}
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
