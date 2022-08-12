import React from 'react'
// import "../styled-components.css";

import Dashboard from './Dashboard';
import { QuickActions } from './quick-actions';

export const DashboardContainer = () => {
  return (
    <div className='dash-container'>
        <Screen />
        <QuickActions />
    </div>
  )
}

const Screen = () => {
  return <div class="screen">
      <Dashboard />
  </div>
};


