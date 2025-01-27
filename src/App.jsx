import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Brief from "./components/Brief";
import Blog from "./components/Blog";
import About from "./components/About";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/brief" element={<Brief />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
