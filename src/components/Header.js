"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 text-black bg-white shadow-md h-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Portfolio Logo"
            width={50}
            height={50}
            priority
          />
        </Link>
        <nav className="hidden md:flex h-full">
          <Link
            href="/"
            className="hover:text-white p-4 hover:bg-blue-900 transition duration-350"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="hover:text-white p-4 hover:bg-blue-900 transition duration-350"
          >
            About
          </Link>
          <Link
            href="/#projects"
            className="hover:text-white p-4 hover:bg-blue-900 transition duration-350"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="hover:text-white p-4 hover:bg-blue-900 transition duration-350"
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-800 font-bold"
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md flex flex-col items-center w-full h-screen ">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center hover:bg-blue-900 hover:text-white transition duration-350 py-3"
          >
            Home
          </Link>
          <Link
            href="/#about"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center hover:bg-blue-900 hover:text-white transition duration-350 py-3"
          >
            About
          </Link>
          <Link
            href="/#projects"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center hover:bg-blue-900 hover:text-white transition duration-350 py-3 "
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center hover:bg-blue-900 hover:text-white transition duration-350 py-3 shadow-md"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
