import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import myHeaderImage from '../assets/myHeaderImage.jpg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 fixed top-0 z-10 w-full drop-shadow-xl">
            <div className="mx-auto px-5 flex justify-between items-center h-16">
                <div className="flex-shrink-0 flex flex-row items-center">
                    <img
                        className="h-10 w-10 rounded-full border-2 border-white lg:hidden"
                        src={myHeaderImage}
                        alt="Aadi Umrani"
                    />
                    <h2 className="cursor-pointer text-white font-bold text-2xl ml-3" onClick={() => {
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
                    className={`absolute top-0 right-0 transform ${isMenuOpen ? '-translate-x-0' : 'translate-x-full'
                        } bg-gray-800 md:hidden transition-transform duration-300 ease-in-out`}>
                    <div className="flex flex-col w-full items-center space-y-4 p-4">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white px-3 py-2 rounded-md text-base font-medium">
                            <CloseRoundedIcon />
                        </button>
                        <a href="/#"
                            className="text-white px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="/#about"
                            className="text-white px-3 py-2 rounded-md text-base font-medium">About</a>
                        <a href="/#jobs"
                            className="text-white px-3 py-2 rounded-md text-base font-medium">Experience</a>
                        <a href="/#projects"
                            className="text-white px-3 py-2 rounded-md text-base font-medium">Projects</a>
                        <a href="/#chat"
                            className="text-white px-3 py-2 rounded-md text-base font-medium">Chat</a>
                    </div>
                </div>
                <div className="hidden md:flex ml-10 items-baseline space-x-4">
                    <a href="/#"
                        className="text-white px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="/#about"
                        className="text-white px-3 py-2 rounded-md text-base font-medium">About</a>
                    <a href="/#jobs"
                        className="text-white px-3 py-2 rounded-md text-base font-medium">Experience</a>
                    <a href="/#projects"
                        className="text-white px-3 py-2 rounded-md text-base font-medium">Projects</a>
                    <a href="/#chat"
                        className="text-white px-3 py-2 rounded-md text-base font-medium">Chat</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;