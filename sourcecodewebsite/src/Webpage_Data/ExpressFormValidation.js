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
  

export default function ExpressFormValidation() {
    usePrismHighlightAll(); 
    let SubIcon =
    "https://static.thenounproject.com/png/1876484-200.png";
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
      <span>BACKEND FORM VALIDATION</span><img src={SubIcon} alt={SubIcon} id="a"/>
    </div>

    <div className="allData">
    <h2>follow the steps to set validation in form</h2>
    <h3>Register.js</h3>
<pre class="language-js">
 <code>{`const { body, validationResult } = require('express-validator');`}
</code> </pre>
<p>we use express form validator  for backend form validation
</p>


<pre class="language-js">
 <code>{`
router.post("/postData", 
// express form validation implementation
[
    // name
  body('name','name must contain atlest 3 character').isLength({ min: 3 }),
    // email
  body('email',"email is not valid").isEmail(),
  // password 
  body('password',"must must be contain atlest 5 characters").isLength({ min: 5 })
]
,async (req, res) => {
// validator error throw
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
    // storing value from body in container's
  const { name, email, dob, gender, mobile,password, confirmpassword} = req.body;

// check weather any field is empty or not
if (
    !dob ||
    !gender ||
    !mobile ||
    !confirmpassword
  ) {
    return res.status(422).json({
      error: "please fill all the fields properly",
    });
  }


  // checking weather password and confirm password is match or not
if(password!==confirmpassword){
    return res.status(422).json({error: "Confirm Password not match"
})
}

//   checking weather email is already exists or not
const checkEmail=await userData.findOne({email: email});
if(checkEmail){
    return res.status(422).json({error: "user already Exits"
})
}

try{
// storing data in user from userschema
const user = new userData({
    name,
    email,
    dob,
    gender,
    mobile,
   password
  });


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
</code> </pre>

    </div>
</div>
</>
    )
}
