import ProfileCard from "./Components/Completed/Cards/ProfileCard"

function ProfilePage() {
    let test1 = {
        firstName: 'Yi Long',
        lastName: 'Ma',
        email: 'yilong.ma@spacex.com',
        profile: 'https://res.cloudinary.com/drnaycy06/image/upload/v1732047185/yi-long-ma-struggles-with-the-pronounciation-v0-07PUcZMZsSNhQOox-_lxW5cjqmcmRd0UXVTIQFeHcB0_txdrno.webp',
        socialMediaLinks: ['https://github.com/yilongma', 'https://twitter.com/yilongma'],
        bio: "Yi Long Ma, often referred to as the 'Chinese Elon Musk,' is a viral sensation on TikTok and other social platforms. Known for his uncanny resemblance to the Tesla CEO, Yi Long Ma parodies Musk's mannerisms and entrepreneurial persona with a comedic twist. His videos blend humor and satire, earning him a massive global following and making him a symbol of internet meme culture."
    }

    let test2 = {
        firstName: 'Mark',
        lastName: 'Zucc',
        email: 'mark.zucc@metaverse.com',
        profile: 'https://res.cloudinary.com/drnaycy06/image/upload/v1732174757/is-mark-zuckerberg-human_hzelhx.avif',
        socialMediaLinks: ['https://instagram.com/markzucc', 'https://facebook.com/markzucc'],
        bio: "Mark Zucc, a parody of the real Mark Zuckerberg, is a fictional tech mogul obsessed with virtual reality, lizards, and the metaverse. Known for his robotic mannerisms and deadpan delivery, he combines humor with tech jargon to create a hilarious online persona. Mark Zucc's antics have made him a cult figure in internet meme culture."
    }

    let test3 = {
        firstName: 'Bill',
        lastName: 'Gaits',
        email: 'bill.gaits@windows10.com',
        profile: 'https://res.cloudinary.com/drnaycy06/image/upload/v1732174729/images_ksn0kk.jpg',
        socialMediaLinks: ['https://github.com/billgaits', 'https://twitter.com/billgaits'],
        bio: "Bill Gaits, a satirical take on the legendary Microsoft founder, is portrayed as a quirky software genius with a knack for Windows updates that no one asked for. His dry humor, love for Excel spreadsheets, and exaggerated 'geek' personality make him a favorite among tech-savvy meme enthusiasts."
    }

    return (
        <div className="container">
            <h2 style={{textAlign: 'center', color: 'blue', fontSize: '2vw', marginBottom: '0'}}>Profiles</h2>
            <div className="cards" style={{display: 'flex', gap: '2vw', justifyContent: 'center'}}>
                <ProfileCard profile={test2} />
                <ProfileCard profile={test1} />
                <ProfileCard profile={test3} />
            </div>
        </div>
    )
}

export default ProfilePage