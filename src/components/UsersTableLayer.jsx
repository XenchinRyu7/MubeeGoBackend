import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const UsersTableLayer = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersCollection = collection(db, 'users');
                const userSnapshot = await getDocs(usersCollection);
                const usersList = userSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setUsers(usersList);
                setLoading(false);

                // Initialize DataTable after data is loaded
                if (window.$ && window.$.fn.DataTable) {
                    const table = window.$("#usersTable").DataTable({
                        pageLength: 10,
                    });
                    return () => {
                        table.destroy();
                    };
                }
            } catch (error) {
                console.error("Error fetching users: ", error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const formatDate = (timestamp) => {
        if (!timestamp) return 'N/A';
        const date = timestamp.toDate();
        return date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZoneName: 'short'
        });
    };

    return (
        <div className="card basic-data-table">
            <div className="card-header">
                <h5 className="card-title mb-0">Users List</h5>
            </div>
            <div className="card-body">
                <table
                    className="table bordered-table mb-0"
                    id="usersTable"
                    data-page-length={10}
                >
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Premium Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.fullname || 'N/A'}</td>
                                <td>{user.email || 'N/A'}</td>
                                <td>{formatDate(user.createdAt)}</td>
                                <td>
                                    <span className={`bg-${user.isPremium ? 'success' : 'warning'}-focus text-${user.isPremium ? 'success' : 'warning'}-main px-24 py-4 rounded-pill fw-medium text-sm`}>
                                        {user.isPremium ? 'Premium' : 'Free'}
                                    </span>
                                </td>
                                <td>
                                    <Link
                                        to={`/view-profile/${user.id}`}
                                        className="w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center"
                                    >
                                        <Icon icon="iconamoon:eye-light" />
                                    </Link>
                                    <Link
                                        to={`/edit-user/${user.id}`}
                                        className="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
                                    >
                                        <Icon icon="lucide:edit" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
                                    >
                                        <Icon icon="mingcute:delete-2-line" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersTableLayer;
