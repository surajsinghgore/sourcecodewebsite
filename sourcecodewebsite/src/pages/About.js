import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/about.css';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';



const About = () => {
    let profile='https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/profile.png';
 
    const [useData,setUserData]=useState({});
const history=useHistory();



const callAboutPage=async ()=>{

    try{

const res=await fetch('/about',{
    method:"GET",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    },
    credentials:"include"
});
const data=await res.json();

setUserData(data);

if(!res.status===200){
    const error= new Error(res.error);
    throw error;   
   }
   } catch (error) {
    
       console.log(error);
       history.push('/login');
   }
   
       }


   
       
   useEffect(() => {
  
       callAboutPage();
       
   });



    return (
        <div>
            <Header />
<div className="about">
<div className="profile">
 <img src={profile} alt="not" />
</div>

<div className="data">
<h1>{useData.fullname}</h1>
<p>- {useData.profession}</p>
<h3> {useData.discription}</h3>

<h2>Father's Name: <span>{useData.fname}</span></h2>
<h2>DOB: <span>{useData.dob}</span></h2>
<h2>GENDER: <span>{useData.gender}</span></h2>
<h2>Age: <span>{useData.age}</span></h2>
<h2>Mobile No: <span>{useData.mobile}</span></h2>
<h2>Email: <span>{useData.email}</span></h2>
<h2>Address: <span>{useData.fulladdress}</span></h2>
</div>
</div>
            <Footer />
        </div>
    )
}

export default About;
