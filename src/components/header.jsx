import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="md:bg-gray-800 lg:bg-gray-800 fixed top-0 z-10 w-full drop-shadow-xl">
            <div className="mx-auto px-5 flex justify-between items-center h-16">
                <div className="flex-shrink-0 hidden md:block">
                    <h2 className="cursor-pointer text-white hover:text-gray-300 font-bold text-2xl" onClick={() => {
                        window.location.href = "/";
                    }}>
                        Aadi Umrani
                    </h2>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white px-4 py-3 rounded-full text-base font-medium bg-gray-800">
                        <MenuRoundedIcon />
                    </button>
                </div>
                <div
                    className={`absolute top-0 left-0 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} bg-gray-800 md:hidden transition-transform duration-300 ease-in-out`}>
                    <div className="flex flex-col items-center space-y-4 py-4 px-4">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white px-3 py-2 rounded-md text-base font-medium">
                            <CloseRoundedIcon />
                        </button>
                        <a href="/#"
                           className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="/#about"
                           className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">About</a>
                        <a href="/#jobs"
                           className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Experience</a>
                        <a href="/#projects"
                           className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Projects</a>
                    </div>
                </div>
                <div className="hidden md:flex ml-10 items-baseline space-x-4">
                    <a href="/#"
                       className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="/#about"
                       className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">About</a>
                    <a href="/#jobs"
                       className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Experience</a>
                    <a href="/#projects"
                       className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Projects</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;