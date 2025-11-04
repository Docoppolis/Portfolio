export default function Hero() {
  return (
    <div className="flex-[0.5]">
      <h1 className="text-5xl font-bold mb-2">John Parrott</h1>
      <h2 className="text-2xl text-slate-400 mb-6">Backend Developer</h2>
      <p className="text-slate-400 mb-8">
        I build reliable, data-driven systems and enjoy exploring how backend
        architecture powers modern web apps.
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-px bg-white"></div>
        <span className="text-white text-lg font-semibold">About</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-px bg-white"></div>
        <h4 className="text-white text-lg font-semibold">Experience</h4>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-px bg-white"></div>
        <h5 className="text-white text-lg font-semibold">Projects</h5>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-px bg-white"></div>
        <h6 className="text-white text-lg font-semibold">Skills</h6>
      </div>
    </div>
  );
}
