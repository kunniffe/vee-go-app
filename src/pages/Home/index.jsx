import { Helmet } from "react-helmet";

import Layout from "../../components/Layout";
import Page from "../../components/Page";
import "./index.css";

function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>Home | Veego</title>
      </Helmet>
      <Page title="Home">
        <h1> Welcome to Veego</h1>
        <p>
          Welcome to the Veego Website! Here you can find lovely vegan receipes
          and even get the ingredients delivered straight to your door if you
          want. If you want to dine at a vegan resturant, you can use the
          location function, in order to find a vegan resturant near you.
        </p>
        <img
          className="Home__image"
          src="./images/homepage.jpg"
          alt="homepage"
        />
      </Page>
    </Layout>
  );
}

export default HomePage;
