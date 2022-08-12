import React from "react";
import ReactDOM from "react-dom";

// import useState from "react";
// import useEffect from "react";

import "./index.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// imported components



import Activity from "./Components/Activity";
import { Navigation } from "./desktopNav";

function MyApp() {
  return (
    
    <div className="body">
      <HeaderDetails />
      <Navigation />
      <Main />
    </div>
  );
}

const HeaderDetails = () => {
  return (
    <menu clasName="row-nav">
      <div clasName="greetings">
        <h2 className="greetings-general">
          Hello <span clasName="greetings-name">Winner</span>
        </h2>
        <p className="greetings-message">Welcome Back</p>
      </div>

      <div className="daily-ask">What would you like to do today?</div>
      <div className="empty"></div>
      <div className="empty"></div>

      <div clasName="profile-rep">
        <div clasName="avatar">
          <FontAwesomeIcon icon={faUser} />
        </div>

        <div clasName="info">
          <h4 clasName="info-name"> Winner Mosob </h4>
        </div>
      </div>
    </menu>
  );
};

const Main = () => {
  return (

    <section class="main">
      {/* <Navigation /> */}
      <Activity />
    </section>
  );
};







ReactDOM.render(<MyApp />, document.getElementById("root"));
