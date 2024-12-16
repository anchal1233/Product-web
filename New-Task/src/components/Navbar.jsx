import React from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router';



function Navbar() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    function handleLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.reload();
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            {token ? (
                                <>
                                    <li className="nav-item">
                                        <p className="h3 me-5 text-white">Welcome, {username}!</p>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/sign-up">
                                            Sign-Up
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            

            <div className="container d-flex justify-content-center align-items-center mydiv">
                {token ? (
                    <h1>Welcome To Dashboard</h1>
                ) : (
                    <h1 className="">This Is Landing Page</h1>
                )}
            </div>
        </>
    );
}

export default Navbar;
