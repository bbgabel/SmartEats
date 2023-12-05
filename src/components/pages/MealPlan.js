import { React, useState, useEffect } from 'react';
import axios from 'axios';

import Slider from '../Items/Slider';

var age = localStorage.getItem('age');
var height = localStorage.getItem('height');
var weight = localStorage.getItem('weight');
var desiredWeight = localStorage.getItem('desired');
var sex = localStorage.getItem('sex');
var activity = localStorage.getItem('activity');
var body = localStorage.getItem('bodytype');

export default function MealPlan() {

    useEffect(() => {
    console.log("UPDATING!");
    age = localStorage.getItem('age');
    height = localStorage.getItem('height');
    weight = localStorage.getItem('weight');
    desiredWeight = localStorage.getItem('desired');
    sex = localStorage.getItem('sex');
    activity = localStorage.getItem('activity');
    body = localStorage.getItem('bodytype');
    updateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateData = () => {
        requestData = {
            age,
            height,
            weight,
            desiredWeight,
            sex,
            activity,
            body,
          }
    }

    var requestData = {
        age,
        height,
        weight,
        desiredWeight,
        sex,
        activity,
        body,
      }

      const [mealData, setMealData] = useState(null);

      const sendApiRequest = () => {
        axios.post('http://localhost:3000/api', requestData)
        .then(response => {
            const mealData = response.data;
            setMealData(mealData);
            console.log(mealData.breakfast.Names);
          })
          .catch(error => {
            console.error("API Request Error:", error);
          })
          };

    return (
        <div className="Pre-Start">
            <Slider text="Click to switch any meal"/>
            <div className="mealplan">
                <div className="breakfast-top">
                <i onClick = {sendApiRequest} className="fas fa-rotate-right fa-3x generate"></i>
                <h1 className="label">Breakfast</h1>
                </div>
                {!mealData ? (
                            <div />
                        ) : (
                          <div>
                          <ul className="food-display">
                          {mealData.breakfast.Names.map((foodItem, index) => (
                          <FoodItem
                            key={index}
                            name={foodItem}
                            calories={mealData.breakfast.Calories[index]}
                            protein={mealData.breakfast.Protein[index]}
                            carbs={mealData.breakfast.Carbs[index]}
                            fat={mealData.breakfast.Fat[index]}
                            serving={mealData.breakfast.Serving[index]}
                          />
                          ))}
                          </ul>
                          <div className="breakfast-top">
                          <h1>Lunch</h1>
                          </div>
                          <ul className="food-display">
                          {mealData.lunch.Names.map((foodItem, index) => (
                          <FoodItem
                            key={index}
                            name={foodItem}
                            calories={mealData.lunch.Calories[index]}
                            protein={mealData.lunch.Protein[index]}
                            carbs={mealData.lunch.Carbs[index]}
                            fat={mealData.lunch.Fat[index]}
                            serving={mealData.lunch.Serving[index]}
                          />
                          ))}
                          </ul>
                          <div className="breakfast-top">
                          <h1>Dinner</h1>
                          </div>
                          <ul className="food-display">
                          {mealData.dinner.Names.map((foodItem, index) => (
                          <FoodItem
                            key={index}
                            name={foodItem}
                            calories={mealData.dinner.Calories[index]}
                            protein={mealData.dinner.Protein[index]}
                            carbs={mealData.dinner.Carbs[index]}
                            fat={mealData.dinner.Fat[index]}
                            serving={mealData.dinner.Serving[index]}
                          />
                          ))}
                          </ul>
                        </div>
                        )}
            </div>
        </div>
    )
}

const FoodItem = ({ name, calories, protein, carbs, fat, serving }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li onClick={() => setIsExpanded(!isExpanded)}>
      <button className="food-display">{name}</button>
      {isExpanded && (
        <div>
          <p>Calories: {calories}</p>
          <p>Protein: {protein}g</p>
          <p>Carbs: {carbs}g</p>
          <p>Fat: {fat}g</p>
          <p>Serving Size: {serving}</p>
        </div>
      )}
    </li>
  );
};