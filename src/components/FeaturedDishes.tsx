import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { IMAGES } from '@/data/images';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';

export default function FeaturedDishes() {
  const { t, lang } = useLanguage();

  return (
    <section className="bg-cream-50 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12 md:mb-16"
        >
          <p className="mb-4 text-xs uppercase tracking-ultra-wide text-muted">
            {t('featured.subtitle')}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-100 font-light">
            {t('featured.title')}
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {IMAGES.featured.map((dish, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className={`group relative overflow-hidden ${
                i % 2 === 1 ? 'lg:mt-12' : ''
              }`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={dish.src}
                  alt={lang === 'de' ? dish.nameDe : dish.nameEn}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-400/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Dish name — desktop hover reveal */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden md:block">
                <h3 className="font-serif text-2xl text-cream-50 font-light">
                  {lang === 'de' ? dish.nameDe : dish.nameEn}
                </h3>
              </div>
              {/* Dish name — mobile always visible */}
              <h3 className="md:hidden mt-3 font-serif text-lg text-charcoal-100 font-normal">
                {lang === 'de' ? dish.nameDe : dish.nameEn}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
