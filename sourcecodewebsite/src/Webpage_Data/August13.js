import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import LoginCheck from "../pages/LoginCheck";
import "../css/demo.css";
import "../css/prismdemo.css";
import multipleAccount from '../api/git/multipleaccount/multile.account'

export default function August13() {
    let SubIcon =
    "https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/c0f41257a1509a4e9deea76e7d343be76385817d/error/1.svg";


    let img1='https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/error/august%2013%2C2021/1.png';
    let img2='https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/error/august%2013%2C2021/2.png';
    let img3='https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/error/august%2013%2C2021/3.png';
    let img4='https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/error/august%2013%2C2021/4.png';
    let img5='https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/error/august%2013%2C2021/5.png';
    let img6='https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/error/august%2013%2C2021/6.png';
    let img7='https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/error/august%2013%2C2021/7.png';
    let img8='https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/error/august%2013%2C2021/8.png';
    return (
        <>
         <LoginCheck />
      <MainHeader />
      <SideNavBar
        homeOn={false}
        codeOn={false}
        studyOn={false}
        noteOn={true}
        videoOn={false}
        detailOn={false}
      />
      <div className="template">
        <div className="top-title">
          <span>support for password authentication was removed on august 13,2021 </span>

          <img src={SubIcon} alt={SubIcon} />
        </div>

        <div className="allData">

<h1>Follow all the steps properly to solve problem</h1>

<h2>1. Go to github.com and click on setting</h2>
<img src={img1} alt={img1} className="imgs" />


<h2>2. Scroll down at bottom and find Developer settings</h2>
<img src={img2} alt={img2} className="imgs"/>
<p>Developer settings at left sidebar , click on them</p>

<h2>3. Click on Personal access tokens</h2>
<img src={img3} alt={img3} className="imgs"/>


<h2>4. Click on generate new token</h2>
<img src={img4} alt={img4} className="imgs"/>

<h2>5.To read below</h2>
<img src={img5} alt={img5} className="imgs"/>
<p>5.1 give name to access token, 5.2 select your token expiry days, 5.3 check all checkboxes</p>


<h2>6. Click on generate token button</h2>
<img src={img6} alt={img6} className="imgs"/>


<h2>7. your successfully generated your token</h2>
<img src={img7} alt={img7} className="imgs"/>
<p>copy your token or save it at save place</p>


<h1>To use this token you need to follow below steps</h1>
<h2>{`Control Panel > User's > Credentail Manager > Windows credentails `}</h2>
<h3>find git:https://github.com click on them</h3>
<p>now click on edit button</p>
<img src={img8} alt={img8} className="imgs"/>
<p>give username of your github account and paste your token in password section</p>
        </div> 


           </div>
        
        </>
    )
}
