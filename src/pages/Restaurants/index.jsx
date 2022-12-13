import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

import Layout from "../../components/Layout";
import Page from "../../components/Page";

const RestaurantsPage = () => {
    const restaurants = useLoaderData();

    return (
        <>
            <Helmet>
                <title>Restaurants | Veego</title>
            </Helmet>
            <Layout>
                <Page title="Restaurants">
                    <ul className="Recipes__list">
                        {restaurants.map((recipe, index) => (
                            <li key={index} className="Recipes__list__listItem">
                                <img src={`/images/${recipe.image}`} alt={recipe.name} className="Recipes__list__listItem__image" />
                                <h3 className="Recipes__list__listItem__name">{recipe.name}</h3>
                                <p className="Recipes__list__listItem__desc">{`${recipe.location.town}, ${recipe.location.county}`}</p>
                            </li>
                        ))}
                    </ul>
                </Page>
            </Layout>
        </>
    );
}

export default RestaurantsPage;