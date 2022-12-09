import { Helmet } from "react-helmet";

function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>Error | Veego</title>
      </Helmet>
      <p>Error!</p>
    </>
  );
}

export default ErrorPage;