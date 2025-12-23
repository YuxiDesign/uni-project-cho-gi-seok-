import Link from "next/link";

const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/photography", label: "Photography" },
    { href: "/fashion", label: "Fashion" },
];

export default function Footer() {
    return (
        <footer className="mt-20 px-4 md:px-8 py-12 md:pt-14 md:pb-6 bg-[#f9f9f9]">
            <div className=" max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-12">
                <nav className="text-center md:text-left md:col-start-2 md:col-span-3">
                    <ul className="space-y-2">
                        {nav.map((i) => (
                            <li key={i.href}><Link href={i.href} className="text-sm text-gray-900 hover:underline" >{i.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="md:col-start-7 md:col-span-5 text-center md:text-left">
                    <h2 className="text-xl md:text-3xl leading-snug text-gray-950 font-averia">
                        “I want my images to live beyond beauty, to question, to linger.”
                    </h2>
                </div>
            </div>

            <div className="mx-auto mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-12 items-center">
                <div className="text-center md:text-left md:col-span-6">
                    <p className="text-xl md:text-2xl font-bold text-gray-950"> CHO GI-SEOK </p>
                </div>

                <div className="mt-4 md:mt-0 text-center md:text-right md:col-span-6 text-xs text-gray-600">
                    <p>© 2025 Cho Gi-Seok. All rights reserved.</p>
                    <p> Website design by @YuxiMiao </p>
                </div>
            </div>
        </footer>
    );
}
