import React, { useState, useEffect } from "react";
import "../Footer/Footer.css";

const Footer = () => {
  const [applicationCompleted, setApplicationCompleted] = useState(false);
 
 

  return (
    <div className="footer-container">
      {!applicationCompleted && (
        <button
          onClick={() => setApplicationCompleted(true)}
          className="footer-button-active"
        >
          Complete Application Now
        </button>
      )}
      <button
        onClick={() => setApplicationCompleted(false)}
        className={
          applicationCompleted === true
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
