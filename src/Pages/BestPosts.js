import React from 'react';
import Layout from '../core/Layout';
import { isAuth, signout } from '../auth/Helpers';
import {Link, Redirect,} from 'react-router-dom';



const BestPosts = () => (
    <>
    
        <Layout>
        <div className="col-md-6 offset-md-3">

        <h1 className="p-5 text-center">Best Posts</h1>

        </div>
        </Layout>
    </>
)

export default BestPosts;
