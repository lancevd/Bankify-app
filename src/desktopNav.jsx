import React from "react";
// import { NavLink as BaseNavLink } from "react-router-dom";
import { BrowserRouter as Link } from "react-router-dom";


// import useState from "react";
// import useEffect from "react";

import "./index.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileNav from "./Components/mobileNav";
import { DashboardContainer } from "./Components/Dashboard-container";
import History from "./history";


export const Navigation = () => {
  const useState = React.useState;
  const [currentLink, setCurrentLink] = useState(1);
  // const navigate = useNavigate;
  function addActive () {
      alert('Yello!');
      document.querySelectorAll()
  }

  const mainMobileNav = document.querySelector(".col-nav");
  const menuCollapsed = document.querySelector(".collapsed-menu");

  // function openMobileNav() {
  //   //  alert('Clicked');
    
  // }

  // function closeMobileNav() {
  //   mainMobileNav.style.display = "none";
  //   menuCollapsed.style.display = "flex";
  // }

  return (
    <>
      <nav class="col-nav expand-nav">
        <div className="brand">
          <div onClick className="collapse-menu-btn">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <h1>Bankify</h1>
        </div>

        <div className="main-nav-links">
          <div className="nav-link">
            <Link to="/">
              <span>
                <FontAwesomeIcon icon={faHome} />
              </span>
              <p className="nav-text">Dashboard</p>
            </Link>
          </div>

          <div className="nav-link">
            <Link to="/history">
              <span>
                <FontAwesomeIcon icon={faWallet} />
              </span>
              <p className="nav-text">Transactions</p>
            </Link>
          </div>

          <div className="nav-link">
            <Link to="/pay">
              <span>
                <FontAwesomeIcon icon={faHandHoldingDollar} />
              </span>
              <p className="nav-text">Pay</p>
            </Link>
          </div>

          <div className="nav-link">
            <Link to="/">
              <span>
                <FontAwesomeIcon icon={faBuildingColumns} />
              </span>
              <p className="nav-text">Save</p>
            </Link>
          </div>

          <div className="nav-link">
            <Link to="/">
              <span>
                <FontAwesomeIcon icon={faGears} />
              </span>
              <p className="nav-text">Account</p>
            </Link>
          </div>
        </div>

        <div className="nav-link signOut">
          <Link to="/">
            <FontAwesomeIcon icon={faRightFromBracket} /> Logout
          </Link>
        </div>
      </nav>
      {/* <MobileNav /> */}
    </>
  );
};
