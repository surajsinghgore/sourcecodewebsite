import { Link } from "react-router-dom";
import CodeIcon from "@material-ui/icons/Code";
import InfoIcon from "@material-ui/icons/Info";
import NoteIcon from "@material-ui/icons/Note";
import HomeIcon from "@material-ui/icons/Home";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";


const StudySideIcon = () => {
    return (
        <>
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
            {" "}
            <li title="Study" className="active" id="study">
              <ImportContactsIcon id="icons" className="actives" />
            </li>
          </Link>

          <Link to="/notesbar">
            <li title="Notes" id="notes">
              <NoteIcon id="icons" />
            </li>
          </Link>

          <Link to="/videosbar">
            <li title="Videos">
              <VideoLibraryIcon id="icons" />
            </li>
          </Link>

          <Link to="/detailsbar">
            <li title="Details">
              <InfoIcon id="icons" />
            </li>
          </Link>
        </>
    )
}

export default StudySideIcon;
