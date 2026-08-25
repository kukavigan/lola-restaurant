export type Dietary = 'veg' | 'vegan' | 'gf';

export interface MenuItem {
  name: string;
  descriptionDe: string;
  descriptionEn: string;
  price: string;
  dietary?: Dietary[];
}

export interface MenuCategory {
  id: string;
  labelDe: string;
  labelEn: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    id: 'starters',
    labelDe: 'Vorspeisen',
    labelEn: 'Starters',
    items: [
      {
        name: 'Burrata',
        descriptionDe: 'Tomaten, Basilikumöl, gereifter Balsamico',
        descriptionEn: 'Tomatoes, basil oil, aged balsamic',
        price: '€14',
        dietary: ['veg'],
      },
      {
        name: 'Beef Tartare',
        descriptionDe: 'Rinderfilet, Kapern, Senf, Eigelb, Crostini',
        descriptionEn: 'Beef fillet, capers, mustard, egg yolk, crostini',
        price: '€18',
        dietary: ['gf'],
      },
      {
        name: 'Ziegenkäse Crostini',
        descriptionDe: 'Geröstetes Brot, Ziegenkäse, Honig, Walnüsse',
        descriptionEn: 'Toasted bread, goat cheese, honey, walnuts',
        price: '€12',
        dietary: ['veg'],
      },
      {
        name: 'Garnelen Ceviche',
        descriptionDe: 'Limette, Rote Zwiebel, Koriander, Chili',
        descriptionEn: 'Lime, red onion, coriander, chili',
        price: '€16',
        dietary: ['gf'],
      },
    ],
  },
  {
    id: 'mains',
    labelDe: 'Hauptgerichte',
    labelEn: 'Main Courses',
    items: [
      {
        name: 'Beef Tenderloin',
        descriptionDe: 'Kartoffelpüree, saisonales Gemüse, Rotweinsauce',
        descriptionEn: 'Potato purée, seasonal vegetables, red wine jus',
        price: '€32',
      },
      {
        name: 'Dorade Royal',
        descriptionDe: 'Gegrillte Goldbrasse, Fenchel, Zitrone, Olivenöl',
        descriptionEn: 'Grilled sea bream, fennel, lemon, olive oil',
        price: '€28',
        dietary: ['gf'],
      },
      {
        name: 'Confit Entenkeule',
        descriptionDe: 'Rotkohl, Kartoffelknödel, Portweinsauce',
        descriptionEn: 'Red cabbage, potato dumpling, port wine sauce',
        price: '€26',
      },
      {
        name: 'Gemüserisotto',
        descriptionDe: 'Safran, Parmesan, saisonales Gemüse, Trüffelöl',
        descriptionEn: 'Saffron, parmesan, seasonal vegetables, truffle oil',
        price: '€22',
        dietary: ['veg', 'gf'],
      },
    ],
  },
  {
    id: 'pasta',
    labelDe: 'Pasta',
    labelEn: 'Pasta',
    items: [
      {
        name: 'Truffle Tagliolini',
        descriptionDe: 'Frische Pasta, Parmesan, schwarzer Trüffel',
        descriptionEn: 'Fresh pasta, parmesan, black truffle',
        price: '€24',
        dietary: ['veg'],
      },
      {
        name: 'Ravioli alla Ricotta',
        descriptionDe: 'Ricotta, Spinat, Salbeibutter, Parmesan',
        descriptionEn: 'Ricotta, spinach, sage butter, parmesan',
        price: '€19',
        dietary: ['veg'],
      },
      {
        name: 'Spaghetti alle Vongole',
        descriptionDe: 'Venusmuscheln, Weißwein, Knoblauch, Chili',
        descriptionEn: 'Clams, white wine, garlic, chili',
        price: '€21',
      },
      {
        name: 'Linguine al Pesto',
        descriptionDe: 'Basilikumpesto, Pinienkerne, Pecorino',
        descriptionEn: 'Basil pesto, pine nuts, pecorino',
        price: '€17',
        dietary: ['veg'],
      },
    ],
  },
  {
    id: 'desserts',
    labelDe: 'Desserts',
    labelEn: 'Desserts',
    items: [
      {
        name: 'Tiramisu',
        descriptionDe: 'Espresso, Mascarpone, Kakao',
        descriptionEn: 'Espresso, mascarpone, cocoa',
        price: '€9',
        dietary: ['veg'],
      },
      {
        name: 'Crème Brûlée',
        descriptionDe: 'Vanille, karamellisierte Zuckerkruste, Beeren',
        descriptionEn: 'Vanilla, caramelized sugar crust, berries',
        price: '€8',
        dietary: ['veg', 'gf'],
      },
      {
        name: 'Schokoladenfondant',
        descriptionDe: 'Flüssiger Kern, Vanilleeis, Himbeeren',
        descriptionEn: 'Molten center, vanilla ice cream, raspberries',
        price: '€10',
        dietary: ['veg'],
      },
      {
        name: 'Zitronensorbet',
        descriptionDe: 'Zitrone, Minze, Baiser',
        descriptionEn: 'Lemon, mint, meringue',
        price: '€7',
        dietary: ['vegan', 'gf'],
      },
    ],
  },
  {
    id: 'drinks',
    labelDe: 'Getränke',
    labelEn: 'Drinks',
    items: [
      {
        name: 'Lola Negroni',
        descriptionDe: 'Gin, Campari, roter Wermut, Orange',
        descriptionEn: 'Gin, Campari, red vermouth, orange',
        price: '€12',
      },
      {
        name: 'Espresso Martini',
        descriptionDe: 'Wodka, Kaffee, Kahlúa, Kakaobohnen',
        descriptionEn: 'Vodka, coffee, Kahlúa, cocoa beans',
        price: '€11',
      },
      {
        name: 'Gin & Tonic',
        descriptionDe: 'Botanical Gin, Tonic Water, Zitrone',
        descriptionEn: 'Botanical gin, tonic water, lemon',
        price: '€10',
      },
      {
        name: 'Lola Spritz',
        descriptionDe: 'Aperol, Prosecco, Soda, Orange',
        descriptionEn: 'Aperol, prosecco, soda, orange',
        price: '€9',
      },
    ],
  },
  {
    id: 'wine',
    labelDe: 'Wein',
    labelEn: 'Wine',
    items: [
      {
        name: 'Barolo Riserva 2018',
        descriptionDe: 'Piemont, Italien — vollmundig, Tannin',
        descriptionEn: 'Piedmont, Italy — full-bodied, tannic',
        price: '€68',
      },
      {
        name: 'Châteauneuf-du-Pape 2019',
        descriptionDe: 'Rhône, Frankreich — würzig, elegant',
        descriptionEn: 'Rhône, France — spicy, elegant',
        price: '€54',
      },
      {
        name: 'Riesling Kabinett 2022',
        descriptionDe: 'Mosel, Deutschland — frisch, mineralisch',
        descriptionEn: 'Mosel, Germany — crisp, mineral',
        price: '€32',
      },
      {
        name: 'Chablis Premier Cru 2021',
        descriptionDe: 'Burgund, Frankreich — Chardonnay, Eleganz',
        descriptionEn: 'Burgundy, France — Chardonnay, elegance',
        price: '€48',
      },
    ],
  },
];

export const DIETARY_LABELS: Record<Dietary, { de: string; en: string }> = {
  veg: { de: 'V', en: 'V' },
  vegan: { de: 'VG', en: 'VG' },
  gf: { de: 'GF', en: 'GF' },
};
