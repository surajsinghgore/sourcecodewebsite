import '../css/Header.css';
import {Link} from 'react-router-dom';

import React,{useContext} from 'react'
import {userContext} from '../App';

const Header = () => {
const {state}=useContext(userContext);
let logo='https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/logo.png';

const Menu=()=>{


if(state){
  
    return(
        <>
<Link to="/"> <li>Home</li></Link>
              <Link to="/contact"> <li>Contact</li></Link>
              <Link to="/aboutme"> <li>About Me</li></Link>
              <Link to="/livewebsite"> <li>Live Websites</li></Link>
              <Link to="/main"><li>Code Website</li></Link>
        <Link to="/logout"><li>Logout</li></Link>

        </>
    )
}
else{
    return(
        <>
<Link to="/"> <li>Home</li></Link>
              <Link to="/contact"> <li>Contact</li></Link>
              <Link to="/aboutme"> <li>About Me</li></Link>
              <Link to="/livewebsite"> <li>Live Websites</li></Link>
              <Link to="/login"><li>Login</li></Link>
            
        </>
    )
}

}




// hameburgerItems
const Hame=()=>{
    if(state){
        return(
            <>
<Link to="/"><li>Home</li></Link>
   <Link to="/contact"><li>Contact</li></Link>
   <Link to="/aboutme"><li>About Me</li></Link>
   <Link to="/livewebsite"><li>Live Websites</li></Link>
   <Link to="/main"><li>Code Website</li></Link>
   <Link to="/logout"><li>Logout</li></Link>
            </>
        )
    }
    else{
        return(
            <>
<Link to="/"><li>Home</li></Link>
   <Link to="/contact"><li>Contact</li></Link>
   <Link to="/aboutme"><li>About Me</li></Link>
  <Link to="/livewebsite"><li>Live Websites</li></Link>
   <Link to="/login"><li>Login</li></Link>
            </>
        )
    }
}
    return (
        <>
        <nav role="navigation"> 
        
  <div id="menuToggle">
  <h1>CODE WEBSITE</h1>
  <input type="checkbox" />
  <span></span>
    <span></span>
    <span></span>
    
   <ul id="menu">
   <Hame />
    </ul>
  </div>
</nav>
        <div className="Header">

            <div className="logopart">
                <img src={logo} alt="logo not displyed"/>
                <span>PRPWEBSITE.COM</span>
                <p>Perfect Research Presentation</p>
            </div>
            <div className="links">
<Menu />
            
              
            </div>
        </div>
    </>
    )
}

export default Header;
