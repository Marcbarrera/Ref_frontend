import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header';
import ModalSignin from '../ModalSignin';
import ModalSignup from '../ModalSignup';

//important importar link per a que la pagina nomes recarregui allò que canvia. Sinó actualitza tota la pàgina.

const Layout = ({children}) => {
    const nav = () => (
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link to="/" className="text-light nav-link">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/signin" className="text-light nav-link">
                    Signin
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/signup" className="text-light nav-link">
                    Signup
                </Link>
            </li>
            <li>
            <ModalSignin>Signin</ModalSignin>
            </li>
            <li>
            <ModalSignup>Signup</ModalSignup>
            </li>
            
        </ul>
    )
    return (
        <>
        <Header/>
            {nav()}
            <div className="container">
                {children}
            </div>  
        </>
    )
}

export default Layout;