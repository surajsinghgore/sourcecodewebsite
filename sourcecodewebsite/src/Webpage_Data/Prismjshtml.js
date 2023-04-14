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


export default function Prismjshtml() {
    usePrismHighlightAll(); 
    let SubIcon =
    "https://prismjs.com/assets/logo.svg";
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
      <span>PRISMJS IN HTML CSS</span>

      <img src={SubIcon} alt={SubIcon} />
    </div>

    <div className="allData">
<h1>FOLLOW ALL THE STEPS TO HIGHLIGHT YOUR CODE</h1>
<h2>Step 1: GO TO PRISMJS WEBSITE AND DOWNLOAD YOUR PLUGINS IN JS AND CSS FILE WITH YOUR FAVOURITE THEMES</h2>
<h5><a href="https://prismjs.com" target="__blank">https://prismjs.com/</a></h5> 
<p>1.1 click on download button . 1.2 now select your themes and Languages and plugins 1.3 click on download js for javascript and click on download css for css</p>

<h2>Step 2: TO IMPLEMENT FOLLOW THE FOLLOWING</h2>
<h3>2.1 paste your js and css file in your html/css files</h3>

<h3>import js file in head section of index.html files</h3>
<p>Import js in index.html</p>
<pre class="language-html">
            <code>{`<script src="prism.js"></script>`}
</code> </pre>

<p>Import css in index.html</p>
<pre class="language-html">
            <code>{`<link rel="stylesheet" href="prism.css" />`}
</code> </pre>

<h2>Step 3: HOW TO MAKE CODE HIGHLIGHTER WORKING</h2>
<h3>for html codes</h3>
<pre className="language-html">
            <code>{`<pre class="language-html">
            <code >
            &lt;!DOCTYPE html&gt;
                &lt;html lang="en"&gt;
                &lt;head&gt;
                    &lt;meta charset="UTF-8"&gt;
                    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                    &lt;title&gt;Document&lt;/title&gt;
                &lt;/head&gt;
                &lt;body&gt;
                    
                &lt;/body&gt;
                &lt;/html&gt;
            </code></pre>`}
          
</code> </pre>
  <p> {`use &lt; sign form less [<] than and for greather than [>] you need to use &gt`};</p>

  <h3>for css</h3>
<pre className="language-css">
            <code>{` <pre class="language-css">
            <code >
               
.all{
    width: 98.6vw;
    background: rgb(235, 235, 235);
}
.main{
    position: relative;
    top: 0;
    left: 0;
    margin-left: 15%;
    width: 70vw;
    height: 700px;
   
text-align: center;
}
            </code></pre>`}
</code> </pre>


<h3>for javascript</h3>
<pre className="language-js">
            <code>{` <pre class="language-js">
            <code >
                var i=9;
                var ii=10;
                var r=i+ii;
                console.log(r);
            </code></pre>`}
</code> </pre>

<h3>for jsx</h3>
<pre className="language-js">
            <code>{` <pre class="language-jsx">
            <code >
                import React, { useEffect } from "react";
                import Prism from "prismjs";
                import "prismjs/themes/prism-tomorrow.css";
                import "./styles.css";
                
                export default function Code({ code, language }) {
                  useEffect(() => {
                    Prism.highlightAll();
                  }, []);
                  return (
                    <div className="Code">
                      <pre>
                        <code className={\`language-\${language}\`}>{code}</code>
                      </pre>
                    </div>
                  );
                };
            </code></pre>`}
</code> </pre>

<p>prismjs successfully working in html website</p>
   </div>
  </div>   
        </>
    )
}
