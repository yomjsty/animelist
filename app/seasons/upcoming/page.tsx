"use client"

import CardLists from "@/components/card-lists"
import Heading from "@/components/heading"
import Pagination from "@/components/pagination"
import { getDataResponse } from "@/lib/apiData"
import { useState, useEffect, useCallback } from "react"


const UpcomingSeasonPage = () => {
    const [page, setPage] = useState(1)
    const [seasonalAnime, setSeasonalAnime] = useState<{
        pagination: { last_visible_page: number }
    }>({ pagination: { last_visible_page: 0 } })

    const fetchData = useCallback(async () => {
        const data = await getDataResponse("seasons/upcoming", `page=${page}`)
        setSeasonalAnime(data)
    }, [page])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <main className="container mx-auto px-4 py-8 max-w-screen-xl space-y-6">
            <Heading title={`UPCOMING SEASON #${page}`} />
            <CardLists apiData={seasonalAnime} />
            <Pagination page={page} setPage={setPage} lastPage={seasonalAnime.pagination.last_visible_page} />
        </main>
    )
}

export default UpcomingSeasonPage