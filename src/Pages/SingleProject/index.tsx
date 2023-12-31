import { useParams } from "react-router-dom";
import { projectList } from "../../utile/constant";

const SingleProject = () => {
    const { projectID } = useParams();
    const projectObject = projectList.find(
        (item) => item.title.toLowerCase() == projectID,
    );
    console.log(projectObject)
    return (
        <div className="min-h-screen flex flex-col">
            <img
                src={`${projectObject?.image}`}
                alt=""
                className=" max-w-screen self-center"
            />
            <div className="min-h-[500px]  p-6 mt-10 flex flex-col gap-8">
                <h1 className="text-3xl text-skin-color font-bold">
                    {projectObject?.title} :
                </h1>
                <div className="flex justify-evenly gap-2 flex-wrap  ">
                    <div className="min-w-[30%] w-50%  md:max-w-[40%] sm:w-[100%]">
                        <h3 className="font-semibold text-xl ">Overview</h3>
                        {projectObject?.single?.overview}
                    </div>
                    <div className="max-w-[30%] ">
                        <h3 className="font-semibold text-xl ">
                            Key Features:
                        </h3>

                        <ul className="flex flex-col gap-3 p-2 sm:flex-row sm:gap-2 sm:justify-center sm:items-center">
                            {projectObject?.single?.feature.map((item, idx) => (
                                <li key={idx} className="font-semibold">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[30%] sm:flex-row">
                        <div className="w-1/2">
                            <h3 className="font-semibold text-xl ">Role</h3>
                            {projectObject?.single?.role}
                        </div>

                        <div className="w-1/2">
                            <h3 className="font-semibold text-xl ">Tech</h3>
                            {projectObject?.single?.tech}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 mt-4 mb-4">
                    {projectObject?.single.site && (
                        <a
                            href={projectObject?.single.site}
                            className="bg-bcg-black-100 p-2 rounded-full cursor-pointer"
                        >
                            Check the Website
                        </a>
                    )}

                    <a
                        href={projectObject?.single.code}
                        className="bg-bcg-black-100 p-2 rounded-full cursor-pointer"
                    >
                        Check Github repo
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    {projectObject?.single.images?.map((pic, idx) => (
                        <img
                            key={idx}
                            src={pic}
                            alt=""
                            className="w-full max-w-[900px] rounded-sm"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
