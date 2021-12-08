import React, { Fragment, useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
 const ContactsP = () => {
    const authContext =  useContext(AuthContext);
    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);
    return (
        <Fragment>
                            
        <div className="row">
            
            <div className="col-lg-12 ">
                <ContactForm />
                
            </div>
            
        </div>
        
        <div className="row">    
           <Contacts />      
        </div>
        </Fragment>
    )
}

export default ContactsP
