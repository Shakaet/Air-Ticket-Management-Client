import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    // Fetch user data
    const fetchUsers = async () => {
        const { data } = await axios.get("https://air-ticket-server-xi.vercel.app/users");
        return data;
    };

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });

    // Handle role update
    const handleRoleChange = async (userId,newRole) => {
        // console.log(userId,newRole)
        try {
            const res = await axios.patch(`https://air-ticket-server-xi.vercel.app/users/${userId}`,{role:newRole});
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    title: "Success!",
                    text: `User role updated to ${newRole}`,
                    icon: "success",
                });
                refetch(); // Refresh user data
            }
        } catch (error) {
            console.error("Error updating role:", error);
            Swal.fire({
                title: "Error!",
                text: "Failed to update user role",
                icon: "error",
            });
        }
    };

    if (isLoading) return <p className="text-center text-xl">Loading...</p>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold text-center mb-4">Manage Users</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                    <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                        <tr className="text-left">
                            <th className="px-6 py-3 border-b">Name</th>
                            <th className="px-6 py-3 border-b">Email</th>
                            <th className="px-6 py-3 border-b">Role</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user) => (
                            <tr key={user._id} className="border-b">
                                <td className="px-6 py-3">{user.user_name}</td>
                                <td className="px-6 py-3">{user.user_email}</td>
                                <td className="px-6 py-3">
                                    <select
                                        value={user.role}
                                        onChange={(e) => handleRoleChange(user._id,e.target.value)}
                                        className="border p-2 rounded-md"
                                    >
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
