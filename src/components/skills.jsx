const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS',
  'Node.js', 'Express', 'MongoDB', 'Git & GitHub', 'Figma', 'Python (learning)',
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span key={s} className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg">
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}