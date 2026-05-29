function About() {
    return (
        <div className="flex flex-col lg:flex-row overflow-hidden bg-white rounded-xl w-full md:w-4/5 mx-2 shadow-md">
            {/* Left — bio text */}
            <div className="w-full py-10 px-8 text-gray-800 flex flex-col gap-5">
                <div>
                    <h2 className="text-3xl text-gray-800 font-bold">About Me</h2>
                    <h4 className="font-semibold text-lg mt-2 text-rose-600">
                        I am a Biomedical Engineering student
                    </h4>
                </div>
                <div className="text-base text-gray-600 leading-relaxed space-y-4">
                    <p>
                        I bring a fresh perspective and eagerness to learn to a co-op opportunity in the
                        field of biomedical engineering, full stack development, computer vision/machine
                        learning, and more. With a strong foundation in mathematics, physics, and biology,
                        I have already begun to develop skills in coding, data analysis, and problem-solving.
                    </p>
                    <p>
                        Whether it's creating cutting-edge diagnostic tools or improving patient care, I'm
                        ready to dive in. I am excited to explore the local biomedical industry and
                        contribute to innovative projects that positively impact healthcare.
                    </p>
                    <p>
                        In addition to my biomedical focus, I have a passion for full stack development.
                        I enjoy exploring technologies like Python, Java, HTML/CSS, and JavaScript
                        frameworks. Building web applications, handling databases, and ensuring seamless
                        user experiences from front-end to back-end are some of the skills I bring to
                        the table.
                    </p>
                    <p>
                        I am a strong communicator and collaborator with experience working in teams on
                        group projects and presentations. Dedicated to continuous learning and development,
                        I am eager to take on new challenges and expand my knowledge in both biomedical
                        engineering and software development.
                    </p>
                </div>
            </div>

            {/* Right — tech stack */}
            <div className="flex flex-col bg-gray-800 border-t-2 border-rose-600 lg:border-t-0 lg:border-l-2 shrink-0">
                <div className="py-8 px-6 flex flex-col items-center gap-5">
                    <h2 className="text-2xl font-bold text-rose-200 text-center">My Tech Stack</h2>
                    <hr className="w-full border border-rose-600" />
                    <img src="https://go-skill-icons.vercel.app/api/icons?i=python,cpp,arduino,dart,java,html,css,js,ts" alt="languages" />
                    <img src="https://go-skill-icons.vercel.app/api/icons?i=flutter,react,next,nodejs,express,spring,tailwind,tensorflow" alt="frameworks" />
                    <img src="https://go-skill-icons.vercel.app/api/icons?i=mysql,postgres,supabase,mongodb,firebase,dynamodb" alt="databases" />
                    <img src="https://go-skill-icons.vercel.app/api/icons?i=aws,azure,gcp,vercel,netlify" alt="cloud" />
                </div>
            </div>
        </div>
    );
}

export default About;