import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import {Link} from 'react-router-dom';
import LoginCheck from "../pages/LoginCheck";
import '../css/mainItems.css';

import MainItemsHeader from '../components/MainItemsHeader';
export default function Firebase() {
     let firebaseIcon="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/29888d918b2b210c3ceb52934b01ed27fd56d125/firebase.svg";
    
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
      <MainItemsHeader Heading="firebase" HeadImg={firebaseIcon} />

          <div className="data-items">
              <h1>content we have for firebase</h1>

             <Link to="/realtimedatabaseinfirebase"> <li>How to send data in realtime database</li></Link>
             
          </div>
      </div>
       </>
    )
}
