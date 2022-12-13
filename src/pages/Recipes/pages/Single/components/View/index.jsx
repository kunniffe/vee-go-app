import { Helmet } from "react-helmet";

import Button from "../../../../../../components/Button";
import "./index.css";

const Recipe = ({ data }) => {
  const addToWishlist = () => {
    console.log("Add to wishlist!");
  };

  return (
    <div className="Recipe">
      <Helmet>
        <title>{data.name} | Veego</title>
      </Helmet>
      
      <img
        className="Recipe__image"
        src={"/images/" + data.image}
        alt={data.name}
      />
      <p>
        <i>Course: {data.course}</i>
        <br />
        <b>Description</b> {data.description} <br />
        <b>Price: </b> ${data.price} <br />
        <br />
      </p>

      <Button onClick={addToWishlist}>
        Add To Wishlist
      </Button>
      <br />
      <br />

      <h3>Ingredients</h3>
      <ul>
        {data.ingredient.map((ingredient, index) => (
          <li key={index}>
            {ingredient.amount} {ingredient.unit} {ingredient.name}
          </li>
        ))}
      </ul>
      <br />

      <h3>Method:</h3>
      <ol>
        {data.step.map((step, index) => (
          <li key={index}>{step.description}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
