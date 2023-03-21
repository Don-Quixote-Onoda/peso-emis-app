import React, { useState, useRef } from "react";
import NavigatorButton from "../Components/NavigatorButton";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

import { Dropdown } from "primereact/dropdown";

export default function WorkExperience({
    activeIndex,
    numberOfPage,
    setActiveIndex,
    counterPrevious,
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveIndex(activeIndex + 1);
    };

    const [companyName, setCompanyName] = useState("");
    const [inclusive, setInclusive] = useState("");
    const [status, setStatus] = useState(null);
    const statuses = [
        { name: "Permanent" },
        { name: "Contractual" },
        { name: "Part-time" },
        { name: "Probationary" },
    ];
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div class="step-8">
                <div class="py-5 card border-0 rounded-0">
                    <h4 class="card-header pl-0 border-0 fw-bold">
                        8. WORK EXPERIENCE (Limit to 10 year period, start with
                        the most recent employment){" "}
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row">
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
                                            Inclusive Dates
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
                            <div class="col-md-4">
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={companyName}
                                    onChange={(e) =>
                                        setCompanyName(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3">
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={companyName}
                                            onChange={(e) =>
                                                setCompanyName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3">
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={companyName}
                                            onChange={(e) =>
                                                setCompanyName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3">
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={inclusive}
                                            setBithdate={(e) =>
                                                setInclusive(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="col-md-3">
                                        <Dropdown
                                            value={status}
                                            onChange={(e) => setStatus(e.value)}
                                            options={statuses}
                                            optionLabel="name"
                                            editable
                                            placeholder="Select a Status"
                                            className="form-select h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-4">
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={companyName}
                                    onChange={(e) =>
                                        setCompanyName(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3">
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={companyName}
                                            onChange={(e) =>
                                                setCompanyName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3">
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={companyName}
                                            onChange={(e) =>
                                                setCompanyName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3">
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={inclusive}
                                            setBithdate={(e) =>
                                                setInclusive(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="col-md-3">
                                        <Dropdown
                                            value={status}
                                            onChange={(e) => setStatus(e.value)}
                                            options={statuses}
                                            optionLabel="name"
                                            editable
                                            placeholder="Select a Status"
                                            className="form-select h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-4">
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={companyName}
                                    onChange={(e) =>
                                        setCompanyName(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3">
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={companyName}
                                            onChange={(e) =>
                                                setCompanyName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3">
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={companyName}
                                            onChange={(e) =>
                                                setCompanyName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3">
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={inclusive}
                                            setBithdate={(e) =>
                                                setInclusive(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="col-md-3">
                                        <Dropdown
                                            value={status}
                                            onChange={(e) => setStatus(e.value)}
                                            options={statuses}
                                            optionLabel="name"
                                            editable
                                            placeholder="Select a Status"
                                            className="form-select h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div><div class="row mb-4">
                            <div class="col-md-4">
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={companyName}
                                    onChange={(e) =>
                                        setCompanyName(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3">
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={companyName}
                                            onChange={(e) =>
                                                setCompanyName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3">
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={companyName}
                                            onChange={(e) =>
                                                setCompanyName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3">
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={inclusive}
                                            setBithdate={(e) =>
                                                setInclusive(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="col-md-3">
                                        <Dropdown
                                            value={status}
                                            onChange={(e) => setStatus(e.value)}
                                            options={statuses}
                                            optionLabel="name"
                                            editable
                                            placeholder="Select a Status"
                                            className="form-select h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-4">
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={companyName}
                                    onChange={(e) =>
                                        setCompanyName(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3">
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={companyName}
                                            onChange={(e) =>
                                                setCompanyName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3">
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={companyName}
                                            onChange={(e) =>
                                                setCompanyName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-md-3">
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={inclusive}
                                            setBithdate={(e) =>
                                                setInclusive(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="col-md-3">
                                        <Dropdown
                                            value={status}
                                            onChange={(e) => setStatus(e.value)}
                                            options={statuses}
                                            optionLabel="name"
                                            editable
                                            placeholder="Select a Status"
                                            className="form-select h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"
                                        />
                                    </div>
                                </div>
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
