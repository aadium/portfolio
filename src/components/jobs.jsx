import {useEffect, useState} from "react";
import supabase from "../utils/supabase_init.js";

function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [selectedJobId, setSelectedJobId] = useState(1);

    const handleJobClick = (id) => {
        setSelectedJobId(id);
    };

    function replaceNewlines(description) {
        const listItems = description.split(/\[newline\]/g).map(item => `<li class="mb-2">${item.trim()}</li>`).join('');
        return `<ul style="dot">${listItems}</ul>`;
    }

    useEffect(() => {
        const fetchJobs = async () => {
            const {data, error} = await supabase.from('jobs').select('*');
            if (error) {
                console.error(error);
            } else {
                const sortedJobs = data.sort((b, a) => a.id - b.id);
                setJobs(sortedJobs);
            }
        }
        fetchJobs();
    });
    return (
        <div className="overflow-hidden rounded-xl mt-4 w-4/6 mx-2">
            <h2 className="text-3xl text-gray-800 font-bold text-center">My Work Experiences</h2>
            <div className="mt-5 flex bg-white rounded-lg w-full justify-evenly">
                {jobs.map((job) => (
                    <button
                        key={job.id}
                        onClick={() => handleJobClick(job.id)}
                        className="p-4 text-base font-bold text-gray-800 text-center"
                    >
                        {job.title}
                    </button>
                ))}
            </div>
            <div className="mt-8">
                {jobs.filter(job => job.id === selectedJobId).map((job) => (
                    <div key={job.id}
                         className="flex flex-col lg:flex-row overflow-hidden bg-white rounded-lg mt-4 mx-2">
                        <div className="w-full py-8 px-10 text-gray-800 flex flex-col justify-evenly">
                            <h2 className="text-2xl font-bold">{job.title}</h2>
                            <div className="text-base mt-4 space-y-4">
                                <p className="font-semibold">{job.company}</p>
                                <p dangerouslySetInnerHTML={{__html: replaceNewlines(job.description)}}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Jobs;