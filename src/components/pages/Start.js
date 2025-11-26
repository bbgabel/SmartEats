import React, { useState, useEffect } from 'react';
import Slider from '../Items/Slider';
import BodyType from '../Items/BodyType';
import { Link } from 'react-router-dom';
import './Start.css';

export default function Start() {

    const [age, setAge] = useState(localStorage.getItem('age'));
    const [height, setHeight] = useState(localStorage.getItem('height'));
    const [weight, setWeight] = useState(localStorage.getItem('weight'));
    const [sex, setSex] = useState(localStorage.getItem('sex'));
    const [activity, setActivity] = useState(localStorage.getItem('activity'));
    const [valid, setValid] = useState(false);
    const [ready, setReady] = useState(false);
    const [body, setBody] = useState(null);
    const [desiredWeight, setDesiredWeight] = useState(localStorage.getItem('desired'));


    const handleAgeChange = (event) => {
        setAge(event.target.value);
        localStorage.setItem('age', event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
        localStorage.setItem('height', event.target.value);
    }

    const handleSexChange = (event) => {
        setSex(event.target.value);
        localStorage.setItem('sex', event.target.value);
    };

    const handleActivityChange = (event) => {
        setActivity(event.target.value);
        localStorage.setItem('activity', event.target.value);
    };

    const handleWeightChange = (event) => {
        const input = event.target.value;
        const newInput = parseInt(input);

        if (!isNaN(newInput) && newInput >= 80 && newInput <= 300) {
            setWeight(newInput);
            localStorage.setItem('weight', event.target.value);
            setValid(true);
        } else {
            setWeight(input);
            localStorage.setItem('weight', event.target.value);
            setValid(false);
        }
    }

    useEffect(() => {
        const storedWeight = localStorage.getItem('weight');
        setBody(localStorage.getItem('bodytype'));
        if (storedWeight) {
          const parsedWeight = parseInt(storedWeight);
          if (!isNaN(parsedWeight) && parsedWeight >= 80 && parsedWeight <= 300) {
            setValid(true);
          } else {
            setValid(false);
          }
        }
      }, []);

    const updateDesiredWeight = (num) => {
        setDesiredWeight(num);
    }

    const checkResults = (age, height, valid, desiredWeight, sex, activity, body) => {
        if (age && height && valid && desiredWeight && sex && activity && body) {
            setReady(true);
        } else {
            setReady(false);
        }
    }

    useEffect(() => {
        checkResults(age, height, valid, desiredWeight, sex, activity, body);
    }, [age, height, valid, desiredWeight, sex, activity, body]);

  const ageOptions = [];
  for (let age = 12; age <= 80; age++) {
    ageOptions.push(age);
  }

  const heightOptions = [];
    for (let i = 4; i <= 7; i++) {
        for (let j = 0; j <= 11; j++) {
            let temp = i + "' " + j + "\"";
            heightOptions.push(temp);
        }
    }

    return (
        <div className="Pre-Start">
            <Slider text="Tell us about yourself to craft your plan" />
            <div className="page-shell">
                <div className="section-header">
                    <div>
                        <p className="pill subtle">Step 1</p>
                        <h2>Your lifestyle snapshot</h2>
                        <p className="lede">
                            Provide a few quick details. We use them to calculate calories,
                            protein, carbs, and fats for a balanced day.
                        </p>
                    </div>
                    {ready && (
                        <Link to='/MealPlan' className="primary-btn">
                            Generate my plan <i className="fas fa-arrow-right"></i>
                        </Link>
                    )}
                </div>
                <div className="card-grid">
                    <div className="input-card">
                        <div className="field">
                            <label className="field-label">Age</label>
                            <p className="microtext">We tailor recommendations for your stage of life.</p>
                            <select value={age} onChange={handleAgeChange} className="dropdown">
                                <option value="">Select age</option>
                                {ageOptions.map((ageOption) => (
                                    <option key={ageOption}>{ageOption}</option>
                                ))}
                            </select>
                            {age && (
                                <div className="status-row success">
                                    <i className="fas fa-check"></i>
                                    <span>Captured</span>
                                </div>
                            )}
                        </div>

                        <div className="field">
                            <label className="field-label">Height</label>
                            <p className="microtext">Choose the height that feels closest to you.</p>
                            <select value={height} onChange={handleHeightChange} className="dropdown">
                                <option value="">Select height</option>
                                {heightOptions.map((heightOption) => (
                                    <option key={heightOption}>{heightOption}</option>
                                ))}
                            </select>
                            {height && (
                                <div className="status-row success">
                                    <i className="fas fa-check"></i>
                                    <span>Noted</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="input-card">
                        <div className="field">
                            <label className="field-label">Weight (lbs)</label>
                            <p className="microtext">We validate a healthy range so the plan stays realistic.</p>
                            <input
                                className="textbox"
                                placeholder="Enter weight"
                                type="text"
                                value={weight}
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
                                    <span>Looks good</span>
                                </div>
                            )}
                        </div>

                        <div className="field">
                            <label className="field-label">Gender</label>
                            <p className="microtext">Helps us set realistic calorie goals.</p>
                            <select value={sex} onChange={handleSexChange} className="dropdown">
                                <option value="">Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            {sex && (
                                <div className="status-row success">
                                    <i className="fas fa-check"></i>
                                    <span>Saved</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="input-card">
                        <div className="field">
                            <label className="field-label">Activity level</label>
                            <p className="microtext">Fine tune the energy your day requires.</p>
                            <select value={activity} onChange={handleActivityChange} className="dropdown">
                                <option value="">Select activity</option>
                                <option>Not Active (1-2 Days/Week)</option>
                                <option>Active (3-4 Days/Week)</option>
                                <option>Extremely Active (5-7 Days/Week)</option>
                            </select>
                            {activity && (
                                <div className="status-row success">
                                    <i className="fas fa-check"></i>
                                    <span>Dialed in</span>
                                </div>
                            )}
                        </div>
                        <div className="field">
                            <div className="highlight-box">
                                <p className="microtext">Ready to move on?</p>
                                <h3>Head to body type and preferences next.</h3>
                                <p className="lede">Set your target weight, body type, and dietary needs.</p>
                                {ready ? (
                                    <Link to='/MealPlan' className="primary-btn ghost">
                                        Continue to meal plan
                                    </Link>
                                ) : (
                                    <p className="microtext muted">Fill out all fields to continue.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-header">
                    <div>
                        <p className="pill subtle">Step 2</p>
                        <h2>Body type & preferences</h2>
                        <p className="lede">Choose your physique focus and set a target weight with dietary flags.</p>
                    </div>
                </div>
                <div>
                    <BodyType updateDesiredWeight={updateDesiredWeight} />
                </div>
            </div>
        </div>
    );
}