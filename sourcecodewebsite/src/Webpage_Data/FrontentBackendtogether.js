import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import {Link} from 'react-router-dom';
import '../css/mainItems.css';
import MainItemsHeader from '../components/MainItemsHeader';

export default function FrontentBackendtogether() {
    let Icon="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/fbt.png";
    return (
        <>
            {/* <LoginCheck /> */}
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
<MainItemsHeader Heading="FRONTEND BACKEND TOGETHER" HeadImg={Icon} />

   <div className="data-items">
       <h1>Send Request from Frontend to Backend</h1>

      <Link to="/mongoose/connection"> <li>1. ADD DATA FROM FRONTENT TO BACKEND</li></Link>
      <Link to="/mongoose/connection"> <li>2. UPDATE DATA FROM FRONTENT TO BACKEND</li></Link>
      <Link to="/mongoose/connection"> <li>3. DELETE DATA FROM FRONTENT TO BACKEND</li></Link>
      <Link to="/mongoose/connection"> <li>4. SHOW DATA FROM FRONTENT TO BACKEND</li></Link>
      
   </div>
</div>  
        </>
    )
}
