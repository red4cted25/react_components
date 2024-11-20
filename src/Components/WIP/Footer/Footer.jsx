import './footer.css'
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

function footerClassic() {
    return (
        <footer className="footer-classic">
            <div className="footer-content">
                <p>Built with React and CSS</p>
            </div>
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