import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type HeroSlide = {
  id: number;
  type: "image" | "gif" | "video";
  src: string;
  poster?: string;
  alt?: string;
};

const slides: HeroSlide[] = [
  { 
    id: 1, 
    type: "image", 
    src: "/hero_01.webp", 
    poster: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1600&q=80",
    alt: "B2B Creative Production visual 1"
  },
  { 
    id: 2, 
    type: "image", 
    src: "/hero_02.webp", 
    poster: "https://images.unsplash.com/photo-1542617651-7b003a27a419?w=1600&q=80",
    alt: "B2B Creative Production visual 2"
  },
  { 
    id: 3, 
    type: "video", 
    src: "https://assets.mixkit.co/videos/preview/mixkit-opening-a-metal-makeup-canister-41584-large.mp4", 
    poster: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80",
    alt: "B2B Creative Production product video"
  }
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  return (
    <div 
      className="relative w-full h-[150px] sm:h-[180px] lg:h-[240px] flex items-center justify-center overflow-hidden rounded-[18px] mb-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Buttons */}
      <button 
        onClick={goPrev} 
        className="absolute left-3 md:left-4 z-40 w-8 h-8 md:w-[36px] md:h-[36px] rounded-full bg-white/85 backdrop-blur shadow-sm flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer"
        aria-label="Previous banner"
      >
        <ChevronLeft className="w-5 h-5 ml-[-1px]" />
      </button>
      
      <button 
        onClick={goNext} 
        className="absolute right-3 md:right-4 z-40 w-8 h-8 md:w-[36px] md:h-[36px] rounded-full bg-white/85 backdrop-blur shadow-sm flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer"
        aria-label="Next banner"
      >
        <ChevronRight className="w-5 h-5 mr-[-1px]" />
      </button>

      {/* Cards Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + slides.length) % slides.length;
          const isNext = index === (activeIndex + 1) % slides.length;
          
          let zIndex = 0;
          let opacity = 0;
          let filter = 'brightness(1)';
          let pointerEvents = 'none';
          
          let positionStyle: React.CSSProperties = {
             left: '50%',
             transform: 'translateX(-50%) scale(0.9)',
          };

          if (isActive) {
            zIndex = 30;
            opacity = 1;
            filter = 'brightness(1)';
            pointerEvents = 'auto';
            positionStyle = {
               left: '50%',
               transform: 'translateX(-50%) scale(1)'
            };
          } else if (isPrev) {
            zIndex = 10;
            opacity = 0.6;
            filter = 'brightness(0.6)';
            pointerEvents = 'auto';
            positionStyle = {
               left: '0',
               transform: 'translateX(-8%) scale(0.93)'
            };
          } else if (isNext) {
            zIndex = 10;
            opacity = 0.6;
            filter = 'brightness(0.6)';
            pointerEvents = 'auto';
            positionStyle = {
               right: '0',
               transform: 'translateX(8%) scale(0.93)'
            };
          }

          return (
            <div 
              key={slide.id} 
              className="absolute h-full w-[82%] sm:w-[86%] block overflow-hidden rounded-[18px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-sm cursor-pointer"
              style={{
                zIndex,
                opacity,
                filter,
                pointerEvents: pointerEvents as any,
                ...positionStyle
              }}
              onClick={() => {
                if (isPrev) goPrev();
                if (isNext) goNext();
              }}
            >
              {slide.type === 'video' ? (
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster={slide.poster} 
                  className="w-full h-full object-cover" 
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <img 
                  src={slide.src} 
                  alt={slide.alt || "Creative production banner"} 
                  className="w-full h-full object-cover" 
                  loading={isActive ? "eager" : "lazy"}
                  draggable={false}
                  onError={(e) => {
                    if (slide.poster && e.currentTarget.src !== slide.poster) {
                      e.currentTarget.src = slide.poster;
                    }
                  }}
                />
              )}

              {/* Dark overlay for side/back slides */}
              {!isActive && (
                <div className="absolute inset-0 bg-black/35 z-10 transition-opacity duration-300" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

