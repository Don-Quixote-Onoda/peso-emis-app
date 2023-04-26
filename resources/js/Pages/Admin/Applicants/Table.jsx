import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';

export default function ApplicantsTable({
    applicants,
    confirmDeleteApplicant,
    viewApplicant,
    editApplicant,
    isMatches
}) {
    const [globalFilterValue, setGlobalFilterValue] = useState("");

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters["global"].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
                <h4 className="m-0">Applicants</h4>
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

    const civilStatusBody = (rowData) => {
        return <span>{JSON.parse(rowData.civil_status).name}</span>
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-eye"
                    rounded
                    outlined
                    className="mr-2"
                    onClick={() => viewApplicant(rowData)}
                />
                {
                    isMatches == false && <>
                    <Button
                    icon="pi pi-pencil"
                    rounded
                    outlined
                    className="mr-2"
                    onClick={() => editApplicant(rowData)}
                />
                <Button
                    icon="pi pi-trash"
                    rounded
                    outlined
                    severity="danger"
                    onClick={() => confirmDeleteApplicant(rowData)}
                />
                </>
                }
            </React.Fragment>
        );
    };

    const header = renderHeader();
    return (
        <div className="card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <DataTable
                value={applicants}
                paginator
                header={header}
                rows={10}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                rowsPerPageOptions={[10, 25, 50]}
                dataKey="id"
                filters={filters}
                filterDisplay="menu"
                emptyMessage="No Applicants found."
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            >
                <Column
                    field="surname"
                    header="Surname"
                    sortable
                    filter
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                />
                <Column
                    field="firstname"
                    header="First Name"
                    sortable
                    filter
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                />
                <Column
                    field="middlename"
                    header="Middle Name"
                    sortable
                    filter
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                />
                <Column
                    field="suffix"
                    header="Suffix"
                    sortable
                    filter
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                />
                <Column
                    field="email_address"
                    header="Email Address"
                    sortable
                    filter
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                />
                <Column
                    field="sex"
                    header="Sex"
                    sortable
                    filter
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                />
                <Column
                    field="civil_status"
                    header="Civil Statuss"
                    sortable
                    filter
                    body={civilStatusBody}
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                />
                <Column
                    body={actionBodyTemplate}
                    exportable={false}
                    style={{
                        minWidth: "12rem",
                        display: "flex",
                        gap: "0.5rem",
                    }}
                ></Column>
            </DataTable>
        </div>
    );
}
