import IMAGES from "../api/HTMLCSSgitImg";
import Prism from "prismjs";
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';
import React,{ useEffect } from "react";
import 'prismjs/plugins/toolbar/prism-toolbar.min'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
function usePrismHighlightAll() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
}

const Htmlcssongit = () => {
  usePrismHighlightAll(); 
 

  return (
    <div>
      <div className="htmlgit" id="htmlgit">
        <h3>
        Follow All Instructions carefully
        </h3>
        <h4> 1. Go to github.com</h4>
        <img
          src={IMAGES[0].HTMLgithub.img1.h1}
          alt={IMAGES[0].HTMLgithub.img1.h1}
        />
        <p>this is the interface of github.com website</p>

        <h4> 2. Login / Register in github website</h4>
        <img
          src={IMAGES[0].HTMLgithub.img2.h2}
          alt={IMAGES[0].HTMLgithub.img2.h2}
        />
        <img
          src={IMAGES[0].HTMLgithub.img3.h3}
          alt={IMAGES[0].HTMLgithub.img3.h3}
        />
        <p>
          now create your account by clicking Sing Up button OR click on Login
          if you have already github account
        </p>

        <h4> 3. Now We Need to create new repository</h4>
        <img
          src={IMAGES[0].HTMLgithub.img4.h4}
          alt={IMAGES[0].HTMLgithub.img4.h4}
        />

        <p>now click on NEW button to create new repository</p>

        <h4> 4. Now we need to give repository name</h4>
        <img
          src={IMAGES[0].HTMLgithub.img5.h5}
          alt={IMAGES[0].HTMLgithub.img5.h5}
        />
        <img
          src={IMAGES[0].HTMLgithub.img6.h6}
          alt={IMAGES[0].HTMLgithub.img6.h6}
        />
        <p>after writting repository name click on create repository button</p>

        <h4> 5. Repository created successfully</h4>
        <img
          src={IMAGES[0].HTMLgithub.img7.h7}
          alt={IMAGES[0].HTMLgithub.img7.h7}
        />
        <p>your repository created successfully</p>

        <h4> 6. Open git-Bash commandline </h4>
        <img
          src={IMAGES[0].HTMLgithub.img9.h9}
          alt={IMAGES[0].HTMLgithub.img9.h9}
        />
        <img
          src={IMAGES[0].HTMLgithub.img8.h8}
          alt={IMAGES[0].HTMLgithub.img8.h8}
        />
        <p>
          now go to your project,website path,folder which you wanted to upload
          on github. Click on open GitBash here
        </p>

        <h4> 7. NOW FOLLOW ALL GITBASH COMMANDS STEP BY STEP </h4>
        <p>
          7.1 Now first we need to initialize git in our project [ copy code
          from below]
        </p>
        <img
          src={IMAGES[0].HTMLgithub.img10.h10}
          alt={IMAGES[0].HTMLgithub.img10.h10}
          id="git"
        />

        <pre class="language-git">
          <code>git init</code>
        </pre>

        <p> 7.2 Now run git status [ copy code from below]</p>
        <img
          src={IMAGES[0].HTMLgithub.img11.h11}
          alt={IMAGES[0].HTMLgithub.img11.h11}
        />

        <pre class="language-git">
          <code>git status</code>
        </pre>

        <p>
          7.3 Now type git add . to add all files in git [ copy code from below]
        </p>
        <img
          src={IMAGES[0].HTMLgithub.img12.h12}
          alt={IMAGES[0].HTMLgithub.img12.h12}
          id="git"
        />

        <pre class="language-git">
          <code>git add .</code>
        </pre>
        <p>
          7.4 Now type the follow command to commit the file in git [ copy code
          from below]
        </p>
        <img
          src={IMAGES[0].HTMLgithub.img13.h13}
          alt={IMAGES[0].HTMLgithub.img13.h13}
        />

        <pre class="language-git">
          <code>git commit -m 'update 1.0.0'</code>
        </pre>

        <p>
          7.5 If your project shows working on clean tree message then you are
          ready to push your project on github [ copy code from below]
        </p>
        <img
          src={IMAGES[0].HTMLgithub.img14.h14}
          alt={IMAGES[0].HTMLgithub.img14.h14}
          id="git"
        />

        <pre class="language-git">
          <code>git status</code>
        </pre>

        <h4> 8. Time to push your project on github</h4>
        <p>
          8.1 copy the url command given in github repositary which you created
          successfully{" "}
        </p>
        <img
          src={IMAGES[0].HTMLgithub.img15.h15}
          alt={IMAGES[0].HTMLgithub.img15.h15}
        />
        <p>8.2 Copy the code inside git-bash and hit ENTER button</p>
        <pre class="language-git">
          <code>
            git remote add origin https://github.com/USERNAME/repository
          </code>
        </pre>
        <img
          src={IMAGES[0].HTMLgithub.img16.h16}
          alt={IMAGES[0].HTMLgithub.img16.h16}
          id="git"
        />
        <pre class="language-git">
          <code>git push -u origin master</code>
        </pre>
        <img
          src={IMAGES[0].HTMLgithub.img17.h17}
          alt={IMAGES[0].HTMLgithub.img17.h17}
        />

        <h4>
          9. Now do the following setting to show your website on internet
        </h4>
        <p>9.1 Refresh the github repository web page</p>
        <img
          src={IMAGES[0].HTMLgithub.img18.h18}
          alt={IMAGES[0].HTMLgithub.img18.h18}
        />
        <p>
          Now you can see your all project files are uploaded successfully on
          github
        </p>
        <img
          src={IMAGES[0].HTMLgithub.img19.h19}
          alt={IMAGES[0].HTMLgithub.img19.h19}
        />

        <p>9.2 Now click on setting button</p>
        <img
          src={IMAGES[0].HTMLgithub.img20.h20}
          alt={IMAGES[0].HTMLgithub.img20.h20}
        />

        <p>
          9.3 Now scroll page at the bottom. At bottom you see github pages
          option ,click the url given inside github pages options
        </p>
        <img
          src={IMAGES[0].HTMLgithub.img21.h21}
          alt={IMAGES[0].HTMLgithub.img21.h21}
        />
        <p>9.4 Now select master in source and click save</p>
        <img
          src={IMAGES[0].HTMLgithub.img22.h22}
          alt={IMAGES[0].HTMLgithub.img22.h22}
        />
        <img
          src={IMAGES[0].HTMLgithub.img23.h23}
          alt={IMAGES[0].HTMLgithub.img23.h23}
        />
        <p>9.5 Now your can see an URL shows . wait for few seconds </p>
        <img
          src={IMAGES[0].HTMLgithub.img24.h24}
          alt={IMAGES[0].HTMLgithub.img24.h24}
        />
        <p>Onces URL appear in green color then CLICK the URL</p>
        <img
          src={IMAGES[0].HTMLgithub.img25.h25}
          alt={IMAGES[0].HTMLgithub.img25.h25}
        />
        <h4> 10. WEBSITE uploaded sucessfully</h4>
        <p>congratulations your website sucessfully uploaded on internet</p>
        <img
          src={IMAGES[0].HTMLgithub.img26.h26}
          alt={IMAGES[0].HTMLgithub.img26.h26}
        />
        <p>share the url with your friends to show them</p>
        <h5>
          if you get any error . please search our error in error section of
          this website
        </h5>
      </div>
    </div>
  );
};

export default Htmlcssongit;
