import CardLists from "@/components/card-lists";
import Heading from "@/components/heading";
import { getDataResponse } from "@/lib/apiData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NowSeasonalAnime from "@/components/NowSeasonalAnime";
import UpcomingSeasonalAnime from "@/components/UpcomingSeasonalAnime";

export default async function Home() {
  const trendingAnime = await getDataResponse("top/anime", "limit=10")
  const recommendationsResponse = await getDataResponse("recommendations/anime", "limit=5")

  const shuffledRecommendations = recommendationsResponse?.data?.sort(() => Math.random() - 0.5);

  const recommendedAnime = {
    data: shuffledRecommendations?.map((item: any) => ({
      mal_id: item.entry[0].mal_id,
      title: item.entry[0].title,
      images: {
        webp: {
          image_url: item.entry[0].images.webp.image_url
        }
      },
      score: item.entry[0].score,
      synopsis: item.entry[0].synopsis
    })).slice(0, 5)
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-screen-xl space-y-8">
      <section className="space-y-6">
        <Heading title="TRENDING ANIME" linkHref="/trending/anime" />
        <CardLists apiData={trendingAnime} />
      </section>
      <section className="space-y-6">
        <Heading title="RECOMMENDED ANIME" />
        <CardLists apiData={recommendedAnime} />
      </section>
      <Tabs defaultValue="now">
        <TabsList>
          <TabsTrigger value="now">Current</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>
        <TabsContent value="now">
          <NowSeasonalAnime />
        </TabsContent>
        <TabsContent value="upcoming">
          <UpcomingSeasonalAnime />
        </TabsContent>
      </Tabs>
    </main>
  );
}