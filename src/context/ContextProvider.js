import { createContext, useContext, useReducer } from "react"
import reducer from "./reducer";

const initialState = {
    currentUser: null
}

const Context = createContext(initialState);

export const useValue =() =>{
    return useContext(Context);
}

const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  )
}

export default ContextProvider

// initial State Info
//create Context with tne state
//export a Hook to give accessiblity of the state  
//create  reducer fnc (other file) -> where the state changes
//return a provider 
    //wrape the Prop children
    //call useReducer with the -reducer - initstate -> retrive -state -dispatch 
    //assighn state  dispatch to Provider Value 