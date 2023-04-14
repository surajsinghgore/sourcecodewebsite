import { Switch, Route } from "react-router-dom";

//pages
import Home from "../pages/Home";
import Error from "../Webpage_Data/Error";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Main from "../pages/Main";
import Demo from "../pages/Demo";
import Register from "../pages/Register";
import LiveWebsite from "../pages/LiveWebsite";
import About from "../pages/About";
import Github from "../Webpage_Data/github";
import Heroku from "../Webpage_Data/Heroku";
import StudySideBar from "../components/StudySideBar";
import SoucecodeSidebar from "../components/SoucecodeSidebar";
import NotesSidebar from "../components/NotesSidebar";
import VideosSidebar from "../components/VideosSidebar";
import DetailsSidebar from "../components/DetailsSidebar";
import Reactrouterdom from "../Webpage_Data/Reactrouterdom";
import RealtimeDataInFirebase from "../Webpage_Data/RealtimeDataInFirebase";
import Reactjs from "../Webpage_Data/Reactjs";
import Firebase from "../Webpage_Data/Firebase";
import VsCodeShortcuts from "../Webpage_Data/VsCodeShortcuts";
import Api from "../Webpage_Data/Api";
import Readapi from "../Webpage_Data/Readapi";
import PostApi from "../Webpage_Data/PostApi";
import MultipleAccountInGit from "../Webpage_Data/MultipleAccountInGit";
import InfiniteScroll from "../Webpage_Data/InfiniteScroll";
import Git from "../Webpage_Data/Git";
import Extra from "../Webpage_Data/Extra";
import August13 from "../Webpage_Data/August13";
import SecureDataInReact from "../Webpage_Data/SecureDataInReact";
import Prismejs from "../Webpage_Data/Prismejs";
import Prismjshtml from "../Webpage_Data/Prismjshtml";
import Mongoose from "../Webpage_Data/Mongoose";
import MongooseCon from "../Webpage_Data/MongooseCon";
import MongooseSchema from "../Webpage_Data/MongooseSchema";
import ExpressRouter from "../Webpage_Data/ExpressRouter";
import Express from "../Webpage_Data/Express";
import SimpleSenddata from "../Webpage_Data/SimpleSenddata";
import SetupExpress from "../Webpage_Data/SetupExpress";
import ExpressFormValidation from "../Webpage_Data/ExpressFormValidation";
import BcryptJs from "../Webpage_Data/BcryptJs";
import JwtToken from "../Webpage_Data/JwtToken";
import MiddlewareforAuth from "../Webpage_Data/MiddlewareforAuth";
import BackendLogin from "../Webpage_Data/BackendLogin";
import BackendgetUserData from "../Webpage_Data/BackendgetUserData";
import BackendRegister from "../Webpage_Data/BackendRegister";
import Top_loader_bar from "../Webpage_Data/Top_loader_bar";
import SecurecodeforExpress from "../Webpage_Data/SecurecodeforExpress";
import StatusCode from "../Webpage_Data/StatusCode";
import StartBackendFrontent from "../Webpage_Data/StartBackendFrontent";
import FetchDataMongoose from "../Webpage_Data/FetchDataMongoose";
import UpdateRecordsMongoose from "../Webpage_Data/UpdateRecordsMongoose";
import DeleteRecordsMongoose from "../Webpage_Data/DeleteRecordsMongoose";
import AddDataMongoose from "../Webpage_Data/AddDataMongoose";
import MediaQuery from "../Webpage_Data/MediaQuery";
import FrontentBackendtogether from "../Webpage_Data/FrontentBackendtogether";
export default function Router() {
    return (
        <div>
             <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/demo" component={Demo} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/github" component={Github} />
          <Route exact path="/heroku" component={Heroku} />
          <Route exact path="/studybar" component={StudySideBar} />
          <Route exact path="/aboutme" component={About} />
          <Route exact path="/react" component={Reactjs} />
          <Route exact path="/react/securecode" component={SecureDataInReact} />
          <Route exact path="/firebase" component={Firebase} />
          <Route exact path="/api" component={Api} />
          <Route exact path="/readapi" component={Readapi} />
          <Route exact path="/multipleaccountingit" component={MultipleAccountInGit} />
          <Route exact path="/infinitescroll" component={InfiniteScroll} />
          <Route exact path="/postapi" component={PostApi} />
          <Route exact path="/soucecodebar" component={SoucecodeSidebar} />
          <Route exact path="/vscodeshortcuts" component={VsCodeShortcuts} />
          
          <Route exact path="/livewebsite" component={LiveWebsite} />
          <Route exact path="/notesbar" component={NotesSidebar} />
          <Route exact path="/videosbar" component={VideosSidebar} />
          <Route exact path="/git" component={Git} />
          <Route exact path="/extra" component={Extra} />
          <Route exact path="/error" component={Error} />
          <Route exact path="/error/august13" component={August13} />
          <Route exact path="/demo" component={Demo} />
          <Route exact path="/prismjsreact" component={Prismejs} />
          <Route exact path="/prismjshtmlcss" component={Prismjshtml} />
          <Route exact path="/mongoose" component={Mongoose} />
          <Route exact path="/mongoose/connection" component={MongooseCon} />
          <Route exact path="/mongoose/schema" component={MongooseSchema} />
          <Route exact path="/express/expressrouter" component={ExpressRouter} />
          <Route exact path="/mongoose/simplesenddata" component={SimpleSenddata} />
          <Route exact path="/express" component={Express} />
          <Route exact path="/media_query" component={MediaQuery} />
          <Route exact path="/express/expresssetup" component={SetupExpress} />
          <Route exact path="/reactrouterdom" component={Reactrouterdom} />
          <Route exact path="/realtimedatabaseinfirebase" component={RealtimeDataInFirebase} />
          <Route exact path="/detailsbar" component={DetailsSidebar} />
          <Route exact path="/backendformvalidation" component={ExpressFormValidation} />
          <Route exact path="/bcryptjs" component={BcryptJs} />
          <Route exact path="/jwttoken" component={JwtToken} />
          <Route exact path="/middleware_for_authentication" component={MiddlewareforAuth} />
          <Route exact path="/backend_login" component={BackendLogin} />
          <Route exact path="/backend_get_user_data" component={BackendgetUserData} />
          <Route exact path="/backend_register_user" component={BackendRegister} />
          <Route exact path="/extra/top_loading_bar" component={Top_loader_bar} />
          <Route exact path="/secure_code_of_express" component={SecurecodeforExpress} />
          <Route exact path="/status_code" component={StatusCode} />
          <Route exact path="/concurrently" component={StartBackendFrontent} />
          <Route exact path="/fetchData_mongoose" component={FetchDataMongoose} />
          <Route exact path="/updateData_mongoose" component={UpdateRecordsMongoose} />
          <Route exact path="/deleteData_mongoose" component={DeleteRecordsMongoose} />
          <Route exact path="/addData_mongoose" component={AddDataMongoose} />

          {/*F & B both  */}

          <Route exact path="/frontentBackend" component={FrontentBackendtogether} />
          <Route component={Error} />
        </Switch>
        </div>
    )
}
