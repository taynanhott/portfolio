"use client"

import Image from "next/image";
import { motion } from "framer-motion";

interface Tecnologia {
    src: string,
    href: string
}[];

interface IconProps {
    tecnologias: Tecnologia[];
}

const tecnologias: Tecnologia[] = [
    {
        href: "https://www.linkedin.com/in/taynan-hott/",
        src: "/image/logo/linkedin.png"
    },
    {
        href: "https://github.com/taynanhott",
        src: "/image/logo/github.png"
    },
    {
        href: "https://wa.me/+5531984145023",
        src: "/image/logo/whatsapp.png"
    },
];

function Icon({ tecnologias }: IconProps) {
    const listIcon = tecnologias.map((tecnologia, indice) => {
        return (
            <a
                key={indice}
                className="mr-2"
                href={tecnologia.href}
                target="_blank"
            >
                <Image
                    src={tecnologia.src}
                    width={30}
                    height={30}
                    alt=""
                />
            </a>
        );
    });
    return listIcon;
}

export default function Presentation() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 2 }}
        >
            <div className="max-w-3xl mx-auto backdrop-blur-sm rounded-xl border shadow-lg mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 p-6 items-center">
                <div className="flex justify-center">
                    <div className="mr-5 w-40 md:w-48 lg:w-96">
                        <Image
                            src="/image/fotoperfil.png"
                            width={500}
                            height={500}
                            alt=""
                        />
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <div className="text-xl md:text-3xl lg:text-5xl mb-5 font-poppins-bold pointer-events-none ">Deixe eu me apresentar:</div>
                    <div className="font-poppins text-gray-500 mb-5 pointer-events-none text-sm md:text-base lg:text-base">
                        Sou Analista de Desenvolvimento II, busco sempre aprimorar minhas habilidades e conhecimento em novas tecnologias. Sou comunicativo, dedicado e experiente em gestão e comunicação em grupo.
                    </div>
                    <div className="flex justify-center lg:justify-normal">
                        <Icon tecnologias={tecnologias} />
                    </div>
                </div>
            </div>
        </motion.div >
    )
}