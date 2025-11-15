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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b" style={{ background: 'var(--background)', opacity: 0.95, borderColor: 'var(--foreground)', borderOpacity: 0.2 }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-lg sm:text-xl font-bold" style={{ color: 'var(--foreground)' }}>
            Sunjeet Kajla
          </Link>
          <div className="flex space-x-3 sm:space-x-6 text-sm sm:text-base">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors"
                style={{
                  color: pathname === item.href ? '#60a5fa' : 'var(--foreground)',
                  opacity: pathname === item.href ? 1 : 0.7
                }}
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