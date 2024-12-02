const Masonry = ({ images }) => {
    return(
        <div className="grid grid-cols-sm auto-rows-10px gap-20px">
            {images.map((image) => {
                return (
                    <div className=""></div>
                )
            })}
        </div>
    )
}

export default Masonry;