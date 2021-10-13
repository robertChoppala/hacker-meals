import React from "react";
import { PropTypes } from "prop-types";

const Meals = ({ hackerMeal }) => {
  return (
    <div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
      <ol id="list">
        {hackerMeal.map((meal, i) => {
          return (
            <div key={i}>
              {meal.hacker.map((hack) => (
                <li className="morning" key={hack}>
                  Breakfast for {hack} on {meal.date}{" "}
                </li>
              ))}

              {meal.hacker.map((hack) => (
                <li className="afternoon" key={hack}>
                  Lunch for {hack} on {meal.date}{" "}
                </li>
              ))}

              {meal.hacker.map((hack) => (
                <li className="night" key={hack}>
                  Dinner for {hack} on {meal.date}{" "}
                </li>
              ))}
            </div>
          );
        })}
      </ol>
    </div>
  );
};

Meals.propTypes = {
  hackerMeal: PropTypes.array,
};

export default Meals;
