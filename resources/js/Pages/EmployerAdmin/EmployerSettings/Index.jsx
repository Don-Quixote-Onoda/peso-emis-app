import React, { useState, useEffect } from "react";
import EstablishmentContactDetails from "./EstablishmentContactDetails";
import EstablishmentDetails from "./EstablishmentDetails";
import AuthenticatedLayout from '../../../Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";

export default function Index(props) {
    const [employer, setEmployer] = useState([]);
    useEffect(() => {
        setEmployer(props.employers[0]);
        console.log(employer.employer_establishment_contact_detail);
    });

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Employer Settings
                </h2>
            }
        >
            <Head title="Employer Settings" />
            <div className="card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
           {
            employer &&  <EstablishmentDetails employer={employer}  />
           }
            </div>
            <div className="card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 mb-5">
            {
                employer.employer_establishment_contact_detail && <EstablishmentContactDetails employer={employer.employer_establishment_contact_detail}  />
            }
            </div>
            
        </AuthenticatedLayout>
    );
}

