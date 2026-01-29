import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  links: { label: string; href: string }[];
}

export function Navbar({ links }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-black/5 z-[100]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
            <span>STARTER</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-bold text-black/50 hover:text-black transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
            <button className="px-6 py-3 bg-black text-white font-black rounded-xl text-sm hover:bg-black/80 transition-all active:scale-95">
              GET STARTED
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[90] md:hidden pt-32 px-6"
          >
            <div className="flex flex-col gap-8 text-center">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-black text-black"
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full py-6 bg-black text-white font-black rounded-3xl text-xl">
                GET STARTED
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
