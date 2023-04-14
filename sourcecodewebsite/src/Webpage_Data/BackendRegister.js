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

export default function BackendRegister(){
    usePrismHighlightAll(); 
    let SubIcon =
    "https://cdn2.iconfinder.com/data/icons/mobile-banking-ver-1a/100/1-38-512.png";
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
      <span>REGISTRATION USER IN BACKEND</span><img src={SubIcon} alt={SubIcon} id="b"/>
    </div>

    <div className="allData">
<h1>FOLLOW THE STEP TO MAKE USER REGISTRATION FORM TO STORE USER IN DATABASE</h1>
            <h2>Router or auth file.js</h2>

            <pre>
                <code className="language-js">
                    {`const jwt = require('jsonwebtoken');
const JWT_SECRET="surajsinghisagoodboy"
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const userData = require("../db/Schema");

// userData is the name of schema
router.post("/", 
[
  body('name','name must contain atlest 3 character').isLength({ min: 3 }),
  body('email',"email is not valid").isEmail(),
  body('password',"must must be contain atlest 5 characters").isLength({ min: 5 })
]
,async (req, res) => {
// validator
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
    // storing value from body in container's
  const { name, email, dob, gender, mobile} = req.body;

// check weather any field is empty or not
if (
    !dob ||
    !gender ||
    !mobile
  ) {
    return res.status(422).json({
      error: "please fill all the fields properly",
    });
  }

//   checking weather email is already exists or not
const checkEmail=await userData.findOne({email: email});
if(checkEmail){
    return res.status(422).json({error: "user already Exits"
})
}

//convert password into hashing
//  generating salt
const salt =await bcrypt.genSaltSync(10);
//hashing password with salt
const securePassword=await bcrypt.hash(req.body.password,salt);

try{
// storing data in user from userschema
const user = new userData({
    name,
    email,
    dob,
    gender,
    mobile,
    password:securePassword
  });

  const data={
    user:{
      id: user.id
    }
  }
  // it is an syncronous function
 const token = jwt.sign(data, JWT_SECRET);
  res.json({token})
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
});`}
                </code>
            </pre>
        </div>
        </div>
        </>
    )
}
