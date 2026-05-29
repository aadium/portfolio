import { useEffect, useState } from "react";

export default function Projects() {
    const [projects, setProjects] = useState([]);

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
        <section className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-rose-600 text-center mb-10 tracking-tight">
                    My Projects
                </h2>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl flex flex-col"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">{project.name}</h3>
                                </div>
                                <span className="inline-block bg-rose-100 text-rose-600 text-xs font-medium w-fit px-3 py-1 rounded-full mt-1 mb-2">
                                    {project.category}
                                </span>
                                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                                    {Array.isArray(project.techStack)
                                        ? project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))
                                        : (
                                            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md">
                                                {project.techStack}
                                            </span>
                                        )
                                    }
                                </div>
                                <div className="mt-2 text-sm md:text-base text-gray-700 flex-1">
                                    <p>{project.description}</p>
                                </div>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="p-3 border-t text-sm font-semibold text-center text-white bg-rose-600 rounded-b-xl hover:bg-rose-700 transition-colors duration-200">
                                    View {project.linkType}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}