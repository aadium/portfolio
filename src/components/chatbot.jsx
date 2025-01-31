import { useState } from 'react';
import { ChatBubbleRounded, SearchRounded } from '@mui/icons-material';

const openRouterAPI = import.meta.env.VITE_OPENROUTER_API_KEY;

const knowledgeBase = [
    // Generic Questions
    { question: "Who are you?", answer: "I am Aadi Umrani, a biomedical engineering student at the University of Waterloo." },
    { question: "What do you study?", answer: "I study Biomedical Engineering." },
    { question: "What are your interests?", answer: "I am passionate about medical device design, biomanufacturing, clinical engineering, and full stack development." },
    { question: "What programming languages do you use?", answer: "I use Python, JavaScript, HTML/CSS, C++, Java, Flutter, and various JavaScript frameworks like React and Node.js." },
    { question: "What technical tools do you work with?", answer: "I have experience with tools like MongoDB, Firebase, AWS, Supabase, MySQL, and InfluxDB." },
    { question: "What kind of projects have you worked on?", answer: "I have worked on projects related to healthcare technology, web development, and computer vision applications." },
    { question: "What kind of roles have you held in previous internships?", answer: "I have held roles in tutoring, full-stack development, computer vision engineering, and software development, contributing to various innovative projects." },
    { question: "What are your career goals?", answer: "My goal is to contribute to innovative projects that positively impact healthcare, particularly in medical device design, biomanufacturing, and clinical engineering." },
    { question: "What do you enjoy most about your work?", answer: "I enjoy solving problems, working with technology to create impactful solutions, and learning new skills along the way." },
    { question: "How do you approach problem-solving?", answer: "I take a hands-on approach to solving problems, leveraging my technical skills in engineering and software development to find effective solutions." },
    { question: "What areas are you looking to gain more experience in?", answer: "I am always eager to gain more experience in biomedical engineering, software development, and the intersection of technology and healthcare." },
    { question: "How do you stay up-to-date with the latest technology?", answer: "I constantly explore new tools, frameworks, and programming languages, and I am always open to learning and applying emerging technologies in my projects." },
    { question: "What industries are you interested in?", answer: "I am interested in the biomedical industry, particularly in research and industry settings related to medical device design, biomanufacturing, and clinical engineering." },
    { question: "What makes you stand out?", answer: "I bring a fresh perspective, a strong foundation in mathematics, physics, and biology, and a passion for continuous learning and problem-solving." },

    // Specific Questions (from all resumes)
    // From BME Resume
    { question: "What were your responsibilities and achievements as a tutor?", answer: "I facilitated problem-solving sessions, graded assignments and exams, provided feedback to course instructors, and created a supportive learning environment that encouraged student engagement. This hands-on experience solidified my knowledge of C++ and enhanced my ability to explain complex concepts clearly and concisely." },
    { question: "What courses did you tutor at the university?", answer: "I tutored the BME 121 (Digital Computation) and BME 101L (Visual Communication) courses." },
    { question: "What projects have you worked on related to medical devices?", answer: "I have worked on an EMG-Controlled Steering Wheel,Pulse Grip, and Lung Disease Detection, focusing on improving patient care." },
    { question: "What is the goal of the Pulse Grip project?", answer: "The Pulse Grip project aims to help stroke patients regain finger mobility using EMG sensors." },
    { question: "How did you contribute to the EMG-Controlled Steering Wheel?", answer: "I developed a steering system controlled by EMG signals to improve accessibility for double-arm amputees." },
    { question: "What is your experience with EMG analysis?", answer: "I have worked on signal-processing circuits for EMG data and developed systems that utilize EMG for control." },
    { question: "Can you explain the Lung Disease Detection project?", answer: "I trained a CNN model to classify lung diseases, achieving high accuracy in detecting conditions like pneumonia and COVID-19." },
    { question: "What CAD design work have you done?", answer: "I have experience in CAD design for creating prototypes in medical device projects." },

    // From Programming Resume
    { question: "What experience do you have in computer vision?", answer: "I built a fruit detection system using YOLOv5 and Python, optimizing for real-world deployment." },
    { question: "What was your role in the Autonomous Robot project?", answer: "I led a team to develop a Turtlebot for the Toyota Innovation Challenge, programming it for autonomous navigation." },
    { question: "How did you improve the fruit detection system's accuracy?", answer: "I trained the YOLOv5 model, achieving an accuracy of 86.5% for object detection." },
    { question: "What is your experience with machine learning models?", answer: "I have trained models for object detection and medical diagnosis, focusing on real-time applications." },
    { question: "Can you explain your role in the development of a computer vision application?", answer: "I engineered a program to detect and count fruits, enhancing yield estimate accuracy." },
    { question: "What technologies did you use in the Toyota Innovation Challenge?", answer: "I utilized Python, LiDAR technology, and YOLOv5 for object detection in the autonomous robot project." },

    // From Full Stack Development (FSD) Resume
    { question: "What were your responsibilities and achievements as a tutor?", answer: "I facilitated problem-solving sessions, graded assignments and exams, provided feedback to course instructors, and created a supportive learning environment that encouraged student engagement. This hands-on experience solidified my knowledge of C++ and enhanced my ability to explain complex concepts clearly and concisely." },
    { question: "What courses did you tutor at the university?", answer: "I tutored the BME 121 (Digital Computation) and BME 101L (Visual Communication) courses." },
    { question: "What projects have you worked on in full stack development?", answer: "I have developed applications like Flash Brain, a flashcard app, and community booking management apps using Flutter." },
    { question: "What was your role at PlayTheory Labs?", answer: "As a Full-stack Developer Intern, I improved data processing times by 50% and developed React JS web applications." },
    { question: "What kind of web applications have you built?", answer: "I have built responsive web applications, including social media apps and interactive flashcard systems." },
    { question: "How do you ensure user experience in your applications?", answer: "I focus on responsive design and efficient back-end performance to enhance overall user experience." },
    { question: "What tools do you use for front-end development?", answer: "I use frameworks like React and Next.js along with CSS frameworks like Tailwind for responsive designs." },
    { question: "What is your experience with cloud services?", answer: "I have experience using AWS for hosting applications and managing databases, ensuring scalability and reliability." }
];

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false); // State to handle modal visibility

    const handleSend = async () => {
        if (!input.trim()) return;
    
        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);
    
        try {
            // Filter the knowledge base based on the user's input
            const relevantEntries = knowledgeBase.filter(item => 
                item.question.toLowerCase().includes(input.toLowerCase())
            );
    
            // If no relevant entries found, use the entire knowledge base
            const knowledgeBaseContent = relevantEntries.length > 0 
                ? relevantEntries.map(item => `${item.question}: ${item.answer}`).join(" ")
                : knowledgeBase.map(item => `${item.question}: ${item.answer}`).join(" ");
    
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${openRouterAPI}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "model": "meta-llama/llama-3.1-8b-instruct:free",
                    "messages": [
                        {
                            "role": "user",
                            "content": "Answer this question very briefly in first person perspective (assume you are Aadi Umrani): " + input + " " + knowledgeBaseContent
                        }
                    ]
                })
            });
    
            const data = await response.json();
            const botMessage = { sender: 'bot', text: data.choices[0].message.content };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error fetching response from OpenRouter API:', error);
            setMessages([...messages, userMessage, { sender: 'bot', text: 'Sorry, I could not fetch the answer.' }]);
        } finally {
            setInput('');
        }
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button 
                onClick={toggleModal} 
                className="fixed bottom-4 md:bottom-20 right-4 bg-rose-600 text-white rounded-lg px-4 py-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <ChatBubbleRounded/>
            </button>
            
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-2xl shadow-lg w-2/5 max-w-full flex flex-col max-h-[95vh]">
                        <div className="flex justify-between items-center bg-gray-800 text-white rounded-t-xl px-4 py-2">
                            <h2 className="text-lg font-semibold">AadiBot</h2>
                            <span className="cursor-pointer text-2xl" onClick={toggleModal}>&times;</span>
                        </div>
                        <div className="flex-grow p-4 overflow-y-auto max-h-[calc(95vh-100px)]">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender} ${msg.sender === 'user' ? 'bg-rose-500 text-white self-end' : 'bg-gray-200 self-start'} rounded-lg my-1 p-2`}>
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <div className="flex p-4 border-t border-gray-200">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me anything..."
                                className="flex-grow border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <button 
                                onClick={handleSend} 
                                className="ml-2 bg-rose-500 text-white rounded-lg px-4 py-2">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );    
}

export default Chatbot;