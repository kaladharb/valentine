import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface HeroProps {
  onYesClick: () => void;
}

function Hero({ onYesClick }: HeroProps) {
  const [noAttempts, setNoAttempts] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesButtonSize, setYesButtonSize] = useState(1);

  const handleNoHover = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setNoButtonPosition({ x: randomX, y: randomY });
    setNoAttempts(prev => prev + 1);
    setYesButtonSize(prev => Math.min(prev + 0.2, 2.5));
  };

  useEffect(() => {
    if (noAttempts >= 5) {
      onYesClick();
    }
  }, [noAttempts, onYesClick]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 animate-pulse"
            size={Math.random() * 40 + 20}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 mb-8 animate-fade-in">
          Nenu ante istama kadha...?
        </h1>

        <div className="flex flex-col items-center gap-6 mt-12">
          <button
            onClick={onYesClick}
            className="px-12 py-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-2xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-300 hover:from-rose-600 hover:to-pink-600"
            style={{
              transform: `scale(${yesButtonSize})`,
              transition: 'transform 0.3s ease',
            }}
          >
            chalaaa istam..! 💖
          </button>

          <button
            onMouseEnter={handleNoHover}
            onClick={handleNoHover}
            className="px-8 py-4 bg-gray-400 text-white text-xl font-bold rounded-full shadow-lg hover:bg-gray-500 transition-all duration-300 absolute"
            style={{
              left: noAttempts === 0 ? '50%' : `${noButtonPosition.x}px`,
              top: noAttempts === 0 ? 'calc(50% + 100px)' : `${noButtonPosition.y}px`,
              transform: noAttempts === 0 ? 'translateX(-50%)' : 'none',
              transition: 'all 0.3s ease',
            }}
          >
            ledh istam ledhuuuuu
          </button>
        </div>

        {noAttempts > 0 && (
          <p className="mt-8 text-rose-600 text-xl font-semibold animate-bounce">
            {noAttempts === 1 && "Are you sure? 🥺"}
            {noAttempts === 2 && "Really? Try clicking Yes! 💕"}
            {noAttempts === 3 && "The Yes button is getting bigger... 👀"}
            {noAttempts >= 4 && "Just say Yes already! 😊"}
          </p>
        )}
      </div>
    </div>
  );
}

export default Hero;
