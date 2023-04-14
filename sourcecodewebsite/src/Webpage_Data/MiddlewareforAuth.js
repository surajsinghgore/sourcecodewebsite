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

export default function MiddlewareforAuth() {
    usePrismHighlightAll(); 
    let SubIcon =
    "https://icons.veryicon.com/png/o/miscellaneous/aim/new-middleware.png";
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
      <span>MIDDLEWARE FOR AUTHENTICATION</span><img src={SubIcon} alt={SubIcon} id="b"/>
    </div>

    <div className="allData">
<h1>FOLLOW THE STEP TO CREATE AND USE MIDDLEWARE</h1>
<h2>Step 1: create a folder name middleware and make file VerifyUser</h2>
<pre>
    <code className="language-js">
    {`const jwt = require('jsonwebtoken');
const JWT_SECRET="surajsinghisagoodboy";

const VerfifyUser=async(req,res,next)=>{
// get user from the jwt token and add id to req object
const UserToken= req.header('auth-token'); //auth-token is the name of token
if(!UserToken){
    res.status(401).send({error:"user not login "})
}

try {
    const data=jwt.verify(UserToken, JWT_SECRET);
req.user=data.user;

next();
} catch (error) {
    res.status(401).send({error:"user not login "})
}

}


module.exports=VerfifyUser;`}</code>
</pre>

<h2>step 2: import middleware in files</h2>
<pre>
    <code className="language-js">
 {`const VerfifyUser=require('../middleware/VerifyUser');
        
 router.post('/userdata',VerfifyUser,async(req,res)=>{`}
    </code>
</pre>
</div>
</div>
        </>
    )
}
