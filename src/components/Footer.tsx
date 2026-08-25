import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { fadeUp, viewportConfig } from '@/lib/animations';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal-100 text-cream-50 pt-20 md:pt-24 pb-8">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Large LOLA */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="font-serif text-[20vw] md:text-[15vw] lg:text-[12rem] leading-none font-light text-center mb-16"
        >
          LOLA
        </motion.h2>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 border-t border-cream-50/10 pt-12">
          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-ultra-wide text-cream-50/40 mb-4">
              {t('nav.menu')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-sm text-cream-50/70 hover:text-cream-50 transition-colors">
                  {t('footer.menu')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-cream-50/70 hover:text-cream-50 transition-colors">
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-sm text-cream-50/70 hover:text-cream-50 transition-colors">
                  {t('nav.gallery')}
                </a>
              </li>
              <li>
                <a href="#reservations" className="text-sm text-cream-50/70 hover:text-cream-50 transition-colors">
                  {t('footer.reservations')}
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xs uppercase tracking-ultra-wide text-cream-50/40 mb-4">
              {t('footer.address')}
            </h3>
            <address className="not-italic text-sm text-cream-50/70 leading-relaxed font-light">
              {t('location.street')}
              <br />
              {t('location.city')}
              <br />
              {t('location.country')}
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs uppercase tracking-ultra-wide text-cream-50/40 mb-4">
              {t('footer.hours')}
            </h3>
            <ul className="space-y-1.5 text-sm text-cream-50/70 font-light">
              <li>{t('location.monday')}: {t('location.closed')}</li>
              <li>{t('location.tueThu')}: 17–23</li>
              <li>{t('location.friSat')}: 17–00</li>
              <li>{t('location.sunday')}: 17–22</li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h3 className="text-xs uppercase tracking-ultra-wide text-cream-50/40 mb-4">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+493012345678" className="text-sm text-cream-50/70 hover:text-cream-50 transition-colors">
                  +49 30 1234 5678
                </a>
              </li>
              <li>
                <a href="mailto:hello@lola-restaurant.de" className="text-sm text-cream-50/70 hover:text-cream-50 transition-colors">
                  hello@lola-restaurant.de
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-cream-50/70 hover:text-cream-50 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  {t('footer.instagram')}
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal + copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-cream-50/10 pt-8">
          <div className="flex items-center gap-6 text-xs text-cream-50/40">
            <a href="#" className="hover:text-cream-50/70 transition-colors">
              {t('footer.imprint')}
            </a>
            <a href="#" className="hover:text-cream-50/70 transition-colors">
              {t('footer.privacy')}
            </a>
          </div>
          <p className="text-xs text-cream-50/40">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
