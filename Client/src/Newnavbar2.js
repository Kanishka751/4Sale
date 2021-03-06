import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Combined from './Combined.css';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';


const Newnavbar2 = () => {

    const textColor = {
        color: 'white',
        textDecoration: 'none'
    };
    const logoColor = {
        color: '#62c1ad',
        textDecoration: 'none'
    };

    return (
        <div>
            <nav class="navbar navbar-expand-xxl navbar-light navbarCustom">
                <div class="container-fluid">
                    <a class="navbar-brand logo" href="#"><Link to="/" style={logoColor}>4Sale</Link></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 e">
                            <div className="container d-flex justify-content:space-around">
                                <li class="nav-item navBarItems">
                                    <a class="nav-link active navBarItems" id="homeTab" aria-current="page" href="/"><Link to="/" style={textColor}>Home</Link></a>
                                </li>
                                <li class="nav-item navBarItems">
                                    <a class="nav-link active navBarItems" aria-current="page" href="#"><Link to="/sell" style={textColor}>Sell</Link></a>
                                </li>
                                <li class="nav-item navBarItems">
                                    <a class="nav-link active navBarItems" aria-current="page" href="#"><Link to="/contactUs" style={textColor}>Contact Us</Link></a>
                                </li>
                                <li class="nav-item navBarItems">
                                    <a class="nav-link navBarItems" href="#"><Link to="/aboutUs" style={textColor}>About Us</Link></a>
                                </li>
                            </div>
                            <li class="nav-item dropdown">
                                <a class="nav-link " href="#" id="navbarDropdown" role="button" aria-expanded="false">
                                    <label id="dropdownlabel">Categories</label>
                                </a>
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
                            <Link to="/login" style={{ textDecoration: 'none' }}><button class="btn btn-outline-warning" id="navSubmitBtn" type="LOGIN">Login</button></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Newnavbar2
