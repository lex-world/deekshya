import React from "react";
import HomeScreenReducer, {initialState} from './HomeScreenReducer'

export const HomeScreenContext = React.createContext();

export default function HomeScreenContextData({children}) {
    const [dataLayer, dispatch] = React.useReducer(HomeScreenReducer, initialState);
  
    return (
      <HomeScreenContext.Provider value={[dataLayer, dispatch]}>
        {children}
      </HomeScreenContext.Provider>
    );
  }
  
  export const useHomeScreenContextDataValue = () => React.useContext(HomeScreenContext);
