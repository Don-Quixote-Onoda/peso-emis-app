import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import AddNewJobPosting from "./JobPosting/Add";
import EditJobPosting from "./JobPosting/Edit";
import ViewJobPosting from "./JobPosting/View";
import { useForm } from '@inertiajs/react';
import { Dialog } from "primereact/dialog";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import {
    regions,
    provinces,
    cities,
    barangays,
} from "select-philippines-address";

export default function ViewApplicant({ employer, back }) {
    useEffect(() => {
    }, []);

    const [postingDetails, setPostingDetails] = useState();
    const { data, setData, post, put, reset, processing, errors } = useForm();
    const [globalFilterValue, setGlobalFilterValue] = useState("");

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const [jobPostings, setJobPostings] = useState({
        employer_vacancy_detail: {},
        employer_posting_detail: {},
        employer_qualification_requirement: {},
    });

    useEffect(() => {
        setPostingDetails(employer.employer_vacancy_detail);
    })
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters["global"].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const moneyFormatBody = (val) => {
        return parseFloat(val).toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })
    }



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
     
    useEffect(() => {
        region();
        setRegionAddr(employer.employer_address.region);
        regions().then((response) => {
            response.map((region) => {
                if(region.region_name === employer.employer_address.region) {
                    provinces(region.region_code).then((response) => {
                        setProvince(response);
                        console.log(province);
                        setCity([]);
                        setBarangay([]);
                        // response.map((province) => {
                        //     if(province.province_name === employer.employer_address.province) {
                        //         setProvinceAddr(province.province_code);
                        //         cities(province.province_code).then((response) => {
                        //             setCity(response);
                        //             response.map((city) => {
                        //                 if(city.city_name === employer.employer_address.municipality_or_city) {
                        //                     setCityAddr(city.city_code);
                        //                     barangays(city.city_code).then((response) => {
                        //                         setBarangay(response);
                        //                     });
                        //                 }
                        //             });
                        //         });
                        //     }
                        // })

                    });
                }
            });
        });

    }, []);
    
    const [editType, setEditType] = useState('default');

    const viewJobPosting = (jobPosting) => {
        employer.employer_vacancy_detail.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_vacancy_detail"] = data;
            }
        });

        employer.employer_posting_detail.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_posting_detail"] = data;
            }
        });

        employer.employer_qualification_requirement.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_qualification_requirement"] = data;
            }
        });

        setEditType('view');

    };

    const [deleteJobPostingDialog, setDeleteJobPostingDialog] = useState(false);

    const confirmDeleteJobPosting = (jobPosting) => {
        setDeleteJobPostingDialog(true);
        setData({"id": jobPosting.id});
    };

    const editJobPosting = (jobPosting) => {
        employer.employer_vacancy_detail.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_vacancy_detail"] = data;
            }
        });

        employer.employer_posting_detail.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_posting_detail"] = data;
            }
        });

        employer.employer_qualification_requirement.map((data) => {
            if (data.id === jobPosting.id) {
                jobPostings["employer_qualification_requirement"] = data;
            }
        });
        setEditType('edit');
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-eye"
                    rounded
                    outlined
                    className="mr-2"
                    onClick={() => viewJobPosting(rowData)}
                />
                <Button
                    icon="pi pi-pencil"
                    rounded
                    outlined
                    className="mr-2"
                    onClick={() => editJobPosting(rowData)}
                />
                <Button
                    icon="pi pi-trash"
                    rounded
                    outlined
                    severity="danger"
                    onClick={() => confirmDeleteJobPosting(rowData)}
                />
            </React.Fragment>
        );
    };

    const addNew = () => {
        setEditType('add');
    }
    const renderHeader = () => {
        return (
            <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
                <h4 className="m-0">Job Posting</h4>
                <div className="flex gap-2">
                    <Button
                        label="New"
                        icon="pi pi-plus"
                        className="p-button-help self-end"
                        onClick={addNew}
                    />
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText
                            value={globalFilterValue}
                            onChange={onGlobalFilterChange}
                            placeholder="Keyword Search"
                        />
                    </span>
                </div>
            </div>
        );
    };

    const header = renderHeader();


    const backEdit = () => {
        setEditType('default');
    }

    const hideDeleteJobPostingDialog = () => {
        setDeleteJobPostingDialog(false);
    };
    const deleteJobPosting = () => {
        post(route('delete-job-posting'), {
            forceFormData: true,
            onSuccess: () =>{
                reset();
                setType('default');
                setDeleteJobPostingDialog(false);
            },
            onError: () => {
            },
        });
    }

    const deleteJobPostingDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideDeleteJobPostingDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={deleteJobPosting}
            />
        </React.Fragment>
    );

    
    


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
                </div>
                <div class="card-body row p-0">
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            className={`form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis`}
                        >
                            Establishment Name:
                        </label>
                        <InputText
                            disabled
                            // value={field.value}
                            value={employer.establishment_name}
                            className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                        />
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            className={`form-label !text-xs !text-gray-900 fw-bold text-light-emphasis`}
                        >
                            Acronym/Abbreviation:
                        </label>
                        <InputText
                            disabled
                            value={employer.establishment_accronym}
                            className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                        />
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            className={`form-label !text-xs !text-gray-900 fw-bold text-light-emphasis`}
                        >
                            Tax Identification Number
                        </label>
                        <InputText
                            disabled
                            value={employer.TIN_number}
                            className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                        />
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            className={`form-label !text-xs !text-gray-900 fw-bold text-light-emphasis`}
                        >
                            Line of Business/Industry:
                        </label>
                        <InputText
                            disabled
                            value={employer.line_of_business}
                            className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                        />
                    </div>

                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-900 fw-bold text-light-emphasis"
                        >
                            Employer type:
                            <span className="text-red-500">*</span>
                        </label>
                        <div class="row">
                            <div class="col-md-12">
                                <div className="flex flex-nowrap items-center">
                                    <RadioButton
                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                        inputId="f5"
                                        disabled
                                        value="Government"
                                        checked={
                                            employer.employer_type ===
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
                                        disabled
                                        value="Private"
                                        checked={
                                            employer.employer_type === "Private"
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
                                        disabled
                                        value="Recruitment & Placement Agency (Local)"
                                        checked={
                                            employer.employer_type ===
                                            "Recruitment & Placement Agency (Local)"
                                        }
                                    />
                                    <label
                                        htmlFor="f5"
                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                    >
                                        Recruitment & Placement Agency (Local)
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div className="flex flex-nowrap items-center">
                                    <RadioButton
                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                        inputId="f5"
                                        disabled
                                        value="Licensed Recruitment Agency (Overseas)"
                                        checked={
                                            employer.employer_type ===
                                            "Licensed Recruitment Agency (Overseas)"
                                        }
                                    />
                                    <label
                                        htmlFor="f5"
                                        className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                    >
                                        Licensed Recruitment Agency (Overseas)
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div className="flex flex-nowrap items-center">
                                    <RadioButton
                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                        inputId="f5"
                                        disabled
                                        value="DO 174-17, Subcontractor"
                                        checked={
                                            employer.employer_type ===
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
                    </div>
                    <div class="col-md-6 mb-4">
                        <label
                            for="inputEmail4"
                            class="form-label !text-xs !text-gray-900 fw-bold text-light-emphasis"
                        >
                            Total Work Force:
                            <span className="text-red-500">*</span>
                        </label>
                        <div class="row">
                            <div class="col-md-6">
                                <div className="flex flex-nowrap items-center">
                                    <RadioButton
                                        className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                        inputId="f5"
                                        disabled
                                        value="Micro (1-9)"
                                        checked={
                                            employer.total_work_force ===
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
                                        disabled
                                        value="Small (10-99)"
                                        checked={
                                            employer.total_work_force ===
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
                                        disabled
                                        value="Medium (100-199)"
                                        checked={
                                            employer.total_work_force ===
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
                                        disabled
                                        value="Large (200 and up)"
                                        checked={
                                            employer.total_work_force ===
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
                                        disabled
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
                                    <option disabled>Select Province</option>
                                    {provinceData &&
                                        provinceData.length > 0 &&
                                        provinceData.map((item) => (
                                            <option
                                                key={item.province_code}
                                        disabled
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
                                    <option disabled>Select City</option>
                                    {cityData &&
                                        cityData.length > 0 &&
                                        cityData.map((item) => (
                                            <option
                                                key={item.city_code}
                                        disabled
                                                value={item.city_code}
                                                selected={
                                                    cityAddr == item.city_name
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
                                    <option disabled>Select Barangay</option>
                                    {barangayData &&
                                        barangayData.length > 0 &&
                                        barangayData.map((item) => (
                                            <option
                                                key={item.brgy_code}
                                        disabled
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
                                        disabled
                                    />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="step-2">
                <div class="card rounded-0 border-0">
                    <div class=" bg-light mb-2 font-bold mt-10">
                        <h4 class="card-title fw-bold">
                            II. ESTABLISHMENT CONTACT DETAILS
                        </h4>
                    </div>
                    <div class="card-body row">
                        <div class="col-md-12">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs !text-gray-900 fw-bold text-light-emphasis"
                            >
                                Title:<span className="text-red-500">*</span>
                            </label>
                            <div class="row">
                                <div class="col-md-1">
                                    <div
                                        className="flex flex-nowrap items-center"
                                    >
                                        <RadioButton
                                            className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                            inputId="f5"
                                            value="Mr."
                                            disabled
                                            checked={employer.employer_establishment_contact_detail.title === "Mr."}
                                           
                                        />
                                        <label
                                            htmlFor="f5"
                                            className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                        >
                                            Mr.
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-1">
                                    <div
                                        className="flex flex-nowrap items-center"
                                    >
                                        <RadioButton
                                            className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                            inputId="f5"
                                            value="Ms."
                                            disabled
                                            checked={employer.employer_establishment_contact_detail.title === "Ms."}
                                        />
                                        <label
                                            htmlFor="f5"
                                            className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                        >
                                            Ms.
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-1">
                                    <div
                                        className="flex flex-nowrap items-center"
                                    >
                                        <RadioButton
                                            className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                            inputId="f5"
                                            value="Mrs."
                                            disabled
                                            checked={employer.employer_establishment_contact_detail.title === "Mrs."}
                                        />
                                        <label
                                            htmlFor="f5"
                                            className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                        >
                                            Mrs.
                                        </label>
                                    </div>
                                </div>
                                {/* <div class="col-md-9">
                                    <div
                                        className="flex flex-nowrap items-center"
                                    >
                                        <RadioButton
                                            className="form-check-input border-light-emphasis !border-0 establishment-employer-type"
                                            inputId="f5"
                                            value="Others (please specify):"
                                            checked={
                                                employer.employer_establishment_contact_detail.title !==
                                                    "Others (please specify):" &&
                                                employer.employer_establishment_contact_detail.title !== "Mrs." &&
                                                employer.employer_establishment_contact_detail.title !== "Ms." &&
                                                employer.employer_establishment_contact_detail.title !== "Mr."
                                            }
                                        />

                                        <label
                                            htmlFor="f5"
                                            className="ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1"
                                        >
                                            Others (please specify):
                                        </label>
                                    </div>
                                </div>
                                {otherTitle && (
                                    <div className="col-md-6 mt-3">
                                        <InputText
                                            className={`form-control col-md-9 !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                                            onChange={(e) =>
                                                setTitle(e.target.value)
                                            }
                                        />
                                    </div>
                                )} */}
                              
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis"
                            >
                                Contact Person (Full Name):
                            </label>
                            <InputText
                                // value={field.value}
                                disabled
                                value={employer.employer_establishment_contact_detail.fullname
                                }
                                className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                               
                            />
                           
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis"
                            >
                                Position:
                            </label>
                            <InputText
                                // value={field.value}
                                disabled
                                value={employer.employer_establishment_contact_detail.position}
                                className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                            />
                           
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis"
                            >
                                Telephone Number:
                            </label>
                            <InputText
                            disabled
                                value={employer.employer_establishment_contact_detail.telephone_number}
                                className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                               
                            />
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis"
                            >
                                Mobile Number:
                            </label>
                            <InputText
                            disabled
                                value={employer.employer_establishment_contact_detail.mobile_number
                                }
                                className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                               
                            />
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis"
                            >
                                Fax Number:
                            </label>
                            <InputText
                            disabled
                                value={employer.employer_establishment_contact_detail.fax_number}
                                className={`form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name`}
                            />
                        </div>
                        <div class="col-md-6 mb-4">
                            <label
                                for="inputEmail4"
                                class="form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis"
                            >
                                Email Adress:
                            </label>
                            <InputText
                            disabled
                                value={employer.employer_establishment_contact_detail.email_address}
                                className={`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name`}
                               
                            />
                           
                        </div>
                        <div class="col-md-12 mb-4"></div>
                    </div>
                </div>
            </div>
            {
                editType == 'default' && <DataTable
                value={postingDetails}
                paginator
                header={header}
                rows={10}
                className="mt-5"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                rowsPerPageOptions={[10, 25, 50]}
                dataKey="id"
                filters={filters}
                filterDisplay="menu"
                emptyMessage="No customers found."
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            >
                <Column
                    field="position_title"
                    header="Position Title"
                    sortable
                    filter
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                />
                
                <Column
                    field="nature_of_work"
                    header="Nature of Work"
                    sortable
                    filter
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                />
                <Column
                    field="place_of_work"
                    header="Place of Work"
                    sortable
                    filter
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                />
                <Column
                    field="salary"
                    header="Salary"
                    sortable
                    filter
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                    body={moneyFormatBody}
                />
                <Column
                    field="vacancy_count"
                    header="Vacancy Count"
                    sortable
                    filter
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                />
                <Column
                    field="job_description"
                    header="Job Description"
                    sortable
                    filter
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                />
                <Column
        body={actionBodyTemplate}
        exportable={false}
        style={{ minWidth: "10rem", display: "flex", gap: "0.5rem" }}
    ></Column>
            </DataTable>
            }
            {
                editType == 'add' && <AddNewJobPosting backEdit={backEdit}/>
            }

{
                editType == 'edit' && <EditJobPosting backEdit={backEdit} jobPostings={jobPostings}/>
            }

{
                editType == 'view' && <ViewJobPosting backEdit={backEdit} jobPostings={jobPostings} />
            }
             <Dialog
                visible={deleteJobPostingDialog}
                style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deleteJobPostingDialogFooter}
                onHide={hideDeleteJobPostingDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                        <span>
                            Are you sure you want to delete <b></b>?
                        </span>
                </div>
            </Dialog>
        </>
    );
}
