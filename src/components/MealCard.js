import React from "react";
import { NavLink } from "react-router-dom";

const MealCard = ({ detail }) => {
  return (
    <div className="meal-card">
      <img className="custom-image" src={detail.strMealThumb} alt="food" />
      <h3 className="title">{detail.strMeal}</h3>
      <NavLink to={`/${detail.idMeal}`}>
        <button className="btn">Recipe</button>
      </NavLink>
    </div>
  );
};

export default MealCard;
