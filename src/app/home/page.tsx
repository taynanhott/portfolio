"use client"

import { Title } from '@/components/Html/Body/Title/title';
import Presentation from '@/components/Html/Body/Presentation/presentation';
import { CarouselPlugin } from '@/components/Resources/Carrousel/carrousel';
import Experience from '@/components/Html/Body/Experience/experience';

export default function Home() {

  return (
    <div className="z-10 relative ml-5 mr-5">
      <Title />
      <Presentation />
      <div className="items-center">
        <div className="block mt-24 text-xl font-poppins text-center pointer-events-none">
          <h1>Projetos Pessoais</h1>
        </div>
        <div className="flex mt-5 ml-20 mr-20 justify-center">
          <CarouselPlugin />
        </div>
      </div>
      <section className="max-w-3xl mx-auto flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
        <div className="flex flex-col">
          <Experience />
        </div>
      </section>
    </div>
  );
}