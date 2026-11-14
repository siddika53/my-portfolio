const projects = [
  {
    title: 'Project One',
    desc: 'Short description of what this project does.',
    tech: ['React', 'Node.js', 'MongoDB'],
    live: '#',
    github: '#',
  },
  {
    title: 'Project Two',
    desc: 'Short description of what this project does.',
    tech: ['React', 'Express', 'MongoDB'],
    live: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-slate-400 mt-2">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t) => (
                <span key={t} className="text-sm bg-slate-800 px-2 py-1 rounded">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-indigo-400">
              <a href={p.live}>Live</a>
              <a href={p.github}>GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}