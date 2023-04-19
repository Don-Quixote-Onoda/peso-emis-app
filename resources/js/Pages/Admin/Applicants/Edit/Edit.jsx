import React, { useState, useEffect } from "react";
import PersonalInformation from './Pages/PersonalInformation';
import JobPreference from './Pages/JobPreference';
import Language from './Pages/Language';
import Education from './Pages/Education';
import Vocational from "./Pages/Vocational";
import WorkExperience from './Pages/WorkExperience';
import OtherSkills from "./Pages/OtherSkills";
import Authorization from "./Pages/Authorization";

export default function EditApplicant({ data, setData, back }) {
    useEffect(() => {
        console.log(data);
        
    }, []);


    return (
        <>
       <PersonalInformation back={back} values={data} />
       <JobPreference />
       <Language />
       <Education />
       <Vocational />
       <WorkExperience />
       <OtherSkills />
       <Authorization />
        </>
    );
}
