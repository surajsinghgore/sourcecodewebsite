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

export default function SetupExpress() {
    usePrismHighlightAll(); 
    let SubIcon ="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/express.png";
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
      <span>EXPRESS SETUP</span><img src={SubIcon} alt={SubIcon} id="b"/>
    </div>

    <div className="allData">
<h1>FOLLOW THE STEPS TO SETUP EXPRESS IN NODEJS</h1>

<h2>following methods used</h2>
<h3>npm user</h3>
<pre class="language-js">
            <code>{`npm i express`}
</code> </pre>
<h2>code to initialize express in node</h2>
<pre class="language-js">
            <code>{`const express = require('express');
const app = express();
const port = 3000;

app.use('/',(req,res)=>{
  res.send('hello')
});

app.listen(port, () => {
  console.log(\`server is running on port\${port}\`)
});`}
</code> </pre>
</div>
</div>
</>
    )
}
