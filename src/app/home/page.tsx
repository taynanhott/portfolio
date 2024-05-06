
import { CarouselPlugin } from '@/components/Resources/Carrousel/carrousel';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="z-10 relative ml-5 mr-5">
      <div className="text-center max-w-3xl mx-auto border-b border-gray-500 pb-2 border-current">
        <div className="text-4xl lg:text-6xl whitespace-nowrap font-poppins mb-2 pointer-events-none">Taynan Z. Hott</div>
        <div className="font-poppins text-gray-500 font-bold pointer-events-none">
          Full Stack Developer</div>
      </div>
      <div className="text-center font-bold pt-2 text-[12px] font-poppins pointer-events-none">JavaScript ● PHP ● TypeScript ● React ● Tailwind ● Prisma ● Next</div>
      <div className="max-w-3xl mx-auto border backdrop-blur-sm rounded-xl shadow-lg mt-16 grid grid-cols-1 lg:grid-cols-2 p-6 items-center">
        <div className="flex justify-center">
          <div className="mr-5">
            <Image
              src="/image/fotoiabw.png"
              width={300}
              height={300}
              alt=""
            />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <div className="text-5xl mb-5 font-poppins-bold pointer-events-none">Deixe eu me apresentar:</div>
          <div className="font-poppins text-gray-500 mb-5 pointer-events-none">
            Sou Analista de Desenvolvimento II, busco sempre aprimorar minhas habilidades e conhecimento em novas tecnologias. Sou comunicativo, dedicado e experiente em gestão e comunicação em grupo.
          </div>
          <div className="flex justify-center lg:justify-normal">
            <a
              className="mr-2"
              href="https://www.linkedin.com/in/taynan-hott/"
              target="_blank"
            >
              <Image
                src="/image/logo/linkedin.png"
                width={30}
                height={30}
                alt=""
              />
            </a>
            <a
              className="mr-2"
              href="https://github.com/taynanhott"
              target="_blank"
            >
              <Image
                src="/image/logo/github.png"
                width={30}
                height={30}
                className="filter invert-40 hover:invert-0"
                alt=""
              />
            </a>
            <a
              className="mr-2"
              href="https://wa.me/+5531984145023"
              target="_blank"
            >
              <Image
                src="/image/logo/whatsapp.png"
                width={30}
                height={30}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="items-center">
        <div className="block mt-16 text-xl font-poppins text-center pointer-events-none">
          <p>Projetos Pessoais</p>
        </div>
        <div className="flex mt-5 ml-20 mr-20 justify-center">
          <CarouselPlugin />
        </div>
      </div>
    </div >
  );
}