import Image from 'next/image'
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"
import Link from "next/link"

export default function Cards() {
    return (
        <div className="group cursor-pointer">
            <Link href={`/anime/`}>
                <div className="relative w-full overflow-hidden rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1" style={{ aspectRatio: '3 / 4' }}>
                    <Image
                        src={''}
                        alt={''}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority
                    />
                    <Badge className="absolute top-2 right-2 bg-yellow-500 text-white flex items-center gap-1">
                        <StarIcon className="size-3" />
                        N/A
                    </Badge>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent translate-y-6 transition-all duration-300 group-hover:translate-y-0" />
                    <div className="absolute bottom-0 inset-x-0 p-4 transition-all duration-300">
                        <div className="text-white">
                            <h2 className="font-medium line-clamp-2 translate-y-12 transition-all duration-300 group-hover:translate-y-0">Title</h2>
                            <p className="mt-1 text-sm text-gray-200 line-clamp-2 opacity-0 transition-all duration-300 group-hover:opacity-100">Sysnopsis</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

