import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { useEffect } from "react";

export default function Dashboard(props) {
    const [employers, setEmployers] = useState({});
    useEffect(() => {
        setEmployers(props.employers);
        console.log(props);
    })
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex flex-wrap" style={{gap: '1rem'}}>
                        {
                            employers.map((employer) => (
                                <a
                                class="relative hover:bg-stone-200 transition flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
                                href="#"
                                style={{
                                    'flex-basis': "calc(calc(100% / 4) - 1rem)",
                                }}
                            >
                                <div class="pt-4 text-gray-500">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAs0lEQVR4nO2XQQoCMRAE6+TXXR+q32gR9hQiJOKaxK2COWZJb89ME3jPBbgBDyCD6w5s+5262SYQkKKunwiZwYkU9bpTN5m0uhl94Sik4BSOtHDE2TSe/+rHFIKO1LG1VpqR/Mv6jULQkRiImOzrrN8WFIKO1BkdfDHZC0b/+ehIget3xxzBHKnjjKw0IzFHMBBja+HDap2t1YJC0JETt1YOfuFFIRV0BFtrrRn5xbJgWSFPw22Fit98xUkAAAAASUVORK5CYII=" />

                                    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                                        {employer.establishment_accronym}
                                    </h3>

                                    <p class="mt-2 hidden text-sm sm:block">
                                        {employer.establishment_name}
                                    </p>
                                </div>

                                <span class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
                                    4.3
                                </span>
                            </a>
                            ))
                        }
                           
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
