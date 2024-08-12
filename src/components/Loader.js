// Loader.js
import React from 'react';
import '../css/Loader.css'; // Import the CSS file for styling
import { ThreeCircles } from "react-loader-spinner"

const Loader = ({ color = "#081e36" }) => {
    return (
        <ThreeCircles
        visible={true}
        height="16"
        width="20"
        color={color}  
        ariaLabel="loading-indicator"
      />
    );
};

export default Loader;
