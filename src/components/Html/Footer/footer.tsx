"use client"

import ParallaxText from '@/components/Resources/LabelAnimate/animate';

export function Footer() {
    return (
        <div className="relative mb-12 pointer-events-none mt-12 lg:mt-24">
            <ParallaxText baseVelocity={5}>ESTUDOS PROJETOS ESTUDOS PROJETOS</ParallaxText>
            <ParallaxText baseVelocity={-5}>EXPERIENCIAS PROFISSIONAIS EXPERIENCIAS PROFISSIONAIS</ParallaxText>
        </div>
    );
}