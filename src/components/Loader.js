import React from 'react';
import '../css/Loader.css'; // Import the CSS file for styling
import { ThreeCircles } from "react-loader-spinner"

const Loader = () => {
    return (
        <ThreeCircles
        visible={true}
        height="80"
        width="80"
        outerCircleColor="#081e36"       // Deep blue color
        innerCircleColor="rgb(159, 70, 0)" // Reddish-brown color
        middleCircleColor="#081e36"       // Deep blue color
        ariaLabel="loading-indicator"
      />
    );
};

export default Loader;
