import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="grid place-items-center w-full">
      <span className="inline-block mx-auto text-xl text-white font-permanentmarker -rotate-4">
        Don't forget to follow me
      </span>
      <div className="flex justify-center gap-5 w-70 my-5 px-5 py-2.5 bg-linear-to-r from-purple-500 to-pink-500">
        <Link to="https://linkedin.com/in/arif-fahrizal" target="_blank" className="duration-300 hover:text-white">
          <LinkedinIcon size={35} />
        </Link>
        <Link to="https://github.com/arif-fahrizal" target="_blank" className="duration-300 hover:text-white">
          <GithubIcon size={35} />
        </Link>
        <Link to="https://instagram.com/arifahrizal__" target="_blank" className="duration-300 hover:text-white">
          <InstagramIcon size={35} />
        </Link>
      </div>
      <div className="w-full px-4 py-8 text-sm text-center text-gray-400 border-t border-white/10">
        <p>&copy; {currentYear} BrainBolt. Made with ❤️ for quiz enthusiasts</p>
      </div>
    </footer>
  );
}
