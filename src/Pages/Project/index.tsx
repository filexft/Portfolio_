import { motion } from "framer-motion";
import vite from "/vite.svg";

const Project = () => {
    return (
        <div className="min-h-screen p-4 z-30">
            <h1 className="">Projects :</h1>
            <div className="flex flex-wrap gap-4 p-2">
                <a href="/project/goldenblog">
                    <motion.div className="w-[400px] h-[400px] flex flex-col justify-center p-3  bg-bcg-black-50 rounded-md">
                        <img src={vite} alt="" className="h-3/4" />
                        <h3>Vite project</h3>
                        <div className="flex justify-between mt-4">
                            <h3>Fullstack</h3>
                            <h3>Css js</h3>
                        </div>
                    </motion.div>
                </a>
            </div>
        </div>
    );
};

export default Project;
