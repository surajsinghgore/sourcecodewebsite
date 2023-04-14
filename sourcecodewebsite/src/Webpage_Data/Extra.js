import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import {Link} from 'react-router-dom';
import LoginCheck from "../pages/LoginCheck";
import '../css/mainItems.css';
import MainItemsHeader from '../components/MainItemsHeader';

export default function Extra() {
    let Icon="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/62e247736ed96956f8a3d4e269af5ed1a13c8ce0/git.svg";
    return (
        <>
        <LoginCheck />
        <MainHeader />
<SideNavBar
 homeOn={false}
 codeOn={true}
 studyOn={false}
 noteOn={false}
 videoOn={false}
 detailOn={false}
/>
<div className="Items">
<MainItemsHeader Heading="EXTRA FEATURES IN WEBSITE" HeadImg={Icon} />

   <div className="data-items">
       <h1>content we have for EXTRA Features</h1>

      <Link to="/infinitescroll"> <li>INFINITE SCROLL IN WEBPAGE</li></Link>
      <Link to="/prismjsreact"> <li>HOW TO USE PRISMJS IN REACT</li></Link>
      <Link to="/prismjshtmlcss"> <li>HOW TO USE PRISMJS WITH HTML CSS</li></Link>
   </div>
</div> 
 </>
    )
}
