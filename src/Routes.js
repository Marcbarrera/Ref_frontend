import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Signup from './auth/Signup';
import Caca from './Caca';
import ModalSignin from './ModalSignin'

const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/caca" exact component={Caca}/>
                <Route path="/signin" exact component={ModalSignin}/>

            </Switch>
        </BrowserRouter>
 
        
    )
}

export default Routes; 