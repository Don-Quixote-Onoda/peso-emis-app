import React, { useState, useRef, useEffect } from "react";
import NavigatorButton from "../Components/NavigatorButton";

import { InputText } from "primereact/inputtext";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";

import { Calendar } from "primereact/calendar";

import { RadioButton } from "primereact/radiobutton";

import { Dropdown } from "primereact/dropdown";
import InputTextWrapper from "../../FormComponents/InputTextWrapper";

import {
    regions,
    provinces,
    cities,
    barangays,
} from "select-philippines-address";

export default function PersonalInformation({
    activeIndex,
    numberOfPage,
    setActiveIndex,
    counterPrevious,
}) {
    const [surname, setSurname] = useSessionStorage(
        sessionStorage.getItem("surname"),
        "surname"
    );

    const [firstname, setFirstname] = useSessionStorage(
        sessionStorage.getItem("firstname"),
        "firstname"
    );

    const [middlename, setMiddlename] = useSessionStorage(
        sessionStorage.getItem("middlename"),
        "middlename"
    );

    const [suffix, setSuffix] = useSessionStorage(
        sessionStorage.getItem("suffix"),
        "suffix"
    );

    const [birthdate, setBithdate] = useSessionStorage(
        sessionStorage.getItem("birthdate"),
        "birthdate"
    );

    const [religion, setReligion] = useSessionStorage(
        sessionStorage.getItem("religion"),
        "religion"
    );

    const [height, setHeight] = useSessionStorage(
        sessionStorage.getItem("height"),
        "height"
    );

    const [birthOfPlaceHouseOrStreet, setBirthOfPlaceHouseOrStreet] =
        useSessionStorage(
            sessionStorage.getItem("birthOfPlaceHouseOrStreet"),
            "birthOfPlaceHouseOrStreet"
        );

    const [presentAddressHouseOrStreet, setpresentAddressHouseOrStreet] =
        useSessionStorage(
            sessionStorage.getItem("presentAddressHouseOrStreet"),
            "presentAddressHouseOrStreet"
        );

    const [emailAddress, setEmailAddress] = useSessionStorage(
        sessionStorage.getItem("emailAddress"),
        "emailAddress"
    );

    const [phoneNumber, setPhoneNumber] = useSessionStorage(
        sessionStorage.getItem("phoneNumber"),
        "phoneNumber"
    );

    const [landlineNumber, setLandlineNumber] = useSessionStorage(
        sessionStorage.getItem("landlineNumber"),
        "landlineNumber"
    );

    const [GSISNumber, setGSISNumber] = useSessionStorage(
        sessionStorage.getItem("GSISNumber"),
        "GSISNumber"
    );

    const [pagIbigNumber, setPagIbigNumber] = useSessionStorage(
        sessionStorage.getItem("pagIbigNumber"),
        "pagIbigNumber"
    );

    const [TINNumber, setTINNumber] = useSessionStorage(
        sessionStorage.getItem("TINNumber"),
        "TINNumber"
    );

    const [philhealthNumber, setPhilhealthNumber] = useSessionStorage(
        sessionStorage.getItem("philhealthNumber"),
        "philhealthNumber"
    );

    const [sex, setSex] = useSessionStorage(
        sessionStorage.getItem("sex"),
        "sex"
    );

    const [civilStatus, setCivilStatus] = useSessionStorage(
        sessionStorage.getItem("civilStatus"),
        "civilStatus"
    );

    const [disability, setDisability] = useSessionStorage(
        sessionStorage.getItem("disability"),
        "disability"
    );

    const [activelyLookingForWork, setActivelyLookingForWork] =
        useSessionStorage(
            sessionStorage.getItem("activelyLookingForWork"),
            "activelyLookingForWork"
        );

    const [howLongLookingForWork, setHowLongLookingForWork] = useSessionStorage(
        sessionStorage.getItem("howLongLookingForWork"),
        "howLongLookingForWork"
    );

    const [noWhenToWork, setNoWhenToWOrk] = useSessionStorage(
        sessionStorage.getItem("noWhenToWork"),
        "noWhenToWork"
    );

    const [employedStatus, setEmployedStatus] = useSessionStorage(
        sessionStorage.getItem("employedStatus"),
        "employedStatus"
    );

    const [unEmployedStatus, setUnEmployedStatus] = useSessionStorage(
        sessionStorage.getItem("unEmployedStatus"),
        "unEmployedStatus"
    );

    const [willingToWorkImmediately, setWillingToWorkImmediately] =
        useSessionStorage(
            sessionStorage.getItem("willingToWorkImmediately"),
            "willingToWorkImmediately"
        );

    const [householdNumber, setHouseholdNumber] = useSessionStorage(
        sessionStorage.getItem("householdNumber"),
        "householdNumber"
    );

    const [is4psBeneficiary, setIs4psBeneficiary] = useSessionStorage(
        sessionStorage.getItem("is4psBeneficiary"),
        "is4psBeneficiary"
    );

    const [employementStatus, setEmployementStatus] = useSessionStorage(
        sessionStorage.getItem("employementStatus"),
        "employementStatus"
    );

    const [pob_regionAddr, pob_setRegionAddr] = useSessionStorage(
        sessionStorage.getItem("pob_regionAddr"),
        "pob_regionAddr"
    );
    const [pob_provinceAddr, pob_setProvinceAddr] = useSessionStorage(
        sessionStorage.getItem("pob_provinceAddr"),
        "pob_provinceAddr"
    );
    const [pob_cityAddr, pob_setCityAddr] = useSessionStorage(
        "pob_cityAddr",
        "pob_cityAddr"
    );
    const [pob_barangayAddr, pob_setBarangayAddr] = useSessionStorage(
        sessionStorage.getItem("pob_barangayAddr"),
        "pob_barangayAddr"
    );
    const [pob_houseNumber_Street_Village, pob_setHouseNumber_Street_Village] =
        useSessionStorage(
            sessionStorage.getItem("pob_houseNumber_Street_Village"),
            "pob_houseNumber_Street_Village"
        );

    const [pob_regionData, pob_setRegion] = useState([]);
    const [pob_provinceData, pob_setProvince] = useSessionStorage(
        sessionStorage.getItem("provinceData"),
        "provinceData"
    );
    const [pob_cityData, pob_setCity] = useSessionStorage(
        sessionStorage.getItem("cityData"),
        "cityData"
    );
    const [pob_barangayData, pob_setBarangay] = useSessionStorage(
        sessionStorage.getItem("barangayData"),
        "barangayData"
    );
    const [pob_regionCode, pob_setRegionCode] = useSessionStorage(
        sessionStorage.getItem("regionCode"),
        "regionCode"
    );

    const pob_region = () => {
        regions().then((response) => {
            pob_setRegion(response);
        });
    };

    const pob_province = (e) => {
        pob_setRegionAddr(e.target.selectedOptions[0].text);
        provinces(e.target.value).then((response) => {
            pob_setProvince(response);
            pob_setCity([]);
            pob_setBarangay([]);
            pob_setRegionCode(e.target.value);
        });
    };

    const pob_city = (e) => {
        pob_setProvinceAddr(e.target.selectedOptions[0].text);
        cities(e.target.value).then((response) => {
            pob_setCity(response);
        });
    };

    const pob_barangay = (e) => {
        pob_setCityAddr(e.target.selectedOptions[0].text);
        barangays(e.target.value).then((response) => {
            pob_setBarangay(response);
        });
    };

    const pob_brgy = (e) => {
        pob_setBarangayAddr(e.target.selectedOptions[0].text);
    };

    const [isValidated, setValidated] = useState(true);

    useEffect(() => {
        pob_region();
    }, []);

    const [pa_regionAddr, pa_setRegionAddr] = useSessionStorage(
        sessionStorage.getItem("pa_regionAddr"),
        "pa_regionAddr"
    );
    const [pa_provinceAddr, pa_setProvinceAddr] = useSessionStorage(
        sessionStorage.getItem("pa_provinceAddr"),
        "pa_provinceAddr"
    );
    const [pa_cityAddr, pa_setCityAddr] = useSessionStorage(
        "pa_cityAddr",
        "pa_cityAddr"
    );
    const [pa_barangayAddr, pa_setBarangayAddr] = useSessionStorage(
        sessionStorage.getItem("pa_barangayAddr"),
        "pa_barangayAddr"
    );
    const [pa_houseNumber_Street_Village, pa_setHouseNumber_Street_Village] =
        useSessionStorage(
            sessionStorage.getItem("pa_houseNumber_Street_Village"),
            "pa_houseNumber_Street_Village"
        );

    const [pa_regionData, pa_setRegion] = useState([]);
    const [pa_provinceData, pa_setProvince] = useSessionStorage(
        sessionStorage.getItem("provinceData"),
        "provinceData"
    );
    const [pa_cityData, pa_setCity] = useSessionStorage(
        sessionStorage.getItem("cityData"),
        "cityData"
    );
    const [pa_barangayData, pa_setBarangay] = useSessionStorage(
        sessionStorage.getItem("barangayData"),
        "barangayData"
    );
    const [pa_regionCode, pa_setRegionCode] = useSessionStorage(
        sessionStorage.getItem("regionCode"),
        "regionCode"
    );

    const [employedStatusType, setEmployedStatusType] = useSessionStorage(
        sessionStorage.getItem("employedStatusType"),
        "employedStatusType"
    );

    const [unEmployedStatusType, setUnEmployedStatusType] = useState("");


    const [unEmployedStatusTypes, setUnEmployedStatusTypes] = useSessionStorage(
        sessionStorage.getItem("unEmployedStatusTypes"),
        "unEmployedStatusTypes"
    );

    const pa_region = () => {
        regions().then((response) => {
            pa_setRegion(response);
        });
    };

    const pa_province = (e) => {
        pa_setRegionAddr(e.target.selectedOptions[0].text);
        provinces(e.target.value).then((response) => {
            pa_setProvince(response);
            pa_setCity([]);
            pa_setBarangay([]);
            pa_setRegionCode(e.target.value);
        });
    };

    const pa_city = (e) => {
        pa_setProvinceAddr(e.target.selectedOptions[0].text);
        cities(e.target.value).then((response) => {
            pa_setCity(response);
        });
    };

    const pa_barangay = (e) => {
        pa_setCityAddr(e.target.selectedOptions[0].text);
        barangays(e.target.value).then((response) => {
            pa_setBarangay(response);
        });
    };

    const pa_brgy = (e) => {
        pa_setBarangayAddr(e.target.selectedOptions[0].text);
    };

    useEffect(() => {
        pa_region();
    }, []);

    const civilStatuses = [
        { name: "Single" },
        { name: "Married" },
        { name: "Widowed" },
        { name: "Seperated" },
        { name: "Live-in" },
    ];

    const disabilities = [
        { name: "Visual" },
        { name: "Hearing" },
        { name: "Speech" },
        { name: "Physical" },
        { name: "Others" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveIndex(activeIndex + 1);
    };

    const [teminated_Laidoff_abroad, setTeminated_Laidoff_abroad] =
        useState(false);

        const [teminated_Laidoff_abroadValue, setTeminated_Laidoff_abroadValue] =
        useState("");
    const [employedStatusOthers, setUmployedStatusOthers] = useState(false);

    const [employedStatusOthersValue, setUmployedStatusOthersValue] = useState("");

    const [employedStatusTypeWageEmployed, setEmployedStatusTypeWageEmployed] = useSessionStorage(
        sessionStorage.getItem("employedStatusTypeWageEmployed"),
        "employedStatusTypeWageEmployed"
    );

    const handleEmployedStatusTypeWageEmployed = (value) => {
        
        if(employedStatusTypeWageEmployed !== '') {
            setEmployedStatusTypeWageEmployed('');
        }
        else {
            setEmployedStatusTypeWageEmployed(value);
        }
    }

    const [employedStatusTypeSelfEmployed, setEmployedStatusTypeSelfEmployed] = useSessionStorage(
        sessionStorage.getItem("employedStatusTypeSelfEmployed"),
        "employedStatusTypeSelfEmployed"
    );
    

    const handleEmployedStatusTypeSelfEmployed = (value) => {
        
        if(employedStatusTypeSelfEmployed !== '') {
            setEmployedStatusTypeSelfEmployed('');
        }
        else {
            setEmployedStatusTypeSelfEmployed(value);
        }

        console.log(employedStatusTypeSelfEmployed);
    }

    const [unEmployedStatusNewEntrant, setUnEmployedStatusNewEntrant] = useSessionStorage(
        sessionStorage.getItem("unEmployedStatusNewEntrant"),
        "unEmployedStatusNewEntrant"
    );

    const handleUnEmployedStatusNewEntrant = (value) => {
        
        if(unEmployedStatusNewEntrant !== '') {
            setUnEmployedStatusNewEntrant('');
        }
        else {
            setUnEmployedStatusNewEntrant(value);
        }

        console.log(unEmployedStatusNewEntrant);
    }

    const [unEmployedStatusFinishedContract, setUnEmployedStatusFinishedContract] = useSessionStorage(
        sessionStorage.getItem("unEmployedStatusFinishedContract"),
        "unEmployedStatusFinishedContract"
    );

    const handleUnEmployedStatusFinishedContract = (value) => {
        
        if(unEmployedStatusFinishedContract !== '') {
            setUnEmployedStatusFinishedContract('');
        }
        else {
            setUnEmployedStatusFinishedContract(value);
        }

        console.log(unEmployedStatusFinishedContract);
    }

    const [unEmployedStatusResigned, setUnEmployedStatusResigned] = useSessionStorage(
        sessionStorage.getItem("unEmployedStatusResigned"),
        "unEmployedStatusResigned"
    );

    const handleUnEmployedStatusResigned = (value) => {
        
        if(unEmployedStatusResigned !== '') {
            setUnEmployedStatusResigned('');
        }
        else {
            setUnEmployedStatusResigned(value);
        }

        console.log(unEmployedStatusResigned);
    }

    const [unEmployedStatusRetired, setUnEmployedStatusRetired] = useSessionStorage(
        sessionStorage.getItem("unEmployedStatusRetired"),
        "unEmployedStatusRetired"
    );

    const handleUnEmployedStatusRetired = (value) => {
        
        if(unEmployedStatusRetired !== '') {
            setUnEmployedStatusRetired('');
        }
        else {
            setUnEmployedStatusRetired(value);
        }

        console.log(unEmployedStatusRetired);
    }

    const [unEmployedStatusTerminatedLocal, setUnEmployedStatusTerminatedLocal] = useSessionStorage(
        sessionStorage.getItem("unEmployedStatusTerminatedLocal"),
        "unEmployedStatusTerminatedLocal"
    );

    const handleUnEmployedStatusTerminatedLocal = (value) => {
        
        if(unEmployedStatusTerminatedLocal !== '') {
            setUnEmployedStatusTerminatedLocal('');
        }
        else {
            setUnEmployedStatusTerminatedLocal(value);
        }

        console.log(unEmployedStatusTerminatedLocal);
    }

    const [unEmployedStatusTerminatedAbroad, setUnEmployedStatusTerminatedAbroad] = useSessionStorage(
        sessionStorage.getItem("unEmployedStatusTerminatedAbroad"),
        "unEmployedStatusTerminatedAbroad"
    );

    const handleUnEmployedStatusTerminatedAbroad = (value, e) => {
        
        if (e.target.checked) {
            setTeminated_Laidoff_abroad(true);
        }
        else {
            setTeminated_Laidoff_abroad(false);
        }

        if(unEmployedStatusTerminatedAbroad !== '') {
            setUnEmployedStatusTerminatedAbroad('');
        }
        else {
            setUnEmployedStatusTerminatedAbroad(value);
        }

        

        console.log(unEmployedStatusTerminatedAbroad);
    }

    const [unEmployedStatusTerminatedAbroadValue, setUnEmployedStatusTerminatedAbroadValue] = useSessionStorage(
        sessionStorage.getItem("unEmployedStatusTerminatedAbroadValue"),
        "unEmployedStatusTerminatedAbroadValue"
    );

    const handleUnEmployedStatusTerminatedAbroadValue = (value) => {
        

        if(unEmployedStatusTerminatedAbroadValue !== '') {
            setUnEmployedStatusTerminatedAbroadValue('');
        }
        else {
            setUnEmployedStatusTerminatedAbroadValue(value);
        }

        console.log(unEmployedStatusTerminatedAbroadValue);
    }

    const [unEmployedStatusOthers, setUnEmployedStatusOthers] = useSessionStorage(
        sessionStorage.getItem("unEmployedStatusOthers"),
        "unEmployedStatusOthers"
    );

    const handleUnEmployedStatusTerminatedOthers = (value, e) => {
        if (e.target.checked) {
            setUmployedStatusOthers(true);
        }
        else {
            setUmployedStatusOthers(false);
        }
        if(unEmployedStatusOthers !== '') {
            setUnEmployedStatusOthers('');
        }
        else {
            setUnEmployedStatusOthers(value);
        }

        console.log(unEmployedStatusOthers);
    }

    const [unEmployedStatusOthersValue, setUnEmployedStatusOthersValue] = useSessionStorage(
        sessionStorage.getItem("unEmployedStatusOthersValue"),
        "unEmployedStatusOthersValue"
    );

    const handleUnEmployedStatusTerminatedOthersValue = (value) => {
        
        if(unEmployedStatusTerminatedOthersValue !== '') {
            setUnEmployedStatusTerminatedOthersValue('');
        }
        else {
            setUnEmployedStatusTerminatedOthersValue(value);
        }

        console.log(unEmployedStatusTerminatedOthersValue);
    }

    const handleApplicantStatusType = (value, e) => {

        if(e.target.checked && !unEmployedStatusType.includes(value)) {
            if (value === "Others, specify") {
                setUmployedStatusOthers(true);
            }else if (value === "Teminated/Laidoff(abroad)") {
                setTeminated_Laidoff_abroad(true);
            }
            else {
                setUnEmployedStatusType(unEmployedStatusType + " " + value);
            }
        }else {
            if (value === "Others, specify") {
                setUmployedStatusOthers(false);
            }else if (value === "Teminated/Laidoff(abroad)") {
                setTeminated_Laidoff_abroad(false);
            }else {
                setUnEmployedStatusType(unEmployedStatusType.replace(value,''));
            }
        }

        console.log(unEmployedStatusType);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div class="step-1">
                <div class="card rounded-0 border-0">
                    <div class=" bg-light mb-2 font-bold mt-10">
                        <h4 class="card-title fw-bold">
                            1. Personal information
                        </h4>
                    </div>
                    <div class="card-body pb-0 row">
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Surname
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                            <span class="text-danger !text-xs pi_surname-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis"
                            >
                                First Name
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />

                            <span class="text-danger !text-xs pi_firstname-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Middle Name
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={middlename}
                                onChange={(e) => setMiddlename(e.target.value)}
                            />
                            <span class="text-danger !text-xs pi_middlename-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Suffix
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={suffix}
                                onChange={(e) => setSuffix(e.target.value)}
                            />
                            <span class="text-danger !text-xs pi_suffix-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Date of Birth
                            </label>
                            <Calendar
                                className="form-control h-10 p-0 border-0"
                                value={birthdate}
                                onChange={(e) => setBithdate(e.value)}
                                dateFormat="dd/mm/yy"
                            />
                            <span class="text-danger !text-xs pi_date_of_birth-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Religion
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={religion}
                                onChange={(e) => setReligion(e.target.value)}
                            />
                            <span class="text-danger !text-xs pi_religion-error"></span>
                        </div>
                        <div class="col-md-4 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Sex
                            </label>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-check pl-0 flex items-center gap-2">
                                        <RadioButton
                                            inputId="ingredient1"
                                            name="sex"
                                            value="Male"
                                            onChange={(e) => setSex(e.value)}
                                            checked={sex === "Male"}
                                        />
                                        <label
                                            class="form-check-label !text-xs !text-gray-500"
                                            for="exampleRadios1"
                                        >
                                            Male
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-check flex  pl-0 items-center gap-2">
                                        <RadioButton
                                            inputId="ingredient1"
                                            name="sex"
                                            value="Female"
                                            onChange={(e) => setSex(e.value)}
                                            checked={sex === "Female"}
                                        />

                                        <label
                                            class="form-check-label !text-xs !text-gray-500"
                                            for="exampleRadios2"
                                        >
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <span class="text-danger !text-xs pi_sex-error"></span>
                        </div>
                        <div class="col-md-4 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Civil Status
                            </label>

                            <Dropdown
                                value={civilStatus}
                                onChange={(e) => setCivilStatus(e.value)}
                                options={civilStatuses}
                                optionLabel="name"
                                editable
                                placeholder="Select a Civil Status"
                                className="form-select h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"
                            />
                            <span class="text-danger !text-xs pi_civil_status-error h-10"></span>
                        </div>
                        <div class="col-md-4 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Height
                            </label>
                            <div class="input-group mb-3">
                                <InputText
                                    className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                />
                                <span class="input-group-text !text-gray-500 !text-xs border-light-emphasis">
                                    cm
                                </span>
                            </div>
                            <span class="text-danger !text-xs pi_height-error"></span>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="row">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Are you actively looking for work?
                                </label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check pl-0 flex items-center gap-2">
                                            <RadioButton
                                                inputId="ingredient1"
                                                name="activilyLookingForWork"
                                                value="Yes"
                                                onChange={(e) =>
                                                    setActivelyLookingForWork(
                                                        e.value
                                                    )
                                                }
                                                checked={
                                                    activelyLookingForWork ===
                                                    "Yes"
                                                }
                                            />
                                            <label
                                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                for="exampleRadios1"
                                            >
                                                Yes
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check pl-0  flex items-center gap-2">
                                            <RadioButton
                                                inputId="ingredient1"
                                                name="activilyLookingForWork"
                                                value="No"
                                                onChange={(e) =>
                                                    setActivelyLookingForWork(
                                                        e.value
                                                    )
                                                }
                                                checked={
                                                    activelyLookingForWork ===
                                                    "No"
                                                }
                                            />
                                            <label
                                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                for="exampleRadios2"
                                            >
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <span class="text-danger !text-xs pi_looking_for_work-error"></span>
                                {activelyLookingForWork == "Yes" && (
                                    <div class="col-md-12 mb-4 is_actively_looking_for_work">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            How long have you been looking for
                                            work?
                                        </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={howLongLookingForWork}
                                            onChange={(e) =>
                                                setHowLongLookingForWork(
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <span class="text-danger !text-xs pi_is_actively_looking_for_work-error"></span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Willing to work immediately?{" "}
                            </label>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-check pl-0 flex items-center gap-2">
                                        <RadioButton
                                            inputId="ingredient1"
                                            name="willingToWorkImmediately"
                                            value="Yes"
                                            onChange={(e) =>
                                                setWillingToWorkImmediately(
                                                    e.value
                                                )
                                            }
                                            checked={
                                                willingToWorkImmediately ===
                                                "Yes"
                                            }
                                        />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                            for="exampleRadios1"
                                        >
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-check flex pl-0  items-center gap-2">
                                        <RadioButton
                                            inputId="ingredient1"
                                            name="willingToWorkImmediately"
                                            value="No"
                                            onChange={(e) =>
                                                setWillingToWorkImmediately(
                                                    e.value
                                                )
                                            }
                                            checked={
                                                willingToWorkImmediately ===
                                                "No"
                                            }
                                        />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                            for="exampleRadios2"
                                        >
                                            No
                                        </label>
                                    </div>
                                </div>
                                <span class="text-danger !text-xs pi_when_to_work-error"></span>
                                {willingToWorkImmediately == "No" && (
                                    <div class="col-md-12 mb-4 is_not_when_to_work">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            If no, when?
                                        </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={noWhenToWork}
                                            onChange={(e) =>
                                                setNoWhenToWOrk(e.target.value)
                                            }
                                        />

                                        <span class="text-danger !text-xs pi_not_when_to_work-error"></span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Are you a 4Ps beneficiary?{" "}
                            </label>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-check pl-0 flex items-center gap-2">
                                        <RadioButton
                                            inputId="ingredient1"
                                            name="is4psBeneficiary"
                                            value="Yes"
                                            onChange={(e) =>
                                                setIs4psBeneficiary(e.value)
                                            }
                                            checked={is4psBeneficiary === "Yes"}
                                        />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                            for="exampleRadios1"
                                        >
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-check pl-0  flex items-center gap-2">
                                        <RadioButton
                                            inputId="ingredient1"
                                            name="is4psBeneficiary"
                                            value="No"
                                            onChange={(e) =>
                                                setIs4psBeneficiary(e.value)
                                            }
                                            checked={is4psBeneficiary === "No"}
                                        />
                                        <label
                                            class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                            for="exampleRadios2"
                                        >
                                            No
                                        </label>
                                    </div>
                                </div>
                                <span class="text-danger !text-xs pi_4ps_beneficiary-error"></span>
                                {is4psBeneficiary == "Yes" && (
                                    <div class="col-md-12 mb-4 is_4ps_beneficiary">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            If yes, Household ID No.
                                        </label>
                                        <InputText
                                            className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                            value={householdNumber}
                                            onChange={(e) =>
                                                setHouseholdNumber(
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <span class="text-danger !text-xs pi_4ps_household_id-error"></span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <h5 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                Place of Birth
                            </h5>
                            <div class="row">
                                <div class="col-md-12 mb-4 d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Region
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pob_province}
                                        onSelect={pob_region}
                                        className=" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>Select Region</option>
                                        {pob_regionData &&
                                            pob_regionData.length > 0 &&
                                            pob_regionData.map((item) => (
                                                <option
                                                    key={item.region_code}
                                                    value={item.region_code}
                                                    selected={
                                                        pob_regionAddr ==
                                                        item.region_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.region_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4 d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Province
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pob_city}
                                        class=" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>
                                            Select Province
                                        </option>
                                        {pob_provinceData &&
                                            pob_provinceData.length > 0 &&
                                            pob_provinceData.map((item) => (
                                                <option
                                                    key={item.province_code}
                                                    value={item.province_code}
                                                    selected={
                                                        pob_provinceAddr ==
                                                        item.province_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.province_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Municipality/City
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pob_barangay}
                                        class=" pa_city !text-xs !py-2.5 !rounded form-select !border-gray-300 !text-gray-500 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>Select City</option>
                                        {pob_cityData &&
                                            pob_cityData.length > 0 &&
                                            pob_cityData.map((item) => (
                                                <option
                                                    key={item.city_code}
                                                    value={item.city_code}
                                                    selected={
                                                        pob_cityAddr ==
                                                        item.city_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.city_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Barangay
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pob_brgy}
                                        class=" pa_barangay !text-xs !rounded form-select !border-gray-300 !py-2.5 !text-gray-500 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>
                                            Select Barangay
                                        </option>
                                        {pob_barangayData &&
                                            pob_barangayData.length > 0 &&
                                            pob_barangayData.map((item) => (
                                                <option
                                                    key={item.brgy_code}
                                                    value={item.brgy_code}
                                                    selected={
                                                        pob_barangayAddr ==
                                                        item.brgy_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.brgy_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <InputTextWrapper
                                        stateValue={
                                            pob_houseNumber_Street_Village
                                        }
                                        stateMethod={
                                            pob_setHouseNumber_Street_Village
                                        }
                                        isRequired={false}
                                        label={"House No./ Street Village"}
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <h5 class="fw-bold text-gray-500 text-dark-emphasis mb-4">
                                Present Address
                            </h5>
                            <div class="row">
                                <div class="col-md-12 mb-4 d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Region
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pa_province}
                                        onSelect={pa_region}
                                        className=" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>Select Region</option>
                                        {pa_regionData &&
                                            pa_regionData.length > 0 &&
                                            pa_regionData.map((item) => (
                                                <option
                                                    key={item.region_code}
                                                    value={item.region_code}
                                                    selected={
                                                        pa_regionAddr ==
                                                        item.region_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.region_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4 d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Province
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pa_city}
                                        class=" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>
                                            Select Province
                                        </option>
                                        {pa_provinceData &&
                                            pa_provinceData.length > 0 &&
                                            pa_provinceData.map((item) => (
                                                <option
                                                    key={item.province_code}
                                                    value={item.province_code}
                                                    selected={
                                                        pa_provinceAddr ==
                                                        item.province_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.province_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Municipality/City
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pa_barangay}
                                        class=" pa_city !text-xs !py-2.5 !rounded form-select !border-gray-300 !text-gray-500 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>Select City</option>
                                        {pa_cityData &&
                                            pa_cityData.length > 0 &&
                                            pa_cityData.map((item) => (
                                                <option
                                                    key={item.city_code}
                                                    value={item.city_code}
                                                    selected={
                                                        pa_cityAddr ==
                                                        item.city_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.city_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Barangay
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={pa_brgy}
                                        class=" pa_barangay !text-xs !rounded form-select !border-gray-300 !py-2.5 !text-gray-500 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>
                                            Select Barangay
                                        </option>
                                        {pa_barangayData &&
                                            pa_barangayData.length > 0 &&
                                            pa_barangayData.map((item) => (
                                                <option
                                                    key={item.brgy_code}
                                                    value={item.brgy_code}
                                                    selected={
                                                        pa_barangayAddr ==
                                                        item.brgy_name
                                                            ? true
                                                            : null
                                                    }
                                                >
                                                    {item.brgy_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4  d-flex flex-column justify-content-between">
                                    <InputTextWrapper
                                        stateValue={
                                            pa_houseNumber_Street_Village
                                        }
                                        stateMethod={
                                            pa_setHouseNumber_Street_Village
                                        }
                                        isRequired={false}
                                        label={"House No./ Street Village"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body pt-0 row">
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Email Address
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={emailAddress}
                                onChange={(e) =>
                                    setEmailAddress(e.target.value)
                                }
                            />
                            <span class="text-danger !text-xs pi_email_address-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Cellphone Number
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <span class="text-danger !text-xs pi_celphone_number-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Landline Number
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={landlineNumber}
                                onChange={(e) =>
                                    setLandlineNumber(e.target.value)
                                }
                            />
                            <span class="text-danger !text-xs pi_landine_number-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                GSIS/SSS Number
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={GSISNumber}
                                onChange={(e) => setGSISNumber(e.target.value)}
                            />
                            <span class="text-danger !text-xs pi_sss_number-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                Pag-ibig Number
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={pagIbigNumber}
                                onChange={(e) =>
                                    setPagIbigNumber(e.target.value)
                                }
                            />
                            <span class="text-danger !text-xs pi_pag_ibig_number-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                PhilHealth Number
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={philhealthNumber}
                                onChange={(e) =>
                                    setPhilhealthNumber(e.target.value)
                                }
                            />
                            <span class="text-danger !text-xs pi_philheath_number-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                            >
                                TIN Number
                            </label>
                            <InputText
                                className="form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname"
                                value={TINNumber}
                                onChange={(e) => setTINNumber(e.target.value)}
                            />
                            <span class="text-danger !text-xs pi_philheath_number-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="col-md-12 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                >
                                    Disability
                                </label>
                                <Dropdown
                                    value={disability}
                                    onChange={(e) => setDisability(e.value)}
                                    options={disabilities}
                                    optionLabel="name"
                                    editable
                                    placeholder="Select a Disability"
                                    className="form-select h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"
                                />
                                <span class="text-danger !text-xs pi_disability-error"></span>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="col-md-4 mb-4">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                >
                                    Employment Status
                                </label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check pl-0 flex items-center gap-2">
                                            <RadioButton
                                                inputId="ingredient1"
                                                name="employementStatus"
                                                value="Employed"
                                                onChange={(e) =>
                                                    setEmployementStatus(
                                                        e.value
                                                    )
                                                }
                                                checked={
                                                    employementStatus ===
                                                    "Employed"
                                                }
                                            />
                                            <label
                                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                for="exampleRadios1"
                                            >
                                                Employed
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check  pl-0 flex items-center gap-2">
                                            <RadioButton
                                                inputId="ingredient1"
                                                name="employementStatus"
                                                value="Unemployed"
                                                onChange={(e) =>
                                                    setEmployementStatus(
                                                        e.value
                                                    )
                                                }
                                                checked={
                                                    employementStatus ===
                                                    "Unemployed"
                                                }
                                            />
                                            <label
                                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                for="exampleRadios2"
                                            >
                                                Unemployed
                                            </label>
                                        </div>
                                    </div>
                                    <span class="text-danger !text-xs pi_employed-error"></span>
                                </div>

                                {employementStatus === "Employed" && (
                                    <div class="row ">
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Wage Employed"
                                                    onChange={(e) =>
                                                        handleEmployedStatusTypeWageEmployed(
                                                            "Wage Employed"
                                                        )
                                                    }

                                                    checked={employedStatusTypeWageEmployed === "Wage Employed"}
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                    for="osawft"
                                                >
                                                    Wage Employed
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Self Employed"
                                                    checked={employedStatusTypeSelfEmployed === "Self Employed"}
                                                    onChange={(e) =>
                                                        handleEmployedStatusTypeSelfEmployed(
                                                            "Self Employed"
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                    for="osawft"
                                                >
                                                    Self Employed
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {employementStatus === "Unemployed" && (
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="New Entrant/Fresh Graduate"
                                                    checked={unEmployedStatusNewEntrant === "New Entrant/Fresh Graduate"}
                                                    onChange={(e) =>
                                                        handleUnEmployedStatusNewEntrant(
                                                            "New Entrant/Fresh Graduate"
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                    for="osawft"
                                                >
                                                    New Entrant/Fresh Graduate
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Finished Contract"
                                                    checked={unEmployedStatusFinishedContract === "Finished Contract"}
                                                    onChange={(e) =>
                                                        handleUnEmployedStatusFinishedContract(
                                                            "Finished Contract"
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                    for="osawft"
                                                >
                                                    Finished Contract
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Resigned"
                                                    checked={unEmployedStatusResigned === "Resigned"}
                                                    onChange={(e) =>
                                                        handleUnEmployedStatusResigned(
                                                            "Resigned"
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                    for="osawft"
                                                >
                                                    Resigned
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    checked={unEmployedStatusRetired === "Retired"}
                                                    onChange={(e) =>
                                                        handleUnEmployedStatusRetired(
                                                            "Retired"
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                    for="osawft"
                                                >
                                                    Retired
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Terminated/Laidoff(local)"
                                                    checked={unEmployedStatusTerminatedLocal === "Terminated/Laidoff(local)"}
                                                    onChange={(e) =>
                                                        handleUnEmployedStatusTerminatedLocal(
                                                            "Terminated/Laidoff(local)"
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                    for="osawft"
                                                >
                                                    Terminated/Laidoff(local)
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Teminated/Laidoff(abroad)"
                                                    checked={unEmployedStatusTerminatedAbroad === "Teminated/Laidoff(abroad)"}
                                                    onChange={(e) =>
                                                        handleUnEmployedStatusTerminatedAbroad(
                                                            "Teminated/Laidoff(abroad)", e
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                    for="osawft"
                                                >
                                                    Teminated/Laidoff(abroad)
                                                </label>
                                            </div>
                                            {
                                                teminated_Laidoff_abroad && <InputText
                                                className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                                value={unEmployedStatusTerminatedAbroadValue}
                                                onChange={(e) =>
                                                    setUnEmployedStatusTerminatedAbroadValue(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            }
                                            
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check flex items-center gap-2">
                                                <input
                                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                                    type="checkbox"
                                                    name="osawft"
                                                    id="osawft"
                                                    value="Others, specify"
                                                    checked={unEmployedStatusOthers === "Others, specify"}
                                                    onChange={(e) =>
                                                        handleUnEmployedStatusTerminatedOthers(
                                                            "Others, specify", e
                                                        )
                                                    }
                                                />
                                                <label
                                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                                    for="osawft"
                                                >
                                                    Others, specify
                                                </label>
                                            </div>
                                            {
                                                employedStatusOthers && <InputText
                                                className="form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                                value={unEmployedStatusOthersValue}
                                                onChange={(e) =>
                                                    setUnEmployedStatusOthersValue(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            }
                                        </div>
                                    </div>
                                )}
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
