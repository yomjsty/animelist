import Link from "next/link";

const Heading = ({ title, linkHref }: { title: string, linkHref?: string }) => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-medium text-slate-900">{title}</h1>
            {linkHref && <Link href={linkHref} className="text-sm text-slate-500 hover:text-slate-700">View All</Link>}
        </div>
    )
}

export default Heading