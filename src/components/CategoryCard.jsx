
'use client';

import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ title, subtitle, text, image, link }) {
    return (
        <div className="group relative">
            <Link href={link}>
                <div className="relative w-full aspect-[3/4] overflow-hidden cursor-pointer">
                    <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm uppercase tracking-wide">View {title}</span>
                    </div>
                </div>
            </Link>

            <div className="mt-3">
                <p className="italic text-gray-400 text-xs mb-1">{subtitle}</p>
                <p className="text-sm text-gray-950">{text}</p>
            </div>
        </div>
    );
}
