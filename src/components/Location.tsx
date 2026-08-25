import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, ArrowUpRight, Clock } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="location" className="bg-cream-50 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-100 font-light mb-16 md:mb-20"
        >
          {t('location.title')}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-12"
          >
            {/* Address */}
            <motion.div variants={fadeUp}>
              <h3 className="text-xs uppercase tracking-ultra-wide text-muted mb-4">
                {t('location.address')}
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                <address className="not-italic text-charcoal-100 text-lg font-light leading-relaxed">
              {t('location.street')}
              <br />
              {t('location.city')}
              <br />
              {t('location.country')}
            </address>
              </div>
              <a
                href="https://maps.app.goo.gl/wiL8b8GzvHJrhd186"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 mt-4 text-xs uppercase tracking-wide-sm text-charcoal-100/70 hover:text-accent transition-colors"
              >
                {t('location.getDirections')}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeUp}>
              <h3 className="text-xs uppercase tracking-ultra-wide text-muted mb-4">
                {t('location.contact')}
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+493012345678"
                  className="flex items-center gap-3 text-charcoal-100/80 hover:text-accent transition-colors text-lg font-light"
                >
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  +49 30 1234 5678
                </a>
                <a
                  href="mailto:hello@lola-winterberg.de"
                  className="flex items-center gap-3 text-charcoal-100/80 hover:text-accent transition-colors text-lg font-light"
                >
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  hello@lola-winterberg.de
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-charcoal-100/80 hover:text-accent transition-colors text-lg font-light"
                >
                  <Instagram className="w-4 h-4 text-accent shrink-0" />
                  @lola.restaurant
                </a>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div variants={fadeUp}>
              <h3 className="text-xs uppercase tracking-ultra-wide text-muted mb-4 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                {t('location.hours')}
              </h3>
              <dl className="space-y-2.5 text-charcoal-100/70 font-light">
                <div className="flex justify-between max-w-sm">
                  <dt>{t('location.monday')}</dt>
                  <dd className="text-muted">{t('location.closed')}</dd>
                </div>
                <div className="flex justify-between max-w-sm">
                  <dt>{t('location.tueThu')}</dt>
                  <dd>17:00 – 23:00</dd>
                </div>
                <div className="flex justify-between max-w-sm">
                  <dt>{t('location.friSat')}</dt>
                  <dd>17:00 – 00:00</dd>
                </div>
                <div className="flex justify-between max-w-sm">
                  <dt>{t('location.sunday')}</dt>
                  <dd>17:00 – 22:00</dd>
                </div>
              </dl>
            </motion.div>
          </motion.div>

          {/* Right: Map placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative min-h-[400px] lg:min-h-full bg-cream-200 overflow-hidden"
          >
            {/* Map placeholder — ready for Google Maps integration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-accent/40 mx-auto mb-4" />
                <p className="text-muted text-sm">Google Maps</p>
                <p className="text-muted/60 text-xs mt-1">10115 Winterberg</p>
              </div>
            </div>
            {/* Subtle grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
