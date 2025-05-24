
import React, { useState, useEffect } from 'react';
import { Instagram, Twitter, Facebook, Youtube, ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-500' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-600' },
    { name: 'YouTube', icon: Youtube, url: '#', color: 'hover:text-red-500' },
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Abstract sketch background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-20 left-10 w-32 h-32 text-gray-200 opacity-30" viewBox="0 0 100 100" fill="none">
          <path d="M20,30 Q40,10 60,30 T100,30" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="25" cy="45" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M70,50 L90,40 L85,65 Z" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
        
        <svg className="absolute top-40 right-20 w-24 h-24 text-gray-200 opacity-25" viewBox="0 0 100 100" fill="none">
          <path d="M10,50 Q30,20 50,50 Q70,80 90,50" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="20" y="20" width="15" height="15" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(45 27.5 27.5)" />
        </svg>

        <svg className="absolute bottom-40 left-1/4 w-20 h-20 text-gray-200 opacity-20" viewBox="0 0 100 100" fill="none">
          <path d="M30,30 L70,30 L50,70 Z" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="50" cy="20" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-4 tracking-wide">
              Creative
              <span className="block text-3xl md:text-4xl text-gray-600 font-extralight mt-2">
                Portfolio
              </span>
            </h1>
            {/* Decorative sketch line */}
            <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-4" viewBox="0 0 120 20" fill="none">
              <path d="M10,10 Q60,2 110,10" stroke="#9CA3AF" strokeWidth="1" fill="none" opacity="0.6" />
            </svg>
          </div>
          <p className="text-gray-600 text-lg font-light mt-8 max-w-md mx-auto">
            Connecting through creativity and inspiration
          </p>
        </header>

        {/* Social Media Links */}
        <section className="mb-20">
          <div className="flex justify-center items-center gap-8 md:gap-12">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className={`group flex flex-col items-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative p-4 bg-white rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <IconComponent size={28} className="text-gray-700 group-hover:text-current transition-colors duration-300" />
                    {/* Sketch circle overlay */}
                    <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-30 transition-opacity duration-300" viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="2,2" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600 mt-3 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        {/* Photo Carousel with Sketch Background */}
        <section className="relative max-w-4xl mx-auto">
          {/* Hand-drawn sketch background */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
              {/* Abstract sketch elements behind carousel */}
              <path d="M50,100 Q200,50 350,100 Q500,150 650,100 Q750,50 800,100" 
                    stroke="#E5E7EB" strokeWidth="2" fill="none" opacity="0.4" />
              <path d="M0,200 Q150,180 300,200 Q450,220 600,200 Q750,180 800,200" 
                    stroke="#E5E7EB" strokeWidth="1.5" fill="none" opacity="0.3" />
              <path d="M100,300 Q250,280 400,300 Q550,320 700,300" 
                    stroke="#E5E7EB" strokeWidth="1" fill="none" opacity="0.25" />
              
              {/* Scattered abstract shapes */}
              <circle cx="100" cy="80" r="3" fill="#E5E7EB" opacity="0.3" />
              <circle cx="700" cy="120" r="2" fill="#E5E7EB" opacity="0.4" />
              <rect x="200" y="320" width="8" height="8" fill="none" stroke="#E5E7EB" strokeWidth="1" opacity="0.3" transform="rotate(45 204 324)" />
              <polygon points="600,320 608,340 592,340" fill="none" stroke="#E5E7EB" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>

          {/* Carousel Container */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-light text-gray-800 text-center mb-8">
              Visual Journey
            </h2>
            
            <div className="relative overflow-hidden rounded-xl">
              <div className="flex transition-transform duration-500 ease-in-out"
                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {carouselImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-64 md:h-80 object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
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
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-gray-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Additional sketch elements around carousel */}
          <svg className="absolute -top-8 -left-8 w-16 h-16 text-gray-300 opacity-40" viewBox="0 0 60 60" fill="none">
            <path d="M10,30 Q30,10 50,30 Q30,50 10,30" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
          <svg className="absolute -bottom-6 -right-6 w-12 h-12 text-gray-300 opacity-30" viewBox="0 0 50 50" fill="none">
            <rect x="10" y="10" width="30" height="30" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(30 25 25)" />
          </svg>
        </section>

        {/* Footer */}
        <footer className="text-center mt-20 text-gray-500 font-light">
          <p>© 2024 Creative Portfolio. Made with passion.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
