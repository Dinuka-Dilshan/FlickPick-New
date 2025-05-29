import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Item = {
  id: string;
  name: string;
  image?: string;
  subtitle?: string;
  variant: "Movie" | "TV" | "Person";
};

type Props = {
  items?: Item[];
  title?: string;
  imageVarient?: "rounded" | "square";
};

const AppCarousel = ({ items, title, imageVarient = "square" }: Props) => {
  return (
    <section>
      {title && <h2 className="text-xl lg:text-2xl font-bold my-5">{title}</h2>}
      <Carousel>
        <CarouselContent className="gap-10  lg:gap-12 xl:gap-18">
          {items?.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-1/8 2xl:basis-1/10"
            >
              <Link
                href={`/${
                  item.variant === "Movie"
                    ? "movies"
                    : item.variant === "TV"
                    ? "tvs"
                    : "people"
                }/${item.id}`}
              >
                <div
                  className={cn(
                    "flex justify-center flex-col gap-2 bg-card  p-2 rounded-lg box-border",
                    imageVarient === "rounded"
                      ? "w-[200px] h-[200px] items-center"
                      : "w-[200px] h-[320px] "
                  )}
                >
                  <div
                    className={cn(
                      "relative  overflow-hidden",
                      imageVarient === "rounded"
                        ? "rounded-full"
                        : "rounded-lg",
                      imageVarient === "rounded"
                        ? "w-[150px] h-[150px]"
                        : "w-[180px] h-[320px] "
                    )}
                  >
                    {item.image && (
                      <Image
                        priority
                        src={item.image}
                        alt={item.name}
                        layout="fill"
                        className="object-cover object-top"
                      />
                    )}
                  </div>
                  <div>
                    <p>{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default AppCarousel;
