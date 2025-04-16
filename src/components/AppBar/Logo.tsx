import { Clapperboard } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-1">
      <Clapperboard
        color="#9333ea"
        size={25}
        strokeWidth={2.5}
        className="-rotate-6"
      />
      <p className="font-bold text-xl tracking-widest bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent">
        FlickPick
      </p>
    </div>
  );
};

export default Logo;
