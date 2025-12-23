'use client';

import Image from "next/image";
import SmallPhotoCard from "@/components/SmallCard";
import Link from "next/link";
import { Parallax } from 'react-scroll-parallax';
import ChapterTextBlock from "@/components/ChapterTextBlock";
import CategoryCard from "@/components/CategoryCard";
import AwardsList from "@/components/AwardsList";


export default function Home() {
  const awards = [
    { year: 2023, text: "Semi-finalist, LVMH Prize for KUSIKOHC" },
    { year: 2022, text: "Solo exhibition “Coexistence”, Fotografiska New York." },
    { year: 2021, text: "Featured in Vogue and Kinfolk, international recognition for photography and fashion." },
    { year: 2020, text: "Named in British Journal of Photography’s “Ones to Watch”." },
    { year: 2019, text: "Recognized by World Photography Organisation as one of “The 11 photographers who will expand your creativity”." },
  ];

  return (
    <>
      {/* Background video */}
      <section className="relative min-h-[80vh] overflow-hidden mb-6">
        <video className="absolute inset-0 h-full w-full object-cover -z-10" autoPlay muted loop playsInline preload="metadata" poster="/images/bg-poster.png" aria-hidden="true"  >
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-black/30 -z-10" />

        <div className="absolute inset-0 z-10 grid items-center pt-20 px-6 md:px-12
                grid-cols-1 md:grid-cols-12 gap-6">

          {/* Left: Title */}
          <div className="md:col-span-6 text-white">
            <h1 className="hidden md:block text-4xl md:text-6xl font-regular">
              CHO <br /> GI-SEOK
            </h1>
          </div>

          {/* Right: Subtitle */}
          <div className="md:col-span-6 md:justify-self-end text-center md:text-right text-white">
            <p className="text-2xl font-bold italic mb-3">( 조기석 )</p>
            <p className="md:max-w-[40ch] text-base italic text-center md:text-right md:text-md opacity-90 leading-tight">
              Multidisciplinary artist redefining Korean identity through surreal photography and fashion.
            </p>
          </div>
        </div>
      </section>

      {/* Chapters Introduction */}
      <section className="px-4 md:px-8 py-10">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12">
          <div className="mb-3 md:col-start-2 md:col-span-1">
            <p className="text-sm font-averia text-center text-gray-950 md:text-left"> Chapters </p>
          </div>

          <div className="md:col-start-4 md:col-span-8">
            <p className="text-center md:text-left text-lg md:text-xl leading-snug text-gray-950">
              Cho’s work can be approached through three overarching chapters.  <br className="hidden md:block" />
              Rather than a linear story, these chapters provide entry points into the shifting sensibilities that shape his art.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter One: The Self */}
      <section className="border-y border-black/50 mb-10">
        <div className="mx-auto max-w-6xl px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-12 items-center gap-y-10" >
            <figure className="md:col-span-7">
              <div className="relative bg-neutral-100 overflow-hidden aspect-[3/4] md:aspect-[4/5]">
                <Image src="/images/home_1.jpg" alt="The Self" fill className="object-cover transition-transform duration-500 ease-in-out hover:scale-105" priority sizes="(min-width: 768px) 56vw, 100vw" />
              </div>
            </figure>

            <div className="hidden md:block md:col-span-1">
              <div className="h-[80%] mx-auto w-px bg-neutral-400/40" />
            </div>

            <div className="md:col-span-4 text-center md:text-center">
              <p className="text-regular italic text-gray-400 text-xs mb-1">( Chapter One )</p>
              <h2 className="font-averia text-3xl text-gray-950 mb-6">The Self</h2>

              <p className="mx-auto max-w-[50ch] text-sm text-gray-950 leading-relaxed">
                Cho's art begins with the self: not as a fixed identity, but as a shifting lens through which he reframes the world. His images echo his own search for belonging, transforming memory, culture, and body into visual myths. By grounding his work in self-reflection, he creates photographs that are deeply personal yet universally resonant. </p>
              <div className="mt-10">
                <Link href="/photography" className="inline-block px-8 py-3 text-sm border border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors" >
                  Explore Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Two: Surrealism */}
      <section className=" mb-12">
        <div className="grid grid-cols-5 md:grid-cols-12 text-left mx-4 mb-6">
          <div className="col-span-5 md:col-span-2 col-start-1 md:col-start-2">
            <p className=" text-regular italic text-gray-400 text-xs mb-1">( Chapter Two )</p>
            <h2 className="text-3xl font-averia text-gray-950">Surealism</h2>
          </div >

        </div>
        <Parallax speed={8}>
          <div className="grid grid-cols-5 md:grid-cols-12 mx-4 mb-10">
            <ChapterTextBlock className="col-span-4 md:col-span-4 col-start-2 md:col-start-6" subtitle="Dream Logic">
              Through Cho’s lens, reality bends toward the dreamlike. His images surface as fragments of imagination: familiar yet distant, echoing the strange logic of memory and fantasy entwined.
            </ChapterTextBlock>
          </div>
        </Parallax>

        <div className="mx-4 my-10">
          <Parallax speed={4}>
            <div className="grid grid-cols-5 md:grid-cols-12 gap-y-6">
              <figure className="col-start-1 col-span-3 md:col-start-4 md:col-span-3">
                <div className="relative overflow-hidden bg-neutral-100 aspect-[4/5]">
                  <Image src="/images/home_2.jpg" alt="Emotional Truths" fill className="object-cover transition-transform duration-500 ease-in-out hover:scale-105" sizes="(min-width: 768px) 25vw, 60vw" priority />
                </div>
              </figure>
              <ChapterTextBlock subtitle="Emotional Truths" className="col-start-2 col-span-4 md:col-start-9 md:col-span-3 self-center"  >
                For Cho, photography is less about documentation than revelation. His surreal frames uncover the hidden pulse beneath appearances: moments of fragility and strength that speak to emotional truths beyond realism.
              </ChapterTextBlock>
            </div>
          </Parallax>
        </div>

        <Parallax speed={6}>
          <div className="mx-4 grid grid-cols-5 md:grid-cols-12 my-12">
            <ChapterTextBlock subtitle="Everyday Alchemy" className="col-start-1 col-span-4 md:col-start-5 self-center"  >
              Cho transforms the ordinary into the uncanny. A piece of fabric, a fleeting gesture, a passing glance becomes a charged symbol. In his work, the mundane dissolves into myth, where distortion becomes a form of beauty.
            </ChapterTextBlock>
          </div>
        </Parallax>

      </section>

      {/* Chapter Three: Fragility */}
      <section className="my-10">
        <div className="h-[300px] md:h-[400px] overflow-hidden mx-4 mb-8">
          <img
            src="/images/home_3.jpg" alt="Cho Gi-Seok artwork" className="w-full h-full object-cover md:object-contain scale-110 md:scale-100 transition-all duration-500" />
        </div>
        <div className="grid grid-cols-5 md:grid-cols-12 text-left mx-4 mb-4">
          <div className="col-span-5 md:col-span-2 col-start-1 md:col-start-2">
            <p className=" text-regular italic text-gray-400 text-xs mb-1">( Chapter Three )</p>
            <h2 className="font-averia text-3xl text-gray-950">Fragility</h2>
          </div >
          <div className="col-span-3 md:col-span-4 col-start-3 md:col-start-6">
            <ChapterTextBlock className="col-span-4 md:col-span-5 col-start-2 md:col-start-6" subtitle="Fragement">
              His work finds beauty in the delicate and the imperfect, where tenderness becomes strength and vulnerability reveals its quiet power. In Cho’s lens, fragility is not something to be hidden but embraced as a reminder that the most fleeting moments often carry the deepest resonance.
            </ChapterTextBlock>
          </div>
        </div>
        <div className=" grid grid-flow-col auto-cols-[40%] mx-4 overflow-x-auto gap-4 snap-x snap-mandatory py-6">
          <SmallPhotoCard className="snap-start" text="(01)" src="/images/Fragility_1.png" alt="Hands" />
          <SmallPhotoCard className="snap-start" text="(02)" src="/images/Fragility_2.png" alt="Tree" />
          <SmallPhotoCard className="snap-start" text="(03)" src="/images/Fragility_3.png" alt="Portrait" />
          <SmallPhotoCard className="snap-start" text="(04)" src="/images/Fragility_4.png" alt="Portrait2" />
          <SmallPhotoCard className="snap-start" text="(05)" src="/images/Fragility_5.png" alt="Text" />
          <SmallPhotoCard className="snap-start" text="(06)" src="/images/Fragility_6.png" alt="Portrait3" />
        </div>
      </section>

      {/* Practice Introduction */}
      <section className="px-4 md:px-8 py-10 border-t border-1 border-black/50">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12">
          <div className="mb-3 md:col-start-2 md:col-span-1">
            <p className="text-sm font-averia text-center text-gray-950 md:text-left"> Practice </p>
          </div>

          <div className="md:col-start-4 md:col-span-8">
            <p className="text-center md:text-left text-lg md:text-xl leading-snug text-gray-950">
              Cho Gi-Seok’s practice moves between lived experience and visual translation. Through biography, lens work, and design he shapes his world. This site provides a view into his methods: how he sees, how he crafts, and how he dresses his ideas.
            </p>
          </div>
        </div>

        {/* Practice Categories */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 py-12">
          <CategoryCard title="About" subtitle="Vision" text="Cho’s background, influences, and philosophy form the backbone of his work. This is where identity and intention meet the visual." image="/images/home_category1.jpg" link="/about" />
          <CategoryCard title="Photography" subtitle="Photography" text="He treats photography not just as capturing but composing — selecting light, gesture, and memory to shape each frame." image="/images/home_category2.jpg" link="/photography" />
          <CategoryCard title="Fashion" subtitle="Fashion Practice" text="Fashion is a parallel canvas. Through garment, texture, and form, he extends his visual language beyond the still image." image="/images/home_category3.jpg" link="/fashion" />
        </section>
      </section>

      {/* Awards and Achievements Introduction */}
      <section className="px-4 md:px-8 py-10 ">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12">
          <div className="mb-3 md:col-start-2 md:col-span-1">
            <p className="text-sm font-averia text-center text-gray-950 md:text-left"> Achievements </p>
          </div>

          <div className="md:col-start-4 md:col-span-8">
            <p className="text-center md:text-left text-lg md:text-xl leading-snug text-gray-950">
              Cho has received international recognition across photography and fashion, marked by exhibitions, critical attention, and industry awards. His achievements highlight both creative innovation and cultural impact.
            </p>
          </div>
        </div>
      </section>
      <AwardsList items={awards} />
    </>
  );
}
