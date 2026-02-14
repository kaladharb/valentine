import { useState } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Coupons from './components/Coupons';
import Letter from './components/Letter';
import Closing from './components/Closing';
import MatrixRain from './components/MatrixRain';

type Section = 'hero' | 'gallery' | 'coupons' | 'letter' | 'closing';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('hero');
  const [transitioning, setTransitioning] = useState(false);

  const handleYesClick = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentSection('gallery');
      setTransitioning(false);
    }, 2000);
  };

  const nextSection = () => {
    const sections: Section[] = ['hero', 'gallery', 'coupons', 'letter', 'closing'];
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentSection(sections[currentIndex + 1]);
        setTransitioning(false);
      }, 800);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <MatrixRain show={currentSection === 'hero'} />

      <div
        className={`transition-opacity duration-1000 ${
          transitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {currentSection === 'hero' && <Hero onYesClick={handleYesClick} />}
        {currentSection === 'gallery' && <Gallery onNext={nextSection} />}
        {currentSection === 'coupons' && <Coupons onNext={nextSection} />}
        {currentSection === 'letter' && <Letter onNext={nextSection} />}
        {currentSection === 'closing' && <Closing />}
      </div>

      {transitioning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="hearts-explosion">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="heart-particle absolute text-4xl animate-float-away"
                style={{
                  left: '50%',
                  top: '50%',
                  animationDelay: `${i * 0.1}s`,
                  transform: `rotate(${i * 18}deg) translateY(-${i * 20}px)`,
                }}
              >
                ❤️
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
