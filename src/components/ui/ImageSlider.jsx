import React, { useState, useEffect } from "react";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevSlide = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTransitioning(false);
    }, 300);
  };

  const handleNextSlide = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setTransitioning(false);
    }, 300);
  };

  return (
    <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-lg">
      <div
        className={`w-full h-full flex transition-transform duration-700 ease-out transform ${
          transitioning ? "scale-105" : "scale-100"
        }`}
      >
        <img
          src={images[currentIndex]}
          alt="Location"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <button
        onClick={handlePrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        ❮
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        ❯
      </button>
    </div>
  );
}

export default ImageSlider;
