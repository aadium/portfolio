import {useEffect, useState} from "react";
import supabase from "../utils/supabase_init.js";

function Projects() {
    const [projects, setProjects] = useState([]);

    function replaceNewlines(description) {
        const listItems = description.split(/\[newline]/g).map(item => `<li class="mb-2">${item.trim()}</li>`).join('');
        return `<ul style="dot">${listItems}</ul>`;
    }

    useEffect(() => {
        const fetchProjects = async () => {
            const {data, error} = await supabase.from('projects').select('*');
            if (error) {
                console.error(error);
            } else {
                const sortedProjects = data.sort((b, a) => a.id - b.id);
                setProjects(sortedProjects);
            }
        }
        fetchProjects();
    });
    return (
        <div className="overflow-hidden rounded-xl mt-4 mx-2">
            <h2 className="text-3xl text-gray-800 font-bold text-center mt-10 md:mt-4 lg:mt-0">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-4 mx-2">
                {projects.map((project) => (
                    <div key={project.id} className="drop-shadow-xl overflow-hidden bg-white rounded-lg">
                        <div className="py-6 px-10 text-gray-800 flex flex-col justify-evenly">
                            <div className="flex flex-col md:flex-row justify-between">
                                <h2 className="text-2xl font-bold">{project.name}</h2>
                            </div>
                            <div className="mt-3 text-base">
                                {project.category}
                            </div>
                            <hr className="mt-3"/>
                            <div className="mt-1 text-base font-semibold">
                                Tech Stack: {project.techStack.join(', ')}
                            </div>
                            <hr className="mt-1"/>
                            <div className="text-base mt-4 space-y-4">
                                <p dangerouslySetInnerHTML={{__html: replaceNewlines(project.description)}}/>
                            </div>
                            <button
                                className="my-1 text-base rounded-lg text-white w-fit font-semibold bg-gray-800 px-4 py-2">
                                <a href={project.link} target="_blank" rel="noreferrer">View {project.linkType}</a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;