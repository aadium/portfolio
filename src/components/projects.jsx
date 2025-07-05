import { useEffect, useState } from "react";

function Projects() {
    const [projects, setProjects] = useState([]);

    function replaceNewlines(description) {
        const listItems = description.split(/\n/g).map(item => `<li class="mb-2">${item.trim()}</li>`).join('');
        return `<ul>${listItems}</ul>`;
    }

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/data/projects_rows.json');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects from JSON:', error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="overflow-hidden rounded-xl mt-4 mx-2">
            <h2 className="text-3xl text-gray-800 font-bold text-center mt-10 md:mt-4 lg:mt-0">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-4 mx-2">
                {projects.map((project) => (
                    <div key={project.id}
                         className="drop-shadow-xl overflow-hidden bg-white rounded-lg flex flex-col justify-between">
                        <div className="py-6 px-10 text-gray-800 flex flex-col justify-evenly flex-grow">
                            <div className="flex flex-col md:flex-row justify-between">
                                <h2 className="text-2xl font-bold">{project.name}</h2>
                            </div>
                            <div className="mt-3 text-base text-rose-600">
                                {project.category}
                            </div>
                            <hr className="mt-3 border border-rose-100"/>
                            <div className="mt-1 text-base font-semibold">
                                {Array.isArray(project.techStack)
                                    ? project.techStack.join(', ')
                                    : project.techStack}
                            </div>
                            <hr className="mt-1 border border-rose-100"/>
                            <div className="text-base mt-4">
                                <p dangerouslySetInnerHTML={{ __html: replaceNewlines(project.description) }} />
                            </div>
                        </div>
                        <button
                            className="mb-5 ml-6 text-base rounded-lg text-white w-fit font-semibold bg-gray-800 px-4 py-2 hover:bg-transparent hover:text-gray-800 hover:ring-inset hover:ring-2 ring-gray-800 transition duration-150">
                            <a href={project.link} target="_blank" rel="noreferrer">
                                View {project.linkType}
                            </a>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;