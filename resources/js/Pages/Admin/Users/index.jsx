import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import NavLink from "@/Components/NavLink.jsx";
import { router } from '@inertiajs/react'
export default function Index({ auth,users }) {

    const handleStatusUpdate = (userId, status) => {
        if (!confirm('Are you sure you want to update the status?')) {
            return;
        }
        router.post(route('admin.users.updateStatus', { user: userId }), { status })
    };

    const handleBlockStatusUpdate = (userId, is_blocked) => {
        if (!confirm('Are you sure you want to update the block status?')) {
            return;
        }
        router.post(route('admin.users.update-block-status', { user: userId }), { is_blocked })
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Employee List</h2>}
        >
            <Head title="Employee List" />



            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                  Employee  Name
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>

                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                  Is Blocked
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {
                                users?.length > 0 ? users.map((user) => (
                                        <tr key={user.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap text-sm capitalize leading-5 font-medium text-gray-900">
                                                {user?.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                {user?.email}
                                            </td>

                                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                <button
                                                    onClick={() => handleStatusUpdate(user.id, user.status === 1 ? 0 : 1)}>
                                                {
                                                    user.status === 1 ?
                                                        <span
                                                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            Active
                                                        </span> : <span
                                                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                            InActive
                                                        </span>
                                                }
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                <button
                                                    onClick={() => handleBlockStatusUpdate(user.id, user.is_blocked === 1 ? 0 : 1)}>
                                                    {
                                                        user.is_blocked === 0 ?
                                                            <span
                                                                className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            Unblock
                                                        </span> : <span
                                                                className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                            Blocked
                                                        </span>
                                                    }
                                                </button>
                                            </td>

                                        </tr>
                                )) :
                                <tr>
                                <td colSpan="4" className="text-center">No users found</td>
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
