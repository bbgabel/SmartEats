import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Start.css';

export default function Start() {

    const [selectedAge, setSelectedAge] = useState("");
    const [weight, setWeight] = useState("");
    const [valid, setValid] = useState(false);

    const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
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

    return (
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

            <div className="weight">
                <label className="desc">Weight (lbs):      </label>
                <input
                className="textbox"
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




            <h1>This is the start...</h1>
            <Link to="/">Go Home</Link>
        </div>
    )
}