export type TranslationKey =
  | 'nav.menu'
  | 'nav.about'
  | 'nav.gallery'
  | 'nav.reservations'
  | 'nav.contact'
  | 'nav.reserveTable'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.exploreMenu'
  | 'hero.reserveTable'
  | 'hero.scroll'
  | 'about.heading'
  | 'about.paragraph1'
  | 'about.paragraph2'
  | 'about.signature'
  | 'about.imageAlt'
  | 'experience.line1'
  | 'experience.line2'
  | 'experience.line3'
  | 'experience.description'
  | 'menu.title'
  | 'menu.subtitle'
  | 'menu.viewFull'
  | 'menu.downloadPdf'
  | 'menu.dietary.veg'
  | 'menu.dietary.vegan'
  | 'menu.dietary.gf'
  | 'featured.title'
  | 'featured.subtitle'
  | 'gallery.title'
  | 'gallery.subtitle'
  | 'reservations.title'
  | 'reservations.subtitle'
  | 'reservations.step.guests'
  | 'reservations.step.date'
  | 'reservations.step.time'
  | 'reservations.step.details'
  | 'reservations.guests'
  | 'reservations.guest'
  | 'reservations.guests.plural'
  | 'reservations.chooseDate'
  | 'reservations.selectTime'
  | 'reservations.name'
  | 'reservations.email'
  | 'reservations.phone'
  | 'reservations.specialRequests'
  | 'reservations.specialRequestsPlaceholder'
  | 'reservations.confirm'
  | 'reservations.back'
  | 'reservations.next'
  | 'reservations.confirmation.title'
  | 'reservations.confirmation.message'
  | 'reservations.confirmation.details'
  | 'reservations.confirmation.new'
  | 'reservations.error.name'
  | 'reservations.error.email'
  | 'reservations.error.phone'
  | 'reservations.error.date'
  | 'reservations.error.time'
  | 'atmosphere.line1'
  | 'atmosphere.line2'
  | 'location.title'
  | 'location.address'
  | 'location.street'
  | 'location.city'
  | 'location.country'
  | 'location.hours'
  | 'location.monday'
  | 'location.tueThu'
  | 'location.friSat'
  | 'location.sunday'
  | 'location.closed'
  | 'location.phone'
  | 'location.email'
  | 'location.instagram'
  | 'location.getDirections'
  | 'location.contact'
  | 'footer.tagline'
  | 'footer.menu'
  | 'footer.reservations'
  | 'footer.about'
  | 'footer.contact'
  | 'footer.instagram'
  | 'footer.address'
  | 'footer.hours'
  | 'footer.imprint'
  | 'footer.privacy'
  | 'footer.copyright';

type TranslationDict = Record<TranslationKey, string>;

