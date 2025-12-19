
import { ThemeToggle } from "@/app/theme-toggle";
import Link from "next/link";


const Header = () => {
  return (
    <header className="navbar border-b sticky top-0 z-50">
      <nav>
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* 1. Logo */}
          <Link href={"/"}>
            <h1 className="py-6 lg:text-5xl md:text-3xl text-xl font-semibold">
              LearnWith-MasUsamah.
            </h1>
          </Link>
          <ThemeToggle/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
