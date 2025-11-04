import { useEffect, useRef, useState } from "react";

export default function Experience({ lenisRef }) {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = lenisRef?.current;
    const element = containerRef.current;
    const line = lineRef.current;

    if (!lenis || !element || !line) return;

    const handleLenisScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Start the line later (40% viewport offset)
      const startOffset = windowHeight * 0.6;
      const progress = windowHeight - sectionTop - startOffset;
      const percent = Math.min(
        Math.max(progress / (sectionHeight + windowHeight - startOffset), 0),
        1
      );

      line.style.height = `${percent * 100}%`;
    };

    // run once initially
    handleLenisScroll();

    // continuously update using Lenis animation frames
    const updateLoop = () => {
      handleLenisScroll();
      requestAnimationFrame(updateLoop);
    };
    requestAnimationFrame(updateLoop);

    return () => cancelAnimationFrame(updateLoop);
  }, [lenisRef]);

  return (
    <section ref={containerRef} className="relative pl-8">
      
      {/* Static track */}
      <div className=" absolute left-[7px] top-0 bottom-0 w-px bg-slate-700"></div>

      {/* Animated violet line */}
      <div
        ref={lineRef}
        className="absolute left-[7px] top-0 w-px bg-violet-500 transition-[height] duration-500 ease-out rounded-full"
        style={{ height: 0 }}
      ></div>

        {/* Experience entries */}
        <div className="space-y-20">
                {/* Entry 1 */}
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 items-start">

                {/* LEFT SIDE */}
                <div className="relative grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 items-start">
                    <div className="relative pl-1"> {/* add padding so text doesn't overlap the circle */}

                    {/* Circle positioned slightly outside */}
                    <div className="absolute -left-20 top-1">
                        <div className="relative w-10 h-10">
                        <div className="absolute inset-0 bg-violet-500/40 rounded-full blur-sm"></div>
                        <div className="absolute inset-0 border-2 border-violet-600/75 rounded-full"></div>
                        <div className="absolute inset-[4px] bg-violet-400/50 rounded-full"></div>
                        </div>
                    </div>

                    {/* Text */}
                    <h3 className="text-lg font-semibold">Software Developer</h3>
                    <p className="text-slate-400 text-sm">Independent Projects</p>
                    <p className="text-slate-500 text-sm mt-1">2022–Present</p>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                    {/* Job description */}
                    <p className="text-slate-400">
                      Built backend-focused applications including a custom C# web server and
                      a full-stack student management system. Focused on scalability, database
                      integration, and system reliability.
                    </p>
                </div>
            </div>

            {/* Entry 2 */}
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 items-start">

                {/* LEFT SIDE */}
                <div className="relative grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 items-start">
                    <div className="relative pl-1"> {/* add padding so text doesn't overlap the circle */}

                        {/* Circle positioned slightly outside */}
                        <div className="absolute -left-20 top-1">
                            <div className="relative w-10 h-10">
                            <div className="absolute inset-0 bg-violet-500/40 rounded-full blur-sm"></div>
                            <div className="absolute inset-0 border-2 border-violet-600/75 rounded-full"></div>
                            <div className="absolute inset-[4px] bg-violet-400/50 rounded-full"></div>
                            </div>
                        </div>

                    {/* Title, company, date range */}
                    <h3 className="text-lg font-semibold">Computer Science Student</h3>
                    <p className="text-slate-400 text-sm">University of South Florida</p>
                    <p className="text-slate-500 text-sm mt-1">2020–2025</p>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                    {/* Job description */}
                    <p className="text-slate-400">
                      During my time at USF, I built a strong foundation in computer science through coursework, 
                      research, and hands-on projects. I gained experience across a range of technologies, 
                      including backend development, databases, and software design. Beyond academics, I applied what 
                      I learned through personal and group projects, from full-stack web applications to custom backend 
                      systems, which helped me develop a practical understanding of how software moves from concept to deployment.
                    </p>                                                
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 items-start">

                {/* LEFT SIDE */}
                <div className="relative grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 items-start">
                    <div className="relative pl-1"> {/* add padding so text doesn't overlap the circle */}

                        {/* Circle positioned slightly outside */}
                        <div className="absolute -left-20 top-1">
                            <div className="relative w-10 h-10">
                            <div className="absolute inset-0 bg-violet-500/40 rounded-full blur-sm"></div>
                            <div className="absolute inset-0 border-2 border-violet-600/75 rounded-full"></div>
                            <div className="absolute inset-[4px] bg-violet-400/50 rounded-full"></div>
                            </div>
                        </div>

                    {/* Title, company, date range */}
                    <h3 className="text-lg font-semibold">Server</h3>
                    <p className="text-slate-400 text-sm">The Fountains at Lake Pointe Woods</p>
                    <p className="text-slate-500 text-sm mt-1">2020–2023</p>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                    {/* Job description */}
                    <p className="text-slate-400">
                      Worked in a fast-paced dining environment, serving residents with patience
                      and efficiency. Learned to communicate effectively and manage time under
                      pressure while maintaining a positive atmosphere.
                    </p>                                                
                </div>
            </div>

        </div>
    </section>
  );
}
