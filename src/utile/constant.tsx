import React from "react";
export const projectList = [
    {
        href: "alternance",
        image: "/assets/projects/fpr.jpg",
        title: "Alternance",
        Ptype: "FullStack",
        tech: "Flask, React.js, PostgreSQL",
        single: {
            overview:
                "Alternance réalisée durant ma 3ᵉ année de BUT Informatique en tant que développeur full stack. J’ai travaillé sur des projets internes et sur des plugins pour DatoCMS.",
            feature: [
                "Création d’un site de documentation full stack",
                "Développement d’un plugin de suivi des notifications (Notification Logs)",
                "Développement d’un plugin « Dropdown » pour DatoCMS",
            ],
            role: "Conception et développement full stack d’applications internes et de plugins",
            tech: "Front-end : React.js, Tailwind CSS | Back-end : Python (Flask) | Base de données : PostgreSQL",
            site: "",
            code: "",
            images: [
                "/assets/projects/fprdoc.png",
                "/assets/projects/fprlogs.png",
            ],
        },
    },
    {
        href: "stage",
        image: "/assets/projects/fpr.jpg",
        title: "Stage",
        Ptype: "FullStack",
        tech: "Python (Flask), PostgreSQL",
        single: {
            overview:
                "Stage effectué durant ma 2ᵉ année de BUT Informatique en tant que développeur. J’ai contribué au développement d’un logiciel interne avec Python Flask, React et PostgreSQL.",
            feature: [
                "Développement d’un microservice de traitement des visuels",
                "Gestion des prix et des règles de validation des produits",
            ],
            role: "Conception et développement de logiciels internes pour optimiser les processus",
            tech: "Back-end : Python (Flask) | Base de données : PostgreSQL",
            site: "",
            code: "",
            images: [],
        },
    },
    {
        href: "unifree",
        image: "/assets/projects/unifree.png",
        title: "Unifree",
        Ptype: "FullStack",
        tech: "React.js, Node.js, PostgreSQL",
        single: {
            overview:
                "Unifree est une plateforme d’e-learning développée dans le cadre d’un projet universitaire à l’IUT Lyon 1. Conçue par une équipe de quatre étudiants, elle vise à proposer un outil simple et accessible permettant aux enseignants de créer des cours et des quiz interactifs, et aux étudiants de suivre leur apprentissage de manière engageante. La plateforme met l’accent sur la facilité d’utilisation, l’accessibilité et l’open source.",
            feature: [
                "Création et gestion de cours et quiz",
                "Interface simple et intuitive",
                "Gamification pour renforcer l’engagement",
                "Plateforme responsive et accessible",
                "Projet open source avec potentiel d’extension",
            ],
            role: "Conception, développement front-end et back-end, gestion de base de données",
            tech: "Front-end : React.js, Tailwind CSS | Back-end : Node.js | Base de données : PostgreSQL",
            site: "",
            code: "",
            images: [
                "/assets/projects/unifree.png",
                "/assets/projects/unifreeb.png",
            ],
        },
    },
    {
        href: "movieflex",
        image: "/assets/projects/moviea.png",
        title: "MovieFlex",
        Ptype: "Site Web",
        tech: "html/css, Js",
        single: {
            overview:
                "Préparez-vous à vivre une expérience cinématographique inégalée avec MovieFlex ! Plongez dans un monde de divertissement illimité, \
                où vous avez le pouvoir de choisir quoi regarder, quand et où. MovieFlex est bien plus qu’un simple site web ; \
                c’est votre plateforme incontournable pour profiter des films et séries comme jamais auparavant.",
            feature: [
                "Interface conviviale",
                "Section Questions & Réponses",
                "Site web responsive",
            ],
            role: "Conception, développement",
            tech: "Front-end : Html/CSS",
            site: "https://filexft.github.io/movieflex/",
            code: "https://github.com/filexft/movieflex",
            images: [
                "/assets/projects/movieb.png",
                "/assets/projects/moviec.png",
            ],
        },
    },
    {
        href: "goldenblog",
        image: "/assets/projects/goldenblog.png",
        title: "GoldenBlog",
        Ptype: "FullStack",
        tech: "html/css, php",
        single: {
            overview:
                "GoldenBlog est une application web dynamique que j’ai conçue et développée dans le cadre d’un projet universitaire. \
            Elle sert de plateforme conviviale permettant aux blogueurs et lecteurs d’interagir, partager et créer du contenu. \
            Ce projet illustre mes compétences en développement web, conception d’interfaces et applications communautaires.",
            feature: [
                "Authentification des utilisateurs",
                "Navigation des blogs",
                "Commentaires interactifs",
            ],
            role: "Conception, développement",
            tech: "Front-end : HTML, CSS | Back-end : PHP | Base de données : WAMP",
            site: "",
            code: "https://github.com/filexft/Blog",
            images: [
                "/assets/projects/goldenblogb.png",
                "/assets/projects/goldenblogc.png",
            ],
        },
    },
    {
        href: "shiny-agency",
        image: "/assets/projects/shinya.png",
        title: "Shiny-Agency",
        Ptype: "Frontend",
        tech: "React",
        single: {
            overview:
                "Bienvenue chez Shiny Agency, votre destination unique pour tout ce qui touche à la créativité. Shiny Agency n’est pas seulement un site de freelance ; \
                c’est une plateforme qui rassemble les esprits les plus brillants du monde du freelancing, \
                offrant une large gamme de services pour répondre à vos besoins créatifs.",
            feature: [
                "Trouver les freelances les plus talentueux",
                "Accéder à des services abordables",
                "Obtenir des solutions personnalisées",
            ],
            role: "Développement",
            tech: "Front-end : React",
            site: "https://shiny-three.vercel.app/",
            code: "https://github.com/filexft/Shiny-Agency",
            images: [
                "/assets/projects/shinyb.png",
                "/assets/projects/shinyc.png",
            ],
        },
    },
    {
        href: "map",
        image: "/assets/projects/mapa.png",
        title: "Map",
        Ptype: "Logiciel",
        tech: "Java (Swing)",
        single: {
            overview:
                "Bienvenue dans notre projet Java Map, une solution innovante qui exploite la puissance de \
                l’algorithme de Dijkstra glouton pour vous aider à trouver rapidement et efficacement le centre de santé le plus proche. \
                À une époque où l’accès aux soins est crucial, \
                notre projet constitue un outil essentiel pour toute personne cherchant une aide médicale immédiate.",
            feature: [
                "Trouver l’itinéraire le plus fiable entre deux villes",
                "Chargement de la carte interactive",
                "Liste des centres hospitaliers les plus proches",
            ],
            role: "Conception, développement",
            tech: "Front-end : Swing, CSS | Back-end : Java",
            site: "",
            code: "https://github.com/filexft/Map_S2",
            images: ["/assets/projects/mapb.png", "/assets/projects/mapc.png"],
        },
    },
    {
        href: "weatherwise",
        image: "/assets/projects/weather.png",
        title: "WeatherWise",
        Ptype: "Webapp",
        tech: "html/css, JS",
        single: {
            overview:
                "WeatherWise est votre compagnon idéal pour rester informé des dernières conditions météorologiques, où que vous soyez. \
                Cette application météo innovante, dotée d’une interface conviviale, fournit des informations en temps réel, \
                des prévisions et bien plus encore, grâce à l’API OpenWeather.",
            feature: [
                "Obtenir la météo actuelle",
                "Prévisions horaires",
                "Basée sur la localisation",
            ],
            role: "Conception, développement",
            tech: "Front-end : HTML/CSS, JavaScript",
            site: "https://filexft.github.io/weather/",
            code: "https://github.com/filexft/weather",
            images: [],
        },
    },
    {
        href: "crouskebab",
        image: "/assets/projects/kebaba.png",
        title: "CrousKebab",
        Ptype: "Site Web",
        tech: "html/css",
        single: {
            overview:
                "Bienvenue sur CrousKebab, votre destination incontournable pour commander les kebabs les plus délicieux en ligne. Que vous ayez envie d’un shawarma classique, d’un döner savoureux ou d’une option végétarienne gourmande, \
                CrousKebab est là pour vous. Commander vos kebabs préférés est aussi simple que 1-2-3, \
                et nous nous engageons à vous livrer les plus savoureux directement à votre porte.",
            feature: ["Choisir votre kebab préféré", "Site web responsive"],
            role: "Conception, développement",
            tech: "Front-end : HTML/CSS",
            site: "https://filexft.github.io/SAE-WEB/index.html",
            code: "https://github.com/filexft/SAE-WEB",
            images: [
                "/assets/projects/kebabb.png",
                "/assets/projects/kebabc.png",
            ],
        },
    },
];

