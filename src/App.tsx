import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const logoCount = 3; 
  const logos = Array.from({ length: logoCount }, (_, index) => (
    <img key={index} src={logo} className="App-logo" alt="logo" />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <div className="logos-container">
          {logos}
        </div>
        <a
          className="App-link"
          href="https://1562863-cd94457.twc1.net/api"
          target='_blank'
          rel="noopener noreferrer"
        >
          api
        </a>
      </header>
    </div>
  );
}

export default App;
