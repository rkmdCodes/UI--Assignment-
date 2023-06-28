import React from "react";
import Pending from "../../assets/ApplicationSubmitted.png";
import Verification from "../../assets/varification.png";
import Approved from "../../assets/Approved.png";
import PhysicalCard from "../../assets/physical-card.png";
import ProgressBarAs from "../ProgressBar/ProgressBarAS";
import AdImg from "../../assets/mobile-add.png";
import LineLoader from "../LineLoader/LineLoader";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./StatusButton.css";

const StatusButton = ({clicked}) => {
  return (
    <>
      <div className="status-button-container">
       
         {clicked === false ? <ProgressBarAs clicked={clicked}/> : <ProgressBar clicked={clicked}/>}
        <div className="buttons-container">
          <div className="status-button">
            <div>
              <img
                className="image-container"
                src={Pending}
                alt="Application Not Submitted"
              />
            </div>
            <div className="data-container">
              <p>
                Application Submission.
                <br />
                
              </p>
            </div>
          </div>
          <div className="status-button">
            <div>
              <img
                className="image-container"
                src={Verification}
                alt="Application Verification"
              />
            </div>

            <div>
              <p>Application Verification</p>
            </div>
          </div>
          <div className="status-button">
            <div>
              <img
                className="image-container"
                src={Approved}
                alt="Application Approval"
              />
            </div>

            <div>
              <p>Application Approval</p>
            </div>
          </div>
          <div className="status-button">
            <div>
              <img
                className="image-container"
                src={PhysicalCard}
                alt="Physical Card"
              />
            </div>

            <div>
              <p>Physical Card Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusButton;
