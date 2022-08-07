import './App.css';

import Header from './Header';
import TestimonialSection from './TestimonialSection';
import HeroSection from './HeroSection';
import MiddleSection from './MiddleSection';
import FooterSection from './FooterSection';
import BottomSection from './BottomSection';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MiddleSection />
        <TestimonialSection />
      </main>
      <BottomSection />
      <FooterSection />
    </>
  );
}

export default App;