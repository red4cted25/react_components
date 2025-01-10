import { useState } from 'react';

const GridGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.pictureURL}
              alt={image.altText}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={handleCloseModal}
              className="absolute -top-10 right-0 text-white text-xl p-2"
            >
              Close
            </button>
            <img
              src={selectedImage.pictureURL}
              alt={selectedImage.altText}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <h3 className="text-lg">{selectedImage.pictureName}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridGallery;