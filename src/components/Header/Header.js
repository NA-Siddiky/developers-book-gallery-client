import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Header.css'

const Header = () => {
    return (
        <div className="navbar navbar-expand-lg  container Header">
            <div className="container-fluid">
                <Link className="navbar-brand brandName" to="/">
                    <h4>Developers Book Gallery</h4>
                </Link>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
							</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/orders">
                                Orders
							</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">
                                Admin
							</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/deals">
                                Deals
							</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Login
							</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;