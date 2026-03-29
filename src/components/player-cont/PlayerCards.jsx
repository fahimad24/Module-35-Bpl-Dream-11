import React, { useState, use } from "react";
import PlayerCard from "./PlayerCard";

const playersData = () => {
  return fetch("/player-data.json").then((res) => res.json());
};

const PlayerCards = () => {
  const [query, setQuery] = useState("");

  const players = use(playersData);

  //   const filtered = useMemo(() => {
  //     return players.filter((p) =>
  //       p.playerName.toLowerCase().includes(query.toLowerCase()),
  //     );
  //   }, [query]);
  return (
    <section>
      <div>
        <div className="flex items-center justify-between p-6 ">
          <h1>Available Players</h1>
          <div>
            <button>Available</button>
            <button>Selected 0</button>
          </div>
        </div>
        <div className="p-6 max-w-6xl mx-auto">
          <input
            className="border p-2 w-full mb-6"
            placeholder="Search player..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="grid md:grid-cols-3 gap-6">
            {players.map((p) => (
              <PlayerCard key={p.id} player={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerCards;
