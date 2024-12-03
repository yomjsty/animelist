import CardLists from "@/components/card-lists";
import Heading from "@/components/heading";
import { getDataResponse } from "@/lib/apiData";

export default async function Home() {
  const trendingAnime = await getDataResponse("top/anime", "limit=10")

  return (
    <main className="container mx-auto px-4 py-8 max-w-screen-xl">
      <section className="space-y-6">
        <Heading title="TRENDING ANIME" linkHref="/trending/anime" />
        <CardLists apiData={trendingAnime} />
      </section>
    </main>
  );
}