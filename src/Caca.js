import React, {useState} from 'react';
// import {Link, Redirect} from 'react-router-dom';
import Layout from '../src/core/Layout';
// import axios from 'axios';
// import {ToastContainer, toast} from 'react-toastify';
// import 'react-toastify/dist/ReacToastify.min.css';

const Caca = () => {
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
        </form>

    )


   return ( 
        <Layout>
            <h1>CACA</h1>
            {signupForm()}
        </Layout>
  )
};

export default Caca;