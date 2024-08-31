import emailjs from 'emailjs-com';
import { useState } from 'react';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

function Chat() {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const [loading, setLoading] = useState(false);

    function sendEmail() {
        setLoading(true);
        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const message = document.querySelector('textarea').value;

        try {
            if (name && email && message) {
                const templateParams = {
                    from_name: name,
                    from_email: email,
                    message: message,
                };
    
                emailjs.send(serviceID, templateID, templateParams, publicKey)
                    .then((response) => {
                        console.log('SUCCESS!', response.status, response.text);
                    }, (error) => {
                        console.log('FAILED...', error);
                    });

                alert('Message sent successfully!');
            } else {
                alert('Please fill in all fields.');
            }
        } catch (error) {
            alert('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col lg:flex-row overflow-hidden bg-white text-center rounded-xl mt-4 w-full md:w-4/6 mx-2">
            <div className="w-full py-8 px-8 text-gray-800 flex flex-col justify-evenly">
                <h2 className="text-3xl text-gray-800 font-bold">Send me a message</h2>
                <p className="text-base mt-4 text-rose-600">I am open to freelance opportunities, full-time roles, and any other queries you might have.</p>
                <form className="mt-4 space-y-4 text-base" onSubmit={
                    (e) => {
                        e.preventDefault();
                        sendEmail();
                    }
                }>
                    <input type="text" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    <textarea placeholder="Message" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    <div className='flex flex-row w-full space-x-4'>
                        <button type="submit" className="w-full text-lg rounded-lg text-white font-semibold bg-rose-700 px-4 py-3 hover:bg-transparent hover:text-rose-700 hover:ring-inset hover:ring-2 ring-rose-700 transition duration-300 flex items-center justify-center" onClick={
                            (e) => {
                                e.preventDefault();
                                document.querySelectorAll('input').forEach(input => input.value = '');
                                document.querySelector('textarea').value = '';
                            }
                        }>
                            <ClearRoundedIcon className='mr-2' />
                            Clear
                        </button>
                        <button type="submit" className="w-full text-lg rounded-lg text-white font-semibold bg-gray-800 px-4 py-3 hover:bg-transparent hover:text-gray-800 hover:ring-inset hover:ring-2 ring-gray-800 transition duration-300 flex items-center justify-center" disabled={loading}>
                            {
                                loading ? (
                                    <>

                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send
                                        <SendRoundedIcon className='ml-2' />
                                    </>
                                )
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Chat;