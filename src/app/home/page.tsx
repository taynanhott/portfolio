"use client"

import { Title } from '@/components/Html/Body/Title/title';
import Presentation from '@/components/Html/Body/Presentation/presentation';
import Experience from '@/components/Html/Body/Experience/experience';
import Project from '@/components/Html/Body/Project/project';
import ParallaxText from '@/components/Resources/LabelAnimate/animate';

export default function Home() {

  return (
    <div className="z-10 relative ml-5 mr-5">
      <Title />
      <Presentation />
      <section>
        <div className="items-center mt-12 md:mt-24 lg:mt-48">
          <Project />
        </div>
        <div className="relative pointer-events-none  mt-12 md:mt-24 lg:mt-48">
          <ParallaxText baseVelocity={-5}>ESTUDOS PROJETOS ESTUDOS PROJETOS</ParallaxText>
          <ParallaxText baseVelocity={5}>EXPERIENCIAS PROFISSIONAIS EXPERIENCIAS PROFISSIONAIS</ParallaxText>
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