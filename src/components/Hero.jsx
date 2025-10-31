export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h2 className="text-5xl font-bold mb-4">Hi, I'm John Parrott</h2>
      <p className="text-slate-400 mb-6 max-w-xl">
        I’m a backend-focused developer passionate about building efficient systems and exploring full-stack development.
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/YourUsername" className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition">GitHub</a>
        <a href="https://linkedin.com/in/YourUsername" className="border border-sky-500 px-4 py-2 rounded-lg hover:bg-sky-500 hover:text-white transition">LinkedIn</a>
        <a href="/resume.pdf" className="text-sky-400 underline">Resume</a>
      </div>
    </section>
  );
}
