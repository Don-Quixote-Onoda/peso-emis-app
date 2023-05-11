import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout';
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
                    icon={`pi pi-${rowData.is_active == 0? 'times': 'check'}`}
                    rounded
                    outlined
                    severity={`${rowData.is_active == 0? 'danger': 'success'}`}
                    onClick={() => confirmDeleteJobPosting(rowData)}
                />
            </React.Fragment>
        );
    };

    const priceBodyTemplate = (rowData) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'PHP',
          
            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
          });
          console.log();
        return <>{formatter.format(rowData.salary)}</>;
    };


    const isActiveStatus = (rowData) => {
        return (
            <span>{rowData.is_active == 1? 'Active': 'Not Active'}</span>
        );
    };

    const removeComma = (rowData) => {
        console.log(rowData);
        return (
            <>{rowData.nature_of_work.replace(", ", " ")}</>
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
                            body={removeComma}
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
                            body={priceBodyTemplate}
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
                            field="is_active"
                            header="Active Status"
                            sortable
                            filter
                            filterPlaceholder="Search by name"
                            style={{ minWidth: "14rem" }}
                            body={isActiveStatus}
                        />
                        <Column
                body={actionBodyTemplate}
                exportable={false}
                style={{ minWidth: "10rem", display: "flex", gap: "0.5rem" }}
            ></Column>
                    </DataTable>
    );
}
