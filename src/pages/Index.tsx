
import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, Dribbble, ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-600' },
    { name: 'Dribbble', icon: Dribbble, url: '#', color: 'hover:text-pink-400' },
  ];

  const carouselImages = [
    'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Social Links - Right Side */}
      <div className="fixed top-8 right-8 z-40">
        <div className="flex flex-col items-end gap-1 text-xs">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className={`text-black ${social.color} transition-colors font-light tracking-wide`}
            >
              {social.name.toLowerCase()}
            </a>
          ))}
        </div>
      </div>

      {/* Abstract sketch background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="absolute top-40 left-20 w-64 h-64 text-black" viewBox="0 0 200 200" fill="none">
          <path d="M40,60 Q80,20 120,60 T200,60" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="50" cy="90" r="16" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M140,100 L180,80 L170,130 Z" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
        
        <svg className="absolute bottom-40 right-20 w-48 h-48 text-black" viewBox="0 0 150 150" fill="none">
          <path d="M20,75 Q60,40 100,75 Q140,110 180,75" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="40" y="40" width="30" height="30" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(45 55 55)" />
        </svg>
      </div>

      <div className="container mx-auto px-8 py-16">
        {/* Main Typography Section */}
        <section className="mb-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light text-black leading-none mb-8 tracking-tight">
              Hi, Welcome to the
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-black leading-none mb-12 tracking-tight">
              world of Jeet Karia
            </h2>
            
            <div className="mt-24">
              <p className="text-lg text-gray-600 font-light max-w-md">
                <span className="text-black font-normal">CREATIVE DESIGNER</span><br />
                Designing usability for Web3, AI<br />
                and Tech Startups.
              </p>
            </div>
          </div>
        </section>

        {/* Photo Carousel Section */}
        <section className="relative max-w-5xl mx-auto mt-32">
          {/* Hand-drawn sketch background */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
              <path d="M50,100 Q200,50 350,100 Q500,150 650,100 Q750,50 800,100" 
                    stroke="#000000" strokeWidth="2" fill="none" />
              <path d="M0,200 Q150,180 300,200 Q450,220 600,200 Q750,180 800,200" 
                    stroke="#000000" strokeWidth="1.5" fill="none" />
              <path d="M100,300 Q250,280 400,300 Q550,320 700,300" 
                    stroke="#000000" strokeWidth="1" fill="none" />
              
              <circle cx="100" cy="80" r="3" fill="#000000" />
              <circle cx="700" cy="120" r="2" fill="#000000" />
              <rect x="200" y="320" width="8" height="8" fill="none" stroke="#000000" strokeWidth="1" transform="rotate(45 204 324)" />
              <polygon points="600,320 608,340 592,340" fill="none" stroke="#000000" strokeWidth="1" />
            </svg>
          </div>

          {/* Carousel Container */}
          <div className="relative bg-white rounded-none shadow-2xl border border-gray-100">
            <div className="p-8">
              <h2 className="text-2xl font-light text-black mb-8 tracking-wide">
                VISUAL WORK
              </h2>
              
              <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out"
                     style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {carouselImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-64 md:h-96 object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 transition-all duration-300 ${
                      index === currentSlide ? 'bg-black w-8' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-32 text-gray-400 font-light text-sm">
          <p>© 2024 Creative Portfolio. Made with passion.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
