import { React, useEffect } from 'react';
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

      const sendApiRequest = () => {
        axios.post('http://localhost:3000/api', requestData)
        .then(response => {
            const mealData = response.data;
            console.log(mealData);
            console.log(mealData.breakfast);
            console.log(mealData.breakfast.Calories);
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
                    <h1>Breakfast</h1>
                    <button onClick = {sendApiRequest}></button>
                </div>
                
            </div>
        </div>
    )
}