import Link from 'next/link'
import { Home } from 'lucide-react'

const NotFound = () => {
    return (
        <main className="min-h-[80vh] flex items-center justify-center">
            <div className="text-center space-y-6 px-4">
                <h1 className="text-6xl font-bold text-slate-900">404</h1>
                <div className="space-y-2">
                    <h2 className="text-2xl font-medium text-slate-800">Page Not Found</h2>
                    <p className="text-slate-600 max-w-md">
                        Oops! Looks like you&apos;ve ventured into unknown territory.
                        The page you&apos;re looking for doesn&apos;t exist or might have been moved.
                    </p>
                </div>

                <div className="flex gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#1E293B] text-white hover:bg-[#1E293B]/90 transition-colors"
                    >
                        <Home size={18} />
                        Go Home
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default NotFound