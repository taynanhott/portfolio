import Image from "next/image";

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
            <div key={component.index} className={component.index != 0 ? `mt-10 p-4 border rounded-xl` : `p-4 border rounded-xl`}>

                <a href={component.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="lg:grid grid-cols-6 gap-4 md:gap-10">
                        <div className="flex flex-col items-center col-span-2">
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
                        <div className="col-span-4 pt-4 lg:pt-0">
                            <h1 className="font-bold">{component.title}</h1>
                            <div className="flex flex-col gap-2 text-sm sm:text-base text-left">
                                <h4 className="font-bold text-gray-500">Progresso de conclusão: {component.progress} %</h4>
                                <p className="text-gray-500 text-justify hyphens-auto">{component.text}</p>
                            </div>
                        </div>
                        <div className="col-span-6 pt-4 lg:pt-0">
                            <p className=" mb-3 text-center font-semibold">Técnologias<div className="w-full border-b border-current opacity-15 p-2"></div></p>
                            <div className="flex gap-x-2 gap-y-2 flex-wrap mb-2">
                                {component.tech.map((attribute: string, index: number) => (
                                    <span className="backdrop-blur-xl text-white bg-gray-600 border rounded-lg font-bold shadow-md p-4 text-sm py-1 px-3">{attribute}</span>
                                ))}
                            </div>
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
        <div className="max-w-3xl mx-auto ">
            <div className="flex justify-center text-xl font-poppins text-center pointer-events-none border-b border-gray-500 border-current">
                <h1>Projetos Pessoais</h1>
            </div>
            <div className="flex mt-8 flex-col items-center max-h-[36rem] overflow-y-auto  backdrop-blur-sm rounded-xl border shadow-lg p-6 " style={{ overflowY: 'auto', scrollbarWidth: 'thin' }}>
                <CardProject components={components} />
            </div>
        </div>
    )
}
