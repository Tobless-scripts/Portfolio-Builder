import "../styles/Footer.css";
import Facebook from "/images/facebook.svg";
import Instagram from "/images/instagram.svg";
import Tiktok from "/images/tiktok.svg";
import Logo from "/images/logo.png";
function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="social-media">
                    <img src={Facebook} alt="facebook" />
                    <img src={Instagram} alt="instagram" />
                    <img src={Tiktok} alt="tiktok" />
                </div>
                <p>&copy; copyright - 2025</p>
            </div>
        </footer>
    );
}
export default Footer;
