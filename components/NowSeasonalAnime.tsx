"use client"

import { useEffect, useState } from "react";
import Heading from "@/components/heading";
import CardLists from "@/components/card-lists";
import { getDataResponse } from "@/lib/apiData";
import { Loader2 } from "lucide-react";

export default function NowSeasonalAnime() {
    const [nowSeasonalAnime, setNowSeasonalAnime] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            getDataResponse("seasons/now", "limit=10").then(data => {
                setNowSeasonalAnime(data);
            });
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="space-y-6">
            <Heading title="CURRENT SEASONAL ANIME" linkHref="/seasons/now" />
            {nowSeasonalAnime ? (
                <CardLists apiData={nowSeasonalAnime} />
            ) : (
                <span className="text-center w-full flex justify-center items-center">
                    <Loader2 className="animate-spin" />
                </span>
            )}
        </section>
    );
} 