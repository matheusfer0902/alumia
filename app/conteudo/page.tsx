import Image from "next/image";
import Article from "@/components/articleComp/index"

interface Checkagem {
  id: number;
  tag: string;
  title: string;
  image: string;
}

const mockCheckagens: Checkagem[] = [
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
];

export default function ArticlePage() {
  return (
    <Article
        title="Motorista de Uber malandro é real? Testando um título relativamente longo e mal pensado."
        subtitle="Fato aconteceu na realidade em Salvador, e esse texto é só um excerpt do texto completo."
        datePublished="18/01/2025, às 13h11"
        dateUpdated="19/01/2025, às 4h38"
        author="Fulano da Silva"
        source="El Cid Espanha"
    />
  );
}
