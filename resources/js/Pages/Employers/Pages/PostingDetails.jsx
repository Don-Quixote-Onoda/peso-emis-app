import React, { useState, useRef } from "react";

export default function PostingDetails() {
    return (
<div class="step-5">
    <div class="py-5 card border-0 rounded-0">
        <div class=" bg-light mb-2 font-bold mt-10">
            <h4 class="card-title fw-bold">V. POSTING DETAILS</h4>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="col-md-12 mb-4">
                    <label for="inputEmail4"
                        class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis">Posting
                        Date</label>
                    <input type="date" class="form-control posting-details-date !py-2.5 !text-xs !text-gray-500 border-light-emphasis" />
                    <span class="text-danger !text-xs posting-details-date-error"></span>
                </div>
            </div>
            <div class="col-md-6">
                <div class="col-md-12 mb-4">
                    <label for="inputEmail4"
                        class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis">Valid
                        Until</label>
                    <input type="date" class="form-control posting-details-valid-until !py-2.5 !text-xs !text-gray-500 border-light-emphasis" />
                    <span class="text-danger !text-xs posting-details-valid-until-error"></span>
                </div>
            </div>
        </div>
        <h4 class="card-header pl-0 border-0 text-center fw-bold mt-5">
            CERTIFICATION/AUTHORIZATION
        </h4>
        <div class="card-body pl-0 pt-3">
            <div class="row">
                <h6 class="indent-16 !text-gray-500">This is to certify that all
                    data/information that I have provided in this form are true to the best of
                    my knowledge.This
                    Is also to authorized the DOLE to include my profile in the PESO Employment
                    Information System , which ia a subsystem of the
                    PhilJobNet. It is understood that my name shall be made available to
                    employers who have access to the Registry. I am also aware
                    that DOLE is not obliged to seek employment on my behalf.
                </h6>

            </div>

        </div>
        <div class="row mt-5">
            <div class="flex justify-center">
                <div class="mb-3 w-96">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-700">Upload employer
                        signature</label>
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
                                          ease-in-out
                                         upload-employer-signature
                                          m-0
                                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="file" id="formFile"/>
                    <span class="text-danger !text-xs upload-employer-signature-error"></span>

                </div>
            </div>

        </div>
    </div>
</div>

    );
}

