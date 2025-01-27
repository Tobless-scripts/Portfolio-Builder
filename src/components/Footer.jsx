import "../styles/Footer.css";
function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="logo">LOGO</div>
                <div className="social-media">
                    <img
                        src="/Portfolio Builder/public/facebook.svg"
                        alt="facebook"
                    />
                    <img src="/Portfolio Builder/public/instagram.svg" />
                    <img src="/Portfolio Builder/public/tiktok.svg" />
                </div>
                <p>&copy; copyright - 2025</p>
            </div>
        </footer>
    );
}
export default Footer;
