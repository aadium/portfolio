import Introduction from "./components/intro.jsx";
import About from "./components/about.jsx";
import Header from "./components/header.jsx";

export default function App() {
    return (
        <div>
            <Header />
            <div className="min-h-screen drop-shadow-2xl text-3xl flex w-full flex-1 flex-col items-center justify-center">
                <Introduction />
            </div>
            <div className="min-h-screen text-3xl drop-shadow-2xl flex w-full flex-1 items-center justify-center">
                <About />
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
