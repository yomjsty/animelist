import NotFound from "@/app/not-found"
import VideoPlayer from "@/components/videoplayer"
import { getDataResponse } from "@/lib/apiData"
import Image from "next/image"
import React from 'react'

const AnimeSinglePage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id
    const response = await getDataResponse(`anime/${id}`)
    const charactersResponse = await getDataResponse(`anime/${id}/characters`)

    if (!response?.data) {
        return <NotFound />
    }

    const data = response.data
    const characters = charactersResponse?.data ? charactersResponse.data.slice(0, 6) : []

    const imageUrl = data?.images?.webp?.image_url || '/placeholder.svg';
    const imageJpgUrl = data?.images?.jpg?.image_url || '/placeholder.svg';

    return (
        <div>
            <div className="relative h-[300px] overflow-hidden bg-gradient-to-b from-gray-900/90 to-gray-800/90">
                <div className="absolute inset-0">
                    <Image
                        src={imageUrl}
                        alt={data.title}
                        className="opacity-75 object-cover hover:opacity-90 transition-opacity duration-300"
                        fill
                        priority
                        quality={100}
                    />
                </div>
            </div>
            <div className="container mx-auto px-4 py-8 max-w-screen-xl">
                <div className="grid gap-8">
                    <div className="flex flex-col md:flex-row gap-6 -mt-48 lg:-mt-20 relative z-10">
                        <Image
                            src={imageJpgUrl}
                            alt={data.title}
                            width={200}
                            height={300}
                            className="rounded-lg border-4 border-white shadow-lg shrink-0 w-[100px] h-[150px] md:w-[200px] md:h-[300px]"
                            priority
                        />
                        <div className="flex flex-col justify-end gap-8 w-full">
                            <div className="flex flex-col">
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{data.title}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div className="lg:col-span-2 space-y-4">
                            <div className="space-y-8">
                                {data.trailer?.embed_url && (
                                    <div>
                                        <h2 className="text-xl font-medium mb-3">Trailer</h2>
                                        <VideoPlayer url={data.trailer.embed_url} />
                                    </div>
                                )}
                                <div>
                                    <h2 className="text-xl font-medium mb-3">Synopsis</h2>
                                    <div className="grid gap-4">
                                        <p className="text-sm text-gray-600 bg-[#FAFAFA] p-4">
                                            {data.synopsis}
                                        </p>
                                    </div>
                                </div>
                                {data.background && (
                                    <div key="background">
                                        <h2 className="text-xl font-medium mb-3">Background</h2>
                                        <div className="grid gap-4">
                                            <span className="text-sm text-muted-foreground bg-[#FAFAFA] p-4">
                                                {data.background}
                                            </span>
                                        </div>
                                    </div>
                                )}
                                <div>
                                    <h2 className="text-xl font-medium mb-4">Characters</h2>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {characters.map((data: any) => (
                                            <div key={data.character.mal_id} className="flex items-center justify-between gap-4 bg-[#FAFAFA]">
                                                <div className="flex">
                                                    <div className="h-20 w-16 bg-muted relative">
                                                        <Image
                                                            src={data.character.images?.jpg?.image_url || '/placeholder.jpg'}
                                                            alt={data.character.name || ''}
                                                            className="object-cover min-w-[64px]"
                                                            fill
                                                            sizes="(max-width: 768px) 64px, 64px"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col justify-between p-2">
                                                        <h3 className="text-xs lg:text-sm line-clamp-2" title={data.character.name}>
                                                            {data.character.name}
                                                        </h3>
                                                        <p className="text-xs text-muted-foreground">{data.role}</p>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="flex flex-col justify-between text-right p-2">
                                                        {data.voice_actors && data.voice_actors.length > 0 ? (
                                                            <>
                                                                <h3 className="text-xs lg:text-sm line-clamp-2" title={data.voice_actors[0].person.name}>
                                                                    {data.voice_actors[0].person.name}
                                                                </h3>
                                                                <p className="text-xs text-muted-foreground">
                                                                    {data.voice_actors[0].language}
                                                                </p>
                                                            </>
                                                        ) : (
                                                            <p className="text-xs text-muted-foreground">No voice actor data</p>
                                                        )}
                                                    </div>
                                                    <div className="h-20 w-16 bg-muted relative">
                                                        {data.voice_actors && data.voice_actors.length > 0 && (
                                                            <Image
                                                                src={data.voice_actors[0].person.images?.jpg?.image_url || '/placeholder.jpg'}
                                                                alt={data.voice_actors[0].person.name || ''}
                                                                className="object-cover min-w-[64px]"
                                                                fill
                                                                sizes="(max-width: 768px) 64px, 64px"
                                                                loading="lazy"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative space-y-6">
                            <div className="lg:sticky lg:top-4 rounded-lg border bg-[#FAFAFA] p-4">
                                <h2 className="text-xl font-medium mb-4">Information</h2>
                                <dl className="space-y-4 text-sm">
                                    <div>
                                        <dt className="">Format</dt>
                                        <dd className="text-muted-foreground">{data.type}</dd>
                                    </div>
                                    <div>
                                        <dt className="">Episodes</dt>
                                        <dd className="text-muted-foreground">{data.episodes}</dd>
                                    </div>
                                    <div>
                                        <dt className="">Duration</dt>
                                        <dd className="text-muted-foreground">{data.duration}</dd>
                                    </div>
                                    <div>
                                        <dt className="">Status</dt>
                                        <dd className="text-muted-foreground">{data.status}</dd>
                                    </div>
                                    <div>
                                        <dt className="">Aired</dt>
                                        <dd className="text-muted-foreground">{data.aired.string}</dd>
                                    </div>
                                    <div>
                                        <dt className="">Studios</dt>
                                        <dd className="text-muted-foreground">{data.studios.map((studio: any) => studio.name).join(', ')}</dd>
                                    </div>
                                    <div>
                                        <dt className="">Genres</dt>
                                        <dd className="text-muted-foreground">{data.genres.map((genre: any) => genre.name).join(', ')}</dd>
                                    </div>
                                    <div>
                                        <dt className="">Rating</dt>
                                        <dd className="text-muted-foreground">{data.rating}</dd>
                                    </div>
                                </dl>
                            </div>

                            <div className="rounded-lg border bg-[#FAFAFA] p-4">
                                <h2 className="text-xl font-medium mb-4">Statistics</h2>
                                <dl className="space-y-4 text-sm">
                                    <div>
                                        <dt className="">Score</dt>
                                        <dd className="text-muted-foreground">{data.score}</dd>
                                    </div>
                                    <div>
                                        <dt className="">Popularity</dt>
                                        <dd className="text-muted-foreground">{data.popularity}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AnimeSinglePage