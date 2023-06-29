import React, { useState, useEffect } from "react";
import StatusButton from "../StatusButtons/StatusButton";
import SearchLogo from "../../assets/search.png";
import "../Status/Status.css";

const Status = ({ clicked }) => {
  const [currentStatus, setCurrentStatus] = useState("Application Submission");
  const [nextStatus, setNextStatus] = useState(false);

  useEffect(() => {
    function toggleState() {
      setNextStatus(!nextStatus);
    }

    if (clicked) setTimeout(toggleState, 2000);
    else setNextStatus(false);
  }, [clicked]);

  console.log("clicked is ", clicked, " next status is ", nextStatus);

  return (
    <div class="status-root">
      <div className="status-container">
        <div>
          <div className="status-container--status">
            <h2 className="status-heading" style={{ color: "#2D2D2D", "margin-left": "3%" }}>
              Current Status:{" "}
              {nextStatus === false
                ? "Application Submissions"
                : "Application Under Verification"}
            </h2>
            <div className="status-container--application-no">
              <div>
                <p class="application-no" >Application Number</p>
                <p>23451625432</p>
              </div>
              <div>
                <img
                  className="logo"
                  src={SearchLogo}
                  alt="search design logo"
                />
              </div>
            </div>
          </div>
        </div>
        <StatusButton clicked={clicked} nextStatus={nextStatus} />
      </div>
    </div>
  );
};

export default Status;
