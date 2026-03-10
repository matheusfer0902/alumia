import React from 'react';
import Image from 'next/image';
import { getLatestPosts } from '@/app/lib/getLatestPosts';
import Link from 'next/link';

const postsCount = 5;

const ChecagensColunm = async () => {
  const latestPosts = await getLatestPosts(postsCount)

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold mb-6">Últimas Checagens</h2>
      <div className="space-y-6">
        {latestPosts.map((item) => (
          <Link key={item.id} href={`/${item.slug}`} className="flex items-center gap-4 cursor-pointer">
          
            <div className="flex-1">
              <h3 className="text-lg font-medium underline underline-offset-6">
                {item.title}
              </h3>
            </div>
            <div className="w-[150px] h-[100px] relative flex-shrink-0 rounded">
              <Image
                src={item.featuredImage?.node?.sourceUrl ?? '/institucional2.svg'}
                alt={item.title}
                fill
                className="w-full h-full object-cover rounded"
                style={{ objectFit: "cover" }}
              />
            </div>
          
          </Link>
        ))}
      </div>

      <div className="mt-6 text-right">
        <Link href={`/checagens`}>
        <button className="alumia-span font-bold">
          Mais Checagens
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ChecagensColunm;