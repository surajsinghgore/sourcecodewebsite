import { Link } from "react-router-dom";



const MainStudyIcons = () => {
  
let js="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/js.svg";
let html="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/html.svg";
let react="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/react.svg";
let css="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/css.svg";
let node="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/node.svg";
let github="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/github.svg";
let mysql="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/mysql.svg";
let mongodb="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/mongodb.svg";
let java="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/java.svg";
let npm="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/npm.png";
let express="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/express.png";
let heroku="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/aa26b05a58adf77569b7ef1f7a0adfe7dd7c6e0c/heroku.png";
let git="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/62e247736ed96956f8a3d4e269af5ed1a13c8ce0/git.svg";
let firebase="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/29888d918b2b210c3ceb52934b01ed27fd56d125/firebase.svg";
let mongoose="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/mongoose.png";


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
