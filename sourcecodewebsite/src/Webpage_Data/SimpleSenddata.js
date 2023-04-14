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

export default function SimpleSenddata() {
    usePrismHighlightAll(); 
    let img1="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/express/simplesenddata/1.png";
    let img2="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/express/simplesenddata/2.png";
    let img3="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/express/simplesenddata/3.png";
    let img4="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/express/simplesenddata/4.png";
    
    let SubIcon =
    "https://image.flaticon.com/icons/png/512/984/984498.png";
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
      <span>SEND DATA TO MONGODB</span><img src={SubIcon} alt={SubIcon} id="a"/>
    </div>

    <div className="allData">
<h1>FOLLOW THE STEPS TO SEND DATA TO MONGODB USING MONGOOSE</h1>
<p>we will send in local system , 1.start mongod process in powershell 2.open mongodb compass</p>
<h3>num the following in terminal</h3>

<pre class="language-git">
          <code>npm i express</code>
        </pre>
        <pre class="language-git">
          <code>npm i mongoose</code>
        </pre>
<h2>this is our project structure</h2>
<img src={img1} alt={img1} className="imgss"/>

 <h2>this is the code to send user's data </h2>
<h3>server.js</h3>
 <pre class="language-js">
            <code>{`const express = require('express');
const app = express();
const port = 3100;

//midleware
app.use(express.json());

//connection
const MongooseCon=require('./db/Connection');
MongooseCon();

//handle by router/Register.js
app.use("/register",require('./router/Register')); 


app.listen(port, () => {
  console.log(\`server is running on port\${port}\`)
})`}
</code> </pre>



<h3>db/connection.js</h3>
<pre class="language-js">
            <code>{`aconst mongoose=require('mongoose');
const mongooseURI="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const MongooseCon=async()=>{
try{
 mongoose.connect(mongooseURI,()=>{
    console.log('database successfully connected')
})
   }
catch(e){
    console.log('error is'+e)
}
 };

module.exports=MongooseCon;`}
</code>
</pre>

<h3>db/Schema.js</h3>
<pre class="language-js">
    <code>
        {`const mongoose=require('mongoose');
const {Schema}=mongoose;
const userSchema = new Schema({
   name:{
       type: String,
       required: true
   },
   email:{
    type: String,
    required: true,
    unique: true
},
password:{
    type: String,
    required: true
},
date:{
    type: Date,
    default: Date.now
},
  });
  
module.exports=mongoose.model('userData', userSchema);
`}
    </code>
</pre>


<h3>router/register.js</h3>
<pre class="language-js">
    <code>
        {`const express = require("express");
const router = express.Router();
const userData=require('../db/Schema');

router.post("/", async(req, res) => {
      const user=userData(req.body);
      const ress=await user.save();
      if(ress){
          res.send('sucessfully send')
      }
            })
            
 module.exports = router;`}
    </code>
</pre> 


<h2>We use thunder client to send user's request</h2>
<img src={img2} alt={img2} className="imgs"/>
<p>set POST method and write url then click on headers type "Content-Type" "application/json"</p>
<img src={img3} alt={img3} className="imgs"/>
<p>set BODY , then click on json now type your data in json format after that click on send button</p>

<h2>data sucessfully send in mongodb </h2>
<img src={img4} alt={img4} className="imgs"/>
<p>data will send in test folder .click on represh button to get data</p>
</div>
</div>
</>
    )
}
