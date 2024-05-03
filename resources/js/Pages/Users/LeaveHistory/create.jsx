import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link, useForm} from '@inertiajs/react';
import NavLink from "@/Components/NavLink.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";
import Dropdown from "@/Components/Dropdown.jsx";
import {useEffect} from "react";

export default function create({ auth }) {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        type: '',
        start_date: '',
        end_date: '',
        reason: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('leave-history.store'));
    };

    useEffect(() => {
        if(recentlySuccessful){
           setData({
                type: '',
                start_date: '',
                end_date: '',
                reason: '',
           })
        }
    }, [recentlySuccessful]);





    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Leave Request</h2>}
        >
            <Head title="Leave Request Form"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {
                        recentlySuccessful && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                                 role="alert">
                                <strong className="font-bold">Success!</strong>
                                <span className="block sm:inline">Leave request submitted successfully.</span>
                            </div>
                        )
                    }

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="text-right p-2">
                            <a href={route('leave-history.index')}
                               className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">Back </a>
                        </div>
                        <div className="p-4">
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="type" value="Leave Type"/>
                                    <select value={data.type}
                                            onChange={(e) => setData('type', e.target.value)}
                                            className="p-2 mt-1 w-full bg-white">
                                        <option value=" ">Select Type</option>
                                        <option value="casual">Casual Leave</option>
                                        <option value="sick">Sick Leave</option>
                                        <option value="emergency">Emergency Leave</option>
                                    </select>
                                    <InputError className="mt-2" message={errors.type}/>
                                </div>

                                <div>
                                    <InputLabel htmlFor="start_date" value="Start Date"/>

                                    <TextInput
                                        id="start_date"
                                        type="date"
                                        className="mt-1 block w-full"
                                        value={data.start_date}
                                        onChange={(e) => setData('start_date', e.target.value)}
                                        required
                                    />

                                    <InputError className="mt-2" message={errors.start_date}/>
                                </div>
                                <div>
                                    <InputLabel htmlFor="end_date" value="Start Date"/>

                                    <TextInput
                                        id="end_date"
                                        type="date"
                                        className="mt-1 block w-full"
                                        value={data.end_date}
                                        onChange={(e) => setData('end_date', e.target.value)}
                                        required
                                    />

                                    <InputError className="mt-2" message={errors.end_date}/>
                                </div>

                                <div>
                                    <InputLabel htmlFor="reason" value="Reason"/>

                                    <TextInput
                                        id="email"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.reason}
                                        onChange={(e) => setData('reason', e.target.value)}
                                        required
                                    />

                                    <InputError className="mt-2" message={errors.reason}/>
                                </div>


                                <div className="flex items-center gap-4">
                                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-gray-600">Saved.</p>
                                    </Transition>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
