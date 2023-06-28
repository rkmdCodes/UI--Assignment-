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

const StatusButton = ({clicked,nextStatus}) => {
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
              <p style={nextStatus===false?{'color':'#00B1F2'}:{'color':'black'}}>
                {nextStatus===false ? "Application Submission" : "Application  Submitted"}
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
              <p style={nextStatus===true?{'color':'#00B1F2'}:{'color':'black'}}>
              {nextStatus===false ? "Application Verification" : "Verification in Process"}
              
              
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
              <p style={{'color':'grey'}}>Application       Approval</p>
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
              <p style={{'color':'grey'}}>Physical Card Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusButton;
