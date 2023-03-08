import React, { useState, useRef } from "react";

export default function WorkExperience() {
    return (
        <div class="step-8">
        <div class="py-5 card border-0 rounded-0">
            <h4 class="card-header pl-0 border-0 fw-bold">8. WORK EXPERIENCE (Limit to 10 year
                period, start with the most recent employment) </h4>
            <div class="card-body pl-0 pt-3">
                <div class="row">
                    <div class="col-md-4">
                        <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                            Company Name</h6>
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-3">
                                <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                    Address</h6>
                            </div>
                            <div class="col-md-3">
                                <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                    Position</h6>
                            </div>
                            <div class="col-md-3">
                                <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                    Inclusive Dates</h6>
                            </div>
                            <div class="col-md-3">
                                <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                    Status</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-4">
                        <input type="input"
                            class="form-control !text-xs work_experience_company_name_1 !py-2.5 !text-gray-500 border-light-emphasis" />
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-3">
                                <input type="input"
                                    class="form-control work_experience_company_address_1 !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                            </div>
                            <div class="col-md-3">
                                <input type="input"
                                    class="form-control work_experience_company_position_1 !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                            </div>
                            <div class="col-md-3">
                                <input type="date"
                                    class="form-control work_experience_company_inclusive_date_1 !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                            </div>
                            <div class="col-md-3">
                                <select
                                    class="form-select !text-xs work_experience_company_status_1 !text-gray-500 !py-2.5 border-light-emphasis"
                                    aria-label="Default select example" wire:model="civil_status">
                                    <option selected value="">Select status</option>
                                    <option value="0">Permanent</option>
                                    <option value="1">Contractual</option>
                                    <option value="2">Part-time</option>
                                    <option value="3">Probationary</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-4">
                        <input type="input"
                            class="form-control !text-xs work_experience_company_name_2 !py-2.5 !text-gray-500 border-light-emphasis" />
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-3">
                                <input type="input"
                                    class="form-control work_experience_company_address_2 !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                            </div>
                            <div class="col-md-3">
                                <input type="input"
                                    class="form-control work_experience_company_position_2 !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                            </div>
                            <div class="col-md-3">
                                <input type="date"
                                    class="form-control work_experience_company_inclusive_date_2 !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                            </div>
                            <div class="col-md-3">
                                <select
                                    class="form-select !text-xs work_experience_company_status_2 !text-gray-500 !py-2.5 border-light-emphasis"
                                    aria-label="Default select example" wire:model="civil_status">
                                    <option selected value="">Select status</option>
                                    <option value="0">Permanent</option>
                                    <option value="1">Contractual</option>
                                    <option value="2">Part-time</option>
                                    <option value="3">Probationary</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-4">
                        <input type="input"
                            class="form-control !text-xs work_experience_company_name_3 !py-2.5 !text-gray-500 border-light-emphasis" />
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-3">
                                <input type="input"
                                    class="form-control work_experience_company_address_3 !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                            </div>
                            <div class="col-md-3">
                                <input type="input"
                                    class="form-control work_experience_company_position_3 !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                            </div>
                            <div class="col-md-3">
                                <input type="date"
                                    class="form-control work_experience_company_inclusive_date_3 !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                            </div>
                            <div class="col-md-3">
                                <select
                                    class="form-select !text-xs work_experience_company_status_3 !text-gray-500 !py-2.5 border-light-emphasis"
                                    aria-label="Default select example" wire:model="civil_status">
                                    <option selected value="">Select status</option>
                                    <option value="0">Permanent</option>
                                    <option value="1">Contractual</option>
                                    <option value="2">Part-time</option>
                                    <option value="3">Probationary</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-4">
                        <input type="input"
                            class="form-control !text-xs work_experience_company_name_4 !py-2.5 !text-gray-500 border-light-emphasis" />
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-3">
                                <input type="input"
                                    class="form-control work_experience_company_address_4 !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                            </div>
                            <div class="col-md-3">
                                <input type="input"
                                    class="form-control work_experience_company_position_4 !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                            </div>
                            <div class="col-md-3">
                                <input type="date"
                                    class="form-control work_experience_company_inclusive_date_4 !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                            </div>
                            <div class="col-md-3">
                                <select
                                    class="form-select !text-xs work_experience_company_status_4 !text-gray-500 !py-2.5 border-light-emphasis"
                                    aria-label="Default select example" wire:model="civil_status">
                                    <option selected value="">Select status</option>
                                    <option value="0">Permanent</option>
                                    <option value="1">Contractual</option>
                                    <option value="2">Part-time</option>
                                    <option value="3">Probationary</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-4">
                        <input type="input"
                            class="form-control !text-xs work_experience_company_name_5 !py-2.5 !text-gray-500 border-light-emphasis" />
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-3">
                                <input type="input"
                                    class="form-control work_experience_company_address_5 !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                            </div>
                            <div class="col-md-3">
                                <input type="input"
                                    class="form-control work_experience_company_position_5 !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                            </div>
                            <div class="col-md-3">
                                <input type="date"
                                    class="form-control work_experience_company_inclusive_date_5 !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                            </div>
                            <div class="col-md-3">
                                <select
                                    class="form-select !text-xs work_experience_company_status_5 !text-gray-500 !py-2.5 border-light-emphasis"
                                    aria-label="Default select example" wire:model="civil_status">
                                    <option selected value="">Select status</option>
                                    <option value="0">Permanent</option>
                                    <option value="1">Contractual</option>
                                    <option value="2">Part-time</option>
                                    <option value="3">Probationary</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
