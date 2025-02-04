import { Link } from "react-router-dom";
import Close from "/images/closeMenu.svg";
import Logo from "/images/logo.png";
function Header() {
    function showSideBar() {
        const sidebar = document.querySelector(".links");
        sidebar.style.display = "block";
        document.querySelector(".hamburger").style.display = "none";
    }

    function hideSideBar() {
        const sidebar = document.querySelector(".links");
        sidebar.style.display = "none";
        document.querySelector(".hamburger").style.display = "flex";
    }
    window.onscroll = function () {
        var header = document.querySelector(".header");
        if (window.scrollY > 30) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };

    return (
        <header>
            <div className="header">
                <img src={Logo} alt="logo" className="logo" />

                <nav>
                    <ul className="links">
                        <img
                            src={Close}
                            alt="close-menu"
                            id="close"
                            onClick={hideSideBar}
                            style={{ cursor: "pointer" }}
                        />
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
                <div className="hamburger" onClick={showSideBar}>
                    <div className="menu"></div>
                    <div className="menu"></div>
                    <div className="menu"></div>
                </div>
            </div>
        </header>
    );
}
export default Header;
