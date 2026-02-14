import { useState, useEffect } from "react";

function Closing() {
  const images = [
    "public/images/5.jpeg",
    "public/images/8.jpeg",
    "public/images/9.jpeg",
    "public/images/10.jpeg",
    "public/images/7.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const HeartPair = ({ className }) => (
    <div className={`absolute ${className} heart-roam`}>
      <svg
        viewBox="0 0 800 400"
        width="350"
        height="220"
        className="double-heart"
      >
        {/* LEFT HEART */}
        <path
          d="M250,200 
             C250,120 150,120 150,200
             C150,270 250,330 250,360
             C250,330 350,270 350,200
             C350,120 250,120 250,200"
          fill="none"
          stroke="hotpink"
          strokeWidth="3"
        />

        {/* RIGHT HEART */}
        <path
          d="M550,200 
             C550,120 450,120 450,200
             C450,270 550,330 550,360
             C550,330 650,270 650,200
             C650,120 550,120 550,200"
          fill="none"
          stroke="deeppink"
          strokeWidth="3"
        />

        {/* ❤️ HEARTBEAT CONNECTOR */}
        <path
          d="M350 200 
             L380 200 
             L400 170 
             L420 230 
             L440 180 
             L460 200 
             L450 200"
          fill="none"
          stroke="white"
          strokeWidth="3"
          className="ecg-line"
        />

        {/* TEXT */}
        <text x="250" y="220" textAnchor="middle" fontSize="22" fill="white">
          KALADHAR
        </text>

        <text x="550" y="220" textAnchor="middle" fontSize="22" fill="white">
          PRIYA
        </text>
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-600 via-rose-600 to-purple-700 relative overflow-hidden flex items-center justify-center">
      {/* 💞 FIVE ROAMING HEART PAIRS */}
      <HeartPair className="roam1" />
      <HeartPair className="roam2" />
      <HeartPair className="roam3" />
      <HeartPair className="roam4" />
      <HeartPair className="roam5" />

      {/* 💌 IMAGE SLIDER */}
      <div className="relative z-20 w-[320px] h-[420px] overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className="absolute w-full h-full transition-all duration-700 ease-in-out"
            style={{
              transform: current === index ? "scale(1)" : "scale(0.8)",
              opacity: current === index ? 1 : 0,
            }}
          >
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-4 shadow-2xl border border-white/30">
              <img
                src={img}
                alt="memory"
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
        .double-heart {
          animation: heartbeat 2s infinite ease-in-out;
          filter: drop-shadow(0 0 10px hotpink);
        }

        @keyframes heartbeat {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .ecg-line {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: pulseLine 2s linear infinite;
        }

        @keyframes pulseLine {
          to { stroke-dashoffset: 0; }
        }

        /* DIFFERENT ROAM PATHS */
        .heart-roam {
          animation-duration: 30s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        .roam1 { animation-name: roamA; }
        .roam2 { animation-name: roamB; }
        .roam3 { animation-name: roamC; }
        .roam4 { animation-name: roamD; }
        .roam5 { animation-name: roamE; }

        @keyframes roamA {
          0% { top:0%; left:0%; }
          50% { top:60%; left:70%; }
          100% { top:0%; left:0%; }
        }

        @keyframes roamB {
          0% { top:70%; left:10%; }
          50% { top:10%; left:60%; }
          100% { top:70%; left:10%; }
        }

        @keyframes roamC {
          0% { top:40%; left:80%; }
          50% { top:20%; left:10%; }
          100% { top:40%; left:80%; }
        }

        @keyframes roamD {
          0% { top:10%; left:50%; }
          50% { top:80%; left:30%; }
          100% { top:10%; left:50%; }
        }

        @keyframes roamE {
          0% { top:80%; left:80%; }
          50% { top:30%; left:20%; }
          100% { top:80%; left:80%; }
        }
        `}
      </style>
    </div>
  );
}

export default Closing;
