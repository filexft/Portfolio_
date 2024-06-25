
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs"


import {Icons , Icon} from "../../components/ui_libs/icons"

let langage = Icons.langage
let framework = Icons.framework
let db = Icons.db
let tools = Icons.tools


export function TabsDemo() {
  return (
    <Tabs defaultValue="langage" className="flex flex-col w-full min-h-[300px]">
      <TabsList  className="flex items-center">
        <TabsTrigger value="langage">Langages de programmation</TabsTrigger>
        <TabsTrigger value="Framework">Frameworks et bibliothèques</TabsTrigger>
         <TabsTrigger value="db">Bases de données</TabsTrigger>
        <TabsTrigger value="tools">Outils et technologies</TabsTrigger>
      </TabsList>
      <TabsContent value="langage" className="">
        <Card>
          <CardHeader>
            <CardTitle>Maîtrise des langages de programmation</CardTitle>
            <CardDescription>
Explorez mon expertise dans une variété de langages de programmation.
 De JavaScript à Python et Java, j'ai perfectionné mes compétences pour développer des applications efficaces,
 code propre et évolutif pour diverses applications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 w-full min-h-[150px]">
                <div className="space-y-1 flex flex-wrap  justify-evenly items-center gap-2 max-w-full">
                    {
                        Object.keys(langage).map((icon) => 
                                 (
                                    <span className="h-full bg-background">
                                        <Icon category={"langage"} name={icon}   width={100}/>
                                    </span>
                                )
                            )
                    }
                </div>
            <div className="space-y-1">
              
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Framework">
        <Card>
          <CardHeader>
            <CardTitle>Expertise en frameworks et bibliothèques</CardTitle>
            <CardDescription>
            Découvrez ma maîtrise d'un large éventail de frameworks et de bibliothèques.
 Qu'il s'agisse de créer des applications Web dynamiques avec React et Vue, ou de développer des services backend avec Node.js et Django,
 J'exploite la puissance de ces outils pour créer des applications performantes et conviviales.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 w-full min-h-[150px]">
            <div className="space-y-1 flex flex-wrap  justify-evenly items-center gap-2 max-w-full">
                    {
                        Object.keys(framework).map((icon) => 
                                 (
                                    <span className="h-full bg-background">
                                        <Icon category={"framework"} name={icon}   width={100} color={"blue"}/>
                                    </span>
                                )
                            )
                    }
            </div>
          </CardContent>
        </Card>
      </TabsContent>
       <TabsContent value="db">
        <Card>
          <CardHeader>
            <CardTitle>Maîtrise de la gestion de bases de données</CardTitle>
            <CardDescription>
              Plongez dans mon expérience avec diverses technologies de bases de données.
 Des bases de données relationnelles comme MySQL et PostgreSQL aux bases de données NoSQL comme MongoDB,
 Je suis apte à concevoir, mettre en œuvre et gérer des bases de données qui garantissent l'intégrité, la sécurité et les performances des données.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 w-full min-h-[150px]">
            <div className="space-y-1 flex flex-wrap  justify-evenly items-center gap-2 max-w-full">
                    {
                        Object.keys(db).map((icon) => 
                                 (
                                    <div className="h-full bg-background">
                                        <Icon category={"db"} name={icon}   width={100}/>
                                    </div>
                                )
                            )
                    }
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tools">
        <Card>
          <CardHeader>
            <CardTitle>Polyvalence avec les outils de développement</CardTitle>
            <CardDescription>
            Explorez la gamme d'outils et de technologies que j'utilise pour rationaliser et améliorer le processus de développement.
 Des systèmes de contrôle de version comme Git à la conteneurisation avec Docker,
 Je maîtrise parfaitement l'utilisation d'outils modernes pour améliorer l'efficacité et la collaboration dans les projets de développement.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 w-full min-h-[150px]">
             <div className="space-y-1 flex flex-wrap  justify-evenly items-center gap-2 max-w-full">
                    {
                        Object.keys(tools).map((icon) => 
                                 (
                                    <span className="h-full bg-background">
                                        <Icon category={"tools"} name={icon}   width={100}/>
                                    </span>
                                )
                            )
                    }
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
