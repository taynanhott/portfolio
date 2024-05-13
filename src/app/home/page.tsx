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
      <section>
        <div className="items-center mt-12 md:mt-24 lg:mt-48">
          <div className="flex justify-center text-xl max-w-3xl mx-auto font-poppins text-center pointer-events-none border-b border-gray-500 border-current">
            <h1>Projetos Pessoais</h1>
          </div>
          <div className="flex mt-5 ml-20 mr-20 justify-center">
            <CarouselPlugin />
          </div>
        </div>
        <div className="max-w-3xl mx-auto flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row mt-12 md:mt-24 lg:mt-48">
          <div className="flex flex-col">
            <Experience />
          </div>
        </div>
      </section>
    </div>
  );
}