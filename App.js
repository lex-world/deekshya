import React from "react";

/** @context api */ 
import UserDataLayer from "./Context/User";

/** @pages */
import Layout from "./Layout";

export default function App() {
  return (
    <UserDataLayer>
      <Layout/>
    </UserDataLayer>
  );
}
