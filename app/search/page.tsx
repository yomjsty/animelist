import CardLists from "@/components/card-lists"
import Heading from "@/components/heading"
import { getDataResponse } from "@/lib/apiData"

async function SearchPage({ searchParams }: { searchParams: Promise<{ q: string }> }) {
    const searchData = await getDataResponse("anime", `q=${(await searchParams).q}`)

    return (
        <main className="container mx-auto px-4 py-8 max-w-screen-xl">
            <section className="space-y-6">
                <Heading title={`Search results for "${(await searchParams).q}"`} />
                <CardLists apiData={searchData} />
            </section>
        </main>
    )
}

export default SearchPage