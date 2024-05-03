import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link, useForm, usePage} from '@inertiajs/react';
import NavLink from "@/Components/NavLink.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";
import Dropdown from "@/Components/Dropdown.jsx";
import {useEffect} from "react";

export default function edit({ auth }) {
    const {leaveRequest} = usePage().props;
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        status: leaveRequest?.status,
        admin_comment: leaveRequest?.admin_comment,
    });






    const submit = (e) => {
        e.preventDefault();
        patch(route('admin.leave-requests.update',leaveRequest.id));
    };






    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Leave Request Status Update</h2>}
        >
            <Head title="Leave Request Status"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {
                        recentlySuccessful && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                                 role="alert">
                                <strong className="font-bold">Success!</strong>
                                <span className="block sm:inline">Leave request Updated successfully.</span>
                            </div>
                        )
                    }

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="text-right p-2">
                            <a href={route('admin.leave-requests.index')}
                               className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">Back </a>
                        </div>
                        <div className="p-4">
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="status" value="Status"/>
                                    <select value={data.status}
                                            onChange={(e) => setData('status', e.target.value)}
                                            className="p-2 mt-1 w-full bg-white">
                                        <option value="">Select Status</option>
                                        <option value="approved">Approved</option>
                                        <option value="rejected">Rejected</option>
                                    </select>
                                    <InputError className="mt-2" message={errors.status}/>
                                </div>


                                <div>
                                    <InputLabel htmlFor="admin_comment" value="Admin Comment"/>

                                    <TextInput
                                        id="email"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.admin_comment}
                                        onChange={(e) => setData('admin_comment', e.target.value)}

                                    />

                                    <InputError className="mt-2" message={errors.admin_comment}/>
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
