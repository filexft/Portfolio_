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
      title : "Réalisation d’application",
      descrip : "Acquérir la capacité de développer des applications en maîtrisant les différents aspects du développement logiciel, incluant la conception, le codage, les tests et l'intégration.",
      projectList:  ["Python", "Typescript", "React"],
      personalEval: "Très bien: Réaliser des applications avec une architecture robuste, des tests complets et une documentation claire, assurant ainsi une maintenance aisée et une évolutivité optimale."
    },
    {
      title : "Optimisation des applications informatiques",
      descrip : "Améliorer les performances et l'efficacité des applications en analysant et en optimisant les algorithmes et les structures de données utilisés.",
      projectList:  ["FitnessGuide", "Unifree", "Mapgragh"],
      personalEval: "Bon: Identifier les goulots d'étranglement potentiels et proposer des solutions pour les résoudre."
    },
    {
      title : "Administration des systèmes informatiques communicants complexes",
      descrip : " Gérer et sécuriser les systèmes informatiques et les réseaux, en assurant leur fonctionnement optimal et en respectant les contraintes de performance et de coût.",
      projectList:  ["FitnessGuide", "Unifree", "Mapgragh"],
      personalEval: "Bon: Installer et configurer correctement les systèmes d'exploitation et les outils nécessaires."
    },
    {
      title : "Gestion des données et de l’information",
      descrip : " Concevoir et maintenir des bases de données relationnelles, tout en assurant la sécurité et la confidentialité des données, et en organisant leur restitution efficace.",
      projectList:  ["PowerBi", "MySql", "Mongodb"],
      personalEval: "Très bien: Concevoir des modèles de données optimisés et évolutifs, permettant une manipulation et une analyse efficaces des informations, tout en garantissant leur confidentialité et leur intégrité."
    },
    {
      title : "Conduite de projet",
      descrip : "Planifier, organiser et gérer des projets informatiques en coordonnant les tâches et les équipes, en gérant les risques et en assurant la communication efficace.",
      projectList:  ["ShopPlanner", "Unifree", "Mapgragh"],
      personalEval: "Bon: Élaborer des plannings réalistes et suivre leur avancement de manière rigoureuse."
    },
    {
      title : "Travail en équipe informatique",
      descrip : " Collaborer efficacement au sein d'une équipe informatique en communiquant bien, en appliquant des méthodes de développement appropriées et en assurant une veille technologique.",
      projectList:  ["FitnessGuide", "Unifree", "Mapgragh"],
      personalEval: "Bon: Communiquer efficacement avec les membres de l'équipe pour assurer une compréhension commune des objectifs et des tâches à réaliser."
    },
  ]

  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-h-[70vh]  m-5 rounded-sm" opts={{
        loop: true,
        align: "center"
      }}>
        <CarouselContent className="  h-[60vh]">
          {mydata.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="h-full flex justify-center">
                <CardContent className="flex flex-col justify-evenly  items-center  p-6 gap-4 ">
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <p className="w-[400px] text-center text-[#555]">{item.descrip}</p>
                    <div className="flex gap-2 justify-center">
                      {
                        item.projectList.map((project) => <span className="bg-skin-color px-4 py-2 text-white rounded-2xl">{project}</span>)
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