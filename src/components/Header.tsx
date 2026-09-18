import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const nav = useNavigate();
	const page = useLocation().pathname;

  const lineCol: Record<string, string> = {
    '/': 'border-accent-green/50',
    '/drone': 'border-accent-blue/50',
    '/projects': 'border-accent-orange/50'
  }

  return (
    <div className="bg-card-bg">
    <header className="flex lg:flex-row flex-col justify-between items-center">
      <div className="flex flex-row lg:order-1 order-2 w-75 h-27 justify-center gap-8 items-center">
        <button className={`cursor-pointer ${page === '/drone' ? 'font-bold' : 'text-alt-text/70 font-normal hover:text-accent-blue'} text-s text-base duration-300 ease-in-out transition-colors`} onClick={() => nav('/drone')}>Drone</button>
				<button className={`cursor-pointer ${page === '/' ? 'font-bold' : 'text-alt-text/70 font-normal hover:text-accent-green'} text-s text-base duration-300 ease-in-out transition-colors`} onClick={() => nav('/')}>Home</button>
				<button className={`cursor-pointer ${page === '/projects' ? 'font-bold' : 'text-alt-text/70 font-normal hover:text-accent-orange'}  text-s text-base duration-300 ease-in-out transition-colors`} onClick={() => nav('/projects')}>Projects</button>
			</div>

      <h1 className="lg:order-2 order-1 text-center text-4xl lg:m-0 mt-10">Jacob Pledge</h1>

      <div className="hidden lg:flex order-3 flex-row w-75 h-27 items-center justify-center gap-8">
				<a href='https://www.instagram.com/jacobpledge' target='_blank' rel='noopener noreferrer' className="flex items-center">
					<FaInstagram className="h-9 w-auto text-alt-text/70 transition-all duration-300 ease-in-out hover:text-[#e1306c] hover:opacity-100" />
				</a>
				<a href='https://www.linkedin.com/in/pledgej' target='_blank' rel='noopener noreferrer' className="flex items-center">
					<FaLinkedin className="h-9 w-auto text-alt-text/70 transition-all duration-300 ease-in-out hover:text-[#0077B5] hover:opacity-100" />
				</a>
				<a href='https://github.com/PledgeJ' target='_blank' rel='noopener noreferrer' className="flex items-center">
					<FaGithub className="h-9 w-auto text-alt-text/70 transition-all duration-300 ease-in-out hover:text-github hover:opacity-100" />
				</a>
			</div>
    </header>
    <div className={`border-t-2 ${lineCol[page]} rounded-full`}></div>
    </div>
  )
}
