import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header';
import ModalSignin from '../ModalSignin'

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
            <ModalSignin></ModalSignin>
   
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