import React, { useState, useRef, useEffect } from "react";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import InputError from '../../../Components/InputError';
import InputLabel from '../../../Components/InputLabel';
import PrimaryButton from '../../../Components/PrimaryButton';
import TextInput from '../../../Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function RegisterEmployer({
    activeIndex,
    numberOfPage,
    setActiveIndex,
    counterPrevious,
}) {

    const [username, setUsername] = useSessionStorage(
        sessionStorage.getItem("username"),
        "username"
    );
    const [email, setEmail] = useSessionStorage(
        sessionStorage.getItem("email"),
        "email"
    );

    const [password, setPassword] = useSessionStorage(
        sessionStorage.getItem("password"),
        "password"
    );

    const [confirmPassword, setConfirmPassword] = useSessionStorage(
        sessionStorage.getItem("confirmPassword"),
        "confirmPassword"
    );

    const [userrole, setUserrole] = useSessionStorage(
        sessionStorage.getItem("userrole"),
        "userrole"
    );

    const [isSubmitted, setSubmitted] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: 1
    });

    const submit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if(password === confirmPassword) 
            setActiveIndex(activeIndex + 1);
    };

    return (
        <form className="w-50 mx-auto mt-5" onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={username}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    {
                        isSubmitted && <InputError message={errors.name} className="mt-2" />
                    }
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setEmail( e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={confirmPassword}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setConfirmPassword( e.target.value)}
                        required
                    />

                    {
                        (password !== confirmPassword && isSubmitted) && <InputError message="Password don't match!" className="mt-2" />
                    }
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Next
                    </PrimaryButton>
                </div>
            </form>
    );
}
