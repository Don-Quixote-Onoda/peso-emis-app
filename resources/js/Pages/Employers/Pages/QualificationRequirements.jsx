import React, { useState, useRef, useEffect } from "react";

import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import InputTextWrapper from "../../FormComponents/InputTextWrapper";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import NavigatorButton from "../Components/NavigatorButton";
import { Controller, set, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Checkbox } from "primereact/checkbox";

import { Toast } from "primereact/toast";

export default function EstablishmentContactDetails({
    activeIndex,
    numberOfPage,
    setActiveIndex,
    counterPrevious,
}) {
    const [isAcceptDisability, setIsAcceptDisability] = useSessionStorage(
        sessionStorage.getItem("isAcceptDisability"),
        "isAcceptDisability"
    );
    const [workExperience, setWorkExperience] = useSessionStorage(
        sessionStorage.getItem("workExperience"),
        "workExperience"
    );

    const [sex, setSex] = useSessionStorage(
        sessionStorage.getItem("sex"),
        "sex"
    );

    const [civilStatus, setCivilStatus] = useSessionStorage(
        sessionStorage.getItem("civilStatus"),
        "civilStatus"
    );

    const [religion, setReligion] = useSessionStorage(
        sessionStorage.getItem("religion"),
        "religion"
    );

    const [educationalLevel, setEducationalLevel] = useSessionStorage(
        sessionStorage.getItem("educationalLevel"),
        "educationalLevel"
    );

    const [otherQualifications, setOtherQualifications] = useSessionStorage(
        sessionStorage.getItem("otherQualifications"),
        "otherQualifications"
    );

    const [license, setLicense] = useSessionStorage(
        sessionStorage.getItem("license"),
        "license"
    );

    const [certification, setCertification] = useSessionStorage(
        sessionStorage.getItem("certification"),
        "certification"
    );

    const [courseOrMajor, setCourseOrMajor] = useSessionStorage(
        sessionStorage.getItem("courseOrMajor"),
        "courseOrMajor"
    );

    const [eligibility, setEligibility] = useSessionStorage(
        sessionStorage.getItem("eligibility"),
        "eligibility"
    );

    const [languageOrDialectSpoken, setLanguageOrDialectSpoken] =
        useSessionStorage(
            sessionStorage.getItem("languageOrDialectSpoken"),
            "languageOrDialectSpoken"
        );

    const [preferredResidence, setPreferredResidence] = useSessionStorage(
        sessionStorage.getItem("preferredResidence"),
        "preferredResidence"
    );

    const [disabilityAccepted, setDisabilityAccepted] = useState("");

    const [disabilitiesAccepted, setDisabilitiesAccepted] = useSessionStorage(
        sessionStorage.getItem("disabilitiesAccepted"),
        "disabilitiesAccepted"
    );

    const [qualificationRequirementNatureOfWork, setQualificationRequirementNatureOfWork] = useState("")

    const [
        qualificationRequirementNatureOfWorks,
        setQualificationRequirementNatureOfWorks,
    ] = useSessionStorage(
        sessionStorage.getItem("qualificationRequirementNatureOfWorks"),
        "qualificationRequirementNatureOfWorks"
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
        setCertification(data.certification);
        setCivilStatus(data.civilStatus);
        setCourseOrMajor(data.courseOrMajor);
        setEducationalLevel(data.educationalLevel);
        setEligibility(data.eligibility);
        setLanguageOrDialectSpoken(data.languageOrDialectSpoken);
        setLicense(data.license);
        setPreferredResidence(data.preferredResidence);
        setReligion(data.religion);
        setSex(data.sex);
        setQualificationRequirementNatureOfWorks(qualificationRequirementNatureOfWork);
        setDisabilitiesAccepted(disabilityAccepted);
        setActiveIndex(activeIndex + 1);

        console.log(data);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? (
            <small className="p-error">{errors[name].message}</small>
        ) : (
            <small className="p-error">&nbsp;</small>
        );
    };

    const handleNatureOfWork = (value, e) => {
        if(e.target.checked && !qualificationRequirementNatureOfWork.includes(value)) {

            setQualificationRequirementNatureOfWork(qualificationRequirementNatureOfWork + " " + value);

        }
        else {
            setQualificationRequirementNatureOfWork(qualificationRequirementNatureOfWork.replace(value,''));
        }

        console.log(qualificationRequirementNatureOfWork);
};

const handleDisabilityAccepted = (value, e) => {
    if(e.target.checked && !disabilityAccepted.includes(value)) {

        setDisabilityAccepted(disabilityAccepted + " " + value);

    }
    else {
        setDisabilityAccepted(disabilityAccepted.replace(value,''));
    }

    console.log(disabilityAccepted);
};

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Toast ref={toast} />
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
                                <Controller
                                    name="workExperience"
                                    control={control}
                                    rules={{
                                        required:
                                            "Work Experience is required.",
                                    }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <label
                                                for="inputEmail4"
                                                className={`form-label !text-xs ${classNames(
                                                    { "p-error": errors.value }
                                                )} !text-gray-400 fw-bold text-light-emphasis`}
                                            >
                                                {" "}
                                                Work Experience:
                                                <span className="text-red-500">
                                                    *
                                                </span>{" "}
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
                                                    field.onChange(
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            {getFormErrorMessage(field.name)}
                                        </>
                                    )}
                                />
                            </div>

                            <div class="col-md-12 mb-4">
                                <Controller
                                    name="religion"
                                    control={control}
                                    rules={{
                                        required: "Religion is required.",
                                    }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <label
                                                for="inputEmail4"
                                                className={`form-label !text-xs ${classNames(
                                                    { "p-error": errors.value }
                                                )} !text-gray-400 fw-bold text-light-emphasis`}
                                            >
                                                {" "}
                                                Religion:
                                                <span className="text-red-500">
                                                    *
                                                </span>{" "}
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
                                                    field.onChange(
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            {getFormErrorMessage(field.name)}
                                        </>
                                    )}
                                />
                                <span class="text-danger !text-xs qualification-religion-error"></span>
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
                                        class="form-control other-qualification"
                                        placeholder="Leave a comment here"
                                        id="floatingTextarea2"
                                        style={{ height: "197px" }}
                                    ></textarea>
                                </div>
                                <span class="text-danger !text-xs other-qualification-error"></span>
                            </div>
                            <div class="col-md-12 mb-4">
                                <Controller
                                    name="license"
                                    control={control}
                                    rules={{
                                        required: "License is required.",
                                    }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <label
                                                for="inputEmail4"
                                                className={`form-label !text-xs ${classNames(
                                                    { "p-error": errors.value }
                                                )} !text-gray-400 fw-bold text-light-emphasis`}
                                            >
                                                {" "}
                                                License:
                                                <span className="text-red-500">
                                                    *
                                                </span>{" "}
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
                                                    field.onChange(
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            {getFormErrorMessage(field.name)}
                                        </>
                                    )}
                                />
                                <span class="text-danger !text-xs qualification-license-error"></span>
                            </div>
                            <div class="col-md-12 mb-4">
                                <Controller
                                    name="certification"
                                    control={control}
                                    rules={{
                                        required: "Certification is required.",
                                    }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <label
                                                for="inputEmail4"
                                                className={`form-label !text-xs ${classNames(
                                                    { "p-error": errors.value }
                                                )} !text-gray-400 fw-bold text-light-emphasis`}
                                            >
                                                {" "}
                                                Certification:
                                                <span className="text-red-500">
                                                    *
                                                </span>{" "}
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
                                                    field.onChange(
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            {getFormErrorMessage(field.name)}
                                        </>
                                    )}
                                />
                            </div>
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Nature of Work:{" "}
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
                                                    handleNatureOfWork(
                                                        "PESO",e
                                                    )
                                                }
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
                                                    handleNatureOfWork(
                                                        "SPES",e
                                                    )
                                                }
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
                                                    handleNatureOfWork(
                                                        "GIP",e
                                                    )
                                                }
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
                                                    handleNatureOfWork(
                                                        "JobStart Philippines",e
                                                    )
                                                }
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
                                                value="K-12 AMP"
                                                id="qnof"
                                                name="qnof"
                                                onChange={(e) =>
                                                    handleNatureOfWork(
                                                        "K-12 AMP",e
                                                    )
                                                }
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
                                                    handleNatureOfWork(
                                                        "Trabajo",e
                                                    )
                                                }
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
                                <span class="text-danger !text-xs qnof-error"></span>
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
                                    <Controller
                                        name="sex"
                                        control={control}
                                        rules={{
                                            required: "Sex is required.",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div className="flex flex-nowrap items-center">
                                                            <RadioButton
                                                                className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                                inputId="f5"
                                                                {...field}
                                                                inputRef={
                                                                    field.ref
                                                                }
                                                                value="Male"
                                                                checked={
                                                                    field.value ===
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
                                                                {...field}
                                                                inputRef={
                                                                    field.ref
                                                                }
                                                                value="Female"
                                                                checked={
                                                                    field.value ===
                                                                    "Female"
                                                                }
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
                                                                {...field}
                                                                inputRef={
                                                                    field.ref
                                                                }
                                                                value="No Preference"
                                                                checked={
                                                                    field.value ===
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
                                                {getFormErrorMessage(
                                                    field.name
                                                )}
                                            </>
                                        )}
                                    />
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                    >
                                        Civil Status:{" "}
                                    </label>
                                    <Controller
                                        name="civilStatus"
                                        control={control}
                                        rules={{
                                            required: "Civil Status is required.",
                                        }}
                                        render={({ field }) => (
                                            <>
                                               
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div className="flex flex-nowrap items-center">
                                                            <RadioButton
                                                                className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                                inputId="f5"
                                                                {...field}
                                                                inputRef={
                                                                    field.ref
                                                                }
                                                                value="Single"
                                                                checked={
                                                                    field.value ===
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
                                                                {...field}
                                                                inputRef={
                                                                    field.ref
                                                                }
                                                                value="Married"
                                                                checked={
                                                                    field.value ===
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
                                                                {...field}
                                                                inputRef={
                                                                    field.ref
                                                                }
                                                                value="No Preference"
                                                                checked={
                                                                    field.value ===
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
                                                {getFormErrorMessage(
                                                    field.name
                                                )}
                                            </>
                                        )}
                                    />
                                    <span class="text-danger !text-xs qualification_civil_status-error"></span>
                                </div>
                                <div class="col-md-12 mb-4">
                                    <Controller
                                        name="educationalLevel"
                                        control={control}
                                        rules={{
                                            required:
                                                "Educational Level is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label
                                                    for="inputEmail4"
                                                    className={`form-label !text-xs ${classNames(
                                                        {
                                                            "p-error":
                                                                errors.value,
                                                        }
                                                    )} !text-gray-400 fw-bold text-light-emphasis`}
                                                >
                                                    {" "}
                                                    Educational Level:
                                                    <span className="text-red-500">
                                                        *
                                                    </span>{" "}
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
                                                        field.onChange(
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                {getFormErrorMessage(
                                                    field.name
                                                )}
                                            </>
                                        )}
                                    />
                                </div>
                                <div class="col-md-12 mb-4">
                                    <Controller
                                        name="courseOrMajor"
                                        control={control}
                                        rules={{
                                            required:
                                                "Course or Major is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label
                                                    for="inputEmail4"
                                                    className={`form-label !text-xs ${classNames(
                                                        {
                                                            "p-error":
                                                                errors.value,
                                                        }
                                                    )} !text-gray-400 fw-bold text-light-emphasis`}
                                                >
                                                    {" "}
                                                    Course or Major:
                                                    <span className="text-red-500">
                                                        *
                                                    </span>{" "}
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
                                                        field.onChange(
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                {getFormErrorMessage(
                                                    field.name
                                                )}
                                            </>
                                        )}
                                    />
                                    <span class="text-danger !text-xs qualification-course-error"></span>
                                </div>
                                <div class="col-md-12 mb-4">
                                    <Controller
                                        name="eligibility"
                                        control={control}
                                        rules={{
                                            required:
                                                "Eligibility is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label
                                                    for="inputEmail4"
                                                    className={`form-label !text-xs ${classNames(
                                                        {
                                                            "p-error":
                                                                errors.value,
                                                        }
                                                    )} !text-gray-400 fw-bold text-light-emphasis`}
                                                >
                                                    {" "}
                                                    Eligibility:
                                                    <span className="text-red-500">
                                                        *
                                                    </span>{" "}
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
                                                        field.onChange(
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                {getFormErrorMessage(
                                                    field.name
                                                )}
                                            </>
                                        )}
                                    />
                                    <span class="text-danger !text-xs qualification-eligibility-error"></span>
                                </div>
                                <div class="col-md-12 mb-4">
                                    <Controller
                                        name="languageOrDialectSpoken"
                                        control={control}
                                        rules={{
                                            required:
                                                "Language or Dialect Spoken is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label
                                                    for="inputEmail4"
                                                    className={`form-label !text-xs ${classNames(
                                                        {
                                                            "p-error":
                                                                errors.value,
                                                        }
                                                    )} !text-gray-400 fw-bold text-light-emphasis`}
                                                >
                                                    {" "}
                                                    Language or Dialect Spoken:
                                                    <span className="text-red-500">
                                                        *
                                                    </span>{" "}
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
                                                        field.onChange(
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                {getFormErrorMessage(
                                                    field.name
                                                )}
                                            </>
                                        )}
                                    />
                                    <span class="text-danger !text-xs qualification-languange-spoken-error"></span>
                                </div>
                                <div class="col-md-12 mb-4">
                                    <Controller
                                        name="preferredResidence"
                                        control={control}
                                        rules={{
                                            required:
                                                "Preferred Residence is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label
                                                    for="inputEmail4"
                                                    className={`form-label !text-xs ${classNames(
                                                        {
                                                            "p-error":
                                                                errors.value,
                                                        }
                                                    )} !text-gray-400 fw-bold text-light-emphasis`}
                                                >
                                                    {" "}
                                                    Preferred Residence:
                                                    <span className="text-red-500">
                                                        *
                                                    </span>{" "}
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
                                                        field.onChange(
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                {getFormErrorMessage(
                                                    field.name
                                                )}
                                            </>
                                        )}
                                    />
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                    >
                                        Accepts Disability:{" "}
                                    </label>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input qualification_accept_disability border-light-emphasis "
                                                    type="radio"
                                                    value="Yes"
                                                    id="qualification_accept_disability"
                                                    name="qualification_accept_disability"
                                                    onChange={() =>
                                                        setIsAcceptDisability(
                                                            true
                                                        )
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
                                                    id="qualification_accept_disability"
                                                    name="qualification_accept_disability"
                                                    onChange={() =>
                                                        setIsAcceptDisability(
                                                            false
                                                        )
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
                                    <span class="text-danger !text-xs qualification_accept_disability-error"></span>
                                </div>
                                {isAcceptDisability && (
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
                                                        onChange={(e) =>
                                                            handleDisabilityAccepted(
                                                                "Visual",e
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
                                                        onChange={(e) =>
                                                            handleDisabilityAccepted(
                                                                "Physical",e
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
                                                        onChange={(e) =>
                                                            handleDisabilityAccepted(
                                                                "Hearing",e
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
                                                        onChange={(e) =>
                                                            handleDisabilityAccepted(
                                                                "Speech",e
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
                                                        Others (please specify):
                                                    </label>
                                                    <input
                                                        type="input"
                                                        class="form-control qualification_accept_disability_yes_others !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                                        id="qualification_accept_disability_yes_others"
                                                        name="qualification_accept_disability_yes_others"
                                                        onChange={(e) =>
                                                            handleDisabilityAccepted(
                                                                "input", e
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
            <NavigatorButton
                activeIndex={activeIndex}
                numberOfPage={numberOfPage}
                setActiveIndex={setActiveIndex}
                counterPrevious={counterPrevious}
            />
        </form>
    );
}
