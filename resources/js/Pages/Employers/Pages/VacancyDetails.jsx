import React, { useState, useRef } from "react";

export default function VacancyDetails() {
    return (
<div class="step-3">
    <div class="card rounded-0 border-0">
        <div class=" bg-light mb-2 font-bold mt-10">
            <h4 class="card-title fw-bold">III. VACANCY DETAILS</h4>
        </div>
        <div class="card-body row">

            <div class="col-md-6">
                <div class="col-md-12 mb-4">
                    <label for="inputEmail4"
                        class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis">Position
                        Title: </label>
                    <input type="input" class="form-control vacancy-title !text-xs !py-2.5 !text-gray-500 border-light-emphasis"/>
                    <span class="text-danger !text-xs  vacancy-title-error">
                    </span>
                </div>
                <div class="col-md-12 mb-4">
                    <label for="inputEmail4" class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">Job
                        Description:</label>
                    <div class="form-floating">
                        <textarea class="form-control  vacancy-job-description" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "250px"}}></textarea>
                    </div>
                    <span class="text-danger !text-xs vacancy-job-description-error">
                    </span>
                </div>
            </div>

            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-12 mb-4">
                        <label for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis">Nature
                            of Work: </label>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-check">
                                    <input class="form-check-input vacancy-nature-of-work  border-light-emphasis " name="vacancy-nature-of-work[]" type="checkbox"
                                        value="Permanent" id="vacancy-nature-of-work"/>
                                    <label class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                        for="flexCheckDefault">
                                        Permanent
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input vacancy-nature-of-work  border-light-emphasis " name="vacancy-nature-of-work[]" type="checkbox"
                                    value="Contractual" id="vacancy-nature-of-work"/>
                                    <label class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                        for="flexCheckDefault">
                                        Contractual
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input vacancy-nature-of-work  border-light-emphasis " name="vacancy-nature-of-work[]" type="checkbox"
                                    value="Project-based" id="vacancy-nature-of-work"/>
                                    <label class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                        for="flexCheckDefault">
                                        Project-based
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-check">
                                    <input class="form-check-input vacancy-nature-of-work  border-light-emphasis " name="vacancy-nature-of-work[]" type="checkbox"
                                    value="Internship / OJT" id="vacancy-nature-of-work"/>
                                    <label class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                        for="flexCheckDefault">
                                        Internship / OJT
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input vacancy-nature-of-work  border-light-emphasis " name="vacancy-nature-of-work[]" type="checkbox"
                                    value="Part-time" id="vacancy-nature-of-work"/>
                                    <label class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                        for="flexCheckDefault">
                                        Part-time
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input vacancy-nature-of-work  border-light-emphasis " name="vacancy-nature-of-work[]" type="checkbox"
                                    value="Work from home / online-job" id="vacancy-nature-of-work"/>
                                    <label class="form-check-label !text-xs fw-bold !text-gray-500 !p-0"
                                        for="flexCheckDefault">
                                        Work from home / online-job
                                    </label>
                                </div>
                            </div>
                            <span class="text-danger !text-xs vacancy-nature-of-work-error">
                            </span>
                        </div>
                    </div>
                    <div class="col-md-12 mb-4">
                        <label for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold  text-light-emphasis">Place of Work:
                        </label>
                        <input type="input"
                            class="form-control !py-2.5 vacancy-place-of-work !text-xs !text-gray-500 border-light-emphasis"/>
                        <span class="text-danger !text-xs vacancy-place-of-work-error">
                        </span>
                    </div>
                    <div class="col-md-12 mb-4">
                        <label for="inputEmail4"
                            class="form-label !text-xs !text-gray-400  fw-bold text-light-emphasis">Salary:
                        </label>
                        <input type="input"
                            class="form-control !py-2.5 !text-xs vacancy-salary !text-gray-500 border-light-emphasis"/>
                        <span class="text-danger !text-xs vacancy-salary-error">
                        </span>
                    </div>
                    <div class="col-md-12 mb-4">
                        <label for="inputEmail4"
                            class="form-label !text-xs !text-gray-400  fw-bold text-light-emphasis">Vacancy Count:
                        </label>
                        <input type="input"
                            class="form-control !py-2.5 !text-xs vacancy-count !text-gray-500 border-light-emphasis"/>
                        <span class="text-danger !text-xs vacancy-count-error">
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mb-4">

            </div>
        </div>
    </div>
</div>

    );
}

