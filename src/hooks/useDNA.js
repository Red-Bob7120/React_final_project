import { useDNAState } from "../context/DNAStateContext.jsx";
import { useDNADispatch } from "../context/DNADispatchContext.jsx";

export function useDNA() {
  return {
    state: useDNAState(),
    dispatch: useDNADispatch(),
  };
}
