import { Link } from "react-router-dom";
import Header from "./Header";
import "../styles/Blog.css";
function Blog() {
    return (
        <>
            <Header />;
            <Main />
        </>
    );
}
function Main() {
    return (
        <div className="blog-container">
            <h1>Blogs Unavailable</h1>
            <p>
                We sincerely apologize for the inconvenience. Our blog section
                is currently under development and will be available soon.
                Please check back later for updates.
            </p>
            <Link to="/home">Return to Homepage</Link>
        </div>
    );
}

export default Blog;
