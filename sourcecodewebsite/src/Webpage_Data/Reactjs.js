import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import {Link} from 'react-router-dom';
import '../css/react.css';
import LoginCheck from '../pages/LoginCheck';
export default function Reactjs() {
    let react="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/react.svg";
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
      <div className="react">
          <div className="top-heading">
              <span>REACTJS</span> <img src={react} alt={react} />
          </div>

          <div className="data-items">
              <h1>content we have for reactjs</h1>

             <Link to="/reactrouterdom"> <li>React Router Dom</li></Link>
             <Link to="/react/securecode"> <li>HOW TO SECURE IMPORTANT CODE IN REACT</li></Link>
             
          </div>
      </div>
        </>
    )
}
