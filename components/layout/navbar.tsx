import Link from "next/link";
import InputSearch from "@/components/ui/search-input";

export default function Navbar() {
    return (
        <nav className="bg-[#1E293B]">
            <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between text-slate-100">
                <div className="">
                    <Link href="/" className="text-xl font-bold py-4">
                        OAL
                    </Link>
                </div>
                <div className="">
                </div>
                <div className="">
                    <InputSearch />
                </div>
            </div>
        </nav>
    )
}
