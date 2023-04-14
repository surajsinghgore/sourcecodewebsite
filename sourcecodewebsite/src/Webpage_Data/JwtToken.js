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
  

export default function JwtToken() {
    usePrismHighlightAll(); 
    let SubIcon =
    "https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png";
    return (
        <>
         
        <LoginCheck />
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
      <span>JWT TOKEN</span><img src={SubIcon} alt={SubIcon} id="b"/>
    </div>

    <div className="allData">
<h1>FOLLOW THE STEP TO USE JWT TOKEN</h1>
<h2>1. install bcryptjs in PROJECT</h2>
<pre>
    <code className="language-js">
{`npm i jsonwebtoken`}
    </code>
</pre>
<h2>2. require jwt token in file</h2>
<pre>
    <code className="language-js">
{`const jwt = require('jsonwebtoken');`}
    </code>
</pre>
<h2>3. Create your JWT SECRET KEY</h2>
<pre>
    <code className="language-js">
{`const JWT_SECRET="surajsinghisagoodboy";`}
    </code>
</pre>
<p>put this in .config file. don't show this easily</p>


<h2>4. generate jwt with the following</h2>
<pre>
    <code className="language-js">
{`  password:securePassword
  });
  const data={
    user:{
      id: user.id
    }
  }
 const token = jwt.sign(data, JWT_SECRET);
  res.json({token});
  
  //before .save() method
  const sendData=await user.save();`}
    </code>
</pre>
<p>jwt.sign is Synchronous function</p>

<h3>extra and important attribute your must know</h3>
<h2>make jwt expire in few minutes,hours or days</h2>
<pre>
    <code className="language-js">
{`const token = jwt.sign(data, JWT_SECRET,{
   expiresIn: 60 * 60 
 });

 //or even better:
 jwt.sign(data, JWT_SECRET,{
   expiresIn: '1h' 
 });
 `}
    </code>
    </pre>
<h1>how to verify token</h1>
    <h2>it recommended to make middleware for verify user</h2>

    <pre>
    <code className="language-js">
{`const jwt = require('jsonwebtoken');
const JWT_SECRET="surajsinghisagoodboy";

try {
    //verifying user
    const data=jwt.verify(UserToken, JWT_SECRET);
req.user=data.user;

next();
} catch (error) {
`}
    </code>
</pre>








          </div>
            </div>
        </>
    )
}
