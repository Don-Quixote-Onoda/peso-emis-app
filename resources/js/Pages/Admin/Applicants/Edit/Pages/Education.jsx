import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import { useEffect } from "react";
export default function Education({education}) {
    useEffect(() => {
        console.log(education);
    })
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
                        {/* {education.map(
                                (data) => (
                                    <div class="col-md-6">
                                        <div class="row mb-4">
                                            <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                                {data.type == 0 && "Elementary"}
                                                {data.type == 1 && "Secondary"}
                                                {data.type == 2 && "Tertiary"}
                                                {data.type == 3 &&
                                                    "Graduate Studies"}
                                            </h6>
                                            <div class="col-md-12 mb-2">
                                                <label
                                                    for="inputEmail4"
                                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                                >
                                                    School
                                                </label>
                                                <InputText
                                                    className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                                    value={data.school}
                                                    disabled
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
                                                    className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                                    value={data.course}
                                                    disabled
                                                />
                                            </div>
                                            <div class="col-md-12 mb-2">
                                                <label
                                                    for="inputEmail4"
                                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                                >
                                                    Year Graduated
                                                </label>
                                                <InputText
                                                    className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                                    value={data.year_graduated}
                                                    disabled
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
                                                        className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                                        value={data.level}
                                                        disabled
                                                    />
                                                </div>
                                                <div class="col-md-6 mb-2 !pr-0">
                                                    <label
                                                        for="inputEmail4"
                                                        class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                                                    >
                                                        year last attended
                                                    </label>
                                                    <InputText
                                                        className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                                        value={
                                                            data.year_last_attended
                                                        }
                                                        disabled
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
                                                    className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                                    value={data.awards}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
    );
}
