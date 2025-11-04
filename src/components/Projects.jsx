import pathOptimize from "../assets/PathOptimize.png";
import webServer from "../assets/WebServer.png";
import studentManagementSystem from "../assets/StudentManagementSystem.png";
import portfolio from "../assets/Portfolio.png";
import shinkenshi from "../assets/Shinkenshi.png";
import stockViewer from "../assets/StockViewer.png";

export default function Projects() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">
            
            <a href="https://github.com/Docoppolis/PathOptimize" target="_blank" rel="noopener noreferrer" className="text-violet-500 block group">
            <div className="relative w-full p-4 rounded-2xl overflow-hidden group whitespace-normal break-words">
                <div className="absolute inset-0 bg-transparent transition-all duration-300 ease-in-out group-hover:bg-slate-700/50 group-hover:scale-[1.02]" />
                <img className=" absolute w-32 h-18 top-4 left-4 object-cover rounded-2xl pointer-events-none border-2 border-slate-300 group-hover:border-violet-500 transition-all duration-500" src={pathOptimize} alt="PathOptimize Photo" />
                <p className="relative ml-40 font-semibold text-slate-100 transition-colors duration-300 group-hover:text-violet-500 inline-block">
                <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 group-hover:after:w-full">
                    PathOptimize
                </span>
                </p>              
                <p className="text-slate-400 ml-40">
                PathOptimize is an application designed to improve the organization and movement of hospital equipment using 
                Tampa General Hospital’s floor plan. It analyzes equipment locations and traffic patterns to identify more efficient 
                storage placements. The goal is to reduce retrieval time and improve workflow across hospital departments.
                </p>       
            </div>
            </a>

            <a href="https://github.com/Docoppolis/Docoppolis-Web-Server" target="_blank" rel="noopener noreferrer" className="text-violet-500 block group">
            <div className="relative w-full p-4 rounded-2xl overflow-hidden group whitespace-normal break-words">
                <div className="absolute inset-0 bg-transparent transition-all duration-300 ease-in-out group-hover:bg-slate-700/50 group-hover:scale-[1.02]" />
                <img className=" absolute w-32 h-18 top-4 left-4 object-cover rounded-2xl pointer-events-none border-2 border-slate-300 group-hover:border-violet-500 transition-all duration-500" src={webServer} alt="Docoppolis Web Server Photo" />
                <p className="relative ml-40 font-semibold text-slate-100 transition-colors duration-300 group-hover:text-violet-500 inline-block">
                <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 group-hover:after:w-full">
                    Docoppolis Web Server
                </span>
                </p>              
                <p className="text-slate-400 ml-40">
                Docoppolis Web Server is a lightweight custom HTTP server built in C#, designed to handle routing, session management, 
                and authentication. It provides a modular foundation for understanding how web servers process requests and manage users behind the scenes.
                </p>       
            </div>
            </a>

            <a href="https://github.com/Docoppolis/Student_Management_System" target="_blank" rel="noopener noreferrer" className="text-violet-500 block group">
            <div className="relative w-full p-4 rounded-2xl overflow-hidden group whitespace-normal break-words">
                <div className="absolute inset-0 bg-transparent transition-all duration-300 ease-in-out group-hover:bg-slate-700/50 group-hover:scale-[1.02]" />
                <img className=" absolute w-32 h-18 top-4 left-4 object-cover rounded-2xl pointer-events-none border-2 border-slate-300 group-hover:border-violet-500 transition-all duration-500" src={studentManagementSystem} alt="Student Management System Photo" />
                <p className="relative ml-40 font-semibold text-slate-100 transition-colors duration-300 group-hover:text-violet-500 inline-block">
                <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 group-hover:after:w-full">
                    Student Management System
                </span>
                </p>              
                <p className="text-slate-400 ml-40">
                Student Management System is a full-stack web application for managing student registration, courses, and academic progress. 
                It includes role-based access for students, instructors, and administrators, providing tailored dashboards for tracking enrollments, schedules, and degree progress.
                </p>       
            </div>
            </a>

            <a href="https://github.com/Docoppolis/Portfolio" target="_blank" rel="noopener noreferrer" className="text-violet-500 block group">
            <div className="relative w-full p-4 rounded-2xl overflow-hidden group whitespace-normal break-words">
                <div className="absolute inset-0 bg-transparent transition-all duration-300 ease-in-out group-hover:bg-slate-700/50 group-hover:scale-[1.02]" />
                <img className=" absolute w-32 h-18 top-4 left-4 object-cover rounded-2xl pointer-events-none border-2 border-slate-300 group-hover:border-violet-500 transition-all duration-500" src={portfolio} alt="Portfolio Photo" />
                <p className="relative ml-40 font-semibold text-slate-100 transition-colors duration-300 group-hover:text-violet-500 inline-block">
                <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 group-hover:after:w-full">
                    Portfolio Website
                </span>
                </p>              
                <p className="text-slate-400 ml-40">
                Portfolio Website is the repository for this site, built to showcase projects, skills, and experience through a clean, 
                scroll-based layout. It features smooth animations and interactive sections that highlight your work and development journey.
                </p>       
            </div>
            </a>

            <a href="https://github.com/Docoppolis/Shinkenshi" target="_blank" rel="noopener noreferrer" className="text-violet-500 block group">
            <div className="relative w-full p-4 rounded-2xl overflow-hidden group whitespace-normal break-words">
                <div className="absolute inset-0 bg-transparent transition-all duration-300 ease-in-out group-hover:bg-slate-700/50 group-hover:scale-[1.02]" />
                <img className=" absolute w-32 h-18 top-4 left-4 object-cover rounded-2xl pointer-events-none border-2 border-slate-300 group-hover:border-violet-500 transition-all duration-500" src={shinkenshi} alt="Shinkenshi Photo" />
                <p className="relative ml-40 font-semibold text-slate-100 transition-colors duration-300 group-hover:text-violet-500 inline-block">
                <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 group-hover:after:w-full">
                    Shinkenshi
                </span>
                </p>              
                <p className="text-slate-400 ml-40">
                    Shinkenshi is my first attempt at game development — a simple 2D action platformer built in Unreal Engine to explore core 
                    gameplay design and programming concepts. It features basic movement, dashing, and combat mechanics that served as a foundation for learning level design and character control.
                </p>       
            </div>
            </a>

            <a href="https://github.com/Docoppolis/Stock_Data_Viewer-CS" target="_blank" rel="noopener noreferrer" className="text-violet-500 block group">
            <div className="relative w-full p-4 rounded-2xl overflow-hidden group whitespace-normal break-words">
                <div className="absolute inset-0 bg-transparent transition-all duration-300 ease-in-out group-hover:bg-slate-700/50 group-hover:scale-[1.02]" />
                <img className=" absolute w-32 h-18 top-4 left-4 object-cover rounded-2xl pointer-events-none border-2 border-slate-300 group-hover:border-violet-500 transition-all duration-500" src={stockViewer} alt="Stock Viewer Photo" />
                <p className="relative ml-40 font-semibold text-slate-100 transition-colors duration-300 group-hover:text-violet-500 inline-block">
                <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 group-hover:after:w-full">
                    Stock Data Viewer
                </span>
                </p>              
                <p className="text-slate-400 ml-40">
                    Stock Data Viewer is a C# WinForms application developed as a school project to explore data visualization and financial 
                    analysis concepts. It loads stock data from CSV files and generates interactive candlestick charts with tools for selecting ranges, 
                    identifying peaks and valleys, and displaying Fibonacci retracement levels.
                </p>       
            </div>
            </a>
            
        </div>
    );
}
    
    
