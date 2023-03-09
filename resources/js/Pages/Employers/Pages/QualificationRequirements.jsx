import React, { useState, useRef } from "react";

export default function QualificationRequirement() {
    return (
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
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Work Experience (month/s):{" "}
                            </label>
                            <input
                                type="number"
                                class="form-control qualification-work-experience !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                            />
                            <span class="text-danger !text-xs qualification-work-experience-error"></span>
                        </div>

                        <div class="col-md-12 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label  !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Religion:
                            </label>
                            <input
                                type="text"
                                class="form-control qualification-religion !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
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
                                    style={{height: "197px"}}
                                ></textarea>
                            </div>
                            <span class="text-danger !text-xs other-qualification-error"></span>
                        </div>
                        <div class="col-md-12 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                License:
                            </label>
                            <input
                                type="input"
                                class="form-control qualification-license !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                            />
                            <span class="text-danger !text-xs qualification-license-error"></span>
                        </div>
                        <div class="col-md-12 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Certification:
                            </label>
                            <input
                                type="input"
                                class="form-control qualification-certification !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                            />
                            <span class="text-danger !text-xs qualification-certification-error"></span>
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
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input border-light-emphasis qualification_sex "
                                                type="radio"
                                                value="Male"
                                                id="qualification_sex"
                                                name="qualification_sex"
                                            />
                                            <label
                                                class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                for="flexCheckDefault"
                                            >
                                                Male
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input border-light-emphasis qualification_sex "
                                                type="radio"
                                                value="Female"
                                                id="qualification_sex"
                                                name="qualification_sex"
                                            />
                                            <label
                                                class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                for="flexCheckDefault"
                                            >
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input border-light-emphasis qualification_sex "
                                                type="radio"
                                                value="No Preference"
                                                id="qualification_sex"
                                                name="qualification_sex"
                                            />
                                            <label
                                                class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                for="flexCheckDefault"
                                            >
                                                No Preference
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <span class="text-danger !text-xs qualification_sex-error"></span>
                            </div>
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Civil Status:{" "}
                                </label>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input border-light-emphasis qualification_civil_status "
                                                type="radio"
                                                value="Single"
                                                id="qualification_civil_status"
                                                name="qualification_civil_status"
                                            />
                                            <label
                                                class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                for="flexCheckDefault"
                                            >
                                                Single
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input border-light-emphasis qualification_civil_status "
                                                type="radio"
                                                value="Married"
                                                id="qualification_civil_status"
                                                name="qualification_civil_status"
                                            />
                                            <label
                                                class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                for="flexCheckDefault"
                                            >
                                                Married
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input border-light-emphasis qualification_civil_status "
                                                type="radio"
                                                value="No Preference"
                                                id="qualification_civil_status"
                                                name="qualification_civil_status"
                                            />
                                            <label
                                                class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                                for="flexCheckDefault"
                                            >
                                                No Preference
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <span class="text-danger !text-xs qualification_civil_status-error"></span>
                            </div>
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Educational Level:
                                </label>
                                <input
                                    type="input"
                                    class="form-control !py-2.5 !text-xs qualification-educational-level !text-gray-500 border-light-emphasis"
                                />
                                <span class="text-danger !text-xs qualification-educational-level-error"></span>
                            </div>
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Course / Major:
                                </label>
                                <input
                                    type="input"
                                    class="form-control !py-2.5  qualification-course !text-xs !text-gray-500 border-light-emphasis"
                                />
                                <span class="text-danger !text-xs qualification-course-error"></span>
                            </div>
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Eligibility:
                                </label>
                                <input
                                    type="input"
                                    class="form-control !py-2.5 qualification-eligibility !text-xs !text-gray-500 border-light-emphasis"
                                />
                                <span class="text-danger !text-xs qualification-eligibility-error"></span>
                            </div>
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Language or Dialect Spoken:
                                </label>
                                <input
                                    type="input"
                                    class="form-control !py-2.5 qualification-languange-spoken !text-xs !text-gray-500 border-light-emphasis"
                                />
                                <span class="text-danger !text-xs qualification-languange-spoken-error"></span>
                            </div>
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Prefferred Residence:
                                </label>
                                <input
                                    type="input"
                                    class="form-control !py-2.5 qualification-preffered-residence !text-xs !text-gray-500 border-light-emphasis"
                                />
                                <span class="text-danger !text-xs qualification-preffered-residence-error"></span>
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
                                            />
                                        </div>
                                    </div>
                                </div>
                                <span class="text-danger !text-xs qualification_accept_disability-type-error"></span>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 mb-4"></div>
                </div>
            </div>
        </div>
    );
}
