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

export default function SecurecodeforExpress() {
  usePrismHighlightAll(); 
    let SubIcon =
    "https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png";
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
          <span>HOW TO SECURE CODE IN EXPRESS</span>

          <img src={SubIcon} alt={SubIcon} id="b"/>
        </div>

        <div className="allData">
<h1>Follow the steps to use .dotenv</h1>

<h2>Step 1: install dotenv package</h2>
<h3>with npm</h3>
<pre>
  <code className="language-js">
    {`npm i dotenv`}
  </code>
</pre>
<h3>with yarn</h3>
<pre>
  <code className="language-js">
    {`yarn i dotenv`}
  </code>
</pre>


<h2>Step 2: create config.env file in main root folder of express project</h2>
<h3>file name</h3>
<pre>
  <code className="language-js">
    {`config.env`}
  </code>
</pre>
<h3>create file with command prompt</h3>
<pre>
  <code className="language-js">
    {`type null>config.env`}
  </code>
</pre>
<p>after this file created successfully</p>

<h2>Step 3: add your secret code inside config.env file</h2>
<pre>
  <code className="language-js">
    {`DATABASE=url_here
SECRET_KEY=paste_here
PORT=3500
`}
  </code>
</pre>
<p>please don't use single[''] or double[""] quotes also don't use semicolon[;] inside this file</p>
<h2>Step 4: Add this file in .gitignore file</h2>
<pre>
  <code className="language-js">
    {`/node_modules
/config.env`}
  </code>
</pre>
<h2>Step 5: How to use in express ?</h2>
<h2>import dotenv file main express file</h2>
<h3>app.js or server.js</h3>
<pre>
  <code className="language-js">
    {`const dotenv=require('dotenv');`}
  </code>
</pre>
<h2>require config.env file in project</h2>
<pre>
  <code className="language-js">
    {`dotenv.config({path:'./config.env'})`}
  </code>
</pre>
<h2>Pass config.env code  where you want</h2>
<pre>
  <code className="language-js">
    {`const db=process.env.DATABASE;
    //or 
const PORT=process.env.PORT;`}
  </code>
</pre>
<h2>for more details click below for official website</h2>
<h5><a href="https://www.npmjs.com/package/dotenv" target="_blank">click me</a></h5>
            </div>
      </div>
        </>
    )
}
