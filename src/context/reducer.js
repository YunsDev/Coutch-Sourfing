
const reducer = (state, action) => { /* 1- context 7.1 creating the reducer the Fnc that manages the state; it takes state and Action*/
  switch (action.type) { /* 2- context 7.2  type _Action attribute_ is the alter condition */
    case "OPEN_LOGIN":
      return { ...state, openLogin: true };  /* 3- context 7.2 returning the new state; preveting Mutablity  */
    case "CLOSE_LOGIN":
      return { ...state, openLogin: false };
    case "START_LOADING":
      return { ...state, loading: true };
    case "END_LOADING":
      return { ...state, loading: false };
    case "UPDATE_USER":
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
      return { ...state, currentUser: action.payload }; /* 4- context 7.3 some changes need a payload   */
    case "UPDATE_ALERT":
      return { ...state, alert: action.payload };

    default:
      throw new Error("No matched action");
  }
};

export default reducer; /* 5- context 7.4 Exporting the reducer-Fnc _for the ContextProvider_ */
