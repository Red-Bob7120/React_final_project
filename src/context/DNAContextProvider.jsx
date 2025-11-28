import { useReducer } from "react";
import { DNAStateContext } from "./DNAStateContext.jsx";
import { DNADispatchContext } from "./DNADispatchContext.jsx";
import { initialState } from "../data/initialState.js";
import { dnaReducer } from "../reducers/dnaReducer.js";

function DNAContextProvider({ children }) {
  const [state, dispatch] = useReducer(dnaReducer, initialState);

  return (
    <DNAStateContext.Provider value={state}>
      <DNADispatchContext.Provider value={dispatch}>
        {children}
      </DNADispatchContext.Provider>
    </DNAStateContext.Provider>
  );
}

export default DNAContextProvider;
