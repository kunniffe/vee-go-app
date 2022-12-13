import { Link } from "react-router-dom";

import "./index.css";

const View = ({ data }) => {
  return (
    <ul className="Recipes__list">
      {data.map((recipe, index) => (
        <li key={index} className="Recipes__list__listItem">
          <Link to={`/recipes/${recipe.id}`}>
            <h3 className="Recipes__list__listItem__name">{recipe.name}</h3>
            <img src={`/images/${recipe.image}`} alt={recipe.name} className="Recipes__list__listItem__image" />
            <br />
            <p className="Recipes__list__listItem__desc">{recipe.description}</p>
            <br />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default View;