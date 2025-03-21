"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FFC31A] font-roboto-condensed text-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link href="/">
          <Image
            src="/AlumiaLogo.svg"
            alt="Logo Alumia"
            width={200}
            height={48}
            objectFit="contain"
          />
        </Link>

        <button
          className="md:hidden text-[#050505] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-[#050505] hover:text-orange-600 transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link href="/checagens" className="text-[#050505] hover:text-orange-600 transition-colors">
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

      <div
        className={`
          md:hidden px-4 overflow-hidden transition-all duration-300 origin-top
          ${menuOpen ? 'scale-y-100 opacity-100 pb-4' : 'scale-y-0 opacity-0 h-0'}
        `}
      >
        <ul className="flex flex-col space-y-2">
          <li>
            <Link href="/" className="text-[#050505] hover:text-orange-600 transition-colors block">
              Início
            </Link>
          </li>
          <li>
            <Link href="/checagens" className="text-[#050505] hover:text-orange-600 transition-colors block">
              Checagens
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="text-[#050505] hover:text-orange-600 transition-colors block">
              Institucional
            </Link>
          </li>
        </ul>

        <div className="relative flex items-center border border-[#050505] mt-4">
          <input
            type="text"
            placeholder="Pesquise aqui..."
            className="px-3 py-1 pr-8 w-full text-[#050505] placeholder-[#050505] bg-transparent focus:outline-none"
          />
          <FaSearch className="absolute right-2 text-[#050505]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
