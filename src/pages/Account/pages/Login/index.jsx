import { Typography } from '@mui/material';
import { Helmet } from "react-helmet";

function AccountLoginPage() {
  return (
    <>
      <Helmet>
        <title>Login | Veego</title>
      </Helmet>
      <Typography>Hello, Login!</Typography>
    </>
  );
}

export default AccountLoginPage;