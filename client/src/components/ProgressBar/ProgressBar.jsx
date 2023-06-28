import React ,{useEffect} from "react";
import GreenTick from "../../assets/tick.svg";
import BlueIcon from "../../assets/blueCircle.png";
import LineLoader from "../LineLoader/LineLoader";
import Ellipse from "../../assets/ellipse.png";
import "../ProgressBar/ProgressBar.css";
import { useState } from "react";



const ProgressBar = ({clicked}) => {

  const [toggle , setToggle] = useState(false);

    function toggleState() {
      setToggle((prevToggle) => !prevToggle);
    }
  
    if (clicked) {
      setTimeout(toggleState, 2000);
    }


  return (
    <div className="progress-bar-container">
      {clicked===false?<img src={BlueIcon} alt="blue icon"/>:<img className="svg-tick-container" src={GreenTick} alt="tick-svg" />}
      <LineLoader clicked={clicked}  />
       { toggle===false?<img src={Ellipse} alt="blue icon"/> :<img src={BlueIcon} alt="blue icon"/>}
      <LineLoader clicked={false} />
     <img src={Ellipse} alt="blue icon"/>
      <LineLoader clicked={false} />
      <img src={Ellipse} alt="blue icon"/>
    </div>
  );
};

export default ProgressBar;
