import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function UsersTable({users, confirmDeleteUser, viewUser, editUser}) {

    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
  
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
                <h4 className="m-0">Users</h4>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const userRoleTemplate = (rowData) => {
        return (
            <span>{rowData.role == 1 ? 'Admin' : 'Employer'}</span>
        )
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-eye"
                    rounded
                    outlined
                    className="mr-2"
                    onClick={() => viewUser(rowData)}
                />
                <Button
                    icon="pi pi-pencil"
                    rounded
                    outlined
                    className="mr-2"
                    onClick={() => editUser(rowData)}
                />
                <Button
                    icon="pi pi-trash"
                    rounded
                    outlined
                    severity="danger"
                    onClick={() => confirmDeleteUser(rowData)}
                />
            </React.Fragment>
        );
    };

    const header = renderHeader();
    return (
        
            <DataTable value={users} paginator header={header} rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    rowsPerPageOptions={[10, 25, 50]} dataKey="id" 
                    filters={filters} filterDisplay="menu"
                    emptyMessage="No users found." currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                <Column field="name" header="Username" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                <Column field="email" header="Email Address" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                <Column field="role" header="Role" body={userRoleTemplate} sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                <Column
                body={actionBodyTemplate}
                exportable={false}
                style={{ minWidth: "12rem", display: "flex", gap: "0.5rem" }}
            ></Column>
            </DataTable>
       
    );
}
