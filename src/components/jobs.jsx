import { useEffect, useState } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [selectedJobId, setSelectedJobId] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleJobClick = (id) => {
        setSelectedJobId(id);
        setMenuOpen(false);
    };

    function replaceNewlines(description) {
        const listItems = description.split(/\n/g).map(item => `<li class="mb-2">${item.trim()}</li>`).join('');
        return `<ul>${listItems}</ul>`;
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
            try {
                const response = await fetch('/data/jobs_rows.json');
                const data = await response.json();
                setJobs(data);
                if (data.length > 0) {
                    setSelectedJobId(data[0].id);
                }
            } catch (error) {
                console.error('Error fetching jobs from JSON:', error);
            }
        };
        fetchJobs();
    }, []);

    return (
        <div className="overflow-hidden rounded-xl w-full md:w-4/6 mx-2">
            <h2 className="text-3xl text-gray-800 font-bold text-center mb-6">My Work Experiences</h2>

            {/* Tab bar */}
            <div className="flex bg-gray-800 rounded-lg w-full justify-evenly shadow-md">
                <div className={`flex-col md:flex-row ${menuOpen ? 'flex' : 'hidden'} md:flex w-full justify-evenly`}>
                    {jobs.map((job) => (
                        <button
                            key={job.id}
                            onClick={() => handleJobClick(job.id)}
                            className={`p-4 text-sm font-bold text-center border-b-4 transition-colors duration-200 ${
                                job.id === selectedJobId
                                    ? 'text-rose-300 border-rose-500'
                                    : 'text-white border-transparent hover:text-rose-200 hover:border-rose-800'
                            }`}
                        >
                            {job.company}
                        </button>
                    ))}
                </div>
                <button
                    className="md:hidden p-4 text-base font-bold text-white text-center w-full"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <MenuRoundedIcon />
                </button>
            </div>

            {/* Job detail */}
            {jobs.filter(job => job.id === selectedJobId).map((job) => (
                <div
                    key={job.id}
                    className="overflow-hidden bg-white rounded-lg mt-4 shadow-md"
                >
                    <div className="py-6 px-8 text-gray-800 flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row w-full justify-between gap-1">
                            <h2 className="text-2xl font-bold">{job.title}</h2>
                            <div className="font-semibold text-sm text-rose-600 md:text-right">
                                {formatJobDate(job.startDate, job.endDate)}
                            </div>
                        </div>

                        <button
                            className="font-semibold text-sm text-rose-600 hover:underline w-fit"
                            onClick={() => window.open(job.jobWebsite, "_blank")}
                        >
                            {job.company}
                        </button>

                        <div className="text-base text-gray-700">
                            <p dangerouslySetInnerHTML={{ __html: replaceNewlines(job.description) }} />
                        </div>

                        <hr className="border border-rose-100" />

                        <div className="text-sm font-semibold text-gray-500">
                            {Array.isArray(job.skills) ? job.skills.join(', ') : job.skills}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Jobs;