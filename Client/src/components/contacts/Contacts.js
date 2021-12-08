import React, { useContext , Fragment,useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem';
import ContactFiltered from './ContactFiltered';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layouts/Spinner';
const Contacts = () => {
    const contactContext = useContext (ContactContext);

    //eslint-disable-next-line
    const { contacts, filtered,getContacts,loading } =contactContext;

    useEffect(() => {
        getContacts();
       
        //eslint-disable-next-line
    }, [])

    if(contacts !== null && contacts.length===0 && !loading){
        return(
            <Fragment>
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex ">
                                <div className="row">
                                    
                                <div class="alert alert-warning"> هنوز  <code> مخاطبی </code>ندارید لطفا از طریق فرم بالا اضافه کنید !  </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
    return (
        <Fragment>
            
            <div className="col-lg-12">
                
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex ">
                        <div className="row">
                            <div className="col-md-6">
                                <h5 className="card-title ">لیست مخاطبین</h5>
                            </div>
                            <ContactFiltered />
                        </div>
                             
                                    
                        </div>
                        <div className="table-responsive m-t-20 no-wrap">
                            <table className="table vm no-th-brd pro-of-month">  
                                <tbody>
                                    {contacts !==null && !loading ? (
                                        <TransitionGroup>          
                                            {
                                                filtered !== null ? 
                                                    filtered.map(contact => (
                                                        <CSSTransition key={contact._id} timeout={500} classNames="item">
                                                            <ContactItem  contact={contact} />
                                                        </CSSTransition>
                                                )) :contacts.map( contact => (
                                                        <CSSTransition key={contact._id} timeout={500} classNames="item">
                                                            <ContactItem contact={contact} />
                                                        </CSSTransition>
                                            ))}  
                                                
                                        </TransitionGroup>
                                    ) : <Spinner/> }
                                          
 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> 
            
            
        </Fragment>
    )
}

export default Contacts
