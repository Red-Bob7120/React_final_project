import DNAViewer from "../dna/DNAViewer.jsx";
import StatsPanel from "../dna/StatsPanel.jsx";
import MutationButton from "../mutation/MutationButton.jsx";

function RightPanel() {
  return (
    <div className="panel">
      <DNAViewer />
      <StatsPanel />
      <MutationButton />
    </div>
  );
}

export default RightPanel;
