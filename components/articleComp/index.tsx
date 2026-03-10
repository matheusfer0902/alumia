import Image from "next/image";
import { FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import TextComponent from "../textArticle";
// import VerificationComponent from "../conclusionArticle";
// import ImageComponent from "../infoDetails";
import ChecagemColunm from "../checagensColumn";

interface ArticleProps {
  content: string;
  featuredImageUrl: string;
  featuredImageCaption: string;
  altText: string;
  slug: string;
  title: string;
  subtitle: string;
  datePublished: string;
  dateUpdated: string;
  author: string;
  tags?: string;
}

export default function Article({
  content,
  featuredImageUrl,
  altText,
  featuredImageCaption,
  slug,
  title,
  // subtitle,
  datePublished,
  dateUpdated,
  // author,
  tags,
}: ArticleProps) {
  return (
    <div className="w-full bg-[#F5F5F5]">
      <div className="bg-[url('/bgConteudo.svg')] bg-cover bg-no-repeat bg-fixed max-h-[350px]">
        <div className="container mx-auto px-4 sm:px-6 md:px-0">
          <div className="p-6">
            <div className="text-sm text-[#050505] flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-2 sm:space-y-0">
              <span className="alumia-span font-bold w-fit">{tags}</span>
              <div className="flex flex-col sm:flex-row sm:space-x-8 text-sm">
                <span>Publicado em {datePublished}</span>
                <span>Atualizado em {dateUpdated}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">{title}</h1>
            {/* <p className="text-base sm:text-lg text-gray-700 mt-2">{subtitle}</p> */}
            <p className="text-sm mt-4 ">
              <span className="font-bold">{altText}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 sm:px-6 md:px-0 p-6 flex flex-col lg:flex-row gap-8">
        {/* Coluna principal */}
        <div className="lg:w-2/3 px-10 max-w-3xl mx-auto">
          <Image
            src={featuredImageUrl}
            alt="Notícia principal"
            width={520}
            height={175}
            style={{objectFit: "cover"}}
            className="w-full rounded overflow-hidden"
          />
          {featuredImageCaption && (
            <p className="text-sm text-gray-500 italic mt-2 text-center" dangerouslySetInnerHTML={{ __html: featuredImageCaption }} />
          )}
          <TextComponent content={content}/>
          {/* <VerificationComponent />
          <ImageComponent isTrue={true} />

          <div className="mt-8">
            <h3 className="text-xl font-bold">Links & Referências</h3>
            <ul className="mt-2 text-base sm:text-lg space-y-1">
              <li><a href="#" className="bg-[#FFC31A] text-black inline-block">Fonte da Secretaria de Estado</a></li>
              <li><a href="#" className="bg-[#FFC31A] text-black inline-block">Termos do Uber</a></li>
              <li><a href="#" className="bg-[#FFC31A] text-black inline-block">Juventude atualizada</a></li>
              <li><a href="#" className="bg-[#FFC31A] text-black inline-block">Alguma coisa de Salvador</a></li>
            </ul>
          </div> */}

              <div className="mt-6">
                <h3 className="text-lg font-bold">Compartilhe!</h3>
                <div className="flex space-x-4 mt-2">
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title)}%0A${encodeURIComponent(`https://alumialab.com.br/${slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer">
                  <FaWhatsapp className="text-black text-3xl sm:text-4xl cursor-pointer hover:opacity-80" />
                  </a>
                  <FaTwitter className="text-black text-3xl sm:text-4xl cursor-pointer hover:opacity-80" />
                  <FaFacebook className="text-black text-3xl sm:text-4xl cursor-pointer hover:opacity-80" />
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
