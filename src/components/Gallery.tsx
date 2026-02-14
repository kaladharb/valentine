import { Heart, ArrowRight } from "lucide-react";

interface GalleryProps {
  onNext: () => void;
}

function Gallery({ onNext }: GalleryProps) {
  const memories = [
    { image: "images/2.jpeg", caption: "Making memories, one day at a time" },
    { image: "images/7.jpeg", caption: "Holding hearts, not just hands" },
    {
      image: "images/1.jpeg",
      caption: "Ice Cream dates and sweet conversations",
    },
    { image: "images/3.jpeg", caption: "Every moment with you is magic" },
    { image: "images/6.jpeg", caption: "Making memories, one day at a time" },
    { image: "images/4.jpeg", caption: "You make everything better" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 py-20 px-4 overflow-hidden">
      {/* Inline animation styles */}
      <style>
        {`
          @keyframes floatUp {
            0% {
              transform: translateY(120vh) scale(0.8);
              opacity: 0;
            }
            20% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(-30vh) scale(1.2);
              opacity: 0;
            }
          }
        `}
      </style>

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(40)].map((_, i) => (
          <Heart
            key={i}
            size={Math.random() * 28 + 18}
            strokeWidth={2.5}
            fill="currentColor"
            className="absolute text-rose-400 drop-shadow-[0_0_12px_rgba(244,63,94,0.5)]"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `floatUp ${Math.random() * 12 + 8}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.4 + 0.3,
              transform: `scale(${Math.random() * 0.8 + 0.6})`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <Heart className="w-16 h-16 text-rose-500 mx-auto mb-4 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-4">
            Our Beautiful Journey
          </h2>
          <p className="text-xl text-rose-700">
            Every moment with you is a treasure
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="group transform transition-all duration-500 hover:-translate-y-2 hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-3 rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="absolute -top-4 -right-4 w-12 h-12">
                  <Heart
                    className="w-full h-full text-rose-400 fill-rose-400 animate-pulse"
                    strokeWidth={2.5}
                  />
                </div>

                <img
                  src={memory.image}
                  alt={memory.caption}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div className="mt-3 text-center">
                  <p className="text-rose-700 font-semibold italic">
                    {memory.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            onClick={onNext}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Continue Our Story
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
