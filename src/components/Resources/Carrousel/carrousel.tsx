"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const components: { index: number; title: string; image: string; href: string }[] = [
    {
      index: 0,
      title: "Reconhecimento Facial",
      image: "/image/reconhecimento.jpg",
      href: "/reconhecimento",
    },
    {
      index: 1,
      title: "Calendário Eletrônico",
      image: "/image/calendario.jpg",
      href: "/calendario",
    },
    {
      index: 2,
      title: "Projeto de Todo List",
      image: "/image/todolist.jpg",
      href: "/todolist",
    },
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl"
      onMouseEnter={plugin.current.reset}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {components.map((component) => (
          <CarouselItem key={component.index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="min-h-64">
                <CardContent className="flex aspect-square items-center justify-center p-6 ">
                  <span className="text-center font-semibold">
                    <Link
                      href={component.href}
                      target="_self"
                    >
                      <Image
                        className="min-h-32 min-w-32"
                        src={component.image}
                        width={600}
                        height={600}
                        alt=""
                      />
                      <p className="bg-gray-900 rounded-bl-xl rounded-br-xl text-white  p-2">{component.title}</p>
                    </Link>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}