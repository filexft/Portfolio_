import { useParams } from "react-router-dom"
import { projectList } from "../../utile/constant"

const SingleProject = () => {
    const {projectID} = useParams()
    const projectObject = projectList.find((item) => item.title.toLowerCase() == projectID); 
    console.log(projectObject);
    return (
        <div className="min-h-screen flex flex-col ">
            <img
                src={`${projectObject?.image}`}
                alt=""
                className=" max-w-screen self-center"
            />
            <div className="min-h-[500px]  p-6 mt-10 flex flex-col gap-4">
                <h1 className="text-3xl text-skin-color font-bold">
                    {projectObject?.title} :
                </h1>
                <div className="flex justify-evenly gap-2 ">
                    <div className="w-1/4">
                        <h3 className="font-semibold text-xl ">Overview</h3>
                        {projectObject?.single?.overview}
                    </div>
                    <div className="w-1/4">
                        <h3 className="font-semibold text-xl ">
                            Key Features:
                        </h3>

                        <ul className="flex flex-col gap-3 p-2">
                            {projectObject?.single?.feature.map((item, idx) => <li key={idx} className="font-semibold">{item}</li>)}
                        </ul>
                    </div>

                    <div className="w-1/4">
                        <h3 className="font-semibold text-xl ">Role</h3>
                        {projectObject?.single?.role}
                    </div>

                    <div className="w-1/4">
                        <h3 className="font-semibold text-xl ">Tech</h3>
                        {projectObject?.single?.tech}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProject