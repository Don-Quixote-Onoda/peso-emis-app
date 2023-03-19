import React, { useState, useRef } from "react";
import NavigatorButton from "../Components/NavigatorButton";
export default function Vocational({
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
            <div class="step-6">
                <div class="py-5 card border-0 rounded-0">
                    <h4 class="card-header pl-0 border-0 fw-bold">
                        6. TECHNICAL/VOCATIONAL AND OTHER TRAINING (Include
                        courses takens as part of college education){" "}
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row">
                            <div class="col-md-3">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    TRAINING/VOCATIONAL COURSE
                                </h6>
                            </div>
                            <div class="col-md-3">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Duration
                                </h6>
                            </div>
                            <div class="col-md-3">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Training Institution
                                </h6>
                            </div>
                            <div class="col-md-3">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Certificates Received
                                </h6>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                <input
                                    type="input"
                                    class="form-control technical_course_1 !text-xs islocal_preferred_work_location !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                            <div class="col-md-3">
                                <div class="row">
                                    <div class="col-md-6 !pr-0 ">
                                        <input
                                            type="date"
                                            class="form-control technical_course_duration_start_1 !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                        />
                                    </div>
                                    <div class="col-md-6 !pr-0">
                                        <input
                                            type="date"
                                            class="form-control technical_course_duration_end_1 !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <input
                                    type="input"
                                    class="form-control !text-xs technical_course_training_instituition_1 !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                            <div class="col-md-3">
                                <input
                                    type="input"
                                    placeholder="(NC I, NC II, NC II, NC IV, etc)"
                                    class="form-control !text-xs technical_course_certificates_recieved_1 !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    2
                                </label>
                                <input
                                    type="input"
                                    class="form-control technical_course_2 !text-xs islocal_preferred_work_location !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                            <div class="col-md-3">
                                <div class="row">
                                    <div class="col-md-6 !pr-0 ">
                                        <input
                                            type="date"
                                            class="form-control technical_course_duration_start_2 !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                        />
                                    </div>
                                    <div class="col-md-6 !pr-0">
                                        <input
                                            type="date"
                                            class="form-control technical_course_duration_end_2 !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <input
                                    type="input"
                                    class="form-control !text-xs technical_course_training_instituition_2 !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                            <div class="col-md-3">
                                <input
                                    type="input"
                                    placeholder="(NC I, NC II, NC II, NC IV, etc)"
                                    class="form-control !text-xs technical_course_certificates_recieved_2 !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    3
                                </label>
                                <input
                                    type="input"
                                    class="form-control technical_course_3 !text-xs islocal_preferred_work_location !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                            <div class="col-md-3">
                                <div class="row">
                                    <div class="col-md-6 !pr-0 ">
                                        <input
                                            type="date"
                                            class="form-control technical_course_duration_start_3 !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                        />
                                    </div>
                                    <div class="col-md-6 !pr-0">
                                        <input
                                            type="date"
                                            class="form-control technical_course_duration_end_3 !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <input
                                    type="input"
                                    class="form-control !text-xs technical_course_training_instituition_3 !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                            <div class="col-md-3">
                                <input
                                    type="input"
                                    placeholder="(NC I, NC II, NC II, NC IV, etc)"
                                    class="form-control !text-xs technical_course_certificates_recieved_3 !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="step-7">
                <div class="py-5 card border-0 rounded-0">
                    <h4 class="card-header pl-0 border-0 fw-bold">
                        7. ELIGIBILITY/ PROFESSIONAL LICENSE
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row">
                            <div class="col-md-4">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    ELIGIBILITY (Civil Service)
                                </h6>
                            </div>
                            <div class="col-md-4">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Rating
                                </h6>
                            </div>
                            <div class="col-md-4">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Date of examination
                                </h6>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                <input
                                    type="input"
                                    class="form-control eligibility_civil_service__name_1 !text-xs islocal_preferred_work_location !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                            <div class="col-md-4">
                                <input
                                    type="input"
                                    class="form-control !text-xs elig  eligibility_civil_service__rating_1  !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                            <div class="col-md-4">
                                <input
                                    type="date"
                                    class="form-control !text-xs !py-2.5 eligibility_civil_service__examination_date_1 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    2
                                </label>
                                <input
                                    type="input"
                                    class="form-control eligibility_civil_service__name_2 !text-xs islocal_preferred_work_location !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                            <div class="col-md-4">
                                <input
                                    type="input"
                                    class="form-control !text-xs elig  eligibility_civil_service__rating_2  !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                            <div class="col-md-4">
                                <input
                                    type="date"
                                    class="form-control !text-xs !py-2.5 eligibility_civil_service__examination_date_2 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    PROFESSIONAL LICENSE (PRC)
                                </h6>
                            </div>
                            <div class="col-md-6">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Valid Until
                                </h6>
                            </div>
                        </div>
                        <div class="row mb-6">
                            <div class="col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                <input
                                    type="input"
                                    class="form-control prc_name_1 !text-xs islocal_preferred_work_location !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                            <div class="col-md-6">
                                <input
                                    type="date"
                                    class="form-control !text-xs prc_valid_until_1 !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                        </div>
                        <div class="row mb-6">
                            <div class="col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    2
                                </label>
                                <input
                                    type="input"
                                    class="form-control prc_name_2 !text-xs islocal_preferred_work_location !py-2.5 !text-gray-500 border-light-emphasis"
                                />
                            </div>
                            <div class="col-md-6">
                                <input
                                    type="date"
                                    class="form-control !text-xs prc_valid_until_2 !py-2.5 !text-gray-500 border-light-emphasis"
                                />
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
