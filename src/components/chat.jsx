function Chat() {
    function sendEmail() {
        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const message = document.querySelector('textarea').value;

        if (name && email && message) {
            window.open(`mailto:aadi.fall22@gmail.com?subject=Message from ${name}&body=${message}`);
        }
    }

    return (
        <div className="flex flex-col lg:flex-row overflow-hidden bg-white text-center rounded-xl mt-4 w-full md:w-4/6 mx-2">
            <div className="w-full py-8 px-8 text-gray-800 flex flex-col justify-evenly">
                <h2 className="text-3xl text-gray-800 font-bold">Send me a message</h2>
                <p className="text-base mt-4">I am open to freelance opportunities, full-time roles, and any other queries you might have.</p>
                <form className="mt-4 space-y-4 text-base" onSubmit={
                    (e) => {
                        e.preventDefault();
                        sendEmail();
                    }
                }>
                    <input type="text" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    <textarea placeholder="Message" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    <button type="submit" className="w-full text-base rounded-lg text-white font-semibold bg-gray-800 px-4 py-2 hover:bg-transparent hover:text-gray-800 hover:ring-inset hover:ring-2 ring-gray-800">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Chat;