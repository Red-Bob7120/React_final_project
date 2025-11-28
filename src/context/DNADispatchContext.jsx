import { createContext, useContext } from "react";

export const DNADispatchContext = createContext(null);

export function useDNADispatch() {
  const dispatch = useContext(DNADispatchContext);
  if (!dispatch) {
    throw new Error("DNADispatchContext를 찾을 수 없습니다.");
  }
  return dispatch;
}
