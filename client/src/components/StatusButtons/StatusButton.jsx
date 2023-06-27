import React from "react";
import Pending from "../../assets/ApplicationSubmitted.png";
import Verification from "../../assets/varification.png";
import Approved from "../../assets/Approved.png";
import PhysicalCard from "../../assets/physical-card.png";
import "./StatusButton.css";

const StatusButton = () => {
  return (
    <div className="status-button-container">
      <div class="horizontal-line"></div>
      <div className="buttons-container">
        <div className="status-button" >
          <div style={{border:"2px solid green"}}>
            <img className="logo" src={Pending} alt="Application Not Submitted" />
          </div>
          <div style={{border:"2px solid red"}}>
            <p>Application Submission</p>
            <h6>Your Application Submission is in progress</h6>
          </div>
        </div>
        <div className="status-button">
          <div>
            <img className="logo" src={Verification} alt="Application Verification" />
          </div>

          <div>
            <p>Application Verification</p>
          </div>
        </div>
        <div className="status-button">
          <div>
            <img className="logo" src={Approved} alt="Application Approval" />
          </div>

          <div>
            <p>Application Approval</p>
          </div>
        </div>
        <div className="status-button">
        <div>
          <img className="logo" src={PhysicalCard} alt="Physical Card" />
        </div>

        <div>
          <p>Physical Card Delivery</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default StatusButton;
