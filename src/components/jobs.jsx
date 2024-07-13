import {useEffect, useState} from "react";
import supabase from "../utils/supabase_init.js";

function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [selectedJobId, setSelectedJobId] = useState(1);

    const handleJobClick = (id) => {
        setSelectedJobId(id);
    };

    function replaceNewlines(description) {
        const listItems = description.split(/\[newline]/g).map(item => `<li class="mb-2">${item.trim()}</li>`).join('');
        return `<ul style="dot">${listItems}</ul>`;
    }

    function formatJobDate(startDate, endDate) {
        const options = { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' };

        const start = new Date(startDate);
        const end = new Date(endDate);

        const formattedStart = start.toLocaleDateString('en-US', options);
        const formattedEnd = end.toLocaleDateString('en-US', options);

        return `${formattedStart} - ${formattedEnd}`;
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
    }, []);
    return (
        <div className="overflow-hidden rounded-xl mt-4 w-full md:w-4/6 mx-2">
            <h2 className="text-3xl text-gray-800 font-bold text-center mt-10 md:mt-4 lg:mt-0">My Work Experiences</h2>
            <div className="mt-5 flex bg-gray-800 rounded-lg w-full justify-evenly">
                {jobs.map((job) => (
                    (job.id === selectedJobId) ? (
                        <button
                            key={job.id}
                            onClick={() => handleJobClick(job.id)}
                            className="p-4 text-base font-bold text-white text-center"
                        >
                            {job.company}
                        </button>
                    ) : (
                        <button
                            key={job.id}
                            onClick={() => handleJobClick(job.id)}
                            className="p-4 text-base font-bold text-gray-500 text-center"
                        >
                            {job.company}
                        </button>
                    )
                ))}
            </div>
            <div className="mt-8">
                {jobs.filter(job => job.id === selectedJobId).map((job) => (
                    <div key={job.id}
                         className="flex flex-col lg:flex-row overflow-hidden bg-white rounded-lg mt-4 mx-2">
                        <div className="w-full py-6 px-10 text-gray-800 flex flex-col justify-evenly">
                            <div className="flex flex-col md:flex-row w-full justify-between">
                                <h2 className="text-2xl font-bold">{job.title}</h2>
                                <div className="font-semibold text-base">
                                    {formatJobDate(job.startDate, job.endDate)}
                                </div>
                            </div>
                            <div className="text-base mt-4 space-y-4">
                                <div className="font-semibold hover:cursor-pointer hover:underline w-fit"
                                     onClick={() => {
                                         window.open(job.jobWebsite, "_blank");
                                     }}>{job.company}</div>
                                <p dangerouslySetInnerHTML={{__html: replaceNewlines(job.description)}}/>
                            </div>
                            <hr className="mt-3"/>
                            <div className="mt-3 text-base font-semibold">
                                Technologies used: {job.techStack.join(', ')}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Jobs;