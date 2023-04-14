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

export default function FetchDataMongoose(){
    usePrismHighlightAll(); 
    let SubIcon =
    "https://static.thenounproject.com/png/256152-200.png";
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
      <span>FETCH DATA</span><img src={SubIcon} alt={SubIcon} id="b"/>
    </div>

    <div className="allData">
<h1>FOLLOW THE STEP TO FETCH DATA IN MONGOOSE USING BACKEND</h1>
            <h2>Router or auth file.js</h2>

            <pre>
                <code className="language-js">
                    {`
// get all the notes
router.get('/',VerfifyUser,async(req,res)=>{ //Verfifyuser is an middleware

    try {
                            //userNotes is the name of schema
        const userNote=await userNotes.find({user: req.user.id})
                              // user come form middleware
        res.json(userNote); 
    } catch (error) {
        res.status(500).send("internal server error")
        console.log(error)
    }
})
`}
                </code>
            </pre>
            <h2>middleware</h2>
            <pre>
                <code className="language-js">
                    {`const jwt = require('jsonwebtoken');
const JWT_SECRET="surajsinghisagoodboy";

const VerfifyUser=async(req,res,next)=>{
// get user from the jwt token and add id to req object
const UserToken= req.header('auth-token');
if(!UserToken){
    res.status(401).send({error:"user not login "})
}

try {
    const data=jwt.verify(UserToken, JWT_SECRET);
    console.log(req.user)
req.user=data.user;

next();
} catch (error) {
    res.status(401).send({error:"user not login "})
}

}


module.exports=VerfifyUser;
`}
                </code>
            </pre>

            <h2>NotesSchema</h2>
            <pre>
                <code className="language-js">
                    {`const mongoose=require('mongoose');
const {Schema}=mongoose;
const userSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,//make foreign key
        ref: 'userData'//userData is the name of schema of different table
    },
   title:{
       type: String,
       required: true
   },
   discription:{
    type: String,
    required: true,
},
tag:{
    type: String,
    
default:"general"
},
date:{
    type: Date,
    default: Date.now
},
  });
  
module.exports=mongoose.model('userNotes', userSchema);

`}
                </code>
            </pre>
        </div>
        </div>
        </>
    )
}
