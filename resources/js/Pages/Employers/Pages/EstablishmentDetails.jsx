import React, { useState, useRef } from "react";

export default function EstablishmentDetails() {
    return (
        <div class="step-1">
        <div class="card rounded-0 border-0">
            <div class=" bg-light mb-2 font-bold mt-10">
                <h4 class="card-title fw-bold">I. ESTABLISHMENT DETAILS</h4>
            </div>
            <div class="card-body row">
                <div class="col-md-12 mb-4">
                    <label for="inputEmail4"
                        class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis">Establishment
                        Name: </label>
                    <input type="input"
                        class="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name"/>
                    <span class="text-danger !text-xs establishment-name-error">
                    </span>
                </div>
                <div class="col-md-12 mb-4">
                    <label for="inputEmail4"
                        class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">Acronym/Abbreviation:</label>
                    <input type="input"
                        class="form-control !py-2.5 !text-xs !text-gray-500 border-light-emphasis establishment-abbr"/>
                    <span class="text-danger !text-xs establishment-abbr-error">
                    </span>
                </div>
                <div class="col-md-12 mb-4">
                    <label for="inputEmail4"
                        class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis">Tax
                        Identification Number:
                    </label>
                    <input type="input"
                        class="form-control !py-2.5 !text-xs !text-gray-500 border-light-emphasis establishment-id-number"/>
                    <span class="text-danger !text-xs establishment-id-number-error">
                    </span>
                </div>
                <div class="col-md-12 mb-4">
                    <label for="inputEmail4"
                        class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis">Employer
                        type:</label>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-check">
                                <input
                                    class="form-check-input border-light-emphasis  establishment-employer-type"
                                    type="radio" value="Government" name="employer-type"/>
                                <label class="form-check-label !text-xs !text-gray-500"
                                    for="exampleRadios1">
                                    Government
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-check">
                                <input
                                    class="form-check-input border-light-emphasis  establishment-employer-type"
                                    type="radio" value="Private" name="employer-type"/>
                                <label class="form-check-label !text-xs !text-gray-500"
                                    for="exampleRadios2">
                                    Private
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-check">
                                <input
                                    class="form-check-input border-light-emphasis  establishment-employer-type"
                                    type="radio" value="Recruitment & Placement Agency (Local)"
                                    name="employer-type"/>
                                <label class="form-check-label !text-xs !text-gray-500"
                                    for="exampleRadios2">
                                    Recruitment & Placement Agency (Local)
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-check">
                                <input
                                    class="form-check-input border-light-emphasis  establishment-employer-type"
                                    type="radio" value="Licensed Recruitment Agency (Overseas)"
                                    name="employer-type"/>
                                <label class="form-check-label !text-xs !text-gray-500"
                                    for="exampleRadios2">
                                    Licensed Recruitment Agency (Overseas)
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-check">
                                <input
                                    class="form-check-input border-light-emphasis  establishment-employer-type"
                                    type="radio" value="DO 174-17, Subcontractor"
                                    name="employer-type"/>
                                <label class="form-check-label !text-xs !text-gray-500"
                                    for="exampleRadios2">
                                    DO 174-17, Subcontractor
                                </label>
                            </div>
                        </div>
                    </div>
                    <span class="text-danger !text-xs  establishment-employer-type-error">
    
                    </span>
                </div>
                <div class="col-md-12 mb-4">
                    <label for="inputEmail4"
                        class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis">Total
                        Work Force:</label>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-check">
                                <input
                                    class="form-check-input border-light-emphasis  establishment-total-worked-force"
                                    type="radio" value="Micro (1-9)" name="total-worked-force"/>
                                <label class="form-check-label !text-xs !text-gray-500"
                                    for="exampleRadios1">
                                    Micro (1-9)
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-check">
                                <input
                                    class="form-check-input border-light-emphasis establishment-total-worked-force"
                                    type="radio" value="Small (10-99)"
                                    name="total-worked-force"/>
                                <label class="form-check-label !text-xs !text-gray-500"
                                    for="exampleRadios2">
                                    Small (10-99)
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-check">
                                <input
                                    class="form-check-input border-light-emphasis establishment-total-worked-force"
                                    type="radio" value="Medium (100-199)"
                                    name="total-worked-force"/>
                                <label class="form-check-label !text-xs !text-gray-500"
                                    for="exampleRadios2">
                                    Medium (100-199)
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-check">
                                <input
                                    class="form-check-input border-light-emphasis establishment-total-worked-force"
                                    type="radio" value="Large (200 and up)"
                                    name="total-worked-force"/>
                                <label class="form-check-label !text-xs !text-gray-500"
                                    for="exampleRadios2">
                                    Large (200 and up)
                                </label>
                            </div>
                        </div>
                    </div>
                    <span class="text-danger !text-xs establishment-total-worked-force-error">
    
                    </span>
                </div>
                <div class="col-md-12 mb-4">
                    <label for="inputEmail4"
                        class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis">Line
                        of Business/Industry (check BIR 2303):
                    </label>
                    <input type="input"
                        class="form-control !py-2.5 !text-xs !text-gray-500 border-light-emphasis line-of-bir"/>
                    <span class="text-danger !text-xs line-of-bir-error">
    
                    </span>
                </div>
                <div class="col-md-12 mb-4">
                    <div class="row">
                        <div class="col-md-12 mb-4 d-flex flex-column justify-content-between">
                            <label for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 text-light-emphasis">Province</label>
                            <select
                                class=" pa_province !text-xs !py-2.5 !text-gray-500 form-select border-light-emphasis"
                                aria-label="Default select example">
                                <option selected value="0">Select Province</option>
                            </select>
                        </div>
                        <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                            <label for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 text-light-emphasis">Municipality/City</label>
                            <select
                                class=" pa_city !text-xs !py-2.5 !text-gray-500 form-select border-light-emphasis"
                                aria-label="Default select example">
                                <option selected value="0">Select Municipality</option>
                            </select>
                        </div>
                        <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                            <label for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 text-light-emphasis">Barangay</label>
                            <select
                                class=" pa_barangay !text-xs !py-2.5 !text-gray-500 form-select border-light-emphasis"
                                aria-label="Default select example">
                                <option selected value="0">Select Barangay</option>
                            </select>
                        </div>
                        <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                            <label for="inputEmail4"
                                class="form-label !texxst- !text-gray-400 text-light-emphasis">House
                                No./ Street
                                Village</label>
                            <input type="input"
                                class="pa_address form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

