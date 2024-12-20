import { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto relative rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-96">
        {/* Main Image */}
        <img
          src={images[currentIndex].pictureURL}
          alt={images[currentIndex].altText}
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <FaAngleLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <FaAngleRight className="h-6 w-6 text-white" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded text-white text-sm hover:bg-black/70 transition-colors"
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default Carousel;