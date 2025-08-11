import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const GameSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const games = [
    {
      id: 1,
      title: "Apex Legends",
      developer: "EA Sports",
      image: "https://e1.pxfuel.com/desktop-wallpaper/517/374/desktop-wallpaper-apex-legends-mobile-introduces-new-legend-fade.jpg",
      description: "Battle royale with innovative EA Javelin anticheat detection systems",
      status: "Protected"
    },
    {
      id: 2,
      title: "Battlefield 6",
      developer: "EA Sports",
      image: "https://i.postimg.cc/rFz3xggX/bf66.png",
      description: "World's most popular Large-scale multiplayer warfare with advanced EA Javelin cheat prevention fair play enforcement",
      status: "Protected"
    },
    {
      id: 3,
      title: "Battlefield 2042",
      developer: "EA DICE",
      image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/08/bf2042-season-2-keyart.jpg",
      description: "Large-scale multiplayer warfare with advanced EA Javelin cheat prevention",
      status: "Protected"
    },
    {
      id: 4,
      title: "Madden NFL 25",
      developer: "EA SPORTS™",
      image: "https://i.ytimg.com/vi/s6Hc-n48PBw/maxresdefault.jpg",
      description: "Madden NFL 25 is an American football video game developed by EA Orlando and published by EA Sports. Announced on June 11, 2024, it is an installment in the Madden NFL series and follows Madden NFL 24. The PlayStation 4 and Xbox One versions are based on the previous game, Madden NFL 24.",
      status: "Protected"
    },
    {
      id: 5,
      title: "F1® Franchise",
      developer: "EA SPORTS™",
      image: "https://media.contentapi.ea.com/content/dam/ea/f1/f1-24/common/f124-standard-ed-16x9.jpg.adapt.crop191x100.1200w.jpg",
      description: "Dive into EA SPORTS F1® 25 now to experience this extraordinary fusion of film and gameplay firsthand. Immerse yourself in the drama, speed, and authenticity of Formula 1 like never before. Purchase the Iconic Edition or Iconic Edition Upgrade by July 11 to play as APXGP drivers in My Team or Driver Career",
      status: "Protected"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % games.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [games.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % games.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + games.length) % games.length);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="games" className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Games We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Protect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience our cutting-edge anticheat technology across the most popular gaming titles
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={games[currentSlide].image}
                  alt={games[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Game Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="max-w-2xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex items-center mb-4"
                    >
                      <span className="px-3 py-1 bg-red-500/20 border border-red-500 rounded-full text-red-400 text-sm mr-4">
                        {games[currentSlide].status}
                      </span>
                      <span className="text-gray-400">{games[currentSlide].developer}</span>
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-4xl font-bold text-white mb-4"
                    >
                      {games[currentSlide].title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-gray-300 text-lg mb-6"
                    >
                      {games[currentSlide].description}
                    </motion.p>
                    
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex items-center px-6 py-3 bg-red-500/20 border border-red-500 rounded-lg text-red-400 hover:bg-red-500/30 transition-all duration-300"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 backdrop-blur-sm border border-red-900/50 rounded-full flex items-center justify-center text-white hover:bg-red-900/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 backdrop-blur-sm border border-red-900/50 rounded-full flex items-center justify-center text-white hover:bg-red-900/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {games.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-red-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSlider;