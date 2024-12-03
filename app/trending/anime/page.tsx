"use client"

import CardLists from "@/components/card-lists"
import Heading from "@/components/heading"
import Pagination from "@/components/pagination"
import { getDataResponse } from "@/lib/apiData"
import { useState, useEffect, useCallback } from "react"


const TrendingAnimePage = () => {
    const [page, setPage] = useState(1)
    const [trendingAnime, setTrendingAnime] = useState<{
        pagination: { last_visible_page: number }
    }>({ pagination: { last_visible_page: 0 } })

    const fetchData = useCallback(async () => {
        const data = await getDataResponse("top/anime", `page=${page}`)
        setTrendingAnime(data)
    }, [page])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <main className="container mx-auto px-4 py-8 max-w-screen-xl space-y-6">
            <Heading title={`ALL TRENDING ANIME #${page}`} />
            <CardLists apiData={trendingAnime} />
            <Pagination page={page} setPage={setPage} lastPage={trendingAnime.pagination.last_visible_page} />
        </main>
    )
}

export default TrendingAnimePage