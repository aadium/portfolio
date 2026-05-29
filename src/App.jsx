import Introduction from "./components/intro.jsx";
import About from "./components/about.jsx";
import Header from "./components/header.jsx";
import Jobs from "./components/jobs.jsx";
import Projects from "./components/projects.jsx";
import Footer from "./components/footer.jsx";
import Chat from "./components/chat.jsx";

export default function App() {
    return (
        <div>
            <Header/>
            <div className="min-h-screen text-3xl drop-shadow-2xl flex w-full flex-1 items-center justify-center">
                <Introduction/>
            </div>
            <a name="about"/>
            <div className="min-h-screen text-3xl drop-shadow-2xl flex w-full flex-1 items-center justify-center">
                <About/>
            </div>
            <a name="jobs"/>
            <div className="min-h-screen text-3xl drop-shadow-2xl flex w-full flex-1 items-center justify-center">
                <Jobs/>
            </div>
            <a name="projects"/>
            <div className="min-h-screen flex text-3xl w-full flex-1 flex-col items-center justify-center">
                <Projects/>
            </div>
            <a name="chat"/>
            <div className="min-h-screen text-3xl drop-shadow-2xl flex w-full flex-1 items-center justify-center">
                <Chat/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
