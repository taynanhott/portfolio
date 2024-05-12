"use client"

import { motion } from "framer-motion";

const Lista = ({ tecnologias }: { tecnologias: string[] }) => {

    let contador = 2;
  
    const listaJSX = tecnologias.map((elemento, indice) => {

      contador += 2;
      const duration = contador;
      const isLast = indice === tecnologias.length - 1;
  
      return (
        <motion.div
          className="inline-block pl-1 pointer-events-none text-[10px] md:text-base lg:text-base"
          key={elemento}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration }}
        >
          {elemento}
          {!isLast && " - "}
        </motion.div>
      );
    });
  
    return <div className="text-center">{listaJSX}</div>;
  };

const tecnologias: string[] = ["JavaScript", "PHP", "TypeScript", "React", "Tailwind", "Prisma", "Next"];

export const Title = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center max-w-3xl mx-auto border-b border-gray-500 pb-2 border-current">
                    <div className="text-4xl lg:text-6xl whitespace-nowrap font-poppins mb-2 pointer-events-none">Taynan Z. Hott</div>
                    <div className="font-poppins text-gray-500 font-bold pointer-events-none text-sm md:text-base lg:text-base">
                        Full Stack Developer</div>
                </div>
            </motion.div>

            <Lista tecnologias={tecnologias} />
        </>
    );
};