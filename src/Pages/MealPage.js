import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

const Component = lazy(() => import("../components/MealCard"));

const MealPage = () => {
  const inputRef = useRef();
  const [data, setData] = useState();
  const searchMeal = async (food) => {
    try {
      if (food === "") {
        alert("It is empty");
        return;
      }
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
      let response = await fetch(url);
      if (!response.ok) {
        alert("404 not found!!!!");
      }
      let jsonData = await response.json();
      setData(jsonData.meals);
      if (data === null) {
        alert("Not Found!!!!");
      }
    } catch (error) {
      console.warn("error " + error);
    }
  };
  useEffect(() => {
    searchMeal("chicken");
  }, []);
  return (
    <div className="container section">
      <div className="search-bar">
        <input type="search" placeholder="Search.." ref={inputRef} />
        <button
          className="btn"
          onClick={() => searchMeal(inputRef.current.value)}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="container main ">
        <div className="recipe-container">
          <Suspense fallback={<div className="load">Loading....</div>}>
            {data &&
              data.map((item, index) => (
                <Component key={index} detail={item} />
              ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MealPage;
