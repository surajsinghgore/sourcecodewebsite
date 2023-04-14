import '../css/Login.css';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import {userContext} from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React,{useContext} from 'react'

const Login = () => {
    const {dispatch}=useContext(userContext);

    const history=useHistory();

const [email,setEmail]=useState();
const [password,setPassword]=useState();



    //emplimenting login process
const userLogin=async (e)=>{
e.preventDefault();

const res=await fetch(`${process.env.REACT_APP_SERVER_URL}/login`,{
    method: "POST",
    headers:{
        "Content-type": "application/json",
        
    },
    body: JSON.stringify({
        email,password
    })
});



if(!email){
    toast.error("email field is empty",{
        position:"top-center"
    });
}
else if(!password){
    toast.error("password field is empty",{
        position:"top-center"
    });
}
else if(res.status===400){
  
    toast.error("email not exists or password is wrong",{
        position:"top-center"
    });
 
}

else{
    dispatch({type:"USER",payload: true})
    toast.success("user login successfully");

history.push('/main');

}

}

    return (
        <div className="login">
           <Header />
           <div className="logins">
<div className="main">
<div className="back"></div>
<div className="front">
<div className="empty"></div>
<Link to="/register"><ControlPointIcon  title="register" className="plus"/></Link>

    <h1>LOGIN</h1>

<form method="post">

<input type="email" name="email" id="email" required value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete="off" placeholder="Email"/>
<input type="password" name="password" id="password" required value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete="off" placeholder="Password"/>
<button onClick={userLogin}>Go</button>
</form>

</div>

</div>
</div>

           <Footer />
           <ToastContainer position="top-center"

newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable/>


        </div>
    )
}

export default Login;
