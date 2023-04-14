import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Contact.css';
import {useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';



const Contact = () => {

    const [useData,setUserData]=useState({
        fullname: "",
        email: "",
        message: ""
    });
    
    
    const aboutDataPage=async ()=>{
    
        try{
    
    const res=await fetch(`${process.env.REACT_APP_SERVER_URL}/getData`,{
        method:"GET",
        headers:{
            Accept:"application/json",
           
        }
       
    });
    const data=await res.json();
   

    setUserData({...useData, fullname:data.fullname, email:data.email});
    
    if(!res.status===200){
        const error= new Error(res.error);
        throw error;   
       }
       } catch (error) {
        
           console.log(error);
           
       }
       
           }
       
       useEffect(() => {
           aboutDataPage();
           
       },[]);
    

//sending message to server
const UserMessage=async (e)=>{
e.preventDefault();
let name=e.target.name;
let value=e.target.value;
setUserData({...useData, [name]:value});
}
    

//storing to server
const sendingData=async (e)=>{
    e.preventDefault();
const {fullname,email,message}=useData;
const res=await fetch('/message',{
    method: "POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        fullname,email,message
    })
});
const data=await res.json();

if(!data){
    toast.error("message not send",{
        position:"top-center"
    });
}
else{
    toast.success("message send successfully",{
        position:"top-center"
       
    });
    setUserData({...useData,message:""})
}

}

    return (
        <div>
            <Header />

<div className="contact">
    <h1>Contact Us</h1>

    <hr className="dash"/>

    <h2>We'd <FavoriteBorderIcon className="big"/> to help ! </h2>
    <h3>we like to create things with fun, open-minded people. Feel free to say hello !</h3>


    <div className="left">
<form method="post">

    <input type="text" name="fullname" id="fullname" value={useData.fullname}  onChange={UserMessage} placeholder="Your Name" />

    <input type="email" name="email" id="email" value={useData.email}  onChange={UserMessage} placeholder="Email" />

    <textarea name="message" onChange={UserMessage} value={useData.message} placeholder="Message"></textarea>
<button onClick={sendingData}>Send</button>
</form>

    </div>


    <div className="right">
<LocationOnIcon className="icons"/>  <span>sector 1, chandigarh </span><br />
<CallIcon className="icons"/>    <span>(+91)-6239522303 </span><br />
<MailOutlineIcon className="icons"/> <span>surajthakurrs45@gmail.com </span><br />
<hr />
<LanguageIcon className="icons"/> <span>www.prpwebsites.com </span>
    </div>
</div>

            <Footer />
            <ToastContainer />
        </div>
    )
}

export default Contact;
