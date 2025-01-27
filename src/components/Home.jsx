import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Home.css";
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
                <img
                    src="/Portfolio Builder/public/images/hero.svg"
                    alt=""
                    className="hero"
                />
                <button className="generate">
                    <Link to="/brief">GENERATE BRIEF</Link>
                </button>
            </div>
        </section>
    );
}

export default Home;
