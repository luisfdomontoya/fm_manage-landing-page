import './App.css';
import Header from './Header';
import TestimonialSection from './TestimonialSection';
import HeroSection from './HeroSection';
import MiddleSection from './MiddleSection';
import FooterSection from './FooterSection';
import BottomSection from './BottomSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MiddleSection />
      <TestimonialSection />
      <BottomSection />
      <FooterSection />
    </div>
  );
}

export default App;