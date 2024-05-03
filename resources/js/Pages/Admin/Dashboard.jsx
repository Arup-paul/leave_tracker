import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth,totalLeaveRequest,pendingLeaveRequests,approvedLeaveRequests,rejectedLeaveRequests }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                                        Total Leave Requests
                                    </dt>
                                    <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                        { totalLeaveRequest }
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                                        Approved Leave Requests
                                    </dt>
                                    <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                        { approvedLeaveRequests }
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                                        Pending Leave Requests
                                    </dt>
                                    <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                        {pendingLeaveRequests }
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                                        Reject Leave Requests
                                    </dt>
                                    <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                        {rejectedLeaveRequests }
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
