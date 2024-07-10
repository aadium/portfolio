import myImage from './assets/myImage.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { useEffect, useState } from "react";

export default function App() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
        <div>
            <div className="min-h-screen text-3xl flex w-full flex-1 flex-col items-center justify-center">
                <div className="flex flex-col lg:flex-row overflow-hidden bg-white rounded-xl mt-4 w-4/6 mx-2">
                    <div className="h-max w-auto lg:w-1/2 bg-gray-900">
                        {
                            screenWidth > 1024 ? (
                                <img
                                    className="inset-0 h-full w-full object-cover object-center" src={myImage}
                                    alt="Aadi Umrani"/>
                            ) : null
                        }
                        <div className="flex flex-row bg-gray-900 my-4 mx-3 justify-evenly">
                            <GitHubIcon className="text-white hover:text-blue-300" onClick={
                                () => {
                                    window.open("https://github.com/aadium", "_blank")
                                }
                            } />
                            <LinkedInIcon className="text-white hover:text-blue-300" onClick={
                                () => {
                                    window.open("https://www.linkedin.com/in/aadi-umrani/", "_blank")
                                }
                            } />
                            <InstagramIcon className="text-white hover:text-blue-300" onClick={
                                () => {
                                    window.open("https://www.instagram.com/aadixum/", "_blank")
                                }
                            } />
                            <FacebookIcon className="text-white hover:text-blue-300" onClick={
                                () => {
                                    window.open("https://www.facebook.com/aadxxum.2004/", "_blank")
                                }
                            } />
                            <XIcon className="text-white hover:text-blue-300" onClick={
                                () => {
                                    window.open("https://twitter.com/um_aadi", "_blank")
                                }
                            } />

                        </div>
                    </div>
                    <div className="w-full py-6 px-8 text-gray-800 flex flex-col justify-evenly">
                        <div className="h-full flex flex-col justify-evenly">
                            <div>
                                <h1 className="font-bold text-3xl">Hi, I'm Aadi Umrani</h1>
                                <h4 className="font-semibold text-xl mt-4">I'm a second-year student at the University of Waterloo studying Biomedical Engineering.</h4>
                            </div>
                            <p className="text-base mt-4 lg:mt-0">
                                As a biomedical engineering student, my goal is to contribute to innovative projects that positively impact healthcare. I’m particularly interested in areas such as medical device design, biomanufacturing, and clinical engineering. Whether it’s creating cutting-edge diagnostic tools or improving patient care, I’m ready to dive in. I have a passion for full stack development, exploring technologies like Python, Java, HTML/CSS, and JavaScript frameworks. I enjoy building web applications, handling databases, and ensuring seamless user experiences from front-end to back-end.
                            </p>
                        </div>
                        <div className="flex flex-row space-x-5">
                            <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                                Explore this site
                            </p>
                            <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                                Download my resume
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen text-3xl flex w-full flex-1 flex-col items-center justify-center">
                <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-xl mt-4 w-4/5 mx-2">
                    <div className="w-full py-6 px-8 text-gray-800 flex flex-col justify-evenly">
                        <h2 className="text-3xl font-bold">About Me</h2>
                        <div className="text-lg mt-5 space-y-5">
                            <p>
                                As a biomedical engineering student, I bring a fresh perspective and eagerness to learn to a
                                co-op opportunity in the field of biomedical engineering, full stack development, computer
                                vision/machine learning, etc. With a strong foundation in mathematics, physics, and biology,
                                I have already begun to develop skills in areas such as coding, data analysis, and
                                problem-solving.
                            </p>
                            <p>
                                My passion for applying these skills to the field of biomedical engineering is evident in my
                                coursework and extracurricular activities. I am excited to explore the local biomedical
                                industry and contribute to innovative projects that have a positive impact on healthcare. I
                                am interested in gaining hands-on experience in areas such as medical device design,
                                biomanufacturing, or clinical engineering, and am open to opportunities in both research and
                                industry settings.
                            </p>
                            <p>
                                In addition to my technical skills, I am a strong communicator and collaborator, with
                                experience working in teams on group projects and presentations. I am also dedicated to
                                continuous learning and development, and eager to take on new challenges and expand my
                                knowledge.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row overflow-hidden bg-gray-800">
                        <div
                            className="flex flex-col md:flex-row overflow-hidden bg-gray-800 w-fit mx-2">
                            <div className="w-full py-6 px-6 text-gray-800 flex flex-col justify-evenly">
                                <h2 className="text-3xl font-bold text-white text-center">My Tech Stack</h2>
                                <hr />
                                <div className="flex flex-col items-center justify-evenly space-y-5">
                                    <img className="mt-2"
                                         src="https://go-skill-icons.vercel.app/api/icons?i=python,cpp,arduino,dart,java,html,css,js"/>
                                    <img className="mt-2"
                                         src="https://go-skill-icons.vercel.app/api/icons?i=flutter,react,nodejs,express,spring,tailwind,tensorflow,anaconda"/>
                                    <img className="mt-2"
                                         src="https://go-skill-icons.vercel.app/api/icons?i=mysql,postgres,supabase,mongodb,firebase,dynamodb"/>
                                    <img className="mt-2"
                                         src="https://go-skill-icons.vercel.app/api/icons?i=aws,azure,gcp,vercel,netlify"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen text-3xl flex w-full flex-1 flex-col items-center justify-center">
            </div>
            <div className="min-h-screen flex text-3xl w-full flex-1 flex-col items-center justify-center">
                Hello world!
            </div>
            <div className="min-h-screen flex text-3xl w-full flex-1 flex-col items-center justify-center">
                Hello world!
            </div>
        </div>
    )
}
