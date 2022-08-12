// import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";

// import "../index.css";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
// import { faWallet } from "@fortawesome/free-solid-svg-icons";
// import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
// import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// import { faGears } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { DashboardContainer } from "./Dashboard-container";
// import History from "../history";


// export default function MobileNav() {
//      const iconBtn = document.querySelector(".collapse-menu-btn");
//      const useState = React.useState;
//      const [currentLink, setCurrentLink] = useState(1);
//      const [navbarState, setnavbarState] = useState(false);
//      const html = document.querySelector("html");
//      html.addEventListener("click", () => setnavbarState(false));

     

//     //  useEffect(() => {
//     //      setnavbarState(navState)
//     //  }, [])
//     return (
//       <>
//         <mobileNav className="nav-links-mobile">
//           <div className="mobile-nav-wrap">
//             <div className="nav-mobile-head">
//               <h1 className="mobile-brand">Bankify</h1>
//               <button onClick={closeMobileNav}>Close</button>
//             </div>
//             <div className="mobile-nav-links">
//               <div className="nav-link">
//                 <Link to="/" element={<DashboardContainer />}>
//                   <span>
//                     <FontAwesomeIcon icon={faHome} />
//                   </span>
//                   Dashboard
//                 </Link>
//               </div>

//               <div className="nav-link">
//                 <Link to="/history" element={<History />}>
//                   <span>
//                     <FontAwesomeIcon icon={faWallet} />
//                   </span>
//                   Transactions
//                 </Link>
//               </div>

//               <div className="nav-link">
//                 <Link to="/pay">
//                   <span>
//                     <FontAwesomeIcon icon={faHandHoldingDollar} />
//                   </span>
//                   Pay
//                 </Link>
//               </div>

//               <div className="nav-link">
//                 <Link to="/save">
//                   <span>
//                     <FontAwesomeIcon icon={faBuildingColumns} />
//                   </span>
//                   Save
//                 </Link>
//               </div>

//               <div className="nav-link">
//                 <Link to="/account">
//                   <span>
//                     <FontAwesomeIcon icon={faGears} />
//                   </span>
//                   Account
//                 </Link>
//               </div>
//             </div>

//             <div className="nav-link signOut">
//               <Link to="/">
//                 <FontAwesomeIcon icon={faRightFromBracket} /> Logout
//               </Link>
//             </div>
//           </div>
//         </mobileNav>

//         <div className="collapsed-menu">
//           <div
//             onClick={openMobileNav}
//             className="collapsed-icons collapse-menu-btn"
//           >
//             <FontAwesomeIcon icon={faBars} />
//           </div>

//           <div className="main-nav-links">
//             <div className="nav-link">
//               <Link to="/">
//                 <span>
//                   <FontAwesomeIcon icon={faHome} />
//                 </span>
//               </Link>
//             </div>

//             <div className="nav-link">
//               <Link to="/">
//                 <span>
//                   <FontAwesomeIcon icon={faWallet} />
//                 </span>
//               </Link>
//             </div>

//             <div className="nav-link">
//               <Link to="/">
//                 <span>
//                   <FontAwesomeIcon icon={faHandHoldingDollar} />
//                 </span>
//               </Link>
//             </div>

//             <div className="nav-link">
//               <Link to="/">
//                 <span>
//                   <FontAwesomeIcon icon={faBuildingColumns} />
//                 </span>
//               </Link>
//             </div>

//             <div className="nav-link">
//               <Link to="/">
//                 <span>
//                   <FontAwesomeIcon icon={faGears} />
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </>
//     );
// }