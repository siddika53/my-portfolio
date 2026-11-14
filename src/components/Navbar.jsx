export default function Navbar() {
  const links = ['Home', 'About', 'Projects', 'Skills', 'Contact']

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-indigo-400">Portfolio</a>
        <ul className="hidden md:flex gap-6 text-slate-300">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-indigo-400">{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}