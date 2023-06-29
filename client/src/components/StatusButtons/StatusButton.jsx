import React from "react";
import Pending from "../../assets/ApplicationSubmitted.png";
import Verification from "../../assets/varification.png";
import VerificationGrey from "../../assets/varification-grey.png";
import Approved from "../../assets/Approved.png";
import PhysicalCard from "../../assets/physical-card.png";
import ProgressBarAs from "../ProgressBar/ProgressBarAS";
import AdImg from "../../assets/mobile-add.png";
import LineLoader from "../LineLoader/LineLoader";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./StatusButton.css";

const StatusButton = ({ clicked, nextStatus }) => {
  return (
    <>
      <div className="status-button-container">
        {clicked === false ? (
          <ProgressBarAs clicked={clicked} />
        ) : (
          <ProgressBar clicked={clicked} />
        )}
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
              <p
                className={
                  nextStatus === false
                    ? "active-heading"
                    : "inactive-heading" 
                }
              >
                {nextStatus === false
                  ? "Application Submission"
                  : "Application  Submitted"}
                
              </p>
              <p
              className={
                nextStatus === true
                  ? "sub-text-active"
                  : "sub-text-inactive"
              }
               
              >
                {nextStatus === false
                  ? "Your Application Submission is in progress"
                  : "Your Application has been completed"}
              </p>
            </div>
          </div>
          <div className="status-button">
            <div>
             {
              nextStatus === false ?  
               <img
                className="image-container"
                src={VerificationGrey}
                alt="Application Verification"
              />
              :
              <img
                className="image-container"
                src={Verification}
                alt="Application Verification"
              />

             }
            </div>

            <div>
              <p
                className={
                  nextStatus === true ? "active-heading" : "inactive-heading"
                }
              >
                {nextStatus === false
                  ? "Application Verification"
                  : "Verification in Process"}
              </p>
              <p
              style={
                nextStatus === true
                  ? { transition: "opacity 0.5s ease", opacity: 1 }
                  : { transition: "opacity 0.5s ease", opacity: 0 }
              }
                className="subHeading"
              >
                {nextStatus === false
                  ? ""
                  : "Your application is under policy check and varification"}
              </p>
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
              <p style={{ color: "grey" }}>Application Approval</p>
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
              <p style={{ color: "grey" }}>Physical Card Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusButton;
