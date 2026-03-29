import React, { useState, use, useMemo } from "react";
import PlayerCard from "./PlayerCard";

const PlayerCards = ({ playersPromise }) => {
  const [query, setQuery] = useState("");

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
  return (
    <section className="container mx-auto my-10">
      <div>
        <div className="flex items-center justify-between p-6 ">
          <h1>Available Players</h1>
          <div>
            <button>Available</button>
            <button>Selected 0</button>
          </div>
        </div>
        <div className="p-6">
          <input
            className="border p-2 w-full mb-6"
            placeholder="Search player..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <PlayerCard key={p.id} player={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerCards;
