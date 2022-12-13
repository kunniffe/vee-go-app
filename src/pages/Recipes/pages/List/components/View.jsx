import { Link } from "react-router-dom";

const View = ({ data }) => (
    <ul>
      {data.map((recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
        </li>
      ))}
    </ul>
);

export default View;