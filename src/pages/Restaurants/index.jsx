import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

import Card from "../../components/Card";
import Deck from "../../components/Deck";
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
                    <Deck>
                        {restaurants.map((restaurant, index) => (
                            <Card 
                                key={index}
                                title={restaurant.name}
                                subtitle={`${restaurant.location.town}, ${restaurant.location.county}`}
                                image={restaurant.image}
                            />
                        ))}
                    </Deck>
                </Page>
            </Layout>
        </>
    );
}

export default RestaurantsPage;