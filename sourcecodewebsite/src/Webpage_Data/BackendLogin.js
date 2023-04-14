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

export default function BackendLogin() {
    usePrismHighlightAll(); 
    let SubIcon =
    "https://www.freeiconspng.com/thumbs/login-icon/register-secure-security-user-login-icon--7.png";
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
      <span>BACKEND LOGIN FORM</span><img src={SubIcon} alt={SubIcon} id="b"/>
    </div>

    <div className="allData">
<h1>FOLLOW THE STEP TO CREATE BACKEND LOGIN FORM WORKING</h1>
            <h2>Router or auth file.js</h2>

            <pre>
                <code className="language-js">
                    {`const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET="surajsinghisagoodboy"
const userData = require("../db/Schema");
const { body, validationResult } = require('express-validator');
            
             // login part
router.post("/login", 
[
  body('email',"email is not valid").isEmail(),
  body('password',"password cannot be empty").exists(),
]
,async (req, res) => {
// validator
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}


const{email,password}=req.body;

try {
  // find user with email
  const findUser=await userData.findOne({email});
  if(!findUser){
    res.status(400).json({error:"please try to login with correct credentails"})
  }

  // compare password with bcryptjs
const compPassword=await bcrypt.compare(password,findUser.password);
if(!compPassword){
  res.status(400).json({error:"please try to login with correct credentails"})
}

// sending user id if correct details
const data={
  user:{
    id: findUser.id
  }
}
const token = jwt.sign(data, JWT_SECRET);
res.json({token})
} catch (error) {
  res.status(500).send("internal server error")
  console.log(error)
}

})
`}
                </code>
            </pre>
        </div>
        </div>
        </>
    )
}
