import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Element as ScrollElem } from "react-scroll";
const Footer = () => {
    return (
        <ScrollElem
            name="contact"
            id="footer"
            className="h-[300px] bg-bcg-black-900 flex flex-col justify-center items-center gap-4"
        >
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-4xl font-poppins font-black">
                    Contact Me :
                </h1>
                <div className="flex gap-8 justify-center items-center">
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/tewelde-felmon"
                        className="text-2xl"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        Linkedin
                    </a>
                    <a
                        target="_blank"
                        href="https://github.com/filexft"
                        className="text-2xl"
                    >
                        <FontAwesomeIcon icon={faGithub} className="mr-2" />
                        Github
                    </a>
                </div>
            </div>
            <div></div>
            <p>Made with 💛. ©️ {new Date().getFullYear()}</p>
        </ScrollElem>
    );
};

export default Footer;
