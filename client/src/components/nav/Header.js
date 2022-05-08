import React from 'react';
import './header.css'
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return <div className="navss">
        <nav className="navbar navbar-expand-lg header">
            <div className="container-fluid container headers">
                <NavLink to='/' id='link' className="navbar-brand" activeClassName="navbar__link--active">
                    <h4 className='ltd-name ps-lg-5'>महारानीझोडा साना किसान <br />कृषि सहकारी संस्था लि.</h4>
                    {/* <img alt="logo of co-operative ltd." height={75} width={75} /> */}
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <li onClick={() => window.location.reload('/')}>
                            <NavLink
                                exact
                                activeClassName="navbar__link--active"
                                className="navbar__link"
                                to="/"
                            >
                                गृहपृष्ठ
                            </NavLink>
                        </li>
                        <li onClick={() => window.location.reload('/हाम्रोबारे')}>
                            <NavLink
                                activeClassName="navbar__link--active"
                                className="navbar__link"
                                to="/हाम्रोबारे"
                            >
                                हाम्रोबारे
                            </NavLink>
                        </li>
                        <NavLink
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/हाम्रो-कामहरु"
                        >
                            हाम्रो कामहरु
                        </NavLink>
                        <NavLink
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/समाचार-कक्ष"
                        >
                            समाचार कक्ष
                        </NavLink>
                        <NavLink
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/घोषणाहरु"
                        >
                            घोषणाहरु
                        </NavLink>

                        <NavLink
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/डाउनलोड"
                        >
                            डाउनलोड
                        </NavLink>

                        <NavLink
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/दाता-साझेदार"
                        >
                            दाता साझेदार
                        </NavLink>

                        {/* <div className="dropdown">
                        <NavLink
                            activeClassName="navbar__link--active"
                            className="navbar__link dropdown-toggle"
                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                            to="/"
                        >
                            Products
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link to='/' className="dropdown-item text-dark" href="#"></Link></li>
                        </ul>
                    </div> */}
                        {/* <div className="msocial-icon d-flex">
                        <li><a href="https://www.facebook.com/airawatiprakashan/" target='_blank' rel="noreferrer"><i className="fab fa-facebook-f" /></a></li>
                        <li><i className="fab fa-twitter" /></li>
                        <li><i className="fab fa-linkedin-in" /></li>
                    </div>
                    <div className="social-icon">
                        <li><a href="https://www.facebook.com/airawatiprakashan/" target='_blank' rel="noreferrer"><i className="fab fa-facebook-f" /></a></li>
                        <li><i className="fab fa-twitter" /></li>
                        <li><i className="fab fa-linkedin-in" /></li>
                    </div> */}
                    </div>
                </div>
            </div>
        </nav>
    </div>;
};

export default Header;
