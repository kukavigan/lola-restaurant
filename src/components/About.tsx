import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { IMAGES } from '@/data/images';
import { fadeUp, slideInLeft, slideInRight, imageReveal, viewportConfig } from '@/lib/animations';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-cream-50 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="order-2 lg:order-1"
          >
            <p className="mb-4 text-xs uppercase tracking-ultra-wide text-muted">
              LOLA - Winterberg 
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-100 font-light leading-[1.1] mb-8">
              {t('about.heading')}
            </h2>
            <div className="space-y-6 max-w-lg">
              <p className="text-charcoal-100/70 text-lg leading-[1.7] font-light">
                {t('about.paragraph1')}
              </p>
              <p className="text-charcoal-100/60 text-base leading-[1.7] font-light">
                {t('about.paragraph2')}
              </p>
            </div>
            <p className="mt-10 font-serif text-xl italic text-accent">
              {t('about.signature')}
            </p>
          </motion.div>

          {/* Image side */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.img
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                src={IMAGES.about}
                alt={t('about.imageAlt')}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative offset frame */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-1/3 border-r border-b border-accent/30 -z-0 hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
