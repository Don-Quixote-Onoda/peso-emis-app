import React, { useState, useRef } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import PersonalInformation from "./Pages/PersonalInformation";
import Authorization from "./Pages/Authorization";
import Education from "./Pages/Education";
import JobPreference from "./Pages/JobPreference";
import Language from "./Pages/Language";
import OtherSkills from "./Pages/OtherSkills";
import Vocational from "./Pages/Vocational";
import WorkExperience from "./Pages/WorkExperience";
import NavigatorPage from "../Applicants/Components/NavigatorPage";
import { Head } from "@inertiajs/react";

import { Steps } from "primereact/steps";

export default function InteractiveDemo() {
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null);
    const numberOfPage = 8;

    const counterNext = () => {
        if (activeIndex < 7) {
            setActiveIndex(activeIndex + 1);
        }

        console.log(activeIndex);
    };

    const counterPrevious = () => {
        if (activeIndex >= 1) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const navigatePage = [
        "personal info",
        "Job Preference",
        "LANGUAGE",
        "education",
        "VOCATIONAL",
        "work EXPERIENCE",
        "OTHER SKILLS",
        "AUTHORIZATION",
    ];

    return (
        <>
           <Head title="EMIS - Applicant Forms" />
           <Header />
            <Content>
                <div class="d-flex applicant-container">
                    <div class="basis-full applicant-content pr-1">
                        <div class="border-b-2 pl-3 flex gap-2 py-3 pb-4 flex-wrap navigation-top">
                            {navigatePage.map((nav, index) => (
                                <NavigatorPage
                                    index={index}
                                    activeIndex={activeIndex}
                                    length={navigatePage.length}
                                >
                                    {nav}
                                </NavigatorPage>
                            ))}
                        </div>
                        <div class="px-3">
                                {activeIndex == 0 && (
                                    <PersonalInformation
                                        activeIndex={activeIndex}
                                        numberOfPage={numberOfPage}
                                        counterNext={counterNext}
                                        counterPrevious={counterPrevious}
                                        setActiveIndex={setActiveIndex}
                                    />
                                )}
                                {activeIndex == 1 && (
                                    <JobPreference
                                        activeIndex={activeIndex}
                                        numberOfPage={numberOfPage}
                                        counterNext={counterNext}
                                        counterPrevious={counterPrevious}
                                        setActiveIndex={setActiveIndex}
                                    />
                                )}
                                {activeIndex == 2 && (
                                    <Language
                                        activeIndex={activeIndex}
                                        numberOfPage={numberOfPage}
                                        counterNext={counterNext}
                                        counterPrevious={counterPrevious}
                                        setActiveIndex={setActiveIndex}
                                    />
                                )}

                                {activeIndex == 3 && (
                                    <Education
                                        activeIndex={activeIndex}
                                        numberOfPage={numberOfPage}
                                        counterNext={counterNext}
                                        counterPrevious={counterPrevious}
                                        setActiveIndex={setActiveIndex}
                                    />
                                )}
                                {activeIndex == 4 && (
                                    <Vocational
                                        activeIndex={activeIndex}
                                        numberOfPage={numberOfPage}
                                        counterNext={counterNext}
                                        counterPrevious={counterPrevious}
                                        setActiveIndex={setActiveIndex}
                                    />
                                )}
                                {activeIndex == 5 && (
                                    <WorkExperience
                                        activeIndex={activeIndex}
                                        numberOfPage={numberOfPage}
                                        counterNext={counterNext}
                                        counterPrevious={counterPrevious}
                                        setActiveIndex={setActiveIndex}
                                    />
                                )}
                                {activeIndex == 6 && (
                                    <OtherSkills
                                        activeIndex={activeIndex}
                                        numberOfPage={numberOfPage}
                                        counterNext={counterNext}
                                        counterPrevious={counterPrevious}
                                        setActiveIndex={setActiveIndex}
                                    />
                                )}
                                {activeIndex == 7 && (
                                    <Authorization
                                        activeIndex={activeIndex}
                                        numberOfPage={numberOfPage}
                                        counterNext={counterNext}
                                        counterPrevious={counterPrevious}
                                        setActiveIndex={setActiveIndex}
                                    />
                                )}
                        </div>
                    </div>
                </div>
            </Content>
            <Footer />
        </>
    );
}
