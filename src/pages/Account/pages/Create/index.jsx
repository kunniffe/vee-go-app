import { Typography } from '@mui/material';
import { Helmet } from "react-helmet";

function AccountCreatePage() {
  return (
    <>
      <Helmet>
        <title>Create an account | Veego</title>
      </Helmet>
      <Typography>Hello, Create!</Typography>
    </>
  );
}

export default AccountCreatePage;