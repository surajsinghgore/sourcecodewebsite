import "../css/LiveWebsite.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ImgUrl from '../api/ImgUrlLive';

import Web from '../props/Web';



const LiveWebsite = () => {
  console.log(ImgUrl[0].img);
  return (
    <div>
      <Header />

      <div className="live">
        <h1>Live Website Preview</h1>
        <p>fullyworking Websites</p>

        <Web
          imgsrc={ImgUrl[0].img}
          atls={ImgUrl[0].img}
          titles={ImgUrl[0].title}
          url={ImgUrl[0].url}
        />

        <p>Mobile Responsive</p>
        <Web
          imgsrc={ImgUrl[1].img}
          atls={ImgUrl[1].img}
          titles={ImgUrl[1].title}
          url={ImgUrl[1].url}
        />
         <Web
          imgsrc={ImgUrl[2].img}
          atls={ImgUrl[2].img}
          titles={ImgUrl[2].title}
          url={ImgUrl[2].url}
        />
         <Web
          imgsrc={ImgUrl[3].img}
          atls={ImgUrl[3].img}
          titles={ImgUrl[3].title}
          url={ImgUrl[3].url}
        />
             <Web
          imgsrc={ImgUrl[4].img}
          atls={ImgUrl[4].img}
          titles={ImgUrl[4].title}
          url={ImgUrl[4].url}
        />
             <Web
          imgsrc={ImgUrl[5].img}
          atls={ImgUrl[5].img}
          titles={ImgUrl[5].title}
          url={ImgUrl[5].url}
        />
             <Web
          imgsrc={ImgUrl[6].img}
          atls={ImgUrl[6].img}
          titles={ImgUrl[6].title}
          url={ImgUrl[6].url}
        />
           <p>Only For pc Devices</p>
           <Web
          imgsrc={ImgUrl[7].img}
          atls={ImgUrl[7].img}
          titles={ImgUrl[7].title}
          url={ImgUrl[7].url}
        />
            <Web
          imgsrc={ImgUrl[8].img}
          atls={ImgUrl[8].img}
          titles={ImgUrl[8].title}
          url={ImgUrl[8].url}
        />
            <Web
          imgsrc={ImgUrl[9].img}
          atls={ImgUrl[9].img}
          titles={ImgUrl[9].title}
          url={ImgUrl[9].url}
        />

<p>Basic Projects</p>
<Web
          imgsrc={ImgUrl[10].img}
          atls={ImgUrl[10].img}
          titles={ImgUrl[10].title}
          url={ImgUrl[10].url}
        />
            <Web
          imgsrc={ImgUrl[11].img}
          atls={ImgUrl[11].img}
          titles={ImgUrl[11].title}
          url={ImgUrl[11].url}
        /> 
      </div>

      <Footer />
    </div>
  );
};

export default LiveWebsite;
