import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';

export default function JobPostingTable({
    employers,
    confirmDeleteJobPosting,
    viewJobPosting,
    editJobPosting,
    addNew
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

    return (
             <DataTable
                        value={employers}
                        paginator
                        header={header}
                        rows={10}
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
    );
}
