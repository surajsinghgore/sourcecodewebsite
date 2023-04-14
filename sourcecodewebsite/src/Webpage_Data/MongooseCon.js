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

export default function MongooseCon() {
    usePrismHighlightAll(); 
    let SubIcon =
    "https://cdn.iconscout.com/icon/premium/png-256-thumb/database-connection-1804536-1531730.png";
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
      <span>MONGOOSE CONNECTION</span><img src={SubIcon} alt={SubIcon} id="a"/>
    </div>

    <div className="allData">
<h1>FOLLOW THE STEPS TO MAKE CONNECTIONS IN MONGOOSE</h1>

<h2>1. install mongoose in project</h2>
<h3>npm user</h3>
<pre class="language-js">
            <code>{`npm i mongoose`}
</code> </pre>
<h3>yarn user</h3>
<pre class="language-js">
            <code>{`yarn i mongoose`}
</code> </pre>

<h1>Its better to create new folder for storing all database files</h1>
<h2>2. Require mongoose in express</h2>
<h3>db/Connection.js</h3>
<pre class="language-js">
            <code>{`const mongoose=require('mongoose');`}
</code> </pre>

<h2>3. Make connection</h2>
<h3>3.1 copy your uri to connect with server</h3>
<pre class="language-js">
            <code>{`const mongooseURI="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";`}
</code> </pre>
<p>you can also paste your mongodb atlas string here for make connection</p>

<h3>3.2 Now make connection with mongodb database</h3>
<pre class="language-js">
            <code>{`const MongooseCon=async()=>{
try{
  const dbcon=await mongoose.connect(mongooseURI)
if(dbcon){
    console.log('database successfully connected');
}

   }
   //if server not connect
catch(e){
    console.log('data not connected'+e);
}
 };`}
</code> </pre>

<h3>3.3 we need to export connection</h3>
<pre class="language-js">
            <code>{`module.exports=MongooseCon;`}
</code> </pre>
<p>we need to export your function so that we can call this from any file</p>

<h3>3.4 now call this in server/app.js</h3>
<pre class="language-js">
            <code>{`const MongooseCon=require('./db/Connection');`}
</code> </pre>

<h3>3.5 call this at bottom where package requires</h3>
<pre class="language-js">
            <code>{`MongooseCon();`}
</code> </pre>

<h2>Full code together</h2>
<h3>db/Connection.js</h3>
<pre class="language-js">
<code>{`const mongoose=require('mongoose');
const mongooseURI="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const MongooseCon=async()=>{
try{
  const dbcon=await mongoose.connect(mongooseURI)
if(dbcon){
    console.log('database successfully connected');
}

   }
   //if server not connect
catch(e){
    console.log('data not connected'+e);
}
 };

module.exports=MongooseCon;`}
</code> </pre>

<h3>server/app.js</h3>
<pre class="language-js">
            <code>{`const MongooseCon=require('./db/Connection');
            MongooseCon();`}
</code> </pre>
</div>
</div>
</>
    )
}
