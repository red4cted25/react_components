import './profile-card.css';
import { Tilt } from '@jdion/tilt-react'

export default function ProfileCard({firstName, lastName, email, profile, socialMediaLinks, bio}){
    let test = {
        firstName: 'Yi Long',
        lastName: 'Ma',
        email: 'yilong.ma@spacex.com',
        profile: 'https://res.cloudinary.com/drnaycy06/image/upload/v1732047185/yi-long-ma-struggles-with-the-pronounciation-v0-07PUcZMZsSNhQOox-_lxW5cjqmcmRd0UXVTIQFeHcB0_txdrno.webp',
        socialMediaLinks: ['https://github.com/yilongma', 'https://twitter.com/yilongma'],
        bio: "Yi Long Ma, often referred to as the 'Chinese Elon Musk,' is a viral sensation on TikTok and other social platforms. Known for his uncanny resemblance to the Tesla CEO, Yi Long Ma parodies Musk's mannerisms and entrepreneurial persona with a comedic twist. His videos blend humor and satire, earning him a massive global following and making him a symbol of internet meme culture."
    }

    return (
        <Tilt>
            <div className="profile-card">
            <div className="profile-background"></div>
            <div className="profile-picture">
                <img src={test.profile} alt={test.firstName + test.lastName} />
            </div>
            <div className="profile-details">
                <h2>{test.firstName} {test.lastName}</h2>
                <a href={`mailto:${test.email}`}>{test.email}</a>
                <ul className="social-media-links">
                    {test.socialMediaLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
                <hr />
                <div className="bio">
                    <h2>Bio</h2>
                    <div className="bio-text">
                        <p>{test.bio}</p>
                    </div>
                </div>
            </div>
        </div>
        </Tilt>
    );
}