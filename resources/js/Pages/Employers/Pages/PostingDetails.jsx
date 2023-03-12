import React, { useState, useRef } from "react";

export default function PostingDetails({activeIndex, numberOfPage, counterNext, counterPrevious}) {
    return (
        <>
        <div class="step-5">
            <div class="py-5 card border-0 rounded-0">
                <div class=" bg-light mb-2 font-bold mt-10">
                    <h4 class="card-title fw-bold">V. POSTING DETAILS</h4>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="col-md-12 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Posting Date
                            </label>
                            <input
                                type="date"
                                class="form-control posting-details-date !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                            />
                            <span class="text-danger !text-xs posting-details-date-error"></span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-12 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Valid Until
                            </label>
                            <input
                                type="date"
                                class="form-control posting-details-valid-until !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                            />
                            <span class="text-danger !text-xs posting-details-valid-until-error"></span>
                        </div>
                    </div>
                </div>
                <h4 class="card-header pl-0 border-0 text-center fw-bold mt-5">
                    CERTIFICATION/AUTHORIZATION
                </h4>
                <div class="card-body pl-0 pt-3">
                    <div class="row">
                        <h6 class="indent-16 !text-gray-500">
                            This is to certify that all data/information that I
                            have provided in this form are true to the best of
                            my knowledge.This Is also to authorized the DOLE to
                            include my profile in the PESO Employment
                            Information System , which ia a subsystem of the
                            PhilJobNet. It is understood that my name shall be
                            made available to employers who have access to the
                            Registry. I am also aware that DOLE is not obliged
                            to seek employment on my behalf.
                        </h6>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="flex justify-center">
                        <div class="mb-3 w-96">
                            <label
                                for="formFile"
                                class="form-label inline-block mb-2 text-gray-700"
                            >
                                Upload employer signature
                            </label>
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
                                type="file"
                                id="formFile"
                            />
                            <span class="text-danger !text-xs upload-employer-signature-error"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="action-buttons w-full bottom-0 d-flex justify-content-between bg-white pt-2 pb-2">
                {activeIndex == 0 && <div class="button-1"></div>}
                {activeIndex > 0 && (
                    <button
                        type="button"
                        onClick={() => counterPrevious()}
                        class="btn btn-md btn btn-md items-center d-flex gap-3 py-2 px-4 prev-button  !rounded-full !text-xs text-white font-bold !bg-indigo-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="w-4 h-4 fill-white"
                        >
                            <path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z" />
                        </svg>
                        Back
                    </button>
                )}
                {activeIndex < numberOfPage - 1 && (
                    <button
                        type="button"
                        onClick={() => counterNext()}
                        class="btn btn-md items-center d-flex gap-3 py-2 !bg-pink-400 px-4 !rounded-full next-button"
                    >
                        <span class="!text-xs font-bold text-white">Next</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="w-4 h-4 fill-white"
                        >
                            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                        </svg>
                    </button>
                )}
                {activeIndex > numberOfPage - 2 && (
                    <button
                        type="submit"
                        class="btn btn-md btn-primary !bg-blue-900 !border-blue-900 submit-button"
                    >
                        Submit
                    </button>
                )}
            </div>
        </>
    );
}
