import { useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Helmet>
        <title>Error | Veego</title>
      </Helmet>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {error.statusText || error.message}
        </p>
      </div>
    </>
  );
}

export default ErrorPage;