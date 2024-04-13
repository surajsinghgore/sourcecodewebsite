import '../css/Register.css';
import {useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const history=useHistory();

    


const [userData,setUserData]=useState({
    fullname:"",
email : "",
profession: "",
dob: "",
age: "",
gender: "",
fname: "",
mobile: "",
discription: "",
fulladdress: "",
password: "",
confirmpassword: ""
});

let name,value;
const Inputs=(e)=>{
    name= e.target.name;
    value= e.target.value;
    setUserData({...userData, [name]: value});
}

//sending data to server
const PostData=async (e)=>{

e.preventDefault();

const {fullname,email,profession,dob,age,gender,fname,mobile,discription,fulladdress,password,confirmpassword}=userData;



const res=await fetch(`${process.env.REACT_APP_SERVER_URL}/registers`,{
    method: "POST",
    headers : { 
        'Content-Type': 'application/json',

       },
   body: 
   
   JSON.stringify({
        fullname,email,profession,dob,age,gender,fname,mobile,discription,fulladdress,password,confirmpassword
    }),
  
});
const data=await res.json();
console.log(data)
if(res.status===422|| !data){
   
    toast.error("Invalid registration",{
        position:"top-center"
    });
    
}
else{
   
        toast.success("user successfully register",{
            position:"top-center"
           
        });
     
        history.push('/login')
  
  
}


}
    return (
        <div>
            <Header />

            <div className="logins">
<div className="mainss">
<div className="back"></div>
<div className="front">
<div className="empty"></div>
<Link to="/login"><HighlightOffIcon  title="register" className="plus"/></Link>
    <h1>REGISTER</h1>
    
<form method="POST">

<input type="text" name="fullname" id="fullname" required autoComplete="off" value={userData.fullname} onChange={Inputs} placeholder="Full Name"/>

<input type="email" name="email" id="email" required autoComplete="off"  value={userData.email} onChange={Inputs} placeholder="Email"/>

<input type="text" name="profession" id="profession" required autoComplete="off"  value={userData.profession} onChange={Inputs} placeholder="Profession"/>

<input type="text" name="dob" id="dob" required autoComplete="off"  value={userData.dob} onChange={Inputs} placeholder="date of birth"/>

<input type="text" name="age" id="age" required autoComplete="off"  value={userData.age} onChange={Inputs} placeholder="Age"/>

<input type="text" name="gender" id="gender" required autoComplete="off"  value={userData.gender} onChange={Inputs} placeholder="gender"/>

<input type="text" name="fname" id="fname" required autoComplete="off"  value={userData.fname} onChange={Inputs} placeholder="father's name"/>


<input type="text" name="mobile" id="mobile" required autoComplete="off"  value={userData.mobile} onChange={Inputs} placeholder="Mobile"/>


<textarea name="discription" id="discription" onChange={Inputs} required autoComplete="off"  value={userData.discription} placeholder="disciption about you"></textarea>
<input type="text" name="fulladdress" id="fulladdress" required autoComplete="off"  value={userData.fulladdress} onChange={Inputs} placeholder="Full Address"/> 



 
<input type="password" name="password" id="password" required autoComplete="off"   onChange={Inputs} placeholder="Password"/>

<input type="password" name="confirmpassword" id="confirmpassword" required  value={userData.confirmpassword} onChange={Inputs} autoComplete="off" placeholder="Confirm Password"/> 

<button onClick={PostData}>Go</button>
{/* <button onClick={()=>{toast.info("Server is under maintenance",{
    position:"top-center"
});}}>Go</button> */}

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

export default Register;
