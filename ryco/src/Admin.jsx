import { useEffect, useState } from 'react';

function Admin() {

    const [users, setUsers] = useState([]);

    const [selectedUser, setSelectedUser] = useState(null);

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const [message, setMessage] = useState('');


    // READ USERS
    async function loadUsers() {

        try {

            const response = await fetch('/api/users');

            const data = await response.json();

            setUsers(data);

        } catch (error) {

            setMessage(
                'Unable to load users.'
            );

        }

    }


    useEffect(() => {

        loadUsers();

    }, []);


    // SELECT USER FOR UPDATE
    function selectUser(user) {

        setSelectedUser(user);

        setForm({
            name: user.name,
            email: user.email,
            phone: user.phone,
            password: ''
        });

        setMessage('');

    }


    // FORM CHANGE
    function handleChange(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }


    // UPDATE USER
    async function updateUser() {

        if (
            !form.name ||
            !form.email ||
            !form.phone
        ) {

            setMessage(
                'Please fill in all user details.'
            );

            return;

        }


        try {

            const response = await fetch(
                '/api/user/' + selectedUser.id,
                {

                    method: 'PUT',

                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify({

                        name: form.name,
                        email: form.email,
                        phone: form.phone,
                        password: form.password

                    })

                }
            );


            const data = await response.json();


            if (!response.ok) {

                setMessage(
                    data.message ||
                    'Unable to update user.'
                );

                return;

            }


            setMessage(
                'User updated successfully.'
            );


            setSelectedUser(null);


            setForm({
                name: '',
                email: '',
                phone: '',
                password: ''
            });


            loadUsers();


        } catch (error) {

            setMessage(
                'Unable to connect to server.'
            );

        }

    }


    // DELETE USER
    async function deleteUser(id) {

        const confirmDelete =
            window.confirm(
                'Are you sure you want to delete this user?'
            );


        if (!confirmDelete) {

            return;

        }


        try {

            const response = await fetch(
                '/api/user/' + id,
                {
                    method: 'DELETE'
                }
            );


            const data = await response.json();


            setMessage(data.message);


            if (selectedUser?.id === id) {

                setSelectedUser(null);

            }


            loadUsers();


        } catch (error) {

            setMessage(
                'Unable to delete user.'
            );

        }

    }


    return (

        <div className="page">

            <h1>Admin Panel</h1>

            <p>
                Manage registered RealtyHub users.
            </p>


            {message && (

                <p className="message">
                    {message}
                </p>

            )}


            {/* UPDATE FORM */}

            {selectedUser && (

                <div className="account page">

                    <h2>Update User</h2>

                    <p>
                        Editing user ID:
                        {' '}
                        <strong>
                            {selectedUser.id}
                        </strong>
                    </p>


                    <label>Name</label>

                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />


                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />


                    <label>Phone</label>

                    <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                    />


                    <label>
                        New Password
                    </label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Leave blank to keep current password"
                        value={form.password}
                        onChange={handleChange}
                    />


                    <button onClick={updateUser}>
                        Update User
                    </button>


                    <button
                        className="secondary-button"
                        onClick={() => {

                            setSelectedUser(null);

                            setMessage('');

                        }}
                    >
                        Cancel
                    </button>

                </div>

            )}


            {/* USERS TABLE */}

            <div className="user-table-container">

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Name</th>

                            <th>Email</th>

                            <th>Phone</th>

                            <th>Actions</th>

                        </tr>

                    </thead>


                    <tbody>

                        {users.map((user) => (

                            <tr key={user.id}>

                                <td>
                                    {user.id}
                                </td>

                                <td>
                                    {user.name}
                                </td>

                                <td>
                                    {user.email}
                                </td>

                                <td>
                                    {user.phone}
                                </td>

                                <td>

                                    <button
                                        onClick={() =>
                                            selectUser(user)
                                        }
                                    >
                                        Update
                                    </button>


                                    <button
                                        className="delete-button"
                                        onClick={() =>
                                            deleteUser(user.id)
                                        }
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>


                {users.length === 0 && (

                    <p>
                        No registered users found.
                    </p>

                )}

            </div>

        </div>

    );

}

export default Admin;