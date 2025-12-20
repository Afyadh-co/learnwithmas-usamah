"use client";

import { BackToHome } from "@/app/back-to-home";
import { ThemeToggle } from "@/app/theme-toggle";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
  const { theme } = useTheme();
  return (
    <header className={`navbar border-b ${theme === "light" && "bg-white"}`}>
      <nav>
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* 1. Logo */}
          <Link href={"/"}>
            <h1 className="py-6 lg:text-5xl md:text-3xl text-xl font-semibold">
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
