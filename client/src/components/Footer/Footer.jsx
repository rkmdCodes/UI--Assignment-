import React, { useState, useEffect } from "react";
import "../Footer/Footer.css";

const Footer = ({clicked,setClicked}) => {
  const [applicationCompleted, setApplicationCompleted] = useState(false);
 
 

  return (
    <div className="footer-container">
      {!clicked && (
        <button
          onClick={() => setClicked(true)}
          className="footer-button-active"
        >
          Complete Application Now
        </button>
      )}
      <button
        onClick={() => setClicked(false)}
        className={
          clicked === true
            ? "footer-button-active"
            : "footer-button-inactive"
        }
      >
        Back to Home
      </button>
    </div>
  );
};

export default Footer;
