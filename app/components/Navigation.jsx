'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedThemeToggler } from "./ThemeToggleButton.tsx"

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-lg sm:text-xl font-bold text-white">
            Sunjeet Kajla
          </Link>
          <div className="flex space-x-3 sm:space-x-6 text-sm sm:text-base">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <AnimatedThemeToggler />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;