import React, { useState, useRef } from "react";
import NavigatorButton from "../Components/NavigatorButton";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
export default function JobPreference({
    activeIndex,
    numberOfPage,
    setActiveIndex,
    counterPrevious,
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveIndex(activeIndex + 1);
    };

    const [checkedLocal, setCheckedLocal] = useState(false);
    const [checkedOverseas, setCheckedOverseas] = useState(false);

    const [preferredOccupation, setPreferredOccupation] = useState("");

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
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
                                    <div class="col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                        >
                                            1
                                        </label>
                                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={preferredOccupation} onChange={(e) => setPreferredOccupation(e.target.value)} />
                                    </div>
                                    <div class="col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                        >
                                            2
                                        </label>
                                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={preferredOccupation} onChange={(e) => setPreferredOccupation(e.target.value)} />
                                    </div>
                                    <div class="col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                        >
                                            3
                                        </label>
                                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={preferredOccupation} onChange={(e) => setPreferredOccupation(e.target.value)} />
                                    </div>
                                    <div class="col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ">
                                        <label
                                            for="inputEmail4"
                                            class="form-label  !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                        >
                                            4
                                        </label>
                                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={preferredOccupation} onChange={(e) => setPreferredOccupation(e.target.value)} />
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
                                                <div class="form-check flex items-center gap-2">
                                                <Checkbox onChange={e => setCheckedLocal(e.checked)} checked={checkedLocal}></Checkbox>
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
                                                <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" disabled={!checkedLocal} value={preferredOccupation} onChange={(e) => setPreferredOccupation(e.target.value)} />
                                            </div>
                                            <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                                <label
                                                    for="inputEmail4"
                                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                                >
                                                    2
                                                </label>
                                                <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" disabled={!checkedLocal} value={preferredOccupation} onChange={(e) => setPreferredOccupation(e.target.value)} />
                                            </div>
                                            <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                                <label
                                                    for="inputEmail4"
                                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                                >
                                                    3
                                                </label>
                                                <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" disabled={!checkedLocal} value={preferredOccupation} onChange={(e) => setPreferredOccupation(e.target.value)} />
                                            </div>
                                            <span class="text-danger !text-xs islocal_preferred_work_location-error"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-check  flex items-center gap-2">
                                                <Checkbox onChange={e => setCheckedOverseas(e.checked)} checked={checkedOverseas}></Checkbox>
                                                    <label
                                                        class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                        for="exampleRadios1"
                                                    >
                                                        Overseas,specify
                                                        countries:
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
                                                <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" disabled={!checkedOverseas} value={preferredOccupation} onChange={(e) => setPreferredOccupation(e.target.value)} />
                                            </div>
                                            <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                                <label
                                                    for="inputEmail4"
                                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                                >
                                                    2
                                                </label>
                                                <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" disabled={!checkedOverseas} value={preferredOccupation} onChange={(e) => setPreferredOccupation(e.target.value)} />
                                            </div>
                                            <div class="col-md-12 mb-4  d-flex flex-row align-items-center gap-3 ">
                                                <label
                                                    for="inputEmail4"
                                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                                >
                                                    3
                                                </label>
                                                <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" disabled={!checkedOverseas} value={preferredOccupation} onChange={(e) => setPreferredOccupation(e.target.value)} />
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
                                <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={preferredOccupation} onChange={(e) => setPreferredOccupation(e.target.value)} />
                                <span class="text-danger !text-xs expected_salary-error"></span>
                            </div>
                            <div class="col-md-4 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Passport No.
                                </label>
                                <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={preferredOccupation} onChange={(e) => setPreferredOccupation(e.target.value)} />
                                <span class="text-danger !text-xs passport_number-error"></span>
                            </div>
                            <div class="col-md-4 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Expiry date
                                </label>
                                <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" value={preferredOccupation} onChange={(e) => setPreferredOccupation(e.target.value)} />
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
