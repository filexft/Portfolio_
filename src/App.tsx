import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import ThemeProvider from "./utile/SkinContext";

import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Competance from "./Pages/Competances";
// import Particle from "./components/Particles";
import ColorPicker from "./components/ColorPicker";
import SingleProject from "./Pages/SingleProject";
import Footer from "./components/footer";
import Error from "./components/Error";

function App() {
    const { scrollYProgress } = useScroll();

    return (
        <ThemeProvider>
            <div
                id="container"
                className="color-1 h-full w-full  flex flex-col justify-center"
            >
                <motion.div
                    className="progress-bar z-50"
                    style={{ scaleX: scrollYProgress }}
                />
                {/* <Particle /> */}
                <ColorPicker />
                <Router>
                    <Nav />

                    <div className="h-full overflow-x-hidden">
                        <Routes>
                            <Route
                                path="/project/:projectID"
                                element={<SingleProject />}
                            />
                            <Route path="/project" element={<Project />} />
                            <Route
                                path="/competance"
                                element={<Competance />}
                            />
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </div>
                </Router>
                <Footer />
            </div>
            <Analytics />
        </ThemeProvider>
    );
}

export default App;
