
import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import CodeProp from "../props/CodeProp";

export default function Demo() {
 
  let reactrouterdom="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/reactrouterdom.png";
  return (
    <div>
      <MainHeader />
      <SideNavBar
        homeOn={false}
        codeOn={false}
        studyOn={true}
        noteOn={false}
        videoOn={false}
        detailOn={false}
      />

      <div className="template">
        <div className="top-title">
          <span>DEMO</span>{" "}
          <img src={reactrouterdom} alt={reactrouterdom} />
        </div>
        <div className="allData">
        
<CodeProp lang="js" code={`const a=10; 
let b=20;
let aa=23;`}/>

</div>
    </div>
    </div>
  );
}
