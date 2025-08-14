import Image from 'next/image';
import Link from 'next/link';

const mockInstitucional = [
  {
    id: 1,
    title: "Conheça o Alumia",
    description: "O Alumia é uma iniciativa de combate à desinformação sediada em João Pessoa, no Centro de Comunicação Turismo e Artes, da Universidade Federal da Paraíba.",
    image: "/institucional1.svg",
  },
  {
    id: 2,
    title: "Como funcionam as nossas checagens",
    description: "O processo de checagem é realizado em três etapas: Pré-checagem, Checagem e Pós-checagem.",
    image: "/institucional2.svg",
  },
];

export default function InstitucionalSec() {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-0">
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl mb-6 font-bold hover-dark`}>
          <Link href={`/institucional`}>
          <span>Institucional</span>
          </Link>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mockInstitucional.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div className="relative w-full h-56 sm:h-64 md:h-[250px] cursor-pointer">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-md"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl sm:text-2xl font-bold underline">{item.title}</h3>
                <p className="text-base sm:text-lg mt-2 text-[#050505]">{item.description}</p>
                <a href={item.id == 1 ? "/institucional" : "/metodologia"} className="text-sm font-bold text-[#050505] bg-[#FFC31A] inline-block mt-2 alumia-span">
                  <span>Saiba mais</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
