import React from "react";

/** @context api */
import UserDataLayer from "./Context/User/User";
import ActiveTabDataLayer from "./Context/ActiveTabs/ActiveTab";

/** @pages */
import Layout from "./Layout";

export default function App() {
  return (
    <UserDataLayer>
      <ActiveTabDataLayer>
        <Layout />
      </ActiveTabDataLayer>
    </UserDataLayer>
  );
}
