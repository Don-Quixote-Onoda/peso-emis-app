import React, { useState, useRef, useEffect } from "react";
import {
    regions,
    provinces,
    cities,
    barangays,
} from "select-philippines-address";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import InputTextWrapper from "../../FormComponents/InputTextWrapper";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import NavigatorButton from "../Components/NavigatorButton";
import FormWrapper from "../Components/FormWrapper";
import { Controller, set, useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";

export default function EstablishmentDetails({
    activeIndex,
    numberOfPage,
    setActiveIndex,
    counterPrevious,
}) {
    const [stablishmentName, setStablishmentName] = useSessionStorage(
        sessionStorage.getItem("stablishmentName"),
        "stablishmentName"
    );
    const [stablishmentAbbreviation, setStablishmentAbbreviation] =
        useSessionStorage("", "stablishmentAbbreviation");
    const [TIN, setTIN] = useSessionStorage("", "TIN");
    const [employerType, setEmployerType] = useSessionStorage(
        sessionStorage.getItem("employerType"),
        "employerType"
    );
    const [totalWorkForce, setTotalWorkForce] = useSessionStorage(
        sessionStorage.getItem("totalWorkForce"),
        "totalWorkForce"
    );
    const [lineOfBusiness, setLineOfBusiness] = useSessionStorage(
        sessionStorage.getItem("lineOfBusiness"),
        "lineOfBusiness"
    );
    const [regionAddr, setRegionAddr] = useSessionStorage(
        sessionStorage.getItem("regionAddress"),
        "regionAddress"
    );
    const [provinceAddr, setProvinceAddr] = useSessionStorage(
        sessionStorage.getItem("provinceAddress"),
        "provinceAddress"
    );
    const [cityAddr, setCityAddr] = useSessionStorage("", "cityAddress");
    const [barangayAddr, setBarangayAddr] = useSessionStorage(
        sessionStorage.getItem("barangayAddress"),
        "barangayAddress"
    );
    const [houseNumber_Street_Village, setHouseNumber_Street_Village] =
        useSessionStorage(
            sessionStorage.getItem("houseNumber_Street_Village"),
            "houseNumber_Street_Village"
        );

    const [regionData, setRegion] = useState([]);
    const [provinceData, setProvince] = useSessionStorage(
        sessionStorage.getItem("provinceData"),
        "provinceData"
    );
    const [cityData, setCity] = useSessionStorage(
        sessionStorage.getItem("cityData"),
        "cityData"
    );
    const [barangayData, setBarangay] = useSessionStorage(
        sessionStorage.getItem("barangayData"),
        "barangayData"
    );
    const [regionCode, setRegionCode] = useSessionStorage(
        sessionStorage.getItem("regionCode"),
        "regionCode"
    );

    const region = () => {
        regions().then((response) => {
            setRegion(response);
        });
    };

    const province = (e) => {
        setRegionAddr(e.target.selectedOptions[0].text);
        provinces(e.target.value).then((response) => {
            setProvince(response);
            setCity([]);
            setBarangay([]);
            setRegionCode(e.target.value);
        });
    };

    const city = (e) => {
        setProvinceAddr(e.target.selectedOptions[0].text);
        cities(e.target.value).then((response) => {
            setCity(response);
        });
    };

    const barangay = (e) => {
        setCityAddr(e.target.selectedOptions[0].text);
        barangays(e.target.value).then((response) => {
            setBarangay(response);
        });
    };

    const brgy = (e) => {
        setBarangayAddr(e.target.selectedOptions[0].text);
    };

    const [isValidated, setValidated] = useState(true);

    useEffect(() => {
        region();
    }, []);

    const toast = useRef(null);

    const show = () => {
        toast.current.show({
            severity: "success",
            summary: "Form Submitted",
            detail: getValues("value"),
        });
    };

    const defaultValues = {
        value: "",
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset,
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.value && show();
        setTIN(data.TIN);
        setEmployerType(data.employerType);
        setLineOfBusiness(data.lineOfBusiness);
        setStablishmentAbbreviation(data.stablishmentAbbreviation);
        setStablishmentName(data.stablishmentName);
        setTotalWorkForce(data.totalWorkForce);

        setActiveIndex(activeIndex+1);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? (
            <small className="p-error">{errors[name].message}</small>
        ) : (
            <small className="p-error">&nbsp;</small>
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Toast ref={toast} />
            <div class="step-1">
                <div class="card rounded-0 border-0">
                    <div class=" bg-light mb-2 font-bold mt-10">
                        <h4 className="card-title fw-bold">
                            I. ESTABLISHMENT DETAILS
                        </h4>
                    </div>
                    <div class="card-body row p-0">
                        <div class="col-md-6 mb-4">
                            <Controller
                                name="stablishmentName"
                                control={control}
                                rules={{
                                    required: "Establishment Name is required.",
                                }}
                                render={({ field, fieldState }) => (
                                    <>
                                        <label
                                            for="inputEmail4"
                                            className={`form-label !text-xs ${classNames(
                                                { "p-error": errors.value }
                                            )} !text-gray-400 fw-bold text-light-emphasis`}
                                        >
                                            {" "}
                                            Establishment Name:
                                            <span className="text-red-500">
                                                *
                                            </span>{" "}
                                        </label>
                                        <InputText
                                            id={field.name}
                                            // value={field.value}
                                            value={field.value}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                        fieldState.error,
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                field.onChange(e.target.value)
                                            }
                                        />

                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                        </div>
                        <div class="col-md-6 mb-4">
                            <Controller
                                name="stablishmentAbbreviation"
                                control={control}
                                rules={{
                                    required:
                                        "Acronym/Abbreviation is required.",
                                }}
                                render={({ field, fieldState }) => (
                                    <>
                                        <label
                                            for="inputEmail4"
                                            className={`form-label !text-xs ${classNames(
                                                { "p-error": errors.value }
                                            )} !text-gray-400 fw-bold text-light-emphasis`}
                                        >
                                            {" "}
                                            Acronym/Abbreviation:
                                            <span className="text-red-500">
                                                *
                                            </span>{" "}
                                        </label>
                                        <InputText
                                            id={field.name}
                                            value={field.value}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                        fieldState.error,
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                field.onChange(e.target.value)
                                            }
                                        />

                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                        </div>
                        <div class="col-md-6 mb-4">
                            <Controller
                                name="TIN"
                                control={control}
                                rules={{
                                    required:
                                        "Tax Identification Number: is required.",
                                }}
                                render={({ field, fieldState }) => (
                                    <>
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
                                            id={field.name}
                                            value={field.value}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                        fieldState.error,
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                field.onChange(e.target.value)
                                            }
                                        />

                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                        </div>
                        <div class="col-md-6 mb-4">
                            <Controller
                                name="lineOfBusiness"
                                control={control}
                                rules={{
                                    required:
                                        "Line of Business/Industry is required.",
                                }}
                                render={({ field, fieldState }) => (
                                    <>
                                        <label
                                            for="inputEmail4"
                                            className={`form-label !text-xs ${classNames(
                                                { "p-error": errors.value }
                                            )} !text-gray-400 fw-bold text-light-emphasis`}
                                        >
                                            {" "}
                                            Line of Business/Industry:
                                            <span className="text-red-500">
                                                *
                                            </span>{" "}
                                        </label>
                                        <InputText
                                            id={field.name}
                                            value={field.value}
                                            className={`form-control !text-xs !py-2.5 ${classNames(
                                                {
                                                    "p-invalid":
                                                        fieldState.error,
                                                }
                                            )} !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                field.onChange(e.target.value)
                                            }
                                        />

                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                        </div>

                        <div class="col-md-6 mb-4">
                            <Controller
                                name="employerType"
                                control={control}
                                rules={{
                                    required: "Employer Type is required.",
                                }}
                                render={({ field }) => (
                                    <>
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
                                                        {...field}
                                                        inputRef={field.ref}
                                                        value="Government"
                                                        checked={
                                                            field.value ===
                                                            "Government"
                                                        }
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
                                                        {...field}
                                                        inputRef={field.ref}
                                                        value="Private"
                                                        checked={
                                                            field.value ===
                                                            "Private"
                                                        }
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
                                                        {...field}
                                                        inputRef={field.ref}
                                                        value="Recruitment & Placement Agency (Local)"
                                                        checked={
                                                            field.value ===
                                                            "Recruitment & Placement Agency (Local)"
                                                        }
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
                                                        {...field}
                                                        inputRef={field.ref}
                                                        value="Licensed Recruitment Agency (Overseas)"
                                                        checked={
                                                            field.value ===
                                                            "Licensed Recruitment Agency (Overseas)"
                                                        }
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
                                                        {...field}
                                                        inputRef={field.ref}
                                                        value="DO 174-17, Subcontractor"
                                                        checked={
                                                            field.value ===
                                                            "DO 174-17, Subcontractor"
                                                        }
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
                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />

                            <span class="text-danger !text-xs  establishment-employer-type-error"></span>
                        </div>
                        <div class="col-md-6 mb-4">
                           
                        <Controller
                                name="totalWorkForce"
                                control={control}
                                rules={{
                                    required: "Total Work Force is required.",
                                }}
                                render={({ field }) => (
                                    <>
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
                                                        {...field}
                                                        inputRef={field.ref}
                                                        value="Micro (1-9)"
                                                        checked={
                                                            field.value ===
                                                            "Micro (1-9)"
                                                        }
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
                                                        {...field}
                                                        inputRef={field.ref}
                                                        value="Small (10-99)"
                                                        checked={
                                                            field.value ===
                                                            "Small (10-99)"
                                                        }
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
                                                        {...field}
                                                        inputRef={field.ref}
                                                        value="Medium (100-199)"
                                                        checked={
                                                            field.value ===
                                                            "Medium (100-199)"
                                                        }
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
                                                        {...field}
                                                        inputRef={field.ref}
                                                        value="Large (200 and up)"
                                                        checked={
                                                            field.value ===
                                                            "Large (200 and up)"
                                                        }
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
                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                            
                            <span class="text-danger !text-xs establishment-total-worked-force-error"></span>
                        </div>

                        <div class="col-md-12 mb-4">
                            <div class="row">
                                <div class="col-md-6 mb-4 d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Region
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={province}
                                        onSelect={region}
                                        className=" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300"
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
                                                        regionAddr ==
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
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Province
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={city}
                                        class=" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>
                                            Select Province
                                        </option>
                                        {provinceData &&
                                            provinceData.length > 0 &&
                                            provinceData.map((item) => (
                                                <option
                                                    key={item.province_code}
                                                    value={item.province_code}
                                                    selected={
                                                        provinceAddr ==
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
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Municipality/City
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={barangay}
                                        class=" pa_city !text-xs !py-2.5 !rounded form-select !border-gray-300 !text-gray-500 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>Select City</option>
                                        {cityData &&
                                            cityData.length > 0 &&
                                            cityData.map((item) => (
                                                <option
                                                    key={item.city_code}
                                                    value={item.city_code}
                                                    selected={
                                                        cityAddr ==
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
                                <div class="col-md-6 mb-4  d-flex flex-column justify-content-between">
                                    <label
                                        for="inputEmail4"
                                        class="form-label !text-xs !text-gray-400 text-light-emphasis"
                                    >
                                        Barangay
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        onChange={brgy}
                                        class=" pa_barangay !text-xs !rounded form-select !border-gray-300 !py-2.5 !text-gray-500 form-select border-light-emphasis"
                                        aria-label="Default select example"
                                    >
                                        <option disabled>
                                            Select Barangay
                                        </option>
                                        {barangayData &&
                                            barangayData.length > 0 &&
                                            barangayData.map((item) => (
                                                <option
                                                    key={item.brgy_code}
                                                    value={item.brgy_code}
                                                    selected={
                                                        barangayAddr ==
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
                                        stateValue={houseNumber_Street_Village}
                                        stateMethod={
                                            setHouseNumber_Street_Village
                                        }
                                        isRequired={false}
                                        label={"House No./ Street Village"}
                                    />
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
