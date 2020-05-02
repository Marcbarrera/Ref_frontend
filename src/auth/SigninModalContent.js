import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Layout from '../core/Layout';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const SigninModalContent = () => {
    const [values, setValues] =useState({
        email:'',
        password:'',
        buttonText:'Submit'

    });

    const { email, password, buttonText} = values;

    const handleChange = name => (event) => {
        console.log(event.target.value);
        setValues({...values, [name]: event.target.value})
    }

    const clickSubmit = event => {
        event.preventDefault()
        setValues({...values, buttonText: 'Submitting'})
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signin`,
            data: {email, password}
        })
        .then(response => {
            console.log('SIGNIN SUCCESS', response);

            //save the response (user, token) localstorage/cookie
            setValues({...values, name:'', email:'', password:'', buttonText: 'Submitted'})
            toast.success(`Hola ${response.data.user.name}, Welcome back! :)`)
        })
        .catch(error => {
            console.log('SIGNIN ERROR, error.response.data')
            setValues({...values,buttonText: 'Submit'});
            toast.error(error.response.data.error);
        })
    };

    const signinForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control"/>
            </div>
 
            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>

    )


   return ( 
    <>
    <ToastContainer/>
    <h1 className="p-5 text-center">Log in</h1>
    {signinForm()}
</>

  )
};

export default SigninModalContent; 