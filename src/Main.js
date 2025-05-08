import logo from "./image/logo.png";
import { IoAlertCircleOutline } from "react-icons/io5";
import React from "react";

export default function Main() {
  return (
    <div className="container">
      <div className="left">
        <img src={logo} alt="name of company"></img>
        <div>
          <h2>Maritime Logistics Corp</h2>
          <div className="container">
            <p>
              425 Harbor Boulevard, Suit 300
              <br />
              Seattle, WA 98104
            </p>
            <hr />

            <p>
              <span>EXISTING ACCOUNT</span>
              <br />
              54383
            </p>
            <hr />

            <p>
              <span>BROKER</span>
              <br />
              Marsh McLennan
            </p>
            <hr />

            <p>
              <span>UNDERWRITER</span>
              <br />
              Kate Jonhson
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <p className="alarm">
          <IoAlertCircleOutline /> Needs Attention
        </p>
        <div className="container">
          <div>
            <p>Marine Survey Required</p>
            <span>Scheduled for 06/12/2025</span>
            <br />
            <a>Review detailes link &#8594;</a>
          </div>

          <div>
            <p>Loss Control Complete</p>
            <span>Last inspection: 02/15/25</span>
            <br />
            <a>View report &#8594;</a>
          </div>

          <div>
            <p>Claim Review Required</p>
            <span>3 open claims // $245,000 TTL</span>
            <br />
            <a>View claims &#8594;</a>
          </div>
        </div>
      </div>
    </div>
  );
}
