import React, { useState, useRef } from "react";

export default function EstablishmentContactDetails() {
    return (
        <div class="step-2">
            <div class="card rounded-0 border-0">
                <div class=" bg-light mb-2 font-bold mt-10">
                    <h4 class="card-title fw-bold">
                        II. ESTABLISHMENT CONTACT DETAILS
                    </h4>
                </div>
                <div class="card-body row">
                    <div class="col-md-12 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Title:
                        </label>
                        <div class="row">
                            <div class="col-md-1">
                                <div class="form-check">
                                    <input
                                        class="form-check-input border-light-emphasis title"
                                        type="radio"
                                        name="title"
                                        id="title"
                                        value="Mr."
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                        for="exampleRadios2"
                                    >
                                        Mr.
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-1">
                                <div class="form-check">
                                    <input
                                        class="form-check-input border-light-emphasis title"
                                        type="radio"
                                        name="title"
                                        id="title"
                                        value="Ms."
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                        for="exampleRadios2"
                                    >
                                        Ms.
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-1">
                                <div class="form-check">
                                    <input
                                        class="form-check-input border-light-emphasis title"
                                        type="radio"
                                        name="title"
                                        id="title"
                                        value="Miss"
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                        for="exampleRadios2"
                                    >
                                        Miss
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-check">
                                    <input
                                        class="form-check-input border-light-emphasis title"
                                        type="radio"
                                        name="title"
                                        id="title"
                                        value="others"
                                    />
                                    <label
                                        class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                        for="exampleRadios1"
                                    >
                                        Others (please specify):
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-12 mb-4 is_4ps_beneficiary d-none">
                                <input
                                    type="text"
                                    class="form-control !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                />
                            </div>
                            <span class="text-danger !text-xs title-error"></span>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Contact Person (Full Name):{" "}
                        </label>
                        <input
                            type="input"
                            class="form-control !text-xs contact-person !py-2.5 !text-gray-500 border-light-emphasis"
                        />
                        <span class="text-danger !text-xs contact-person-error"></span>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs text-gray-400  fw-bold text-light-emphasis"
                        >
                            Position:
                        </label>
                        <input
                            type="input"
                            class="form-control !py-2.5 !text-xs contact-person-position !text-gray-500 border-light-emphasis"
                        />
                        <span class="text-danger !text-xs contact-person-position-error"></span>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Telephone Number:
                        </label>
                        <input
                            type="input"
                            class="form-control contact-person-telephone !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                        />
                        <span class="text-danger !text-xs contact-person-telephone-error"></span>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Mobile Number:
                        </label>
                        <input
                            type="input"
                            class="form-control contact-person-mobile !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                        />
                        <span class="text-danger !text-xs contact-person-mobile-error"></span>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Fax Number:
                        </label>
                        <input
                            type="input"
                            class="form-control !py-2.5 contact-person-fax !text-xs !text-gray-500 border-light-emphasis"
                        />
                        <span class="text-danger !text-xs contact-person-fax-error"></span>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label contact-email !text-xs !text-gray-400 fw-bold text-light-emphasis"
                        >
                            Email Address:
                        </label>
                        <input
                            type="email"
                            class="form-control !py-2.5 contact-person-email  !text-xs !text-gray-500 border-light-emphasis"
                            required
                        />
                        <span class="text-danger !text-xs contact-person-email-error"></span>
                    </div>
                    <div class="col-md-12 mb-4"></div>
                </div>
            </div>
        </div>
    );
}
