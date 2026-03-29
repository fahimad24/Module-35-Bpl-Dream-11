import { Trash2 } from "lucide-react";

const SelectedPlayerCard = ({ player, onRemove }) => {
  return (
    <div className="flex gap-4 items-center p-4 bg-white rounded-lg shadow-md ">
      <div className=" w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
        <img src={player.image} alt={player.playerName} />
      </div>
      <div className="space-y-2.5 flex-1">
        <h2 className="text-xl font-bold">{player.playerName}</h2>
        <p className="text-gray-600/75">{player.playingStyle.batting}</p>
      </div>
      <div>
        <button
          className="text-red-500  px-3 py-1 rounded"
          onClick={() => onRemove(player)}
        >
          <Trash2></Trash2>
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
