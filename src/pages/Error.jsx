import { Typography } from '@mui/material';
import { Helmet } from "react-helmet";

function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>Error | Veego</title>
      </Helmet>
      <Typography>Error!</Typography>
    </>
  );
}

export default ErrorPage;