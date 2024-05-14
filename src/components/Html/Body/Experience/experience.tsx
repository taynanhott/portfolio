"use client"

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
    icon?: string
    title: string
    office: string
    text: string
    datain: string
    dataout?: string
    tech?: string[]
}

const cards: Props[] = [
    {
        icon: "/image/sitcon.jpg",
        title: "Sitcon Tecnologia da Informação",
        office: `Analista de Desenvolvimento - Pleno`,
        text: ` Desenvolvimento FullStack para o sistema IConsorcio, realizando a criação de novos módulos, 
                integração de API’s ao sistema, execução de medidas corretivas e melhorias de
                desempenho para as aplicações existentes, junto ao
                gerenciamento do banco de dados, desenvolvimento de funcionalidades das aplicações AWS. Responsável pelo auxílio da
                equipe de suporte e desenvolvimento primário nas task’s repassadas pelos coordenadores de projetos`,
        datain: "novembro/2023",
        dataout: "maio/2024",
        tech: [`PHP`, `JavaScript`, `HTML`, `CSS`, `MySQL`, `GitHub`, `Bootstrap`, `Node.js`, `AWS`, `API Rest`],
    },
    {
        icon: "/image/sitcon.jpg",
        title: "Sitcon Tecnologia da Informação",
        office: `Analista de Desenvolvimento - Junior`,
        text: ` Desenvolvimento FullStack para o sistema IConsorcio, realizando a criação
                de novos módulos, execução de medidas corretivas e melhorias de desempenho para as aplicações
                existentes, junto ao gerenciamento do banco de dados.`,
        datain: "julho/2022",
        dataout: "outubro/2023",
        tech: [`PHP`, `JavaScript`, `HTML`, `CSS`, `MySQL`, `Bootstrap`, `API Rest`],
    },
    {
        icon: "/image/sitcon.jpg",
        title: "Sitcon Tecnologia da Informação",
        office: `Suporte Técnico`,
        text: ` Auxílio de operações dentro do sistema Iconsorcio, realizando orientação das regras
                aplicadas de negócio junto ao cliente, gerenciamento com banco de dados e correções das
                aplicações do sistema.`,
        datain: "fevereiro/2022",
        dataout: "julho/2022",
        tech: [`PHP`, `HTML`, `CSS`, `MySQL`],
    },
];

function Card({ cards }) {
    const listCard = cards.map((card: Props) => {
        return (
            <div key={card.title}>
                <motion.div
                    className="mb-12 backdrop-blur-sm rounded-xl border shadow-lg p-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="lg:grid grid-cols-[40px,1fr] gap-4 md:gap-10">
                        <div className="flex flex-col items-center gap-4">
                            <div className="rounded-full border border-gray-500">
                                <Image
                                    loading="lazy"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    data-nimg="1"
                                    className="rounded-full"
                                    src={card.icon}
                                    alt=""
                                />
                            </div>
                            <div className="h-full w-[1px] bg-gray-800">
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col gap-2 text-sm sm:text-base text-left">
                                <a href="https://www.linkedin.com/company/sitconsistemas/mycompany/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-500 hover:text-inherit transition-colors">@{card.title}</a>
                                <h4 className="font-bold pointer-events-none">{card.office}</h4>
                                <span className="text-gray-500 font-semibold pointer-events-none">{card.datain} até {card.dataout == undefined ? `atualmente` : card.dataout}</span>
                                <p className="text-gray-500 text-justify hyphens-auto pointer-events-none">{card.text}</p>
                            </div>
                            <p className=" mb-3 mt-6 font-semibold pointer-events-none">Competências<div className="w-full border-b border-current opacity-15 p-2"></div></p>
                            <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 pointer-events-none">
                                {card.tech.map((attribute: string, index: number) => (
                                    <motion.span
                                        key={`tech-${index}`}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        exit={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="border rounded-lg font-bold shadow-md p-4 text-sm py-1 px-3">{attribute}</span>
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div >
            </div >
        )
    })
    return listCard;
}

export default function Experience() {
    return (
        <>
            <div className="block text-xl font-poppins text-center pointer-events-none border-b border-gray-500 pb-2 border-current">
                <h1>Experiências Profissionais</h1>
            </div>

            <ul className="mt-5 text-center mx-auto items-center">
                <Card cards={cards} />
            </ul >
        </>
    )
}