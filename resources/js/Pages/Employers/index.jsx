import React, { useState, useRef } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import NavigatorPage from "../Employers/Components/NavigatorPage";
import EstablishmentDetails from "./Pages/EstablishmentDetails";
import PostingDetails from "./Pages/PostingDetails";
import QualificationRequirement from "./Pages/QualificationRequirements";
import VacancyDetails from "./Pages/VacancyDetails";
import EstablishmentContactDetails from "./Pages/EstablishmentContactDetails";
import RegisterEmployer from "./Pages/RegisterEmployer";
import { Head } from "@inertiajs/react";

import { Steps } from "primereact/steps";

export default function InteractiveDemo() {
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null);
    const numberOfPage = 4;

    const counterNext = () => {
        if (activeIndex < 4) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const counterPrevious = () => {
        if (activeIndex >= 1) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const navigatePage = [
        "REGISTRATION",
        "ESTABLISHMENT DETAILS",
        "ESTABLISHMENT CONTACT DETAILS",
        "AUTHORIZATION",
    ];

    return (
        <>
            <Head title="EMIS - Employer Forms" />
            <Header />
            <Content>
                <div class="d-flex applicant-container max-w-screen-lg mx-auto">
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
                        {activeIndex == 0 && (
                                <RegisterEmployer
                                    activeIndex={activeIndex}
                                    numberOfPage={numberOfPage}
                                    counterNext={counterNext}
                                    counterPrevious={counterPrevious}
                                    setActiveIndex={setActiveIndex}
                                />
                            )}
                            {activeIndex == 1 && (
                                <EstablishmentDetails
                                    activeIndex={activeIndex}
                                    numberOfPage={numberOfPage}
                                    counterNext={counterNext}
                                    counterPrevious={counterPrevious}
                                    setActiveIndex={setActiveIndex}
                                />
                            )}
                            {activeIndex == 2 && (
                                <EstablishmentContactDetails
                                    activeIndex={activeIndex}
                                    numberOfPage={numberOfPage}
                                    counterNext={counterNext}
                                    counterPrevious={counterPrevious}
                                    setActiveIndex={setActiveIndex}
                                />
                            )}
                            {/* {activeIndex == 3 && (
                                <VacancyDetails
                                    activeIndex={activeIndex}
                                    numberOfPage={numberOfPage}
                                    counterNext={counterNext}
                                    counterPrevious={counterPrevious}
                                    setActiveIndex={setActiveIndex}
                                />
                            )}
                            {activeIndex == 4 && (
                                <QualificationRequirement
                                    activeIndex={activeIndex}
                                    numberOfPage={numberOfPage}
                                    counterNext={counterNext}
                                    counterPrevious={counterPrevious}
                                    setActiveIndex={setActiveIndex}
                                />
                            )} */}
                            {activeIndex == 3 && (
                                <PostingDetails
                                    activeIndex={activeIndex}
                                    numberOfPage={numberOfPage}
                                    counterNext={counterNext}
                                    counterPrevious={counterPrevious}
                                    setActiveIndex={setActiveIndex}
                                />
                            )}
                    </div>
                </div>
            </Content>
            <Footer />
        </>
    );
}
