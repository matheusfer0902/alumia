import { FaTwitter, FaFacebook, FaLinkedinIn, FaYoutube, FaPaperPlane, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#FFC31A] py-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-0 text-left">
          <p className="text-2xl font-medium">Siga o Alumia nas redes sociais:</p>

          <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 mt-4">
            <a href="https://www.instagram.com/alumia.laboratorio" className="text-black text-3xl sm:text-4xl cursor-pointer hover:opacity-80" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
            <a href="https://wa.me/5583987972930" className="text-black text-3xl sm:text-4xl cursor-pointer hover:opacity-80" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>

          {/* <p className="mt-6 text-2xl font-medium">Inscreva-se no nosso Newsletter:</p>
          <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2">
            <input
              type="email"
              placeholder="Insira seu e-mail"
              className="px-3 py-2 border border-black bg-transparent text-black placeholder-black text-lg focus:outline-none w-full sm:w-[300px] rounded"
            />
            <button className="bg-black text-white px-4 py-2 flex items-center justify-center hover:opacity-80 w-full sm:w-auto">
              <FaPaperPlane className="text-lg" />
            </button>
          </div> */}
        </div>
      </div>

      <div className="bg-black text-white py-8 ">
        <div className="container mx-auto px-4 sm:px-6 md:px-0 flex flex-col md:flex-row justify-between gap-8 text-left">
          <div className="flex-1 flex justify-start">
            <div>
              <h3 className="font-bold mb-2">Sobre o Alumia</h3>
              <ul className="space-y-1 text-lg">
                <Link href='/missao'><li><span className="hover:underline">Missão</span></li></Link>
                {/* <li><a href="#" className="hover:underline">Equipe</a></li>
                <li><a href="#" className="hover:underline">Política de privacidade</a></li> */}
              </ul>
            </div>
          </div>

          {/* <div>
            <h3 className="font-bold mb-2">Checagens</h3>
            <ul className="space-y-1 text-lg">
              <li><a href="#" className="hover:underline">Zap Notícias</a></li>
              <li><a href="#" className="hover:underline">Política</a></li>
              <li><a href="#" className="hover:underline">Saúde</a></li>
              <li><a href="#" className="hover:underline">Meio Ambiente</a></li>
            </ul>
          </div> */}
    
          <div className="flex-1 flex justify-start">
            <div className="ml-28">
              <Link href='https://linktr.ee/laboratorioalumia'><h3 className="font-bold mb-2">Contato</h3></Link>
              <ul className="space-y-1 text-lg">
                <li><a href="https://wa.me/5583987972930" target="_blank" className="hover:underline">
                  <span className="block">WhatsApp:</span>
                  <span className="block">(83) 98797-2930</span>
                  </a></li>
                <li><a href="https://www.instagram.com/alumia.laboratorio" target="_blank" className="hover:underline">
                  <span className="block">Instagram:</span>
                  <span className="block">@alumia.laboratorio</span>
                  </a></li>
                {/* <li><a href="#" className="hover:underline">Solicite uma verificação</a></li> */}
                {/* <li><a href="#" className="hover:underline">Termos e condições</a></li> */}
              </ul>
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <div>
              <h3 className="font-bold mb-2">Apoio</h3>
              <div className="flex items-center justify-center gap-6 mt-2">
                <Image src="/logoFooter.svg" alt="Inovatec" width={120} height={60} />
                <Image src="/logoUFPB.svg" alt="Parceiro" width={60} height={30} />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-6 pt-6 px-4 sm:px-6 md:px-0 border-t border-gray-700 flex flex-col md:flex-row justify-center items-center gap-4 text-center md:text-left ">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <Image src="/logoFooterAlumia.svg" alt="Logo Alumia" width={100} height={25} />
            <p className="text-sm sm:text-base">Copyright © 2024 Alumia Laboratório de Combate à Desinformação</p>
          </div>
          {/* <div className="flex gap-4 text-sm sm:text-base">
            <a href="#" className="underline">Termos e Condições</a>
            <a href="#" className="underline">Política de privacidade</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
