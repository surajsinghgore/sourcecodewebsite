import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import LoginCheck from "../pages/LoginCheck";
import "../css/demo.css";
import "../css/prismdemo.css";
import multipleAccount from '../api/git/multipleaccount/multile.account'


export default function MultipleAccountInGit() {
    let SubIcon =
    "https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/b9c4abe60fafa2c4edb227b7eb8f237cb844fe20/multiple.svg";
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
          <span>HOW TO USE MULTIPLE ACCOUNT IN GIT TO PUSH PROJECTS</span>

          <img src={SubIcon} alt={SubIcon} />
        </div>

        <div className="allData">
          <h1>{multipleAccount[0].h1}</h1>

          <h2>{multipleAccount[0].h2}</h2>

          <h3>{multipleAccount[0].h3}</h3>
          <img
            src={multipleAccount[0].img}
            alt={multipleAccount[0].img}
            className="imgs"
          />

<h2>{multipleAccount[1].h2}</h2>

<h3>{multipleAccount[1].h3}</h3>
         
<h2>{multipleAccount[2].h2}</h2>
 <img
            src={multipleAccount[2].img}
            alt={multipleAccount[2].img}
            className="imgs"
          />
          

          <h2>{multipleAccount[3].h2}</h2>
 <img
            src={multipleAccount[3].img}
            alt={multipleAccount[3].img}
            className="imgs"
          />

<h2>{multipleAccount[4].h2}</h2>
 <img
            src={multipleAccount[4].img}
            alt={multipleAccount[4].img}
            className="imgs"
          />
          <p>{multipleAccount[4].p}</p>


          <h2>{multipleAccount[5].h2}</h2>
 <img
            src={multipleAccount[5].img}
            alt={multipleAccount[5].img}
            className="imgs"
          />

<h2>{multipleAccount[6].h2}</h2>
 <img
            src={multipleAccount[6].img}
            alt={multipleAccount[6].img}
            className="imgs"
          />
         
          <p>{multipleAccount[6].p}</p>
          <h1>{multipleAccount[6].h1}</h1>
          <h3>{multipleAccount[6].h3}</h3>
          </div>
      </div> 
        </>
    )
}
