"use client"

import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

interface Props {
    title: string
    text: string
    datain: string
    dataout?: string
    tech?: string[]
}

const cards: Props[] = [
    {
        title: "Teste Label",
        text: "Teste text",
        datain: "00/00/0000",
        dataout: "00/00/0000",
        tech: [`teste`, `teste`, `teste`],
    },
    {
        title: "Teste Label",
        text: "Teste text",
        datain: "00/00/0000",
        dataout: "00/00/0000",
        tech: [`teste`, `teste`, `teste`],
    },
    {
        title: "Teste Label",
        text: "Teste text",
        datain: "00/00/0000",
        dataout: "00/00/0000",
        tech: [`teste`, `teste`, `teste`],
    },
];

function Card({ cards }) {
    const listCard = cards.map((card: any, indice: number) => {
        return (
            <div key={indice}>
                <motion.div
                    className="mb-12 backdrop-blur-sm rounded-xl border shadow-lg p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 2 }}
                >
                    <li>
                        <Label>{card.title}
                        </Label>
                        <p>{card.text}</p>
                    </li >
                </motion.div >
            </div >
        )
    })
    return listCard;
}

export default function Experience() {
    return (
        <ul className="max-w-3xl text-center mx-auto items-center">
            <Card cards={cards} />
        </ul >
    )
}