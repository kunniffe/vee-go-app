import { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

const View = ({ data }) => {
  const [recipes, setRecipes] = useState(data);

  function handleFilterChange(event) {
    const option = event.target.value;

    // Filter only the recipes with option.
    if (option === "filter") {
      setRecipes(data);
    } else {
      const results = data.filter((recipe) => recipe.course === option);
      setRecipes(results);
    }
  }

  return (
    <>
      <select 
        name="Recipes__filter"
        className="Recipes__filter"
        onChange={handleFilterChange}
      >
        {["Filter", "Breakfast", "Lunch", "Dinner", "Dessert"].map((meal, index) => (
          <option key={index} value={meal.toLowerCase()}>{meal}</option>
        ))}
      </select>

      <ul className="Recipes__list">
        {recipes.map((recipe, index) => (
          <li key={index} className="Recipes__list__listItem">
            <Link to={`/recipes/${recipe.id}`}>
              <img src={`/images/${recipe.image}`} alt={recipe.name} className="Recipes__list__listItem__image" />
              <h3 className="Recipes__list__listItem__name">{recipe.name}</h3>
              <p className="Recipes__list__listItem__desc">{recipe.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default View;