import { Link } from "react-router-dom";
import "../css/sidenavbar.css";
import MainHeader from "./MainHeader";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";


import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
// material Ui Icons
import CodeIcon from "@material-ui/icons/Code";
import InfoIcon from "@material-ui/icons/Info";
import NoteIcon from "@material-ui/icons/Note";
import HomeIcon from "@material-ui/icons/Home";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

const VideosSidebar = () => {

  
  const ShowSideMenu=()=>{
    let open=document.getElementById('open');
    let close=document.getElementById('close');
    let sidenavbar=document.getElementById('sidenavbar');
    
    open.style.display="none";
    sidenavbar.style.display="block";
    close.style.display="block";
      }
    
      const CloseSideMenu=()=>{
        let open=document.getElementById('open');
    let close=document.getElementById('close');
    let sidenavbar=document.getElementById('sidenavbar');
        open.style.display="block";
        sidenavbar.style.display="none";
        close.style.display="none";
      }
  const history = useHistory();

  const Authentication = async () => {
    try {
      const res = await fetch("/authentications", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        credentials: "include",
      });
       await res.json();

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  };

  useEffect(() => {
    Authentication();
  });

  return (
    <>
    <button className="open" id="open" onClick={ShowSideMenu}><MenuOpenIcon className="btn"/></button>
     <button className="close" id="close" onClick={CloseSideMenu}><CancelPresentationIcon className="btn1"/></button>
      <div>
        <MainHeader />
        <div className="sidenavbar" id="sidenavbar">
          <div className="comp">Components</div>

          <div className="side-icon">
            <Link to="main">
              {" "}
              <li title="Home" id="home">
                <HomeIcon id="icons" />
              </li>
            </Link>

            <Link to="/soucecodebar">
              {" "}
              <li title="source Code" id="code">
                <CodeIcon id="icons" />
              </li>
            </Link>

            <Link to="/studybar">
              <li title="Study">
                <ImportContactsIcon id="icons" />
              </li>
            </Link>

            <Link to="/notesbar">
              <li title="Notes" id="notes">
                <NoteIcon id="icons" />
              </li>
            </Link>

            <Link to="/videosbar">
              <li title="Videos" className="active">
                <VideoLibraryIcon id="icons" className="actives" />
              </li>
            </Link>

            <Link to="/detailsbar">
              <li title="Details">
                <InfoIcon id="icons" />
              </li>
            </Link>
          </div>
          <div className="main-items">
            <div className="study-items"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideosSidebar;
