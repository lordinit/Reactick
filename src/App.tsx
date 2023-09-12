import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [logoCount, setLogoCount] = useState(4); // Используем хук useState для управления количеством логотипов
  const logos = Array.from({ length: logoCount }, (_, index) => (
    <img key={index} src={logo} className="App-logo" alt="logo" />
  ));

  const increaseLogoCount = () => {
    setLogoCount(logoCount + 1); // Увеличиваем количество логотипов на 1
  };

  const decreaseLogoCount = () => {
    if (logoCount > 0) {
      setLogoCount(logoCount - 1); // Уменьшаем количество логотипов на 1 (если оно больше 0)
    }
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
        <button onClick={increaseLogoCount}>+1</button>
        <button onClick={decreaseLogoCount}>-1</button>
        <a
          className="App-link"
          href="https://1562863-cd94457.twc1.net/api"
          target='_blank'
          rel="noopener noreferrer"
        >
          API
        </a>
      </header>
    </div>
  );
}

export default App;
