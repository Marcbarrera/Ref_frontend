import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ModalSignin from './ModalSignin';

 

const Navbar = ({children}) => {
    const nav = () => (
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link to="/" className="text-light nav-link">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/signup" className="text-light nav-link">
                    Signup
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/caca" className="text-light nav-link">
                    Caca
                </Link>
            </li>
            <li>
               <ModalSignin>
                    <Link to="/signup">
                      Signup
                    </Link>
                </ModalSignin>
            </li>
        </ul>
    )
    return (
        <>
            {nav()}
            <div className="container">
                {children}
            </div>  
        </>
    )
}

export default Navbar;