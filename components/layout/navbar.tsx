"use client"

import Link from "next/link";
import InputSearch from "@/components/ui/search-input";
import { useRouter } from 'next/navigation';
import confetti from "canvas-confetti";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSurpriseMeClick = () => {
        const randomAnimeId = Math.floor(Math.random() * 50000);
        router.push(`/anime/${randomAnimeId}`);
        const end = Date.now() + 3 * 1000;
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-[#1E293B]">
            <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between text-slate-100">
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-xl font-bold">
                        OAL
                    </Link>
                </div>

                <div className="hidden md:flex gap-4 items-center">
                    <Link href="/trending/anime" className="text-sm hover:underline underline-offset-4">
                        Trending
                    </Link>
                    <Link href="/seasons/upcoming" className="text-sm hover:underline underline-offset-4">
                        Upcoming
                    </Link>
                    <Link href="/seasons/now" className="text-sm hover:underline underline-offset-4">
                        Now
                    </Link>
                    <Button variant="secondary" onClick={handleSurpriseMeClick} className="text-sm">
                        Surprise Me
                    </Button>
                </div>

                <div className="flex items-center gap-4">
                    <InputSearch />
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden px-4 bg-[#1E293B] border-t border-slate-700 transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="flex flex-col gap-4 py-4 text-white">
                    <Link
                        href="/trending/anime"
                        className="text-sm hover:underline underline-offset-4"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Trending
                    </Link>
                    <Link
                        href="/seasons/upcoming"
                        className="text-sm hover:underline underline-offset-4"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Upcoming
                    </Link>
                    <Link
                        href="/seasons/now"
                        className="text-sm hover:underline underline-offset-4"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Now
                    </Link>
                    <Button variant="secondary" onClick={handleSurpriseMeClick} className="text-sm w-full">
                        Surprise Me
                    </Button>
                </div>
            </div>
        </nav>
    )
}
