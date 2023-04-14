import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import LoginCheck from "../pages/LoginCheck";
import "../css/demo.css";

import Table from './Table';
export default function VsCodeShortcuts() {
    let reactrouterdom="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/vscode.svg";
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
          <span>VS code shortcuts</span>{" "}
          <img src={reactrouterdom} alt={reactrouterdom} />
        </div>

        <div className="allData">
          <h1>Important vscode shortcuts</h1>
<Table />
         

          </div>
      </div>
  
        </>
    )
}
