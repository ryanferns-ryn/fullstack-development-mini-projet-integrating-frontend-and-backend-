import { useState } from 'react';

function Account({ user, setUser }) {

    const [mode, setMode] = useState('login');

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const [message, setMessage] = useState('');


    function handleChange(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }


    // REGISTER
    async function register() {

        if (
            !form.name ||
            !form.email ||
            !form.phone ||
            !form.password
        ) {

            setMessage('Please fill in all fields.');

            return;

        }


        try {

            const response = await fetch('/api/register', {

                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(form)

            });


            const data = await response.json();


            if (!response.ok) {

                setMessage(
                    data.message ||
                    data.error ||
                    'Registration failed.'
                );

                return;

            }


            setMessage(
                'Registration successful. Please login.'
            );


            setMode('login');


            setForm({
                name: '',
                email: form.email,
                phone: '',
                password: ''
            });


        } catch (error) {

            setMessage(
                'Unable to connect to server.'
            );

        }

    }


    // LOGIN
    async function login() {

        if (!form.email || !form.password) {

            setMessage(
                'Please enter your email and password.'
            );

            return;

        }


        try {

            const response = await fetch('/api/login', {

                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({

                    email: form.email,
                    password: form.password

                })

            });


            const data = await response.json();


            if (!response.ok) {

                setMessage(
                    'Invalid email or password.'
                );

                return;

            }


            setUser(data.user);

            setMessage('Login successful.');


        } catch (error) {

            setMessage(
                'Unable to connect to server.'
            );

        }

    }


    // LOGOUT
    function logout() {

        setUser(null);

        setForm({
            name: '',
            email: '',
            phone: '',
            password: ''
        });

        setMessage('');

    }


    // LOGGED-IN SCREEN
    if (user) {

        return (

            <div className="account page">

                <h1>Welcome, {user.name}</h1>

                <p>
                    You are logged in successfully.
                </p>

                <p>
                    <strong>Email:</strong> {user.email}
                </p>

                <p>
                    <strong>Phone:</strong> {user.phone}
                </p>

                <button
                    className="logout-button"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        );

    }


    return (

        <div className="account page">

            <h1>
                {mode === 'login'
                    ? 'Login'
                    : 'Create Account'}
            </h1>


            {mode === 'register' && (

                <>
                    <label>Name</label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                    />


                    <label>Phone</label>

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                    />
                </>

            )}


            <label>Email</label>

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />


            <label>Password</label>

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
            />


            {mode === 'login' ? (

                <button onClick={login}>
                    Login
                </button>

            ) : (

                <button onClick={register}>
                    Register
                </button>

            )}


            <button
                className="secondary-button"
                onClick={() => {

                    setMode(
                        mode === 'login'
                            ? 'register'
                            : 'login'
                    );

                    setMessage('');

                    setForm({
                        name: '',
                        email: '',
                        phone: '',
                        password: ''
                    });

                }}
            >

                {mode === 'login'
                    ? 'Create New Account'
                    : 'Already Have an Account?'}

            </button>


            {message && (

                <p className="message">
                    {message}
                </p>

            )}

        </div>

    );

}

export default Account;