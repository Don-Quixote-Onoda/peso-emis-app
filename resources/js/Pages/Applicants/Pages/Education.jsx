import React, { useState, useRef } from "react";
import NavigatorButton from "../Components/NavigatorButton";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
export default function Education({
    activeIndex,
    numberOfPage,
    setActiveIndex,
    counterPrevious,
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveIndex(activeIndex + 1);
    };

    const [schoolElementary, setSchoolElementary] = useState("");
    const [courseElementary, setCourseElementary] = useState("");
    const [yearGraduateElementary, setYearGraduatedElementary] = useState("");
    const [undergraduateLevelElementary, setUndergraduateLevelElementary] =
        useState("");
    const [awardsRecievedElementary, setAwardsRecievedElementary] =
        useState("");
    const [yearLastAttendedElementary, setYearLastAttendedElementary] =
        useState("");

    const [schoolSecondary, setSchoolSecondary] = useState("");
    const [courseSecondary, setCourseSecondary] = useState("");
    const [yearGraduateSecondary, setYearGraduatedSecondary] = useState("");
    const [undergraduateLevelSecondary, setUndergraduateLevelSecondary] =
        useState("");
    const [awardsRecievedSecondary, setAwardsRecievedSecondary] = useState("");
    const [yearLastAttendedSecondary, setYearLastAttendedSecondary] =
        useState("");

    const [schoolTertiary, setSchoolTertiary] = useState("");
    const [courseTertiary, setCourseTertiary] = useState("");
    const [yearGraduateTertiary, setYearGraduatedTertiary] = useState("");
    const [undergraduateLevelTertiary, setUndergraduateLevelTertiary] =
        useState("");
    const [awardsRecievedTertiary, setAwardsRecievedTertiary] = useState("");
    const [yearLastAttendedTertiary, setYearLastAttendedTertiary] =
        useState("");

    const [schoolGraduateStudies, setSchoolGraduateStudies] = useState("");
    const [courseGraduateStudies, setCourseGraduateStudies] = useState("");
    const [yearGraduateGraduateStudies, setYearGraduatedGraduateStudies] =
        useState("");
    const [
        undergraduateLevelGraduateStudies,
        setUndergraduateLevelGraduateStudies,
    ] = useState("");
    const [awardsRecievedGraduateStudies, setAwardsRecievedGraduateStudies] =
        useState("");
    const [
        yearLastAttendedGraduateStudies,
        setYearLastAttendedGraduateStudies,
    ] = useState("");

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div class="step-5">
                <div class="py-5 card border-0 rounded-0">
                    <h4 class="card-header pl-0 border-0 fw-bold">
                        4. Educational Background
                    </h4>
                    <div class="card-body pl-0 pt-3">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row mb-4">
                                    <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                        Elementary
                                    </h6>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            School
                                        </label>
                                        <InputText
                                            className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                            value={schoolElementary}
                                            onChange={(e) =>
                                                setSchoolElementary(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Course
                                        </label>
                                        <InputText
                                            className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                            value={courseElementary}
                                            onChange={(e) =>
                                                setCourseElementary(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Year Graduated
                                        </label>
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={yearGraduateElementary}
                                            setBithdate={(e) =>
                                                setYearGraduatedElementary(
                                                    e.value
                                                )
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="row !pr-0">
                                        <h6 class="fw-bold text-dark-emphasis !text-xs text-gray-500 !pr-0 !text-md">
                                            If undergraduate,{" "}
                                        </h6>
                                        <div class="col-md-6 mb-2">
                                            <label
                                                for="inputEmail4"
                                                class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                            >
                                                What level?
                                            </label>
                                            <InputText
                                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                                value={
                                                    undergraduateLevelElementary
                                                }
                                                onChange={(e) =>
                                                    setUndergraduateLevelElementary(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div class="col-md-6 mb-2 !pr-0">
                                            <label
                                                for="inputEmail4"
                                                class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                            >
                                                year last attended
                                            </label>
                                            <Calendar
                                                className="form-control h-10 p-0 border-0"
                                                value={
                                                    yearLastAttendedElementary
                                                }
                                                setBithdate={(e) =>
                                                    setYearLastAttendedElementary(
                                                        e.value
                                                    )
                                                }
                                                dateFormat="dd/mm/yy"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Awards recieved
                                        </label>
                                        <InputText
                                            className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                            value={awardsRecievedElementary}
                                            onChange={(e) =>
                                                setAwardsRecievedElementary(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                            <div class="row mb-4">
                                    <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                        Secondary
                                    </h6>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            School
                                        </label>
                                        <InputText
                                            className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                            value={schoolSecondary}
                                            onChange={(e) =>
                                                setSchoolSecondary(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Course
                                        </label>
                                        <InputText
                                            className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                            value={courseSecondary}
                                            onChange={(e) =>
                                                setCourseSecondary(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Year Graduated
                                        </label>
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={yearGraduateSecondary}
                                            setBithdate={(e) =>
                                                setYearGraduatedSecondary(
                                                    e.value
                                                )
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="row !pr-0">
                                        <h6 class="fw-bold text-dark-emphasis !text-xs text-gray-500 !pr-0 !text-md">
                                            If undergraduate,{" "}
                                        </h6>
                                        <div class="col-md-6 mb-2">
                                            <label
                                                for="inputEmail4"
                                                class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                            >
                                                What level?
                                            </label>
                                            <InputText
                                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                                value={
                                                    undergraduateLevelSecondary
                                                }
                                                onChange={(e) =>
                                                    setUndergraduateLevelSecondary(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div class="col-md-6 mb-2 !pr-0">
                                            <label
                                                for="inputEmail4"
                                                class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                            >
                                                year last attended
                                            </label>
                                            <Calendar
                                                className="form-control h-10 p-0 border-0"
                                                value={
                                                    yearLastAttendedSecondary
                                                }
                                                setBithdate={(e) =>
                                                    setYearLastAttendedSecondary(
                                                        e.value
                                                    )
                                                }
                                                dateFormat="dd/mm/yy"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Awards recieved
                                        </label>
                                        <InputText
                                            className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                            value={awardsRecievedSecondary}
                                            onChange={(e) =>
                                                setAwardsRecievedSecondary(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                            <div class="row mb-4">
                                    <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                        Tertiary
                                    </h6>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            School
                                        </label>
                                        <InputText
                                            className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                            value={schoolTertiary}
                                            onChange={(e) =>
                                                setSchoolTertiary(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Course
                                        </label>
                                        <InputText
                                            className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                            value={courseTertiary}
                                            onChange={(e) =>
                                                setCourseTertiary(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Year Graduated
                                        </label>
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={yearGraduateTertiary}
                                            setBithdate={(e) =>
                                                setYearGraduatedTertiary(
                                                    e.value
                                                )
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="row !pr-0">
                                        <h6 class="fw-bold text-dark-emphasis !text-xs text-gray-500 !pr-0 !text-md">
                                            If undergraduate,{" "}
                                        </h6>
                                        <div class="col-md-6 mb-2">
                                            <label
                                                for="inputEmail4"
                                                class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                            >
                                                What level?
                                            </label>
                                            <InputText
                                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                                value={
                                                    undergraduateLevelTertiary
                                                }
                                                onChange={(e) =>
                                                    setUndergraduateLevelTertiary(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div class="col-md-6 mb-2 !pr-0">
                                            <label
                                                for="inputEmail4"
                                                class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                            >
                                                year last attended
                                            </label>
                                            <Calendar
                                                className="form-control h-10 p-0 border-0"
                                                value={
                                                    yearLastAttendedTertiary
                                                }
                                                setBithdate={(e) =>
                                                    setYearLastAttendedTertiary(
                                                        e.value
                                                    )
                                                }
                                                dateFormat="dd/mm/yy"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Awards recieved
                                        </label>
                                        <InputText
                                            className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                            value={awardsRecievedTertiary}
                                            onChange={(e) =>
                                                setAwardsRecievedTertiary(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                            <div class="row mb-4">
                                    <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                        Graduate Studies
                                    </h6>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            School
                                        </label>
                                        <InputText
                                            className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                            value={schoolGraduateStudies}
                                            onChange={(e) =>
                                                setSchoolGraduateStudies(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Course
                                        </label>
                                        <InputText
                                            className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                            value={courseGraduateStudies}
                                            onChange={(e) =>
                                                setCourseGraduateStudies(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Year Graduated
                                        </label>
                                        <Calendar
                                            className="form-control h-10 p-0 border-0"
                                            value={yearGraduateGraduateStudies}
                                            setBithdate={(e) =>
                                                setYearGraduatedGraduateStudies(
                                                    e.value
                                                )
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                                    </div>
                                    <div class="row !pr-0">
                                        <h6 class="fw-bold text-dark-emphasis !text-xs text-gray-500 !pr-0 !text-md">
                                            If undergraduate,{" "}
                                        </h6>
                                        <div class="col-md-6 mb-2">
                                            <label
                                                for="inputEmail4"
                                                class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                            >
                                                What level?
                                            </label>
                                            <InputText
                                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                                value={
                                                    undergraduateLevelGraduateStudies
                                                }
                                                onChange={(e) =>
                                                    setUndergraduateLevelGraduateStudies(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div class="col-md-6 mb-2 !pr-0">
                                            <label
                                                for="inputEmail4"
                                                class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                            >
                                                year last attended
                                            </label>
                                            <Calendar
                                                className="form-control h-10 p-0 border-0"
                                                value={
                                                    yearLastAttendedGraduateStudies
                                                }
                                                setBithdate={(e) =>
                                                    setYearLastAttendedGraduateStudies(
                                                        e.value
                                                    )
                                                }
                                                dateFormat="dd/mm/yy"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Awards recieved
                                        </label>
                                        <InputText
                                            className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                            value={awardsRecievedGraduateStudies}
                                            onChange={(e) =>
                                                setAwardsRecievedGraduateStudies(
                                                    e.target.value
                                                )
                                            }
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
