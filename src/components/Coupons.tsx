import { useState } from 'react';
import { Gift, Coffee, Film, Heart, Utensils, Star, Sparkles, ArrowRight } from 'lucide-react';

interface CouponsProps {
  onNext: () => void;
}

function Coupons({ onNext }: CouponsProps) {
  const [redeemedCoupons, setRedeemedCoupons] = useState<number[]>([]);
  const [activeCoupon, setActiveCoupon] = useState<number | null>(null);

  const coupons = [
    {
      icon: Utensils,
      title: 'Dinner Date',
      description: 'One romantic dinner at your favorite restaurant',
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: Film,
      title: 'Movie Night',
      description: 'Movie marathon of your choice with snacks',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Coffee,
      title: 'Coffee & Talk',
      description: 'Unlimited coffee dates and deep conversations',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Heart,
      title: 'Unlimited Hugs',
      description: 'Redeemable anytime, anywhere, forever',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: Gift,
      title: 'Surprise Gift',
      description: 'A special surprise just for you',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Star,
      title: 'Your Wish',
      description: 'One wish granted, no questions asked',
      color: 'from-yellow-500 to-amber-500',
    },
  ];

  const handleCouponClick = (index: number) => {
    if (!redeemedCoupons.includes(index)) {
      setActiveCoupon(index);
      setTimeout(() => {
        setRedeemedCoupons([...redeemedCoupons, index]);
        setActiveCoupon(null);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 py-20 px-4 relative overflow-hidden">
      <Sparkles className="absolute top-10 right-10 w-12 h-12 text-pink-400 animate-spin-slow" />
      <Sparkles className="absolute bottom-10 left-10 w-16 h-16 text-rose-400 animate-spin-slow" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Gift className="w-16 h-16 text-rose-500 mx-auto mb-4 animate-bounce" />
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600 mb-4">
            Love Coupons
          </h2>
          <p className="text-xl text-rose-700">Click to redeem these special treats</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coupons.map((coupon, index) => {
            const Icon = coupon.icon;
            const isRedeemed = redeemedCoupons.includes(index);
            const isActive = activeCoupon === index;

            return (
              <div
                key={index}
                onClick={() => handleCouponClick(index)}
                className={`relative group cursor-pointer transform transition-all duration-500 ${
                  isActive ? 'scale-110 rotate-6' : isRedeemed ? 'scale-95 opacity-50' : 'hover:scale-105 hover:-rotate-2'
                }`}
              >
                <div
                  className={`bg-gradient-to-br ${coupon.color} p-6 rounded-2xl shadow-2xl text-white relative overflow-hidden ${
                    !isRedeemed ? 'hover:shadow-3xl' : ''
                  }`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>

                  <div className="relative z-10">
                    <Icon className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{coupon.title}</h3>
                    <p className="text-white/90">{coupon.description}</p>

                    {isRedeemed && (
                      <div className="mt-4 inline-block bg-white text-rose-600 px-4 py-2 rounded-full font-bold">
                        Redeemed!
                      </div>
                    )}

                    {isActive && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl animate-ping">❤️</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Continue to My Letter
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Coupons;
