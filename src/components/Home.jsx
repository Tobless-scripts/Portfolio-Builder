import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Home.css";
import Hero from "/images/hero.svg";
function Home() {
    return (
        <>
            <Header />;
            <Main />
            <Footer />
        </>
    );
}
function Main() {
    return (
        <section className="first">
            <div className="first-left-section">
                <h1>
                    <span>Graphic Design</span> Random Brief Generator
                </h1>
            </div>
            <div className="first-right-section">
                <h2>Get your Unique Graphic Design Brief</h2>
                <img src={Hero} alt="" className="hero" />
                <button className="generate">
                    <Link
                        to="/brief"
                        style={{
                            background:
                                "linear-gradient(to right, #ff6b35, #fff)",
                            textDecoration: "none",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        GENERATE BRIEF
                    </Link>
                </button>
            </div>
        </section>
    );
}

export default Home;
