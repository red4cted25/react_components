import './profile-card.css';
import { Tilt } from '@jdion/tilt-react'
import { FaGithub, FaInstagram, FaXTwitter, FaLink} from "react-icons/fa6";

export default function ProfileCard({ profile }){
    const getSocialIcon = (link) => {
        if (link.includes('github.com')) {
            return <FaGithub />;
        } else if (link.includes('twitter.com')||link.includes('x.com')) {
            return <FaXTwitter />;
        } else if (link.includes('instagram.com')) {
            return <FaInstagram />;
        }
        return <FaLink />;
    };
    return (
        <Tilt>
            <div className="profile-card">
                <div className="profile-background"></div>
                <div className="profile-picture">
                    <img src={profile.profile} alt={`${profile.firstName} ${profile.lastName}`} />
                </div>
                <div className="profile-details">
                    <h2>{profile.firstName} {profile.lastName}</h2>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    <ul className="social-media-links">
                        {profile.socialMediaLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    {getSocialIcon(link)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <div className="bio">
                        <h2>Bio</h2>
                        <p className="bio-text">{profile.bio}</p>
                    </div>
                </div>
            </div>
        </Tilt>
    );
}