// Navbar.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const url = new URLSearchParams();
      if (searchTerm.trim() !== "") {
        url.set("query", searchTerm.trim());
      }
      router.push(`${pathname}?${url.toString()}`, { scroll: false });
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, pathname, router]);

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
            {["Início", "Checagens", "Institucional"].map((item, index) => {
              const href = item === "Início" ? "/" : `/${item.toLowerCase()}`;
              return (
                <li key={index} className="relative group">
                  <Link
                    href={href}
                    className="text-[#050505] transition-colors"
                  >
                    {item}
                    <span className="block h-[2px] w-0 group-hover:w-full bg-[#050505] transition-all duration-300 ease-out"></span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="relative flex items-center border border-[#050505]">
            <input
              type="text"
              placeholder="Pesquise aqui..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
          {["Início", "Checagens", "Institucional"].map((item, index) => {
            const href = item === "Início" ? "/" : `/${item.toLowerCase()}`;
            return (
              <li key={index}>
                <Link
                  href={href}
                  className="text-[#050505] hover:text-orange-600 transition-colors block"
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="relative flex items-center border border-[#050505] mt-4">
          <input
            type="text"
            placeholder="Pesquise aqui..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-1 pr-8 w-full text-[#050505] placeholder-[#050505] bg-transparent focus:outline-none"
          />
          <FaSearch className="absolute right-2 text-[#050505]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
