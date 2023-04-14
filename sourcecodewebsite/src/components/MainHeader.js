import "../css/mainHeader.css";

import SearchIcon from "@material-ui/icons/Search";
import CancelIcon from "@material-ui/icons/Cancel";
import { useState } from "react";
import SearchBarContent from "./SearchBarContent";

const MainHeader = () => {
  let logo="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/master/logo.png";
  const [val, setVal] = useState("");
  let myUl = document.getElementById("myUl");
  let sb = document.getElementById("sb");
  let cancel = document.getElementById("cancel");
  const filterData = () => {
    myUl.style.display = "block";
    sb.style.display = "none";
    cancel.style.display = "block";
    let li = myUl.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
      let a = li[i];
      let textVal = a.innerText || a.innerHTML;
      if (textVal.toUpperCase().indexOf(val) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  };

  const off = (e) => {
    let myUl = document.getElementById("myUl");
    let search = document.getElementById("search");
    let sb = document.getElementById("sb");
    let cancel = document.getElementById("cancel");
    sb.style.display = "none";
    cancel.style.display = "none";
    myUl.style.display = "none";
    search.value = "";
  };
  const offMenu = () => {
    let myUl = document.getElementById("myUl");
    let search = document.getElementById("search");
    let sb = document.getElementById("sb");
    sb.style.display = "block";
    cancel.style.display = "none";
    myUl.style.display = "none";
    search.value = "";
  };
  return (
    <div className="top">
      <div className="left-img">
        <img src={logo} alt="logo not display" />
      </div>
      <h1>PRP WEBSITE</h1>

      {/* search bar items */}
      <div className="myUl" id="myUl" onClick={offMenu}>
        <SearchBarContent />
      </div>

      {/* searchbar */}
      <input
        type="search"
        name="search"
        id="search"
        placeholder="What are you looking ?"
        onKeyUp={filterData}
        onChange={(e) => setVal(e.target.value.toUpperCase())}
      />
      <SearchIcon className="sb" id="sb" />
      <CancelIcon id="cancel" onClick={off} />
    </div>
  );
};

export default MainHeader;
