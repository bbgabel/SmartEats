import React, { useState, useEffect } from 'react';
import './Items.css';
import lean from './img/lean.jpg';
import jacked from './img/jacked.jpg';
import swole from './img/swole.jpg';

export default function BodyType({ updateDesiredWeight }) {
  const [activeButton, setActiveButton] = useState(parseInt(localStorage.getItem('bodytype'), 10));
  const [desiredWeight, setWeight] = useState(localStorage.getItem('desired'));
  const [valid, setValid] = useState(false);
  const [preferences, setPreferences] = useState({
    lactose: false,
    gluten: false,
    nut: false,
  });

  const handleClick = (buttonID) => {
    setActiveButton(buttonID);
    localStorage.setItem('bodytype', buttonID);
  };

  const handleWeightChange = (event) => {
    const input = event.target.value;
    const newInput = parseInt(input, 10);

    if (!isNaN(newInput) && newInput >= 80 && newInput <= 300) {
      setWeight(newInput);
      setValid(true);
      updateDesiredWeight(newInput);
      localStorage.setItem('desired', event.target.value);
    } else {
      setWeight(input);
      setValid(false);
      updateDesiredWeight('');
      localStorage.setItem('desired', event.target.value);
    }
  };

  const togglePreference = (key) => {
    setPreferences((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      localStorage.setItem(key, next[key]);
      return next;
    });
  };

  useEffect(() => {
    const storedWeight = localStorage.getItem('desired');
    const storedPrefs = {
      lactose: localStorage.getItem('lactose') === 'true',
      gluten: localStorage.getItem('gluten') === 'true',
      nut: localStorage.getItem('nut') === 'true',
    };
    setPreferences(storedPrefs);

    if (storedWeight) {
      const parsedWeight = parseInt(storedWeight, 10);
      if (!isNaN(parsedWeight) && parsedWeight >= 80 && parsedWeight <= 300) {
        setValid(true);
      } else {
        setValid(false);
      }
    }
  }, []);

  return (
    <div className="bodytype-section">
      <div className="bodytype-grid">
        <BodyTypeCard
          title="Ectomorph"
          description="Naturally lean with a fast metabolism. We prioritize gradual gains."
          image={lean}
          active={activeButton === 1}
          onClick={() => handleClick(1)}
        />
        <BodyTypeCard
          title="Mesomorph"
          description="Athletic build with balanced metabolism. We dial macros to maintain strength."
          image={jacked}
          active={activeButton === 2}
          onClick={() => handleClick(2)}
        />
        <BodyTypeCard
          title="Endomorph"
          description="Softer build with slower metabolism. We focus on sustainable, steady progress."
          image={swole}
          active={activeButton === 3}
          onClick={() => handleClick(3)}
        />
      </div>

      <div className="preference-grid">
        <div className="input-card full">
          <div className="field">
            <label className="field-label">Desired weight (lbs)</label>
            <p className="microtext">Pick a healthy target so we can right-size your plan.</p>
            <input
              className="textbox"
              placeholder="Enter weight"
              type="text"
              value={desiredWeight || ''}
              onChange={handleWeightChange}
            />
            {!valid ? (
              <div className="status-row warning">
                <i className="fas fa-circle-exclamation"></i>
                <span>Enter 80 - 300 lbs</span>
              </div>
            ) : (
              <div className="status-row success">
                <i className="fas fa-check"></i>
                <span>Target locked in</span>
              </div>
            )}
          </div>
        </div>

        <div className="input-card full">
          <div className="field">
            <label className="field-label">Dietary preferences</label>
            <p className="microtext">We keep these in mind when generating meals.</p>
            <div className="preference-row">
              <PreferenceToggle
                label="Lactose intolerant"
                checked={preferences.lactose}
                onChange={() => togglePreference('lactose')}
              />
              <PreferenceToggle
                label="Gluten free"
                checked={preferences.gluten}
                onChange={() => togglePreference('gluten')}
              />
              <PreferenceToggle
                label="Nut free"
                checked={preferences.nut}
                onChange={() => togglePreference('nut')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BodyTypeCard = ({ title, description, image, active, onClick }) => (
  <button className={`bodytype-card ${active ? 'active' : ''}`} onClick={onClick}>
    <img src={image} alt={title} className="bodytype-image" />
    <div className="bodytype-content">
      <p className="pill subtle">Body type</p>
      <h4>{title}</h4>
      <p className="microtext">{description}</p>
    </div>
    {active && (
      <span className="checkmark">
        <i className="fas fa-check"></i>
      </span>
    )}
  </button>
);

const PreferenceToggle = ({ label, checked, onChange }) => (
  <label className={`preference-toggle ${checked ? 'checked' : ''}`}>
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span className="toggle-pill">
      <span className="toggle-thumb" />
    </span>
    <span className="toggle-label">{label}</span>
  </label>
);