import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import UsersTable from './Table';
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

export default function ViewUser(props) {

    const [user, setUser] = useState([]);

    return (
        <div className="card my-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            Test
        </div>
    );
}
