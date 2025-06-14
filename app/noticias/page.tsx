'use client';

import Editorias from "@/components/editorias/index";
import Image from "next/image";
import MoreChecks from "@/components/moreChecks";
import useHandle from "../home/useHandle";

export default function Check() {
  const { postsData } = useHandle();

  const latestPost = [...postsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 md:px-0">
        <Editorias />

        <div className="mt-16 cursor-pointer">
          {/* <Image
            //src={latestPost.sourceUrl}
            src={"/MainPost.svg"}
            alt={latestPost.title}
            width={1240}
            height={350}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
            priority
          /> */}
        </div>

        <MoreChecks data={postsData} isChecks={true} />
      </div>
    </div>
  );
}