"use client"

import { useEffect, useState } from "react";
import Heading from "@/components/heading";
import CardLists from "@/components/card-lists";
import { getDataResponse } from "@/lib/apiData";
import { Loader2 } from "lucide-react";

export default function UpcomingSeasonalAnime() {
    const [upcomingSeasonalAnime, setUpcomingSeasonalAnime] = useState(null);

    useEffect(() => {
        getDataResponse("seasons/upcoming", "limit=10").then(data => {
            setUpcomingSeasonalAnime(data);
        });
    }, []);

    return (
        <section className="space-y-6">
            <Heading title="UPCOMING SEASONAL ANIME" linkHref="/seasons/upcoming" />
            {upcomingSeasonalAnime ? (
                <CardLists apiData={upcomingSeasonalAnime} />
            ) : (
                <span className="text-center w-full flex justify-center items-center">
                    <Loader2 className="animate-spin" />
                </span>
            )}
        </section>
    );
} 