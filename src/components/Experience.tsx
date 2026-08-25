import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { IMAGES } from '@/data/images';
import { fadeUp, viewportConfig } from '@/lib/animations';

export default function Experience() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['-5%', '15%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['5%', '-15%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="bg-charcoal-100 py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Editorial typography */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="font-serif text-cream-50 text-5xl md:text-6xl lg:text-8xl font-light leading-[1.1]"
          >
            {t('experience.line1')}
          </motion.h2>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="font-serif text-cream-50/80 text-5xl md:text-6xl lg:text-8xl font-light leading-[1.1] italic"
          >
            {t('experience.line2')}
          </motion.h2>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="font-serif text-accent text-5xl md:text-6xl lg:text-8xl font-light leading-[1.1]"
          >
            {t('experience.line3')}
          </motion.h2>
        </div>

        {/* Parallax images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <motion.div style={{ y: y1 }} className="aspect-[3/4] overflow-hidden">
            <img
              src={IMAGES.experience.food}
              alt="Gourmet plated dish at LOLA"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div style={{ y: y2 }} className="aspect-[3/4] overflow-hidden md:mt-12">
            <img
              src={IMAGES.experience.wine}
              alt="Red wine at LOLA"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div style={{ y: y3 }} className="aspect-[3/4] overflow-hidden">
            <img
              src={IMAGES.experience.chef}
              alt="Chef at work in the LOLA kitchen"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 text-center font-serif text-xl md:text-2xl italic text-cream-50/60 max-w-2xl mx-auto leading-relaxed"
        >
          {t('experience.description')}
        </motion.p>
      </div>
    </section>
  );
}
