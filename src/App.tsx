import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {motion, useScroll} from 'framer-motion'

import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Particle from "./components/Particles";
import ColorPicker from "./components/ColorPicker";

function App() {
  
  const { scrollYProgress } = useScroll();

    return (
        <div id="container" className="color-1 h-full w-full  flex flex-col">
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <Particle />
            <ColorPicker />
            <Router>
                <Nav />

                <div className="h-full">
                    <Routes>
                        <Route path="/project" element={<Project />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
