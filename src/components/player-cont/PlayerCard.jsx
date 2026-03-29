import { DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast, Bounce } from "react-toastify";

function formatPrice(value) {
  return `$${value.toLocaleString()}`;
}

function getCategoryLabel(category) {
  if (category === "wicketkeeper") return "Wicketkeeper";
  if (category === "all-rounder") return "All-Rounder";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

const PlayerCard = ({
  player,
  setSelectedPlayers,
  selectedPlayers,
  claimFreeCoins,
  setClaimFreeCoins,
}) => {
  const handleSelectPlayer = (price) => {
    console.log("Selected player price:", price);
    if (claimFreeCoins < price) {
      toast.error("Not enough coins to select this player!", {
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
      return;
    }

    // Check if the player is already selected
    const isAlreadySelected = selectedPlayers.some((p) => p.id === player.id);
    if (isAlreadySelected) {
      toast.error("Player is already selected!", {
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
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    toast.success("Player added to selection!", {
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
    setClaimFreeCoins(claimFreeCoins - price);
  };

  return (
    <Card className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative h-120 p-0">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        {/* Player Image */}
        <img
          src={player.image}
          alt={player.playerName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" // zoom effect on hover
        />
      </div>

      {/* Top badge (category) */}
      <div className="absolute top-3 left-3">
        <Badge className="bg-[#E7FE29] text-black text-xs px-3 py-1 rounded-full shadow">
          {getCategoryLabel(player.playerCategory)}
        </Badge>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent -bottom-70 group-hover:bottom-0 transform transition-all duration-300" />
      {/* Content Section */}
      <CardContent className="absolute  -bottom-70 group-hover:bottom-0 z-10 w-full p-4 space-y-4 transform transition-all duration-500 delay-75">
        {/* Bottom info (name + country) */}
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold leading-tight text-white">
              {player.playerName}
            </h3>
            <p className="text-sm text-white/90 w-full">
              {player.countryFlag}{" "}
              <span className="ml-2">{player.country}</span>
            </p>
          </div>
          {/* Role description */}
          <p className="text-sm">
            <span className="bg-white/20 text-white px-2 py-1 rounded-full">
              {player.extraInformation.role}
            </span>
          </p>
        </div>

        {/* Playing style info */}
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-white/20 text-white px-2 py-1 rounded-full">
            🏏 {player.playingStyle.batting}
          </span>

          {/* Show bowling only if available */}
          {player.playingStyle.bowling !== "N/A" && (
            <span className="bg-white/20 text-white px-2 py-1 rounded-full">
              🎯 {player.playingStyle.bowling}
            </span>
          )}
        </div>

        {/* Strength highlight box */}
        <div className="bg-black/35 rounded-xl p-3 backdrop-blur-[2px] border border-white/15">
          <p className="text-xs text-white/70 mb-1">Strength</p>
          <p className="text-sm text-white/95">
            {player.extraInformation.strength}
          </p>
        </div>

        {/* Bottom section: price + button */}
        <div className="flex justify-between items-center pt-2">
          {/* Price display */}
          <span className="font-semibold flex items-center gap-1 text-white">
            <DollarSign size={16} /> {formatPrice(player.price)}
          </span>

          {/* Action button */}
          <Button
            size="sm"
            className="rounded-full px-4 bg-slate-900 text-white hover:bg-slate-800"
            onClick={() => handleSelectPlayer(player.price)}
          >
            Choose Player
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
