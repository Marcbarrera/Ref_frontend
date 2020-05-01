import React, {useState} from 'react';
import './SignupModal.css'
// import {Link, Redirect} from 'react-router-dom';
// import Layout from '../core/Layout';
// import axios from 'axios';
// import {ToastContainer, toast} from 'react-toastify';
// import Rabbit from '../Rabbit';
// import 'react-toastify/dist/ReacToastify.min.css';

const SignupModal = () => {
    const [values, setValues] =useState({
        name:"",
        email:'',
        password:'',
        buttonText:'Submit'

    });

    const {name, email, password, buttonText} = values;
    const handleChange = (name) => (event) => {
            //
    }

    const clickSubmit = event => {
        //
    }

    const signupForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control"/>
            </div>
 
            <div>
                <button className="btn btn-primary" onclick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>

    )


   return ( 
        <>
            <h3>Sign up</h3>

            {signupForm()}
        </>
  )
};

export default SignupModal;