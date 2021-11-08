import React from "react";
import UserReducer, {
    UserInitialState,
} from "./UserReducer";

export const UserDataLayerContext = React.createContext();

export default function UserDataLayer({ children }) {
  const [dataLayer, dispatch] = React.useReducer(
    UserReducer,
    UserInitialState
  );

  return (
    <UserDataLayerContext.Provider value={[dataLayer, dispatch]}>
      {children}
    </UserDataLayerContext.Provider>
  );
}

export const useUserDataLayerValue = () =>
  React.useContext(UserDataLayerContext);