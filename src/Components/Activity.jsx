import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import History from '../history';
import Pay from '../pay';
import { DashboardContainer } from './Dashboard-container';




const Activity = () => {
  return (
    <Router>
      <div className="activity">
        <Routes>
          <Route  path="/" element={<DashboardContainer />}/>
          <Route  path="/history" element={<History />}/>
          <Route  path="/pay" element={<Pay />}/>
          {/* <History /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default Activity