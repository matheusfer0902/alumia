import React from 'react';
import Image from 'next/image';
import { getLatestPosts } from '@/app/lib/getLatestPosts';

const ChecagensColunm = async () => {
  const latestPosts = await getLatestPosts(10)

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-light mb-6">Últimas Checagens</h2>
      <div className="space-y-6">
        {latestPosts.map((item) => (
          <div key={item.id} className="flex items-center gap-4 cursor-pointer">
            <div className="flex-1">
              <h3 className="text-lg font-medium underline underline-offset-6">
                {item.title}
              </h3>
            </div>
            {item.featuredImage?.node?.sourceUrl ? (
              <div className="w-33 h-24 relative flex-shrink-0">
                <Image
                  src={item.featuredImage.node.sourceUrl}
                  alt={item.title}
                  width={110}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : null}
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