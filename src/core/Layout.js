import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuth, signout } from '../auth/Helpers';
import Header from '../Header';
import Nav from '../Nav'
import Nav2 from '../Nav2'
import ModalSignin from '../ModalSignin';

const Layout = ({ children, match, history }) => {
    
    return (
        <>
        <Header/>
        {!isAuth() ? <Nav/> : <Nav2/>}
        <div className="container">
            {children}
        </div>  
        </>
    );
};

export default withRouter(Layout);

// import React, {Fragment} from 'react';
// import {Link, withRouter} from 'react-router-dom';
// import Header from '../Header';
// import ModalSignin from '../ModalSignin';
// import { isAuth, signout } from '../auth/Helpers';

// import ModalSignup from '../ModalSignup';

// //important importar link per a que la pagina nomes recarregui allò que canvia. Sinó actualitza tota la pàgina.

// const Layout = ({children, history}) => {
//     const nav = () => (
//         <ul className="nav nav-tabs bg-primary">
//             <li className="nav-item">
//                 <Link to="/" className="text-light nav-link">
//                     Home
//                 </Link>
//             </li>
//             {!isAuth() && (
//                 <Fragment>
//                    <li className="nav-item">
//                    <Link to="/signin" className="text-light nav-link">
//                        Signin
//                    </Link>
//                </li>
//                <li className="nav-item">
//                    <Link to="/signup" className="text-light nav-link">
//                        Signup
//                    </Link>
//                </li>
               
//                </Fragment>
//             )}

//             {isAuth() && (
//                <li className="nav-item">
//                 <span
//                  className="nav-link"
//                  style={{ cursor: 'pointer', color: '#fff' }}
//                   onClick= {() => {
//                     signout(() => {
//                         history.push('/');
//                     });
//                 }
//                 }>
//                     Signout
//                 </span>
//                </li>

//             )}
//                 <li>
//                <ModalSignin>Signin</ModalSignin>
//                </li>
//                {!isAuth() && (
//                 <Fragment>
               
//                <li>
//                <ModalSignup>Signup</ModalSignup>
//                </li>
//                </Fragment>
//                )}


            
//         </ul>
//     )
//     return (
//         <>
//         <Header/>
//             {nav()}
//             <div className="container">
//                 {children}
//             </div>  
//         </>
//     )
// }

// export default Layout;