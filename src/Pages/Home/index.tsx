import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BorderBeam } from "../../components/magicui/border-beam";
import { BoxReveal } from "../../components/magicui/box-reveal";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import { skills } from "../../utile/constant";
import Project from "../Project";
import me from "/Me.png";
import epita from "/epita.jpg";
import iut from "/iut.jpg";
import martin from "/martin.jpg";
import { Element as ScrollElem } from "react-scroll";

const Home = () => {
    return (
        <div className="min-h-[100vh] bg-bg-black-50 sm:p-2 gap-4">
            {/* Hero */}
            <ScrollElem
                name="hero"
                id="hero"
                className="h-screen  flex  sm:flex-col md:flex-row justify-evenly items-center gap-10 p-"
            >
                <div
                    id="title"
                    className="w-1/2 max-w-lg  self-center sm:w-full"
                >
                    <BoxReveal boxColor={"var(--skin-color)"} duration={1.0}>
                        <h1
                            className="font-bold text-7xl mb-3 sm:text-2xl max-[600px]:text-3xl w-full bg-clip-text text-transparent"
                            style={{
                                backgroundImage: `linear-gradient(to right, var(--skin-color), var(--skin-color) 70%)`,
                            }}
                        >
                            Felmon Tewelde
                        </h1>
                    </BoxReveal>

                    {/* <p className="font-semibold text-2xl mb-3 sm:text-lg">
                        Développeur full-stack orienté fiabilité et sécurité
                        applicative.
                    </p> */}

                    <BoxReveal boxColor={"#5046e6"} duration={1.0}>
                        <p className="text-lg mb-3 sm:text-base">
                            Étudiant en 3ᵉ année de BUT Informatique, passionné
                            par le développement full-stack, je rejoindrai
                            l’école d’ingénieurs EPITA Paris.
                        </p>
                    </BoxReveal>
                    {/* call to actions */}

                    <BoxReveal boxColor={"#5046e6"} duration={1.0}>
                        <div className="flex justify-start items-center gap-2">
                            <a
                                href="https://drive.google.com/file/d/1ad15h_3xazBd1GkpoxmZNG5SVxLxP89m/view?usp=sharing"
                                target="_blank"
                                className="flex just-fy-center items-center gap-1 py-1 px-2 rounded-md border border-slate-400 hover:text-inherit"
                            >
                                <FontAwesomeIcon
                                    icon={faDownload}
                                    className="text-text-black-700"
                                />
                                CV
                            </a>
                        </div>
                    </BoxReveal>
                </div>
                <div
                    id="heroimg"
                    className="max-h-[576px] w-[360px] flex justify-center items-center relative rounded-xl"
                >
                    <img
                        src={me}
                        alt=""
                        className="logo-before logo-after rounded-lg w-full h-full object-cover"
                    />
                    <BorderBeam size={250} duration={12} delay={9} />
                </div>
            </ScrollElem>
            {/* Education */}
            <ScrollElem
                name="etude"
                className="h-screen flex  justify-center items-center gap-10  md:p-4 md:flex-row sm:flex-col w-full p-0 space-x-0 sm:mb-4"
            >
                <div className="w-full flex flex-col  gap-2">
                    <h1 className="font-bold text-3xl ">Mes études</h1>

                    <div className="flex flex-col  gap-2 md:gap-4 md:flex-row md:justify-evenly md:items-center">
                        <Card className="w-lg max-w-lg md:w-md">
                            <CardHeader>
                                <img src={epita} alt="" />
                                <CardTitle>Epita (admis)</CardTitle>
                                <CardDescription>
                                    2025 - 2028, Paris
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                Cycle ingénieur
                                <br />
                                Diplôme d’ingénieur en informatique
                            </CardContent>
                        </Card>
                        <Card className="w-lg max-w-lg md:w-md">
                            <CardHeader>
                                <img src={iut} alt="" />
                                <CardTitle>
                                    BUT Informatique - IUT Lyon 1
                                </CardTitle>
                                <CardDescription>
                                    2022 – 2025, Villeurbanne
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                Parcours : Réalisation d’Applications –
                                Conception, Développement, Validation
                            </CardContent>
                        </Card>
                        <Card className="w-lg max-w-lg">
                            <CardHeader>
                                <img src={martin} alt="" />
                                <CardTitle>
                                    Lycée La Martinière Monplaisir
                                </CardTitle>
                                <CardDescription>
                                    2021 – 2022, Lyon
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                Baccalauréat Technologique - Spécialités :{" "}
                                <br />
                                <ul className="list-disc pl-8">
                                    <li>Systèmes d’Information et Numérique</li>
                                    <li>Physique-Chimie</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </ScrollElem>

            <ScrollElem
                name="skills"
                className="h-screen flex  justify-center items-center gap-10  md:p-4 md:flex-row sm:flex-col w-full p-0 space-x-0 sm:mb-4"
            >
                <div className="w-full">
                    <h1 className="font-bold text-3xl mb-4 ">Compétences</h1>
                    <div className="flex flex-wrap gap-4 justify-evenly items-center">
                        {skills.map((skillGroup, i) =>
                            Object.entries(skillGroup).map(
                                ([category, items]) => (
                                    <Card
                                        key={category + i}
                                        className="w-full max-w-md shadow-sm hover:shadow-md "
                                    >
                                        <CardHeader>
                                            <CardTitle>{category}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-wrap gap-2">
                                                {items.map((item) => (
                                                    <div
                                                        key={item.name}
                                                        className="inline-flex flex-col items-center gap-1  px-3 py-1 rounded-full text-sm"
                                                    >
                                                        <span className="text-4xl">
                                                            {item.icon}
                                                        </span>
                                                        {item.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ),
                            ),
                        )}
                    </div>
                </div>
            </ScrollElem>

            <ScrollElem
                name="projets"
                className="min-h-screen flex  justify-center items-center gap-10  md:p-4 md:flex-row sm:flex-col w-full p-0 space-x-0 sm:mb-4"
            >
                <div className="w-full">
                    <Project />
                </div>
            </ScrollElem>
        </div>
    );
};

export default Home;
