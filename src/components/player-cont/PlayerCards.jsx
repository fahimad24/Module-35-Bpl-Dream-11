import { useState, use, useMemo } from "react";
import PlayerCard from "./PlayerCard";
import SelectedPlayer from "../selected-cont/SelectedPlayer";
import { toast, Bounce } from "react-toastify";

const PlayerCards = ({ playersPromise, claimFreeCoins, setClaimFreeCoins }) => {
  const [query, setQuery] = useState("");
  const [isSelected, setIsSelected] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  console.log("Selected Players:", selectedPlayers);

  const players = use(playersPromise);

  const filtered = useMemo(() => {
    const playerList = Array.isArray(players)
      ? players
      : (players?.players ?? []);
    const data = playerList.filter((p) =>
      p.playerName.toLowerCase().includes(query.toLowerCase()),
    );
    return data;
  }, [players, query]);

  const onRemove = (player) => {
    setSelectedPlayers((prev) => prev.filter((p) => p.id !== player.id));
    toast.success("Successfully removed!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setClaimFreeCoins((prev) => prev + player.price);
  };
  return (
    <section className="container mx-auto my-10">
      <div>
        <div className="flex items-center justify-between p-6 ">
          <h1>Available Players</h1>
          <div>
            <button
              onClick={() => setIsSelected("available")}
              className="bg-[#E7FE29] py-2 px-5 rounded-l-xl"
            >
              Available
            </button>
            <button
              onClick={() => setIsSelected("Selected")}
              className="bg-slate-300  py-2 px-5 rounded-r-xl text-black"
            >
              Selected {selectedPlayers.length}
            </button>
          </div>
        </div>
        <div className="p-6">
          <input
            className="border p-2 w-full mb-6"
            placeholder="Search player..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {isSelected === "available" && (
            <div className="grid md:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <PlayerCard
                  key={p.id}
                  player={p}
                  setSelectedPlayers={setSelectedPlayers}
                  selectedPlayers={selectedPlayers}
                  claimFreeCoins={claimFreeCoins}
                  setClaimFreeCoins={setClaimFreeCoins}
                />
              ))}
            </div>
          )}
          {isSelected === "Selected" &&
            (selectedPlayers.length === 0 ? (
              <p className="text-center text-gray-500">No players selected</p>
            ) : (
              <SelectedPlayer
                selectedPlayers={selectedPlayers}
                onRemove={onRemove}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default PlayerCards;
