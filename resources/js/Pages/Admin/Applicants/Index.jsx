import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import ApplicantsTable from './Table';
import ViewApplicant from './View';
import { useForm } from '@inertiajs/react';
import EditApplicant from './Edit/Edit';

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
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Applicants</h2>}
        >
            <Head title="Applicants" />
            <div className="card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {
                type == 'default' && <ApplicantsTable applicants={applicants} 
                // confirmDeleteApplicant={confirmDeleteApplicant} 
                viewApplicant={viewApplicant} editApplicant={editApplicant} />
            }
            {
                type == 'view' && <ViewApplicant applicant={applicant} back={back} />
            }
            {
                type== 'edit' && <EditApplicant data={data} setData={setData} back={back} />
            }
        </div>
        </AuthenticatedLayout>
    );
}
