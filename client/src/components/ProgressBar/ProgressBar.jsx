import React, { useEffect, useState } from "react";
import GreenTick from "../../assets/tick.svg";
import BlueIcon from "../../assets/blueCircle.png";
import LineLoader from "../LineLoader/LineLoader";
import Ellipse from "../../assets/ellipse.png";
import "../ProgressBar/ProgressBar.css";

const ProgressBar = ({ clicked }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        setToggle((prevToggle) => !prevToggle);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [clicked]);

  console.log("progress bar re-rendering");
  console.log("clicked is ", clicked);

  return (
    <div className="progress-bar-container">
      {clicked === false ? (
        <img className="status-icon" src={BlueIcon} alt="blue icon" />
      ) : (
        <img className="svg-tick-container" src={GreenTick} alt="tick-svg" />
      )}
      <LineLoader clicked={clicked} />
      {toggle === false ? (
        <img className="status-icon" src={Ellipse} alt="blue icon" />
      ) : (
        <img className="status-icon" src={BlueIcon} alt="blue icon" />
      )}
      <LineLoader clicked={false} />
      <img className="status-icon" src={Ellipse} alt="blue icon" />
      <LineLoader clicked={false} />
      <img className="status-icon" src={Ellipse} alt="blue icon" />
    </div>
  );
};

export default ProgressBar;