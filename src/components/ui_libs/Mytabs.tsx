
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
        <TabsTrigger value="langage">Programming Languages</TabsTrigger>
        <TabsTrigger value="Framework">Frameworks and Libraries</TabsTrigger>
         <TabsTrigger value="db">Databases</TabsTrigger>
        <TabsTrigger value="tools">Tools and Technologies</TabsTrigger>
      </TabsList>
      <TabsContent value="langage" className="">
        <Card>
          <CardHeader>
            <CardTitle>Mastery in Programming Languages</CardTitle>
            <CardDescription>
             Explore my expertise in a variety of programming languages. 
             From JavaScript to Python, and Java, I have honed my skills to develop efficient, 
             clean, and scalable code for diverse applications. 
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
            <CardTitle>Expertise in Frameworks and Libraries</CardTitle>
            <CardDescription>
            Discover my proficiency with a wide range of frameworks and libraries. 
            Whether it's building dynamic web applications with React and Vue, or developing backend services with Node.js and Django, 
            I leverage the power of these tools to create high-performing and user-friendly applications.
            </CardDescription>
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
            <CardTitle>Proficient in Database Management</CardTitle>
            <CardDescription>
              Delve into my experience with various database technologies. 
              From relational databases like MySQL and PostgreSQL to NoSQL databases like MongoDB, 
              I am adept at designing, implementing, and managing databases that ensure data integrity, security, and performance.
            </CardDescription>
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
            <CardTitle>Versatility with Development Tools</CardTitle>
            <CardDescription>
             Explore the array of tools and technologies I utilize to streamline and enhance the development process. 
             From version control systems like Git to containerization with Docker, 
             I am well-versed in using modern tools to improve efficiency and collaboration in development projects.
            </CardDescription>
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
