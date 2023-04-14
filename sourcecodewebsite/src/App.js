import "./App.css";
import { createContext, useReducer } from "react";
import Router from './components/Router';
import { initialState, reducer } from "./Reducer/useReducer";
export const userContext = createContext();

function App() {

  
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
  
      <userContext.Provider value={{ state, dispatch }}>
       <Router />
      </userContext.Provider>
    </div>
  );
}

export default App;
