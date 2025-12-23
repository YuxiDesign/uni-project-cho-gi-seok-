'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/photography", label: "Photography" },
    { href: "/fashion", label: "Fashion" },
];

export default function Nav() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 350);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={[
                "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-white/50",
                scrolled
                    ? "bg-white/50 backdrop-blur-lg text-gray-900 shadow-sm"
                    : "bg-transparent text-white"
            ].join(" ")}
        >
            <nav className="mx-auto max-w-5xl px-4">
                <div className="flex items-center justify-between py-3">
                    <Link href="/" className="text-lg font-semibold">CHO GI-SEOK</Link>

                    {/* Large Screen links */}
                    <div className="hidden md:flex gap-5 text-sm">
                        {links.map((l) => (
                            <Link key={l.href} href={l.href} className="opacity-70 hover:opacity-100">
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <button className="md:hidden inline-flex items-center justify-center p-2" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
                        <div className="space-y-1">
                            <span className={`block h-0.5 w-6 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                            <span className={`block h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
                            <span className={`block h-0.5 w-6 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
                        </div>
                    </button>
                </div>


                <div className={`md:hidden overflow-hidden transition-[max-height,opacity] ease-in-out duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <ul className={["flex flex-col gap-3 pb-3 pt-3 border-t text-sm", scrolled ? "border-black/20" : "border-white/50",].join(" ")}> {links.map((l) => (<li key={l.href}>
                        <Link href={l.href} className="block py-1" onClick={() => setOpen(false)}>
                            {l.label}
                        </Link>
                    </li>
                    ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}