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

export default function MongooseSchema() {
    usePrismHighlightAll(); 
    let SubIcon =
    "https://cdn0.iconfinder.com/data/icons/computer-networking-2-1/66/157-512.png";
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
      <span>MONGOOSE SCHEMA</span><img src={SubIcon} alt={SubIcon} id="a"/>
    </div>

    <div className="allData">
<h1>FOLLOW THE STEPS TO MAKE SCHEMA IN MONGOOSE</h1>

<h2>1. require mongoose</h2>
<h3>db/Schema.js</h3>
<pre class="language-js">
            <code>{`const mongoose=require('mongoose');`}
</code> </pre>
<h2>2. Require Schema</h2>
<pre class="language-js">
            <code>{`const {Schema}=mongoose;`}
</code> </pre>
<h2>3. Schema defines</h2>
<pre class="language-js">
            <code>{`
const schema = new Schema({
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
  });`}
</code> </pre>
<p>you can custimize with your requirement</p>

<h2>4. require mongoose</h2>
<pre class="language-js">
<code>{`module.exports=mongoose.model('userData', schema);`}
</code> </pre>

<h1>you can call this in server.js or router.js file</h1>
</div>
</div>
</>
    )
}
