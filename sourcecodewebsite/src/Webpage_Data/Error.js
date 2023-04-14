import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import {Link} from 'react-router-dom';
import LoginCheck from "../pages/LoginCheck";
import '../css/mainItems.css';
import MainItemsHeader from '../components/MainItemsHeader';

export default function Error() {
    let Icon="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/c0f41257a1509a4e9deea76e7d343be76385817d/error/2.svg";
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
      <div className="Items">
      <MainItemsHeader Heading="ERROR'S" HeadImg={Icon} />

          <div className="data-items">
              <h1>different types of error we have</h1>

             <Link to="/error/august13"> <li>support for password authentication was removed on august 13,2021 in git</li></Link>
             <Link to="/multipleaccountingit"> <li>Permission denied to username in git or github</li></Link>
             
          </div>
      </div> 
        </>
    )
}
