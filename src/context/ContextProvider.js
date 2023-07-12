import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "./reducer";

const initialState = {
    currentUser: null,
    openLogin: false,
    loading: false,
    alert:{ open: false,severity:'info', message:''}
} // 1- context 1 the initialState -> struct of the state

const Context = createContext(initialState);  // 2- context 2 create the context and giving? it the state-structur 

export const useValue =() =>{ /* 3- context 3 creating a Hook for Access to the GLOBLE-STATE   */
    return useContext(Context);     
  }  /* 4- context 3.2 example-Retuned-Valu const  { state: { openLogin }, dispatch, } */

const ContextProvider = ({children}) => { /* 5- context 4 creating the Component _wrapper -> {children}_ for providing the state   */
    const [state, dispatch] = useReducer(reducer, initialState); /* 6- context 5 creting Goloble-state and Dispach-Fncs; useReducer takes the altering-Fnc und state-structure?   */
    useEffect(() => {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if(currentUser){
        dispatch({type:'UPDATE_USER', payload:currentUser })
      }
    },[]);
  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider> /* 7- context 6 Providing the Context and assigning it value */
  )
}

export default ContextProvider

// initial State Info
//create Context with tne state
//export a Hook to give accessiblity of the state  
//create  reducer fnc (other file) -> where the state changes
//return a provider 
    //wrape the Prop children
    //call useReducer with the (-reducer - initstate) -> retrive [-state -dispatch] 
    //assighn -state -dispatch to Provider Value 