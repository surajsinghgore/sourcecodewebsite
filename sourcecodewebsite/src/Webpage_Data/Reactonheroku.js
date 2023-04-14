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

export default function Reactonheroku() {
  usePrismHighlightAll(); 
  return (
    <div>
      <div className="htmlgit" id="htmlgit">
        <h3>Follow All Instructions carefully</h3>
        <p>1.1 put react folder inside server folder</p>
        <h4> 1. DO CHANGES WITH YOUR PROJECT STRUCTURE</h4>
        <img src={IMAGES[0].image1} alt={IMAGES[0].image1} />
        <p>1.2 define Heroku port </p>
        <img src={IMAGES[0].image2} alt={IMAGES[0].image2} />
        <pre class="language-git">
          <code>const PORT=process.env.PORT || 5000;</code>
        </pre>

        <p>1.3 remove PORT number from config.env file</p>
        <img src={IMAGES[0].image3} alt={IMAGES[0].image3} />
        <p>
          1.4 now we need to build react project. Go inside react folder and
          type npm run build{" "}
        </p>
        <img src={IMAGES[0].image4} alt={IMAGES[0].image4} />
        <pre class="language-git">
          <code>npm run build</code>
        </pre>
        <p>1.5 now wee need to server our react file inside app.js of server</p>
        <img src={IMAGES[0].image5} alt={IMAGES[0].image5} />
        <pre class="language-javascript">
          <code>
{`if(process.env.NODE_ENV == "production"){
app.use(express.static("sourcecodewebsite/build"))
}`}
          </code>
        </pre>
        <p>if above not work write the following method</p>
        <img src={IMAGES[0].image6} alt={IMAGES[0].image6} />

        <p>1.6 now remove proxy from react/package.json file</p>
        <img src={IMAGES[0].image7} alt={IMAGES[0].image7} />
        <p>1.7 write heroku postbuild command inside package.json of server</p>
        <img src={IMAGES[0].image8} alt={IMAGES[0].image8} />
        <p>
          please check weather start script is "start": "node app.js" is write
          or not{" "}
        </p>
        <pre class="language-javascript">
          <code>
 {`"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false 
 npm install --prefix sourcecodewebsite && npm run build 
 --prefix sourcecodewebsite"`}
           
          </code>
        </pre>
        <p>
          1.8 now wee need to specify engine in package.json of server. write
          same node and npm version present in local system
        </p>
        <img src={IMAGES[0].image9} alt={IMAGES[0].image9} />

        <pre class="language-javascript">
          <code>{`"engines":{"node": "14.x", 
"npm": "7.x" },`}</code>
        </pre>
        <p>1.10 remove "/" home path in app.js or router.js of server</p>
        <img src={IMAGES[0].image10} alt={IMAGES[0].image10} />

        <p>1.11 delete .git file present inside client folder</p>
        <img src={IMAGES[0].image11} alt={IMAGES[0].image11} />
        <h4>2. FOLLOW THE FOLLOWING STEPS TO PUSH PROJECT ON HEROKU</h4>
        <p>
          2.0 go to https://dashboard.heroku.com/ website and create our account
        </p>
        <img src={IMAGES[0].image12} alt={IMAGES[0].image12} />
        <p>
          2.1 Once you login click on new button,then click Create new app
          option
        </p>
        <img src={IMAGES[0].image13} alt={IMAGES[0].image13} />
        <p>
          2.2 Now give the name of your project. after that click on create app
          button
        </p>
        <img src={IMAGES[0].image14} alt={IMAGES[0].image14} />
        <p>2.3 after that click on deploy</p>
        <img src={IMAGES[0].image15} alt={IMAGES[0].image15} />
        <p>2.4 now scroll down inside deploy option</p>
        <img src={IMAGES[0].image16} alt={IMAGES[0].image16} />

        <h4>3. Set up heroku in local system</h4>
        <p>
          3.0 you need to download heroku CLI
          https://devcenter.heroku.com/articles/heroku-cli
        </p>
        <img src={IMAGES[0].image17} alt={IMAGES[0].image17} />

        <p>
          3.1 check weather is install in your local system or not.If it gives
          version then is successfully install in your system
        </p>
        <img src={IMAGES[0].image18} alt={IMAGES[0].image18} />
        <pre class="language-javascript">
          <code>heroku --version</code>
        </pre>

        <p>3.2 now we need to login in heroku cli</p>
        <img src={IMAGES[0].image19} alt={IMAGES[0].image19} />
        <pre class="language-javascript">
          <code>heroku login</code>
        </pre>

        <p>3.3 now we need to initialize git in our project</p>
        <img src={IMAGES[0].image20} alt={IMAGES[0].image20} />
        <pre class="language-javascript">
          <code>git init</code>
        </pre>

        <p>3.4 run the following command</p>
        <img src={IMAGES[0].image21} alt={IMAGES[0].image21} />
        <pre class="language-javascript">
          <code>git initheroku git:remote -a projectname</code>
        </pre>

        <p>3.5 next step is to set build pack of our project</p>
        <img src={IMAGES[0].image22} alt={IMAGES[0].image22} />
        <pre class="language-javascript">
          <code>heroku buildpacks:set heroku/nodejs</code>
        </pre>
        <p>you can refer this code to find your project</p>
        <img src={IMAGES[0].image23} alt={IMAGES[0].image23} />

        <p>3.6 now add your all project on git</p>
        <img src={IMAGES[0].image24} alt={IMAGES[0].image24} />
        <pre class="language-javascript">
          <code>git add .</code>
        </pre>

        <p>3.7 commit your project on git</p>
        <img src={IMAGES[0].image25} alt={IMAGES[0].image25} />
        <pre class="language-javascript">
          <code>git commit -am '1.0'</code>
        </pre>

        <p>3.8 now push your project on heroku</p>
        <img src={IMAGES[0].image26} alt={IMAGES[0].image26} />
        <pre class="language-javascript">
          <code>git push heroku master:main</code>
        </pre>
        <img src={IMAGES[0].image27} alt={IMAGES[0].image27} />

        <h4>4. Do SETTING INSIDE YOUR PROJECT ON HEROKU WEBSITE</h4>
        <p>4.0 Click on setting menu and Then click on reveal config vars</p>
        <img src={IMAGES[0].image28} alt={IMAGES[0].image28} />

        <p>
          4.1 add your all keys and values inside reveal config options. Please
          add all values present inside config.env file
        </p>
        <img src={IMAGES[0].image29} alt={IMAGES[0].image29} />

        <h4>5. SUCCESSFULLY DEPLOY</h4>
        <img src={IMAGES[0].image30} alt={IMAGES[0].image30} />
        <p>your MERN website successfully hosted or deployed on heroku</p>

        <h5>
          if you get any error . please search our error in error section of
          this website
        </h5>
      </div>
    </div>
  );
}
