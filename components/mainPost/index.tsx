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
    <div className="mt-14 cursor-pointer container mx-auto">
      {latestPost && latestPost.sourceUrl && (
        <Image
          //src={latestPost.sourceUrl}
          src={"/MainPost.svg"}
          alt={latestPost.title}
          layout="responsive"
          width={1240} 
          height={350} 
          objectFit="contain" 
          priority 
        />
      )}
    </div>
  );
}
