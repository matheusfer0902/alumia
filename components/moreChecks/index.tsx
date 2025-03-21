import Image from 'next/image';
import Link from 'next/link';

interface PostData {
  title: string;
  category: string;
  author: string;
  sourceUrl: string;
  content: string;
  date: string;
  slug: string;
}

interface MoreChecksProps {
  data: PostData[];
  isChecks: boolean;
}

export default function MoreChecks({ data, isChecks }: MoreChecksProps) {
  const sortedPosts = [...data]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, isChecks ? 10 : 5);

  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-0">
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl mb-6 font-light ${isChecks ? '' : 'underline underline-offset-6'}`}>
          {isChecks ? 'Últimas Checagens' : 'Mais Checagens'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {sortedPosts.map((item, index) => (
            <Link href={item.slug} key={index}>
              <div className="overflow-hidden relative cursor-pointer mb-6">
                <div className="relative">
                  <Image
                    src={item.sourceUrl}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <span className="bg-[#FFC31A] text-[#050505] text-base sm:text-lg font-bold mt-4 inline-block mb-2">
                  {item.category}
                </span>
                <div className="mt-2">
                  <h3 className="text-base sm:text-lg font-medium cursor-pointer underline">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
