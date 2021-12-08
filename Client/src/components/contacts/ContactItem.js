import React , { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import ContactContex from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContex);

    const { deleteContact,setCurrent,clearCurrent } = contactContext;

    const {_id ,name , email, phone, type} = contact;

    const onDelete = () =>{
        deleteContact(_id);
        clearCurrent();
    }
    

    return (
        <Fragment>
            <tr>
                <td><span className={ type==='personal' ? 'round round-success' : 'round round-primary' }>{ type==='personal' ? 'P' : 'T' }</span></td>
                <td>
                    <h6>{ name }</h6><small className="text-muted" >{type}</small></td>
                <td>{ email && ( <div> <i className="fa fa-envelope-open"></i> {email} </div> ) }</td>
                <td>{ phone && ( <div> <i className="fa fa-phone"></i> {phone} </div> ) }</td>
                <td>
                    <button className="btn btn-outline-danger btn-sm" onClick={(onDelete)}>حذف</button>
                    <button className="btn btn-outline-info btn-sm" onClick={() => setCurrent(contact)}>ویرایش</button>
                </td>
                
                
            </tr>
        </Fragment>
    )
}
ContactItem.propTypes = {
    contact:PropTypes.object.isRequired
}
export default ContactItem
