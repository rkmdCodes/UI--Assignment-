import React from "react";
import GreenTick from "../../assets/tick.svg";
import "../LineLoader/LineLoader.css";

const LineLoader = ({clicked}) => {
  return (
    <div class={"horizontal-line2"}>
      <div className={clicked===true?"horizontal-line animate":"horizontal-line"}></div>
    </div>
  );
};
export default LineLoader;
