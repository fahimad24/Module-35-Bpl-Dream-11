import "./App.css";
import Navber from "./components/Navber";
import Hero from "./components/Hero";
import PlayerCards from "./components/player-cont/PlayerCards";
import { Suspense } from "react";

const players = async () => {
  const res = await fetch("/player-data.json");
  const data = await res.json();
  return data.players ?? [];
};

function App() {
  const playersPromise = players();
  return (
    <>
      <Navber />
      <Hero />
      <Suspense
        fallback={<div className="text-center py-20">Loading players...</div>}
      >
        <PlayerCards playersPromise={playersPromise} />
      </Suspense>
    </>
  );
}

export default App;
