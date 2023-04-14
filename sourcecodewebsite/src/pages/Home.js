import '../css/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

import {useState,useEffect} from 'react';


const Home = () => {
    let svg = 'https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/banner.svg';
    const [login,setLogin]=useState(false);
const [data,setData]=useState();


const HomeBar=async ()=>{
try{

const res=await fetch(`${process.env.REACT_APP_SERVER_URL}/getData`,{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    }
    ,
    
});
const datas=await res.json();
setData(datas);
setLogin(true)

}

catch(err){
    console.log(err);
}
}

useEffect(()=>{
    HomeBar();
},[])


    return (
        <div className="home">
            <Header />
<div className="body">

<h1>Welcome to <span className="heighlight">PRP</span> source code website</h1>
<p>{login? `thanks for login ${data.fullname} `: 'please Login to get source code'}</p>
{login? <Link to="/main"><button>Click Here</button></Link> : <Link to="/login"><button>Login</button></Link>}

    <img src={svg} alt=""/>
</div>
<Footer />
        </div>
    )
}

export default Home;
