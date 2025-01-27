import Header from "./Header";
import Footer from "./Footer";
import "../styles/About.css";
function About() {
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
        <>
            <Section />
            <Contact />
        </>
    );
}
function Section() {
    return (
        <div className="about-section">
            <h1>About Us</h1>
            <p>
                Welcome to <strong>Portfolio Builder</strong>, where creativity
                meets passion. We are a passionate team of graphic designers
                committed to bringing your brand to life with exceptional design
                solutions that stand bout in today`s competitive market.
            </p>
            <p>
                At <strong>Portfolio Builder</strong>, we understand the power
                of visual storytelling. Whether you`re a startup looking to
                establish a strong identity, or an established business in need
                of a fresh and modern look, our team is here to help you achieve
                your goal. From logos and branding to print materials and
                digital content, we create designs that not only look great but
                also communicate your brand message effectively.
            </p>
            <h2>Our Expertise</h2>
            <p>
                With years of experience and a deep understanding of design
                principles, we specialize in:
            </p>
            <ul>
                <li>
                    <strong>Brand Identity & Logo Design</strong>
                </li>
                <li>
                    <strong>Website & UI/UX Design</strong>
                </li>
                <li>
                    <strong>Print & Marketing Materials</strong>
                </li>
                <li>
                    <strong>Social Media Graphics</strong>
                </li>
                <li>
                    <strong>Video Editing & Animation</strong>
                </li>
            </ul>
            <h2>Why choose Us?</h2>
            <ul>
                <li>
                    <strong>Creative Excellence:</strong> Our team of
                    experienced designers brings fresh ideas and creative
                    solutions to every project
                </li>
                <li>
                    <strong>Personalized Service:</strong> We work closely with
                    each client to understand their unique needs and goals.
                </li>
                <li>
                    <strong>Timely Delivery:</strong> We value your time and
                    ensure that every project is completed on schedule without
                    compromising quality
                </li>
                <li>
                    <strong>Affordable Pricing:</strong> Quality design doesn`t
                    need to break the bank. We offer competitive pricing without
                    sacrificing craftsmanship
                </li>
            </ul>
            <p>
                Ready to transform your brand with exceptional design? Let`s
                work together and create something amazing.
            </p>
        </div>
    );
}
function Contact() {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p>
                Contact Us today to get started, we promise to reply as soon as
                possible
            </p>
            <form action="https://formspree.io/f/xpwwkjea" method="post">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />
                <textarea name="message" id="message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default About;
