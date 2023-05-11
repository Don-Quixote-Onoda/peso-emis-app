import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";

export default function Language({language}) {


    const [othersLanguage, setOthersLangauge] = useSessionStorage(
        sessionStorage.getItem("othersLanguage"),
        "othersLanguage"
    );

    const [readEnglish, setReadEnglish] = useSessionStorage(
        sessionStorage.getItem("readEnglish"),
        "readEnglish"
    );
    const [writeEnglish, setWriteEnglish] = useSessionStorage(
        sessionStorage.getItem("writeEnglish"),
        "writeEnglish"
    );
    const [speakEnglish, setSpeakEnglish] = useSessionStorage(
        sessionStorage.getItem("speakEnglish"),
        "speakEnglish"
    );
    const [understandEnglish, setUnderstandEnglish] = useSessionStorage(
        sessionStorage.getItem("understandEnglish"),
        "understandEnglish"
    );

    const [readFilipino, setReadFilipino] = useSessionStorage(
        sessionStorage.getItem("readFilipino"),
        "readFilipino"
    );
    const [writeFilipino, setWriteFilipino] = useSessionStorage(
        sessionStorage.getItem("writeFilipino"),
        "writeFilipino"
    );
    const [speakFilipino, setSpeakFilipino] = useSessionStorage(
        sessionStorage.getItem("speakFilipino"),
        "speakFilipino"
    );
    const [understandFilipino, setUnderstandFilipino] = useSessionStorage(
        sessionStorage.getItem("understandFilipino"),
        "understandFilipino"
    );

    const [readOthers, setReadOthers] = useSessionStorage(
        sessionStorage.getItem("readOthers"),
        "readOthers"
    );
    const [writeOthers, setWriteOthers] = useSessionStorage(
        sessionStorage.getItem("writeOthers"),
        "writeOthers"
    );
    const [speakOthers, setSpeakOthers] = useSessionStorage(
        sessionStorage.getItem("speakOthers"),
        "speakOthers"
    );
    const [understandOthers, setUnderstandOthers] = useSessionStorage(
        sessionStorage.getItem("understandOthers"),
        "understandOthers"
    );

    return (
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
                                <div class="row responsive-text-md-none">
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
                                    class="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                    // disabled={item.language_spoken === 'english' || item.language_spoken === 'filipino'}
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3">
                                        <Checkbox
                                            onChange={(e) =>
                                                setReadEnglish(e.checked)
                                            }
                                            // checked={item.can_read == 1}
                                        ></Checkbox>
                                        <label className="pl-3 responsive-text-md-block">
                                            Read
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <Checkbox
                                            onChange={(e) =>
                                                setReadEnglish(e.checked)
                                            }
                                            // checked={item.can_write == 1}
                                        ></Checkbox>
                                        <label className="pl-3 responsive-text-md-block">
                                            Write
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <Checkbox
                                            onChange={(e) =>
                                                setReadEnglish(e.checked)
                                            }
                                            // checked={item.can_speak == 1}
                                        ></Checkbox>
                                        <label className="pl-3 responsive-text-md-block">
                                            Speak
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <Checkbox
                                            onChange={(e) =>
                                                setUnderstandEnglish(e.checked)
                                            }
                                            // checked={item.can_understand == 1}
                                        ></Checkbox>
                                        <label className="pl-3 responsive-text-md-block">
                                            Understand
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
    );
}
