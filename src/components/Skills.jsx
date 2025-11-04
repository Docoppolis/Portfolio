import docker from "../assets/Docker.png";
import cpp from "../assets/CPP.png";
import react from "../assets/React.png";
import micronaut from "../assets/Micronaut.png"
import unrealEngine from "../assets/UnrealEngine.png"

export default function Skills() {
    return(

        <div className="flex flex-wrap gap-10 ml-55 mt-10 mb-10">

            <div className="flex flex-col items-center justify-center w-40 h-20 rounded-2xl bg-transparent border border-violet-500 transition-all duration-300 ease-in-out hover:scale-[1.08] hover:shadow-[0_0_0_3px_rgba(139,92,246,0.6)] hover:bg-slate-800/75">
                <img className="w-16 h-9 mb-1" src={docker} alt="Docker logo"></img>
                <h1 className="text-slate-100 font-bold text-xs">Docker</h1>
            </div>

            <div className="flex flex-col items-center justify-center w-40 h-20 rounded-2xl bg-transparent border border-violet-500 transition-all duration-300 ease-in-out hover:scale-[1.08] hover:shadow-[0_0_0_3px_rgba(139,92,246,0.6)] hover:bg-slate-800/75">
                <img className="w-9 h-9 mb-1" src={cpp} alt="C++ logo"></img>
                <h1 className="text-slate-100 font-bold text-xs">C++</h1>
            </div>

            <div className="flex flex-col items-center justify-center w-40 h-20 rounded-2xl bg-transparent border border-violet-500 transition-all duration-300 ease-in-out hover:scale-[1.08] hover:shadow-[0_0_0_3px_rgba(139,92,246,0.6)] hover:bg-slate-800/75">
                <img className="w-12 h-9 mb-1" src={react} alt="React logo"></img>
                <h1 className="text-slate-100 font-bold text-xs">React</h1>
            </div>

            <div className="flex flex-col items-center justify-center w-40 h-20 rounded-2xl bg-transparent border border-violet-500 transition-all duration-300 ease-in-out hover:scale-[1.08] hover:shadow-[0_0_0_3px_rgba(139,92,246,0.6)] hover:bg-slate-800/75">
                <img className="w-10 h-9 mb-1" src={micronaut} alt="Micronaut logo"></img>
                <h1 className="text-slate-100 font-bold text-xs">Micronaut</h1>
            </div>

            <div className="flex flex-col items-center justify-center w-40 h-20 rounded-2xl bg-transparent border border-violet-500 transition-all duration-300 ease-in-out hover:scale-[1.08] hover:shadow-[0_0_0_3px_rgba(139,92,246,0.6)] hover:bg-slate-800/75">
                <img className="w-12 h-9 mb-1" src={unrealEngine} alt="Unreal Engine logo"></img>
                <h1 className="text-slate-100 font-bold text-xs">Unreal Engine</h1>
            </div>

            <div className="flex flex-col items-center justify-center w-40 h-20 rounded-2xl bg-transparent border border-violet-500 transition-all duration-300 ease-in-out hover:scale-[1.08] hover:shadow-[0_0_0_3px_rgba(139,92,246,0.6)] hover:bg-slate-800/75">
                <img className="w-16 h-9 mb-1" src={docker} alt="Docker logo"></img>
                <h1 className="text-slate-100 font-bold text-xs">Docker</h1>
            </div>

            <div className="flex flex-col items-center justify-center w-40 h-20 rounded-2xl bg-transparent border border-violet-500 transition-all duration-300 ease-in-out hover:scale-[1.08] hover:shadow-[0_0_0_3px_rgba(139,92,246,0.6)] hover:bg-slate-800/75">
                <img className="w-16 h-9 mb-1" src={docker} alt="Docker logo"></img>
                <h1 className="text-slate-100 font-bold text-xs">Docker</h1>
            </div>

            <div className="flex flex-col items-center justify-center w-40 h-20 rounded-2xl bg-transparent border border-violet-500 transition-all duration-300 ease-in-out hover:scale-[1.08] hover:shadow-[0_0_0_3px_rgba(139,92,246,0.6)] hover:bg-slate-800/75">
                <img className="w-16 h-9 mb-1" src={docker} alt="Docker logo"></img>
                <h1 className="text-slate-100 font-bold text-xs">Docker</h1>
            </div>                        

        </div>

    );
}