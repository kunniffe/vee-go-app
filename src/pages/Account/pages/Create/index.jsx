import { Helmet } from "react-helmet";

import Page from "../../../../components/Page";

function AccountCreatePage() {
  return (
    <>
      <Helmet>
        <title>Create an account | Veego</title>
      </Helmet>
      <Page title="Create an account">
        <p>Hello, Create!</p>
      </Page>
    </>
  );
}

export default AccountCreatePage;