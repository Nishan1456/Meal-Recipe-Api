import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState();
  const getInfo = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
      );
      const jsonData = await response.json();
      setInfo(jsonData.meals[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <>
      {info && (
        <div className="container main box">
          <div className="section-image">
            <img src={info.strMealThumb} alt="food" />
          </div>
          <div className="section-detail">
            <h1 className="title">Meal Details</h1>
            <button className="btn">{info.strMeal}</button>
            <h3 className="title1">Recipe Instruction</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MealInfo;
