export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-slate-100 px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-semibold">JP</h1>
      <div className="flex space-x-6">
        <a href="#projects" className="hover:text-sky-400">Projects</a>
        <a href="#about" className="hover:text-sky-400">About</a>
        <a href="#contact" className="hover:text-sky-400">Contact</a>
      </div>
    </nav>
  );
}
