import React, {useState,Fragment,useContext, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    
    const { addContact,current,clearCurrent,updateContact } = contactContext;

    useEffect(()=>{
        if(current !== null){
            setContact(current);
        }else{
            setContact({
                name:'',
                email:'',
                phone:'',
                type:'personal'
            });
        }
    },[contactContext,current]);

    const [ contact, setContact ] = useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    });

    const {name,email,phone,type} = contact;

    const onChange = e =>
        setContact({...contact,[e.target.name]:e.target.value });
  
    const onSubmit = e =>{
        e.preventDefault();
        if(current == null){
            addContact(contact);
        }else{
            updateContact(contact);
            clearCurrent();
        }

        setContact({
            name:'',
            email:'',
            phone:'',
            type:'personal'
        });
    };
    const clearAll = () =>{
        clearCurrent();
    }
    return (
        <Fragment>
            <div className="card">
                    <div className="card-body">
                    <div className="d-flex ">
                    <div>
                        <h5 className="card-title "> {current ? 'ویرایش مخاطب': 'اضافه کردن مخاطب'}   </h5>
                    </div>
                                    
                </div>
                        <form className="form-horizontal form-material " onSubmit={onSubmit}>
                            <div className="form-group row">
                                <label htmlFor="name" className="col-md-2">نام</label>
                                <label htmlFor="email" className="col-md-3">ایمیل</label>
                                <label htmlFor="phonee" className="col-md-3">شماره تلفن</label>
                                <label htmlFor="type" className="col-md-3">نوع مخاطب</label>
                                <div className="col-md-2">
                                    <input id="name" name="name" value={name} onChange={onChange}  type="text" placeholder="نام  را وارد کنید" className="form-control form-control-line" />
                                </div>    
                                <div className="col-md-3">
                                    <input id="email" name="email" value={email} onChange={onChange} type="email" placeholder="ایمیل را وارد کنید" className="form-control form-control-line"   />
                                </div>
                                <div className="col-md-3">
                                    <input id="phonee" name="phone" value={phone} onChange={onChange} type="text" placeholder="شماره تلفن را وارد کنید" className="form-control form-control-line"/>
                                </div>
                                <div className="col-md-2">
                                <select onChange={onChange} value={type} name="type" id="type" className="form-control form-control-line">
                                    <option value="personal"   >شخصی</option>
                                    <option value="tejary"  >تجاری</option>
                                    
                                </select>
                                    
                                </div>  
                                <div className="col-md-2">
                                    <button type="submit" className={current?'btn btn-outline-info':'btn btn-outline-success'}>  {current ? 'ویرایش ': 'اضافه کردن '}</button>
                                </div>  
                            </div>
                            {current &&
                            <div className="text-center" >
                                <button className='btn btn-light' onClick={clearAll}> پاک کردن فرم</button>
                            </div> }
                            
                        </form>
                    </div>
            </div>
        </Fragment>
    )
}

export default ContactForm
