import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [logoCount, setLogoCount] = useState(1); 

  const maxSpeed = 100;
  const [rotationSpeed, setRotationSpeed] = useState(1);

  const logos = Array.from({ length: logoCount }, (_, index) => (
    <img key={index} src={logo} className="App-logo" alt="logo" />
  ));

  const increaseLogoCount = () => {
    setLogoCount(logoCount + 1); 
  };
  const decreaseLogoCount = () => {
    if (logoCount > 0) {
      setLogoCount(logoCount - 1); 
    }
  }
  
  useEffect(() => {
    const logoElements = document.querySelectorAll('.App-logo');
    logoElements.forEach((logoElement) => {
      const htmlElement = logoElement as HTMLElement;
      htmlElement.style.animationDuration  = `${rotationSpeed}s`;
    });
  }, [rotationSpeed, maxSpeed]);

  const updateRotationSpeed = (value:number) => {
    const newSpeed = maxSpeed - value;
    setRotationSpeed(newSpeed);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logos-container">
          {logos}
        </div>
        <p>
          ---- <code>Реконструкция</code> ----
        </p>
        <div className="speed-control">
          <label>Скорость вращения:</label>
          <input
            type="range"
            min="0"
            max={maxSpeed - 1}
            step="1"
            value={maxSpeed - rotationSpeed}
            onChange={(e) => updateRotationSpeed(parseInt(e.target.value))}
          />
          <h1>{maxSpeed - rotationSpeed + 1}</h1>
        </div>
        <div className="button-container">
          <button onClick={decreaseLogoCount}>-1</button>
          <button onClick={increaseLogoCount}>+1</button>
        </div>
        <a
          className="App-link"
          href="https://1562863-cd94457.twc1.net/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </a>
      </header>
    </div>
  );
}

export default App;