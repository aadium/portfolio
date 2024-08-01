import CallIcon from '@mui/icons-material/CallRounded';
import EmailIcon from '@mui/icons-material/EmailRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

function Footer() {
    return (
        <footer
            className="bg-gray-800 text-white text-center py-4 flex flex-col md:flex-row justify-between items-center px-10">
            <p className="text-base">Made with ❤️ by Aadi Umrani</p>
            <div className="flex flex-row bg-gray-800 justify-evenly w-full mt-4 md:w-1/2 md:mt-0 lg:w-1/4">
                <EmailIcon className="text-white hover:cursor-pointer hover:text-amber-400" onClick={() => {
                    window.open("mailto:aadi.fall22@gmail.com", "_blank");
                }} />
                <CallIcon className="text-white hover:cursor-pointer hover:text-zinc-400" onClick={() => {
                    window.open("tel:+1-437-665-1790", "_blank");
                }} />
                <GitHubIcon className="text-white hover:cursor-pointer hover:text-orange-400" onClick={() => {
                    window.open("https://github.com/aadium", "_blank");
                }} />
                <LinkedInIcon className="text-white hover:cursor-pointer hover:text-blue-400" onClick={() => {
                    window.open("https://www.linkedin.com/in/aadi-umrani/", "_blank");
                }} />
                <InstagramIcon className="text-white hover:cursor-pointer hover:text-rose-400" onClick={() => {
                    window.open("https://www.instagram.com/aadixum/", "_blank");
                }} />
                <FacebookIcon className="text-white hover:cursor-pointer hover:text-blue-400" onClick={() => {
                    window.open("https://www.facebook.com/aadxxum.2004/", "_blank");
                }} />
                <XIcon className="text-white hover:cursor-pointer hover:text-slate-400" onClick={() => {
                    window.open("https://twitter.com/um_aadi", "_blank");
                }} />
            </div>
        </footer>
    );
}

export default Footer;