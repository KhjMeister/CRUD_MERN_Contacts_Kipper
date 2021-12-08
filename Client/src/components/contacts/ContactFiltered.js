import React,{Fragment, useContext,useRef, useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext';

const ContactFiltered = () => {
    const contactContext = useContext(ContactContext);
    const text = useRef('');
    const { filterContacts,clearFilter,filtered } = contactContext;
    useEffect(() => {
        if( filtered === null){
            text.current.value = '';
        }
         // eslint-disable-next-line
    }, [])
    const onChange = e =>{
        if(text.current.value !== ''){
            filterContacts(e.target.value);
        }else{
            clearFilter();
        }
    }
    return (
        <Fragment>
            <div className="col-md-6">
                <form className="form-horizontal form-material " >
                    <div className="form-group ">
                        <input ref={text} name="name" onChange={onChange} type="text" placeholder="جستجو ..." className="form-control form-control-line" />
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default ContactFiltered
