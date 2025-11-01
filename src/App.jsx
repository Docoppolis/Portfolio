import Hero from "./components/Hero";
import About from "./components/About"

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center overflow-hidden">

      {/* Background overlay */}
      <div className="absolute inset-0 bg-violet-900 opacity-[0.08] pointer-events-none" />

      {/* Two-column layout */}
      <div className="relative max-w-5xl w-full flex flex-col md:flex-row gap-16 px-6 py-0">

        {/* Left side */}
        <div className="flex-1 md:sticky md:top-0 self-start h-fit">
          <Hero />
        </div>

        {/* Right side */}
        <div className="flex-1 overflow-y-auto max-h-screen pr-2 space-y-16 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
          <About />
          <section>
            <div className="space-y-10">

              {/* --- First Job --- */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 items-start">

                {/* Left column — position, company, date */}
                <div>
                  <h3 className="text-lg font-semibold">Software Developer</h3>
                  <p className="text-slate-400 text-sm">Independent Projects</p>
                  <p className="text-slate-500 text-sm mt-1">2022–Present</p>
                </div>

                {/* Right column — description */}
                <div>
                  <p className="text-slate-400">
                    Built backend-focused applications including a custom C# web server and
                    a full-stack student management system. Focused on scalability, database
                    integration, and system reliability.
                  </p>
                </div>
              
                {/* --- Second Job --- */}
                <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 items-start">
                  <div>

                    <h3 className="text-lg font-semibold">Server</h3>
                    <p className="text-slate-400 text-sm">Retirement Home</p>
                    <p className="text-slate-500 text-sm mt-1">2020–2023</p>
                  </div>

                  <div>
                    <p className="text-slate-400">
                    Worked in a fast-paced dining environment, serving residents with patience
                    and efficiency. Learned to communicate effectively and manage time under
                    pressure while maintaining a positive atmosphere.
                    </p>
                  </div>              
                </div> 
              </div>
            </div>            
          </section>
        </div>
      </div>

    </div>
  )
}
