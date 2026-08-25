import { LanguageProvider } from '@/i18n/LanguageContext';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Menu from '@/components/Menu';
import FeaturedDishes from '@/components/FeaturedDishes';
import Gallery from '@/components/Gallery';
import Reservations from '@/components/Reservations';
import Atmosphere from '@/components/Atmosphere';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import MobileReserveCTA from '@/components/MobileReserveCTA';

function App() {
  return (
    <LanguageProvider>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Menu />
        <FeaturedDishes />
        <Gallery />
        <Reservations />
        <Atmosphere />
        <Location />
      </main>
      <Footer />
      <MobileReserveCTA />
    </LanguageProvider>
  );
}

export default App;
