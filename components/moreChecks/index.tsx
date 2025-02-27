import Image from 'next/image';

const mockCheckagens = [
  {
    id: 1,
    tag: "Política",
    title: "Cícero Lucena diz que vai fazer um governo ecologicamente competente",
    image: "/Checagem1.svg",
  },
  {
    id: 2,
    tag: "Zap Notícias",
    title: "Y2K 25 anos depois: disseminação de informações de pânico",
    image: "/Checagem2.svg",
  },
  {
    id: 3,
    tag: "Meio Ambiente",
    title: "João Azevedo criará ponte que liga a ponte das três ruas com a ponte do altiplano",
    image: "/Checagem3.svg",
  },
  {
    id: 4,
    tag: "Meio Ambiente",
    title: "Mais uma checagem sobre um prédio da UFPB",
    image: "/Checagem4.svg",
  },
  {
    id: 5,
    tag: "Saúde",
    title: "Fatos exagerados sobre a capacidade de inventar títulos",
    image: "/Checagem5.svg",
  },
];

export default function MoreChecks() {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-6 font-light underline underline-offset-6">
          Mais Checagens
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mockCheckagens.map((item) => (
            <div key={item.id} className="overflow-hidden relative cursor-pointer">
              <div className="relative">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={300} 
                  height={200} 
                  className="w-full h-40 object-cover"
                />
              </div>
              <span className="bg-[#FFC31A] text-[#050505] text-lg font-bold my-4">
                {item.tag}
              </span>
              <div className="mt-2">
                <h3 className="text-lg font-medium cursor-pointer underline">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
