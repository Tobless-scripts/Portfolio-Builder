import "../styles/Footer.css";
import Facebook from "/images/facebook.svg";
import Instagram from "/images/instagram.svg";
import Tiktok from "/images/tiktok.svg";
function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="logo">LOGO</div>
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
