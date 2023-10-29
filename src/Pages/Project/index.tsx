import { motion } from "framer-motion";
import Golden from "/assets/projects/goldenblog.png";

const Project = () => {
    return (
        <div className="min-h-screen p-4 z-30">
            <h1 className="">Projects :</h1>
            <div className="flex flex-wrap gap-4 p-2">
                <a href="/project/goldenblog">
                    <motion.div className="w-[400px] h-[400px] flex flex-col justify-center p-3  bg-bcg-black-50 rounded-md">
                        <img src={Golden} alt="" className="h-3/4" />
                        <h3>GoldenBlog</h3>
                        <div className="flex justify-between mt-4">
                            <h3>Fullstack</h3>
                            <h3>Html/Css, Php</h3>
                        </div>
                    </motion.div>
                </a>
            </div>
        </div>
    );
};

export default Project;
