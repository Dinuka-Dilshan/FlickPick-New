import { getMovieDetails } from "@/lib/scrape/getMovieDetails";

const Media = async ({ id }: { id: string }) => {
     const { videoUrls} = await getMovieDetails(id);
     
  return (
    <section>
      <h4 className="text-xl lg:text-2xl font-bold my-5">Trailer</h4>
      <video controls poster={videoUrls?.[0].thumbnail} className="w-full h-auto rounded-lg">
        <source src={videoUrls?.[0].url}  />
      </video>
    </section>
  );
};
export default Media;
