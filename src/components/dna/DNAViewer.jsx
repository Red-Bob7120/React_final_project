import { useDNA } from "../../hooks/useDNA.js";
import { dnaColors } from "../../styles/dnaColors.js";

function DNAViewer() {
  const { state } = useDNA();
  const day = state.days.find((d) => d.date === state.currentDate);
  const seq = day ? day.dnaSequence : "";

  return (
    <div className="box">
      <h3>오늘의 DNA</h3>
      <div className="dna-bar">
        {seq.split("").map((b, i) => (
          <span key={i} className="base" style={{ background: dnaColors[b] }}>
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DNAViewer;
