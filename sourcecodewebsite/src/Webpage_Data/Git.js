import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import {Link} from 'react-router-dom';
import LoginCheck from "../pages/LoginCheck";
import '../css/mainItems.css';
import MainItemsHeader from '../components/MainItemsHeader';

export default function Git() {
    let Icon="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/62e247736ed96956f8a3d4e269af5ed1a13c8ce0/git.svg";
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
      <div className="Items">
      <MainItemsHeader Heading="GIT" HeadImg={Icon} />

          <div className="data-items">
              <h1>content we have for GIT</h1>

             <Link to="/multipleaccountingit"> <li>HOW TO USE MULTIPILE GITHUB ACCOUNTS IN GIT</li></Link>
             
          </div>
      </div> 
        </>
    )
}
