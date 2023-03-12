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

import { Steps } from "primereact/steps";

export default function InteractiveDemo() {
    const [activeIndex, setActiveIndex] = useState(3);
    const toast = useRef(null);
    const numberOfPage = 5;

    const counterNext = () => {
        if (activeIndex < 7) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const counterPrevious = () => {
        if (activeIndex >= 1) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const navigatePage = [
        "Establishment Page",
        "ESTABLISHMENT CONTACT DETAILS",
        "VACANCY DETAILS",
        "QUALIFICATION REQUIREMENTS",
        "POSTING DETAILS",
    ];

    return (
        <>
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
                                <EstablishmentDetails
                                    activeIndex={activeIndex}
                                    numberOfPage={numberOfPage}
                                    counterNext={counterNext}
                                    counterPrevious={counterPrevious}
                                    setActiveIndex={setActiveIndex}
                                />
                            )}
                            {activeIndex == 1 && (
                                <EstablishmentContactDetails
                                    activeIndex={activeIndex}
                                    numberOfPage={numberOfPage}
                                    counterNext={counterNext}
                                    counterPrevious={counterPrevious}
                                    setActiveIndex={setActiveIndex}
                                />
                            )}
                            {activeIndex == 2 && (
                                <VacancyDetails
                                    activeIndex={activeIndex}
                                    numberOfPage={numberOfPage}
                                    counterNext={counterNext}
                                    counterPrevious={counterPrevious}
                                    setActiveIndex={setActiveIndex}
                                />
                            )}
                            {activeIndex == 3 && (
                                <QualificationRequirement
                                    activeIndex={activeIndex}
                                    numberOfPage={numberOfPage}
                                    counterNext={counterNext}
                                    counterPrevious={counterPrevious}
                                    setActiveIndex={setActiveIndex}
                                />
                            )}
                            {activeIndex == 4 && (
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
