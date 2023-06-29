import React from "react";
import GreenTick from "../../assets/tick.svg";
import BlueIcon from "../../assets/blueCircle.png";
import LineLoader from "../LineLoader/LineLoader";
import Ellipse from "../../assets/ellipse.png";
import "../ProgressBar/ProgressBar.css";

const ProgressBarAs = () => {
  return (
    <div className="progress-bar-container">
      <img className="status-icon" src={BlueIcon} alt="blue icon" />
      <LineLoader />
      <img className="status-icon" src={Ellipse} alt="blue icon" />
      <LineLoader class="" />
      <img className="status-icon" src={Ellipse} alt="blue icon" />
      <LineLoader />
      <img className="status-icon" src={Ellipse} alt="blue icon" />
    </div>
  );
};

export default ProgressBarAs;
