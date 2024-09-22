import Link from "next/link";
import React, { useState } from "react";
import Busca from "./Busca";
import { useRouter } from "next/navigation";
import { links } from "@/lib/data";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";

function Menu() {
  const router = useRouter();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado do menu lateral

  const handleSearch = (query: string, type: string) => {
    const formattedQuery = encodeURIComponent(query);
    router.push(`/blog?${type}=${formattedQuery}`);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Ícone de Menu para mobile */}
      <div className="flex lg:hidden text-2xl">
        <CiMenuFries onClick={toggleMenu} className="cursor-pointer" />
      </div>

      {/* Overlay que fecha o menu quando clicado */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Menu lateral para mobile */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-[250px] lg:hidden`}
      >
        <ul className="flex flex-col gap-4 p-4">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-[#7f7f7f] text-lg hover:text-secondary"
              onClick={closeMenu} // Fecha o menu ao clicar em uma opção
            >
              <Link href={link.hash}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="p-4 m-auto">
          <Busca onSearch={handleSearch} />
        </div>
      </div>

      {/* Menu para telas grandes */}
      <div className="lg:flex hidden gap-2 items-center">
        <ul className="flex gap-2">
          {links.map((link, index) => (
            <li
              key={index}
              className="cursor-pointer 2xl:text-xl text-[#7f7f7f] hover:scale-105"
            >
              <Link href={link.hash}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="relative flex items-center hover:text-secondary">
          <IoIosSearch
            onClick={toggleSearch}
            className={`cursor-pointer transition-all hover:scale-105  duration-300 ease-in-out ${
              isSearchVisible ? "hidden" : "block"
            }`}
          />
          <div
            className={`transition-all duration-[1000ms] ease-in-out ${
              isSearchVisible
                ? "max-w-[300px] opacity-100"
                : "max-w-0 opacity-0"
            } overflow-hidden`}
          >
            <Busca onSearch={handleSearch} />
          </div>
        </div>
        <Link
          href="/blog"
          className="hover:scale-105 h-[40px] text-white rounded-full py-2 px-4 bg-primary"
        >
          Contato
        </Link>
      </div>
    </div>
  );
}

export default Menu;
