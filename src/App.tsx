import { Analytics } from "@vercel/analytics/react";
import { motion, useScroll } from "framer-motion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ThemeProvider from "./utile/SkinContext";

import Nav from "./components/Nav";
import Competance from "./Pages/Competances";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
// import Particle from "./components/Particles";
import ColorPicker from "./components/ColorPicker";
import ErrorPage from "./components/Error";
import Footer from "./components/footer";
import SingleProject from "./Pages/SingleProject";

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

                    <div className="h-full">
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
                            <Route path="*" element={<ErrorPage />} />
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
