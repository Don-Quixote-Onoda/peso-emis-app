import React, { useState, useRef } from "react";
import NavigatorButton from "../Components/NavigatorButton";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

export default function Vocational({
    activeIndex,
    numberOfPage,
    setActiveIndex,
    counterPrevious,
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveIndex(activeIndex + 1);
    };

    const [vocationalCourse, setVocationalCourse] = useState("");
    const [duration, setDuration] = useState("");

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div class="step-6">
                <div class="py-5 card border-0 rounded-0">
                    <h4 class="card-header pl-0 border-0 fw-bold">
                        6. TECHNICAL/VOCATIONAL AND OTHER TRAINING (Include
                        courses takens as part of college education){" "}
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row">
                            <div class="col-md-3">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    TRAINING/VOCATIONAL COURSE
                                </h6>
                            </div>
                            <div class="col-md-3">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Duration
                                </h6>
                            </div>
                            <div class="col-md-3">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Training Institution
                                </h6>
                            </div>
                            <div class="col-md-3">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Certificates Received
                                </h6>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={vocationalCourse}
                                    onChange={(e) =>
                                        setVocationalCourse(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-3">
                                <div class="row">
                                    <div class="col-md-6 !pr-0 ">
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={duration}
                                            setBithdate={(e) =>
                                                setDuration(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="col-md-6 !pr-0">
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={duration}
                                            setBithdate={(e) =>
                                                setDuration(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={vocationalCourse}
                                    onChange={(e) =>
                                        setVocationalCourse(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-3">
                                <InputText
                                    placeholder="(NC I, NC II, NC II, NC IV, etc)"
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={vocationalCourse}
                                    onChange={(e) =>
                                        setVocationalCourse(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    2
                                </label>
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={vocationalCourse}
                                    onChange={(e) =>
                                        setVocationalCourse(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-3">
                                <div class="row">
                                    <div class="col-md-6 !pr-0 ">
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={duration}
                                            setBithdate={(e) =>
                                                setDuration(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="col-md-6 !pr-0">
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={duration}
                                            setBithdate={(e) =>
                                                setDuration(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={vocationalCourse}
                                    onChange={(e) =>
                                        setVocationalCourse(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-3">
                                <InputText
                                    placeholder="(NC I, NC II, NC II, NC IV, etc)"
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={vocationalCourse}
                                    onChange={(e) =>
                                        setVocationalCourse(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    3
                                </label>
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={vocationalCourse}
                                    onChange={(e) =>
                                        setVocationalCourse(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-3">
                                <div class="row">
                                    <div class="col-md-6 !pr-0 ">
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={duration}
                                            setBithdate={(e) =>
                                                setDuration(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="col-md-6 !pr-0">
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={duration}
                                            setBithdate={(e) =>
                                                setDuration(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={vocationalCourse}
                                    onChange={(e) =>
                                        setVocationalCourse(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-3">
                                <InputText
                                    placeholder="(NC I, NC II, NC II, NC IV, etc)"
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={vocationalCourse}
                                    onChange={(e) =>
                                        setVocationalCourse(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="step-7">
                <div class="py-5 card border-0 rounded-0">
                    <h4 class="card-header pl-0 border-0 fw-bold">
                        7. ELIGIBILITY/ PROFESSIONAL LICENSE
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row">
                            <div class="col-md-4">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    ELIGIBILITY (Civil Service)
                                </h6>
                            </div>
                            <div class="col-md-4">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Rating
                                </h6>
                            </div>
                            <div class="col-md-4">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Date of examination
                                </h6>
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
                                    value={vocationalCourse}
                                    onChange={(e) =>
                                        setVocationalCourse(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-4">
                            <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={vocationalCourse}
                                    onChange={(e) =>
                                        setVocationalCourse(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-4">
                            <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={duration}
                                            setBithdate={(e) =>
                                                setDuration(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
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
                                    value={vocationalCourse}
                                    onChange={(e) =>
                                        setVocationalCourse(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-4">
                            <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={vocationalCourse}
                                    onChange={(e) =>
                                        setVocationalCourse(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-4">
                            <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={duration}
                                            setBithdate={(e) =>
                                                setDuration(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    PROFESSIONAL LICENSE (PRC)
                                </h6>
                            </div>
                            <div class="col-md-6">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Valid Until
                                </h6>
                            </div>
                        </div>
                        <div class="row mb-6">
                            <div class="col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={vocationalCourse}
                                    onChange={(e) =>
                                        setVocationalCourse(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-6">
                            <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={duration}
                                            setBithdate={(e) =>
                                                setDuration(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                            </div>
                        </div>
                        <div class="row mb-6">
                            <div class="col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    2
                                </label>
                                <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={vocationalCourse}
                                    onChange={(e) =>
                                        setVocationalCourse(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-6">
                            <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={duration}
                                            setBithdate={(e) =>
                                                setDuration(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
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
