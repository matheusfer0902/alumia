import MainPost from "@/components/mainPost";
import MoreChecks from "@/components/moreChecks/index"
import InstitucionalSec from "@/components/institucionalSec/index"
import FAQSection from "@/components/faq/index"

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
];

export default function Home() {
  return (
    <div>
      <MainPost/>
      <MoreChecks mockCheckagens={mockCheckagens} isChecks={false}/>
      <InstitucionalSec/>
      <FAQSection/>
    </div>
  );
}