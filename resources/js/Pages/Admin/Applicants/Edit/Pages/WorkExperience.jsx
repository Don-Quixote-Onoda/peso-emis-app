import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import { Dropdown } from "primereact/dropdown";

export default function WorkExperience(props) {


    const [companyName1, setCompanyName1] = useSessionStorage(
        sessionStorage.getItem("companyName1"),
        "companyName1"
    );;
    const [address1, setAddress1] = useSessionStorage(
        sessionStorage.getItem("address1"),
        "address1"
    );;
    const [position1, setPosition1] = useSessionStorage(
        sessionStorage.getItem("position1"),
        "position1"
    );;
    const [inclusive1, setInclusive1] = useSessionStorage(
        sessionStorage.getItem("inclusive1"),
        "inclusive1"
    );;
    const [status1, setStatus1] = useSessionStorage(
        sessionStorage.getItem("status1"),
        "status1"
    );;

    const [companyName2, setCompanyName2] = useSessionStorage(
        sessionStorage.getItem("companyName2"),
        "companyName2"
    );;
    const [address2, setAddress2] = useSessionStorage(
        sessionStorage.getItem("address2"),
        "address2"
    );;
    const [position2, setPosition2] = useSessionStorage(
        sessionStorage.getItem("position2"),
        "position2"
    );;
    const [inclusive2, setInclusive2] = useSessionStorage(
        sessionStorage.getItem("inclusive2"),
        "inclusive2"
    );;
    const [status2, setStatus2] = useSessionStorage(
        sessionStorage.getItem("status2"),
        "status2"
    );;

    const [companyName3, setCompanyName3] = useSessionStorage(
        sessionStorage.getItem("companyName3"),
        "companyName3"
    );;
    const [address3, setAddress3] = useSessionStorage(
        sessionStorage.getItem("address3"),
        "address3"
    );;
    const [position3, setPosition3] = useSessionStorage(
        sessionStorage.getItem("position3"),
        "position3"
    );;
    const [inclusive3, setInclusive3] = useSessionStorage(
        sessionStorage.getItem("inclusive3"),
        "inclusive3"
    );;
    const [status3, setStatus3] = useSessionStorage(
        sessionStorage.getItem("status3"),
        "status3"
    );;

    const [companyName4, setCompanyName4] = useSessionStorage(
        sessionStorage.getItem("companyName4"),
        "companyName4"
    );;
    const [address4, setAddress4] = useSessionStorage(
        sessionStorage.getItem("address4"),
        "address4"
    );;
    const [position4, setPosition4] = useSessionStorage(
        sessionStorage.getItem("position4"),
        "position4"
    );;
    const [inclusive4, setInclusive4] = useSessionStorage(
        sessionStorage.getItem("inclusive4"),
        "inclusive4"
    );;
    const [status4, setStatus4] = useSessionStorage(
        sessionStorage.getItem("status4"),
        "status4"
    );;

    const [companyName5, setCompanyName5] = useSessionStorage(
        sessionStorage.getItem("companyName5"),
        "companyName5"
    );;
    const [address5, setAddress5] = useSessionStorage(
        sessionStorage.getItem("address5"),
        "address5"
    );;
    const [position5, setPosition5] = useSessionStorage(
        sessionStorage.getItem("position5"),
        "position5"
    );;
    const [inclusive5, setInclusive5] = useSessionStorage(
        sessionStorage.getItem("inclusive5"),
        "inclusive5"
    );;
    const [status5, setStatus5] = useSessionStorage(
        sessionStorage.getItem("status5"),
        "status5"
    );;
    const statuses = [
        { name: "Permanent" },
        { name: "Contractual" },
        { name: "Part-time" },
        { name: "Probationary" },
    ];
    return (
            <div class="step-8">
                <div class="py-5 card border-0 rounded-0">
                    <h4 class="card-header pl-0 border-0 fw-bold">
                        8. WORK EXPERIENCE (Limit to 10 year period, start with
                        the most recent employment){" "}
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row responsive-text-md-none">
                            <div class="col-md-4">
                                <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                    Company Name
                                </h6>
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3">
                                        <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                            Address
                                        </h6>
                                    </div>
                                    <div class="col-md-3">
                                        <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                            Position
                                        </h6>
                                    </div>
                                    <div class="col-md-3">
                                        <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                            Inclusive Date
                                        </h6>
                                    </div>
                                    <div class="col-md-3">
                                        <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                            Status
                                        </h6>
                                    </div>
                                </div>
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
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={companyName1}
                                    placeholder="Company Name"
                                    onChange={(e) =>
                                        setCompanyName1(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3  mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={address1}
                                            placeholder="Address"
                                            onChange={(e) =>
                                                setAddress1(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={position1}
                                            placeholder="Position"
                                            onChange={(e) =>
                                                setPosition1(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <Calendar
                                            className="form-control calendar-text-xs h-10 p-0 border-0"
                                            value={inclusive1}
                                            placeholder="Inclusive Date"
                                            onChange={(e) =>
                                                setInclusive1(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <Dropdown
                                            value={status1}
                                            onChange={(e) => setStatus1(e.value)}
                                            options={statuses}
                                            optionLabel="name"
                                            editable
                                            placeholder="Select a Status"
                                            className="form-select p-0 h-10 calendar-text-xs !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"
                                        />
                                    </div>
                                </div>
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
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={companyName2}
                                    placeholder="Company Name"
                                    onChange={(e) =>
                                        setCompanyName2(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    placeholder="Address"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={address2}
                                            placeholder="Address"
                                            onChange={(e) =>
                                                setAddress2(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={position2}
                                            placeholder="Position"
                                            onChange={(e) =>
                                                setPosition2(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <Calendar
                                            className="form-control h-10 calendar-text-xs p-0 border-0"
                                            value={inclusive2}
                                            placeholder="Inclusive Date"
                                            onChange={(e) =>
                                                setInclusive2(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <Dropdown
                                            value={status2}
                                            onChange={(e) => setStatus2(e.value)}
                                            options={statuses}
                                            optionLabel="name"
                                            editable
                                            placeholder="Select a Status"
                                            className="form-select p-0 calendar-text-xs h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ">
                            <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    3
                                </label>
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={companyName3}
                                    placeholder="Company Name"
                                    onChange={(e) =>
                                        setCompanyName3(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-3.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={address3}
                                            placeholder="Address"
                                            onChange={(e) =>
                                                setAddress3(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-3.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={position3}
                                            placeholder="Position"
                                            onChange={(e) =>
                                                setPosition3(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <Calendar
                                            className="form-control calendar-text-xs h-10 p-0 border-0"
                                            placeholder="Inclusive Date"
                                            value={inclusive3}
                                            onChange={(e) =>
                                                setInclusive3(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <Dropdown
                                            value={status3}
                                            onChange={(e) => setStatus3(e.value)}
                                            options={statuses}
                                            optionLabel="name"
                                            editable
                                            placeholder="Select a Status"
                                            className="form-select p-0 calendar-text-xs h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ">
                            <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    4
                                </label>
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={companyName3}
                                    placeholder="Company Name"
                                    onChange={(e) =>
                                        setCompanyName3(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-3.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={address3}
                                            placeholder="Address"
                                            onChange={(e) =>
                                                setAddress3(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-3.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={position3}
                                            placeholder="Position"
                                            onChange={(e) =>
                                                setPosition3(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <Calendar
                                        placeholder="Inclusive Date"
                                            className="form-control calendar-text-xs h-10 p-0 border-0"
                                            value={inclusive3}
                                            onChange={(e) =>
                                                setInclusive3(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <Dropdown
                                            value={status3}
                                            onChange={(e) => setStatus3(e.value)}
                                            options={statuses}
                                            optionLabel="name"
                                            editable
                                            placeholder="Select a Status"
                                            className="form-select calendar-text-xs p-0 h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ">
                            <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    5
                                </label>
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={companyName4}
                                    placeholder="Company Name"
                                    onChange={(e) =>
                                        setCompanyName4(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-4.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={address4}
                                            placeholder="Address"
                                            onChange={(e) =>
                                                setAddress4(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-4.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={position4}
                                            placeholder="Position"
                                            onChange={(e) =>
                                                setPosition4(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <Calendar
                                            className="form-control calendar-text-xs h-10 p-0 border-0"
                                            value={inclusive4}
                                            placeholder="Inclusive Date"
                                            onChange={(e) =>
                                                setInclusive4(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4 calendar-text-xs   d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <Dropdown
                                            value={status4}
                                            onChange={(e) => setStatus4(e.value)}
                                            options={statuses}
                                            optionLabel="name"
                                            editable
                                            placeholder="Select a Status"
                                            className="form-select h-10 calendar-text-xs p-0 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ">
                            <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    6
                                </label>
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={companyName5}
                                    placeholder="Company name"
                                    onChange={(e) =>
                                        setCompanyName5(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-5.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={address5}
                                            placeholder="Address"
                                            onChange={(e) =>
                                                setAddress5(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-5.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={position5}
                                            placeholder="Position"
                                            onChange={(e) =>
                                                setPosition5(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <Calendar
                                            className="form-control calendar-text-xs h-10 p-0 border-0"
                                            value={inclusive5}
                                            placeholder="Inclusive Date"
                                            onChange={(e) =>
                                                setInclusive5(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="col-md-3 mb-4 calendar-text-xs d-flex flex-row align-items-center gap-3 ">
                                    <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                        <Dropdown
                                            value={status5}
                                            onChange={(e) => setStatus5(e.value)}
                                            options={statuses}
                                            optionLabel="name"
                                            editable
                                            placeholder="Select a Status"
                                            className="form-select h-10 calendar-text-xs p-0 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
}
