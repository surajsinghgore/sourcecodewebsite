import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function LoginCheck() {
    
    
const history=useHistory();



const callAboutPage=async ()=>{
    try{

const res=await fetch(`${process.env.REACT_APP_SERVER_URL}/about`,{
    method:"GET",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    },
    credentials:"include"
});
await res.json();



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
            
        </div>
    )
}
