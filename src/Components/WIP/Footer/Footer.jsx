import './footer.css'
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

function footerClassic() {
    const scrollTop = () => {
        window.scrollTo({
          top: 0, // Scroll to the very top of the page
          behavior: 'smooth', // Smooth scrolling effect
        });
    }
    
    return (
        <footer className="footer-classic">
            <section className="footer-content">
                <div className="footer-logo-info">
                    <img src="https://res.cloudinary.com/drnaycy06/image/upload/v1731009869/samples/logo.png" alt="Logo" />
                    <p className="footer-info">123 Sesame Street</p>
                    <p className="footer-info">(212) 875-6890</p>
                    <p className="footer-info">Web.ShowKids@sesame.org</p>
                </div>
                <section className="footer-navigation">
                    <div className="support">
                        <h3>Support</h3>
                        <ul>
                            <li>Contact</li>
                            <li>FAQs</li>
                            <li>Pricing Plans</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    <div className="quick-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Jobs</li>
                            <li>Courses</li>
                            <li>Paid Training</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="category">
                        <h3>Category</h3>
                        <ul>
                            <li>Graphics</li>
                            <li>Programming</li>
                            <li>eCommerce</li>
                            <li>Freelancing</li>
                        </ul>
                    </div>
                </section>
            </section>
            <div className="up-button" onClick={scrollTop}>↑</div>
            <div className="footer-end">
                <p>Copyright © 2024 [Company Name] Developed by <a href="https://github.com/red4cted25" id='footer-dev-link'>Nico Diaz</a></p>
                <div className="social-media-icons">
                    <a href="https://github.com/red4cted25" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.instagram.com/red4cted25/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.twitter.com/red4cted25/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                </div>
            </div>
        </footer>
    )
}

export default footerClassic