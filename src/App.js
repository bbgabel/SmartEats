import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Start from './components/pages/Start';
import logo from './components/Items/img/logo.jpg';
import About from './components/pages/About';
import Slider from './components/Items/Slider';
import './App.css';
import './components/Items/Items.css'

function Home() {

  return (
    <div className="App">
        <Slider text="Welcome to SmartEatz!"/>
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
