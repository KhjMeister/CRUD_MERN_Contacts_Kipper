import React,{Fragment,useState,useContext,useEffect} from 'react'
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
const Login = props => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const{setAlert} = alertContext;
    const{login, error,clearErrors,isAuthenticated } = authContext;

    useEffect(() => {
        if(isAuthenticated){
            props.history.push('/');
        }
            if(error==="ایمیل یا رمز اشتباه است"){
                setAlert(error,'danger');
                clearErrors();
        }
        //eslint-disable-next-line
    }, [error,isAuthenticated,props.history]);

    const [user,setUser]= useState({
        email:'',
        password:''
    });
    const {email,password} = user;

    const onChange = e =>{
        setUser({
            ...user,[e.target.name]:e.target.value
        });
    };
    const onSubmit = e =>{
        e.preventDefault();
        if (email===''||password==='') {
            setAlert('لطفا موارد خالی را پر کنید','danger');
        }else{
            login({
                email,
                password
            });
        }
    };
    return (
        <Fragment>                  
        <div className="row">
            <div className="col-lg-12 col-xlg-12 col-md-12">
                <div className="card">
                    <div className="card-header" >
                        <h4 className=" card-title "> ورود </h4>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal form-material"   onSubmit={onSubmit}>
                            
                            <div className="form-group">
                                <label htmlFor="email" className="col-md-12">ایمیل</label>
                                <div className="col-md-12">
                                    <input id="email" name="email" value={email} onChange={onChange} required type="email" placeholder="ایمیل خود را وارد کنید" className="form-control form-control-line"   />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="col-md-12">پسورد</label>
                                <div className="col-md-12">
                                    <input id="password" name="password" value={password} required onChange={onChange} type="password" placeholder="پسورد خود را وارد کنید"  className="form-control form-control-line" />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <button type="submit" className="btn btn-outline-info">ورود</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
</Fragment>
    )
}

export default Login
