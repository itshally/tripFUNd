import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';


import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';
import NotFound from '././components/NotFound/NotFound';
import App from './index';
import CalculateForm from './components/CalculateForm/CalculateForm';


const Routes = () => (
<BrowserRouter >
     <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/home" component={Welcome}/>
          <Route path="/login" component={Login}/>
          <Route path="/Signup" component={Signup}/>
          <Route path="*" component={NotFound}/>
          {/* <Route path="/CalculateForm" component={CalculateForm}/> */}
     </Switch>
</BrowserRouter>
);
export default Routes;