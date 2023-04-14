import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import LoginCheck from "../pages/LoginCheck";
import "../css/demo.css";
import React,{ useEffect } from "react";
import Prism from "prismjs";
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';
import 'prismjs/plugins/toolbar/prism-toolbar.min'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
function usePrismHighlightAll() {
    useEffect(() => {
      Prism.highlightAll()
    }, [])
  }
  
export default function BcryptJs() {
    usePrismHighlightAll(); 
    let SubIcon =
    "https://image.flaticon.com/icons/png/512/102/102649.png";
    return (
        <>
           
        <LoginCheck />
  <MainHeader />
  <SideNavBar
    homeOn={false}
    codeOn={false}
    studyOn={true}
    noteOn={false}
    videoOn={false}
    detailOn={false}
  />
  <div className="template">
    <div className="top-title">
      <span>BCRYPTJS</span><img src={SubIcon} alt={SubIcon} id="b"/>
    </div>

    <div className="allData">
<h1>FOLLOW THE STEP TO USE BCRYPTJS</h1>
<h2>1. install bcryptjs in PROJECT</h2>
<pre>
    <code className="language-js">
{`npm install bcryptjs`}
    </code>
</pre>
<h2>2. import bcryptjs in file</h2>
<pre>
    <code className="language-js">
{`const bcrypt = require('bcryptjs');`}
    </code>
</pre>


<h2>3. generating salt and hash to make password secure</h2>
<pre>
    <code className="language-js">
{`// generating salt
const salt =await bcrypt.genSaltSync(10);
// hashing password with salt
const securePassword=await bcrypt.hash(req.body.password,salt);`}
    </code>
</pre>
<h2>4. call it before .save() attribute</h2>
<pre>
    <code className="language-js">
{`const user = new userData({
    name,
    email,
    dob,
    gender,
    mobile,
    // 1.4 password 
    password:securePassword
  });
   // sending data to server
  const sendData=await user.save();
 `}
    </code>
</pre>
<h2>All code together for understanding</h2>
<pre>
    <code className="language-js">
{`const express = require("express");
const router = express.Router();
const userData = require("../db/Schema");
// 1.0
const bcrypt = require('bcryptjs');

router.post("/", async (req, res) => {
// 1.1
const salt =await bcrypt.genSaltSync(10);
// 1.2 
const securePassword=await bcrypt.hash(req.body.password,salt);

try{
// storing data in user from userschema
const user = new userData({
    name,
    email,
    dob,
    gender,
    mobile,
    // 1.3 password 
    password:securePassword
  });

// sending data to server
  const sendData=await user.save();
  if(sendData){
   res.status(201).json({ error: "user successfully register"});
  }

}
// if any error
catch(e){
    console.log(e)
}
});
`}
    </code>
</pre>


<h1>How to verify password</h1>
<h2>Verify Password</h2>
<pre>
    <code className="language-js">
{`//userData is schema name
const findUser=await userData.findOne({email});
// compare password with bcryptjs
const compPassword=await bcrypt.compare(password,findUser.password);
if(!compPassword){
  res.status(400).json({error:"please try to login with correct credentails"})
}`}
    </code>
</pre>
    </div> 

    </div>
        </>
    )
}
