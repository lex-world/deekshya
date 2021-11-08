export const UserInitialState = {
    authenticated: false
  };
  
  const UserReducer = (state, action) => {
    switch (action.type) {
    //   case "SET_ACTIVE_BAR":
    //     return {
    //       active: action.activeBar
    //     };
  
      default:
        return state;
    }
  };
  
  export default UserReducer;