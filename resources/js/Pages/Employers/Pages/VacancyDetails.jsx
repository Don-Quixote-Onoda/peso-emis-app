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

    const [positionTitle, setPositionTitle] = useSessionStorage(
        sessionStorage.getItem("positionTitle"),
        "positionTitle"
    );

    const [natureOfWork, setNatureOfWork] = useSessionStorage(
        sessionStorage.getItem("natureOfWork"),
        "natureOfWork"
    );

    const [jobDescription, setJobDescription] = useSessionStorage(
        sessionStorage.getItem("jobDescription"),
        "jobDescription"
    );

    const [placeOfWork, setPlaceOfWork] = useSessionStorage(
        sessionStorage.getItem("placeOfWork"),
        "placeOfWork"
    );

    const [salary, setSalary] = useSessionStorage(
        sessionStorage.getItem("salary"),
        "salary"
    );

    const [vacancyCount, setVacancyCount] = useSessionStorage(
        sessionStorage.getItem("vacancyCount"),
        "vacancyCount"
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

    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? (
            <small className="p-error">{errors[name].message}</small>
        ) : (
            <small className="p-error">&nbsp;</small>
        );
    };

    const handleNatureOfWork = (value) => {
        setNatureOfWork('');
        !natureOfWork.includes(value) && setNatureOfWork(natureOfWork +" "+ value);
        console.log(natureOfWork);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Toast ref={toast} />
            <div class="step-3">
            <div class="card rounded-0 border-0">
                <div class=" bg-light mb-2 font-bold mt-10">
                    <h4 class="card-title fw-bold">III. VACANCY DETAILS</h4>
                </div>
                <div class="card-body row">
                    <div class="col-md-6">
                        <div class="col-md-12 mb-4">
                        <Controller
                                name="positionTitle"
                                control={control}
                                rules={{
                                    required:
                                        "Position Title is required.",
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
                                            Position Title:
                                            <span className="text-red-500">
                                                *
                                            </span>{" "}
                                        </label>
                                        <InputText
                                            id={field.name}
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
                            <span class="text-danger !text-xs  vacancy-title-error"></span>
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
                                    class="form-control  vacancy-job-description"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    style={{ height: "250px" }}
                                ></textarea>
                                
                            </div>
                            <span class="text-danger !text-xs vacancy-job-description-error"></span>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="row">
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
                                                class="form-check-input vacancy-nature-of-work  border-light-emphasis "
                                                name="vacancy-nature-of-work[]"
                                                type="checkbox"
                                                value="Permanent"
                                                id="vacancy-nature-of-work"
                                                onChange={() => handleNatureOfWork('Permanent')}
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
                                                value="Contractual"
                                                id="vacancy-nature-of-work"
                                                onChange={() => handleNatureOfWork('Contractual')}
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
                                                value="Project-based"
                                                id="vacancy-nature-of-work"
                                                onChange={() => handleNatureOfWork('Project-based')}
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
                                                value="Internship / OJT"
                                                id="vacancy-nature-of-work"
                                                onChange={() => handleNatureOfWork('Internship / OJT')}
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
                                                value="Part-time"
                                                id="vacancy-nature-of-work"
                                                onChange={() => handleNatureOfWork('Part-time')}
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
                                                value="Work from home / online-job"
                                                id="vacancy-nature-of-work"
                                                onChange={() => handleNatureOfWork('Work from home / online-job')}
                                            />
                                            <label
                                                class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                for="flexCheckDefault"
                                            >
                                                Work from home / online-job
                                            </label>
                                        </div>
                                    </div>
                                    <span class="text-danger !text-xs vacancy-nature-of-work-error"></span>
                                </div>
                            </div>
                            <div class="col-md-12 mb-4">
                            <Controller
                                name="placeOfWork"
                                control={control}
                                rules={{
                                    required:
                                        "Place of Work is required.",
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
                                            Place of Work:
                                            <span className="text-red-500">
                                                *
                                            </span>{" "}
                                        </label>
                                        <InputText
                                            id={field.name}
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
                                <span class="text-danger !text-xs vacancy-place-of-work-error"></span>
                            </div>
                            <div class="col-md-12 mb-4">
                            <Controller
                                name="salary"
                                control={control}
                                rules={{
                                    required:
                                        "Salary is required.",
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
                                            Salary:
                                            <span className="text-red-500">
                                                *
                                            </span>{" "}
                                        </label>
                                        <InputText
                                            id={field.name}
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
                                <span class="text-danger !text-xs vacancy-salary-error"></span>
                            </div>
                            <div class="col-md-12 mb-4">
                            <Controller
                                name="vacancyCount"
                                control={control}
                                rules={{
                                    required:
                                        "Vacancy Count is required.",
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
                                            Vacancy Count:
                                            <span className="text-red-500">
                                                *
                                            </span>{" "}
                                        </label>
                                        <InputText
                                            id={field.name}
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
                                <span class="text-danger !text-xs vacancy-count-error"></span>
                            </div>
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
