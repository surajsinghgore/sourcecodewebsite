import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import LoginCheck from "../pages/LoginCheck";
import "../css/demo.css";
import realtimedatabase from "../api/firebase/realtimedatainfirebase";
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

export default function RealtimeDataInFirebase() {
  usePrismHighlightAll(); 
  let Realtimedatabase =
    "https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/03343f4458f024c228ba03c183954a279e7fe6be/firebase/realtimedatabase/realtimedatabase.svg";
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
          <span>Realtime Database In Firebase</span>

          <img src={Realtimedatabase} alt={Realtimedatabase} />
        </div>

        <div className="allData">
          <h1>{realtimedatabase[0].h1}</h1>

          <h2>{realtimedatabase[0].h2}</h2>

          <h3>{realtimedatabase[0].h3}</h3>
          <img
            src={realtimedatabase[0].img}
            alt={realtimedatabase[0].img}
            className="imgs"
          />

          <p>{realtimedatabase[0].p}</p>

          <h2>{realtimedatabase[1].h2}</h2>
          <img
            src={realtimedatabase[1].img}
            alt={realtimedatabase[1].img}
            className="imgs"
          />

          <p>{realtimedatabase[1].p}</p>

          <h2>{realtimedatabase[2].h2}</h2>
          <img
            src={realtimedatabase[2].img}
            alt={realtimedatabase[2].img}
            className="imgs"
          />

          <p>{realtimedatabase[2].p}</p>

          <h2>{realtimedatabase[3].h2}</h2>
          <img
            src={realtimedatabase[3].img}
            alt={realtimedatabase[3].img}
            className="imgs"
          />
          <p>{realtimedatabase[3].p}</p>

          <h2>{realtimedatabase[4].h2}</h2>
          <img
            src={realtimedatabase[4].img}
            alt={realtimedatabase[4].img}
            className="imgs"
          />
          <img
            src={realtimedatabase[4].img1}
            alt={realtimedatabase[4].img1}
            className="imgs"
          />
          <p>{realtimedatabase[4].p}</p>

          <h2>{realtimedatabase[5].h2}</h2>
          <img
            src={realtimedatabase[5].img}
            alt={realtimedatabase[5].img}
            className="imgs"
          />
          <p>{realtimedatabase[5].p}</p>

          <h2>{realtimedatabase[6].h2}</h2>
          <img
            src={realtimedatabase[6].img}
            alt={realtimedatabase[6].img}
            className="imgs"
          />
          <p>{realtimedatabase[6].p}</p>

          <h2>{realtimedatabase[7].h2}</h2>
          <img
            src={realtimedatabase[7].img}
            alt={realtimedatabase[7].img}
            className="imgs"
          />
          <p>{realtimedatabase[7].p}</p>

          <h2>{realtimedatabase[8].h2}</h2>
          <img
            src={realtimedatabase[8].img}
            alt={realtimedatabase[8].img}
            className="imgs"
          />
          <p>{realtimedatabase[8].p}</p>

          <h2>{realtimedatabase[9].h2}</h2>
          <img
            src={realtimedatabase[9].img}
            alt={realtimedatabase[9].img}
            className="imgs"
          />
          <p>{realtimedatabase[9].p}</p>

          <h2>{realtimedatabase[10].h2}</h2>
          <img
            src={realtimedatabase[10].img}
            alt={realtimedatabase[10].img}
            className="imgs"
          />
          <p>{realtimedatabase[10].p}</p>

          <h2>{realtimedatabase[11].h2}</h2>

          <h3>{realtimedatabase[11].h3}</h3>
          <img
            src={realtimedatabase[11].img}
            alt={realtimedatabase[11].img}
            className="imgs"
          />

          <p>{realtimedatabase[11].p}</p>

          <h2>{realtimedatabase[12].h2}</h2>
          <img
            src={realtimedatabase[12].img}
            alt={realtimedatabase[12].img}
            className="imgs"
          />
          <p>{realtimedatabase[12].p}</p>

          <h2>{realtimedatabase[13].h2}</h2>
          <img
            src={realtimedatabase[13].img}
            alt={realtimedatabase[13].img}
            className="imgs"
          />
          <p>{realtimedatabase[13].p}</p>

          <img
            src={realtimedatabase[14].img}
            alt={realtimedatabase[14].img}
            className="imgs"
          />
          <p>{realtimedatabase[14].p}</p>

          <img
            src={realtimedatabase[15].img}
            alt={realtimedatabase[15].img}
            className="imgs"
          />
          <p>{realtimedatabase[15].p}</p>

          <h2>{realtimedatabase[16].h2}</h2>
          <img
            src={realtimedatabase[16].img}
            alt={realtimedatabase[16].img}
            className="imgs"
          />
          <p>{realtimedatabase[16].p}</p>

          <img
            src={realtimedatabase[17].img}
            alt={realtimedatabase[17].img}
            className="imgs"
          />
          <p>{realtimedatabase[17].p}</p>

          <h2>{realtimedatabase[18].h2}</h2>

          <h3>{realtimedatabase[18].h3}</h3>
          <img
            src={realtimedatabase[18].img}
            alt={realtimedatabase[18].img}
            className="imgs"
          />

          <p>{realtimedatabase[18].p}</p>

          <h2>{realtimedatabase[19].h2}</h2>
          <img
            src={realtimedatabase[19].img}
            alt={realtimedatabase[19].img}
            className="imgs"
          />
          <p>{realtimedatabase[19].p}</p>

          <h2>{realtimedatabase[20].h2}</h2>
          <img
            src={realtimedatabase[20].img}
            alt={realtimedatabase[20].img}
            className="imgs"
          />
          <p>{realtimedatabase[20].p}</p>

          <h2>{realtimedatabase[21].h2}</h2>

          <img
            src={realtimedatabase[21].img}
            alt={realtimedatabase[21].img}
            className="imgs"
          />

          <h2>code is here</h2>
          <h3>registartion.js</h3>
          <pre class="language-js">
            <code>
              {`import { useState } from "react";
              
export default function Registration() {
  const [data, setData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    mobile: "",
    password: "",
    confirmpassword: "",
  });

  let name, value;
  const getData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { name, email, dob, gender, mobile, password, confirmpassword } =
      data;

      if (
        !name ||
        !email ||
        !dob ||
        !gender ||
        !mobile ||
        !password ||
        !confirmpassword
      ){
        alert('please fill all the fields')
      }
      else if(password!==confirmpassword){
        alert('password is not same')
      }
      else{
        const res = await fetch(
          "https://prpofficialwebsite-default-rtdb.firebaseio.com/userdata.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              dob,
              gender,
              mobile,
              password
            }),
          }
        );
        if (res) {
          alert("successfully data send");
          setData({
            name: "",
            email: "",
            dob: "",
            gender: "",
            mobile: "",
            password: "",
            confirmpassword: "",
          });
        }
      }
   
  };
  return (
    <div className="register">
      <div className="form">
        <div className="left_msg">
          <h1>Welcome Back !</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button>SIGN IN</button>
        </div>

        <div className="right_form">
          <h1>Create Account</h1>
          <div className="li">
            <li>
              <FiFacebook />
            </li>
            <li>
              <AiOutlineTwitter />
            </li>
            <li>
              <AiOutlineGooglePlus />
            </li>
            <li>
              <GrLinkedinOption />
            </li>
          </div>
          <h2>or use email for registration</h2>

          <div className="forms-input">
            <form method="POST">
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={getData}
                placeholder="NAME"
              />
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={getData}
                placeholder="EMAIL"
              />
              <input
                type="text"
                name="dob"
                value={data.dob}
                onChange={getData}
                placeholder="DATE OF BIRTH"
              />
              <input
                type="text"
                name="gender"
                value={data.gender}
                onChange={getData}
                placeholder="GENDER"
              />
              <input
                type="text"
                name="mobile"
                value={data.mobile}
                onChange={getData}
                placeholder="MOBILE NUMBER"
              />
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={getData}
                placeholder="PASSWORD"
              />
              <input
                type="password"
                name="confirmpassword"
                value={data.confirmpassword}
                onChange={getData}
                placeholder="CONFIRM PASSWORD"
              />
              <button onClick={sendData}>SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
`}
            </code>
          </pre>
        
        </div>
      </div>
    </>
  );
}
