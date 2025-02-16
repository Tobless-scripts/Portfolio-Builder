import { Link } from "react-router-dom";
import Logo from "/images/logo.png";
import { useEffect, useState } from "react";
function Header() {
    useEffect(() => {
        window.onscroll = function () {
            var header = document.querySelector(".header");
            var links = document.querySelector(".links");
            if (window.scrollY >= 30) {
                header.classList.add("sticky");
                links.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
                links.classList.add("sticky");
            }
        };
    });
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="header">
                <img src={Logo} alt="logo" className="logo" />

                <div className="hamburger" onClick={toggleMenu}>
                    <span className={isOpen ? "bar active" : "bar"}></span>
                    <span className={isOpen ? "bar active" : "bar"}></span>
                    <span className={isOpen ? "bar active" : "bar"}></span>
                </div>
                <nav className={isOpen ? "links active" : "links"}>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/brief">Brief</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;
