import React, { useState, useRef } from "react";
import NavigatorButton from "../Components/NavigatorButton";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";

export default function Language({
    activeIndex,
    numberOfPage,
    setActiveIndex,
    counterPrevious,
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if(
            ((readEnglish !== null && readEnglish !== false) || (writeEnglish !== null && writeEnglish !== false) || (speakEnglish !== null && speakEnglish !== false) || (understandEnglish !== null && understandEnglish !== false)) ||
            ((readFilipino !== null && readFilipino !== false) || (writeFilipino !== null && writeFilipino !== false) || (speakFilipino !== null && speakFilipino !== false) || (understandFilipino !== null && understandFilipino !== false)) ||
            (((readOthers !== null && readOthers !== false) || (writeOthers !== null && writeOthers !== false) || (speakOthers !== null && speakOthers !== false) || (understandOthers !== null && understandOthers !== false)) && (othersLanguage !== null && othersLanguage !== ''))
        )
            setActiveIndex(activeIndex + 1);

    };

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

    const [isSubmitted, setSubmitted] = useState(false);

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
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
                                    value="English"
                                    class="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                                    disabled="disabled"
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3">
                                        <Checkbox
                                            onChange={(e) =>
                                                setReadEnglish(e.checked)
                                            }
                                            checked={readEnglish}
                                        ></Checkbox>
                                        <label className="pl-3 responsive-text-md-block">
                                            Read
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <Checkbox
                                            onChange={(e) =>
                                                setWriteEnglish(e.checked)
                                            }
                                            checked={writeEnglish}
                                        ></Checkbox>
                                        <label className="pl-3 responsive-text-md-block">
                                            Write
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <Checkbox
                                            onChange={(e) =>
                                                setSpeakEnglish(e.checked)
                                            }
                                            checked={speakEnglish}
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
                                            checked={understandEnglish}
                                        ></Checkbox>
                                        <label className="pl-3 responsive-text-md-block">
                                            Understand
                                        </label>
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
                                        <Checkbox
                                            onChange={(e) =>
                                                setReadFilipino(e.checked)
                                            }
                                            checked={readFilipino}
                                        ></Checkbox>
                                        <label className="pl-3 responsive-text-md-block">
                                            Read
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <Checkbox
                                            onChange={(e) =>
                                                setWriteFilipino(e.checked)
                                            }
                                            checked={writeFilipino}
                                        ></Checkbox>
                                        <label className="pl-3 responsive-text-md-block">
                                            Write
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <Checkbox
                                            onChange={(e) =>
                                                setSpeakFilipino(e.checked)
                                            }
                                            checked={speakFilipino}
                                        ></Checkbox>
                                        <label className="pl-3 responsive-text-md-block">
                                            Speak
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <Checkbox
                                            onChange={(e) =>
                                                setUnderstandFilipino(e.checked)
                                            }
                                            checked={understandFilipino}
                                        ></Checkbox>
                                        <label className="pl-3 responsive-text-md-block">
                                            Understand
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-4">
                                <InputText
                                    className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                    placeholder="Others"
                                    value={othersLanguage}
                                    onChange={(e) =>
                                        setOthersLangauge(e.target.value)
                                    }
                                />
                                <span class="text-danger !text-xs language_or_dialect_proficiency-error"></span>
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-3">
                                        <Checkbox
                                            onChange={(e) =>
                                                setReadOthers(e.checked)
                                            }
                                            checked={readOthers}
                                        ></Checkbox>
                                        <label className="pl-3 responsive-text-md-block">
                                            Read
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <Checkbox
                                            onChange={(e) =>
                                                setWriteOthers(e.checked)
                                            }
                                            checked={writeOthers}
                                        ></Checkbox>
                                        <label className="pl-3 responsive-text-md-block">
                                            Write
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <Checkbox
                                            onChange={(e) =>
                                                setSpeakOthers(e.checked)
                                            }
                                            checked={speakOthers}
                                        ></Checkbox>
                                        <label className="pl-3 responsive-text-md-block">
                                            Speak
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <Checkbox
                                            onChange={(e) =>
                                                setUnderstandOthers(e.checked)
                                            }
                                            checked={understandOthers}
                                        ></Checkbox>
                                        <label className="pl-3 responsive-text-md-block">
                                            Understand
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                                (isSubmitted && ((readEnglish === null || readEnglish === false) && (writeEnglish === null || writeEnglish === false) && (speakEnglish === null || speakEnglish === false) && (understandEnglish === null || understandEnglish === false)) && ((readFilipino === null || readFilipino === false) && (writeFilipino === null || writeFilipino === false) && (speakFilipino === null || speakFilipino === false) && (understandFilipino === null || understandFilipino === false)) && ((readOthers === null || readOthers === false) && (writeOthers === null || writeOthers === false) && (speakOthers === null || speakOthers === false) && (understandOthers === null || understandOthers === false) || (othersLanguage === null || othersLanguage === '')) ) &&
                                 <span class="text-danger !text-xs pi_firstname-error">Language or Dialect Proficiency is required!</span>
                            }
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
