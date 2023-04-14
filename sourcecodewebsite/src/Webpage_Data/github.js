import SideNavBar from "../components/SideNavBar";
import MainHeader from "../components/MainHeader";
import "../css/github.css";

import "../css/prism.css";

import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import LoginCheck from "../pages/LoginCheck";

// data of this page
import Htmlcssongit from "./Htmlcssongit";
import Reactongit from "./Reactongit";

const Github = () => {
  let github="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/github.svg";
  // show on single click
  const HTML = () => {
    let closes = document.getElementById("closes");
    let htmlgit = document.getElementById("htmlgit");
    htmlgit.style.display = "block";
    closes.style.display = "block";
  };
  const React = () => {
    let closes = document.getElementById("closes");
    let htmlgit = document.getElementById("Reactgit");
    htmlgit.style.display = "block";
    closes.style.display = "block";
  };

  // hide on double click
  const hide = () => {
    let closes = document.getElementById("closes");
    let htmlgit = document.getElementById("htmlgit");
    htmlgit.style.display = "none";
    closes.style.display = "none";
  };
  const Reacthide = () => {
    let closes = document.getElementById("closes");
    let htmlgit = document.getElementById("Reactgit");
    htmlgit.style.display = "none";
    closes.style.display = "none";
  };

  return (
    <>
    <LoginCheck />
    <MainHeader />
      <div className="github">
        <div className="title">
          <img src={github} alt="github img" /> <p>GITHUB</p>
        </div>

        <div className="datas">
          <h2>CONTENTS WE HAVE FOR GITHUB  <span className="opens"><FolderOpenIcon className="opn"/>Single Click to Open <CancelPresentationIcon className="opns"/> Double Click to Close</span> </h2>

          <div className="urls">
            {/* //*! 1. HTML,CSS Website HOST ON GITHUB */}

            <ArrowRightAlt className="arrow" />
            <li onClick={HTML} onDoubleClick={hide}>
              {" "}
              HOW TO HOST HTML,CSS WEBSITE ON GITHUB{" "}
              <CancelPresentationIcon className="closes" id="closes" />
            </li>

            <Htmlcssongit />

            {/* //*! 2. REACT WEBSITE HOST ON GITHUB */}

            <ArrowRightAlt className="arrow" />
            <li onClick={React} onDoubleClick={Reacthide}>
              {" "}
              HOW TO HOST REACT WEBSITE ON GITHUB{" "}
              <CancelPresentationIcon className="closes" id="closes" />
            </li>
            <Reactongit />

            <ArrowRightAlt className="arrow" />
            <li>
              HOW TO HOST WEBSITE USING GITHUB DESKTOP{" "}
              <CancelPresentationIcon className="closes" id="closes" />
            </li>

            <ArrowRightAlt className="arrow" />
            <li>
              {" "}
              GITHUB COMMANDS{" "}
              <CancelPresentationIcon className="closes" id="closes" />
            </li>
          </div>
        </div>
      </div>

      <SideNavBar homeOn={false} codeOn={false} studyOn={true} noteOn={false} videoOn={false} detailOn={false}/>
    </>
  );
};

export default Github;
