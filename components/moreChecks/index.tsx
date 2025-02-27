import Image from 'next/image';

interface Checkagem {
  id: number;
  tag: string;
  title: string;
  image: string;
}

interface MoreChecksProps {
  mockCheckagens: Checkagem[];
  isChecks: boolean;
}

export default function MoreChecks({ mockCheckagens, isChecks }: MoreChecksProps) {
  return (
    <section className="w-full py-8 mb-12">
      <div className="container mx-auto">
        <h2 className={`text-4xl mb-6 font-light ${isChecks ? '' : 'underline underline-offset-6'}`}>
          {isChecks ? 'Últimas Checagens' : 'Mais Checagens'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {mockCheckagens.map((item) => (
            <div key={item.id} className="overflow-hidden relative cursor-pointer mb-6">
              <div className="relative">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={300} 
                  height={200} 
                  className="w-full h-40 object-cover"
                />
              </div>
              <span className="bg-[#FFC31A] text-[#050505] text-lg font-bold mt-4 mb-2">
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
