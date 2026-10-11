function Home({ setPage }) {
    return (
        <div className="home">

            <section className="hero">

                <h1>Find Your Perfect Property</h1>

                <p>
                    Welcome to RealtyHub, a simple platform
                    to explore residential properties.
                </p>

                <button
                    className="main-button"
                    onClick={() => setPage('properties')}
                >
                    Explore Properties
                </button>

            </section>
            <section className="features">

                <div className="feature-card">

                    <h3>Wide Selection</h3>

                    <p>
                        Explore different residential properties
                        available on RealtyHub.
                    </p>

                </div>


                <div className="feature-card">

                    <h3>Great Locations</h3>

                    <p>
                        Find properties located in convenient
                        and attractive areas.
                    </p>

                </div>
                <div className="feature-card">

                    <h3> User Account</h3>

                    <p>
                        Create an account and manage your
                        personal information.
                    </p>

                </div>

            </section>

        </div>
    );
}
export default Home;