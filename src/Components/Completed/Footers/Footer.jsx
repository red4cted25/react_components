import { FaGithub, FaInstagram, FaXTwitter} from "react-icons/fa6";

const FooterClassic = ({ logo, about, socialLinks, services = [] }) => {
    return (
        <footer className="bg-[#2C3E50] text-white py-8">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and About Section */}
                <div className="footer-logo-info">
                    <img src={logo} alt="Organization Logo" className="mb-4 w-24" />
                    {services.length > 0 && (
                        <ul className="text-sm">
                            {services.map((service, index) => (
                                <li key={index} className="mb-2">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* About Links */}
                <div className="footer-about">
                    {Object.entries(about).map(([section, link], index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">{section}</h3>
                            <a
                                href={link}
                                className="text-sm hover:text-[#ECF0F1]"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Social Media Links */}
                <div className="footer-social">
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        {socialLinks.github && ( <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#3498DB]" > <FaGithub /> </a> )}
                        {socialLinks.instagram && ( <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#E74C3C]" > <FaInstagram /> </a> )}
                        {socialLinks.facebook && ( <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#1DA1F2]" > <FaFacebook /> </a> )}
                    </div>
                </div>
            </div>

            {/* Footer End */}
            <div className="mt-8 text-center text-sm">
                <p>
                    Copyright © {new Date().getFullYear()} [Organization Name]. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default FooterClassic;