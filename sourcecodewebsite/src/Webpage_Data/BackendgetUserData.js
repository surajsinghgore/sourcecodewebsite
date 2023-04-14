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

export default function BackendgetUserData(){
    usePrismHighlightAll(); 
    let SubIcon =
    "https://static.thenounproject.com/png/1393569-200.png";
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
      <span>GET USER DATA IN BACKEND</span><img src={SubIcon} alt={SubIcon} id="b"/>
    </div>

    <div className="allData">
<h1>FOLLOW THE STEP TO GET USER INFORMATION</h1>
            <h2>Router or auth file.js</h2>

            <pre>
                <code className="language-js">
                    {`const userData = require("../db/Schema");
const VerfifyUser=require('../middleware/VerifyUser'); //name of middleware           
 

// get user data for website
router.post('/userdata',VerfifyUser,async(req,res)=>{
try {
    //user get from middleware
  userId=req.user.id;
  const user=await userData.findById(userId).select("-password"); //get all data except password
  res.send(user)
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
