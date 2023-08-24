import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo top-left" alt="logo" />
        <img src={logo} className="App-logo top-right" alt="logo" />
        <img src={logo} className="App-logo bottom-left" alt="logo" />
        <img src={logo} className="App-logo bottom-right" alt="logo" />
      </header>
    </div>
  );
}

export default App;
