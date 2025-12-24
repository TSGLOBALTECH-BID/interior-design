'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent backdrop-blur-0'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-foreground">
            Interior<span className="text-primary">Design</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`transition-colors font-medium ${isScrolled ? 'text-foreground/90 hover:text-primary' : 'text-white/90 hover:text-white'}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className={`md:hidden p-2.5 rounded-lg focus:outline-none transition-all duration-200 ${isScrolled 
              ? 'text-foreground border-2 border-foreground/30 bg-background/80 hover:bg-background/90' 
              : 'text-white border-2 border-white/40 bg-black/40 hover:bg-black/60'} hover:border-primary/70 hover:shadow-sm backdrop-blur-sm`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col items-center justify-center relative">
              <span className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
              <span className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4 py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 px-4 rounded-md hover:bg-foreground/5 text-foreground/90 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
