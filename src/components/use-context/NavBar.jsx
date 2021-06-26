import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <i className="bi bi-bug" /> React App | useContext
                </NavLink>

                <div className="navbar-nav">
                    <NavLink
                        exact
                        to="/"
                        className="nav-link"
                        activeClassName="active"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        exact
                        to="/about"
                        className="nav-link"
                        activeClassName="active"
                    >
                        About
                    </NavLink>
                    <NavLink
                        exact
                        to="/login"
                        className="nav-link"
                        activeClassName="active"
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
