import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

import { useSessionStorage, useLocalStorage } from "primereact/hooks";

export default function Vocational(props) {

    const [vocationalCourse, setVocationalCourse] = useState("");
    const [duration, setDuration] = useState("");

    const [trainingVocationalCourse1, setTrainingVocationalCourse1] = useSessionStorage(
        sessionStorage.getItem("trainingVocationalCourse1"),
        "trainingVocationalCourse1"
    );

    const [trainingVocationalCourseDuration1, setTrainingVocationalCourseDuration1] = useSessionStorage(
        sessionStorage.getItem("trainingVocationalCourseDuration1"),
        "trainingVocationalCourseDuration1"
    );

    const [trainingVocationalCourseTrainingInstituition1, setTrainingVocationalCourseTrainingInstituition1] = useSessionStorage(
        sessionStorage.getItem("trainingVocationalCourseTrainingInstituition1"),
        "trainingVocationalCourseTrainingInstituition1"
    );

    const [trainingVocationalCourseCertificateRecieved1, setTrainingVocationalCourseCertificateRecieved1] = useSessionStorage(
        sessionStorage.getItem("trainingVocationalCourseCertificateRecieved1"),
        "trainingVocationalCourseCertificateRecieved1"
    );

    const [trainingVocationalCourse2, setTrainingVocationalCourse2] = useSessionStorage(
        sessionStorage.getItem("trainingVocationalCourse2"),
        "trainingVocationalCourse2"
    );

    const [trainingVocationalCourseDuration2, setTrainingVocationalCourseDuration2] = useSessionStorage(
        sessionStorage.getItem("trainingVocationalCourseDuration2"),
        "trainingVocationalCourseDuration2"
    );

    const [trainingVocationalCourseTrainingInstituition2, setTrainingVocationalCourseTrainingInstituition2] = useSessionStorage(
        sessionStorage.getItem("trainingVocationalCourseTrainingInstituition2"),
        "trainingVocationalCourseTrainingInstituition2"
    );

    const [trainingVocationalCourseCertificateRecieved2, setTrainingVocationalCourseCertificateRecieved2] = useSessionStorage(
        sessionStorage.getItem("trainingVocationalCourseCertificateRecieved2"),
        "trainingVocationalCourseCertificateRecieved2"
    );

    const [trainingVocationalCourse3, setTrainingVocationalCourse3] = useSessionStorage(
        sessionStorage.getItem("trainingVocationalCourse3"),
        "trainingVocationalCourse3"
    );

    const [trainingVocationalCourseDuration3, setTrainingVocationalCourseDuration3] = useSessionStorage(
        sessionStorage.getItem("trainingVocationalCourseDuration3"),
        "trainingVocationalCourseDuration3"
    );

    const [trainingVocationalCourseTrainingInstituition3, setTrainingVocationalCourseTrainingInstituition3] = useSessionStorage(
        sessionStorage.getItem("trainingVocationalCourseTrainingInstituition3"),
        "trainingVocationalCourseTrainingInstituition3"
    );

    const [trainingVocationalCourseCertificateRecieved3, setTrainingVocationalCourseCertificateRecieved3] = useSessionStorage(
        sessionStorage.getItem("trainingVocationalCourseCertificateRecieved3"),
        "trainingVocationalCourseCertificateRecieved3"
    );

    const [eligibilility1, setEligibility1] = useSessionStorage(
        sessionStorage.getItem("eligibilility1"),
        "eligibilility1"
    );

    const [eligibililityRating1, setEligibilityRating1] = useSessionStorage(
        sessionStorage.getItem("eligibililityRating1"),
        "eligibililityRating1"
    );

    const [eligibililityDateOfExamination1, setEligibilityDateOfExamination1] = useSessionStorage(
        sessionStorage.getItem("eligibililityDateOfExamination1"),
        "eligibililityDateOfExamination1"
    );

    const [eligibilility2, setEligibility2] = useSessionStorage(
        sessionStorage.getItem("eligibilility2"),
        "eligibilility2"
    );

    const [eligibililityRating2, setEligibilityRating2] = useSessionStorage(
        sessionStorage.getItem("eligibililityRating2"),
        "eligibililityRating2"
    );

    const [eligibililityDateOfExamination2, setEligibilityDateOfExamination2] = useSessionStorage(
        sessionStorage.getItem("eligibililityDateOfExamination2"),
        "eligibililityDateOfExamination2"
    );

    const [professionalLicense1, setProfessionalLicense1] = useSessionStorage(
        sessionStorage.getItem("professionalLicense1"),
        "professionalLicense1"
    );

    const [professionalLicenseValidUntil1, setProfessionalLicenseValidUntil1] = useSessionStorage(
        sessionStorage.getItem("professionalLicenseValidUntil1"),
        "professionalLicenseValidUntil1"
    );

    const [professionalLicense2, setProfessionalLicense2] = useSessionStorage(
        sessionStorage.getItem("professionalLicense2"),
        "professionalLicense2"
    );

    const [professionalLicenseValidUntil2, setProfessionalLicenseValidUntil2] = useSessionStorage(
        sessionStorage.getItem("professionalLicenseValidUntil2"),
        "professionalLicenseValidUntil2"
    );

    return (
            <>
            <div class="step-6">
                <div class="pt-5 card border-0 rounded-0">
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
                            <div class="col-md-3 responsive-text-md-none">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Duration
                                </h6>
                            </div>
                            <div class="col-md-3 responsive-text-md-none">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Training Institution
                                </h6>
                            </div>
                            <div class="col-md-3 responsive-text-md-none">
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
                                    value={trainingVocationalCourse1}
                                    placeholder="Training / Vocational Course"
                                    onChange={(e) =>
                                        setTrainingVocationalCourse1(e.target.value)
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
                                    value={trainingVocationalCourseDuration1}
                                    placeholder="Duration"
                                    onChange={(e) =>
                                        setTrainingVocationalCourseDuration1(e.target.value)
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
                                    value={trainingVocationalCourseTrainingInstituition1}
                                    placeholder="Training Instituition"
                                    onChange={(e) =>
                                        setTrainingVocationalCourseTrainingInstituition1(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ">
                            <label
                                    for="inputEmail4"
                                    class="form-label responsive-visibility-md !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                                <InputText
                                    placeholder="(NC I, NC II, NC II, NC IV, etc)"
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={trainingVocationalCourseCertificateRecieved1}
                                    onChange={(e) =>
                                        setTrainingVocationalCourseCertificateRecieved1(e.target.value)
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
                                    value={trainingVocationalCourse2}
                                    placeholder="Training / Vocational Course"
                                    onChange={(e) =>
                                        setTrainingVocationalCourse2(e.target.value)
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
                                    value={trainingVocationalCourseDuration2}
                                    placeholder="Duration"
                                    onChange={(e) =>
                                        setTrainingVocationalCourseDuration2(e.target.value)
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
                                    value={trainingVocationalCourseTrainingInstituition2}
                                    placeholder="Training Instituition"
                                    onChange={(e) =>
                                        setTrainingVocationalCourseTrainingInstituition2(e.target.value)
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
                                    placeholder="(NC I, NC II, NC II, NC IV, etc)"
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={trainingVocationalCourseCertificateRecieved2}
                                    onChange={(e) =>
                                        setTrainingVocationalCourseCertificateRecieved2(e.target.value)
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
                                    value={trainingVocationalCourse3}
                                    placeholder="Training / Vocational Course"
                                    onChange={(e) =>
                                        setTrainingVocationalCourse3(e.target.value)
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
                                    value={trainingVocationalCourseDuration3}
                                    placeholder="Duration"
                                    onChange={(e) =>
                                        setTrainingVocationalCourseDuration3(e.target.value)
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
                                    value={trainingVocationalCourseTrainingInstituition3}
                                    placeholder="Training Instituition"
                                    onChange={(e) =>
                                        setTrainingVocationalCourseTrainingInstituition3(e.target.value)
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
                                    placeholder="(NC I, NC II, NC II, NC IV, etc)"
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={trainingVocationalCourseCertificateRecieved3}
                                    onChange={(e) =>
                                        setTrainingVocationalCourseCertificateRecieved3(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="step-7">
                <div class="pb-5 card border-0 rounded-0">
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
                            <div class="col-md-4 responsive-text-md-none">
                                <h6 class="fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md">
                                    Rating
                                </h6>
                            </div>
                            <div class="col-md-4 responsive-text-md-none">
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
                                    value={eligibilility1}
                                    placeholder="Eligibility (Civil Service)"
                                    onChange={(e) =>
                                        setEligibility1(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ">
                            <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                            <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={eligibililityRating1}
                                    placeholder="Rating"
                                    onChange={(e) =>
                                        setEligibilityRating1(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ">
                            <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                            <Calendar
                                            className="form-control calendar-text-xs h-10 p-0 border-0"
                                            value={eligibililityDateOfExamination1}
                                            placeholder="Date Of Examination"
                                    onChange={(e) =>
                                        setEligibilityDateOfExamination1(e.target.value)
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
                                    value={eligibilility2}
                                    placeholder="Eligibility (Civil Service)"
                                    onChange={(e) =>
                                        setEligibility2(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ">
                            <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                            <InputText
                                    className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    value={eligibililityRating2}
                                    placeholder="Rating"
                                    onChange={(e) =>
                                        setEligibilityRating2(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ">
                            <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                            <Calendar
                                            className="form-control h-10 p-0 border-0 calendar-text-xs"
                                            value={eligibililityDateOfExamination2}
                                            placeholder="Date of Examination"
                                    onChange={(e) =>
                                        setEligibilityDateOfExamination2(e.target.value)
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
                            <div class="col-md-6 responsive-text-md-none">
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
                                    value={professionalLicense1}
                                    placeholder="Professional License (PRC)"
                                    onChange={(e) =>
                                        setProfessionalLicense1(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ">
                            <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                            <Calendar
                                            className="form-control h-10 p-0 border-0 calendar-text-xs"
                                            value={professionalLicenseValidUntil1}
                                            placeholder="Valid Until"
                                            onChange={(e) =>
                                                setProfessionalLicenseValidUntil1(e.value)
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
                                    value={professionalLicense2}
                                    placeholder="Professional License (PRC)"
                                    onChange={(e) =>
                                        setProfessionalLicense2(e.target.value)
                                    }
                                />
                            </div>
                            <div class="col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ">
                            <label
                                    for="inputEmail4"
                                    class="form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis"
                                >
                                    1
                                </label>
                            <Calendar
                                            className="form-control h-10 p-0 border-0 calendar-text-xs"
                                            value={professionalLicenseValidUntil2}
                                            placeholder="Date of Examination"
                                            onChange={(e) =>
                                                setProfessionalLicenseValidUntil2(e.value)
                                            }
                                            dateFormat="dd/mm/yy"
                                        />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
}
