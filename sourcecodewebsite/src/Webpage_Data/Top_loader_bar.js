import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import LoginCheck from "../pages/LoginCheck";
import "../css/demo.css";
import React,{ useEffect } from "react";
import Prism from "prismjs";
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';
import 'prismjs/plugins/toolbar/prism-toolbar.min'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
function usePrismHighlightAll() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
}

export default function Top_loader_bar() {
    usePrismHighlightAll(); 
     let SubIcon =
     "https://static.thenounproject.com/png/1600024-200.png";
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
  <div className="template">
    <div className="top-title">
      <span>HOW TO USE TOP LOADING BAR</span>

      <img src={SubIcon} alt={SubIcon} />
    </div>

    <div className="allData">
<h1>FOLLOW ALL THE STEPS TO ADD TOP LOADING BAR IN YOUR WEBSITE</h1>


<h2>Step 1: install this npm package</h2>
<pre>
    <code className="language-js">
        {`npm i react-top-loading-bar`}
    </code>
</pre>
<h2>Step 2: import top loading bar in project file</h2>
<pre>
    <code className="language-js">
        {`import LoadingBar from 'react-top-loading-bar';`}
    </code>
</pre>
<h2>Step 3: declare this useState in file</h2>
<pre>
    <code className="language-js">
        {`const [progress, setProgress] = useState(0);`}
    </code>
</pre>
<p>import useState in project</p>
<h2>Step 4: put Loadingbar top in return in file you want</h2>
<pre>
    <code className="language-js">
        {`return (
        <> 
        <LoadingBar
        color='#f11946'
        height={5}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />`}
    </code>
</pre>
<h2>Step 5: how to set progress</h2>
<pre>
    <code className="language-js">
        {` <NewsCard ppp={setProgress}/>`}
    </code>
</pre>
<p>pass this in props so that other file can setprogress</p>


<h2>now to setProgress we need to follow the following</h2>
<h3>props/NewsCard.js</h3>
<pre>
    <code className="language-js">
{`export default function NewsCard(props) {
    const worldData = async () => {
    props.ppp(10)
    const res = await fetch(
      \`\${props.apis}&apiKey=\${api}&page=\${pageNum}\`
    );
    props.ppp(30)
    const data = await res.json(); 
    props.ppp(50)
    // setDatas(data.articles);
    setDatas(d=>[...d, ...data.articles]);
    props.ppp(70)
    setLoading(true)
    props.ppp(100)
  };
`}
    </code>
</pre>
<h3>succesfully done</h3>
<h2>follow this website for extra knowledge</h2>
<h5><a href="https://www.npmjs.com/package/react-top-loading-bar" target="_blank">click here for official website</a></h5>

</div>
</div>
            
        </>
    )
}
