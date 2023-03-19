import React, { useState, useRef } from "react";
import NavigatorButton from "../Components/NavigatorButton";
export default function Language({
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
            <div class="step-4">
            <div class="py-5 card border-0 rounded-0">
                <h4 class="card-header pl-0 border-0 fw-bold">
                    3. LANGUAGE / DIALECT PROFICIENCY{" "}
                </h4>
                <div class="card-body pl-0 pt-3">
                    <div class="row">
                        <div class="col-md-4">
                            <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                Check if applicable
                            </h6>
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-3">
                                    <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                        Read
                                    </h6>
                                </div>
                                <div class="col-md-3">
                                    <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                        Write
                                    </h6>
                                </div>
                                <div class="col-md-3">
                                    <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                        Speak
                                    </h6>
                                </div>
                                <div class="col-md-3">
                                    <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                        Understand
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-4">
                            <input
                                type="input"
                                value="English"
                                class="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                disabled="disabled"
                            />
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-3">
                                    <input
                                        class="form-check-input is_can_read_english local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="exampleRadios"
                                        id="exampleRadios1"
                                        value="1"
                                    />
                                </div>
                                <div class="col-md-3">
                                    <input
                                        class="form-check-input is_can_write_english local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="exampleRadios"
                                        id="exampleRadios1"
                                        value="1"
                                    />
                                </div>
                                <div class="col-md-3">
                                    <input
                                        class="form-check-input is_can_speak_english local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="exampleRadios"
                                        id="exampleRadios1"
                                        value="1"
                                    />
                                </div>
                                <div class="col-md-3">
                                    <input
                                        class="form-check-input is_can_understand_english local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="exampleRadios"
                                        id="exampleRadios1"
                                        value="1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-4">
                            <input
                                type="input"
                                value="Filipino"
                                class="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                disabled="disabled"
                            />
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-3">
                                    <input
                                        class="form-check-input is_can_read_filipino local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="exampleRadios"
                                        id="exampleRadios1"
                                        value="1"
                                    />
                                </div>
                                <div class="col-md-3">
                                    <input
                                        class="form-check-input is_can_write_filipino local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="exampleRadios"
                                        id="exampleRadios1"
                                        value="1"
                                    />
                                </div>
                                <div class="col-md-3">
                                    <input
                                        class="form-check-input is_can_speak_filipino local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="exampleRadios"
                                        id="exampleRadios1"
                                        value="1"
                                    />
                                </div>
                                <div class="col-md-3">
                                    <input
                                        class="form-check-input is_can_understand_filipino local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="exampleRadios"
                                        id="exampleRadios1"
                                        value="1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-4">
                            <input
                                type="input"
                                class="form-control !text-xs  !py-2.5 !text-gray-500 border-light-emphasis"
                                placeholder="Others: "
                            />
                            <span class="text-danger !text-xs language_or_dialect_proficiency-error"></span>
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-3">
                                    <input
                                        class="form-check-input is_can_read_others local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="exampleRadios"
                                        id="exampleRadios1"
                                        value="option1"
                                    />
                                </div>
                                <div class="col-md-3">
                                    <input
                                        class="form-check-input is_can_write_others local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="exampleRadios"
                                        id="exampleRadios1"
                                        value="option1"
                                    />
                                </div>
                                <div class="col-md-3">
                                    <input
                                        class="form-check-input is_can_speak_others local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="exampleRadios"
                                        id="exampleRadios1"
                                        value="option1"
                                    />
                                </div>
                                <div class="col-md-3">
                                    <input
                                        class="form-check-input is_can_understand_others local_preferred_work_location border-light-emphasis"
                                        type="checkbox"
                                        name="exampleRadios"
                                        id="exampleRadios1"
                                        value="option1"
                                    />
                                </div>
                            </div>
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
