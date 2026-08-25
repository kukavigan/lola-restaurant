import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const NAV_ITEMS = [
  { key: 'nav.menu', href: '#menu' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.gallery', href: '#gallery' },
  { key: 'nav.reservations', href: '#reservations' },
  { key: 'nav.contact', href: '#location' },
] as const;

export default function Navigation() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12 py-5">
          {/* Logo */}
          <a
            href="#hero"
            className={`font-serif text-2xl tracking-wide-sm transition-colors duration-500 ${
              scrolled ? 'text-charcoal-100' : 'text-cream-50'
            }`}
          >
            LOLA
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-xs uppercase tracking-wide-sm transition-colors duration-300 hover:opacity-100 ${
                  scrolled
                    ? 'text-charcoal-100/70 hover:text-charcoal-100'
                    : 'text-cream-50/70 hover:text-cream-50'
                }`}
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:block">
              <LanguageSwitcher variant={scrolled ? 'dark' : 'light'} />
            </div>
            <a
              href="#reservations"
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wide-sm border transition-all duration-300 group ${
                scrolled
                  ? 'border-charcoal-100/20 text-charcoal-100 hover:bg-charcoal-100 hover:text-cream-50'
                  : 'border-cream-50/30 text-cream-50 hover:bg-cream-50 hover:text-charcoal-100'
              }`}
            >
              {t('nav.reserveTable')}
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden transition-colors duration-500 ${
                scrolled ? 'text-charcoal-100' : 'text-cream-50'
              }`}
              aria-label="Open menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-charcoal-100 lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-serif text-2xl text-cream-50">LOLA</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-cream-50"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center px-6 gap-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-4xl text-cream-50 py-2 border-b border-cream-50/10"
                >
                  {t(item.key)}
                </motion.a>
              ))}
            </div>

            <div className="px-6 pb-12 space-y-6">
              <motion.a
                href="#reservations"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center justify-center gap-2 py-4 bg-accent text-cream-50 text-sm uppercase tracking-wide-sm"
              >
                {t('nav.reserveTable')}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center"
              >
                <LanguageSwitcher variant="light" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
