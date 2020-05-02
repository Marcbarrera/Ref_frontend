import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ModalSignup from './ModalSignup';
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
            <li>
               <ModalSignin>
            
                </ModalSignin>
            </li>
            <li>
               <ModalSignup>
            
                </ModalSignup>
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