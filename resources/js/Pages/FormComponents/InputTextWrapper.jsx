import React, { useState, useRef, useEffect } from "react";
import { InputText } from "primereact/inputtext";

export default function InputTextWrapper({stateValue, stateMethod, label, isRequired}) {

    const [required, setRequired] = useState(false);
    const [isRequire, setIsRequire] = useState(false);
    const handleInputValue = (e) => {
        stateMethod(e.target.value);

        if(e.target.value === '') 
            setRequired(true);
        else 
            setRequired(false);

    }

    useEffect(() => {
        (isRequired !== false) ? setIsRequire(true) : setIsRequire(false);
    }, []);
    return (
        <>
            <label
                for="inputEmail4"
                className="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
            >
                {label}<span className="text-red-500">*</span> 
            </label>
            <InputText
                className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name ${required && isRequire && 'p-invalid'}`}
                onChange={(e) => handleInputValue(e)}
                value={stateValue}
            />
            <span className="text-danger !text-xs establishment-name-error">{(required && isRequire) && label+" is required"}</span>
        </>
    );
}
