import Image from 'next/image';

const mockInstitucional = [
  {
    id: 1,
    title: "Conheça o Alumia Laboratório",
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Informação verificada: falsa. Quisque lobortis urna sed orci vehicula, vel gravida lorem tempus.",
    image: "/institucional1.svg",
  },
  {
    id: 2,
    title: "Como funcionam as nossas checagens",
    description: "Quisque lobortis urna sed orci vehicula, vel gravida lorem tempus. Nam sollicitudin mauris in elit consectetur, non laoreet sem tristique.",
    image: "/institucional2.svg",
  },
];

export default function InstitucionalSec() {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-light underline underline-offset-6">
          Institucional
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
                <a href="#" className="text-sm font-bold text-[#050505] bg-[#FFC31A] inline-block mt-2">
                  Saiba mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
