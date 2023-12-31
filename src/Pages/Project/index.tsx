import { easeInOut, motion } from "framer-motion";
import {projectList} from '../../utile/constant'

const Project = () => {
    return (
        <div className="min-h-screen p-4 z-30 sm:w-full sm:p-0">
            <h1 className="text-3xl font-bold sm:text-2xl mb-2">Projects :</h1>
            <div className="flex flex-wrap justify-center items-center gap-4 p-2 sm:w-full sm:p-0">
                {projectList.map((item, idx) => (
                    <a href={`/project/${item.href}`} key={idx}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2, ease: easeInOut }}
                            className="w-[400px] h-[400px] flex flex-col justify-center p-3  bg-bcg-black-50 rounded-md sm:w-full sm:h-[400px]"
                        >
                            <img src={item.image} alt="" className="h-3/4" />
                            <h3>{item.title}</h3>
                            <div className="flex justify-between mt-4">
                                <h3>{item.Ptype}</h3>
                                <h3>{item.tech}</h3>
                            </div>
                        </motion.div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Project;
