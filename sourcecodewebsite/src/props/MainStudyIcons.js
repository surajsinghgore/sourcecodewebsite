import { Link } from "react-router-dom";



const MainStudyIcons = () => {
  
let js="/js.svg";
let html="/html.svg";
let react="/react.svg";
let css="/css.svg";
let node="/node.svg";
let github="/github.svg";
let mysql="/mysql.svg";
let mongodb="/mongodb.svg";
let java="/java.svg";
let npm="/npm.png";
let express="/express.png";
let heroku="/heroku.png";
let git="/git.svg";
let firebase="/firebase.svg";
let mongoose="/mongoose.png";


  const CodeCard = (props) => {
    return (
      <>
        <Link to={props.Link}>
          <li>
            <img src={props.iconsTag} alt={props.alts} className="icon" />
            <h2>{props.H2}</h2>
          </li>
        </Link>
      </>
    );
  };

  return (
    <>
      <CodeCard Link="" iconsTag={html} H2="HTML" alts="html not display" />
      <CodeCard Link="" iconsTag={css} H2="CSS" alts="css not display" />
      <CodeCard
        Link="/jajass"
        iconsTag={js}
        H2="JAVASCRIPT"
        alts="js not display"
      />
      <CodeCard
        Link="/react"
        iconsTag={react}
        H2="REACT JS"
        alts="react not display"
      />
      <CodeCard Link="" iconsTag={node} H2="NODE JS" alts="node not display" />
      <CodeCard
        Link="/github"
        iconsTag={github}
        H2="GITHUB"
        alts="github not display"
        id="gitIcon"
      />
      <CodeCard Link="" iconsTag={mysql} H2="MYSQL" alts="mysql not display" />
      <CodeCard
        Link=""
        iconsTag={mongodb}
        H2="MONGODB"
        alts="mongodb not display"
      />
      <CodeCard Link="" iconsTag={java} H2="java" alts="java not display" />
      <CodeCard
        Link="/git"
        iconsTag={git}
        H2="GIT"
        alts="GIT not display"
      />
      <CodeCard
        Link="/express"
        iconsTag={express}
        H2="express"
        alts="express not display"
      />

      <CodeCard
        Link="/heroku"
        iconsTag={heroku}
        H2="heroku"
        alts="heroku not display"
      />
 <CodeCard
        Link="/firebase"
        iconsTag={firebase}
        H2="Firebase"
        alts="Firebase not display"
      />
      <CodeCard Link="" iconsTag={npm} H2="npm" alts="npm not display" />

      <CodeCard Link="/mongoose" iconsTag={mongoose} H2="mongoose" alts="mongoose not shows" />
    </>
  );
};

export default MainStudyIcons;
