import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import LoginCheck from "../pages/LoginCheck";
import "../css/demo.css";

import readApi from "../api/api/readApi";
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

export default function Readapi() {
  usePrismHighlightAll(); 
    let api ="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/c67605a14382b8c4eb93ee76b89c1c39a8375d5b/api1.svg"
    return (
        <>
            <LoginCheck />
      <MainHeader />
      <SideNavBar
        homeOn={false}
        codeOn={false}
        studyOn={false}
        noteOn={true}
        videoOn={false}
        detailOn={false}
      />
      <div className="template">
        <div className="top-title">
          <span>Read API OR FETCH API</span>

          <img src={api} alt={api} />
        </div>
        <div className="allData">
          <h1>{readApi[0].h1}</h1>
<h2>{readApi[0].h2}</h2>
          <pre class="language-js">
            <code>
              {readApi[0].code}
            </code>
          </pre>
<p>{readApi[0].p}</p>
          <h2>{readApi[1].h2}</h2>
          <pre class="language-js">
            <code>
              {readApi[1].code}
            </code>
          </pre>
          <p>{readApi[1].p}</p>
          </div>
        </div>
        </>
    )
}
