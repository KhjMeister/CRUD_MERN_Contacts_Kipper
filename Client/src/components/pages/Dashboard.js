import React, { Fragment, useContext, useEffect} from 'react'
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

 const Dashboard = () => {
    const authContext =  useContext(AuthContext);
    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            <div className="row">
                    
                    <div className="col-lg-6 col-md-12">
                        <div className="card card-body mailbox">
                            <h5 className="card-title">Notification</h5>
                            <div className="message-center ps ps--theme_default ps--active-y" data-ps-id="a045fe3c-cb6e-028e-3a70-8d6ff0d7f6bd">
                                
                                <Link to="#">
                                    <div className="btn btn-danger btn-circle"><i className="fa fa-link"></i></div>
                                    <div className="mail-contnet">
                                        <h5>Luanch Admin</h5> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span> </div>
                                </Link>
                                
                                <Link to="#">
                                    <div className="btn btn-success btn-circle"><i className="fa fa-calendar-check-o"></i></div>
                                    <div className="mail-contnet">
                                        <h5>Event today</h5> <span className="mail-desc">Just a reminder that you have event</span> <span className="time">9:10 AM</span> </div>
                                </Link>
                                
                                <Link to="#">
                                    <div className="btn btn-info btn-circle"><i className="fa fa-cog"></i></div>
                                    <div className="mail-contnet">
                                        <h5>Settings</h5> <span className="mail-desc">You can customize this template as you want</span> <span className="time">9:08 AM</span> </div>
                                </Link>
                                
                                <Link to="#">
                                    <div className="btn btn-primary btn-circle"><i className="fa fa-user"></i></div>
                                    <div className="mail-contnet">
                                        <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Feeds</h5>
                                <ul className="feeds">
                                    <li>
                                        <div className="bg-light-info"><i className="fa fa-bell-o"></i></div> You have 4 pending tasks. <span className="text-muted">Just Now</span></li>
                                    <li>
                                        <div className="bg-light-success"><i className="fa fa-server"></i></div> Server #1 overloaded.<span className="text-muted">2 Hours ago</span></li>
                                    <li>
                                        <div className="bg-light-warning"><i className="fa fa-shopping-cart"></i></div> New order received.<span className="text-muted">31 May</span></li>
                                    <li>
                                        <div className="bg-light-danger"><i className="fa fa-user"></i></div> New user registered.<span className="text-muted">30 May</span></li>
                                    <li>
                                        <div className="bg-light-inverse"><i className="fa fa-bell-o"></i></div> New Version just arrived. <span className="text-muted">27 May</span></li>
                                    <li>
                                        <div className="bg-light-info"><i className="fa fa-bell-o"></i></div> You have 4 pending tasks. <span className="text-muted">Just Now</span></li>
                                    <li>
                                        <div className="bg-light-danger"><i className="fa fa-user"></i></div> New user registered.<span className="text-muted">30 May</span></li>
                                    <li>
                                        <div className="bg-light-inverse"><i className="fa fa-bell-o"></i></div> New Version just arrived. <span className="text-muted">27 May</span></li>
                                    <li>
                                        <div className="bg-light-primary"><i className="fa fa-cog"></i></div> You have 4 pending tasks. <span className="text-muted">27 May</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </Fragment>
    )
}

export default Dashboard