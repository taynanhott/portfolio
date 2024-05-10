"use client"

import { Title } from '@/components/Html/Body/Title/title';
import Presentation from '@/components/Html/Body/Presentation/presentation';
import { CarouselPlugin } from '@/components/Resources/Carrousel/carrousel';

export default function Home() {

  return (
    <div className="z-10 relative ml-5 mr-5">
      <Title />
      <Presentation />
      <div className="items-center">
        <div className="block mt-16 text-xl font-poppins text-center pointer-events-none">
          <p>Projetos Pessoais</p>
        </div>
        <div className="flex mt-5 ml-20 mr-20 justify-center">
          <CarouselPlugin />
        </div>
      </div>
    </div >
  );
}