import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import Slider from './Items/Slider';
import './Start.css';

export default function Start() {

    const [selectedAge, setSelectedAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [sex, setSex] = useState("");
    const [activity, setActivity] = useState("");
    const [valid, setValid] = useState(false);

    const handleAgeChange = (event) => {
        setSelectedAge(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    }

    const handleSexChange = (event) => {
        setSex(event.target.value);
    };

    const handleActivityChange = (event) => {
        setActivity(event.target.value);
    };

    const handleWeightChange = (event) => {
        const input = event.target.value;
        const newInput = parseInt(input);

        if (!isNaN(newInput) && newInput >= 80 && newInput <= 300) {
            setWeight(newInput);
            setValid(true);
        } else {
            setWeight(input);
            setValid(false);
        }
    }
  
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
        <div class="Pre-Start">
            <Slider />
            <div>
                <div class="Start">
                    <div className="desc">
                        <label className="desc">Age:      </label>
                        <select value={selectedAge} onChange={handleAgeChange} className="dropdown">
                        <option value="">-- Select Age --</option>
                        {ageOptions.map((age) => (
                        <option> {age} </option>
                        ))}
                        </select>
                        {selectedAge && (
                            <label>
                            <i className="fas fa-check fa-xl green"></i>
                            </label>
                        )}
                    </div>

                    <div className="desc">
                        <label className="desc">Height:      </label>
                        <select value={height} onChange={handleHeightChange} className="dropdown">
                        <option value="">-- Select Height --</option>
                        {heightOptions.map((height) => (
                        <option> {height} </option>
                        ))}
                        </select>
                        {height && (
                            <label>
                            <i className="fas fa-check fa-xl green"></i>
                            </label>
                        )}
                    </div>

                    <div className="desc">
                        <label className="desc">Weight (lbs):      </label>
                        <input
                        className="textbox"
                        placeholder="Enter weight"
                        type="text"
                        value={weight}
                        onChange={handleWeightChange}
                        />
                        {!valid ? (
                            <i className="fas fa-x fa-l red"></i>
                        ) : (
                            <i className="fas fa-check fa-xl green"></i>
                        )}
                    </div>

                    <div className="desc">
                        <label className="desc">Gender:      </label>
                        <select value={sex} onChange={handleSexChange} className="dropdown">
                        <option value="">-- Select Gender --</option>
                        <option>Male</option>
                        <option>Female</option>
                        </select>
                        {sex && (
                            <label>
                            <i className="fas fa-check fa-xl green"></i>
                            </label>
                        )}
                    </div>

                    <div className="desc">
                        <label className="desc">Activity Level:      </label>
                        <select value={activity} onChange={handleActivityChange} className="dropdown">
                        <option value="">-- Select Activity --</option>
                        <option>Not Active (1-2 Days/Week)</option>
                        <option>Active (3-4 Days/Week)</option>
                        <option>Extremely Active (5-7 Days/Week)</option>
                        </select>
                        {activity && (
                            <label>
                            <i className="fas fa-check fa-xl green"></i>
                            </label>
                        )}
                    </div>




                </div>
                <div className="bottom">
                        <button className="next">
                            Food Preferences
                            <br></br>
                        <i className="fas fa-arrow-right fa-xl"></i>
                        </button>
                    </div>
            </div>
        </div>
    )
}