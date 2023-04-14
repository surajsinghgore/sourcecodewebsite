import IMAGES from "../api/Mernonheroku";
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


export default function UpdateMernonheroku() {
  usePrismHighlightAll(); 
  return (
    <div>
      <div className="htmlgit" id="updatemern">
        <h3>Follow All Instructions carefully</h3>
        <h4> How TO UPDATE MERN WEBSITE ON HEROKU</h4>
        <p>1. login in heroku CLI</p>
        <img src={IMAGES[0].image19} alt={IMAGES[0].image19} />
        <pre class="language-git">
          <code>heroku login</code>
        </pre>

        <p>2. add your all updated project on git</p>
        <img src={IMAGES[0].image24} alt={IMAGES[0].image24} />
        <pre class="language-git">
          <code>git add .</code>
        </pre>

        <p>3 commit your all updated project on git</p>
        <img src={IMAGES[0].image25} alt={IMAGES[0].image25} />
        <pre class="language-git">
          <code>git commit -am '1.0.0'</code>
        </pre>

        <p>4 now push your project on heroku so that its update</p>
        <img src={IMAGES[0].image26} alt={IMAGES[0].image26} />
        <pre class="language-git">
          <code>git push heroku master:main</code>
        </pre>
        <img src={IMAGES[0].image27} alt={IMAGES[0].image27} />
        <h5>Sucessfully MERN website updated</h5>
      </div>
    </div>
  );
}
