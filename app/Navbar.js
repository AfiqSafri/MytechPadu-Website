'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    if (!sidebarOpen) return;
    function handleClick(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [sidebarOpen]);

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="sm:hidden fixed top-3 left-3 z-[100] p-2 rounded bg-black/80 border border-white/10 text-white focus:outline-none"
        aria-label="Open navigation menu"
        onClick={() => setSidebarOpen(true)}
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-sm sm:hidden">
          <nav
            ref={sidebarRef}
            className="fixed top-0 left-0 h-full w-64 bg-black border-r border-white/10 shadow-2xl flex flex-col gap-2 p-6 z-[100] animate-slide-in"
          >
            <button
              className="self-end mb-6 p-2 rounded bg-black/60 border border-white/10 text-white"
              aria-label="Close navigation menu"
              onClick={() => setSidebarOpen(false)}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6"/></svg>
            </button>
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block text-lg py-2 px-3 rounded text-white hover:text-sky-200 transition ${isActive ? 'font-bold drop-shadow-[0_0_8px_white] brightness-150 bg-white/10' : ''}`}
                  onClick={() => setSidebarOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}

      {/* Desktop Nav */}
      <nav className="hidden sm:flex w-full bg-black/90 border-b border-white/10 px-2 sm:px-4 py-2 sm:py-3 overflow-x-auto whitespace-nowrap justify-center items-center gap-6 fixed top-0 left-0 z-50 shadow-lg">
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
    </>
  );
} 