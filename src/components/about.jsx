import { useEffect, useState } from "react";

function About() {
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
        <div className="flex flex-col lg:flex-row overflow-hidden bg-white rounded-xl mt-4 w-full md:w-4/5 mx-2">
            <div className="w-full py-12 px-8 text-gray-800 flex flex-col justify-evenly">
                <h2 className="text-3xl text-gray-800 font-bold">About Me</h2>
                <div className="text-base mt-10 space-y-5">
                    <p>
                        As a biomedical engineering student, I bring a fresh perspective and eagerness to learn to a co-op opportunity in the field of biomedical engineering, full stack development, computer vision/machine learning, and more. With a strong foundation in mathematics, physics, and biology, I have already begun to develop skills in coding, data analysis, and problem-solving.
                    </p>
                    <p>
                        My passion for applying these skills to biomedical engineering is evident in my coursework and extracurricular activities. Whether it’s creating cutting-edge diagnostic tools or improving patient care, I’m ready to dive in. I am excited to explore the local biomedical industry and contribute to innovative projects that positively impact healthcare. I am interested in gaining hands-on experience in areas such as medical device design, biomanufacturing, or clinical engineering and am open to opportunities in both research and industry settings.
                    </p>
                    <p>
                        In addition to my biomedical focus, I have a passion for full stack development. I enjoy exploring technologies like Python, Java, HTML/CSS, and JavaScript frameworks. Building web applications, handling databases, and ensuring seamless user experiences from front-end to back-end are some of the skills I bring to the table. I am always eager to learn new technologies and apply them to real-world projects.
                    </p>
                    <p>
                        I am a strong communicator and collaborator with experience working in teams on group projects and presentations. Dedicated to continuous learning and development, I am eager to take on new challenges and expand my knowledge in both biomedical engineering and software development.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row overflow-hidden bg-gray-800">
                <div
                    className="flex flex-col md:flex-row overflow-hidden bg-gray-800 w-fit mx-2">
                    <div className="w-full py-6 px-6 text-gray-800 flex flex-row lg:flex-col justify-evenly">
                        {
                            screenWidth > 1024 && (
                                <h2 className="text-3xl font-bold text-white text-center none">My Tech Stack</h2>
                            )
                        }
                        <div className="flex flex-col items-center justify-evenly space-y-5">
                            <img className="mt-2"
                                 src="https://go-skill-icons.vercel.app/api/icons?i=python,cpp,arduino,dart,java,html,css,js"/>
                            <img className="mt-2"
                                 src="https://go-skill-icons.vercel.app/api/icons?i=flutter,react,next,nodejs,express,spring,tailwind,tensorflow"/>
                            <img className="mt-2"
                                 src="https://go-skill-icons.vercel.app/api/icons?i=mysql,postgres,supabase,mongodb,firebase,dynamodb"/>
                            <img className="mt-2"
                                 src="https://go-skill-icons.vercel.app/api/icons?i=aws,azure,gcp,vercel,netlify"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;