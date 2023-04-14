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



export default function Reactrouterdom() {
  usePrismHighlightAll(); 
  let reactrouterdom="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/reactrouterdom.png";
    return (
        <div>
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
          <span>React router dom</span>{" "}
          <img src={reactrouterdom} alt={reactrouterdom} />
        </div>

        <div className="allData">
          <h1>Follow all the steps properly</h1>

          <h2>1. install react router dom </h2>
          <h3>for NPM user</h3>

          <pre class="language-js">
            <code>npm install react-router-dom</code>
          </pre>

          <p>
            this will help you to install react router dom successfully in your
            project
          </p>

          <h2>2. import react router dom in your react project</h2>
          <h3>index.js</h3>
          <pre class="language-javascript">
            <code>
              {`import {BrowserRouter} from "react-router-dom";
 ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
); `}
            </code>
          </pre>
          <p>OR another way is</p>

          <pre class="language-javascript">
            <code>
              {`import { BrowserRouter as Router}from "react-router-dom";
 ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
); `}
            </code>
          </pre>

          <h3>app.js</h3>
          <pre class="language-javascript">
            <code>
              {`import { Switch, Route} from "react-router-dom";
 <Switch>
         <Route exact path="/">
            <Home />
         </Route>
         <Route exact path="/about">
            <About />
         </Route>
         <Route exact path="/users">
            <Users />
          </Route>
         <Route component={Error} />
 </Switch> `}
            </code>
          </pre>
          <p>its recommend to use [ exact ] keyword in Route</p>

 <h3>Allfiles.js</h3>

<pre class="language-javascript">
  <code>{`import {Link} from "react-router-dom";
  <li>
     <Link to="/">Home</Link>
  </li>
  <li>
   <Link to="/about">About</Link>
  </li>`}</code>
</pre>
<p>Done you have successfully install react-router-dom in your project</p>


        </div>
      </div>
    </div>
    
    )
}
