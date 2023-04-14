import ReactImg from "../api/Reactongitimg";
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
const Reactongit = () => {
  usePrismHighlightAll(); 
  return (
    <div>
      <div className="htmlgit" id="Reactgit">
        <h3>Follow All Instructions carefully</h3>
        <h4> 1.Login and create your new repository</h4>
        <img src={ReactImg[0].image1} alt={ReactImg[0].image1} />
        <p>
          if you wanted to see step by step, then follow how to host html,css
          website on github
        </p>
        <h4> 2.Follow git bash commands </h4>
        <p>1.1. initilazing git repository</p>
        <pre class="language-git">
          <code>git init</code>
        </pre>
        <p>1.2. add all files on git</p>
        <pre class="language-git">
          <code>git add .</code>
        </pre>
        <p>1.3. commit all files on git </p>
        <pre class="language-git">
          <code>git commit -m'1.0.0'</code>
        </pre>
        <p>
          1.4. now copy the following command from push or an existing
          repository from the command line **at below in github{" "}
        </p>

        <img src={ReactImg[0].image2} alt={ReactImg[0].image2} />
        <pre class="language-git">
          <code>
            git remote add origin https://github.com/USERNAME/repository
          </code>
        </pre>
        <p>1.5. now copy the below command and hit enter</p>
        <pre class="language-git">
          <code>git push -u origin master</code>
        </pre>

        <h4> 3.NOW DO CHANGE WITH PROJECT STRUCTURE</h4>
        <p>
          you can also follow this website ===
          https://create-react-app.dev/docs/deployment/
        </p>

        <p>3.1. add homepage in package.json file</p>
        <pre class="language-git">
          <code>"homepage": "https://myusername.github.io/my-app",</code>
        </pre>
        <img src={ReactImg[0].image3} alt={ReactImg[0].image3} />

        <p>3.2. run the following command on terminal from main:root of file</p>

        <p>npm user</p>
        <pre class="language-git">
          <code>npm install --save gh-pages</code>
        </pre>
        <p>yarn user</p>
        <pre class="language-git">
          <code>yarn add gh-pages</code>
        </pre>
        <img src={ReactImg[0].image4} alt={ReactImg[0].image4} />

        <p>3.3. add the following in down scripts: in package.json</p>
        <pre class="language-git">
          <code>
            "predeploy": "npm run build", "deploy": "gh-pages -d build",
          </code>
        </pre>
        <img src={ReactImg[0].image5} alt={ReactImg[0].image5} />

        <p>
          3.4. now run the following command in terminal to deploy are website{" "}
        </p>
        <pre class="language-git">
          <code>npm run deploy</code>
        </pre>
        <img src={ReactImg[0].image6} alt={ReactImg[0].image6} />

        <h4> 4.TO CHECK WEATHER IT IS HOSTED OR NOT</h4>
        <p>click on setting in github website</p>
        <img src={ReactImg[0].image7} alt={ReactImg[0].image7} />

        <p>scroll down and click page settings link</p>
        <img src={ReactImg[0].image8} alt={ReactImg[0].image8} />

        <p>now see weather it shows like this or not ?</p>
        <img src={ReactImg[0].image9} alt={ReactImg[0].image9} />
        <img src={ReactImg[0].image10} alt={ReactImg[0].image10} />
        <p>click on the link to see your react website on internet</p>
        <img src={ReactImg[0].image11} alt={ReactImg[0].image11} />

        <h5>if you get any error . please search our error in error section of this website</h5>
      </div>
    </div>
  );
};

export default Reactongit;
