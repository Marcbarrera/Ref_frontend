import React from 'react';
import Layout from './Layout';
import { isAuth, signout } from '../auth/Helpers';
import {Link, Redirect,} from 'react-router-dom';



const Private = () => (
    <>

    <Layout>
    <div className="col-md-6 offset-md-3">

    <h1 className="p-5 text-center">Private Page</h1>

    </div>
</Layout>
</>
)

export default Private;