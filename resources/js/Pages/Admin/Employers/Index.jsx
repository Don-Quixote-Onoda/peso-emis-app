import AuthenticatedLayout from '../../../Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import EmployersTable from "./Table";
import ViewEmployer from './View';
import { useForm } from "@inertiajs/react";
import EditEmployer from './Edit';
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

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

    const [deleteEmployerDialog, setDeleteEmployerDialog] = useState(false);

    const confirmDeleteEmployer = (Employer) => {
        setDeleteEmployerDialog(true);
        setData({"id": Employer.id});
    };

    const hideDeleteEmployerDialog = () => {
        setDeleteEmployerDialog(false);
    };

    const deleteEmployer = () => {
        // post(route('delete-job-posting'), {
        //     forceFormData: true,
        //     onSuccess: () =>{
        //         console.log('success');
        //         reset();
        //         setType('default');
        //         setDeleteJobPostingDialog(false);
        //     },
        //     onError: () => {
        //         // console.log(errors);
        //     },
        // });
    }

    const deleteEmployerDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideDeleteEmployerDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={deleteEmployer}
            />
        </React.Fragment>
    );

    

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
            <div className="mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {type == "default" && (
                    <EmployersTable
                        employers={employers}
                        // confirmDeleteEmployer={confirmDeleteEmployer}
                        viewEmployer={viewEmployer}
                        editEmployer={editEmployer}
                        confirmDeleteEmployer={confirmDeleteEmployer}
                    />
                )}
                {type == "view" && (
                    <ViewEmployer employer={employer} back={back} />
                )}
                {type == "edit" && (
                    <EditEmployer employer={data} setData={setData} back={back} setType={setType} />
                )}
                 <Dialog
                visible={deleteEmployerDialog}
                style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deleteEmployerDialogFooter}
                onHide={hideDeleteEmployerDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                        <span>
                            Are you sure you want to delete this employer <b></b>?
                        </span>
                </div>
            </Dialog>
            </div>

        </AuthenticatedLayout>
    );
}
