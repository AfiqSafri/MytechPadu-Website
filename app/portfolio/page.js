"use client";
export default function Portfolio() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-night text-white px-2 sm:px-4 pb-24">
      <div className="relative w-full flex flex-col items-center justify-center py-10 sm:py-16 mb-6 sm:mb-8 bg-black/60 border-b border-white/10 shadow-lg">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 text-center tracking-tight">Portfolio</h1>
        <p className="text-base sm:text-lg text-slate-300 text-center max-w-xs sm:max-w-2xl">Discover our portfolio of innovative projects and successful collaborations. We take pride in delivering impactful solutions that drive client success and digital transformation.</p>
      </div>
      <div className="relative w-full max-w-xs sm:max-w-4xl flex flex-col gap-6 sm:gap-8 items-center">
        <div className="relative professional-card p-6 sm:p-8 w-full max-w-2xl flex flex-col items-center gap-4 mt-4">
          <div className="w-full flex justify-center mb-2">
            <div className="h-1 w-16 bg-cyan-400 rounded-full opacity-60"></div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🗄️</span>
            <h2 className="text-2xl font-extrabold text-cyan-300 tracking-tight">HARTA X</h2>
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
          <a href="https://hartax.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-cyan-400 text-black font-bold rounded-lg px-8 py-2 shadow-lg hover:bg-cyan-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300">View Live Project</a>
        </div>
      </div>
    </div>
  );
} 