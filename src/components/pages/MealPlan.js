import { React, useState, useEffect } from 'react';
import axios from 'axios';

import Slider from '../Items/Slider';

const getRequestData = () => ({
  age: localStorage.getItem('age'),
  height: localStorage.getItem('height'),
  weight: localStorage.getItem('weight'),
  desiredWeight: localStorage.getItem('desired'),
  sex: localStorage.getItem('sex'),
  activity: localStorage.getItem('activity'),
  body: localStorage.getItem('bodytype'),
});

export default function MealPlan() {
  const [mealData, setMealData] = useState(null);
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalFat, setTotalFat] = useState(0);

  useEffect(() => {
    sendApiRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendApiRequest = () => {
    const requestData = getRequestData();
    axios
      .post('http://localhost:3000/api', requestData)
      .then((response) => {
        const nextMeals = response.data;
        setMealData(nextMeals);
      })
      .catch((error) => {
        console.error('API Request Error:', error);
      });
  };

  const findTotals = (data) => {
    if (!data) return;
    let cals = 0;
    let prot = 0;
    let carb = 0;
    let fat = 0;

    const addTotals = (meal) => {
      meal.Calories.forEach((cal) => (cals += cal));
      meal.Protein.forEach((p) => (prot += p));
      meal.Carbs.forEach((c) => (carb += c));
      meal.Fat.forEach((f) => (fat += f));
    };

    addTotals(data.breakfast);
    addTotals(data.lunch);
    addTotals(data.dinner);

    setTotalCalories(cals);
    setTotalProtein(Math.round(prot));
    setTotalCarbs(Math.round(carb));
    setTotalFat(Math.round(fat));
  };

  useEffect(() => {
    findTotals(mealData);
  }, [mealData]);

  return (
    <div className="Pre-Start">
      <Slider text="Your curated day of eating" />
      <div className="page-shell">
        <div className="section-header">
          <div>
            <p className="pill subtle">Step 3</p>
            <h2>Generated meal plan</h2>
            <p className="lede">
              Click a meal to reveal macros and serving sizes. Regenerate anytime to
              explore new options tailored to your inputs.
            </p>
          </div>
          <button onClick={sendApiRequest} className="primary-btn">
            Refresh plan <i className="fas fa-rotate-right"></i>
          </button>
        </div>

        {!mealData ? (
          <div className="empty-state">
            <div className="shimmer" />
            <p className="lede">Fetching a fresh plan…</p>
            <p className="microtext">If this takes long, ensure the API service is running.</p>
          </div>
        ) : (
          <div className="meal-grid">
            <MealColumn title="Breakfast" meals={mealData.breakfast} />
            <MealColumn title="Lunch" meals={mealData.lunch} />
            <MealColumn title="Dinner" meals={mealData.dinner} />
          </div>
        )}

        {mealData && (
          <div className="stats-grid">
            <div className="stat-card">
              <p className="microtext">Total Calories</p>
              <p className="stat-value">{totalCalories}</p>
              <p className="stat-sub">For the full day</p>
            </div>
            <div className="stat-card">
              <p className="microtext">Protein</p>
              <p className="stat-value">{totalProtein}g</p>
              <p className="stat-sub">Lean muscle support</p>
            </div>
            <div className="stat-card">
              <p className="microtext">Carbohydrates</p>
              <p className="stat-value">{totalCarbs}g</p>
              <p className="stat-sub">Energy throughout the day</p>
            </div>
            <div className="stat-card">
              <p className="microtext">Fat</p>
              <p className="stat-value">{totalFat}g</p>
              <p className="stat-sub">Hormone and brain health</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const MealColumn = ({ title, meals }) => (
  <div className="meal-column">
    <div className="column-head">
      <p className="pill subtle">{title}</p>
      <h3>{title} lineup</h3>
    </div>
    <ul className="food-list">
      {meals.Names.map((foodItem, index) => (
        <FoodItem
          key={foodItem}
          name={foodItem}
          calories={meals.Calories[index]}
          protein={meals.Protein[index]}
          carbs={meals.Carbs[index]}
          fat={meals.Fat[index]}
          serving={meals.Serving[index]}
        />
      ))}
    </ul>
  </div>
);

const FoodItem = ({ name, calories, protein, carbs, fat, serving }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className="food-card" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="food-header">
        <div>
          <p className="food-name">{name}</p>
          <p className="microtext">Tap to {isExpanded ? 'hide' : 'view'} macros</p>
        </div>
        <span className="pill subtle">{calories} cal</span>
      </div>
      {isExpanded && (
        <div className="macro-grid">
          <div>
            <p className="microtext">Protein</p>
            <p className="macro-value">{protein}g</p>
          </div>
          <div>
            <p className="microtext">Carbs</p>
            <p className="macro-value">{carbs}g</p>
          </div>
          <div>
            <p className="microtext">Fat</p>
            <p className="macro-value">{fat}g</p>
          </div>
          <div>
            <p className="microtext">Serving</p>
            <p className="macro-value">{serving}</p>
          </div>
        </div>
      )}
    </li>
  );
};