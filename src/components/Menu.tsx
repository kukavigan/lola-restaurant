import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { MENU, DIETARY_LABELS, type Dietary } from '@/data/menu';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';

export default function Menu() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(MENU[0].id);

  const activeMenu = MENU.find((c) => c.id === activeCategory) ?? MENU[0];

  const dietaryLabel = (d: Dietary) =>
    lang === 'de' ? DIETARY_LABELS[d].de : DIETARY_LABELS[d].en;

  return (
    <section id="menu" className="bg-cream-100 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12 md:mb-16"
        >
          <p className="mb-4 text-xs uppercase tracking-ultra-wide text-muted">
            {t('menu.subtitle')}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-100 font-light">
            {t('menu.title')}
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16"
        >
          {MENU.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 md:px-6 py-2 text-xs uppercase tracking-wide-sm transition-all duration-300 border-b ${
                activeCategory === cat.id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-charcoal-100/50 hover:text-charcoal-100'
              }`}
            >
              {lang === 'de' ? cat.labelDe : cat.labelEn}
            </button>
          ))}
        </motion.div>

        {/* Menu items */}
        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              variants={staggerContainer}
              className="space-y-8 md:space-y-10"
            >
              {activeMenu.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  className="group flex items-baseline gap-4 md:gap-6"
                >
                  {/* Name + description */}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-serif text-xl md:text-2xl text-charcoal-100 font-normal">
                        {item.name}
                      </h3>
                      {item.dietary && (
                        <span className="flex gap-1.5">
                          {item.dietary.map((d) => (
                            <span
                              key={d}
                              className="text-[10px] uppercase tracking-wide-sm text-muted border border-muted/30 px-1.5 py-0.5"
                            >
                              {dietaryLabel(d)}
                            </span>
                          ))}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-charcoal-100/55 font-light leading-relaxed">
                      {lang === 'de' ? item.descriptionDe : item.descriptionEn}
                    </p>
                  </div>

                  {/* Dotted leader */}
                  <div className="flex-1 border-b border-dotted border-charcoal-100/15 translate-y-[-4px] min-w-[20px]" />

                  {/* Price */}
                  <span className="font-serif text-lg md:text-xl text-accent whitespace-nowrap">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-wide-sm text-charcoal-100/70 hover:text-accent transition-colors"
          >
            {t('menu.viewFull')}
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </a>
          <span className="hidden sm:block text-muted/40">|</span>
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-wide-sm text-charcoal-100/70 hover:text-accent transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            {t('menu.downloadPdf')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
