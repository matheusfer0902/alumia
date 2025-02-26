import Link from 'next/link';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#FFC31A] font-roboto-condensed">
      <div className="container mx-auto p-4 flex justify-between items-center">
        
        <div className="flex items-center">
          <Link href="/">
          <Image
            src="/AlumiaLogo.svg"
            alt="Logo Alumia"
            width={240} 
            height={48} 
            objectFit="contain"
          />
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li>
              <Link href="/checkens" className="text-[#050505] hover:text-orange-600 transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link href="/institucional" className="text-[#050505] hover:text-orange-600 transition-colors">
                Checagens
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="text-[#050505] hover:text-orange-600 transition-colors">
                Institucional
              </Link>
            </li>
          </ul>

          <div className="relative flex items-center border border-[#050505]">
            <input
              type="text"
              placeholder="Pesquise aqui..."
              className="px-3 py-1 pr-8 text-[#050505] placeholder-[#050505] bg-transparent focus:outline-none"
            />
            <FaSearch className="absolute right-2 text-[#050505]" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
