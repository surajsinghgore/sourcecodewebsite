import "../css/Footer.css";
import MyFooterUrl from '../props/MyFooterUrl';


const Footer = () => {
  return (
    <>
      <div className="footer">
        <MyFooterUrl />
      </div>

      <div className="footers">
        <div className="img=f">
          <img src="" alt="" />{" "}
          <span>
            Copyright © 2021-22, All Right Reserved{" "}
            <span style={{ color: "orange" }}>PRP</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
