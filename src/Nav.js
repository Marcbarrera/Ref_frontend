import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuth, signout } from './auth/Helpers';


const nav = () => (
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
            <Link to="/signinwrite" className="nav-link" style={ { color: '#fff' }}>
                write a post
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/signin" className="nav-link" style={ { color: '#fff' }}>
                Signin
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/signup" className="nav-link" style={ { color: '#fff' }}>
                Signup
            </Link>
        </li>
        
        
            
        
    </ul>

);
export default nav;