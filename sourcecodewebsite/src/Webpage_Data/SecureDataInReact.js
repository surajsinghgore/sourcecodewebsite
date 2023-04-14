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

export default function SecureDataInReact() {
  usePrismHighlightAll(); 
    let img1="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/react/securecode/1.png";
    let img2="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/react/securecode/2.png";
    let img3="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/react/securecode/3.png";
    let img4="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/react/securecode/4.png";
    let img5="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/react/securecode/5.png";
    let SubIcon =
    "https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/400883ac7606145c2c07a3b58c0d0748425a2007/secure.svg";
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
          <span>HOW TO SECURE IMPORTANT CODE IN REACT</span>

          <img src={SubIcon} alt={SubIcon} />
        </div>

        <div className="allData">
<h1>Follow all the steps properly</h1>
<h2>1. Create .env file in root folder</h2>
<img src={img1} alt={img1} className="imgs"/>
<h2>2. Add your secret code inside .env file</h2>
<h3>You need to write REACT_APP_YOUR API NAME= your api value</h3>
<img src={img2} alt={img2} className="imgs"/>
<p>name of api should start from REACT_APP_   then key and value</p>


<h2>3. Add .env file in .gitignore</h2>
<img src={img3} alt={img3} className="imgs"/>

<h2>4. To call Secret code in files</h2>
<h3>process.env.REACT_APP_ name of your code</h3>
<img src={img4} alt={img4} className="imgs"/>


<h2>RESTART YOUR SERVER</h2>

<h3>CODE SUCCESSFULLY SHOW IN FILES</h3>
<img src={img5} alt={img5} className="imgs"/>
            </div>
      </div>
        </>
    )
}
