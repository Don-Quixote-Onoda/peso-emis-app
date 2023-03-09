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

import { Steps } from 'primereact/steps';
        
export default function InteractiveDemo() {
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null);
    const numberOfPage = 5;

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
        'Establishment Page',
        'ESTABLISHMENT CONTACT DETAILS',
        'VACANCY DETAILS',
        'QUALIFICATION REQUIREMENTS',
        'POSTING DETAILS'
    ];

    return (
        <>
            <Header />
            <Content>
                <div class="d-flex applicant-container">
                    <div class="basis-full applicant-content pr-1">
                       
                                <div class="border-b-2 pl-3 flex gap-2 py-3 pb-4 flex-wrap navigation-top">
                                    {
                                        navigatePage.map((nav, index) => (
                                            <NavigatorPage index={index} activeIndex={activeIndex} length={navigatePage.length}>{nav}</NavigatorPage>
                                        ))
                                    }
                                    </div>
                                <div class="px-3">
                                    <form action="">
                                        {activeIndex == 0 && <EstablishmentDetails />}
                                        {activeIndex == 1 && <EstablishmentContactDetails />}
                                        {activeIndex == 2 && <VacancyDetails />}
                                        {activeIndex == 3 && <QualificationRequirement />}
                                        {activeIndex == 4 && <PostingDetails />}
                                        <div class="action-buttons w-11/12 bottom-0 d-flex justify-content-between bg-white pt-2 pb-2">
                                            {activeIndex == 0 && <div class="button-1"></div>}
                                            {activeIndex > 0 && <button
                                                type="button"
                                                onClick={() => counterPrevious()}
                                                class="btn btn-md btn btn-md items-center d-flex gap-3 py-2 px-4 prev-button  !rounded-full !text-xs text-white font-bold !bg-indigo-400"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    class="w-4 h-4 fill-white"
                                                >
                                                    <path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z" />
                                                </svg>
                                                Back
                                            </button>}
                                            {activeIndex < (numberOfPage-1) && <button
                                                type="button"
                                                onClick={() => counterNext()}
                                                class="btn btn-md items-center d-flex gap-3 py-2 !bg-pink-400 px-4 !rounded-full next-button"
                                            >
                                                <span class="!text-xs font-bold text-white">
                                                    Next
                                                </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    class="w-4 h-4 fill-white"
                                                >
                                                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                                                </svg>
                                            </button>}
                                            {activeIndex > (numberOfPage-2) && <button
                                                type="submit"
                                                
                                                class="btn btn-md btn-primary !bg-blue-900 !border-blue-900 submit-button"
                                            >
                                                Submit
                                            </button>}
                                        </div>
                                    </form>
                                </div>
                            </div>
                </div>
            </Content>
            <Footer />
        </>
    );
}
