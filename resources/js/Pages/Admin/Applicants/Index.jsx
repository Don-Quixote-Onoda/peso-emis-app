import AuthenticatedLayout from '../../../Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import ApplicantsTable from './Table';
import ViewApplicant from './View';
import { useForm } from '@inertiajs/react';
import EditApplicant from './Edit/Edit';
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { reverse } from 'lodash';
export default function Applicants(props) {

    const [applicants, setApplicants] = useState([]);
    const [applicant, setApplicant] = useState([]);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [type, setType] = useState('default');
    const { data, setData, post, get, reset, processing, errors } = useForm(applicant);

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    useEffect(() => {
        setApplicants(props.applicants);
        console.log(props.applicants);
        // console.log(applicants);
    });

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const viewApplicant = (applicant) => {
        setApplicant(applicant);
        setType('view');
    }

    const editApplicant = (applicant) => {
        setData(applicant);
        setType('edit');
    }

    const back = () => {
        setType('default');
        sessionStorage.clear();
    }

    const [deleteApplicantDialog, setDeleteApplicantDialog] = useState(false);
    const [hireApplicantDialog, setHireApplicantDialog] = useState(false);
    const submitHiredApplicantData = () => {
        console.log(data);
        post(route('hire-applicant'), {
            forceFormData: true,
            onSuccess: () =>{
                // console.log('success');
                reset();
                props.setDashBoardType('default');
                setHireApplicantDialog(false);
            },
            onError: () => {
                // console.log(errors);
            },
        });
    }

    const hireApplicant = (rowData) => {
        setData({"id": rowData.id});
        setHireApplicantDialog(true);
        
    }

    const confirmDeleteApplicant = (Applicant) => {
        setDeleteApplicantDialog(true);
        setData({"id": Applicant.id});
    };

    const hideDeleteApplicantDialog = () => {
        setDeleteApplicantDialog(false);
    };

    const deleteApplicant = () => {
        post(route('delete-applicant'), {
            forceFormData: true,
            onSuccess: () =>{
                reset();
                setType('default');
                console.log(type);

                setDeleteApplicantDialog(false);
            },
            onError: () => {
                // console.log(errors);
            },
        });
    }

    const deleteApplicantDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideDeleteApplicantDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={deleteApplicant}
            />
        </React.Fragment>
    );
    const hideHiredApplicantDialog = () => {
        setHireApplicantDialog(false);
    }

    const hiredApplicantDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideHiredApplicantDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={submitHiredApplicantData}
            />
        </React.Fragment>
    );

    const renderHeader = () => {
        return (
            <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
                <h4 className="m-0">Applicants</h4>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const header = renderHeader();

    useEffect(() => {
        console.log(props);
    })

    
    return (
        <>
            {
                props.isMatches == false && <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Applicants</h2>}
            >
                <Head title="EMIS - Applicants" />
                <div className=" mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {
                    type == 'default' && <ApplicantsTable applicants={applicants} 
                    confirmDeleteApplicant={confirmDeleteApplicant} 
                    viewApplicant={viewApplicant} editApplicant={editApplicant} isMatches={props.isMatches} />
                }
                {
                    type == 'view' && <ViewApplicant applicant={applicant} back={back} />
                }
                {
                    type== 'edit' && <EditApplicant applicant={applicant} data={data} setData={setData} back={back} />
                }
            </div>
            <Dialog
                    visible={deleteApplicantDialog}
                    style={{ width: "32rem" }}
                    breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                    header="Confirm"
                    modal
                    footer={deleteApplicantDialogFooter}
                    onHide={hideDeleteApplicantDialog}
                >
                    <div className="confirmation-content">
                        <i
                            className="pi pi-exclamation-triangle mr-3"
                            style={{ fontSize: "2rem" }}
                        />
                            <span>
                                Are you sure you want to delete this applicant? <b></b>?
                            </span>
                    </div>
                </Dialog>
            </AuthenticatedLayout>
            }
            {
                props.isMatches == true && <>
                {
                    type == 'default' && <ApplicantsTable applicants={applicants} 
                    confirmDeleteApplicant={confirmDeleteApplicant} 
                    viewApplicant={viewApplicant} editApplicant={editApplicant} handleHiredApplicantData={hireApplicant} />
                }
                {
                    type == 'view' && <ViewApplicant applicant={applicant} back={back} />
                }
                {
                    type== 'edit' && <EditApplicant applicant={applicant} data={data} setData={setData} back={back} />
                }
            <Dialog
                    visible={deleteApplicantDialog}
                    style={{ width: "32rem" }}
                    breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                    header="Confirm"
                    modal
                    footer={deleteApplicantDialogFooter}
                    onHide={hideDeleteApplicantDialog}
                >
                    <div className="confirmation-content">
                        <i
                            className="pi pi-exclamation-triangle mr-3"
                            style={{ fontSize: "2rem" }}
                        />
                            <span>
                                Are you sure you want to delete this applicant? <b></b>?
                            </span>
                    </div>
                </Dialog>

                <Dialog
                    visible={hireApplicantDialog}
                    style={{ width: "32rem" }}
                    breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                    header="Confirm"
                    modal
                    footer={hiredApplicantDialogFooter}
                    onHide={hideHiredApplicantDialog}
                >
                    <div className="confirmation-content">
                        <i
                            className="pi pi-exclamation-triangle mr-3"
                            style={{ fontSize: "2rem" }}
                        />
                            <span>
                                Are you sure you want to hire this applicant?
                            </span>
                    </div>
                </Dialog>
                </>
            }
        
        </>
    );
}
