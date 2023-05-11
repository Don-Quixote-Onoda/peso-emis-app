import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';
import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import {
    regions,
    provinces,
    cities,
    barangays,
} from "select-philippines-address";
import PersonalInformation from "./Pages/PersonalInformation";
import Authorization from "./Pages/Authorization";
import JobPreference from "./Pages/JobPreference";
import Language from "./Pages/Language";
import OtherSkills from "./Pages/OtherSkills";
import Vocational from "./Pages/Vocational";
import WorkExperience from "./Pages/WorkExperience";
import Education from "./Pages/Education";

export default function EditApplicant({ applicant, back }) {
    useEffect(() => {
        console.log(applicant);
    }, []);

    return (
        <>
            <div class="step-1">
                <div class="card rounded-0 border-0">
                    <div class=" bg-light mb-2 font-bold mt-10">
                        <div className="flex justify-between">
                        <h4 class="card-title fw-bold">
                            1. Personal information
                        </h4>
                        <Button
                    icon="pi pi-arrow-left"
                    className="mr-2"
                    label="Back"
                    onClick={() => back()}
                />
                        </div>
                    </div>
                <PersonalInformation />
                <JobPreference />
                <Language />
                <Education />
                <Vocational />
                <WorkExperience />
                <OtherSkills />
                <Authorization />
                </div>
            </div>
            
        </>
    );
}
