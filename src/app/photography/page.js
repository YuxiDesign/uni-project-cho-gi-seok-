'use client';
import Image from "next/image";
import Link from "next/link";
import ProjectPanel from '@/components/ProjectPanel';
import SmallPhotoCard from "@/components/SmallCard";
import ChapterTextBlock from "@/components/ChapterTextBlock";

const imgs = [
    { src: '/images/portfolio/coexistence1.jpg', alt: 'coexistence1' },
    { src: '/images/portfolio/coexistence2.jpg', alt: 'coexistence2' },
    { src: '/images/portfolio/coexistence3.jpg', alt: 'coexistence3' },
    { src: '/images/portfolio/coexistence4.jpg', alt: 'coexistence4' },
    { src: '/images/portfolio/coexistence5.jpg', alt: 'coexistence5' },
    { src: '/images/portfolio/coexistence6.jpg', alt: 'coexistence6' },
];

const imgs2 = [
    { src: '/images/portfolio/forlove1.jpg', alt: 'forlove1' },
    { src: '/images/portfolio/forlove2.jpg', alt: 'forlove2' },
    { src: '/images/portfolio/forlove3.jpg', alt: 'forlove3' },
    { src: '/images/portfolio/forlove4.jpg', alt: 'forlove4' },
    { src: '/images/portfolio/forlove5.jpg', alt: 'forlove5' },
    { src: '/images/portfolio/forlove6.jpg', alt: 'forlove6' },
];

const imgs3 = [
    { src: '/images/portfolio/notalone1.jpg', alt: 'notalone1' },
    { src: '/images/portfolio/notalone2.jpg', alt: 'notalone2' },
    { src: '/images/portfolio/notalone3.jpg', alt: 'notalone3' },
    { src: '/images/portfolio/notalone4.jpg', alt: 'notalone4' },
    { src: '/images/portfolio/notalone5.jpg', alt: 'notalone5' },
    { src: '/images/portfolio/notalone6.jpg', alt: 'notalone6' },
];

const imgs4 = [
    { src: '/images/portfolio/objectwork1.jpg', alt: 'objectwork1' },
    { src: '/images/portfolio/objectwork2.jpg', alt: 'objectwork2' },
    { src: '/images/portfolio/objectwork3.jpg', alt: 'objectwork3' },
    { src: '/images/portfolio/objectwork4.jpg', alt: 'objectwork4' },
    { src: '/images/portfolio/objectwork5.jpg', alt: 'objectwork5' },
    { src: '/images/portfolio/objectwork6.jpg', alt: 'objectwork6' },
];




export default function PhotographyPage() {
    return (
        <>
            {/* Hero Image and Page Title */}
            <section className="relative isolate overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image src="/images/photography_cover.png" alt="Cho Gi-Seok Photography" fill priority className="object-cover" sizes="100vw" />
                </div>
                <div className="absolute inset-0 -z-10 bg-black/25" />

                <div className="mx-auto max-w-7xl px-4 min-h-[70vh] md:min-h-[60vh] grid content-end py-12 md:py-16 md:grid-cols-12">
                    <h1 className=" text-white font-regular text-3xl md:text-5xl  md:col-start-2 md:col-span-6 ">
                        VISUAL<br />MYTHOLOGIES</h1>
                    <p className=" text-white/90 mt-4 md:mt-0 text-base italic md:col-start-8 md:col-span-4 md:text-right self-end ">
                        Selected works and projects from personal, editorial, and commissioned practice.  </p>
                </div>
            </section>

            {/* Portfolio: Intro */}
            <section className="mx-4 md:px-8 py-10">
                <div className="mx-auto max-w-7xl grid grid-cols-5 md:grid-cols-12 gap-y-6">
                    <h2 className="font-averia text-sm text-center md:text-left text-gray-950 col-start-1 md:col-start-2 col-span-5 md:col-span-3"> Portfolio </h2>
                    <p className="text-lg text-center md:text-left md:text-xl leading-snug text-gray-900 col-start-1 col-span-5 md:col-start-5 md:col-span-7">
                        Cho Gi-Seok’s photography is defined by carefully constructed images that balance surreal imagination with cultural memory. His portfolio spans personal explorations, editorial features, and commissioned work, all unified by a distinctive visual language that challenges conventional notions of beauty.
                    </p>
                </div>
            </section>

            {/* Featured Work: Flower Studies */}
            <section className="mx-4 md:px-8 py-10">
                <div className="mx-auto max-w-7xl grid grid-cols-5 md:grid-cols-12 gap-x-4 gap-y-6 items-start">
                    <div className="col-start-1 md:col-start-2 col-span-3">
                        <p className="text-regular italic text-gray-400 text-xs mb-1">Featured</p>
                        <h2 className="text-3xl font-averia text-gray-950">Flower Studies</h2>
                    </div>

                    <div className="col-start-2 col-span-4 md:col-start-3 md:col-span-3 md:mt-10">
                        <ChapterTextBlock className="" subtitle="(2019 - 2023)">
                            Flower Study is a series where Cho Gi-Seok explores the coexistence of humans and nature. Presented through striking diptychs and sculptural portraits, the works draw visual parallels between floral forms and the human body, emphasizing beauty, fragility, and resilience.
                            <br /><br />
                            Collaborating with hair designer Hyunwoo Lee, Cho transforms models into fantastical figures whose hair and poses echo the structure of blossoms. With vivid color and meticulous styling, the series reflects his broader vision of harmony between opposites and extends his ongoing interest in cultural identity and myth-making.
                        </ChapterTextBlock>
                    </div>


                    <div className="col-start-1 col-span-5 md:col-start-7 md:col-span-5">
                        <div className="w-full overflow-hidden bg-neutral-100">
                            <video className="w-full h-auto" autoPlay muted loop playsInline preload="metadata"  >
                                <source src="/videos/flower_studies.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>
            <div className=" grid grid-flow-col auto-cols-[40%] mx-4 overflow-x-auto gap-4 snap-x snap-mandatory py-6">
                <SmallPhotoCard className="snap-start" text="(01)" src="/images/flowerstudy1.jpg" alt="flowerstudy1" />
                <SmallPhotoCard className="snap-start" text="(02)" src="/images/flowerstudy2.jpg" alt="flowerstudy2" />
                <SmallPhotoCard className="snap-start" text="(03)" src="/images/flowerstudy3.jpg" alt="flowerstudy3" />
                <SmallPhotoCard className="snap-start" text="(04)" src="/images/flowerstudy4.jpg" alt="flowerstudy4" />
            </div>

            {/* Portfolio: Projects */}
            <ProjectPanel title="2024 – Coexistence" images={imgs} />
            <ProjectPanel title="2023 – For Love" images={imgs2} />
            <ProjectPanel title="2022 – Not Alone" images={imgs3} />
            <ProjectPanel title="2021 – Object Work" images={imgs4} />
        </>
    )
}