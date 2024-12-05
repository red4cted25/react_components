const Grid = ({ images }) => {
  return (
    <>
    {images.map((image) => {
        return (
            <>
                <img
                    src={image.pictureURL}
                    alt={image.altText}
                    className={'w-full h-auto object-cover absolute top-0 left-0 w-full h-full'}
                />
                <div className="text-white text-[15px] py-2 px-4 relative bottom-2 w-full center hidden hover:block">{image.pictureName}</div>
            </>
            
        )
        })}
    </>
  )
}

export default Grid