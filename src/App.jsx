import Introduction from "./components/intro.jsx";
import About from "./components/about.jsx";
import Header from "./components/header.jsx";
import Jobs from "./components/jobs.jsx";
import Projects from "./components/projects.jsx";
import Footer from "./components/footer.jsx";
import Chat from "./components/chat.jsx";

export default function App() {
    return (
        <div className="bg-gray-100">
            <Header />

            {/* Hero / Introduction */}
            <section className="pt-16 flex w-full items-center justify-center px-4 py-16">
                <Introduction />
            </section>

            {/* About */}
            <a name="about" />
            <section className="flex w-full items-center justify-center px-4 py-16">
                <About />
            </section>

            {/* Experience */}
            <a name="jobs" />
            <section className="flex w-full items-center justify-center px-4 py-16">
                <Jobs />
            </section>

            {/* Projects */}
            <a name="projects" />
            <section className="flex w-full flex-col items-center justify-center px-4 py-16">
                <Projects />
            </section>

            {/* Contact */}
            <a name="chat" />
            <section className="flex w-full items-center justify-center px-4 py-16">
                <Chat />
            </section>
            
            <Footer />
        </div>
    );
}