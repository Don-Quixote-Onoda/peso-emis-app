import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';

export default function EmployersTable({
    employers,
    confirmDeleteEmployer,
    viewEmployer,
    editEmployer
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

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-eye"
                    rounded
                    outlined
                    className="mr-2"
                    onClick={() => viewEmployer(rowData)}
                />
                <Button
                    icon="pi pi-pencil"
                    rounded
                    outlined
                    className="mr-2"
                    onClick={() => editEmployer(rowData)}
                />
                <Button
                    icon="pi pi-trash"
                    rounded
                    outlined
                    severity="danger"
                    onClick={() => confirmDeleteEmployer(rowData)}
                />
            </React.Fragment>
        );
    };

    const header = renderHeader();

    return (
        <div className="card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <DataTable value={employers} paginator header={header} rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    rowsPerPageOptions={[10, 25, 50]} dataKey="id" 
                    filters={filters} filterDisplay="menu"
                    emptyMessage="No customers found." currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="establishment_name" header="Establishment Accronym" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                <Column field="employer_type" header="Employer Type" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                <Column field="line_of_business" header="Line of Business" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                <Column field="total_work_force" header="Total Work Force" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
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
