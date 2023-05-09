import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';
import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import {
    regions,
    provinces,
    cities,
    barangays,
} from "select-philippines-address";
import PersonalInformation from "./Pages/PersonalInformation";
import Authorization from "./Pages/Authorization";
import JobPreference from "./Pages/JobPreference";
import Language from "./Pages/Language";
import OtherSkills from "./Pages/OtherSkills";
import Vocational from "./Pages/Vocational";
import WorkExperience from "./Pages/WorkExperience";
import Education from "./Pages/Education";

export default function EditApplicant({ applicant, back }) {
    useEffect(() => {
        console.log(applicant);
        console.log(
            applicant.skills_without_formal_training.includes("Auto Mechanic")
        );
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

    const handleChecked = (val) => {
        return true;
    };

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

    return (
        <>
            <div class="step-1">
                <div class="card rounded-0 border-0">
                    <div class=" bg-light mb-2 font-bold mt-10">
                        <div className="flex justify-between">
                        <h4 class="card-title fw-bold">
                            1. Personal information
                        </h4>
                        <Button
                    icon="pi pi-arrow-left"
                    className="mr-2"
                    label="Back"
                    onClick={() => back()}
                />
                        </div>
                    </div>
                <PersonalInformation />
                <JobPreference />
                <Language />
                <Education />
                <Vocational />
                <WorkExperience />
                <OtherSkills />
                <Authorization />
                </div>
            </div>
            
        </>
    );
}
