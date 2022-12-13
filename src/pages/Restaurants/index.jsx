import { Helmet } from "react-helmet";

import Layout from "../../components/Layout";
import Page from "../../components/Page";

const RestaurantsPage = () => {
    return (
        <>
            <Helmet>
                <title>Restaurants | Veego</title>
            </Helmet>
            <Layout>
                <Page title="Restaurants">
                    <p>Hello, Restaurants!</p>
                </Page>
            </Layout>
        </>
    );
}

export default RestaurantsPage;