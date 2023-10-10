import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Start from './components/Start';
import logo from './components/logo.jpg';
import Hamburger from './components/Items/Hamburger';
import About from './components/About';
import './App.css';
import './components/Items/Items.css'

function Home() {

  const [isHamOpen, setIsHamOpen] = useState(false);

  const toggleHam = () => {
    setIsHamOpen(!isHamOpen);
  }

  return (
    <div className="App">
      <header className="App-header-real">
        <div className="left">
          <button className="burger-button" onClick={toggleHam}>
        <Hamburger />
        </button>
        <div className={`sliding-menu ${isHamOpen ? 'open' : ''}`}>
          <button className="burger-button-modal" onClick={toggleHam}>
          <Hamburger />
          </button>
          <Link to="/" className="Menu-buttons button2">
          <i className="fas fa-house fa-xs"> Home</i>
          </Link>
          <p />
          <Link to="/About" className="Menu-buttons button1">
          <i className="fas fa-users fa-xs"> About Us</i>
          </Link>
        </div>
        </div>
        <div className="center">
        Welcome to SmartEatz!
        </div>
      </header>
      <header className="App-header">
        <h3>Click the logo to started!</h3>
        <Link to="/Start" className="App-button">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Start" element={<Start />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
