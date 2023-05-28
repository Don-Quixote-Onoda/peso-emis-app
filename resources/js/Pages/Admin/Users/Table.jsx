import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import InputError from "../../../Components/InputError";
import InputLabel from "../../../Components/InputLabel";
import PrimaryButton from "../../../Components/PrimaryButton";
import TextInput from "../../../Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { Dropdown } from "primereact/dropdown";

export default function UsersTable({
    users,
    confirmDeleteUser,
    viewUser,
    editUser,
    setType,
}) {
    const [globalFilterValue, setGlobalFilterValue] = useState("");

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    const [addNewJobPostingDialog, setAddNewJobPostingDialog] = useState(false);
    const [activateAccountDialog, setActivateAccountDialog] = useState(false);

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters["global"].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const hideAddNewJobPostingDialog = () => {
        setAddNewJobPostingDialog(false);
    };

    const hideActivateAccount = () => {
        setActivateAccountDialog(false);
    };

    const renderHeader = () => {
        return (
            <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
                <h4 className="m-0">Users</h4>
                <div className="flex gap-2">
                    <Button
                        label="New"
                        icon="pi pi-plus"
                        className="p-button-help self-end"
                        onClick={() => setAddNewJobPostingDialog(true)}
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

    const activateAccountSubmit = () => {
        post(route('activate-user'), {
            onSuccess: () =>{
                reset()
                hideActivateAccount();
            },
        });
    }

    const activateAcountDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideActivateAccount}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={activateAccountSubmit}
            />
        </React.Fragment>
    );

    const deleteJobPostingDialogFooter = <React.Fragment></React.Fragment>;

    const userRoleTemplate = (rowData) => {
        return <span>{rowData.role == 1 ? "Admin" : "Employer"}</span>;
    };

    const activateAccount = (rowData) => {
        setActivateAccountDialog(true);
        setData(rowData);
    }
    const userActivatedTemplate = (rowData) => {
        console.log(rowData.is_activated);
        return (
            rowData.role == 0 ? (rowData.is_activated == 0 ? <Button label="Activate" onClick={e => activateAccount(rowData)} icon="pi pi-check" /> : <span>Active</span>) : <span>Active</span>
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
                    onClick={() => viewUser(rowData)}
                />
                <Button
                    icon="pi pi-pencil"
                    rounded
                    outlined
                    className="mr-2"
                    onClick={() => editUser(rowData)}
                />
               {
                (rowData.role == 0 && rowData.is_activated == 1) &&  <Button
                icon="pi pi-trash"
                rounded
                outlined
                severity="danger"
                onClick={() => confirmDeleteUser(rowData)}
            />
               }
            </React.Fragment>
        );
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: 1,
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("add-user"));
       setType('default');
        reset();
        hideAddNewJobPostingDialog();
    };

    const header = renderHeader();

    const [userRole, setUserRole] = useState(null);
    const roles = [
        { name: 'Administrator', value: 1 },
        { name: 'Employer', value:0 },
    ];
    return (
        <div className="card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <DataTable
                value={users}
                paginator
                header={header}
                rows={10}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                rowsPerPageOptions={[10, 25, 50]}
                dataKey="id"
                filters={filters}
                filterDisplay="menu"
                emptyMessage="No users found."
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            >
                <Column
                    field="name"
                    header="Username"
                    sortable
                    filter
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                />
                <Column
                    field="email"
                    header="Email Address"
                    sortable
                    filter
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                />
                <Column
                    field="role"
                    header="Role"
                    body={userRoleTemplate}
                    sortable
                    filter
                    filterPlaceholder="Search by name"
                    style={{ minWidth: "14rem" }}
                />
                <Column
                    field="is_activated"
                    header="Status (In Activation)"
                    body={userActivatedTemplate}
                    sortable
                    filter
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
            <Dialog
                visible={addNewJobPostingDialog}
                style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Add New"
                modal
                footer={deleteJobPostingDialogFooter}
                onHide={hideAddNewJobPostingDialog}
            >
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    {/* <div className="mt-4">
                        <InputLabel htmlFor="role" value="Role" />

                        <Dropdown value={data.role} onChange={(e) => setData('role', e.value)} options={roles} optionLabel="name" 
                editable placeholder="Select a Role" className="w-full md:w-14rem" required />

                        <InputError message={errors.role} className="mt-2" />
                    </div> */}

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ml-4" disabled={processing}>
                            Add
                        </PrimaryButton>
                    </div>
                </form>
            </Dialog>
            <Dialog
                visible={activateAccountDialog}
                style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Add New"
                modal
                footer={activateAcountDialogFooter}
                onHide={hideActivateAccount}
            >
                <h1>Are you sure you want to activate this account?</h1>
            </Dialog>
        </div>
    );
}
