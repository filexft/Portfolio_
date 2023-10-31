import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectList } from "../utile/constant";

const ProjectCard = () => {
    const targetRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target:targetRef,
    })
    const x = useTransform(scrollYProgress, [0, 1], ['1%', '-80%'])
    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky  flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className=" flex gap-4">
                    {projectList.map((item, idx) => (
                        <a href={`/project/${item.href}`} key={idx}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="w-[400px] h-[400px] flex flex-col justify-center p-3  bg-bcg-black-50 rounded-md"
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    className="h-3/4"
                                />
                                <h3>{item.title}</h3>
                                <div className="flex justify-between mt-4">
                                    <h3>{item.Ptype}</h3>
                                    <h3>{item.tech}</h3>
                                </div>
                            </motion.div>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectCard;
