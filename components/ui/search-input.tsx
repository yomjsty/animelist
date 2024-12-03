"use client"

import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function InputSearch() {
    const searchRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const handleSearch = () => {
        if (searchRef.current?.value) {
            router.push(`/search?q=${searchRef.current?.value}`)
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <div className="space-y-2">
            <div className="relative text-slate-800">
                <Input id="input-26"
                    className="peer pe-9 ps-9 bg-[#FAFAFA] text-sm"
                    placeholder="Search..."
                    ref={searchRef}
                    onKeyDown={handleKeyDown}
                />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <Search size={16} strokeWidth={2} />
                </div>
                <button
                    className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                    aria-label="Submit search"
                    onClick={handleSearch}
                >
                    <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}
