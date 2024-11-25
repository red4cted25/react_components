import { Tilt } from '@jdion/tilt-react';
import { FaGithub, FaInstagram, FaXTwitter, FaLink } from 'react-icons/fa6';

export default function ProfileCard({ profile }) {
    const getSocialIcon = (link) => {
        if (link.includes('github.com')) {
            return <FaGithub />;
        } else if (link.includes('twitter.com') || link.includes('x.com')) {
            return <FaXTwitter />;
        } else if (link.includes('instagram.com')) {
            return <FaInstagram />;
        }
        return <FaLink />;
    };

    return (
        <Tilt>
            <div className="bg-background rounded-lg shadow-md w-full max-w-xs overflow-hidden relative my-[10vh] mx-auto">
                <div className="h-[150px] bg-gradient-to-br from-[#93c5fd] to-[#c4b5fd] w-full"></div>
                <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] rounded-full border-6 border-background overflow-hidden shadow-sm">
                    <img src={profile.profile} alt={`${profile.firstName} ${profile.lastName}`} className="w-full h-full object-cover" />
                </div>
                <div className="px-6 pt-[calc(1.5rem+50px)] text-center">
                    <h2 className="text-text text-xl mb-2">{profile.firstName} {profile.lastName}</h2>
                    <a href={`mailto:${profile.email}`} className="text-text-light mb-4 block">{profile.email}</a>
                    <ul className="flex gap-4 justify-center list-none mb-6">
                        {profile.socialMediaLinks.map((link, index) => (
                            <li key={index} className="flex items-center">
                                <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary text-2xl transition-colors duration-300 hover:text-secondary">
                                    {getSocialIcon(link)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <hr className="border-t border-border my-4" />
                    <div className="bio">
                        <h2 className="text-lg mb-4">Bio</h2>
                        <p className="text-text text-sm leading-relaxed text-left">{profile.bio}</p>
                    </div>
                </div>
            </div>
        </Tilt>
    );
}
