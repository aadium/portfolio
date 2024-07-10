function Header() {
    return (
        <nav className="bg-gray-800 fixed top-0 z-10 w-full drop-shadow-xl">
            <div className="mx-auto px-5 flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                    <h2 className="cursor-pointer text-white hover:text-blue-300 font-bold text-2xl" onClick={
                        () => {
                            window.location.href = "/";
                        }
                    }>Aadi Umrani</h2>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <a href="#" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#about" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium">About</a>
                        <a href="#jobs" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium">Experience</a>
                        <a href="#projects" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium">Projects</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;