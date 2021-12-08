import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/App.css';

import Navbar from './components/layouts/Navbar';
import Sidbar from './components/layouts/Sidbar';
import  Alerts  from "./components/layouts/Alerts";

import PrivateRoute from './components/routing/PrivateRoute';

import Dashboard from './components/pages/Dashboard';
import ContactsP from './components/pages/ContactsP';
import Profile from './components/pages/Profile';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';


if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  

    return (
      <AuthState>
        <ContactState>
          <AlertState>
            <Router>
            <div className="fix-header fix-sidebar card-no-border">
              <div id="main-wrapper">
                <Navbar />
                <Sidbar />
                
                <div className="page-wrapper">
                  <div className="container-fluid">
                    <Alerts />
                    <Switch>
                      <PrivateRoute exact path="/" component={Dashboard} />
                      <PrivateRoute exact path="/profile" component={Profile} />
                      <PrivateRoute exact path="/contacts" component={ContactsP} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/register" component={Register} />

                    </Switch>
                  </div>
                </div>

              </div>
            </div>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
    );
  
  
}

export default App;
