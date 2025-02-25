import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#FFC31A] font-roboto-condensed">
        <div className='container text-[#050505]'>
            <div className="text-lg font-bold ">
                <Link href="/">Alumia</Link>
            </div>
            <ul className="flex space-x-8">
                <li>
                <Link href="/checkens" className="hover:text-orange-600 transition-colors">Início</Link>
                </li>
                <li>
                <Link href="/institucional" className=" hover:text-orange-600 transition-colors">Checagens</Link>
                </li>
                <li>
                <Link href="/sobre" className=" hover:text-orange-600 transition-colors">Institucional</Link>
                </li>
                <li>
                <Link href="/contato" className=" hover:text-orange-600 transition-colors">Contato</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
