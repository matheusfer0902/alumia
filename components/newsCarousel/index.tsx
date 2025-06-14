import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Oswald, Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

const oswald = Oswald({ subsets: ["latin"], weight: "500" });


interface PostData {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  sourceUrl: string;
  content: string;
  date: string;
  excerpt: string;
}

interface DataProps {
  data: PostData[];
}


export default function NewsCarousel({ data }: DataProps) {
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // set inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`carousel-container overflow-visible mx-4 md:mx-0 mt-2 md:mt-5`}>
    <Swiper
      modules={[Navigation, Pagination, Autoplay, FreeMode]}
      navigation={!isMobile}
      pagination={!isMobile ? { clickable: true } : false}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      speed={700}
      loop
      slidesPerView={isMobile ? 1.05 : 1}
      freeMode={isMobile}
      spaceBetween={8}
      className={`h-[300px] md:h-[450px] rounded`}
      // centeredSlides={true}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} className="shrink-0 md:w-full h-full rounded overflow-hidden">
          <Link href={`/${item.slug}`} passHref className="block h-full w-full">
          <div className="flex flex-col-reverse md:flex-row h-full items-center md:items-start box-border bg-[url('/bgConteudo.svg')] bg-cover bg-no-repeat bg-fixed">
            {/* Texto à esquerda ocupando metade */}
            <div className="flex-1 flex flex-col md:justify-start h-full pt-0 md:pt-6 text-justify px-4 md:pl-12 md:pr-12 max-h-[140px] md:max-h-none">

            <div className={`${robotoCondensed.className} text-[1em] flex mt-2 mb-0 md:mb-2 text-lg md:text-xl font-bold text-black`}>
              <span className="alumia-span font-bold">{item.category ?? ''}</span>
              <span className="ml-auto">{new Date(item.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
              })}</span>
  
            </div>
              
              <h2
                className={`${oswald.className} line-clamp-3 md:line-clamp-none pb-5 md:pb-0 mt-auto md:mt-2 mb-auto md:mb-7 text-[1.2em] md:text-4xl font-bold underline`}
                >{item.title}
              </h2>

              <p
                className={`${robotoCondensed.className} max-h-0 md:max-h-[300px] md:line-clamp-7 text-[25px] leading-[1.2] text-[#333] font-bold`}
                >{item.excerpt}</p>
            </div>
            {/* Imagem à direita ocupando metade */}
            <div className="relative flex-1 w-full md:w-auto h-[100px] md:h-full z-0 overflow-hidden">
              <Image
                src={item.sourceUrl ?? '/institucional2.svg'}
                alt={item.title}
                fill
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                priority
              />
            </div>

          </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>

    <style jsx> {`

    .carousel-container :global(.swiper-pagination) {
      
      bottom: 10px;         /* Fica na parte de baixo */
      left: 0;              /* Alinha à esquerda do carrossel */
      width: 50% !important; /* Ocupa metade esquerda */
      display: flex !important;
      justify-content: center !important; /* Centraliza as bolinhas na horizontal dentro da metade */
      padding-left: 0 !important;
      margin: 0 auto;
      box-sizing: border-box;
      pointer-events: auto;
    }
    .carousel-container :global(.swiper-button-next),
    .carousel-container :global(.swiper-button-prev) {
    color: black; /* cor das setas */
    transition: opacity 0.3s ease;
    opacity: 0;
    }
    
    .carousel-container:hover :global(.swiper-button-next),
    .carousel-container:hover :global(.swiper-button-prev) {
    opacity: 1;
    }
    
    .carousel-container :global(.swiper-button-next::after),
    .carousel-container :global(.swiper-button-prev::after) {
    font-size: 28px;
    font-weight: bold;
    }

    .carousel-container :global(.swiper-pagination-bullet) {
    background: gray;       /* cor da bolinha normal */
    opacity: 0.7;
    }

    .carousel-container :global(.swiper-pagination-bullet-active) {
    background: black;    /* cor da bolinha ativa (selecionada) */
    opacity: 1;
    }

    

    `
    }</style>
    </div>
  );
}
