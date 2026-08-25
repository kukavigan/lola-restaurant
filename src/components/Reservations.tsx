import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  Check,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { fadeUp, viewportConfig } from '@/lib/animations';

const TIME_SLOTS = [
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
];

const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8];

interface ReservationData {
  guests: number;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  requests: string;
}

const STEPS = ['guests', 'date', 'time', 'details'] as const;
type Step = (typeof STEPS)[number];

export default function Reservations() {
  const { t, lang } = useLanguage();
  const [step, setStep] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [data, setData] = useState<ReservationData>({
    guests: 2,
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    requests: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const today = new Date().toISOString().split('T')[0];

  const update = (field: keyof ReservationData, value: string | number) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors({});
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (step === 1 && !data.date) newErrors.date = t('reservations.error.date');
    if (step === 2 && !data.time) newErrors.time = t('reservations.error.time');
    if (step === 3) {
      if (!data.name.trim()) newErrors.name = t('reservations.error.name');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        newErrors.email = t('reservations.error.email');
      if (data.phone.trim().length < 5) newErrors.phone = t('reservations.error.phone');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (!validateStep()) return;
    if (step < STEPS.length - 1) setStep(step + 1);
  };

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  const submit = () => {
    if (!validateStep()) return;
    // Store locally — structured so a real backend can be connected later
    const reservations = JSON.parse(localStorage.getItem('lola-reservations') || '[]');
    reservations.push({ ...data, createdAt: new Date().toISOString() });
    localStorage.setItem('lola-reservations', JSON.stringify(reservations));
    setConfirmed(true);
  };

  const reset = () => {
    setConfirmed(false);
    setStep(0);
    setData({
      guests: 2,
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      requests: '',
    });
  };

  const stepLabels = [
    t('reservations.step.guests'),
    t('reservations.step.date'),
    t('reservations.step.time'),
    t('reservations.step.details'),
  ];

  return (
    <section id="reservations" className="bg-cream-50 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12 md:mb-16"
        >
          <p className="mb-4 text-xs uppercase tracking-ultra-wide text-muted">
            {t('reservations.subtitle')}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-100 font-light">
            {t('reservations.title')}
          </h2>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {confirmed ? (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-accent mb-8"
                >
                  <CheckCircle2 className="w-10 h-10 text-accent" />
                </motion.div>
                <h3 className="font-serif text-3xl md:text-4xl text-charcoal-100 font-light mb-4">
                  {t('reservations.confirmation.title')}
                </h3>
                <p className="text-charcoal-100/60 text-lg font-light mb-8 max-w-md mx-auto leading-relaxed">
                  {t('reservations.confirmation.message')}
                </p>

                {/* Summary */}
                <div className="bg-cream-100 p-6 md:p-8 mb-8 text-left max-w-md mx-auto">
                  <p className="text-xs uppercase tracking-wide-sm text-muted mb-4">
                    {t('reservations.confirmation.details')}
                  </p>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-charcoal-100/50">{t('reservations.step.guests')}</dt>
                      <dd className="text-charcoal-100 font-medium">
                        {data.guests} {data.guests === 1 ? t('reservations.guest') : t('reservations.guests.plural')}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-charcoal-100/50">{t('reservations.step.date')}</dt>
                      <dd className="text-charcoal-100 font-medium">
                        {new Date(data.date).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-charcoal-100/50">{t('reservations.step.time')}</dt>
                      <dd className="text-charcoal-100 font-medium">{data.time}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-charcoal-100/50">{t('reservations.name')}</dt>
                      <dd className="text-charcoal-100 font-medium">{data.name}</dd>
                    </div>
                  </dl>
                </div>

                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-charcoal-100/20 text-charcoal-100 text-xs uppercase tracking-wide-sm hover:bg-charcoal-100 hover:text-cream-50 transition-all duration-300"
                >
                  {t('reservations.confirmation.new')}
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step indicator */}
                <div className="flex items-center justify-center gap-2 mb-12">
                  {STEPS.map((s, i) => (
                    <div key={s} className="flex items-center">
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                            i < step
                              ? 'bg-accent text-cream-50'
                              : i === step
                                ? 'bg-charcoal-100 text-cream-50'
                                : 'bg-cream-200 text-muted'
                          }`}
                        >
                          {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
                        </div>
                        <span
                          className={`text-[10px] uppercase tracking-wide-sm transition-colors duration-300 ${
                            i === step ? 'text-charcoal-100' : 'text-muted'
                          }`}
                        >
                          {stepLabels[i]}
                        </span>
                      </div>
                      {i < STEPS.length - 1 && (
                        <div
                          className={`w-12 md:w-16 h-px mx-2 transition-colors duration-300 ${
                            i < step ? 'bg-accent' : 'bg-cream-300'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step content */}
                <div className="bg-cream-100 p-6 md:p-10 min-h-[280px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {/* Step 1: Guests */}
                    {step === 0 && (
                      <motion.div
                        key="guests"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-center mb-8">
                          <Users className="w-6 h-6 text-accent mx-auto mb-3" />
                          <h3 className="font-serif text-2xl text-charcoal-100 font-light">
                            {t('reservations.step.guests')}
                          </h3>
                        </div>
                        <div className="grid grid-cols-4 gap-2 md:gap-3">
                          {GUEST_OPTIONS.map((g) => (
                            <button
                              key={g}
                              onClick={() => update('guests', g)}
                              className={`py-4 text-lg font-serif transition-all duration-300 border ${
                                data.guests === g
                                  ? 'bg-charcoal-100 text-cream-50 border-charcoal-100'
                                  : 'border-cream-300 text-charcoal-100/70 hover:border-charcoal-100'
                              }`}
                            >
                              {g}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Date */}
                    {step === 1 && (
                      <motion.div
                        key="date"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-center mb-8">
                          <Calendar className="w-6 h-6 text-accent mx-auto mb-3" />
                          <h3 className="font-serif text-2xl text-charcoal-100 font-light">
                            {t('reservations.chooseDate')}
                          </h3>
                        </div>
                        <input
                          type="date"
                          min={today}
                          value={data.date}
                          onChange={(e) => update('date', e.target.value)}
                          className="w-full bg-cream-50 border border-cream-300 px-4 py-4 text-center text-lg font-serif text-charcoal-100 focus:outline-none focus:border-accent transition-colors"
                        />
                        {errors.date && (
                          <p className="mt-3 text-sm text-accent text-center">{errors.date}</p>
                        )}
                      </motion.div>
                    )}

                    {/* Step 3: Time */}
                    {step === 2 && (
                      <motion.div
                        key="time"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-center mb-8">
                          <Clock className="w-6 h-6 text-accent mx-auto mb-3" />
                          <h3 className="font-serif text-2xl text-charcoal-100 font-light">
                            {t('reservations.selectTime')}
                          </h3>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                          {TIME_SLOTS.map((time) => (
                            <button
                              key={time}
                              onClick={() => update('time', time)}
                              className={`py-3 text-sm font-medium transition-all duration-300 border ${
                                data.time === time
                                  ? 'bg-charcoal-100 text-cream-50 border-charcoal-100'
                                  : 'border-cream-300 text-charcoal-100/70 hover:border-charcoal-100'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                        {errors.time && (
                          <p className="mt-3 text-sm text-accent text-center">{errors.time}</p>
                        )}
                      </motion.div>
                    )}

                    {/* Step 4: Details */}
                    {step === 3 && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="text-center mb-6">
                          <User className="w-6 h-6 text-accent mx-auto mb-3" />
                          <h3 className="font-serif text-2xl text-charcoal-100 font-light">
                            {t('reservations.step.details')}
                          </h3>
                        </div>
                        <div>
                          <label className="sr-only" htmlFor="res-name">
                            {t('reservations.name')}
                          </label>
                          <input
                            id="res-name"
                            type="text"
                            placeholder={t('reservations.name')}
                            value={data.name}
                            onChange={(e) => update('name', e.target.value)}
                            className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-charcoal-100 focus:outline-none focus:border-accent transition-colors"
                          />
                          {errors.name && <p className="mt-1.5 text-sm text-accent">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="sr-only" htmlFor="res-email">
                            {t('reservations.email')}
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                            <input
                              id="res-email"
                              type="email"
                              placeholder={t('reservations.email')}
                              value={data.email}
                              onChange={(e) => update('email', e.target.value)}
                              className="w-full bg-cream-50 border border-cream-300 pl-10 pr-4 py-3 text-charcoal-100 focus:outline-none focus:border-accent transition-colors"
                            />
                          </div>
                          {errors.email && <p className="mt-1.5 text-sm text-accent">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="sr-only" htmlFor="res-phone">
                            {t('reservations.phone')}
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                            <input
                              id="res-phone"
                              type="tel"
                              placeholder={t('reservations.phone')}
                              value={data.phone}
                              onChange={(e) => update('phone', e.target.value)}
                              className="w-full bg-cream-50 border border-cream-300 pl-10 pr-4 py-3 text-charcoal-100 focus:outline-none focus:border-accent transition-colors"
                            />
                          </div>
                          {errors.phone && <p className="mt-1.5 text-sm text-accent">{errors.phone}</p>}
                        </div>
                        <div>
                          <label className="sr-only" htmlFor="res-requests">
                            {t('reservations.specialRequests')}
                          </label>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted" />
                            <textarea
                              id="res-requests"
                              placeholder={t('reservations.specialRequestsPlaceholder')}
                              value={data.requests}
                              onChange={(e) => update('requests', e.target.value)}
                              rows={3}
                              className="w-full bg-cream-50 border border-cream-300 pl-10 pr-4 py-3 text-charcoal-100 focus:outline-none focus:border-accent transition-colors resize-none"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Navigation buttons */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={back}
                    disabled={step === 0}
                    className={`inline-flex items-center gap-2 text-xs uppercase tracking-wide-sm transition-all duration-300 ${
                      step === 0
                        ? 'opacity-0 pointer-events-none'
                        : 'text-charcoal-100/70 hover:text-charcoal-100'
                    }`}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    {t('reservations.back')}
                  </button>

                  {step < STEPS.length - 1 ? (
                    <button
                      onClick={next}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal-100 text-cream-50 text-xs uppercase tracking-wide-sm hover:bg-accent transition-all duration-300 group"
                    >
                      {t('reservations.next')}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <button
                      onClick={submit}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-cream-50 text-xs uppercase tracking-wide-sm hover:bg-accent-dark transition-all duration-300 group"
                    >
                      {t('reservations.confirm')}
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
