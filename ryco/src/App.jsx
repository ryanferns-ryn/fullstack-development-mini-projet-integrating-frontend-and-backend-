import { useState } from 'react';

import Home from './Home';
import About from './About';
import Properties from './Properties';
import Account from './Account';
import Admin from './Admin';

function App() {
    const [page, setPage] = useState('home');
    const [user, setUser] = useState(null);
    function showPage() {
        if (page === 'home') {
            return <Home setPage={setPage} />;
        }
        if (page === 'about') {
            return <About />;
        }
        if (page === 'properties') {
            return <Properties />;
        }
        if (page === 'account') {
            return (
                <Account
                    user={user}
                    setUser={setUser}
                />
            );
        }

        if (page === 'admin') {
            return <Admin />;
        }

    }
    return (

        <div>

            <nav className="navbar">

                <h2>RealtyHub</h2>

                <div className="nav-buttons">

                    <button onClick={() => setPage('home')}>
                        Home
                    </button>

                    <button onClick={() => setPage('about')}>
                        About
                    </button>

                    <button onClick={() => setPage('properties')}>
                        Properties
                    </button>

                    <button onClick={() => setPage('account')}>
                        Login / Register
                    </button>

                    <button onClick={() => setPage('admin')}>
                        Admin
                    </button>

                </div>
            </nav>
            <main>
                {showPage()}
            </main>
        </div>
    );
}
export default App;