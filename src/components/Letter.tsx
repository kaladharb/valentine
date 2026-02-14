import { useState, useEffect } from "react";
import { Mail, ArrowRight } from "lucide-react";

interface LetterProps {
  onNext: () => void;
}

function Letter({ onNext }: LetterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [showButton, setShowButton] = useState(false);

  const fullText = `Heyy Priya Ga luvvvv you nee😚😚,
idhi manchiga chadhuvu 👇,

Naa jeevitham lo nuvvu oka andamaina miracle la vachav, assal yela anipisthadi appud appud nuv senior nen juniorrrr... Okkksarii arey how ra 😁 but starting lo neek msg chesthunna prathisari nak edho theliyani anandham inka inka matladali ani, but senior junior ane unde...adhii chinnaga chinnga friendship ayindhi ala ala jargipoyindi.. Nuv clg lo kanipisthe ma frnds nannu pilusthunteee nen ochi chusthundee abhaa ah feelll balee undedhi... Idhi kuda koncham koncham marindi final ga dare chesa cheppeysa but nuv oppukuntav ane nammakam thonee cheppina anuko😌😉 , pedda show candidate la nak tym kavali ata😂 Sare lee anukunna papa padipoyindii lee iga ani silent unde... Yeahhhh finally you said that beautiful words from your side on my birthday so there is no chance to forgot when you have proposed me😁😅, so manaki dhinigurinchi m godva radh  and but after that we faced some issues with your bleedy classmates 🙂, iga ayipoyindi anukunna but you proved me wrong malli msg ochindi iga appude fix ayina yedii m ayina ninnu odhiledh prasakther ledh ani so iga ala ala frst meet kuda jargindi adhii mathram crazyyy assal... 😁 assal nammaleka pothunneee ntii nena.. Nak kuda lover undha ani so finally from that day to now  chala chala happy unde.🥰

Ninnu choodagane naa heart automatic ga happy mode lo ki vellipothuntadii

Naa girlfriend kaadhu, naa best friend nuvve. Naa silent moments ni kuda ardham chesukune oka andamaina manishi nuvvu. Naa chinna chinna happiness ki kuda nuvvu value isthav. Nuvvu naa life lo unanduku prathi roju thank you cheppali anipisthundi.😚😉


Neetho unna prathi sari baguntundi. Nee pakkana unna kshanalu naa life lo most peaceful moments😇.  Nee presence matrame chaalu, naa day antha special ayipothundi🥳

Neetho ila ne happy ga untu☺, life motham nadavali ani kalalu kantunna. Manchi moments, chinna fights👊, pedda smiles 😸 anni nee tho ne share cheskovali ani korukuntunna. Adi antha nijam ga jaragali ani prathi roju devudini korukuntunna.

LOVE YOU CHOOO MUCHH PRIYA GADUUU😚😚😚

Thank you for choosing me. Thank you for being you.

Forever yours,
With all my heart ❤️`;

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 5;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowButton(true), 1000);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-pink-50 py-20 px-4 flex items-center justify-center">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Mail className="w-16 h-16 text-rose-500 mx-auto mb-4 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600 mb-4">
            E Letter neeke Mentaldhana, chala kastapadi rasa chud
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-rose-200 relative">
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-rose-400 rounded-full flex items-center justify-center shadow-xl">
            <span className="text-3xl">💌</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <pre className="font-serif text-lg text-gray-800 whitespace-pre-wrap leading-relaxed">
              {displayedText}
              <span className="animate-pulse">|</span>
            </pre>
          </div>
        </div>

        {showButton && (
          <div className="text-center mt-12 animate-fade-in">
            <button
              onClick={onNext}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300"
            >
              One More Surprise
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Letter;
