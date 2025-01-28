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
            <About />
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
function About() {
    return (
        <div className="about-us">
            <div className="about">
                <p className="about-text">
                    A portfolio builder app for graphic designers` briefs is a
                    specialized tool designed to streamline and enhance the
                    process of creating, organizing, and presenting design
                    briefs. This app allows designers to craft visually
                    appealing briefs tailored to their projects, showcasing
                    their creativity and professionalism. With features like
                    customizable templates, drag-and-drop interfaces, and
                    integrated file-sharing options, users can easily include
                    project objectives, color palettes, typography, and visual
                    mockups. The app also supports collaboration, enabling
                    designers to share drafts with clients for feedback in real
                    time. Additionally, the app can organize multiple briefs
                    into a portfolio format, allowing graphic designers to
                    present their work cohesively to potential clients or
                    employers. This tool not only saves time but also ensures
                    consistency and quality in project presentations, making it
                    an essential resource for designers aiming to leave a
                    lasting impression.
                </p>
            </div>
            <div className="offer">
                <p className="about-text">
                    Our portfolio builder app for graphic designers` briefs
                    offers an all-in-one solution to elevate your design
                    workflow. Here`s what we bring to the table: Customizable
                    Templates – Create stunning briefs with pre-designed
                    templates tailored for logos, branding, web design, and
                    more. Drag-and-Drop Simplicity – Quickly arrange text,
                    images, and design assets with an intuitive interface.
                    Collaboration Tools – Share briefs with clients or
                    teammates, gather feedback, and make real-time updates
                    seamlessly. Integrated Organization – Keep all your briefs
                    in one place, categorized by project or client for easy
                    access. Professional Portfolio Features – Transform your
                    briefs into a polished portfolio to showcase your expertise
                    to potential clients or employers. Brand Consistency Tools –
                    Set and reuse your brand elements, including color palettes,
                    typography, and logo, for cohesive briefs every time. Our
                    app is designed to save time, boost creativity, and give you
                    the professional edge you need to stand out in the
                    competitive world of graphic design.
                </p>
            </div>
        </div>
    );
}

export default Home;
