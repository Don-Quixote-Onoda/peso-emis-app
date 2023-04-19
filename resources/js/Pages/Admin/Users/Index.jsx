import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import UsersTable from './Table';
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import ViewUser from './ViewUser';
import { useForm } from '@inertiajs/react';

export default function Users(props) {

    const [users, setUsers] = useState([]);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [view, setView] = useState(false);
    const [edit, setEdit] = useState(false);
    const [deleteUserDialog, setDeleteUserDialog] = useState(false);
    const [type, setType] = useState('');
    const { data, setData, post, get, reset, processing, errors } = useForm();

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    useEffect(() => {
        setUsers(props.users);
        setType(props.type);
    },[]);

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const viewUser = (user) => {
        setType('view');
        setData('user_id', 5);
        // get('/api/users/5', {
        //     forceFormData: true,
        //     onSuccess: () =>{
        //         reset();
        //     },
        //     onError: () => {
        //     },
        // });
    };

    const editUser = (user) => {
        setType('edit');
    };

    const confirmDeleteUser = (user) => {
        setDeleteUserDialog(true);
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

    const hideDeleteUserDialog = () => {
        setDeleteUserDialog(false);
    };

    const deleteUser = () => {
       
        // post("api/delete_user", {
        //     onSuccess: () =>{
        //         setDeleteUserDialog(false);
        //         reset()
        //     },
        // });
    };

    const deleteUserDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideDeleteUserDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={deleteUser}
            />
        </React.Fragment>
    );

    const header = renderHeader();
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
        >
            <Head title="users" />
            <div className="mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {
                type == 'default' && <UsersTable users={users} editUser={editUser} viewUser={viewUser} confirmDeleteUser={confirmDeleteUser} />
            }
            {
                type == 'view' && <ViewUser />
            }
            <Dialog
                visible={deleteUserDialog}
                style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deleteUserDialogFooter}
                onHide={hideDeleteUserDialog}
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
        </div>
        </AuthenticatedLayout>
    );
}
