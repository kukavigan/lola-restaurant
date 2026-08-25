import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { IMAGES } from '@/data/images';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background image with slow zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={IMAGES.hero}
          alt="LOLA restaurant interior with warm candlelight"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-300/60 via-charcoal-300/30 to-charcoal-400/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-6 text-xs uppercase tracking-ultra-wide text-cream-50/60"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-cream-50 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] max-w-5xl text-balance"
        >
          {t('hero.title')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-cream-50/40 text-cream-50 text-xs uppercase tracking-wide-sm transition-all duration-300 hover:bg-cream-50 hover:text-charcoal-100"
          >
            {t('hero.exploreMenu')}
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#reservations"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-cream-50 text-xs uppercase tracking-wide-sm transition-all duration-300 hover:bg-accent-dark"
          >
            {t('hero.reserveTable')}
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-ultra-wide text-cream-50/50">
          {t('hero.scroll')}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-cream-50/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
