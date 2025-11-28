import { mutateDNA } from "../../reducers/dnaActions.js";
import { useDNA } from "../../hooks/useDNA.js";

function MutationButton() {
  const { state, dispatch } = useDNA();

  const onClick = () =>
    dispatch(mutateDNA(state.currentDate, 0.1));

  return (
    <button className="mutate" onClick={onClick}>
      돌연변이 💥
    </button>
  );
}

export default MutationButton;
