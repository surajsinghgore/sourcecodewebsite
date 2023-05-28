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



export default function StartBackendFrontent() {
        usePrismHighlightAll(); 
        let SubIcon =
        "https://static.thenounproject.com/png/2584614-200.png";
        return (
            <>
               <LoginCheck />
      <MainHeader />
      <SideNavBar
        homeOn={false}
        codeOn={true}
        studyOn={false}
        noteOn={false}
        videoOn={false}
        detailOn={false}
      />
      <div className="template">
        <div className="top-title">
          <span>NPM CONCURRENTLY</span>
    
          <img src={SubIcon} alt={SubIcon} id="b"/>
        </div>
    
        <div className="allData">
    <h1>FOLLOW ALL THE STEPS TO RUN FRONTEND AND BACKEND TOGETHER</h1>
    <h2>Step 1: install this package</h2>
    <pre class="language-js">
            <code>{`npm install concurrently`}
</code> </pre>
<h2>step 2: add this in script of clinet/package.json</h2>
<pre class="language-js">
            <code>{`"both":"concurrently"npm run start" "nodemon ../server.js "" `}
</code> </pre>
<p>../server is the path of my backend server</p>
<h2>Step 3: open terminal in clinet path folder and type </h2>
<pre class="language-js">
            <code>{`npm run both`}
</code> </pre>

<h2>your both backend and frontent start together</h2>
    </div></div>
        </>
    )
}
