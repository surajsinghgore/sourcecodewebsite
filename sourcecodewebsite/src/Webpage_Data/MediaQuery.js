import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import LoginCheck from "../pages/LoginCheck";

import '../css/mainItems.css';
import CodeProp from "../props/CodeProp";

export default function MediaQuery() {
    let SubIcon="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/res2.png";
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
  <div className="template">
    <div className="top-title">
      <span>MEDIA QUERY</span><img src={SubIcon} alt={SubIcon} id="b"/>
    </div>

    <div className="allData">

<h1>MEDIA QUERY FOR ALL DEVICES</h1>
<h2>Add this in main index.html head section</h2>
<CodeProp lang="js" code={`<meta name="viewport" content="width=device-width, initial-scale=1" />`}/>
<h3>above title tag</h3>
<h2>1. For small smartphones </h2>
<CodeProp lang="css" code={`@media screen and (max-width: 767px) {
    // responsive code 
}`}/>

<h2>2. For Tablet and Large smartphones </h2>
<CodeProp lang="css" code={`@media screen and(min-width: 768px)and (max-width: 1023px){ 
    // responsive code 
}`}/>

<h2>3. For Laptops, Larger tablets in landscape, and small desktop</h2>
<CodeProp lang="css" code={`@media screen and(min-width: 1024px){ 
    // responsive code 
}`}/>


    </div>
  </div>

        </>
    )
}
