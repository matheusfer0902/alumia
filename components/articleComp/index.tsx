import Image from "next/image";
import { FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import TextComponent from "../textArticle";
import VerificationComponent from "../conclusionArticle";
import ImageComponent from "../infoDetails";
import ChecagemColunm from "../checagensColumn"; 

interface ArticleProps {
  title: string;
  subtitle: string;
  datePublished: string;
  dateUpdated: string;
  author: string;
  source: string;
}

export default function Article({
  title,
  subtitle,
  datePublished,
  dateUpdated,
  author,
  source,
}: ArticleProps) {
  return (
    <div className="w-full bg-[#F5F5F5]">
      <div className="bg-[url('/bgConteudo.svg')] bg-cover bg-no-repeat bg-fixed max-h-[350px]">
        <div className="container mx-auto">
          <div className="p-6">
            <div className="text-sm text-[#050505] flex items-center space-x-8">
              <span className="bg-[#FFC31A] font-bold">Zap Notícias</span>
              <div className="flex items-center space-x-8">
                <span>Publicado em {datePublished}</span>
                <span>Atualizado em {dateUpdated}</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold mt-4">{title}</h1>
            <p className="text-lg text-gray-700 mt-2">{subtitle}</p>
            <p className="text-sm mt-1">
              Por <a href="#" className="underline">{author}</a> da, <a href="#" className="underline">{source}</a>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <Image
            src="/imagemConteudo.svg"
            alt="Notícia principal"
            width={620}
            height={175}
            objectFit="contain"
            className="w-full h-auto"
          />
          <TextComponent />
          <VerificationComponent />
          <ImageComponent isTrue={true} />

          <div className="mt-8">
            <h3 className="text-xl font-bold">Links & Referências</h3>
            <ul className="mt-2 text-lg">
              <li><a href="#" className="bg-[#FFC31A] text-black">Fonte da Secretaria de Estado</a></li>
              <li><a href="#" className="bg-[#FFC31A] text-black">Termos do Uber</a></li>
              <li><a href="#" className="bg-[#FFC31A] text-black">Juventude atualizada</a></li>
              <li><a href="#" className="bg-[#FFC31A] text-black">Alguma coisa de Salvador</a></li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold">Compartilhe!</h3>
            <div className="flex space-x-4 mt-2">
              <FaWhatsapp className="text-black text-4xl cursor-pointer hover:opacity-80" />
              <FaTwitter className="text-black text-4xl cursor-pointer hover:opacity-80" />
              <FaFacebook className="text-black text-4xl cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          <ChecagemColunm />
        </div>
      </div>
    </div>
  );
}