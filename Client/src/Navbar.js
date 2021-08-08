import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Combined.css';
import { Link } from 'react-router-dom';
// import GoogleLogin from './GoogleLogin';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light navbarCustom">
                <div class="container-fluid">
                    <Link class="navbar-brand logo" to="/">4Sale</Link >
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 e">
                            <div className="container d-flex justify-content:space-around">
                                <li class="nav-item navBarItems">
                                    <Link class="nav-link active navBarItems" id="homeTab" aria-current="page" to="/">Home</Link >
                                </li>
                                <li class="nav-item navBarItems">
                                    <Link class="nav-link active navBarItems" aria-current="page" to="/sell">Sell</Link >
                                </li>
                                <li class="nav-item navBarItems">
                                    <Link class="nav-link active navBarItems" aria-current="page" to="/contact-us">Contact Us</Link >
                                </li>
                                <li class="nav-item navBarItems">
                                    <Link class="nav-link navBarItems" to="/about-us">About Us</Link >
                                </li>
                            </div>
                            <li class="nav-item dropdown">
                                <Link class="nav-link " to="#" id="navbarDropdown" role="button" aria-expanded="false">
                                    <label id="dropdownlabel">Categories</label>
                                </Link >
                            </li>
                            <li>
                                <select id="ddlist">
                                    <option value="allCategories">All Categories</option>
                                    <option value="sports">Sports</option>
                                    <option value="books">Books</option>
                                    <option value="games">Games</option>
                                    <option value="utilities">Utilities</option>
                                </select>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" id="navSearchBar" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" id="navSubmitBtn" type="submit">Search</button>
                        </form>
                    </div>
                    {/* <GoogleLogin /> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;