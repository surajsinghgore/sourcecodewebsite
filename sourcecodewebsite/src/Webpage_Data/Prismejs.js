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


export default function Prismejs() {
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
      <span>PRISMJS IN REACT</span>

      <img src={SubIcon} alt={SubIcon} />
    </div>

    <div className="allData">
<h1>FOLLOW ALL THE STEPS TO HIGHLIGHT YOUR CODE</h1>
<h2>Step 1: Open up the terminal and install prismjs with npm</h2>
<pre class="language-git">
            <code>{`npm install prismjs`}
</code> </pre>
<h2>Step 2: Import prismjs into your component</h2>
<h3>src/pages/file you wanted to add</h3>
<pre class="language-git">
            <code>{`import Prism from "prismjs";`}
</code> </pre>


<h2>Step 3: Select your preferred theme type from the prism website</h2>
<h3>you can find all the themes in prismjs node_modules folder</h3>
<pre class="language-html">
            <code>{`import 'prismjs/themes/prism-okaidia.css'`}
</code> </pre>
<p>you can put your favourite after thems/ name of your them.css</p>


<h2>Step 4: Put your code inside below code block</h2>
<h3>you can find all the themes in prismjs node_modules folder</h3>

<pre class="language-js">
 <code>
{`<pre>
<code className="language-nameOfLanguage">
{\`
    onSubmit(e) {
      e.preventDefault();
      const job = {
        title: 'Developer',
        company: 'Facebook' 
        };
      }
  \`}
  </code>
</pre>`}

</code> </pre>
<h3>for css</h3>
<pre class="language-html">
            <code>{`<code className="language-css">`}</code> </pre>

<h3>for javascript</h3>
<pre class="language-html">
            <code>{`<code className="language-javascript">`}
</code> </pre>


<h2>Step 5: To enable prism with their plugins without reload page</h2>
<h3>import your plugins</h3>
<pre>
 <code  class="language-js">{`import React,{ useEffect } from "react";
import Prism from "prismjs";
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';
import 'prismjs/plugins/toolbar/prism-toolbar.min'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/toolbar/prism-toolbar.css';`}
</code> </pre>
<p>your all favourite plugins avaliable in 'prismjs packages', you need to call them </p>

<h2>Syntex highlight working without refreshing page you need to do</h2>
<pre class="language-js">
            <code>{`function usePrismHighlightAll() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
}
export default function Prismejs() {
    usePrismHighlightAll();
 return(
`}
</code> </pre>
</div>
  </div> 
        </>
    )
}
