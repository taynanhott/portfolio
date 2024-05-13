"use client"

import ParallaxText from '@/components/Resources/LabelAnimate/animate';

export function Footer() {
    return (
        <div className="relative mb-12 pointer-events-none">
            <ParallaxText baseVelocity={5}>CONHECIMENTOS ESTUDOS CONHECIMENTOS ESTUDOS</ParallaxText>
            <ParallaxText baseVelocity={-5}>EXPERIÊNCIAS PROJETOS EXPERIENCIAS PROJETOS</ParallaxText>
        </div>
    );
}