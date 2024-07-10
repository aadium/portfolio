import myImage from '../assets/myImage.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { useEffect, useState } from "react";

function Introduction() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const studyYear = calculateStudyYear("2022-09-01");
    const yearSuffix = studyYear === 1 ? "st" : studyYear === 2 ? "nd" : studyYear === 3 ? "rd" : "th";

    function calculateStudyYear(startDate) {
        const start = new Date(startDate);
        const today = new Date();
        let yearOfStudy = today.getFullYear() - start.getFullYear();
        if (yearOfStudy > 5) {
            yearOfStudy = 5;
        }
        return yearOfStudy;
    }

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    return (
        <div className="flex flex-col lg:flex-row overflow-hidden bg-white rounded-xl mt-4 w-4/6 mx-2">
            <div className="h-full flex flex-col lg:w-1/2 bg-gray-800">
                {screenWidth > 1024 && (
                    <img
                        className="h-full w-full object-cover object-center"
                        src={myImage}
                        alt="Aadi Umrani"
                    />
                )}
                <div className="flex flex-row bg-gray-800 my-4 mx-3 justify-evenly">
                    <GitHubIcon
                        className="text-white hover:text-blue-300"
                        onClick={() => {
                            window.open("https://github.com/aadium", "_blank");
                        }}
                    />
                    <LinkedInIcon
                        className="text-white hover:text-blue-300"
                        onClick={() => {
                            window.open("https://www.linkedin.com/in/aadi-umrani/", "_blank");
                        }}
                    />
                    <InstagramIcon
                        className="text-white hover:text-blue-300"
                        onClick={() => {
                            window.open("https://www.instagram.com/aadixum/", "_blank");
                        }}
                    />
                    <FacebookIcon
                        className="text-white hover:text-blue-300"
                        onClick={() => {
                            window.open("https://www.facebook.com/aadxxum.2004/", "_blank");
                        }}
                    />
                    <XIcon
                        className="text-white hover:text-blue-300"
                        onClick={() => {
                            window.open("https://twitter.com/um_aadi", "_blank");
                        }}
                    />
                </div>
            </div>
            <div className="w-full py-6 px-8 text-gray-800 flex flex-col justify-evenly">
                <div className="h-full flex flex-col justify-evenly">
                    <div>
                        <h1 className="font-bold text-3xl">Hi, I am Aadi Umrani</h1>
                        <h4 className="font-semibold text-xl mt-4">
                            I am a {studyYear}<sup>{yearSuffix}</sup> year student at the University of Waterloo studying Biomedical
                            Engineering.
                        </h4>
                    </div>
                    <p className="text-base mt-4 lg:mt-0">
                        My goal is to contribute to innovative projects that positively impact healthcare. I’m
                        particularly interested in areas such as medical device design, biomanufacturing, and
                        clinical engineering. Whether it’s creating cutting-edge diagnostic tools or improving
                        patient care, I’m ready to dive in. I have a passion for full stack development,
                        exploring technologies like Python, Java, HTML/CSS, and JavaScript frameworks. I enjoy
                        building web applications, handling databases, and ensuring seamless user experiences
                        from front-end to back-end.
                    </p>
                </div>
                <div className="flex flex-row space-x-6 mt-4 lg:mt-0">
                    <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        Explore this site
                    </p>
                    <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2 hover:cursor-pointer hover:underline"
                       onClick={
                           () => {
                               window.open("https://lbiwfynxcgjkaxaoirql.supabase.co/storage/v1/object/public/documents/resume.pdf", "_blank");
                           }
                       }>
                        View my resume
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Introduction;