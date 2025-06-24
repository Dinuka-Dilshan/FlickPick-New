import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Movie } from "@/lib/scrape/getMovieDetails";
import { cn, FancyColorVariants } from "@/lib/utils";
import StatCard from "@/modules/movie-details/stat-card";
import TitleData from "@/modules/movie-details/title-data";
import { Check, Scroll, Star, TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";

const HeroSection = async ({ movie }: { movie: Movie }) => {
  const {
    title,
    posterUrl,
    plot,
    genres,
    meterRanking,
    ratings,
    voteCount,
    seasons,
    episodes,
  } = movie;

  return (
    <section className="flex flex-col lg:flex-row  gap-4 lg:gap-8 ">
      <div className="flex flex-col lg:hidden">
        <TitleData movie={movie} variant="mobile" />
      </div>
      {posterUrl ? (
        <div className="relative w-full lg:w-fit lg:h-[500] aspect-[2/3] rounded-xl self-start ">
          <Image
            priority
            src={posterUrl}
            alt={title ?? "Movie Poster"}
            fill
            className="absolute h-full w-full object-cover rounded-xl"
          />
        </div>
      ) : null}
      <div className="flex flex-col gap-4">
        <TitleData
          movie={movie}
          variant={"desktop"}
          className="hidden lg:block"
        />
        <div className="flex gap-2 ">
          <StatCard
            title={`#${meterRanking.currentRank}`}
            subtitle={
              <>
                {meterRanking.rankChange.changeDirection !== "FLAT" && (
                  <span
                    className={cn(
                      "font-bold",
                      "flex items-center gap-1.5 justify-center"
                    )}
                  >
                    {meterRanking.rankChange.changeDirection === "UP" ? (
                      <TrendingUp strokeWidth={2} size={15} />
                    ) : (
                      <TrendingDown strokeWidth={2} />
                    )}{" "}
                    {meterRanking.rankChange.difference}
                  </span>
                )}
              </>
            }
            color={
              meterRanking.rankChange.changeDirection === "UP"
                ? "green"
                : meterRanking.rankChange.changeDirection === "DOWN"
                ? "red"
                : "purple"
            }
            className="min-w-[80px]"
          />
          <StatCard
            className="min-w-[80px]"
            Icon={Star}
            title={ratings}
            subtitle={`${new Intl.NumberFormat("en-US", {
              notation: "compact",
            }).format(voteCount || 0)}`}
            color={"blue"}
          />
          {seasons ? (
            <StatCard
              className="min-w-[80px]"
              title={`${seasons}`}
              subtitle={"Seasons"}
              color={"teal"}
            />
          ) : null}
          {episodes ? (
            <StatCard
              className="min-w-[80px]"
              title={`${episodes}`}
              subtitle={"Episodes"}
              color={"yellow"}
            />
          ) : null}
        </div>
        <div className="flex gap-2 flex-wrap">
          {genres?.map((genre) => (
            <Badge
              className={cn(Object.values(FancyColorVariants.pink))}
              key={genre}
            >
              {genre}
            </Badge>
          ))}
        </div>
        <div className="flex flex-col gap-1.5 mt-3">
          <p className="font-semibold text-xl text-white">Synopsis</p>
          <p className="text-white text-lg">{plot}</p>
        </div>
        <div className="flex gap-3 mt-1.5">
          <Button size="lg" variant="outline">
            <Check /> Watched
          </Button>
          <Button size="lg" variant="outline">
            <Scroll />
            Want to watch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