import { DiScrum } from "react-icons/di";
import {
    FaAndroid,
    FaAngular,
    FaCss3Alt,
    FaDocker,
    FaFigma,
    FaGitAlt,
    FaGithub,
    FaGitlab,
    FaHtml5,
    FaJava,
    FaJs,
    FaLinux,
    FaNodeJs,
    FaPhp,
    FaPython,
    FaReact,
    FaVuejs,
} from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import {
    SiAnsible,
    SiC,
    SiExpress,
    SiFlask,
    SiGooglecloud,
    SiKotlin,
    SiMongodb,
    SiMysql,
    SiNeo4J,
    SiOracle,
    SiPostgresql,
    SiPostman,
    SiPycharm,
    SiSelenium,
    SiSimpleanalytics,
    SiSqlite,
    SiTerraform,
    SiTypescript,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

export const skills: {
    [key: string]: { name: string; icon: React.ReactNode }[];
}[] = [
    {
        "Front-end": [
            { name: "HTML", icon: <FaHtml5 color="var(--skin-color)" /> },
            { name: "CSS", icon: <FaCss3Alt color="var(--skin-color)" /> },
            { name: "JavaScript", icon: <FaJs color="var(--skin-color)" /> },
            {
                name: "TypeScript",
                icon: <SiTypescript color="var(--skin-color)" />,
            },
            { name: "React", icon: <FaReact color="var(--skin-color)" /> },
            { name: "Angular", icon: <FaAngular color="var(--skin-color)" /> },
            { name: "Vue.js", icon: <FaVuejs color="var(--skin-color)" /> },
            {
                name: "UI / UX",
                icon: <MdOutlineDesignServices color="var(--skin-color)" />,
            },
        ],
    },
    {
        "Back-end & Mobile": [
            { name: "Python", icon: <FaPython color="var(--skin-color)" /> },
            { name: "Java", icon: <FaJava color="var(--skin-color)" /> },
            { name: "Kotlin", icon: <SiKotlin color="var(--skin-color)" /> },
            { name: "Node.js", icon: <FaNodeJs color="var(--skin-color)" /> },
            { name: "Express", icon: <SiExpress color="var(--skin-color)" /> },
            { name: "Flask", icon: <SiFlask color="var(--skin-color)" /> },
            { name: "PHP", icon: <FaPhp color="var(--skin-color)" /> },
            { name: "C", icon: <SiC color="var(--skin-color)" /> },
            { name: "Bash", icon: <FaLinux color="var(--skin-color)" /> },
        ],
    },
    {
        Databases: [
            {
                name: "PostgreSQL",
                icon: <SiPostgresql color="var(--skin-color)" />,
            },
            { name: "MySQL", icon: <SiMysql color="var(--skin-color)" /> },
            { name: "Oracle", icon: <SiOracle color="var(--skin-color)" /> },
            {
                name: "Sqlite",
                icon: <SiSqlite color="var(--skin-color)" />,
            },
            { name: "MongoDB", icon: <SiMongodb color="var(--skin-color)" /> },
            { name: "Neo4j", icon: <SiNeo4J color="var(--skin-color)" /> },
        ],
    },

    {
        "Cloud & Infrastructure": [
            { name: "Docker", icon: <FaDocker color="var(--skin-color)" /> },
            {
                name: "Terraform",
                icon: <SiTerraform color="var(--skin-color)" />,
            },
            { name: "Ansible", icon: <SiAnsible color="var(--skin-color)" /> },
            { name: "CI/CD", icon: <FaGitAlt color="var(--skin-color)" /> },
            // {
            //     name: "Prometheus",
            //     icon: <FaDatabase color="var(--skin-color)" />,
            // },
            // {
            //     name: "SonarQube",
            //     icon: <SiSonarqube color="var(--skin-color)" />,
            // },
            // { name: "AWS", icon: <FaAws color="var(--skin-color)" /> },
            { name: "GCP", icon: <SiGooglecloud color="var(--skin-color)" /> },
        ],
    },
    {
        Testing: [
            { name: "Pytest", icon: <FaPython color="var(--skin-color)" /> },
            // { name: "Jest", icon: <SiJest color="var(--skin-color)" /> },
            { name: "Unittest", icon: <FaPython color="var(--skin-color)" /> },
            {
                name: "Selenium",
                icon: <SiSelenium color="var(--skin-color)" />,
            },
            { name: "Postman", icon: <SiPostman color="var(--skin-color)" /> },
        ],
    },
    // {
    //     "Cybersecurity & Systems": [
    //         // { name: "TryHackMe", icon: <FaLinux color="var(--skin-color)" /> },
    //         {
    //             name: "Networks",
    //             icon: <FaDatabase color="var(--skin-color)" />,
    //         },
    //         { name: "Linux", icon: <FaLinux color="var(--skin-color)" /> },
    //         { name: "Windows", icon: <FaWindows color="var(--skin-color)" /> },
    //         {
    //             name: "Active Directory",
    //             icon: <FaWindows color="var(--skin-color)" />,
    //         },
    //     ],
    // },
    {
        "Tools & Methodologies": [
            { name: "Figma", icon: <FaFigma color="var(--skin-color)" /> },
            {
                name: "VS Code",
                icon: <VscVscodeInsiders color="var(--skin-color)" />,
            },
            {
                name: "Android Studio",
                icon: <FaAndroid color="var(--skin-color)" />,
            },
            { name: "Pycharm ", icon: <SiPycharm color="var(--skin-color)" /> },
            {
                name: "PowerBI",
                icon: <SiSimpleanalytics color="var(--skin-color)" />,
            },
            { name: "GitHub", icon: <FaGithub color="var(--skin-color)" /> },
            { name: "GitLab", icon: <FaGitlab color="var(--skin-color)" /> },
            // {
            //     name: "Bitbucket",
            //     icon: <IoLogoBitbucket color="var(--skin-color)" />,
            // },
            {
                name: "Agile (Scrum, Kanban)",
                icon: <DiScrum color="var(--skin-color)" />,
            },
            // { name: "UML", icon: <FaDatabase color="var(--skin-color)" /> },
            // {
            //     name: "PowerAMC",
            //     icon: <FaDatabase color="var(--skin-color)" />,
            // },
        ],
    },
];
