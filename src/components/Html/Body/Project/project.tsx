import Image from "next/image";
import { motion } from "framer-motion";

const components: { index: number; title: string; image: string; href: string; progress: number; text: string; tech: string[]; }[] = [

    {
        index: 0,
        title: "Reconhecimento Facial",
        image: "/image/reconhecimento.jpg",
        href: "https://facial.taynan.dev",
        progress: 50,
        text: `Integração da API face-api.js, onde o sistema consegue identificar um rosto, sua expressão facial e realizar o comparativo de uma foto enviada com rosto detectado e informar se são compatíveis.`,
        tech: ['TypeScript', 'React', `Tailwind`, `Next`, `Prisma`, `Node`, `API`],
    },
    {
        index: 1,
        title: "Gerenciador Financeiro",
        image: "/image/todolist.jpg",
        href: "https://financial.taynan.dev",
        progress: 65,
        text: `Projeto visa facilitar a organização financeira do usuário, com funcionalidades de cadastro de despesas, levantamento do faturamento, planejamento de reservas financeiras entre outras funções.`,
        tech: ['React', 'TypeScript', `Tailwind`, `Prisma`, `Next`, `Node`],
    },
    {
        index: 2,
        title: "Calendário Eletrônico",
        image: "/image/calendario.jpg",
        href: "https://calendar.taynan.dev",
        progress: 25,
        text: 'Construção de um calendário eletrônico permitindo montar uma agenda de itens através de suas funcionalidades',
        tech: ['TypeScript', `Tailwind`, `API`, `Next`, `Prisma`, 'React', `Node`],
    }
]

function CardProject({ components }) {
    const listCard = components.map((component: any) => {
        return (
            <div key={component.index} className="p-6 mb-12 md:mb-0 lg:mb-0 border hover:z-40 rounded-xl lg:hover:scale-105 backdrop-blur-sm lg:hover:backdrop-blur-md shadow-lg lg:hover:backdrop-brightness-125 transition ease-in-out hover:-translate-y-1 duration-700">

                <a href={component.href}
                    target="_blank"
                    rel="noreferrer"
                    className=""
                >
                    <div className="lg:grid grid-cols-6">
                        <div className="flex flex-col items-center col-span-6">
                            <div className="">
                                <Image
                                    width="150"
                                    height="150"
                                    decoding="async"
                                    className="rounded-xl"
                                    src={component.image}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-span-6 text-center">
                            <h1 className="font-bold text-lg pb-2 mt-4 text-gray-400">{component.title}<div className="w-full border-b border-gray-400 opacity-15 p-1"></div></h1>
                            <div className="flex flex-col text-sm sm:text-base p-2 mb-2">
                                <p className="text-gray-500 text-justify hyphens-auto">{component.text}</p>
                            </div>
                        </div>
                        <div className="col-span-6 text-gray-500 pt-4 lg:pt-0">
                            <p className="mb-3 text-center font-semibold text-gray-400">Tecnologias<div className="w-full border-b border-current opacity-15 p-1"></div></p>
                            <div className="flex gap-x-2 gap-y-2 py-4 flex-wrap mb-2">
                                {component.tech.map((attribute: string, index: number) => (
                                    <motion.span
                                        key={`tech-${index}`}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        exit={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <span key={`attribute-` + index} className="text-white bg-gray-600 border rounded-lg font-bold shadow-md p-4 text-sm py-1 px-3">{attribute}</span>
                                    </motion.span>
                                ))}
                            </div>
                            <h4 className="font-bold text-gray-500">Progresso de conclusão: <p className="inline-block text-gray-400">{component.progress}</p> %</h4>
                        </div>
                    </div>
                </a>
            </div >
        )
    })
    return listCard;
}

export default function Project() {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex justify-center text-xl font-poppins text-center pointer-events-none border-b border-gray-500 border-current mb-4">
                <h1>Projetos Pessoais</h1>
            </div>
            <div className="lg:grid gap-4 grid-cols-2">
                <CardProject components={components} />
            </div>
        </div>
    )
}
