import { useState, useEffect } from "react";

import { Card, CardContent } from "../ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "../ui/carousel";

import { projectList } from "../../utile/constant";
import { Progress } from "../ui/progress";

export function CarouselDApiDemo() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    let mydata = [
        {
            title: "Réaliser un développement d’application",
            level: 90,
            // descrip:"Acquérir la capacité de développer des applications en maîtrisant les différents aspects du développement logiciel, incluant la conception, le codage, les tests et l'intégration.",
            descrip: [
                "✅ Niveau 1: Développer des applications informatiques simples",
                "✅ Niveau 2: Partir des exigences et aller jusqu’à une application complète",
                "✅ Niveau 3: Se spécialiser sur un ensemble de supports (embarqué, web, mobile, IOT...) avec un suivi qualitatif",
            ],
            projectList: [
                "unifree",
                "map",
                "shiny-agency",
                "goldenblog",
                "weatherwise",
            ],
            personalEval:
                "Très bien: Réaliser des applications avec une architecture robuste, des tests complets et une documentation claire, assurant ainsi une maintenance aisée et une évolutivité optimale.",
        },
        {
            title: "Optimisation des applications informatiques",
            level: 85,
            descrip: [
                "✅ Niveau 1:  Appréhender et construire des algorithmes",
                "✅ Niveau 2: Sélectionner les algorithmes adéquats pour répondre à un problème donné",
                "✅ Niveau 3: Analyser et optimiser des applications",
            ],
            projectList: ["map", "goldenblog"],
            personalEval:
                "Très bien: Identifier les goulots d'étranglement potentiels et proposer des solutions pour les résoudre.",
        },
        {
            title: "Administration des systèmes informatiques communicants complexes",
            level: 60,
            descrip: [
                "✅ Niveau 1: Installation/configuration Linux et Windows",
                "✅ Niveau 2: Déployer des services dans une architecture réseau",
            ],
            projectList: ["goldenblog"],
            personalEval:
                "Bon: Installer et configurer correctement les systèmes d'exploitation et les outils nécessaires.",
        },
        {
            title: "Gestion des données et de l’information",
            level: 80,
            descrip: [
                "✅ Niveau 1:  Concevoir et mettre en place une base de données à partir d’un cahier des charges client",
                "✅ Niveau 2: Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
            ],
            projectList: ["unifree", "map", "goldenblog"],
            personalEval:
                "Très bien: Concevoir des modèles de données optimisés et évolutifs, permettant une manipulation et une analyse efficaces des informations, tout en garantissant leur confidentialité et leur intégrité.",
        },
        {
            title: "Conduite de projet",
            level: 75,
            descrip: [
                "✅ Niveau 1: Identifier les besoins métiers des clients et des utilisateurs ",
                "✅ Niveau 2: Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs",
            ],
            projectList: ["map"],
            personalEval:
                "Bon: Élaborer des plannings réalistes et suivre leur avancement de manière rigoureuse.",
        },
        {
            title: "Travail en équipe informatique",
            level: 65,
            descrip: [
                "✅ Niveau 1: Identifier ses aptitudes pour travailler dans une équipe",
                "✅ Niveau 2: Situer son rôle et ses missions au sein d’une équipe informatique",
                "❌ Manager une équipe informatique",
            ],
            projectList: ["unifree", "goldenblog"],
            personalEval:
                "À améliorer : Développer une communication plus efficace avec les membres de l'équipe afin de garantir une compréhension commune des objectifs et des tâches.",
        },
    ];

    let images = projectList.reduce((prev, item) => {
        prev[item.href] = item.image;
        return prev;
    }, {});

    console.log("images", images);

    // let movieflix = projectList.filter(item => item.href == "movieflex") || null

    return (
        <div>
            <Carousel
                setApi={setApi}
                className="w-full max-h-[70vh]  m-5 rounded-sm"
                opts={{
                    loop: true,
                    align: "center",
                }}
            >
                <CarouselContent className="  h-[80vh]">
                    {mydata.map((item, index) => (
                        <CarouselItem key={index}>
                            <Card className="h-full flex justify-center">
                                <CardContent className="flex flex-col justify-evenly  items-center  p-6 gap-4 ">
                                    <h2 className="text-2xl font-bold">
                                        Competence {index + 1}
                                        <br></br>
                                        {item.title}
                                    </h2>
                                    <div className="flex justify-center items-center gap-5">
                                        <span>Maîtrise </span>
                                        <Progress
                                            className="h-[10px] w-[200px]"
                                            value={item.level || 50}
                                        />
                                    </div>
                                    <p className="w-md  text-[#555]">
                                        {item.descrip.map((line, i) => (
                                            <span key={i}>
                                                {" "}
                                                {line} <br />
                                            </span>
                                        ))}
                                    </p>
                                    <div className="flex gap-2 justify-center">
                                        {item.projectList.map((project) => (
                                            <a
                                                href={
                                                    project
                                                        ? `project/` + project
                                                        : ""
                                                }
                                            >
                                                <div>
                                                    <img
                                                        src={
                                                            images[project] ||
                                                            ""
                                                        }
                                                        alt=""
                                                        className="h-[100px]"
                                                    />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                    <p className="w-[400px] text-center text-[#555]">
                                        {item.personalEval}
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
            </div>
        </div>
    );
}
