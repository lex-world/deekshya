import React from "react";
import ActiveTabReducer, { ActiveTabInitialState } from "./ActiveTabReducer";

export const ActiveTabDataLayerContext = React.createContext();

export default function ActiveTabDataLayer({ children }) {
  const [dataLayer, dispatch] = React.useReducer(
    ActiveTabReducer,
    ActiveTabInitialState
  );

  return (
    <ActiveTabDataLayerContext.Provider value={[dataLayer, dispatch]}>
      {children}
    </ActiveTabDataLayerContext.Provider>
  );
}

export const useActiveTabDataLayerValue = () =>
  React.useContext(ActiveTabDataLayerContext);
