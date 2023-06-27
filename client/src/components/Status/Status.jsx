import React, { useState } from "react";
import SearchLogo from "../../assets/search.png";
import "../Status/Status.css";

const Status = () => {
  const [currentStatus, setCurrentStatus] = useState("Application Submission");

  return (
    <div className="status-container">
      <div>
        <div className="status-container--status">
          <h3>Current Status : {currentStatus}</h3>
          <div className="status-container--application-no">
            <div>
              <p>Application Number</p>
              <p>23451625432</p>
            </div>
            <div>
            <img  className="logo" src={SearchLogo} alt="search design logo" />
            </div>
            
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Status;
