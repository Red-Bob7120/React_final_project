+23
-0

import { mutateDNA } from "../../reducers/dnaActions.js";
import { useDNA } from "../../hooks/useDNA.js";

function MutationButton() {
  const { state, dispatch } = useDNA();

  const onClick = () =>
    dispatch(mutateDNA(state.currentDate, 0.1));

  return (
    <div className="box mutation-card">
      <div>
        <h3>DNA 변이 시뮬레이션</h3>
        <p className="hint">확률적으로 변이를 적용해 오늘의 시퀀스를 새롭게 확인해보세요.</p>
      </div>
      <button className="mutate" onClick={onClick}>
        돌연변이 💥
      </button>
    </div>
  );
}

export default MutationButton;