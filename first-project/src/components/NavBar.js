import React from 'react';
import './NavBar.css'; // We'll add some styles later

const NavBar = () => {
    return (
        <nav>
            <div className="logo">Cake Paradise</div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#cakes">Cakes</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#cart">Cart</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
