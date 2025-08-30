import { useEffect, useState } from "react";
import { Cloud, Server, Cpu, Code, Monitor, FileCode, CircuitBoard, Database } from "lucide-react";

export const StarBackground = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
      {/* Background */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isDark ? "#0f172a" : "#f0f9ff"} />
            <stop offset="100%" stopColor={isDark ? "#1e293b" : "#e0f2fe"} />
          </linearGradient>
        </defs>
        <rect width="1440" height="800" fill="url(#bg)" />

        {/* Lines with animation */}
        <line x1="400" y1="200" x2="1000" y2="400" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 6">
          <animate attributeName="stroke-dashoffset" from="0" to="12" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="450" y1="250" x2="700" y2="600" stroke="#22d3ee" strokeWidth="3" strokeDasharray="6 6">
          <animate attributeName="stroke-dashoffset" from="0" to="12" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="900" y1="500" x2="300" y2="550" stroke="#a78bfa" strokeWidth="3" strokeDasharray="6 6">
          <animate attributeName="stroke-dashoffset" from="0" to="12" dur="4s" repeatCount="indefinite" />
        </line>
      </svg>

      {/* Icons Container (Responsive Grid) */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full h-full p-8">
        {/* Cloud */}
        <div className="flex justify-center items-center text-sky-400 opacity-80 animate-bounce">
          <Cloud size={80} className="sm:w-[100px] sm:h-[100px]" />
        </div>

        {/* Server */}
        <div className="flex justify-center items-center text-blue-500 animate-pulse">
          <Server size={70} className="sm:w-[90px] sm:h-[90px]" />
        </div>

        {/* CPU */}
        <div className="flex justify-center items-center text-amber-400 animate-spin-slow">
          <Cpu size={70} className="sm:w-[90px] sm:h-[90px]" />
        </div>

        {/* Code */}
        <div className="flex justify-center items-center text-slate-600 dark:text-slate-200 animate-fadeIn">
          <Code size={70} className="sm:w-[90px] sm:h-[90px]" />
        </div>

        {/* Monitor */}
        <div className="flex justify-center items-center text-emerald-400 animate-float">
          <Monitor size={65} className="sm:w-[85px] sm:h-[85px]" />
        </div>

        {/* FileCode */}
        <div className="flex justify-center items-center text-pink-400 animate-bounce">
          <FileCode size={65} className="sm:w-[85px] sm:h-[85px]" />
        </div>

        {/* CircuitBoard */}
        <div className="flex justify-center items-center text-indigo-400 animate-pulse">
          <CircuitBoard size={70} className="sm:w-[90px] sm:h-[90px]" />
        </div>

        {/* Database */}
        <div className="flex justify-center items-center text-green-500 opacity-90 animate-pulse">
          <Database size={75} className="sm:w-[95px] sm:h-[95px]" />
        </div>
      </div>
    </div>
  );
};
