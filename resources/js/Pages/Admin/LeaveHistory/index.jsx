import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, router, usePage} from '@inertiajs/react';
import NavLink from "@/Components/NavLink.jsx";
import {useEffect, useState} from "react";

export default function Index({ auth,leaveRequests}) {
    const handleFilter = (status) => {
        router.get(route('admin.leave-requests.index'), { status })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Leave History</h2>}
        >
            <Head title="Leave History " />




            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-4">
                            <button
                                onClick={() => handleFilter('all')}>
                                    <span
                                        className="px-3 py-1 m-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-200 text-indigo-800">
                                        All
                                     </span>
                            </button>
                            <button
                                onClick={() => handleFilter('approved')}>
                                    <span
                                        className="px-3 py-1 m-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800">
                                        Approve
                                     </span>
                            </button>
                            <button
                                onClick={() => handleFilter('rejected')}>
                                    <span
                                        className="px-3 py-1 m-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800">
                                        Rejected
                                     </span>
                            </button>
                            <button
                                onClick={() => handleFilter('pending')}>
                                    <span
                                        className="px-3 py-1 m-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-200 text-yellow-800">
                                        Pending
                                     </span>
                            </button>
                        </div>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Employee Name
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Leave Type
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Leave Start Date
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Leave End Date
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Reason
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Admin Comment
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">

                            {
                                leaveRequests.length > 0 ? leaveRequests?.map((leaveRequest) => (
                                        <tr key={leaveRequest.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap text-sm capitalize leading-5 font-medium text-gray-900">
                                                {leaveRequest?.user?.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap text-sm capitalize leading-5 font-medium text-gray-900">
                                                {leaveRequest.type} Leave
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                {leaveRequest.start_date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                {leaveRequest.end_date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                {leaveRequest.reason}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                {
                                                    leaveRequest.status === 'pending' ?
                                                        <span
                                                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                        Pending
                                                    </span> :
                                                        leaveRequest.status === 'approved' ?
                                                            <span
                                                                className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            Approved
                                                        </span> : leaveRequest.status === 'rejected' ?
                                                                <span
                                                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                            Rejected
                                                        </span> : ''
                                                }
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                {leaveRequest?.admin_comment}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                <NavLink href={route('admin.leave-requests.edit', leaveRequest?.id)}>
                                                    Edit
                                                </NavLink>

                                            </td>
                                        </tr>
                                    )) :
                                    <tr>
                                        <td colSpan="8" className="text-center">No leave requests found</td>
                                    </tr>
                            }


                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
