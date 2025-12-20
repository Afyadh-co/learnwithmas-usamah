"use client";

import { BackToHome } from "@/app/back-to-home";
import { ThemeToggle } from "@/app/theme-toggle";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Mengatur body className untuk tema yang sesuai setelah render
    document.body.className = theme === "light" ? "bg-white" : "bg-black";
  }, [theme]); // Hanya dijalankan saat theme berubah

  return (
    <header className={`navbar border-b ${theme === "light" && "bg-white"}`}>
      <nav>
        <div className="container mx-auto flex md:flex-row flex-col items-center justify-between px-4 py-6">
          {/* 1. Logo */}
          <Link href={"/"}>
            <h1 className="md:text-4xl text-3xl font-semibold">
              LearnWith-MasUsamah.
            </h1>
          </Link>
          <div className="flex flex-row items-center gap-x-8">
            <BackToHome />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
