import React from 'react'
import "../styled-components.css";

import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RecentActivities() {
  return (
    <>
      <div className="transactions-head">
        <h4> Transactions</h4>
      </div>

      <div className="movements">
        <div className="movement-line">
          <div className="stacked-icon debit-color">
            <FontAwesomeIcon icon={faCircle} />
          </div>

          <p className="movement-status">Debit</p>

          <p className="date-activity">March 3, 2022</p>

          <p className="details">
            &#8358;<span>5000</span>
          </p>
        </div>

        <div className="movement-line">
          <div className="stacked-icon credit-color">
            <FontAwesomeIcon icon={faCircle} />
          </div>

          <p className="movement-status">Credit</p>

          <p className="date-activity">March 3, 2022</p>

          <p className="details">
            &#8358;<span>5000</span>
          </p>
        </div>

        <div className="movement-line">
          <div className="stacked-icon debit-color">
            <FontAwesomeIcon icon={faCircle} />
          </div>

          <p className="movement-status">Debit</p>

          <p className="date-activity">March 3, 2022</p>

          <p className="details">
            &#8358;<span>5000</span>
          </p>
        </div>

        <div className="movement-line">
          <div className="stacked-icon credit-color">
            <FontAwesomeIcon icon={faCircle} />
          </div>

          <p className="movement-status">Credit</p>

          <p className="date-activity">March 3, 2022</p>

          <p className="details">
            &#8358;<span>5000</span>
          </p>
        </div>

        <div className="movement-line">
          <div className="stacked-icon debit-color">
            <FontAwesomeIcon icon={faCircle} />
          </div>

          <p className="movement-status">Debit</p>

          <p className="date-activity">March 3, 2022</p>

          <p className="details">
            &#8358;<span>5000</span>
          </p>
        </div>

        <div className="movement-line">
          <div className="stacked-icon debit-color">
            <FontAwesomeIcon icon={faCircle} />
          </div>

          <p className="movement-status">Debit</p>

          <p className="date-activity">March 3, 2022</p>

          <p className="details">
            &#8358;<span>5000</span>
          </p>
        </div>

        <div className="movement-line">
          <div className="stacked-icon credit-color">
            <FontAwesomeIcon icon={faCircle} />
          </div>

          <p className="movement-status">Credit</p>

          <p className="date-activity">March 3, 2022</p>

          <p className="details">
            &#8358;<span>5000</span>
          </p>
        </div>

        <div className="movement-line">
          <div className="stacked-icon credit-color">
            <FontAwesomeIcon icon={faCircle} />
          </div>

          <p className="movement-status">Credit</p>

          <p className="date-activity">March 3, 2022</p>

          <p className="details">
            &#8358;<span>5000</span>
          </p>
        </div>
      </div>
    </>
  );
}