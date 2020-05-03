import React from 'react';
import Layout from '../core/Layout';
import { isAuth, signout } from '../auth/Helpers';
import {Link, Redirect,} from 'react-router-dom';



const NewestPosts = () => (
    <>
    
        <Layout>
        <div className="col-md-6 offset-md-3">

        <h1 className="p-5 text-center">Newest Posts</h1>

        </div>
        </Layout>
    </>
)

export default NewestPosts;
