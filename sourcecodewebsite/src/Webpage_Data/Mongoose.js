import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import {Link} from 'react-router-dom';
import LoginCheck from "../pages/LoginCheck";
import '../css/mainItems.css';
import MainItemsHeader from '../components/MainItemsHeader';


export default function Mongoose() {
    let Icon="https://avatars.githubusercontent.com/u/7552965?s=280&v=4";
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
<MainItemsHeader Heading="MONGOOSE" HeadImg={Icon} />

   <div className="data-items">
       <h1>content we have for Mongoose</h1>

      <Link to="/mongoose/connection"> <li>1. HOW TO MAKE CONNECTION IN MONGOOSE</li></Link>
      <Link to="/mongoose/schema"> <li>2. HOW TO MAKE SCHEMA IN MONGOOSE</li></Link>
      <Link to="/mongoose/simplesenddata"> <li>3. HOW TO SEND USER DATA IN MONGODB DATABASE</li></Link>
      <Link to="/backendformvalidation"> <li>4. BACKEND FORM VALIDATION</li></Link>
      <Link to="/bcryptjs"> <li>5. BCRYPTJS</li></Link>
   </div>
</div> 
 </>
    )
}
