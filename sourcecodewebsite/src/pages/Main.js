import React from "react";
import "../css/main.css";



import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";

const Main = () => {

  let mypic = 'https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/mypic.png';
  let fb = 'https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/1.svg';
  let ig = 'https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/2.svg';
  let tw = 'https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/3.svg';
  let ld = 'https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/4.svg';
  let pi = 'https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/5.svg';
  let gh = 'https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/github.svg';
  
  
  const history = useHistory();

  const Authentication = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/authentications`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        credentials: "include",
      });
      await res.json();

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  };

  useEffect(() => {
    Authentication();
  });

  
  return (
    <div className="main-cls">
      <MainHeader />
      <SideNavBar homeOn={true} codeOn={false} studyOn={false} noteOn={false} videoOn={false} detailOn={false}/>

      <div className="content-data">
      <div className="img-section">
      <img src={mypic} alt={mypic} />
 </div>
 <div class="wrapper">
    <div class="static-txt">I'm a</div>
    <ul class="dynamic-txts">
      <li><span>Programmer</span></li>
      <li><span>Developer</span></li>
      <li><span>Freelancer</span></li>
      <li><span>Web Developer</span></li>
    </ul>
  </div>

  <div className="handles">
 <li><a href="//www.facebook.com/surajsinghrajpoot3224" rel="noreferrer" target="_blank"><img src={fb} alt={fb} /></a></li>
    <li><a href="//www.instagram.com/surajsinghgore/" rel="noreferrer" target="_blank"><img src={ig} alt={ig} /></a></li>
    <li><a href="//twitter.com/Surajthakurrs45" rel="noreferrer" target="_blank"><img src={tw} alt={tw} /></a></li>
    <li><a href="//www.github.com/surajsinghgore" rel="noreferrer" target="_blank"><img src={gh} alt={gh} /></a></li> 
    <li><a href="//www.linkedin.com/in/suraj-singh-96a754189/" rel="noreferrer" target="_blank"><img src={ld} alt={ld} /></a></li>
    <li><a href="//in.pinterest.com/surajthakurrs45/" rel="noreferrer" target="_blank"><img src={pi} alt={pi} /></a></li>
    

  </div>
      </div>
   
    </div>

  );

};



export default Main;
