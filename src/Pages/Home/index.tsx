
import ProjectCard from '../../components/Project';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div className="min-h-[100vh] bg-bg-black-50">
            <section
                id="hero"
                className="h-screen  flex  sm:flex-col md:flex-row justify-evenly items-center gap-10 p-"
            >
                <div
                    id="title"
                    className="w-1/2 max-w-md  self-center sm:w-full"
                >
                    <h1 className="font-bold text-text-black-900 text-6xl mb-3 sm:text-2xl w-full">
                        Felmon Tewelde
                    </h1>
                    <p className="font-semibold text-xl mb-3 sm:text-lg">
                        A passionate and Determined
                        <span>Computer Science</span>
                        Student at the University of Lyon 1
                    </p>
                    <a
                        href="https://www.google.com/maps/place/Lyon/@45.7579211,4.7527295,12z/data=!3m1!4b1!4m6!3m5!1s0x47f4ea516ae88797:0x408ab2ae4bb21f0!8m2!3d45.764043!4d4.835659!16zL20vMGRwcmc?entry=ttu"
                        target="_blank"
                        className="flex just-fy-center items-center gap-1"
                    >
                        <FontAwesomeIcon
                            icon={faGlobe}
                            className="text-text-black-700"
                        />
                        Lyon, France
                    </a>
                </div>
                <div
                    id="heroimg"
                    className="h-1/2 items-center  relative md:w-1/3 sm:w-full"
                >
                    {/* <img src={me} alt="" className="absolute top-0 left-0" /> */}
                </div>
            </section>
            <section className="h-screen flex justify-center items-center gap-10  md:p-4 md:flex-row sm:flex-col w-full p-0 space-x-0">
                <h1 className="font-bold text-3xl ">About</h1>
                <p className="w-2/3 md:w1/2 h-max text-2xl   border-indigo-500 md:border-l-4 md:border-t-none pl-4  sm:text-lg sm:border-t-4  pt-4">
                    Hello, I'm Tewelde. I'm a dedicated tech enthusiast with a
                    strong love for programming. I'm always eager to learn and
                    explore new horizons in the tech world. Besides coding, I
                    enjoy playing music and swimming. Let's connect and chat
                    about tech, music, or anything else that interests you!
                </p>
            </section>
            <section className="h-screen flex flex-col justify-center items-center gap-10 ">
                <h1>Projects</h1>
                <ProjectCard />
            </section>
        </div>
    );
};

export default Home;
