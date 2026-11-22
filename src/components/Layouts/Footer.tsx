import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const links = [
    { href: 'https://linkedin.com/in/arif-fahrizal', label: 'LinkedIn', icon: LinkedinIcon },
    { href: 'https://github.com/arif-fahrizal', label: 'GitHub', icon: GithubIcon },
    { href: 'https://instagram.com/arifahrizal__', label: 'Instagram', icon: InstagramIcon },
  ];

  return (
    <footer className="border-t border-white/[0.07] py-8">
      <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-zinc-500">&copy; {currentYear} BrainBolt. Made for curious minds.</p>
        <div className="flex items-center gap-2">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.08] text-zinc-500 transition-all hover:border-[#ff0513]/40 hover:text-[#ff0513]"
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
