import React,{ Fragment,useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';


export const Sidbar = ({title }) => {
    const authContext =  useContext(AuthContext);

    const {isAuthenticated,logout }= authContext;

    const onLogout = ()=> {
        logout();
    }
    const authLinks = (
        <Fragment>
            <li> <Link className="waves-effect waves-dark" to="/" aria-expanded="false"><i className="fa fa-tachometer"></i><span className="hide-menu">داشبرد</span></Link>
            </li>
            <li> <Link className="waves-effect waves-dark" to="/contacts" aria-expanded="false"><i className="fa fa-user-circle-o"></i><span className="hide-menu">مدیریت مخاطبین</span></Link>
            </li>
            <li> <Link className="waves-effect waves-dark" to="/profile" aria-expanded="false"><i className="fa fa-table"></i><span className="hide-menu">پروفایل</span></Link>
            </li>
            <li> <a className="waves-effect waves-dark" href="#!" aria-expanded="false" onClick={onLogout}><i className="fa fa-sign-out"></i><span className="hide-menu">خروج</span></a>
            </li>
        </Fragment>
    );
    const guestLinks = (
        <Fragment>
            <li> <Link className="waves-effect waves-dark" to="/login" aria-expanded="false"><i className="fa fa-smile-o"></i><span className="hide-menu">ورود  </span></Link>
            </li>
            <li> <Link className="waves-effect waves-dark" to="/register" aria-expanded="false"><i className="fa fa-globe"></i><span className="hide-menu">ثبت نام </span></Link>
            </li>
        </Fragment>
    );
    return (
        <Fragment>
            <aside className="left-sidebar">
            
            <div className="scroll-sidebar">
                
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        {isAuthenticated ? authLinks : guestLinks}
                        
                        
                       
                    </ul>
                    
                </nav>
                
            </div>
            
        </aside>
        </Fragment>
    )
}

Sidbar.propTypes = {
    title:PropTypes.string.isRequired
}
Sidbar.defaultProps = {
    title: 'مدیریت تماس ها'
}
export default Sidbar
