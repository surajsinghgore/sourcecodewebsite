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

export default function ExpressRouter() {
    usePrismHighlightAll(); 
    let SubIcon =
    "https://cdn4.iconfinder.com/data/icons/electronics-24/100/Electronics_Copy_40-512.png";
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
      <span>EXPRESS ROUTER</span><img src={SubIcon} alt={SubIcon} id="a"/>
    </div>

    <div className="allData">
<h1>FOLLOW THE STEPS TO SET UP EXPRESS ROUTER</h1>

<h2>Their are variour ways to create router in express</h2>
<h2>1. FIRST'WAY</h2>
<p>Create a folder router/auth inside folder create router files</p>
<h3>app.js or server.js</h3>
<pre class="language-js">
            <code>{`const express=require('express');
            const app=express();
            app.use(require("./router/auth"));`}
</code> </pre>
<h3>inside router/auth.js</h3>
<pre class="language-js">
            <code>{`const express = require("express");
            const router = express.Router();
            router.post("/registers", (req, res) => {
                //code
            })
            
            module.exports = router;`}
</code> </pre>
<p>you can put all get and post method inside auth.js folder</p>

<h2>2. Second way</h2>
<p>Create a folder router inside folder create different-different files</p>
<h3>app.js or server.js</h3>
<pre class="language-js">
            <code>{`const express=require('express');
const app=express();
app.use("/register",require('./router/Register'));
app.use("/register",require('./router/Login'));`}
</code> </pre>

<h3>inside router/Register</h3>
<pre class="language-js">
            <code>{`const express = require("express");
            const router = express.Router();
            router.post("/", (req, res) => {
                //code
            })
            
            module.exports = router;`}
</code> </pre>

<h3>inside router/Login</h3>
<pre class="language-js">
            <code>{`const express = require("express");
            const router = express.Router();
            router.post("/", (req, res) => {
                //code
            }
            
            module.exports = router;`}
</code> </pre>
<p>using this method you  can put get and post method separately</p>
</div>
</div>
</>
    )
}
