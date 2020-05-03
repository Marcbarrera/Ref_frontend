import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import Activate from './auth/Activate';
import Private from './core/Private';
import Writeapost from './Pages/Writeapost';
import PrivateRoute from './auth/PrivateRoute'


// import ModalSignin from './ModalSignup'
// import ModalSignup from './ModalSignup';


const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/categories" exact component={Signup}/>
                <Route path="/newestpost" exact component={Signup}/>
                <Route path="/bestpost" exact component={Signup}/>
                <Route path="/writeapost" exact component={Writeapost}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/auth/activate/:token" exact component={Activate}/>
                {/* <Route path="/signup" exact component={ModalSignin}/>
                <Route path="/signup" exact component={ModalSignup}/> */}
                <PrivateRoute path="/private" exact component={Private}/>
            </Switch>
        </BrowserRouter>
 
        
    )
}

export default Routes; 