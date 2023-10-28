import yellow from '../../assets/yellow-bg-icons.png'
import me from "../../assets/me.png";
import ProjectCard from '../../components/Project';

const Home = () => {
    return (
        <div className="h-full">
            <section
                id="hero"
                className="h-full  flex  sm:flex-col md:flex-row justify-evenly items-center gap-10 p-"
            >
                <div
                    id="title"
                    className="w-1/2 max-w-md  self-center sm:w-full"
                >
                    <h1 className="font-bold text-6xl mb-3 sm:text-2xl w-full">
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
                        className="flex "
                    >
                        <svg
                            className="w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>{" "}
                                <path
                                    d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>{" "}
                            </g>
                        </svg>
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
            <section className="h-full flex justify-center items-center gap-10  md:p-4 md:flex-row sm:flex-col w-full p-0 space-x-0">
                <h1 className="font-bold text-3xl ">About</h1>
                <p className="w-2/3 md:w1/2 h-max text-2xl   border-indigo-500 md:border-l-4 md:border-t-none pl-4  sm:text-lg sm:border-t-4  pt-4">
                    Hello, I'm Tewelde. I'm a dedicated tech enthusiast with a
                    strong love for programming. I'm always eager to learn and
                    explore new horizons in the tech world. Besides coding, I
                    enjoy playing music and swimming. Let's connect and chat
                    about tech, music, or anything else that interests you!
                </p>
            </section>
            <section className="h-full flex flex-col justify-center items-center gap-10 ">
                <h1>Projects</h1>
                <ProjectCard />
            </section>
        </div>
    );
};

export default Home;
