import SelectedPlayerCard from "./SelectedPlayerCard";

const SelectedPlayer = ({ selectedPlayers, onRemove }) => {
  return (
    <div className="space-y-4">
      {selectedPlayers.map((player) => (
        <SelectedPlayerCard
          key={player.id}
          player={player}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default SelectedPlayer;
