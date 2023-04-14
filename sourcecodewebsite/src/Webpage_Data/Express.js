import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import {Link} from 'react-router-dom';
import LoginCheck from "../pages/LoginCheck";
import '../css/mainItems.css';
import MainItemsHeader from '../components/MainItemsHeader';


export default function Mongoose() {
    let Icon="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/express.png";
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
<MainItemsHeader Heading="EXPRESS" HeadImg={Icon} />

   <div className="data-items">
       <h1>content we have for EXPRESS</h1>

      <Link to="/express/expresssetup"> <li>HOW TO SETUP EXPRESS IN NODE</li></Link>
      <Link to="/express/expressrouter"> <li>EXPRESS ROUTER</li></Link>
     
   </div>
</div> 
 </>
    )
}
