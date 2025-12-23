'use client';
import Image from "next/image";
import ChapterTextBlock from "@/components/ChapterTextBlock";
import { Parallax } from 'react-scroll-parallax';
import ProjectPanel from '@/components/ProjectPanel';

const imgs = [
    { src: '/images/fashionlatest_1.png', alt: 'latest1' },
    { src: '/images/fashionlatest_2.png', alt: 'latest2' },
    { src: '/images/fashionlatest_3.png', alt: 'latest3' },
    { src: '/images/fashionlatest_4.png', alt: 'latest4' },
    { src: '/images/fashionlatest_5.png', alt: 'latest5' },
    { src: '/images/fashionlatest_6.png', alt: 'latest6' },
];

export default function FashionPage() {
    return (
        <>
            {/* Background video */}
            <section className="relative min-h-[80vh] overflow-hidden mb-6">
                <video className="absolute inset-0 h-full w-full object-cover -z-10" autoPlay muted loop playsInline preload="metadata" >
                    <source src="/videos/fashion_bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 -z-10" />

                <div className="absolute inset-0 z-10 grid pt-20 px-6 md:px-12 grid-cols-1 md:grid-cols-12">
                    <div className="col-span-1 md:col-span-12 mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 content-end py-12 md:py-16">
                        <h1 className="text-white font-regular text-3xl md:text-5xl md:col-start-2 md:col-span-6">
                            KUSIKOHC
                        </h1>
                        <p className="text-white/90 text-base italic md:col-start-8 md:col-span-4 md:text-right self-end">
                            A fashion label that translates his vision of coexistence into wearable form.
                        </p>
                    </div>
                </div>
            </section>

            {/* Fashion: Intro */}
            <section className="mx-4 md:px-8 py-10">
                <div className="mx-auto max-w-7xl grid grid-cols-5 md:grid-cols-12 gap-y-6">
                    <h2 className="font-averia text-sm text-center md:text-left text-gray-950 col-start-1 md:col-start-2 col-span-5 md:col-span-3"> Fashion </h2>
                    <p className="text-lg text-center md:text-left md:text-xl leading-snug text-gray-900 col-start-1 col-span-5 md:col-start-5 md:col-span-7">
                        KUSIKOHC is a fashion label that mirrors his broader artistic vision. Built on the philosophy of the Right to Fail, the brand embraces experimentation, risk, and the creative value of imperfection.
                    </p>
                </div>
            </section>

            {/* Fashion: Right to Fail */}
            <section className="mx-4 py-10 my-10 border-b border-black/50">
                <div className="mx-auto max-w-7xl grid grid-cols-5 md:grid-cols-12 gap-x-4 gap-y-6">
                    <p className="italic text-gray-400 text-xs col-start-1 col-span-3 md:col-start-1 md:col-span-3"> Autumn Winter 2022 </p>

                    <figure className="col-start-1 col-span-5 md:col-start-1 md:col-span-7 md:row-span-2">
                        <div className="w-full overflow-hidden">
                            <Image src="/images/fashion_1.jpg" alt="Right to Fail — portrait" width={1200} height={1600} className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-105" sizes="(min-width: 768px) 60vw, 100vw" priority />
                        </div>
                    </figure>

                    <div className=" col-start-2 col-span-4  md:col-start-9 md:col-span-4  md:grid md:grid-rows-[1fr_auto] md:h-full gap-y-6 " >
                        <div>
                            <ChapterTextBlock subtitle="Right to Fail" className="mb-10">
                                At the heart of KUSIKOHC is the philosophy of the Right to Fail. For Cho Gi-Seok, this is more than a motto; it is a framework for how creativity should operate. He believes that genuine innovation requires the freedom to experiment, to risk mistakes, and to embrace outcomes that are imperfect or unexpected. Failure, in this sense, is not an end but a necessary stage in the creative process.
                            </ChapterTextBlock>
                        </div>

                        <figure className="self-end">
                            <div className="w-full overflow-hidden">
                                <Image src="/images/fashion_2.jpg" alt="Right to Fail — object" width={1600} height={1000} className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-105" sizes="(min-width: 768px) 40vw, 100vw" />
                            </div>
                        </figure>
                    </div>
                </div>
            </section>

            {/* Design Language: Introduction */}
            <section className="mx-4 mb-10 md:px-8 py-10">
                <div className="mx-auto max-w-7xl grid grid-cols-5 md:grid-cols-12 gap-y-6">
                    <h2 className="font-averia text-sm text-center md:text-left text-gray-950 col-start-1 md:col-start-2 col-span-5 md:col-span-3">Design Language</h2>
                    <p className="text-lg text-center md:text-left md:text-xl leading-snug text-gray-900 col-start-1 col-span-5 md:col-start-5 md:col-span-7">
                        The brand’s collections play with contrasts: fragility and strength, tradition and futurism, raw textures and precise tailoring. Surreal motifs reflect Cho’s artistic interest in coexistence and myth-making.
                    </p>
                </div>
            </section>

            {/*Design Language: Images */}
            <section className="relative md:px-8 py-10">
                <div className=" pointer-events-none absolute inset-x-0 top-30 h-[880px]  md:top-16 md:h-[880px]  -z-10 bg-[url('/images/fashion_bg.png')] bg-cover bg-center bg-no-repeat " />

                <Parallax speed={-10}>
                    <div className="mx-4 max-w-7xl grid grid-cols-5 md:grid-cols-12 gap-y-6">
                        <figure className="col-start-2 col-span-3 md:col-start-8 md:col-span-3">
                            <Image src="/images/fashion_3.png" alt="fashion3" width={600} height={800} className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-105" />
                        </figure>
                        <figure className="col-start-2 col-span-3 md:col-start-8 md:col-span-3">
                            <Image src="/images/fashion_4.png" alt="fashion4" width={600} height={800} className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-105" />
                        </figure>
                        <figure className="col-start-2 col-span-3 md:col-start-8 md:col-span-3">
                            <Image src="/images/fashion_5.png" alt="fashion5" width={600} height={800} className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-105" />
                        </figure>
                    </div>
                </Parallax>
            </section>

            {/* Design Language: contents */}
            <section className="mx-4 mt-20 mb-10 grid grid-cols-5 md:grid-cols-12 gap-4 border-b border-black/50">
                <div className="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
                    <ChapterTextBlock subtitle="Contrasts and Construction" className="mb-10">
                        KUSIKOHC’s design language reflects Cho Gi-Seok’s vision of balancing opposites: fragility with strength, tradition with futurism, chaos with precision. Raw, unfinished details sit alongside meticulous tailoring, creating silhouettes that feel both experimental and intentional.
                    </ChapterTextBlock>
                </div>
                <div className="col-start-2 col-span-4 md:col-start-5 md:col-span-3">
                    <ChapterTextBlock subtitle="Motifs and Meaning" className="mb-10">
                        Recurring elements such as fragmentation, layering, and sculptural forms link the brand to Cho’s photographic practice. Pieces often reference burning, folding, or mythic symbols like wings and horns, turning garments into narrative objects that extend beyond clothing into identity and story.
                    </ChapterTextBlock>
                </div>
            </section>

            {/* Latest: Spring / Summer 2025 */}
            <section className="mx-4 md:px-8 py-10">
                <div className="mx-auto max-w-7xl grid grid-cols-5 md:grid-cols-12 gap-y-6">
                    <h2 className="font-averia text-sm text-center md:text-left text-gray-950 col-start-1 md:col-start-2 col-span-5 md:col-span-3"> Latest </h2>
                    <p className="text-lg text-center md:text-left md:text-xl leading-snug text-gray-900 col-start-1 col-span-5 md:col-start-5 md:col-span-7">
                        For Spring / Summer 2025, KUSIKOHC returns with a new Ready-to-Wear collection that pushes its visual language further into contrast and experimentation. The line features multi-rivet denim, burn-effect trousers, heroic biker faux-leather pieces, and blown-up origami hoodies, all grounded in Cho’s storytelling aesthetic.
                    </p>
                </div>
            </section>
            <ProjectPanel title="S / S 2025" images={imgs} />
            <div className="grid grid-cols-5 md:grid-cols-12">
                <div className="col-span-5 flex justify-center md:col-start-4 md:col-span-2 md:justify-start">
                    <a href="https://kusikohc.com/" target="_blank" rel="kusikohc website" className="inline-block px-8 py-3 text-sm border border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"  >
                        View More
                    </a>
                </div>
            </div>

        </>
    );
}