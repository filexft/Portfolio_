import { useParams } from "react-router-dom"

const SingleProject = () => {
    const {projectID} = useParams()
    let projectname = projectID+'.png'
    console.log(projectname)
    return (
        <div className="min-h-screen flex flex-col ">
            <img
                src={`/assets/projects/${projectname}`}
                alt=""
                className=" max-w-screen self-center"
            />
            <div className="min-h-[500px]  p-6 mt-10 flex flex-col gap-4">
                <h1 className="text-3xl text-skin-color font-bold">
                    GoldenBlog :
                </h1>
                <div className="flex justify-evenly gap-2 ">
                    <div className="w-1/4">
                        <h3 className="font-semibold text-xl ">Overview</h3>
                        GoldenBlog is a dynamic web application that I designed
                        and developed as part of my University project. It serves as a
                        user-friendly platform for bloggers and readers to
                        interact, share, and create content. This project
                        showcases my skills in web development, user interface
                        design, and community-driven applications.
                    </div>
                    <div className="w-1/4">
                        <h3 className="font-semibold text-xl ">
                            Key Features:
                        </h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <span className="font-semibold">
                                    User Authentication:
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Blog Browsing:
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Interactive Comments:
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-1/4">
                        <h3 className="font-semibold text-xl ">Role</h3>
                        design, development
                    </div>

                    <div className="w-1/4">
                        <h3 className="font-semibold text-xl ">Tech</h3>
                        Front-end: HTML, CSS
                        Back-end:Php
                        Database: wamp 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProject