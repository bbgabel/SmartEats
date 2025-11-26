import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Start from './components/pages/Start';
import About from './components/pages/About';
import MealPlan from './components/pages/MealPlan';
import logo from './components/Items/img/logo.jpg';
import Slider from './components/Items/Slider';
import './App.css';
import './components/Items/Items.css';

function Home() {
  return (
    <div className="App">
      <Slider text="Personalized nutrition, delivered beautifully" />
      <section className="hero">
        <div className="hero-copy">
          <p className="pill">SmartEatz • Wellness OS</p>
          <h1>
            Design your <span>smart meal plan</span> without spreadsheets.
          </h1>
          <p className="lede">
            Tell us about your lifestyle and goals, and we will generate a curated
            meal plan with balanced macros and clear guidance. Modern, fast, and
            built to keep you motivated.
          </p>
          <div className="cta-row">
            <Link to="/Start" className="primary-btn">
              Start now
            </Link>
            <Link to="/About" className="ghost-btn">
              Meet the team
            </Link>
          </div>
          <div className="badges">
            <div className="badge-card">
              <span className="badge-icon">
                <i className="fas fa-bolt"></i>
              </span>
              <div>
                <p className="badge-title">Instant drafts</p>
                <p className="badge-sub">Generate plans in seconds.</p>
              </div>
            </div>
            <div className="badge-card">
              <span className="badge-icon">
                <i className="fas fa-heart"></i>
              </span>
              <div>
                <p className="badge-title">Goal aligned</p>
                <p className="badge-sub">Macros tuned to your target.</p>
              </div>
            </div>
            <div className="badge-card">
              <span className="badge-icon">
                <i className="fas fa-sparkles"></i>
              </span>
              <div>
                <p className="badge-title">Modern UI</p>
                <p className="badge-sub">A calm, premium experience.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glass-panel">
            <div className="hero-logo">
              <img src={logo} className="App-logo" alt="SmartEatz logo" />
              <div>
                <p className="microtext">Modernized</p>
                <p className="hero-sub">Nutrition made effortless.</p>
              </div>
            </div>
            <div className="hero-metrics">
              <div className="metric">
                <p className="metric-value">3</p>
                <p className="metric-label">Meals curated daily</p>
              </div>
              <div className="metric">
                <p className="metric-value">4</p>
                <p className="metric-label">Lifestyle inputs</p>
              </div>
              <div className="metric">
                <p className="metric-value">∞</p>
                <p className="metric-label">Customization</p>
              </div>
            </div>
            <div className="hero-footer">
              <p>
                Start with your details, choose your body type, and get a
                beautiful plan that you can click through for macros and serving
                sizes.
              </p>
              <Link to="/Start" className="link-chip">
                Begin assessment <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
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
        <Route path="/MealPlan" element={<MealPlan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
