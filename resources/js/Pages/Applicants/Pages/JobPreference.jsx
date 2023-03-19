import React, { useState, useRef } from "react";
import NavigatorButton from "../Components/NavigatorButton";
export default function JobPreference({
    activeIndex,
    numberOfPage,
    setActiveIndex,
    counterPrevious,
}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveIndex(activeIndex + 1);
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
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
                                <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                    >
                                        1
                                    </label>
                                    <input
                                        type="input"
                                        class="form-control preferred_occupation !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                    />
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                    >
                                        2
                                    </label>
                                    <input
                                        type="input"
                                        class="form-control preferred_occupation !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                    />
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                    >
                                        3
                                    </label>
                                    <input
                                        type="input"
                                        class="form-control preferred_occupation !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                    />
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                        for="inputEmail4"
                                        class="form-label  !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                    >
                                        4
                                    </label>
                                    <input
                                        type="input"
                                        class="form-control preferred_occupation !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                    />
                                </div>
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
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="exampleRadios"
                                                    id="exampleRadios1"
                                                    value="option1"
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                    for="exampleRadios1"
                                                >
                                                    Local,specify
                                                    cities/municipalities:
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                            <label
                                                for="inputEmail4"
                                                class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                            >
                                                1
                                            </label>
                                            <input
                                                type="input"
                                                class="form-control !text-xs islocal_preferred_work_location !py-2.5 !text-gray-500 border-light-emphasis"
                                                disabled="disabled"
                                            />
                                        </div>
                                        <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                            <label
                                                for="inputEmail4"
                                                class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                            >
                                                2
                                            </label>
                                            <input
                                                type="input"
                                                class="form-control !text-xs islocal_preferred_work_location !py-2.5 !text-gray-500 border-light-emphasis"
                                                disabled="disabled"
                                            />
                                        </div>
                                        <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                            <label
                                                for="inputEmail4"
                                                class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                            >
                                                3
                                            </label>
                                            <input
                                                type="input"
                                                class="form-control !text-xs islocal_preferred_work_location !py-2.5 !text-gray-500 border-light-emphasis"
                                                disabled="disabled"
                                            />
                                        </div>
                                        <span class="text-danger !text-xs islocal_preferred_work_location-error"></span>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input overseas_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="exampleRadios"
                                                    id="exampleRadios1"
                                                    value="option1"
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                    for="exampleRadios1"
                                                >
                                                    Overseas,specify countries:
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                            <label
                                                for="inputEmail4"
                                                class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                            >
                                                1
                                            </label>
                                            <input
                                                type="input"
                                                class="form-control !text-xs isoverseas_preferred_work_location !py-2.5 !text-gray-500 border-light-emphasis"
                                                disabled="disabled"
                                            />
                                        </div>
                                        <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                            <label
                                                for="inputEmail4"
                                                class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                            >
                                                2
                                            </label>
                                            <input
                                                type="input"
                                                class="form-control !text-xs isoverseas_preferred_work_location !py-2.5 !text-gray-500 border-light-emphasis"
                                                disabled="disabled"
                                            />
                                        </div>
                                        <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                            <label
                                                for="inputEmail4"
                                                class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                            >
                                                3
                                            </label>
                                            <input
                                                type="input"
                                                class="form-control !text-xs isoverseas_preferred_work_location !py-2.5 !text-gray-500 border-light-emphasis"
                                                disabled="disabled"
                                            />
                                        </div>
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
                            <input
                                type="text"
                                class="form-control expected_salary !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                id="inputEmail4"
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
                            <input
                                type="text"
                                class="form-control passport_number !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                id="inputEmail4"
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
                            <input
                                type="date"
                                class="form-control expiry_date !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                id="inputEmail4"
                            />
                            <span class="text-danger !text-xs expiry_date-error"></span>
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
