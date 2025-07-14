"use client";
import StarField from "../StarField";
export default function Portfolio() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-night text-white px-2 sm:px-4 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none"><StarField /></div>
      <div className="nebula" />
      <div className="relative z-10 w-full flex flex-col items-center justify-center py-10 sm:py-16 mb-6 sm:mb-8 bg-black/60 border-b border-white/10 shadow-lg">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 text-center tracking-tight drop-shadow-lg">Portfolio</h1>
        <p className="text-base sm:text-lg text-slate-300 text-center max-w-xs sm:max-w-2xl">Explore some of our stellar projects and case studies.</p>
      </div>
      <div className="relative z-10 w-full max-w-xs sm:max-w-4xl flex flex-col gap-6 sm:gap-8 items-center">
        <div className="relative bg-black/60 border-2 border-cyan-400 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-2xl flex flex-col items-center gap-4 mt-4 animate-fadein backdrop-blur-md" style={{boxShadow: '0 0 32px 0 #06b6d4, 0 2px 16px 0 #0008'}}>
          <div className="w-full flex justify-center mb-2">
            <div className="h-1 w-16 bg-cyan-400 rounded-full opacity-60"></div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🗄️</span>
            <h2 className="text-2xl font-extrabold text-cyan-300 tracking-tight drop-shadow">HARTA X</h2>
          </div>
          <p className="text-base sm:text-lg text-slate-100 text-center max-w-xl font-medium">Malaysia's #1 Asset Management System for mosques and suraus. Efficient, secure, and mobile-friendly asset management with real-time inventory, QR code integration, smart notifications, analytics, and more.</p>
          <ul className="text-left text-slate-200 text-sm sm:text-base list-disc list-inside max-w-lg space-y-1 pl-2">
            <li>Real-time inventory & asset tracking</li>
            <li>QR code integration for fast access</li>
            <li>Automated maintenance notifications</li>
            <li>Visual analytics dashboard</li>
            <li>End-to-end data encryption & layered access control</li>
            <li>Mobile app support (iOS & Android)</li>
          </ul>
          <a href="https://hartax.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-cyan-400 text-black font-bold rounded-lg px-8 py-2 shadow-lg hover:bg-cyan-300 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300">View Live Project</a>
        </div>
      </div>
    </div>
  );
} 