export const initialState = {
  activeTab: "home",
};

export default function HomeScreenReducer(state, action) {
  switch (action.type) {
    case "SET_ACTIVE_TAB":
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
}
