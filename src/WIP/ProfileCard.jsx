import '../css/profile-card.css';

export default function ProfileCard({firstName, lastName, email, profile, socialMediaLinks, bio}){
    let test = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        profile: 'https://example.com/profile.jpg',
        socialMediaLinks: ['https://github.com/johndoe', 'https://twitter.com/johndoe'],
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus semper, ultricies neque ac, maximus dolor. Vestibulum faucibus lobortis orci, et condimentum felis sagittis vel. Donec vel posuere est, vel ullamcorper neque. Sed vel libero at ex tincidunt placerat. Nunc convallis, ipsum non consectetur dictum, ligula mi faucibus ligula, ac viverra nisi felis at dolor.'
    }

    return (
        <div className="profile-card">
            <div className="profile-background"></div>
            <div className="profile-picture">
                <img src={test.profile} alt={test.firstName + test.lastName} />
            </div>
            <div className="profile-details">
                <h2>{test.firstName} {test.lastName}</h2>
                <p>{test.email}</p>
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
    );
}