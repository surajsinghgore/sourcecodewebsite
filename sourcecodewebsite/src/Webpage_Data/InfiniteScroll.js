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


export default function InfiniteScroll() {
  usePrismHighlightAll(); 
   let img3='https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/extra/infinite%20scroll/3.png';
   let img4='https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/extra/infinite%20scroll/4.png';
   let img5='https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/extra/infinite%20scroll/5.png';
   let img6='https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/extra/infinite%20scroll/6.png';
    let SubIcon =
    "https://markplating.com/wp-content/themes/Mark-Plating-V1.0.10/images/mouse-scroll-figure.png";
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
      <span>HOW TO USE INFINITE SCROLL IN WEBPAGE</span>

      <img src={SubIcon} alt={SubIcon} />
    </div>

    <div className="allData">
<h1>FOLLOW ALL THE STEPS TO ADD INFINITE SCROLL IN YOUR WEBSITE</h1>
<h2>1. Import UseState , useEffect,useRef in your project</h2>
<pre class="language-js">
            <code>{`import { useEffect, useState, useRef } from "react";`}
</code> </pre>
<p>import this on top </p>

<h2>2. Now use useState to store datas</h2>
<pre class="language-js">
            <code>{`const [datas, setDatas] = useState([]);
const[pageNum,setPageNum]=useState(1);
const[loading,setLoading]=useState(false);`}
</code> </pre>
<p>we need to store api and extra data in useState</p>


<h2>2. Now use useState to store datas</h2>
<img
            src={img3}
            alt={img3}
            className="imgs"
          />




<pre class="language-js">
            <code>{` const worldData = async () => {
    const res = await fetch(
      $ {props.apis}&apiKey=$ {api}&page=$ {pageNum}
    );
    const data = await res.json(); 
    setDatas(d=>[...d, ...data.articles]);
    setLoading(true)
  };`}
</code> </pre>
<p>we need to store api and extra data in useState</p>



<h2>3. Now call above function in useState</h2>
<img
            src={img4}
            alt={img4}
            className="imgs"
          />
<pre class="language-js">
            <code>{`const ff=()=>{
  setPageNum(p=>p+1)
}
useEffect(() => {
    worldData();
  },[pageNum]);`}
</code> </pre>
<p>we to call both two function</p>



<h2>4. Now to the following code</h2>
<img
            src={img5}
            alt={img5}
            className="imgs"
          />
<pre class="language-js">
            <code>{`const pageEnd=useRef();
let num=1;
  useEffect(()=>{
if(loading){
const observer= new IntersectionObserver(function(entries, observer){
  console.log(entries)
if(entries[0].isIntersecting){
num++;
  ff();
  if(num>=3){
    observer.unobserve(pageEnd.current)
  }
}
},{threshold: 1});;
observer.observe(pageEnd.current)
}
  },[loading,num])`}
</code> </pre>
<p>now copy the above code </p>

<h2>5. Now write the useRef code in bottom of the webpage</h2>
<img
            src={img6}
            alt={img6}
            className="imgs"
          />
<pre class="language-js">
            <code>{`ref={pageEnd}`}
</code> </pre>
<p>put this in last div of the page</p>

      </div>
  </div> 
    </>
    )
}
