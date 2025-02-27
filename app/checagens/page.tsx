import Editorias from "@/components/editorias/index"
import Image from "next/image";
import MoreChecks from "@/components/moreChecks";

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
  {
    id: 6,
    tag: "Meio Ambiente",
    title: "Notícia diz que falésia do Cabo Branco vai durar para todo o sempre",
    image: "/Checagem6.svg",
  },
  {
    id: 7,
    tag: "Meio Ambiente",
    title: "Bar do Cuscuz diz que esgoto jogado em praia está dentro das 4 linhas da constituição pessoense",
    image: "/Checagem7.svg",
  },
  {
    id: 8,
    tag: "Política",
    title: "Marcelo Queiroga fala sobre nota Ideb",
    image: "/Checagem8.svg",
  },
  {
    id: 9,
    tag: "Política",
    title: "Queiroga finalmente acerta: programa Previe Brasil",
    image: "/Checagem9.svg",
  },
  {
    id: 10,
    tag: "Zap Notícias",
    title: "Lorem Ipsum Doloros est: Checagem de notícias inventadas para site.",
    image: "/Checagem10.svg",
  },
];


export default function Check() {
  return (
    <div>
      <div className="container mx-auto">
        <Editorias/>
        <div className="mt-16 cursor-pointer container mx-auto">
            <Image
                src="/MainPost.svg"
                alt="Noticia principal"
                width={1240} 
                height={350} 
                objectFit="contain"
            />
        </div>
        <MoreChecks mockCheckagens={mockCheckagens} isChecks={true}/>
      </div>
    </div>
  );
}