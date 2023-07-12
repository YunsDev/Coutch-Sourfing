import { createRoot } from "react-dom/client";
import App from "./App";
import ContextProvider from "./context/ContextProvider";

createRoot(document.getElementById("root")).render( // 1- Setup 3 getting the root-div and rendering inside it the App-Component _createRoot ?_
  <ContextProvider>   {/* 2- context x Providing the Context _Value :state and dispatch_ to all Component beniv?unter the App_C */}
    <App />
  </ContextProvider>
);
