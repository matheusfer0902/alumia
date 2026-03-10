import Image from "next/image";

interface PostData {
  title: string;
  category: string;
  author: string;
  sourceUrl: string;
  content: string;
  date: string;
}

interface DataProps {
  data: PostData[];
}

export default function MainPost({ data }: DataProps) {
  const latestPost = [...data]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  return (
    <div className="mt-14 cursor-pointer px-4 sm:px-6 md:px-0 container mx-auto">
      {latestPost && latestPost.sourceUrl && (
        <Image
          src={"/MainPost.svg"}
          //src={latestPost.sourceUrl}
          alt={latestPost.title}
          width={1240}
          height={350}
          style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          priority
        />
      )}
    </div>
  );
}
