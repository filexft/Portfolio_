import { Link } from "react-router-dom";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocketchat, f } from "@fortawesome/free-brands-svg-icons";
import { Contact, Contact2, ContactIcon, Flag, PocketKnife, Send } from "lucide-react";


const Nav = () => {
    return (
        <div className="flex bg-bcg-black-100 justify-evenly items-center p-4">
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
                <Link
                    to="project"
                    className="flex gap-2 justify-center items-center"
                >
                    <Flag  className="text-skin-color"/>
                       
                    Project
                </Link>
                <Link
                    to={"/competance"}
                    //href=
                    className="flex gap-2 justify-center items-center max-[600px]:gap-8"
                >
                   <PocketKnife className="text-skin-color" />
                    Skill
                </Link>
                <Link
                    to={"#footer"}
                    //href=
                    className="flex gap-2 justify-center items-center max-[600px]:gap-8"
                >
                   <Send className="text-skin-color"/>
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Nav;
