import { createContext, useContext } from "react";

export const DNAStateContext = createContext(null);

export function useDNAState() {
  const state = useContext(DNAStateContext);
  if (!state) {
    throw new Error("DNAStateContext를 찾을 수 없습니다.");
  }
  return state;
}
