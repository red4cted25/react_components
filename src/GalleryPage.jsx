import Masonry from './Components/WIP/Gallery/Masonry'

function GalleryPage() {
    const images1 = [
        { pictureName: "Outdoor Woman", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009867/samples/outdoor-woman.jpg", altText: "Outdoor Woman" },
        { pictureName: "Outdoor Woman", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009867/samples/outdoor-woman.jpg", altText: "Outdoor Woman" },
        { pictureName: "Outdoor Woman", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009867/samples/outdoor-woman.jpg", altText: "Outdoor Woman" },
        { pictureName: "Outdoor Woman", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009867/samples/outdoor-woman.jpg", altText: "Outdoor Woman" },
        { pictureName: "Outdoor Woman", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009867/samples/outdoor-woman.jpg", altText: "Outdoor Woman" },
        { pictureName: "Outdoor Woman", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009867/samples/outdoor-woman.jpg", altText: "Outdoor Woman" },
        { pictureName: "Outdoor Woman", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009867/samples/outdoor-woman.jpg", altText: "Outdoor Woman" },
        { pictureName: "Outdoor Woman", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009867/samples/outdoor-woman.jpg", altText: "Outdoor Woman" },
        { pictureName: "Outdoor Woman", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009867/samples/outdoor-woman.jpg", altText: "Outdoor Woman" },
        { pictureName: "Outdoor Woman", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009867/samples/outdoor-woman.jpg", altText: "Outdoor Woman" },
        { pictureName: "Outdoor Woman", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009867/samples/outdoor-woman.jpg", altText: "Outdoor Woman" },
        { pictureName: "Outdoor Woman", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009867/samples/outdoor-woman.jpg", altText: "Outdoor Woman" },
    ]
    const images2 = [
        { pictureName: "Yi Long Ma", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1732047185/yi-long-ma-struggles-with-the-pronounciation-v0-07PUcZMZsSNhQOox-_lxW5cjqmcmRd0UXVTIQFeHcB0_txdrno.webp", altText: "Yi Long Ma TikTok" },
        { pictureName: "Yi Long Ma", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1732047185/yi-long-ma-struggles-with-the-pronounciation-v0-07PUcZMZsSNhQOox-_lxW5cjqmcmRd0UXVTIQFeHcB0_txdrno.webp", altText: "Yi Long Ma TikTok" },
        { pictureName: "Yi Long Ma", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1732047185/yi-long-ma-struggles-with-the-pronounciation-v0-07PUcZMZsSNhQOox-_lxW5cjqmcmRd0UXVTIQFeHcB0_txdrno.webp", altText: "Yi Long Ma TikTok" },
        { pictureName: "Yi Long Ma", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1732047185/yi-long-ma-struggles-with-the-pronounciation-v0-07PUcZMZsSNhQOox-_lxW5cjqmcmRd0UXVTIQFeHcB0_txdrno.webp", altText: "Yi Long Ma TikTok" },
        { pictureName: "Yi Long Ma", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1732047185/yi-long-ma-struggles-with-the-pronounciation-v0-07PUcZMZsSNhQOox-_lxW5cjqmcmRd0UXVTIQFeHcB0_txdrno.webp", altText: "Yi Long Ma TikTok" },
        { pictureName: "Yi Long Ma", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1732047185/yi-long-ma-struggles-with-the-pronounciation-v0-07PUcZMZsSNhQOox-_lxW5cjqmcmRd0UXVTIQFeHcB0_txdrno.webp", altText: "Yi Long Ma TikTok" },
        { pictureName: "Yi Long Ma", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1732047185/yi-long-ma-struggles-with-the-pronounciation-v0-07PUcZMZsSNhQOox-_lxW5cjqmcmRd0UXVTIQFeHcB0_txdrno.webp", altText: "Yi Long Ma TikTok" },
        { pictureName: "Yi Long Ma", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1732047185/yi-long-ma-struggles-with-the-pronounciation-v0-07PUcZMZsSNhQOox-_lxW5cjqmcmRd0UXVTIQFeHcB0_txdrno.webp", altText: "Yi Long Ma TikTok" },
        { pictureName: "Yi Long Ma", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1732047185/yi-long-ma-struggles-with-the-pronounciation-v0-07PUcZMZsSNhQOox-_lxW5cjqmcmRd0UXVTIQFeHcB0_txdrno.webp", altText: "Yi Long Ma TikTok" },
        { pictureName: "Yi Long Ma", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1732047185/yi-long-ma-struggles-with-the-pronounciation-v0-07PUcZMZsSNhQOox-_lxW5cjqmcmRd0UXVTIQFeHcB0_txdrno.webp", altText: "Yi Long Ma TikTok" },
        { pictureName: "Yi Long Ma", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1732047185/yi-long-ma-struggles-with-the-pronounciation-v0-07PUcZMZsSNhQOox-_lxW5cjqmcmRd0UXVTIQFeHcB0_txdrno.webp", altText: "Yi Long Ma TikTok" },
        { pictureName: "Yi Long Ma", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1732047185/yi-long-ma-struggles-with-the-pronounciation-v0-07PUcZMZsSNhQOox-_lxW5cjqmcmRd0UXVTIQFeHcB0_txdrno.webp", altText: "Yi Long Ma TikTok" },
    ]
    const images3 = [
        { pictureName: "Boy Snow Hoodie", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009861/samples/people/boy-snow-hoodie.jpg", altText: "Boy Snow Hoodie" },
        { pictureName: "Boy Snow Hoodie", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009861/samples/people/boy-snow-hoodie.jpg", altText: "Boy Snow Hoodie" },
        { pictureName: "Boy Snow Hoodie", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009861/samples/people/boy-snow-hoodie.jpg", altText: "Boy Snow Hoodie" },
        { pictureName: "Boy Snow Hoodie", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009861/samples/people/boy-snow-hoodie.jpg", altText: "Boy Snow Hoodie" },
        { pictureName: "Boy Snow Hoodie", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009861/samples/people/boy-snow-hoodie.jpg", altText: "Boy Snow Hoodie" },
        { pictureName: "Boy Snow Hoodie", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009861/samples/people/boy-snow-hoodie.jpg", altText: "Boy Snow Hoodie" },
        { pictureName: "Boy Snow Hoodie", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009861/samples/people/boy-snow-hoodie.jpg", altText: "Boy Snow Hoodie" },
        { pictureName: "Boy Snow Hoodie", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009861/samples/people/boy-snow-hoodie.jpg", altText: "Boy Snow Hoodie" },
        { pictureName: "Boy Snow Hoodie", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009861/samples/people/boy-snow-hoodie.jpg", altText: "Boy Snow Hoodie" },
        { pictureName: "Boy Snow Hoodie", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009861/samples/people/boy-snow-hoodie.jpg", altText: "Boy Snow Hoodie" },
        { pictureName: "Boy Snow Hoodie", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009861/samples/people/boy-snow-hoodie.jpg", altText: "Boy Snow Hoodie" },
        { pictureName: "Boy Snow Hoodie", pictureURL: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009861/samples/people/boy-snow-hoodie.jpg", altText: "Boy Snow Hoodie" },
    ]
    return (
        <div className="container">
            <h2 style={{textAlign: 'center', color: 'blue', fontSize: '2vw', marginBottom: '0'}}>Gallery</h2>
            <div className="cards" style={{display: 'flex', gap: '2vw', justifyContent: 'center'}}>
                <Masonry images="images2" />
            </div>
        </div>
    )
}

export default GalleryPage