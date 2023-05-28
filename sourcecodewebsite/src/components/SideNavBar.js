import "../css/sidenavbar.css";
import MainHomeIcons from '../props/MainHomeIcons';
import StudySideBar from "./StudySideBar";


import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { useEffect, useState } from "react";


import DetailsSidebar from "./DetailsSidebar";
import SoucecodeSidebar from './SoucecodeSidebar'
// icons
import CodeIcon from "@material-ui/icons/Code";
import InfoIcon from "@material-ui/icons/Info";
import NoteIcon from "@material-ui/icons/Note";
import HomeIcon from "@material-ui/icons/Home";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import NotesSidebar from "./NotesSidebar";




const SideNavBar = (props) => {

  const [home,setHome]=useState(true);
  const [scode,setScode]=useState(false);
  const [study,setStudy]=useState(false);
  const [note,setNote]=useState(false);
  const [video,setVideo]=useState(false);
  const [detail,setDetail]=useState(false);


 const homeClick=()=>{
 setHome(true)
 setScode(false)
 setStudy(false)
 setNote(false)
 setVideo(false)
 setDetail(false)
 }
 

 
 const codeClick=()=>{
   setHome(false)
   setScode(true)
   setStudy(false)
   setNote(false)
   setVideo(false)
   setDetail(false)
   }
 
   const studyClick=()=>{
     setHome(false)
     setScode(false)
     setStudy(true)
     setNote(false)
     setVideo(false)
     setDetail(false)
   }

   const noteClick=()=>{
     setHome(false)
 setScode(false)
 setStudy(false)
 setNote(true)
 setVideo(false)
 setDetail(false)
   }
 
   const videoClick=()=>{
     setHome(false)
 setScode(false)
 setStudy(false)
 setNote(false)
 setVideo(true)
 setDetail(false)
   }
 
   const detailClick=()=>{
     setHome(false)
 setScode(false)
 setStudy(false)
 setNote(false)
 setVideo(false)
 setDetail(true)
   }



useEffect(()=>{
  if(props.homeOn===true){
    setHome(true)
    setScode(false)
    setStudy(false)
    setNote(false)
    setVideo(false)
    setDetail(false)
  }
 
  else if(props.codeOn===true){
    setHome(false)
    setScode(true)
    setStudy(false)
    setNote(false)
    setVideo(false)
    setDetail(false)
  }
 
  else if(props.studyOn===true){
    setHome(false)
    setScode(false)
    setStudy(true)
    setNote(false)
    setVideo(false)
    setDetail(false)
  }
 
  else if(props.noteOn===true){
    setHome(false)
    setScode(false)
    setStudy(false)
    setNote(true)
    setVideo(false)
    setDetail(false)
  }
  else if(props.videoOn===true){
    setHome(false)
    setScode(false)
    setStudy(false)
    setNote(false)
    setVideo(true)
    setDetail(false)
  }
  else if(props.studyOn===true){
    setHome(false)
    setScode(false)
    setStudy(false)
    setNote(false)
    setVideo(false)
    setDetail(true)
  }
 
// eslint-disable-next-line react-hooks/exhaustive-deps
});
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

  const IconData=()=>{
    if(home===true){
      return(
        <>
<MainHomeIcons />
        </>
      )
    }
    if(scode===true){
      return(
        <>
<SoucecodeSidebar />
        </>
      )
    }
    
    else if(study===true){
      return(
        <>
<StudySideBar />
        </>
      )
    }

    if(note===true){
      return(
        <>
<NotesSidebar/>
        </>
      )
    }

    if(video===true){
      return(
        <>
<MainHomeIcons />
        </>
      )
    }
    if(detail===true){
      return(
        <>
<DetailsSidebar />
        </>
      )
    }
  }
 return (
   <>
     <button className="open" id="open" onClick={ShowSideMenu}><MenuOpenIcon className="btn"/></button>
     <button className="close" id="close" onClick={CloseSideMenu}><CancelPresentationIcon className="btn1"/></button>
    <div className="sidenavbar" id="sidenavbar">
  
      <div className="comp">Components</div>

      <div className="side-icon">
      <li title="Home" className={`${home===true?'active':' '}`} id="home" onClick={homeClick}>
          <HomeIcon id="icons" className={`${home===true?'actives':' '}`} />
        </li>


        <li title="source Code" id="code" className={`${scode===true?'active':' '} `} onClick={codeClick}>
          <CodeIcon id="icons" className={`${scode===true?'actives':' '}`}/>
        </li>


        <li title="Study" id="study" className={`${study===true?'active':' '}`} onClick={studyClick}>
          <ImportContactsIcon id="icons" className={`${study===true?'actives':' '}`}/>
        </li>

        <li title="Notes" id="notes" className={`${note===true?'active':' '}`} onClick={noteClick}>
          <NoteIcon id="icons" className={`${note===true?'actives':' '}`}/>
        </li>

        <li title="Videos" className={`${video===true?'active':' '}`} onClick={videoClick}>
          <VideoLibraryIcon id="icons" className={`${video===true?'actives':' '}`}/>
        </li>

        <li title="Details" className={`${detail===true?'active':' '}`} onClick={detailClick}>
          <InfoIcon id="icons" className={`${detail===true?'actives':' '}`}/>
        </li>
      </div>

      <div className="main-items">
        <div className="home-Items">
{<IconData />}
        </div>
      </div>
    </div>
    </>
  );
};

export default SideNavBar;
