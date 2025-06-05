import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imdbId: string;
  title: string;
  releaseYear: number;
  posterUrl: string;
  rank: number;
  rating: number;
  voteCount: number;
  rankChange: {
    changeDirection: "UP" | "DOWN" | "FLAT";
    difference: number;
  };
  changeDirection: "UP" | "DOWN" | "FLAT";
  difference: number;
  type: "Movie" | "TV";
};

const MovieCard = async ({
  posterUrl,
  rank,
  releaseYear,
  title,
  rating,
  changeDirection,
  difference,
  imdbId,
  type,
}: Props) => {
  return (
    <Link
      prefetch={false}
      href={`/${type === "Movie" ? "movies" : "tvs"}/${imdbId}`}
    >
      <Card className="border-0 overflow-hidden relative">
        <CardContent className="overflow-hidden ">
          {posterUrl ? (
            <Image
              src={posterUrl}
              alt={title}
              width={300}
              height={400}
              className="w-full h-full "
              style={{ aspectRatio: 2 / 3, objectFit: "cover" }}
            />
          ) : (
            <div
              className={`flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 `}
              style={{ aspectRatio: "2/3" }}
            >
              <div className="text-center px-4">
                <p className="text-gray-300 font-medium text-sm mb-1">
                  Image Not Available
                </p>
              </div>
            </div>
          )}
        </CardContent>
        <div className="absolute  top-2 left-2  flex justify-between items-center gap-1">
          <Badge
            variant="secondary"
            className="text-white  bg-black/70 backdrop-blur-sm"
          >
            #{rank}
          </Badge>
          {changeDirection !== "FLAT" && (
            <Badge
              variant="secondary"
              className={cn(
                changeDirection === "DOWN" ? "text-[red]" : "text-[green]",
                "bg-black/70 backdrop-blur-sm"
              )}
            >
              {changeDirection === "UP" ? (
                <TrendingUp strokeWidth={3} color="green" />
              ) : (
                <TrendingDown strokeWidth={3} color="red" />
              )}
              {difference}
            </Badge>
          )}
        </div>
        {rating && (
          <div className="absolute  bottom-2 right-2  flex justify-between items-center gap-1">
            <Badge
              variant="secondary"
              className="text-[yellow]  bg-black/70 backdrop-blur-sm"
            >
              {rating}/10
            </Badge>
          </div>
        )}
      </Card>
      <div className="flex items-center mt-1 justify-between">
        <div className="p-2  box-border">
          <p className="text-[#EFEFEF] font-medium text-xs">{title}</p>
          <p className="text-[#B3B3B3] font-medium text-xs">{releaseYear} </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
