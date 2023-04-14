import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import {Link} from 'react-router-dom';
import LoginCheck from "../pages/LoginCheck";
import '../css/mainItems.css';
import MainItemsHeader from '../components/MainItemsHeader';
export default function Api() {
    let Api="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/c67605a14382b8c4eb93ee76b89c1c39a8375d5b/api.svg";


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
      <MainItemsHeader Heading="API" HeadImg={Api} />

          <div className="data-items">
              <h1>content we have for Application programming interface</h1>

             <Link to="/readapi"> <li>How to read, fetch api using [async,await,then]</li></Link>
             
             <Link to="/postapi"> <li>How to post data using fetch</li></Link>
          </div>
      </div>   
        </>
    )
}
