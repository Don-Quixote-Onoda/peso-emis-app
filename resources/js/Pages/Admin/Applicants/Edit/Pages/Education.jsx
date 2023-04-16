import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";
export default function Education(props) {

    const [schoolElementary, setSchoolElementary] =  useSessionStorage(
        sessionStorage.getItem("schoolElementary"),
        "schoolElementary"
    );
    const [courseElementary, setCourseElementary] =  useSessionStorage(
        sessionStorage.getItem("courseElementary"),
        "courseElementary"
    );
    const [yearGraduateElementary, setYearGraduatedElementary] =  useSessionStorage(
        sessionStorage.getItem("yearGraduateElementary"),
        "yearGraduateElementary"
    );
    const [undergraduateLevelElementary, setUndergraduateLevelElementary] =
         useSessionStorage(
        sessionStorage.getItem("undergraduateLevelElementary"),
        "undergraduateLevelElementary"
    );
    const [awardsRecievedElementary, setAwardsRecievedElementary] =
         useSessionStorage(
        sessionStorage.getItem("awardsRecievedElementary"),
        "awardsRecievedElementary"
    );
    const [yearLastAttendedElementary, setYearLastAttendedElementary] =
         useSessionStorage(
        sessionStorage.getItem("yearLastAttendedElementary"),
        "yearLastAttendedElementary"
    );

    const [schoolSecondary, setSchoolSecondary] =  useSessionStorage(
        sessionStorage.getItem("schoolSecondary"),
        "schoolSecondary"
    );
    const [courseSecondary, setCourseSecondary] =  useSessionStorage(
        sessionStorage.getItem("courseSecondary"),
        "courseSecondary"
    );
    const [yearGraduateSecondary, setYearGraduatedSecondary] =  useSessionStorage(
        sessionStorage.getItem("yearGraduateSecondary"),
        "yearGraduateSecondary"
    );
    const [undergraduateLevelSecondary, setUndergraduateLevelSecondary] =
         useSessionStorage(
        sessionStorage.getItem("undergraduateLevelSecondary"),
        "undergraduateLevelSecondary"
    );
    const [awardsRecievedSecondary, setAwardsRecievedSecondary] =  useSessionStorage(
        sessionStorage.getItem("awardsRecievedSecondary"),
        "awardsRecievedSecondary"
    );
    const [yearLastAttendedSecondary, setYearLastAttendedSecondary] =
         useSessionStorage(
        sessionStorage.getItem("yearLastAttendedSecondary"),
        "yearLastAttendedSecondary"
    );

    const [schoolTertiary, setSchoolTertiary] =  useSessionStorage(
        sessionStorage.getItem("schoolTertiary"),
        "schoolTertiary"
    );
    const [courseTertiary, setCourseTertiary] =  useSessionStorage(
        sessionStorage.getItem("courseTertiary"),
        "courseTertiary"
    );
    const [yearGraduateTertiary, setYearGraduatedTertiary] =  useSessionStorage(
        sessionStorage.getItem("yearGraduateTertiary"),
        "yearGraduateTertiary"
    );
    const [undergraduateLevelTertiary, setUndergraduateLevelTertiary] =
         useSessionStorage(
        sessionStorage.getItem("undergraduateLevelTertiary"),
        "undergraduateLevelTertiary"
    );
    const [awardsRecievedTertiary, setAwardsRecievedTertiary] =  useSessionStorage(
        sessionStorage.getItem("awardsRecievedTertiary"),
        "awardsRecievedTertiary"
    );
    const [yearLastAttendedTertiary, setYearLastAttendedTertiary] =
         useSessionStorage(
        sessionStorage.getItem("yearLastAttendedTertiary"),
        "yearLastAttendedTertiary"
    );

    const [schoolGraduateStudies, setSchoolGraduateStudies] =  useSessionStorage(
        sessionStorage.getItem("schoolGraduateStudies"),
        "schoolGraduateStudies"
    );
    const [courseGraduateStudies, setCourseGraduateStudies] =  useSessionStorage(
        sessionStorage.getItem("courseGraduateStudies"),
        "courseGraduateStudies"
    );
    const [yearGraduateGraduateStudies, setYearGraduatedGraduateStudies] =
         useSessionStorage(
        sessionStorage.getItem("yearGraduateGraduateStudies"),
        "yearGraduateGraduateStudies"
    );
    const [
        undergraduateLevelGraduateStudies,
        setUndergraduateLevelGraduateStudies,
    ] =  useSessionStorage(
        sessionStorage.getItem("undergraduateLevelGraduateStudies"),
        "undergraduateLevelGraduateStudies"
    );
    const [awardsRecievedGraduateStudies, setAwardsRecievedGraduateStudies] =
         useSessionStorage(
        sessionStorage.getItem("awardsRecievedGraduateStudies"),
        "awardsRecievedGraduateStudies"
    );
    const [
        yearLastAttendedGraduateStudies,
        setYearLastAttendedGraduateStudies,
    ] =  useSessionStorage(
        sessionStorage.getItem("yearLastAttendedGraduateStudies"),
        "yearLastAttendedGraduateStudies"
    );

    return (
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
                                            onChange={(e) =>
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
                                                onChange={(e) =>
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
                                            onChange={(e) =>
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
                                                onChange={(e) =>
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
                                            onChange={(e) =>
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
                                                onChange={(e) =>
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
                                            onChange={(e) =>
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
                                                onChange={(e) =>
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
    );
}
