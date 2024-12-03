import Image from 'next/image'
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"
import Link from "next/link"

const CardLists = (
    { apiData }: { apiData: any }) => {
    return (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
            {apiData.data?.map((anime: any) => {
                return (
                    <div className="group cursor-pointer" key={anime.mal_id}>
                        <Link href={`/anime/${anime.mal_id}`}>
                            <div className="relative w-full overflow-hidden rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1" style={{ aspectRatio: '3 / 4' }}>
                                <Image
                                    src={anime.images.webp.image_url}
                                    alt={anime.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    priority
                                />
                                {anime.score && (
                                    <Badge className="absolute top-2 right-2 bg-yellow-500 text-white flex items-center gap-1">
                                        {anime.score > 0 ? (
                                            <>
                                                <StarIcon className="size-3" />
                                                {anime.score}
                                            </>
                                        ) : (
                                            <span>N/A</span>
                                        )}
                                    </Badge>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent translate-y-6 transition-all duration-300 group-hover:translate-y-0" />
                                <div className="absolute bottom-0 inset-x-0 p-4 transition-all duration-300">
                                    {anime.synopsis ? (
                                        <div className="text-white">
                                            <h2 className="font-medium line-clamp-2 translate-y-12 transition-all duration-300 group-hover:translate-y-0">{anime.title}</h2>
                                            <p className="mt-1 text-sm text-gray-200 line-clamp-2 opacity-0 transition-all duration-300 group-hover:opacity-100">{anime.synopsis}</p>
                                        </div>
                                    ) : (
                                        <h2 className="text-white font-medium line-clamp-2">{anime.title}</h2>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default CardLists