import {
  Search,
  Shield,
  Star,
  MapPin,
  UserRound,
  Swords,
  ChevronRight,
  DollarSign,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// const categories = ["all", "batsman", "all-rounder", "bowler", "wicketkeeper"];

function formatPrice(value) {
  return `$${value.toLocaleString()}`;
}

function getCategoryLabel(category) {
  if (category === "wicketkeeper") return "Wicketkeeper";
  if (category === "all-rounder") return "All-Rounder";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

const PlayerCard = ({ player }) => {
  return (
    <Card className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        {/* Player Image */}
        <img
          src={player.image}
          alt={player.playerName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" // zoom effect on hover
        />

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        {/* Top badge (category) */}
        <div className="absolute top-3 left-3">
          <Badge className="bg-white text-black text-xs px-3 py-1 rounded-full shadow">
            {getCategoryLabel(player.playerCategory)}
          </Badge>
        </div>

        {/* Bottom info (name + country) */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="text-lg font-semibold leading-tight">
            {player.playerName}
          </h3>
          <p className="text-sm opacity-90">
            {player.countryFlag} {player.country}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-4 space-y-4">
        {/* Role description */}
        <p className="text-sm text-gray-600">{player.extraInformation.role}</p>

        {/* Playing style info */}
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-slate-100 px-2 py-1 rounded-full">
            🏏 {player.playingStyle.batting}
          </span>

          {/* Show bowling only if available */}
          {player.playingStyle.bowling !== "N/A" && (
            <span className="bg-slate-100 px-2 py-1 rounded-full">
              🎯 {player.playingStyle.bowling}
            </span>
          )}
        </div>

        {/* Strength highlight box */}
        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-xs text-gray-500 mb-1">Strength</p>
          <p className="text-sm text-gray-700">
            {player.extraInformation.strength}
          </p>
        </div>

        {/* Bottom section: price + button */}
        <div className="flex justify-between items-center pt-2">
          {/* Price display */}
          <span className="font-semibold flex items-center gap-1 text-slate-800">
            <DollarSign size={16} /> {formatPrice(player.price)}
          </span>

          {/* Action button */}
          <Button
            size="sm"
            className="rounded-full px-4 bg-slate-900 text-white hover:bg-slate-800"
          >
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
