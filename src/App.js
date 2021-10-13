import React, { useState } from "react";
import Bookings from "./components/Bookings";
import Meals from "./components/Meals";
import Error from "./components/Error";
import { isDateValid, getDateRange, getSortedMeals } from "./utils";
import CONSTANTS from "./constants";

const App = () => {
  const [hackers, setHackers] = useState([]);
  const [dateRange, updateDateRange] = useState([]);
  const [hackerMeal, setHackerMeal] = useState([]);
  const [errorMessages, updateErrorMessages] = useState([]);

  const handleOnChange = (values, type) => {
    if (type === CONSTANTS.HACKERS) {
      setHackers(values);
    } else if (type === CONSTANTS.DATES) {
      updateDateRange(values);
    }
  };

  const getMealsScheduled = () => {
    let meals = [];
    let err = [];
    if (dateRange.length) {
      for (let [hackerCount, hacker] of hackers.entries()) {
        const dateArray = dateRange[hackerCount].split("to");
        const isValidDate = isDateValid(dateArray);

        if (isValidDate) {
          const [startDate, endDate] = dateArray;
          const dateDifference = getDateRange(startDate, endDate);
          for (
            let hackerIndex = 0;
            hackerIndex <= dateDifference;
            hackerIndex++
          ) {
            meals.push({
              hacker: [hacker],
              date: dateRange[hackerCount].split("to")[hackerIndex]
                ? dateRange[hackerCount].split("to")[hackerIndex].trim()
                : "",
            });
          }
        } else {
          err.push(hacker);
        }
      }
    } else {
    }
    updateErrorMessages(err);
    meals = getSortedMeals(meals);
    generateMealRoutine(meals);
  };

  const generateMealRoutine = (meals) => {
    const hackerMeal = [];
    meals.forEach(function (item) {
      let existing = hackerMeal.filter(function (v, i) {
        return v.date === item.date;
      });
      if (existing.length) {
        let existingIndex = hackerMeal.indexOf(existing[0]);
        hackerMeal[existingIndex].hacker = hackerMeal[
          existingIndex
        ].hacker.concat(item.hacker);
      } else {
        hackerMeal.push(item);
      }
    });

    setHackerMeal(hackerMeal);
  };

  return (
    <div className="container-fluid">
      <center>
        <h2>Hacker Hostel</h2>
      </center>
      <div className="container">
        <Bookings
          handleOnChange={handleOnChange}
          getMealsScheduled={getMealsScheduled}
        ></Bookings>
        <Error errors={errorMessages}></Error>
        <Meals hackerMeal={hackerMeal}></Meals>
      </div>
    </div>
  );
};

export default App;
