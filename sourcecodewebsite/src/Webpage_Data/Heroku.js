import SideNavBar from "../components/SideNavBar";
import LoginCheck from "../pages/LoginCheck";
import "../css/github.css";

import "../css/prism.css";

import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import Reactonheroku from "./Reactonheroku";
import UpdateMernonheroku from "./UpdateMernonheroku";
import MainHeader from "../components/MainHeader";


export default function Heroku() {
  let heroku="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/heroku.png";
    const mern = () => {
        let closes = document.getElementById("closes");
        let htmlgit = document.getElementById("htmlgit");
        htmlgit.style.display = "block";
        closes.style.display = "block";
      };
      const hide = () => {
        let closes = document.getElementById("closes");
        let htmlgit = document.getElementById("htmlgit");
        htmlgit.style.display = "none";
        closes.style.display = "none";
      };

    //   mern update
    const mernupdate = () => {
        let closes = document.getElementById("closes");
        let updatemern = document.getElementById("updatemern");
        updatemern.style.display = "block";
        closes.style.display = "block";
      };
      const hideupdate = () => {
        let closes = document.getElementById("closes");
        let updatemern = document.getElementById("updatemern");
        updatemern.style.display = "none";
        closes.style.display = "none";
      };

      // useEffect(()=>{
      //   window.location.reload(true);
      // },[1])
    return (
        <>
            <LoginCheck />
        <MainHeader />
             <div className="github">
        <div className="title">
          <img src={heroku} alt={heroku} unselectable="on" /> <p>HEROKU</p>
        </div>

        <div className="datas">
          <h2>CONTENTS WE HAVE FOR HEROKU <span className="opens"><FolderOpenIcon className="opn"/>Single Click to Open <CancelPresentationIcon className="opns"/> Double Click to Close</span> </h2>

          <div className="urls">
            {/* //*! 1. MERN WEBSITE ON HEROKU */}

            <ArrowRightAlt className="arrow" />
            <li onClick={mern} onDoubleClick={hide}>
              {" "}
              HOW TO HOST MERN WEBSITE ON HEROKU{" "}
              <CancelPresentationIcon className="closes" id="closes" />
            </li>

            <Reactonheroku />


            <ArrowRightAlt className="arrow" />
            <li onClick={mernupdate} onDoubleClick={hideupdate}>
              {" "}
              HOW TO UPDATE MERN WEBSITE ON HEROKU{" "}
              <CancelPresentationIcon className="closes" id="closes" />
            </li>

            <UpdateMernonheroku />
            </div>
        </div>
      </div>

      <SideNavBar homeOn={false} codeOn={false} studyOn={true} noteOn={false} videoOn={false} detailOn={false} />
        </>
    )
}
