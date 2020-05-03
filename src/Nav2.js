
import React, { Fragment } from 'react';
import { Link, withRouter, onClick } from 'react-router-dom';
import { isAuth, signout } from './auth/Helpers';



const nav2 = ({children, match, history}) => (

    
    <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
            <Link to="/categories" className="nav-link" style={ { color: '#fff' }} >
                Categories
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/newestposts" className="nav-link" style={ { color: '#fff' }} >
                Newest Posts
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/bestposts" className="nav-link" style={ { color: '#fff' }} >
                Best Posts
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/writeapost" className="nav-link" style={{  color: '#fff' }} >
                write a post
            </Link>
        </li>
        <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: 'pointer', color: '#fff' }}
                        onClick={() => {
                            signout(() => {
                                history.push('/');
                            });
                        }}
                    >
                        Signout
                    </span>
                </li>
            <li className="nav-item">
                <span className="nav-link" style={ { color: '#fff' }} >{isAuth().name}</span>
            </li>
    </ul>
);


export default withRouter (nav2);