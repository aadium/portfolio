import Introduction from "./components/intro.jsx";
import About from "./components/about.jsx";
import Header from "./components/header.jsx";
import supabase from "./utils/supabase_init.js";
import {useEffect, useState} from "react";
import Jobs from "./components/jobs.jsx";

export default function App() {
    return (
        <div>
            <Header/>
            <div
                className="min-h-screen drop-shadow-2xl text-3xl flex w-full flex-1 flex-col items-center justify-center">
                <Introduction/>
            </div>
            <a name="about"/>
            <div className="min-h-screen text-3xl drop-shadow-2xl flex w-full flex-1 items-center justify-center">
                <About/>
            </div>
            <a name="jobs"/>
            <div className="min-h-screen text-3xl drop-shadow-2xl flex w-full flex-1 items-center justify-center">
                <Jobs />
            </div>
            <a name="projects"/>
            <div className="min-h-screen flex text-3xl w-full flex-1 flex-col items-center justify-center">
                Hello World
            </div>
        </div>
    )
}
