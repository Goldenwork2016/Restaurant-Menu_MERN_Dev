import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NavItems = (props)=>{
    return(
        <>
        <Link to="/home#top" class="fw-bold mx-4 text-dark-1 pb-1 pt-1">
            Home
        </Link>
        <br></br>
        <Link to="/home#trending" class="fw-bold mx-4 text-dark-1 pb-1 pt-1">
            Collection Saint-Valentin
        </Link>
        <br></br>
        <Link to="/home#all" class="fw-bold mx-4 text-dark-1 pb-1 pt-1">
            Products
        </Link>
        <br></br>
        <Link to="/home#about-us" class="fw-bold mx-4 text-dark-1 pb-1 pt-1">
            About
        </Link>
        <br></br>
        <Link to="/home#faq" class="fw-bold mx-4 text-dark-1 pb-1 pt-1 disabled">
            FAQ
        </Link>
        <br></br>
        </>
    )
}

export default NavItems