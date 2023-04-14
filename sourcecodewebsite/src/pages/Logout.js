import React,{useContext} from 'react'
import {useHistory} from 'react-router-dom';

import {userContext} from '../App';

const Logout = () => {
    const {dispatch}=useContext(userContext);
    
const history =useHistory();

    fetch(`${process.env.REACT_APP_SERVER_URL}/logouts`,{
        method:"GET",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        credentials: "include"
    }).then((res)=>{

dispatch({type: "USER",payload: false})

history.push("/login",{replace: true});
if(res.status !==200){
   const err=new Error(res.error);
   throw err; 
}

    }).catch((err)=>{
        console.log(err)
    })

    return (
        <div>
            
<h1>Logout successfully</h1>

        </div>
    )
}

export default Logout;
