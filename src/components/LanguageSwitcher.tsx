import { motion } from 'framer-motion';
import { useLanguage, type Language } from '@/i18n/LanguageContext';

export default function LanguageSwitcher({
  variant = 'light',
}: {
  variant?: 'light' | 'dark';
}) {
  const { lang, setLang } = useLanguage();

  const languages: Language[] = ['de', 'en'];

  return (
    <div
      className={`flex items-center gap-1 text-xs tracking-wide-sm font-medium ${
        variant === 'light' ? 'text-cream-100/80' : 'text-charcoal-200/70'
      }`}
    >
      {languages.map((l, i) => (
        <span key={l} className="flex items-center">
          <button
            onClick={() => setLang(l)}
            className={`uppercase transition-colors duration-300 hover:opacity-100 ${
              lang === l ? 'opacity-100' : 'opacity-50 hover:opacity-80'
            }`}
            aria-label={`Switch to ${l === 'de' ? 'German' : 'English'}`}
          >
            {l === 'de' ? 'DE' : 'EN'}
          </button>
          {i === 0 && (
            <span className="mx-1.5 opacity-30" aria-hidden="true">
              /
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
