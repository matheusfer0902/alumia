import { FaTwitter, FaFacebook, FaLinkedinIn, FaYoutube, FaPaperPlane } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#FFC31A] py-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-0 text-left">
          <p className="text-2xl font-medium">Siga o Alumia nas redes sociais:</p>

          <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 mt-4">
            <FaTwitter className="text-black text-3xl sm:text-4xl cursor-pointer hover:opacity-80" />
            <FaFacebook className="text-black text-3xl sm:text-4xl cursor-pointer hover:opacity-80" />
            <FaLinkedinIn className="text-black text-3xl sm:text-4xl cursor-pointer hover:opacity-80" />
            <FaYoutube className="text-black text-3xl sm:text-4xl cursor-pointer hover:opacity-80" />
          </div>

          <p className="mt-6 text-2xl font-medium">Inscreva-se no nosso Newsletter:</p>
          <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2">
            <input
              type="email"
              placeholder="Insira seu e-mail"
              className="px-3 py-2 border border-black bg-transparent text-black placeholder-black text-lg focus:outline-none w-full sm:w-[300px] rounded"
            />
            <button className="bg-black text-white px-4 py-2 flex items-center justify-center hover:opacity-80 w-full sm:w-auto">
              <FaPaperPlane className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 md:px-0 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          <div>
            <h3 className="font-bold mb-2">Sobre o Alumia</h3>
            <ul className="space-y-1 text-lg">
              <li><a href="#" className="hover:underline">Missão</a></li>
              <li><a href="#" className="hover:underline">Equipe</a></li>
              <li><a href="#" className="hover:underline">Política de privacidade</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Checagens</h3>
            <ul className="space-y-1 text-lg">
              <li><a href="#" className="hover:underline">Zap Notícias</a></li>
              <li><a href="#" className="hover:underline">Política</a></li>
              <li><a href="#" className="hover:underline">Saúde</a></li>
              <li><a href="#" className="hover:underline">Meio Ambiente</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Contato</h3>
            <ul className="space-y-1 text-lg">
              <li><a href="#" className="hover:underline">Informações</a></li>
              <li><a href="#" className="hover:underline">Solicite uma verificação</a></li>
              <li><a href="#" className="hover:underline">Termos e condições</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Apoio</h3>
            <div className="flex items-center gap-6 mt-2">
              <Image src="/logoFooter.svg" alt="Inovatec" width={120} height={60} />
              <Image src="/logoUFPB.svg" alt="Parceiro" width={60} height={30} />
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-6 pt-6 px-4 sm:px-6 md:px-0 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <Image src="/logoFooterAlumia.svg" alt="Logo Alumia" width={100} height={25} />
            <p className="text-sm sm:text-base">Copyright © 2024 Alumia Laboratório de Combate à Desinformação</p>
          </div>
          <div className="flex gap-4 text-sm sm:text-base">
            <a href="#" className="underline">Termos e Condições</a>
            <a href="#" className="underline">Política de privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
