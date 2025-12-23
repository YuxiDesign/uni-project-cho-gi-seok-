'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProjectPanel({ title = '2024 – Coexistence', images = [], }) {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        if (openIndex === null) return; const onKey = (e) => e.key === 'Escape' && setOpenIndex(null);
        window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey)
    }, [openIndex]);


    const Tile = ({ idx, className = '' }) => {
        const img = images[idx];
        if (!img) return null;
        return (
            <button type="button" onClick={() => setOpenIndex(idx)} className={`group relative block aspect-[4/5] overflow-hidden ${className}`} aria-label={img.alt || `Open image ${idx + 1}`} >
                <Image src={img.src} alt={img.alt || ''} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" priority={idx === 0} />
            </button>
        );
    };

    return (
        <section className="px-4 md:px-8 py-10">
            <div className="mx-auto max-w-7xl grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-6">

                <h3 className="col-span-4 md:col-start-1 md:col-span-3 font-averia text-2xl text-gray-950"> {title} </h3>
                <div className="hidden md:block md:col-start-4 md:col-span-9 self-center h-px bg-gray-500" />

                <Tile idx={0} className="col-span-2 md:col-start-4 md:col-span-3" />
                <Tile idx={1} className="col-span-2 md:col-start-7 md:col-span-3" />
                <Tile idx={2} className="col-span-2 md:col-start-10 md:col-span-3" />

                <Tile idx={3} className="col-span-2 md:col-start-4 md:col-span-3" />
                <Tile idx={4} className="col-span-2 md:col-start-7 md:col-span-3" />
                <Tile idx={5} className="col-span-2 md:col-start-10 md:col-span-3" />
            </div>

            {openIndex !== null && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setOpenIndex(null)} role="dialog" aria-modal="true" >
                    <div className="relative w-full max-w-5xl aspect-[4/3]" onClick={(e) => e.stopPropagation()} >
                        <Image src={images[openIndex].src} alt={images[openIndex].alt || ''} fill sizes="100vw" className="object-contain" priority />
                        <button className="absolute top-3 right-3  px-3 py-1 text-sm text-white hover:bg-white hover:text-gray-950" onClick={() => setOpenIndex(null)}  >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}