const de: TranslationDict = {
  'nav.menu': 'Menü',
  'nav.about': 'Über uns',
  'nav.gallery': 'Galerie',
  'nav.reservations': 'Reservierung',
  'nav.contact': 'Kontakt',
  'nav.reserveTable': 'Tisch reservieren',

  'hero.title': 'Essen. Wein. Gute Zeiten.',
  'hero.subtitle': 'Moderne europäische Küche im Herzen Berlins',
  'hero.exploreMenu': 'Menü entdecken',
  'hero.reserveTable': 'Tisch reservieren',
  'hero.scroll': 'Scrollen zum Entdecken',

  'about.heading': 'Willkommen bei Lola.',
  'about.paragraph1':
    'Lola ist ein Ort für gutes Essen, guten Wein und noch bessere Gesellschaft. Inspiriert von der modernen europäischen Küche, vereint unsere Küche saisonale Zutaten, mutige Aromen und ein entspanntes Dining-Erlebnis.',
  'about.paragraph2':
    'Wir glauben, dass ein Abendessen mehr ist als eine Mahlzeit. Es ist ein Moment, ein Gespräch, eine Erinnerung. Bei Lola laden wir Sie ein, am Tisch zu verweilen, zu teilen und zu genießen.',
  'about.signature': 'Ihr Lola Team',
  'about.imageAlt': 'Gemütliches Interieur des Lola Restaurants',

  'experience.line1': 'Gut essen.',
  'experience.line2': 'Gut trinken.',
  'experience.line3': 'Länger bleiben.',
  'experience.description':
    'Jeder Teller erzählt eine Geschichte. Jedes Glas ein Erlebnis. Jeder Abend eine Erinnerung.',

  'menu.title': 'Speisekarte',
  'menu.subtitle': 'Saisonal. Regional. Mit Liebe gemacht.',
  'menu.viewFull': 'Vollständige Speisekarte ansehen',
  'menu.downloadPdf': 'Speisekarte als PDF',
  'menu.dietary.veg': 'Vegetarisch',
  'menu.dietary.vegan': 'Vegan',
  'menu.dietary.gf': 'Glutenfrei',

  'featured.title': 'Signature Gerichte',
  'featured.subtitle': 'Die Gerichte, die Lola ausmachen',

  'gallery.title': 'Galerie',
  'gallery.subtitle': 'Einblicke in unsere Welt',

  'reservations.title': 'Reservierung',
  'reservations.subtitle': 'Wir freuen uns auf Ihren Besuch',
  'reservations.step.guests': 'Gäste',
  'reservations.step.date': 'Datum',
  'reservations.step.time': 'Zeit',
  'reservations.step.details': 'Ihre Daten',
  'reservations.guests': 'Gäste',
  'reservations.guest': 'Gast',
  'reservations.guests.plural': 'Gäste',
  'reservations.chooseDate': 'Datum wählen',
  'reservations.selectTime': 'Uhrzeit wählen',
  'reservations.name': 'Name',
  'reservations.email': 'E-Mail',
  'reservations.phone': 'Telefon',
  'reservations.specialRequests': 'Sonderwünsche',
  'reservations.specialRequestsPlaceholder': 'Allergien, Anlässe, Sitzplatzwünsche…',
  'reservations.confirm': 'Reservierung bestätigen',
  'reservations.back': 'Zurück',
  'reservations.next': 'Weiter',
  'reservations.confirmation.title': 'Ihr Tisch ist reserviert',
  'reservations.confirmation.message':
    'Ihr Tisch bei Lola ist reserviert. Wir freuen uns auf Ihren Besuch.',
  'reservations.confirmation.details': 'Reservierungsdetails',
  'reservations.confirmation.new': 'Neue Reservierung',
  'reservations.error.name': 'Bitte geben Sie Ihren Namen ein',
  'reservations.error.email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
  'reservations.error.phone': 'Bitte geben Sie eine gültige Telefonnummer ein',
  'reservations.error.date': 'Bitte wählen Sie ein Datum',
  'reservations.error.time': 'Bitte wählen Sie eine Uhrzeit',

  'atmosphere.line1': 'Komm zum Essen.',
  'atmosphere.line2': 'Bleib für den Abend.',

  'location.title': 'Standort & Öffnungszeiten',
  'location.address': 'Adresse',
  'location.street': 'Winterberg 24',
  'location.city': '10115 Winterberg',
  'location.country': 'Deutschland',
  'location.hours': 'Öffnungszeiten',
  'location.monday': 'Montag',
  'location.tueThu': 'Dienstag — Donnerstag',
  'location.friSat': 'Freitag — Samstag',
  'location.sunday': 'Sonntag',
  'location.closed': 'Geschlossen',
  'location.phone': 'Telefon',
  'location.email': 'E-Mail',
  'location.instagram': 'Instagram',
  'location.getDirections': 'Wegbeschreibung',
  'location.contact': 'Kontakt',

  'footer.tagline': 'Essen. Wein. Gute Zeiten.',
  'footer.menu': 'Menü',
  'footer.reservations': 'Reservierung',
  'footer.about': 'Über uns',
  'footer.contact': 'Kontakt',
  'footer.instagram': 'Instagram',
  'footer.address': 'Adresse',
  'footer.hours': 'Öffnungszeiten',
  'footer.imprint': 'Impressum',
  'footer.privacy': 'Datenschutz',
  'footer.copyright': '© LOLA Restaurant 2026',
};

