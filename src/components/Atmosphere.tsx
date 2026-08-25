import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { IMAGES } from '@/data/images';
import { fadeUp, viewportConfig } from '@/lib/animations';

export default function Atmosphere() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={ref} className="relative h-[80vh] md:h-screen w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={IMAGES.atmosphere}
          alt="LOLA restaurant atmosphere at night"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal-400/50" />

      {/* Text */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="font-serif text-cream-50 text-5xl md:text-6xl lg:text-8xl font-light leading-[1.1]"
        >
          {t('atmosphere.line1')}
        </motion.h2>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="font-serif text-cream-50/80 text-5xl md:text-6xl lg:text-8xl font-light leading-[1.1] italic"
        >
          {t('atmosphere.line2')}
        </motion.h2>
      </div>
    </section>
  );
}
