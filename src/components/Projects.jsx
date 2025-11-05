import pathOptimize from "../assets/PathOptimize.png";
import webServer from "../assets/WebServer.png";
import studentManagementSystem from "../assets/StudentManagementSystem.png";
import portfolio from "../assets/Portfolio.png";
import shinkenshi from "../assets/Shinkenshi.png";
import stockViewer from "../assets/StockViewer.png";

const projects = [
  {
    title: "PathOptimize",
    img: pathOptimize,
    link: "https://github.com/Docoppolis/PathOptimize",
    description: `PathOptimize is an application designed to improve the organization 
    and movement of hospital equipment using Tampa General Hospital’s floor plan. 
    It analyzes equipment locations and traffic patterns to identify more efficient 
    storage placements, reducing retrieval time and improving workflow across hospital departments.`,
  },
  {
    title: "Docoppolis Web Server",
    img: webServer,
    link: "https://github.com/Docoppolis/Docoppolis-Web-Server",
    description: `A lightweight custom HTTP server built in C#, designed to handle routing, 
    session management, and authentication. Provides a modular foundation for understanding 
    how web servers process requests and manage users behind the scenes.`,
  },
  {
    title: "Student Management System",
    img: studentManagementSystem,
    link: "https://github.com/Docoppolis/Student_Management_System",
    description: `A full-stack web application for managing student registration, courses, and academic progress. 
    Includes role-based access and tailored dashboards for tracking enrollments, schedules, and degree progress.`,
  },
  {
    title: "Portfolio Website",
    img: portfolio,
    link: "https://github.com/Docoppolis/Portfolio",
    description: `This portfolio showcases projects, skills, and experience through a clean, scroll-based layout 
    with smooth animations and interactive sections.`,
  },
  {
    title: "Shinkenshi",
    img: shinkenshi,
    link: "https://github.com/Docoppolis/Shinkenshi",
    description: `A 2D action platformer built in Unreal Engine exploring gameplay design and programming concepts, 
    featuring dashing, combat mechanics, and level design experimentation.`,
  },
  {
    title: "Stock Data Viewer",
    img: stockViewer,
    link: "https://github.com/Docoppolis/Stock_Data_Viewer-CS",
    description: `A C# WinForms application for visualizing stock data from CSV files. 
    Generates interactive candlestick charts with tools for identifying peaks, valleys, and Fibonacci retracements.`,
  },
];

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-10">
      <div className="lg:hidden text-white/70 text-lg font-semibold text-center mb-8"> Projects</div>
      {projects.map(({ title, img, link, description }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group text-violet-500"
        >
          <div
            className="
              relative w-full p-4 rounded-2xl overflow-hidden
              bg-transparent transition-all duration-300 ease-in-out
              hover:bg-slate-700/50 hover:scale-[1.02]
              flex flex-col sm:flex-row gap-4 sm:gap-6
            "
          >
            {/* Image */}
            <div className="flex-shrink-0 self-center sm:self-start">
              <img
                className="w-full sm:w-32 h-24 sm:h-20 object-cover rounded-2xl border-2 border-slate-300 
                           group-hover:border-violet-500 transition-all duration-500"
                src={img}
                alt={`${title} preview`}
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center sm:ml-0">
              <p className="font-semibold text-slate-100 text-lg sm:text-base group-hover:text-violet-500">
                <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                                after:bg-violet-500 after:transition-all after:duration-300 group-hover:after:w-full">
                  {title}
                </span>
              </p>
              <p className="text-slate-400 text-sm mt-1 leading-relaxed">{description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
