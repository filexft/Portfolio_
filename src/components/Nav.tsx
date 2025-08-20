import { Flag, PocketKnife } from "lucide-react";
import { BsPersonRaisedHand } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import { VscReferences } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./nav.css";
const Nav = () => {
    const location = useLocation();

    let pathname = location.pathname;
    return (
        <div
            className="sticky top-0 z-40 flex justify-evenly items-center p-4
                bg-white/20 backdrop-blur-3xl border border-white/30 rounded-lg"
        >
            {" "}
            <Link to="/" className="flex gap-2 ">
                <div className="logo-before relative flex justify-center items-center text-[20px] gap-1 font-semibold sm:hidden">
                    <p className="font-rouge text-[40px]  style-switcher color-2">
                        f
                    </p>
                    elmon
                </div>
            </Link>
            <div id="pages" className="flex gap-6">
                <Link to="/" className="flex gap-2 justify-center items-center">
                    <div>
                        <svg
                            className="h-5"
                            fill="var(--skin-color)"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            id="home"
                        >
                            <path d="M21.71,12.71a1,1,0,0,1-1.42,0L20,12.42V20.3A1.77,1.77,0,0,1,18.17,22H16a1,1,0,0,1-1-1V15.1a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1V21a1,1,0,0,1-1,1H5.83A1.77,1.77,0,0,1,4,20.3V12.42l-.29.29a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42l9-9a1,1,0,0,1,1.42,0l9,9A1,1,0,0,1,21.71,12.71Z"></path>
                        </svg>
                    </div>
                    Home
                </Link>
                {pathname === "/competance" ? null : (
                    <>
                        <ScrollLink
                            to="hero"
                            className="flex gap-2 justify-center items-center"
                            smooth={true}
                            duration={500}
                        >
                            <BsPersonRaisedHand className="text-skin-color" />À
                            propos
                        </ScrollLink>
                        <ScrollLink
                            to="etude"
                            className="flex gap-2 justify-center items-center"
                            smooth={true}
                            duration={500}
                        >
                            <IoIosSchool className="text-skin-color" />
                            Mes études
                        </ScrollLink>
                        <ScrollLink
                            to="skills"
                            className="flex gap-2 justify-center items-center"
                            smooth={true}
                            duration={500}
                        >
                            <PocketKnife className="text-skin-color" />
                            Compétences
                        </ScrollLink>
                        <ScrollLink
                            to="projets"
                            className="flex gap-2 justify-center items-center"
                            smooth={true}
                            duration={500}
                        >
                            <Flag className="text-skin-color" />
                            Projets
                        </ScrollLink>
                    </>
                )}

                <Link
                    to={"/competance"}
                    //href=
                    className="flex gap-2 justify-center items-center max-[600px]:gap-8"
                >
                    <VscReferences className="text-skin-color" />
                    Référentiel
                </Link>
                <ScrollLink
                    to="contact"
                    className="flex gap-2 justify-center items-center"
                    smooth={true}
                    duration={500}
                >
                    <Flag className="text-skin-color" />
                    Contact
                </ScrollLink>
            </div>
        </div>
    );
};

export default Nav;