const en: TranslationDict = {
  'nav.menu': 'Menu',
  'nav.about': 'About',
  'nav.gallery': 'Gallery',
  'nav.reservations': 'Reservations',
  'nav.contact': 'Contact',
  'nav.reserveTable': 'Reserve Table',

  'hero.title': 'Food. Wine. Good Times.',
  'hero.subtitle': 'Modern European cuisine in the heart of Berlin',
  'hero.exploreMenu': 'Explore the Menu',
  'hero.reserveTable': 'Reserve a Table',
  'hero.scroll': 'Scroll to discover',

  'about.heading': 'Welcome to Lola.',
  'about.paragraph1':
    'Lola is a place for good food, good wine and even better company. Inspired by modern European cuisine, our kitchen combines seasonal ingredients, bold flavours and a relaxed dining experience.',
  'about.paragraph2':
    'We believe that dinner is more than a meal. It is a moment, a conversation, a memory. At Lola, we invite you to linger at the table, to share, and to savour.',
  'about.signature': 'The Lola Team',
  'about.imageAlt': 'Cozy interior of the Lola restaurant',

  'experience.line1': 'Eat well.',
  'experience.line2': 'Drink well.',
  'experience.line3': 'Stay awhile.',
  'experience.description':
    'Every plate tells a story. Every glass an experience. Every evening a memory.',

  'menu.title': 'Menu',
  'menu.subtitle': 'Seasonal. Regional. Made with love.',
  'menu.viewFull': 'View Full Menu',
  'menu.downloadPdf': 'Menu as PDF',
  'menu.dietary.veg': 'Vegetarian',
  'menu.dietary.vegan': 'Vegan',
  'menu.dietary.gf': 'Gluten-Free',

  'featured.title': 'Signature Dishes',
  'featured.subtitle': 'The dishes that define Lola',

  'gallery.title': 'Gallery',
  'gallery.subtitle': 'A glimpse into our world',

  'reservations.title': 'Reservations',
  'reservations.subtitle': 'We look forward to your visit',
  'reservations.step.guests': 'Guests',
  'reservations.step.date': 'Date',
  'reservations.step.time': 'Time',
  'reservations.step.details': 'Your details',
  'reservations.guests': 'Guests',
  'reservations.guest': 'Guest',
  'reservations.guests.plural': 'Guests',
  'reservations.chooseDate': 'Choose date',
  'reservations.selectTime': 'Select time',
  'reservations.name': 'Name',
  'reservations.email': 'Email',
  'reservations.phone': 'Phone',
  'reservations.specialRequests': 'Special requests',
  'reservations.specialRequestsPlaceholder': 'Allergies, occasions, seating preferences…',
  'reservations.confirm': 'Confirm Reservation',
  'reservations.back': 'Back',
  'reservations.next': 'Next',
  'reservations.confirmation.title': 'Your table is reserved',
  'reservations.confirmation.message':
    'Your table at Lola is reserved. We look forward to seeing you.',
  'reservations.confirmation.details': 'Reservation details',
  'reservations.confirmation.new': 'New reservation',
  'reservations.error.name': 'Please enter your name',
  'reservations.error.email': 'Please enter a valid email address',
  'reservations.error.phone': 'Please enter a valid phone number',
  'reservations.error.date': 'Please select a date',
  'reservations.error.time': 'Please select a time',

  'atmosphere.line1': 'Come for dinner.',
  'atmosphere.line2': 'Stay for the night.',

  'location.title': 'Location & Hours',
  'location.address': 'Address',
  'location.street': 'Winterberg 24',
  'location.city': '10115 Winterberg',
  'location.country': 'Germany',
  'location.hours': 'Opening Hours',
  'location.monday': 'Monday',
  'location.tueThu': 'Tuesday — Thursday',
  'location.friSat': 'Friday — Saturday',
  'location.sunday': 'Sunday',
  'location.closed': 'Closed',
  'location.phone': 'Phone',
  'location.email': 'Email',
  'location.instagram': 'Instagram',
  'location.getDirections': 'Get Directions',
  'location.contact': 'Contact',

  'footer.tagline': 'Food. Wine. Good Times.',
  'footer.menu': 'Menu',
  'footer.reservations': 'Reservations',
  'footer.about': 'About',
  'footer.contact': 'Contact',
  'footer.instagram': 'Instagram',
  'footer.address': 'Address',
  'footer.hours': 'Opening Hours',
  'footer.imprint': 'Imprint',
  'footer.privacy': 'Privacy',
  'footer.copyright': '© LOLA Restaurant 2026',
};

export const translations: { de: TranslationDict; en: TranslationDict } = { de, en };

export type { TranslationDict };
