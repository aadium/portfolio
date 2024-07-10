function Header() {
    return (
        <nav className="bg-white fixed top-0 z-10 w-full drop-shadow-xl">
            <div className="mx-auto w-full px-5">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start" onClick={
                        () => window.location.href = '/'
                    }>
                        <h2 className='border-gray-900 text-xl font-bold cursor-pointer'>Aadi Umrani</h2>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;