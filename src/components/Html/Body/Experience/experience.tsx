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
        tech: [`PHP`, `JavaScript`, `HTML`, `CSS`, `MySQL`, `GIT`, `Bootstrap`, `Node.js`, `AWS`, `API Rest`],
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
    const listCard = cards.map((card: Props, indice: number) => {

        return (
            <div key={indice}>
                <motion.div
                    className="mb-12 backdrop-blur-sm rounded-xl border shadow-lg p-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 2 }}
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
                                <h4 className="">{card.office}</h4>
                                <span className="text-gray-500">{card.datain} até {card.dataout == undefined ? `atualmente` : card.dataout}</span>
                                <p className="text-gray-500 text-justify break-all">{card.text}</p>
                            </div>
                            <p className=" mb-3 mt-6 font-semibold">Competências<div className="w-full border-b border-current opacity-15 p-2"></div></p>
                            <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8">
                                {card.tech.map((attribute: string, index: number) => (
                                    <span key={index} className="border-gray-500 border bg-inherit text-sm py-1 px-3 rounded-lg">{attribute}</span>
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
            <div className="block mt-24 text-xl font-poppins text-center pointer-events-none">
                <h1>Experiências Profissionais</h1>
            </div>

            <ul className="max-w-3xl mt-5 text-center mx-auto items-center">
                <Card cards={cards} />
            </ul >
        </>
    )
}