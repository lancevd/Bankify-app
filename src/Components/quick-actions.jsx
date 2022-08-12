import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

export const QuickActions = () => {
  return (
    <div className="quick-actions">
        <h3>Quick Actions</h3>
        <Shortcuts />
    </div>
  );
};

const Shortcuts = () => {
    return (
      <div className="shortcut-btns">
        <button className='quick-btn'>
          <div className="quick-icon">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
          Transfer to Wallet
        </button>

        <button className='quick-btn'>
          <div className="quick-icon">
            <FontAwesomeIcon icon={faShareFromSquare} />
          </div>
          Transfer to Bank
        </button>

        <button className='quick-btn'>
          <div className="quick-icon">
            <FontAwesomeIcon icon={faMobileScreenButton} />
          </div>
          Airtime/Data
        </button>

        <button className='quick-btn'>
          <div className="quick-icon">
            <FontAwesomeIcon icon={faMoneyBill1} />
          </div>
          Pay Bills
        </button>
      </div>
    );
}

