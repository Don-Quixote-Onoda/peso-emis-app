import React, { useState, useRef } from "react";
import NavigatorButton from "../Components/NavigatorButton";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from "primereact/checkbox";

export default function Language({
    activeIndex,
    numberOfPage,
    setActiveIndex,
    counterPrevious,
}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveIndex(activeIndex + 1);
    }

    const [othersLanguage, setOthersLangauge] = useState("");

    const [readEnglish, setReadEnglish] = useState(false);
    const [writeEnglish, setWriteEnglish] = useState(false);
    const [speakEnglish, setSpeakEnglish] = useState(false);
    const [understandEnglish, setUnderstandEnglish] = useState(false);

    const [readFilipino, setReadFilipino] = useState(false);
    const [writeFilipino, setWriteFilipino] = useState(false);
    const [speakFilipino, setSpeakFilipino] = useState(false);
    const [understandFilipino, setUnderstandFilipino] = useState(false);

    const [readOthers, setReadOthers] = useState(false);
    const [writeOthers, setWriteOthers] = useState(false);
    const [speakOthers, setSpeakOthers] = useState(false);
    const [understandOthers, setUnderstandOthers] = useState(false);

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div class="step-4">
            <div class="py-5 card border-0 rounded-0">
                <h4 class="card-header pl-0 border-0 fw-bold">
                    3. LANGUAGE / DIALECT PROFICIENCY{" "}
                </h4>
                <div class="card-body pl-0 pt-3">
                    <div class="row">
                        <div class="col-md-4">
                            <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                Check if applicable
                            </h6>
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-3">
                                    <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                        Read
                                    </h6>
                                </div>
                                <div class="col-md-3">
                                    <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                        Write
                                    </h6>
                                </div>
                                <div class="col-md-3">
                                    <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                        Speak
                                    </h6>
                                </div>
                                <div class="col-md-3">
                                    <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                        Understand
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-4">
                            <input
                                type="input"
                                value="English"
                                class="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                disabled="disabled"
                            />
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-3">
                                <Checkbox onChange={e => setReadEnglish(e.checked)} checked={readEnglish}></Checkbox>
                                </div>
                                <div class="col-md-3">
                                <Checkbox onChange={e => setWriteEnglish(e.checked)} checked={writeEnglish}></Checkbox>
                                </div>
                                <div class="col-md-3">
                                <Checkbox onChange={e => setSpeakEnglish(e.checked)} checked={speakEnglish}></Checkbox>
                                </div>
                                <div class="col-md-3">
                                <Checkbox onChange={e => setUnderstandEnglish(e.checked)} checked={understandEnglish}></Checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-4">
                            <input
                                type="input"
                                value="Filipino"
                                class="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                disabled="disabled"
                            />
                        </div>
                        <div class="col-md-8">
                        <div class="row">
                                <div class="col-md-3">
                                <Checkbox onChange={e => setReadFilipino(e.checked)} checked={readFilipino}></Checkbox>
                                </div>
                                <div class="col-md-3">
                                <Checkbox onChange={e => setWriteFilipino(e.checked)} checked={writeFilipino}></Checkbox>
                                </div>
                                <div class="col-md-3">
                                <Checkbox onChange={e => setSpeakFilipino(e.checked)} checked={speakFilipino}></Checkbox>
                                </div>
                                <div class="col-md-3">
                                <Checkbox onChange={e => setUnderstandFilipino(e.checked)} checked={understandFilipino}></Checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-4">
                        <InputText className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname" placeholder="Others" value={othersLanguage} onChange={(e) => setOthersLangauge(e.target.value)} />
                            <span class="text-danger !text-xs language_or_dialect_proficiency-error"></span>
                        </div>
                        <div class="col-md-8">
                        <div class="row">
                                <div class="col-md-3">
                                <Checkbox onChange={e => setReadOthers(e.checked)} checked={readOthers}></Checkbox>
                                </div>
                                <div class="col-md-3">
                                <Checkbox onChange={e => setWriteOthers(e.checked)} checked={writeOthers}></Checkbox>
                                </div>
                                <div class="col-md-3">
                                <Checkbox onChange={e => setSpeakOthers(e.checked)} checked={speakOthers}></Checkbox>
                                </div>
                                <div class="col-md-3">
                                <Checkbox onChange={e => setUnderstandOthers(e.checked)} checked={understandOthers}></Checkbox>
                                </div>
                            </div>
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
