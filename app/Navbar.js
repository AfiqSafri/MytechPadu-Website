'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-black/90 border-b border-white/10 px-2 sm:px-4 py-2 sm:py-3 flex overflow-x-auto whitespace-nowrap justify-start sm:justify-center items-center gap-3 sm:gap-6 fixed top-0 left-0 z-50 shadow-lg">
      {navLinks.map((link) => {
        const isActive = link.href === '/' ? pathname === '/' : pathname === link.href;
        return (
          <a
            key={link.href}
            href={link.href}
            className={`text-white hover:text-sky-200 transition px-1 rounded ${isActive ? 'font-bold drop-shadow-[0_0_8px_white] brightness-150' : ''}`}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
} 