import "./App.css";
import Navber from "./components/Navber";
import Hero from "./components/Hero";
import PlayerCards from "./components/player-cont/PlayerCards";
import Footer from "./components/Footer";
import { Suspense, useState } from "react";
import Subscribtion from "./components/subscribtion";

const players = async () => {
  const res = await fetch("/player-data.json");
  const data = await res.json();
  return data.players ?? [];
};

function App() {
  const playersPromise = players();
  const [claimFreeCoins, setClaimFreeCoins] = useState(0);

  return (
    <>
      <Navber claimFreeCoins={claimFreeCoins} />
      <Hero
        claimFreeCoins={claimFreeCoins}
        setClaimFreeCoins={setClaimFreeCoins}
      />
      <Suspense
        fallback={<div className="text-center py-20">Loading players...</div>}
      >
        <PlayerCards
          playersPromise={playersPromise}
          claimFreeCoins={claimFreeCoins}
          setClaimFreeCoins={setClaimFreeCoins}
        />
      </Suspense>
      <Subscribtion />
      <Footer />
    </>
  );
}

export default App;
