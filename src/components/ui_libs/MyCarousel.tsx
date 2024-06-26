import { useState, useEffect } from "react" 

import { Card, CardContent } from "../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel"


import {projectList} from '../../utile/constant'
import { Progress } from "../ui/progress"


export function CarouselDApiDemo() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  let mydata = [
    {
      title : "Réaliser un développement d’application",
      level : 90,
      descrip : "Acquérir la capacité de développer des applications en maîtrisant les différents aspects du développement logiciel, incluant la conception, le codage, les tests et l'intégration.",
      projectList:  ["map", "shiny-agency", "goldenblog", "weatherwise"],
      personalEval: "Très bien: Réaliser des applications avec une architecture robuste, des tests complets et une documentation claire, assurant ainsi une maintenance aisée et une évolutivité optimale."
    },
    {
      title : "Optimisation des applications informatiques",
      level: 75,
      descrip : "Améliorer les performances et l'efficacité des applications en analysant et en optimisant les algorithmes et les structures de données utilisés.",
      projectList:  ["map", "goldenblog"],
      personalEval: "Bon: Identifier les goulots d'étranglement potentiels et proposer des solutions pour les résoudre."
    },
    {
      title : "Administration des systèmes informatiques communicants complexes",
      level: 60,
      descrip : " Gérer et sécuriser les systèmes informatiques et les réseaux, en assurant leur fonctionnement optimal et en respectant les contraintes de performance et de coût.",
      projectList:  ["goldenblog"],
      personalEval: "Bon: Installer et configurer correctement les systèmes d'exploitation et les outils nécessaires."
    },
    {
      title : "Gestion des données et de l’information",
      level: 70,
      descrip : " Concevoir et maintenir des bases de données relationnelles, tout en assurant la sécurité et la confidentialité des données, et en organisant leur restitution efficace.",
      projectList:  ["map", "goldenblog"],
      personalEval: "Très bien: Concevoir des modèles de données optimisés et évolutifs, permettant une manipulation et une analyse efficaces des informations, tout en garantissant leur confidentialité et leur intégrité."
    },
    {
      title : "Conduite de projet",
      level: 75,
      descrip : "Planifier, organiser et gérer des projets informatiques en coordonnant les tâches et les équipes, en gérant les risques et en assurant la communication efficace.",
      projectList:  ["map"],
      personalEval: "Bon: Élaborer des plannings réalistes et suivre leur avancement de manière rigoureuse."
    },
    {
      title : "Travail en équipe informatique",
      level: 68,
      descrip : " Collaborer efficacement au sein d'une équipe informatique en communiquant bien, en appliquant des méthodes de développement appropriées et en assurant une veille technologique.",
      projectList:  ["goldenblog"],
      personalEval: "Bon: Communiquer efficacement avec les membres de l'équipe pour assurer une compréhension commune des objectifs et des tâches à réaliser."
    },
  ]

  let images = projectList
  .reduce((prev, item) => {
    prev[item.href] =  item.image
    return prev
    }, {})

    console.log("images", images)


// let movieflix = projectList.filter(item => item.href == "movieflex") || null

  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-h-[70vh]  m-5 rounded-sm" opts={{
        loop: true,
        align: "center"
      }}>
        <CarouselContent className="  h-[80vh]">
          {mydata.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="h-full flex justify-center">
                <CardContent className="flex flex-col justify-evenly  items-center  p-6 gap-4 ">
                    
                    <h2 className="text-2xl font-bold">Competence {index + 1}<br></br>{item.title}</h2>

                    <Progress className="h-[10px] w-[200px]"  value={item.level || 50} />
                    <p className="w-[400px] text-center text-[#555]">{item.descrip}</p>
                    <div className="flex gap-2 justify-center">
                      {
                        item.projectList.map((project) => 
                          <a href={ project? `project/`+ project: ""}>
                          <div>
                            <img src={images[project] || ""} alt=""  className="h-[100px]"/>
                          </div>
                          </a>
                      )
                      }
                    </div>
                    <p className="w-[400px] text-center text-[#555]">{item.personalEval}</p>
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
  )
}