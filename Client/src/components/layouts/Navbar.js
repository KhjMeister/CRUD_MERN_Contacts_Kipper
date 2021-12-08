import React,{ Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

 const Navbar = ({title }) => {
    const authContext =  useContext(AuthContext);
    const contactContext =  useContext(ContactContext);

    const {isAuthenticated,logout }= authContext;
    const {clearContacts }= contactContext;

    const onLogout = ()=> {
        logout();
        clearContacts();
    }

    const authLinks = (
        <Fragment>
            <a onClick={onLogout} className="nav-link hidden-sm-down waves-effect waves-dark" href="#!">
                <i className="fa fa-sign-out"></i>
            </a>
        </Fragment>
    );
    const guestLinks = (
        <Fragment>
           <Link className="nav-link hidden-sm-down waves-effect waves-dark" to="/login">
                <i className="fa fa-user"></i>
            </Link>
            <Link className="nav-link hidden-sm-down waves-effect waves-dark" to="/register">
                <i className="fa fa-users"></i>
            </Link>
        </Fragment>
    );

    return (
        <Fragment>
            <div className="topbar">
            <div className="navbar top-navbar navbar-expand-md navbar-light">
               
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                       
                            <img src="images/logo-icon.png" alt="homepage" className="dark-logo" />
                            
                            <img src="images/logo-light-icon.png" alt="homepage" className="light-logo" />
                        
                        
                        <span>
                         
                            <img src="images/logo-text.png" alt="homepage" className="dark-logo" />
                            
                            <img src="images/logo-light-text.png" className="light-logo" alt="homepage" />
                        </span> 
                    </Link>
                </div>
                
                <div className="navbar-collapse">
                    
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"> <Link className="nav-link nav-toggler hidden-md-up waves-effect waves-dark" to="/"><i className="fa fa-bars"></i></Link> </li>
                       
                        <li className="nav-item hidden-xs-down search-box"> 
                            {isAuthenticated ? authLinks : guestLinks}
                            
                        </li>
                    </ul>
                    
                    <ul className="navbar-nav my-lg-0">
                        
                        
                        <li className="nav-item dropdown u-pro">
                            
                           
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'مدیریت تماس ها'
}
export default Navbar
