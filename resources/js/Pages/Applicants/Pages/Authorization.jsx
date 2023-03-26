import React, { useState, useRef, useEffect } from "react";
import NavigatorButton from "../Components/NavigatorButton";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import { useForm } from '@inertiajs/react'
import { InputText } from 'primereact/inputtext';
import { Checkbox } from "primereact/checkbox";

export default function Authorization({
    activeIndex,
    numberOfPage,
    setActiveIndex,
    counterPrevious,
}) {

    
    const [authorizationAccepted, setAuthorizationAccepted] = useSessionStorage(
        sessionStorage.getItem("authorizationAccepted"),
        "authorizationAccepted"
    );

    const personalInformation = {
        "personalDetails" : {
                "surname" : sessionStorage.getItem("surname"),
                "firstname" : sessionStorage.getItem("firstname"),
                "middlename" : sessionStorage.getItem("middlename"),
                "suffix" : sessionStorage.getItem("suffix"),
                "birthdate" : sessionStorage.getItem("birthdate"),
                "religion" : sessionStorage.getItem("religion"),
                "height" : sessionStorage.getItem("height"),
                "emailAddress" : sessionStorage.getItem("emailAddress"),
                "phoneNumber" : sessionStorage.getItem("phoneNumber"),
                "landlineNumber" : sessionStorage.getItem("landlineNumber"),
                "GSISNumber" : sessionStorage.getItem("GSISNumber"),
                "pagIbigNumber" : sessionStorage.getItem("pagIbigNumber"),
                "philhealthNumber" : sessionStorage.getItem("philhealthNumber"),
                "sex" : sessionStorage.getItem("sex"),
                "TINNumber" : sessionStorage.getItem("TINNumber"),
                "civilStatus" : sessionStorage.getItem("civilStatus"),
                "disability" : sessionStorage.getItem("disability"),
                "activelyLookingForWork" : sessionStorage.getItem("activelyLookingForWork"),
                "howLongLookingForWork" : sessionStorage.getItem("howLongLookingForWork"),
                "noWhenToWork" : sessionStorage.getItem("noWhenToWork"),
                "willingToWorkImmediately" : sessionStorage.getItem("willingToWorkImmediately"),
                "householdNumber" : sessionStorage.getItem("householdNumber"),
                "is4psBeneficiary" : sessionStorage.getItem("is4psBeneficiary"),
                "employementStatus" : sessionStorage.getItem("employementStatus"),
                "pob_provinceAddr" : sessionStorage.getItem("pob_provinceAddr"),
                "pob_cityAddr" : sessionStorage.getItem("pob_cityAddr"),
                "pob_barangayAddr" : sessionStorage.getItem("pob_barangayAddr"),
                "pob_houseNumber_Street_Village" : sessionStorage.getItem("pob_houseNumber_Street_Village"),
                "pa_regionAddr" : sessionStorage.getItem("pa_regionAddr"),
                "pa_provinceAddr" : sessionStorage.getItem("pa_provinceAddr"),
                "pa_cityAddr" : sessionStorage.getItem("pa_cityAddr"),
                "pa_barangayAddr" : sessionStorage.getItem("pa_barangayAddr"),
                "pa_houseNumber_Street_Village" : sessionStorage.getItem("pa_houseNumber_Street_Village"),
                "authorizationAccepted" : sessionStorage.getItem("authorizationAccepted"),
                "OtherSkills" : sessionStorage.getItem("OtherSkills"),
                "passportNumber" : sessionStorage.getItem("passportNumber"),
                "expectedSalary" : sessionStorage.getItem("expectedSalary"),
                "expiryDate" : sessionStorage.getItem("expiryDate"),
            },
            "address" : {
                "placeOfBirth" : {
                    "province" : sessionStorage.getItem("pob_provinceAddr"),
                    "city" : sessionStorage.getItem("pob_cityAddr"),
                    "barangay" : sessionStorage.getItem("pob_barangayAddr"),
                    "houseStreetVillage" : sessionStorage.getItem("pob_houseNumber_Street_Village"),
                },
                "presentAddress" : {
                    "province" : sessionStorage.getItem("pa_provinceAddr"),
                    "city" : sessionStorage.getItem("pa_cityAddr"),
                    "barangay" : sessionStorage.getItem("pa_barangayAddr"),
                    "houseStreetVillage" : sessionStorage.getItem("pa_houseNumber_Street_Village"),
                }
            },
            "educationalBackground" : {
                "elementary" : {
                    "name" : sessionStorage.getItem("schoolElementary"),
                    "course" : sessionStorage.getItem("courseElementary"),
                    "yearGraduated" : sessionStorage.getItem("yearGraduateElementary"),
                    "underGraduate" : sessionStorage.getItem("undergraduateLevelElementary"),
                    "awardsRecieved" : sessionStorage.getItem("awardsRecievedElementary"),
                    "yearLastAttended" : sessionStorage.getItem("yearLastAttendedElementary"),
                },
                "secondary" : {
                    "name" : sessionStorage.getItem("schoolSecondary"),
                    "course" : sessionStorage.getItem("courseSecondary"),
                    "yearGraduated" : sessionStorage.getItem("yearGraduateSecondary"),
                    "underGraduate" : sessionStorage.getItem("undergraduateLevelSecondary"),
                    "awardsRecieved" : sessionStorage.getItem("awardsRecievedSecondary"),
                    "yearLastAttended" : sessionStorage.getItem("yearLastAttendedSecondary"),
                },
                "tertiary" : {
                    "name" : sessionStorage.getItem("schoolTertiary"),
                    "course" : sessionStorage.getItem("courseTertiary"),
                    "yearGraduated" : sessionStorage.getItem("yearGraduateTertiary"),
                    "underGraduate" : sessionStorage.getItem("undergraduateLevelTertiary"),
                    "awardsRecieved" : sessionStorage.getItem("awardsRecievedTertiary"),
                    "yearLastAttended" : sessionStorage.getItem("yearLastAttendedTertiary"),
                },
                "graduateStudies" : {
                    "name" : sessionStorage.getItem("schoolGraduateStudies"),
                    "course" : sessionStorage.getItem("courseGraduateStudies"),
                    "yearGraduated" : sessionStorage.getItem("yearGraduateGraduateStudies"),
                    "underGraduate" : sessionStorage.getItem("undergraduateLevelGraduateStudies"),
                    "awardsRecieved" : sessionStorage.getItem("awardsRecievedGraduateStudies"),
                    "yearLastAttended" : sessionStorage.getItem("yearLastAttendedGraduateStudies"),
                }
            },
            "trainingVocationalCourse" : {
                "trainingVocationalCourse1" : {
                    'training_or_courses' : sessionStorage.getItem("trainingVocationalCourse1"),
                    'duration' : sessionStorage.getItem("trainingVocationalCourseDuration1"),
                    'instituition' : sessionStorage.getItem("trainingVocationalCourseTrainingInstituition1"),
                    'certificates': sessionStorage.getItem("trainingVocationalCourseCertificateRecieved1"),
                },
                "trainingVocationalCourse2" : {
                    'training_or_courses' : sessionStorage.getItem("trainingVocationalCourse2"),
                    'duration' : sessionStorage.getItem("trainingVocationalCourseDuration2"),
                    'instituition' : sessionStorage.getItem("trainingVocationalCourseTrainingInstituition2"),
                    'certificates': sessionStorage.getItem("trainingVocationalCourseCertificateRecieved2"),
                },
                "trainingVocationalCourse3" : {
                    'training_or_courses' : sessionStorage.getItem("trainingVocationalCourse3"),
                    'duration' : sessionStorage.getItem("trainingVocationalCourseDuration3"),
                    'instituition' : sessionStorage.getItem("trainingVocationalCourseTrainingInstituition3"),
                    'certificates': sessionStorage.getItem("trainingVocationalCourseCertificateRecieved3"),
                },
            },
            "eligibility" : {
                "eligibility1" : {
                    "eligibility" : sessionStorage.getItem("eligibilility1"),
                    "rating" : sessionStorage.getItem("eligibililityRating1"),
                    "date_of_examination" : sessionStorage.getItem("eligibililityDateOfExamination1"),
                },
                "eligibility2" : {
                    "eligibility" : sessionStorage.getItem("eligibilility2"),
                    "rating" : sessionStorage.getItem("eligibililityRating2"),
                    "date_of_examination" : sessionStorage.getItem("eligibililityDateOfExamination2"),
                }
            },
            "professionalLicense" : {
                "professional_license1" : {
                    "professionalLicense" : sessionStorage.getItem("professionalLicense1"),
                    "valid_until" : sessionStorage.getItem("professionalLicenseValidUntil1"),
                },
                "professional_license2" : {
                    "professionalLicense" : sessionStorage.getItem("professionalLicense2"),
                    "valid_until" : sessionStorage.getItem("professionalLicenseValidUntil2"),
                }
            },
            "jobPreferenceLocation" : {
                "preferredOccupation1" : sessionStorage.getItem("preferredOccupation1"),
                "preferredOccupation2" : sessionStorage.getItem("preferredOccupation2"),
                "preferredOccupation3" : sessionStorage.getItem("preferredOccupation3"),
                "preferredOccupation4" : sessionStorage.getItem("preferredOccupation4"),
            },
            "preferredWorkLocation" : {
                "local" : {
                    "preferredWorkLocationLocal1" : sessionStorage.getItem("preferredWorkLocationLocal1"),
                    "preferredWorkLocationLocal2" : sessionStorage.getItem("preferredWorkLocationLocal2"),
                    "preferredWorkLocationLocal3" : sessionStorage.getItem("preferredWorkLocationLocal3"),
                },
                "overseas" : {
                    "preferredWorkLocationOverseas1" : sessionStorage.getItem("preferredWorkLocationOverseas1"),
                    "preferredWorkLocationOverseas2" : sessionStorage.getItem("preferredWorkLocationOverseas2"),
                    "preferredWorkLocationOverseas3" : sessionStorage.getItem("preferredWorkLocationOverseas3"),
                }
            },
            "language" : {
                "others" : {
                    "name":sessionStorage.getItem("othersLanguage"),
                    "canRead":sessionStorage.getItem("readOthers"),
                    "canWrite":sessionStorage.getItem("writeOthers"),
                    "canSpeak":sessionStorage.getItem("speakOthers"),
                    "canUnderstand":sessionStorage.getItem("understandOthers"),
                },
                "english" : {
                    "name":"english",
                    "canRead":sessionStorage.getItem("readEnglish"),
                    "canWrite":sessionStorage.getItem("writeEnglish"),
                    "canSpeak":sessionStorage.getItem("speakEnglish"),
                    "canUnderstand":sessionStorage.getItem("understandEnglish"),
                },
                "filipino" : {
                    "name":"filipino",
                    "canRead":sessionStorage.getItem("readFilipino"),
                    "canWrite":sessionStorage.getItem("writeFilipino"),
                    "canSpeak":sessionStorage.getItem("speakFilipino"),
                    "canUnderstand":sessionStorage.getItem("understandFilipino"),
                }
            },
            "workExperience" : {
                "workExperience1" : {
                    "companyName" : sessionStorage.getItem("companyName1"),
                    "address" : sessionStorage.getItem("address1"),
                    "position" : sessionStorage.getItem("position1"),
                    "inclusive" : sessionStorage.getItem("inclusive1"),
                    "status" : sessionStorage.getItem("status1"),
                },
                "workExperience2" : {
                    "companyName" : sessionStorage.getItem("companyName2"),
                    "address" : sessionStorage.getItem("address2"),
                    "position" : sessionStorage.getItem("position2"),
                    "inclusive" : sessionStorage.getItem("inclusive2"),
                    "status" : sessionStorage.getItem("status2"),
                },
                "workExperience3" : {
                    "companyName" : sessionStorage.getItem("companyName3"),
                    "address" : sessionStorage.getItem("address3"),
                    "position" : sessionStorage.getItem("position3"),
                    "inclusive" : sessionStorage.getItem("inclusive3"),
                    "status" : sessionStorage.getItem("status3"),
                },
                "workExperience4" : {
                    "companyName" : sessionStorage.getItem("companyName4"),
                    "address" : sessionStorage.getItem("address4"),
                    "position" : sessionStorage.getItem("position4"),
                    "inclusive" : sessionStorage.getItem("inclusive4"),
                    "status" : sessionStorage.getItem("status4"),
                },
                "workExperience5" : {
                    "companyName" : sessionStorage.getItem("companyName5"),
                    "address" : sessionStorage.getItem("address5"),
                    "position" : sessionStorage.getItem("position5"),
                    "inclusive" : sessionStorage.getItem("inclusive5"),
                    "status" : sessionStorage.getItem("status5"),
                }
            }
    }
    const { data, setData, post, processing, errors } = useForm(personalInformation);

    useEffect(() => {
        console.log(personalInformation);
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        post('/api/applicants')
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div class="step-10">
            <div class="py-5 card border-0 rounded-0">
                <h4 class="card-header pl-0 border-0 text-center fw-bold">
                    CERTIFICATION/AUTHORIZATION
                </h4>
                <div class="card-body pl-0 pt-3">
                    <div class="row">
                        <h6 class="indent-16 !text-gray-500">
                        <Checkbox className="mr-3" onChange={e => setAuthorizationAccepted(e.checked)} checked={authorizationAccepted}></Checkbox>
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
                                Upload applicant signature
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
                      upload-applicant-signature
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                type="file"
                                id="formFile"
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
