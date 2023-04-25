import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState, useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

export default function Edit({back, user, data, setData, processing, errors, reset, post}) {

    

    useEffect(() => {
        console.log(data);
    })

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);
    const submit = (e) => {
        e.preventDefault();
        post(route('update-user'), {
            onSuccess: () =>{
                back();
            },
            onError: () => {
                console.log(errors);
            },})
        
    };

    const roles = [
        { name: 'Administrator', value: 1 },
        { name: 'Employer', value:0 },
    ];

    return (
        <div className="card my-5 w-2/4 mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between">
                            <h4 class="card-title fw-bold">
                                Edit User
                            </h4>
                            <Button
                                icon="pi pi-arrow-left"
                                className="mr-2"
                                label="Back"
                                onClick={() => back()}
                            />
                        </div>
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
                        onChange={(e) => setData('name', e.target.value)}
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
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div className="mt-4">
                        <InputLabel htmlFor="role" value="Role" />

                        <Dropdown value={data.role} onChange={(e) => setData('role', e.value)} options={roles} optionLabel="name" 
                editable placeholder="Select a Role" className="w-full md:w-14rem" required />

                        <InputError message={errors.role} className="mt-2" />
                    </div>
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Save
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}
