import React, { useEffect } from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from "primereact/button";

export default function ViewUser({back, user}) {
    useEffect(() => {
        console.log(user);
    });
    return (
        <div className="card my-5 w-2/4 mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between">
                            <h4 class="card-title fw-bold">
                                View User
                            </h4>
                            <Button
                                icon="pi pi-arrow-left"
                                className="mr-2"
                                label="Back"
                                onClick={() => back()}
                            />
                        </div>
            <form >
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={user.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        disabled
                    />

                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={user.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        disabled
                    />

                </div>

            </form>
        </div>
    );
}
