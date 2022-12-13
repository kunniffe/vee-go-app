import { Helmet } from "react-helmet";
import Page from "../../../../components/Page";

function AccountLoginPage() {
  return (
    <>
      <Helmet>
        <title>Login | Veego</title>
      </Helmet>
      <Page title="Login">
        <p>Hello, Login!</p>
      </Page>
    </>
  );
}

export default AccountLoginPage;