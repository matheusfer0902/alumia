import React from 'react';
import Image from 'next/image';

interface Checkagem {
  id: number;
  title: string;
  image: string;
}

const mockCheckagens: Checkagem[] = [
  {
    id: 1,
    title: "Cicero Lucena diz que vai fazer um governo ecologicamente competente",
    image: "/Checagem1.svg",
  },
  {
    id: 2,
    title: "YZX 25 anos depois: disseminação de informações de pânico",
    image: "/Checagem2.svg",
  },
  {
    id: 3,
    title: "João Azevedo citará ponte que liga a ponte das três ruas com o norte do alinhado",
    image: "/Checagem3.svg",
  },
];

const ChecagensColunm = () => {
  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-light mb-6">Últimas Checagens</h2>
      <div className="space-y-6">
        {mockCheckagens.map((item) => (
          <div key={item.id} className="flex items-center gap-4 cursor-pointer">
            <div className="flex-1">
              <h3 className="text-lg font-medium underline underline-offset-6">
                {item.title}
              </h3>
            </div>

            <div className="w-33 h-24 relative flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                width={110}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <button className="bg-[#FFC31A] text-[#050505] font-bold">
          Mais Checagens
        </button>
      </div>
    </div>
  );
};

export default ChecagensColunm;