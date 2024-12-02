import {useState} from 'react'

const Carousel = ({ images }) => {
  const [image, setImage] = useState(0)

  return (
    <div className="carousel">
      <div className="max-w-screen relative m-auto">
        {images.map((image) => {
          return (
            <>
              <img
                src={image.pictureURL}
                alt={image.altText}
                className={`w-full h-auto object-cover absolute ${image.id === image? 'z-10' : 'z-0'}`}
                style={{ top: 0, left: 0, width: '100%', height: '100%' }}
              />
              <div className="text-white text-[15px] py-2 px-4 relative bottom-2 w-full center">{image.pictureName}</div>
            </>
            
          )
        })}
      </div>
    </div>
  )
}

export default Carousel