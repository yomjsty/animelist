export default function VideoPlayer({ url }: { url: string }) {
    return (
        <iframe
            src={url}
            allowFullScreen
            className="aspect-video w-full"
            loading="lazy"
        />
    )
}