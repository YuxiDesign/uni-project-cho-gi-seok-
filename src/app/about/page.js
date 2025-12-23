'use client';
import Image from "next/image";
import Link from "next/link";
import SimpleParallax from "simple-parallax-js";
import ChapterTextBlock from "@/components/ChapterTextBlock";
import { Parallax } from 'react-scroll-parallax';

export default function AboutPage() {
    return (
        <>
            {/* Hero Image and Page Title */}
            <section className="relative isolate overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image src="/images/about_cover.jpg" alt="About Cho Gi-Seok" fill priority className="object-cover" sizes="100vw" />
                </div>
                <div className="absolute inset-0 -z-10 bg-black/25" />

                <div className="mx-auto max-w-7xl px-4 min-h-[70vh] md:min-h-[60vh] grid content-end py-12 md:py-16 md:grid-cols-12">
                    <h1 className=" text-white font-regular text-3xl md:text-5xl  md:col-start-2 md:col-span-6 ">
                        ABOUT<br />CHO <br className="hidden md:block" />GI-SEOK </h1>
                    <p className=" text-white/90 mt-4 md:mt-0 text-base italic md:col-start-8 md:col-span-4 md:text-right self-end ">
                        A practice of photography, fashion, and coexistence.  </p>
                </div>
            </section>

            {/* Biography: Intro */}
            <section className="mx-4 md:px-8 py-10">
                <div className="mx-auto max-w-7xl grid grid-cols-5 md:grid-cols-12 gap-y-6">
                    <h2 className="font-averia text-sm text-center md:text-left text-gray-950 col-start-1 md:col-start-2 col-span-5 md:col-span-3"> Biography </h2>
                    <p className="text-lg text-center md:text-left md:text-xl leading-snug text-gray-900 col-start-1 col-span-5 md:col-start-5 md:col-span-7">
                        Cho Gi-Seok is a Seoul-based artist whose practice spans photography, fashion, and design. His work explores themes of coexistence, memory, and myth, creating images and projects that connect Korean cultural identity with a global audience.
                    </p>

                    <figure className="col-start-2 col-span-3 mt-25">
                        <div className="relative overflow-hidden aspect-[1/1]">
                            <Image src="/images/Cho_Profile.jpg" alt="Cho Gi-Seok portrait" fill className="object-cover" sizes="(min-width:768px) 25vw, 100vw" priority />
                        </div>
                    </figure>

                    <ChapterTextBlock className="col-start-2 col-span-4 md:col-start-7 md:col-span-4 mt-10 text-sm text-gray-950 leading-relaxed" subtitle="Early Career">
                        Cho Gi-Seok (b. 1992, Seoul, Republic of Korea) began his creative journey in graphic design. After enrolling at university to study the discipline, he chose to leave formal education and work directly as a designer for fashion brands.
                        <br /><br />
                        His scope soon expanded from set and art direction to photography. Feeling that directing alone did not allow him to express ideas with enough precision, he turned to the camera as a more direct tool to articulate his vision.
                        <br /><br />
                        Eventually, he founded his own fashion brand, KUSIKOHC (his name reversed), where he continues to serve as creative director. The brand has become a platform for experimentation, blurring boundaries between design, photography, and artistic direction.

                    </ ChapterTextBlock>
                </div>
            </section>

            {/* Biliography: Early works */}
            <section className="mx-4 md:px-8 py-10 border-b border-black/50">
                <Parallax speed={6}>
                    <div className="grid grid-cols-5 md:grid-cols-12 gap-4">
                        <p className=" col-start-1 md:col-start-2 col-span-2 italic text-slate-400 text-xs mb-1">Early Works</p>
                        <figure className="col-start-1 md:col-start-2 col-span-3 md:col-span-2">
                            <div className="group relative aspect-[4/5] overflow-hidden bg-slate-100">
                                <Image src="/images/about_earlywork1.jpg" alt="Early work 1" fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" sizes="(min-width: 768px) 25vw, 100vw" priority />
                            </div>
                        </figure>
                        <div className="col-start-4 col-span-2 block md:hidden"></div>

                        <figure className="col-span-2">
                            <div className="group relative aspect-[4/5] overflow-hidden bg-slate-100">
                                <Image src="/images/about_earlywork2.jpg" alt="Early work 2" fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" sizes="(min-width: 768px) 25vw, 40vw" />
                            </div>
                        </figure>

                        <div className="hidden md:block md:col-start-7 md:col-span-1"></div>

                        <figure className="col-span-3">
                            <div className="group relative aspect-[4/5] overflow-hidden bg-slate-100">
                                <Image src="/images/about_earlywork3.jpg" alt="Early work 3" fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" sizes="(min-width: 768px) 25vw, 40vw" />
                            </div>
                        </figure>

                        <figure className="col-span-3 md:col-span-2">
                            <div className="group relative aspect-[4/5] overflow-hidden bg-slate-100">
                                <Image src="/images/about_earlywork4.jpg" alt="Early work 4" fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" sizes="(min-width: 768px) 25vw, 100vw" />
                            </div>
                        </figure>

                    </div>
                </Parallax>
            </section>

            {/* Vision and Philosophy*/}
            <section className="mx-4 md:px-8 py-10">
                <div className="mx-auto max-w-7xl grid grid-cols-5 md:grid-cols-12 gap-y-6 gap-x-4">
                    <h2 className="font-averia text-sm text-center md:text-left text-gray-950 col-start-1 md:col-start-2 col-span-5 md:col-span-3"> Vision and Philosophy </h2>

                    <p className="mb-4 text-lg text-center md:text-left md:text-xl leading-snug text-gray-950 col-start-1 col-span-5 md:col-start-5 md:col-span-6">
                        Guided by coexistence, Cho uses photography, fashion, and art direction to build new visual mythologies that connect Korean identity with a global voice.
                    </p>

                    <p className="mb-4 text-sm text-left text-gray-950 col-start-2 col-span-4 md:col-start-5 md:col-span-3">
                        At the core of Cho Gi-Seok’s practice is the idea of coexistence — a belief that seemingly opposing forces can be held together in balance. His work brings together human and technological, modern and ancient, Eastern and Western, real and fantastical elements to create images that feel both timeless and immediate.
                    </p>
                    <p className="mb-4 text-sm text-left text-gray-950 col-start-1 col-span-4 md:col-start-8 md:col-span-3">
                        Rather than treating photography as simple documentation, Cho uses it as a way to build new visual mythologies. Each image is constructed with intention, blending memory, fragility, and surreal imagination. He seeks to capture not only what is seen but the cultural and emotional layers beneath it.
                    </p>

                    <div className="col-start-1 col-span-3 md:col-start-5 md:col-span-3 overflow-hidden">
                        <Image src="/images/about_vision1.jpg" alt="Image 1" width={600} height={800} className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105" />
                    </div>

                    <div className="col-start-2 col-span-4 md:col-start-8 md:col-span-5 overflow-hidden">
                        <Image src="/images/about_vision2.jpg" alt="Image 2" width={800} height={800} className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105" />
                    </div>

                    <div className="col-start-2 col-span-3 md:col-start-2 md:col-span-4 overflow-hidden">
                        <Image src="/images/about_vision3.jpg" alt="Image 3" width={600} height={800} className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105" />
                    </div>

                    <div className="col-start-1 col-span-4 md:col-start-7 md:col-span-4 flex flex-col justify-center space-y-6">
                        <p className="text-sm text-left text-gray-950">
                            His philosophy extends beyond photography into art direction and fashion. Whether behind the camera or designing for his brand KUSIKOHC, Cho approaches each medium as part of a larger language — one that challenges conventions of beauty, explores Korean identity, and resonates with a global audience.
                        </p>

                        <div>
                            <Link href="/photography" className="inline-block px-8 py-3 text-sm border border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors" >
                                Explore Works
                            </Link>
                        </div>
                    </div>

                </div>
            </section>


        </>
    );
}
