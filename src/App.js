import "./App.css";
import MealInfo from "./components/MealInfo";
import MealPage from "./Pages/MealPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MealPage />} />
      <Route path="/:mealid" element={<MealInfo />} />
    </Routes>
  );
}

export default App;
