import React from 'react';
import Layout from '../core/Layout';
import { isAuth, signout } from '../auth/Helpers';
import {Link, Redirect,} from 'react-router-dom';



const Writeapost = () => (
    <>

    <Layout>
    <div className="col-md-6 offset-md-3">

    <h1 className="p-5 text-center">Write a post</h1>

    </div>
    </Layout>
</>
)

export default Writeapost;
