import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import EmployersTable from "./Table";
import ViewEmployer from './View';
import { useForm } from "@inertiajs/react";
import EditEmployer from './Edit';

export default function employers(props) {
    const [employers, setEmployers] = useState([]);
    const [employer, setEmployer] = useState([]);
    const [globalFilterValue, setGlobalFilterValue] = useState("");
    const [type, setType] = useState("default");
    const { data, setData, post, get, reset, processing, errors } =
        useForm(employer);

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    useEffect(() => {
        setEmployers(props.employers);
        console.log(employers);
    });

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters["global"].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const viewEmployer = (employer) => {
        setEmployer(employer);
        setType("view");
    };

    const editEmployer = (employer) => {
        setData(employer);
        setType("edit");
    };

    const back = () => {
        setType("default");
        sessionStorage.clear();
    };

    const renderHeader = () => {
        return (
            <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
                <h4 className="m-0">employers</h4>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText
                        value={globalFilterValue}
                        onChange={onGlobalFilterChange}
                        placeholder="Keyword Search"
                    />
                </span>
            </div>
        );
    };

    const header = renderHeader();
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    employers
                </h2>
            }
        >
            <Head title="employers" />
            <div className="card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {type == "default" && (
                    <EmployersTable
                        employers={employers}
                        // confirmDeleteEmployer={confirmDeleteEmployer}
                        viewEmployer={viewEmployer}
                        editEmployer={editEmployer}
                    />
                )}
                {type == "view" && (
                    <ViewEmployer employer={employer} back={back} />
                )}
                {type == "edit" && (
                    <EditEmployer employer={data} setData={setData} back={back} setType={setType} />
                )}
            </div>
        </AuthenticatedLayout>
    );
}
