import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function MobileReserveCTA() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const heroHeight = window.innerHeight;
      // Show after scrolling past hero, hide when near reservations section
      const resSection = document.getElementById('reservations');
      const resTop = resSection?.getBoundingClientRect().top ?? 0;
      setVisible(scrolled > heroHeight * 0.8 && resTop > 200);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#reservations"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-2 py-4 bg-accent text-cream-50 text-xs uppercase tracking-wide-sm shadow-lg"
        >
          <Calendar className="w-4 h-4" />
          {t('nav.reserveTable')}
        </motion.a>
      )}
    </AnimatePresence>
  );
}
