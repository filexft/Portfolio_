import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    return (
        <section id="footer" className="h-[300px] bg-bcg-black-900 flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-4xl font-poppins font-black">Contact Me :</h1>
                <div className="flex gap-8 justify-center items-center">
                    <a
                        href="https://www.linkedin.com/in/tewelde-habtay-felmon-871508251/"
                        className="text-2xl"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        Linkedin
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tewelde-habtay-felmon-871508251/"
                        className="text-2xl"
                    >
                        <FontAwesomeIcon icon={faGithub} className="mr-2" />
                        Github
                    </a>
                </div>
            </div>
            <div></div>
            <p>Made with 💛. ©️ 2023</p>
        </section>
    );
}

export default Footer