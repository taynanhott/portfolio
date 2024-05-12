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
        <div className="block mt-60 text-xl font-poppins text-center pointer-events-none">
          <p>Projetos Pessoais</p>
        </div>
        <div className="flex mt-5 ml-20 mr-20 mb-60 justify-center">
          <CarouselPlugin />
        </div>
      </div>
      <Experience />
    </div >
  );
}