import React from 'react';
import './AnimatedText.css';
import opensys from "./logo512.png";
import LiquidButton from './LiquidButton';
const AnimatedText = () => {
  return (
    <div className="animated-text-container">
      <div className="animated-text">
        <img src={opensys} alt="OpenSys Logo" className="logo4" />
        <div className="text">
          <span className="open-source animate-flow">The Open-Source</span>
          <span className="symposium animate-flow">Symposium</span>
        </div>
    
        <p className="subtitle">
          A grand symphony of expansive technical spectacles!
        </p>
        <a href="#event" class="btn-liquid">
          <br />
		<LiquidButton/>
</a>
      </div>
    </div>
  );
};

export default AnimatedText;
