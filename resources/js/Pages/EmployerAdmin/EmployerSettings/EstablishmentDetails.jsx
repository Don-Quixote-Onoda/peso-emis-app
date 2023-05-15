import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';
import InputTextWrapper from "../../FormComponents/InputTextWrapper";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import { Link, useForm, usePage } from '@inertiajs/react';
import {
    regions,
    provinces,
    cities,
    barangays,
} from "select-philippines-address";
import { classNames } from "primereact/utils";

export default function EstablishmentDetails({ back, setType }) {
    const employer = usePage().props.employers[0];
    const { data, setData, post, reset, processing, errors } = useForm({
        establishment_accronym: employer.establishment_accronym,
        establishment_name: employer.establishment_name,
        is_authorization_accepted: employer.is_authorization_accepted,
        line_of_business: employer.line_of_business,
        total_work_force: employer.total_work_force,
        TIN_number: employer.TIN_number,
        e_signature: employer.e_signature,
        employer_type: employer.employer_type,
        id: employer.id,
        region: employer.employer_address.region,
        province: employer.employer_address.province,
        city_or_municipality: employer.employer_address.city_or_municipality,
        barangay: employer.employer_address.barangay,
        address: employer.employer_address.address,
});
   

    const [isSubmitted, setSubmitted] = useState(false);

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

    const onSubmit = (e) => {
        setSubmitted(true);
        
        post(route('update-establishment-details'), {
            forceFormData: true,
            onSuccess: () =>{
                console.log('success');
                // sessionStorage.clear();
                reset();
                setSubmitted(false);
                setType('default');
            },
            onError: () => {
                // console.log(errors);
            },
        });
        
    };

    
    const [regionAddr, setRegionAddr] = useSessionStorage(
        sessionStorage.getItem("regionAddr"),
        "regionAddr"
    );
    const [provinceAddr, setProvinceAddr] = useSessionStorage(
        sessionStorage.getItem("provinceAddr"),
        "provinceAddr"
    );
    const [cityAddr, setCityAddr] = useSessionStorage(
        "cityAddr",
        "cityAddr"
    );
    const [barangayAddr, setBarangayAddr] = useSessionStorage(
        sessionStorage.getItem("barangayAddr"),
        "barangayAddr"
    );
    const [houseNumber_Street_Village, setHouseNumber_Street_Village] =
        useSessionStorage(
            sessionStorage.getItem("houseNumber_Street_Village"),
            "houseNumber_Street_Village"
        );

    const [regionData, setRegionData] = useState([]);
    const [provinceData, setProvinceData] = useState([]);
    const [cityData, setCityData] = useSessionStorage(
        sessionStorage.getItem("cityData"),
        "cityData"
    );
    const [barangayData, setBarangayData] = useSessionStorage(
        sessionStorage.getItem("barangayData"),
        "barangayData"
    );
    const [regionCode, setRegionCode] = useSessionStorage(
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

    const region = () => {
        regions().then((response) => {
            setRegionData(response);
        });
    };

    const province = (e) => {
        setRegionAddr(e.target.selectedOptions[0].text);
        setData('region', e.target.selectedOptions[0].text);
        provinces(e.target.value).then((response) => {
            setProvinceData(response);
            setCityData([]);
            setBarangayData([]);
            setRegionCode(e.target.value);
        });
    };

    const city = (e) => {
        setProvinceAddr(e.target.selectedOptions[0].text);
        setData('province', e.target.selectedOptions[0].text);
        cities(e.target.value).then((response) => {
            setCityData(response);
        });
    };

    const barangay = (e) => {
        setData('city_or_municipality', e.target.selectedOptions[0].text);
        setCityAddr(e.target.selectedOptions[0].text);
        barangays(e.target.value).then((response) => {
            setBarangayData(response);
        });
    };

    const brgy = (e) => {
        setData('barangay', e.target.selectedOptions[0].text);
        setBarangayAddr(e.target.selectedOptions[0].text);
    };
     
    useEffect(() => {
        region();
        regions().then((response) => {
            response.map((region) => {
                if(region.region_name === data.region) {
                    provinces(region.region_code).then((response) => {
                        setProvinceData(response);
                        setCityData([]);
                        setBarangayData([]);
                        response.map((province) => {
                            if(province.province_name === data.province) {

                                cities(province.province_code).then((response) => {
                                setCityData(response);

                                    response.map((city) => {
                                        if(city.city_name === data.city) {
                                            barangays(city.city_code).then((response) => {
                                                setBarangayData(response);

                                            });
                                        }
                                    });
                                });
                            }
                        })

                    });
                }
            });
        });

    }, []);

    return (
        <>
        <div class="step-1">
                <div class="card rounded-0 border-0">
                    <div class=" bg-light mb-2 font-bold mt-10">
                        <h4 class="card-title fw-bold">
                        I. ESTABLISHMENT DETAILS
                        </h4>
                        
                    </div>
                    <div class="card-body row p-0">
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                className={`form-label !text-xs !text-gray-400 fw-bold text-light-emphasis`}
                            >
                                {" "}
                                Establishment Name:
                                <span className="text-red-500">*</span>{" "}
                            </label>
                            <InputText
                                // value={field.value}
                                value={data.establishment_name}
                                className={`form-control !text-xs !py-2.5 ${classNames(
                                    {
                                        "p-invalid":
                                            isSubmitted &&
                                            (data.establishment_name == "" ||
                                                data.establishment_name == null),
                                    }
                                )} !text-gray-500 border-light-emphasis establishment-name`}
                                onChange={(e) =>
                                    setData('establishment_name', e.target.value)
                                }
                            />
                            {isSubmitted &&
                                (data.establishment_name == "" ||
                                    data.establishment_name == null) && (
                                    <InputError
                                        message="Establishment Name is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                className={`form-label !text-xs ${classNames({
                                    "p-error": isSubmitted &&
                                    (data.establishment_accronym == "" ||
                                        data.establishment_accronym == null),
                                })} !text-gray-400 fw-bold text-light-emphasis`}
                            >
                                {" "}
                                Acronym/Abbreviation:
                                <span className="text-red-500">*</span>{" "}
                            </label>
                            <InputText
                                value={data.establishment_accronym}
                                className={`form-control !text-xs !py-2.5 ${classNames(
                                    {
                                        "p-invalid": isSubmitted &&
                                        (data.establishment_accronym == "" ||
                                            data.establishment_accronym == null),
                                    }
                                )} !text-gray-500 border-light-emphasis establishment-name`}
                                onChange={(e) => setData('establishment_accronym', e.target.value)}
                            />
                            {isSubmitted &&
                                (data.establishment_accronym == "" ||
                                    data.establishment_accronym == null) && (
                                    <InputError
                                        message="Establishment Abbreviation is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>
                        <div class="col-md-6 mb-4">
                                        <label
                                            for="inputEmail4"
                                            className={`form-label !text-xs ${classNames(
                                                { "p-error": errors.value }
                                            )} !text-gray-400 fw-bold text-light-emphasis`}
                                        >
                                            {" "}
                                            Tax Identification Number
                                            <span className="text-red-500">
                                                *
                                            </span>{" "}
                                        </label>
                                        <InputText
                                            value={data.TIN_number}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                    isSubmitted &&
                                                    (data.TIN_number == "" ||
                                                        data.TIN_number == null),
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                setData('TIN_number', e.target.value)
                                            }
                                        />
                                        {isSubmitted &&
                                (data.TIN_number == "" ||
                                    data.TIN_number == null) && (
                                    <InputError
                                        message="Tax Identification Number is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>
                        <div class="col-md-6 mb-4">
                                        <label
                                            for="inputEmail4"
                                            className={`form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis`}
                                        >
                                            {" "}
                                            Line of Business/Industry:
                                            <span className="text-red-500">
                                                *
                                            </span>{" "}
                                        </label>
                                        <InputText
                                            value={data.line_of_business}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                    isSubmitted &&
                                                    (data.line_of_business == "" ||
                                                        data.line_of_business == null),
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                setData('line_of_business', e.target.value)
                                            }
                                        />
                                        {isSubmitted &&
                                (data.line_of_business == "" ||
                                    data.line_of_business == null) && (
                                    <InputError
                                        message="Line of Business is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>

                        <div class="col-md-6 mb-4">
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Employer type:
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Government"
                                                        checked={
                                                            data.employer_type ===
                                                            "Government"
                                                        }
                                                        onChange={(e) => setData('employer_type', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Government
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Private"
                                                        checked={
                                                            data.employer_type ===
                                                            "Private"
                                                        }
                                                        onChange={(e) => setData('employer_type', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Private
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Recruitment & Placement Agency (Local)"
                                                        checked={
                                                            data.employer_type ===
                                                            "Recruitment & Placement Agency (Local)"
                                                        }
                                                        onChange={(e) => setData('employer_type', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Recruitment & Placement
                                                        Agency (Local)
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Licensed Recruitment Agency (Overseas)"
                                                        checked={
                                                            data.employer_type ===
                                                            "Licensed Recruitment Agency (Overseas)"
                                                        }
                                                        onChange={(e) => setData('employer_type', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Licensed Recruitment
                                                        Agency (Overseas)
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="DO 174-17, Subcontractor"
                                                        checked={
                                                            data.employer_type ===
                                                            "DO 174-17, Subcontractor"
                                                        }

                                                        onChange={(e) => setData('employer_type', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        DO 174-17, Subcontractor
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {isSubmitted &&
                                (data.employer_type == "" ||
                                    data.employer_type == null) && (
                                    <InputError
                                        message="Employer Type is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>
                        <div class="col-md-6 mb-4">
                            
                                        <label
                                            for="inputEmail4"
                                            class="form-label !text-xs !text-gray-400 fw-bold text-light-emphasis"
                                        >
                                            Total Work Force:
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Micro (1-9)"
                                                        checked={
                                                            data.total_work_force ===
                                                            "Micro (1-9)"
                                                        }
                                                        onChange={(e) => setData('total_work_force', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Micro (1-9)
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Small (10-99)"
                                                        checked={
                                                            data.total_work_force ===
                                                            "Small (10-99)"
                                                        }

                                                        onChange={(e) => setData('total_work_force', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Small (10-99)
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Medium (100-199)"
                                                        checked={
                                                            data.total_work_force ===
                                                            "Medium (100-199)"
                                                        }
                                                        onChange={(e) => setData('total_work_force', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Medium (100-199)
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div className="flex flex-nowrap items-center">
                                                    <RadioButton
                                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                                        inputId="f5"
                                                        value="Large (200 and up)"
                                                        checked={
                                                            data.total_work_force ===
                                                            "Large (200 and up)"
                                                        }
                                                        onChange={(e) => setData('total_work_force', e.target.value)}
                                                    />
                                                    <label
                                                        htmlFor="f5"
                                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                                    >
                                                        Large (200 and up)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {isSubmitted &&
                                (data.total_work_force == "" ||
                                    data.total_work_force == null) && (
                                    <InputError
                                        message="Employer Type is required!"
                                        className="mt-2 text-xs"
                                    />
                                )}
                        </div>

                       
                    </div>
                </div>
            </div>
            <div class="col-md-12 mb-4">
                        <div class="row">
                            <div class="col-md-6 mb-4 d-flex flex-column justify-content-between">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-900 text-light-emphasis"
                                >
                                    Region
                                    <span className="text-red-500">*</span>
                                </label>
                                <select
                                    onChange={province}
                                    onSelect={region}
                                    className=" province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300"
                                    aria-label="Default select example"
                                    
                                >
                                    <option disabled>Select Region</option>
                                    {regionData &&
                                        regionData.length > 0 &&
                                        regionData.map((item) => (
                                            <option
                                                key={item.region_code}
                                        
                                                value={item.region_code}
                                                selected={
                                                    data.region ==
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
                            <div class="col-md-6 mb-4 d-flex flex-column justify-content-between">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-900 text-light-emphasis"
                                >
                                    Province
                                    <span className="text-red-500">*</span>
                                </label>
                                <select
                                    onChange={city}
                                    class=" province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300 form-select border-light-emphasis"
                                    aria-label="Default select example"
                                    

                                >
                                    <option >Select Province</option>
                                    {provinceData &&
                                        provinceData.length > 0 &&
                                        provinceData.map((item) => (
                                            <option
                                                key={item.province_code}
                                        
                                                value={item.province_code}
                                                selected={
                                                    data.province ==
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
                            <div class="col-md-6 mb-4  d-flex flex-column justify-content-between">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-900 text-light-emphasis"
                                >
                                    Municipality/City
                                    <span className="text-red-500">*</span>
                                </label>
                                <select
                                    onChange={barangay}
                                    class=" city !text-xs !py-2.5 !rounded form-select !border-gray-300 !text-gray-500 form-select border-light-emphasis"
                                    aria-label="Default select example"
                                    

                                >
                                    <option >Select City</option>
                                    {cityData &&
                                        cityData.length > 0 &&
                                        cityData.map((item) => (
                                            <option
                                                key={item.city_code}
                                        
                                                value={item.city_code}
                                                selected={
                                                    data.city == item.city_name
                                                        ? true
                                                        : null
                                                }
                                            >
                                                {item.city_name}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            <div class="col-md-6 mb-4  d-flex flex-column justify-content-between">
                                <label
                                    for="inputEmail4"
                                    class="form-label !text-xs !text-gray-900 text-light-emphasis"
                                >
                                    Barangay
                                    <span className="text-red-500">*</span>
                                </label>
                                <select
                                    onChange={brgy}
                                    class=" barangay !text-xs !rounded form-select !border-gray-300 !py-2.5 !text-gray-500 form-select border-light-emphasis"
                                    aria-label="Default select example"
                                    

                                >
                                    <option >Select Barangay</option>
                                    {barangayData &&
                                        barangayData.length > 0 &&
                                        barangayData.map((item) => (
                                            <option
                                                key={item.brgy_code}
                                        
                                                value={item.brgy_code}
                                                selected={
                                                    data.barangay ==
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
                                <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        House No./ Street Village*
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <InputText
                                        className="form-control !text-xs !py-2.5 !text-gray-900 border-light-emphasis pi_surname"
                                        value={
                                            houseNumber_Street_Village
                                        }
                                        
                                    />
                                </div>
                        </div>
                    </div>
            <Button
                    className="mr-2 w-20"
                    label="Save"
                    onClick={() => onSubmit()}
                />
        </>
    );
}
