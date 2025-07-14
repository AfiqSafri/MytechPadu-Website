"use client";
import StarField from "../StarField";
export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-night text-white px-2 sm:px-4 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none"><StarField /></div>
      <div className="nebula" />
      <section className="relative z-10 w-full flex flex-col items-center justify-center py-10 sm:py-16 mb-6 sm:mb-8 bg-black/60 border-b border-white/10 shadow-lg">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 text-center tracking-tight drop-shadow-lg">About Us</h1>
        <p className="text-base sm:text-lg text-slate-300 text-center max-w-xs sm:max-w-2xl">Discover our mission, vision, and the stellar team behind MyTech Padu Solutions.</p>
      </section>
      <section className="relative z-10 w-full max-w-xs sm:max-w-3xl flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-12 animate-fadein">
        <div className="flex-1 bg-black/80 border border-white rounded-xl p-4 sm:p-8 shadow-md mb-4 md:mb-0">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Our Mission</h2>
          <p className="text-sm sm:text-base text-slate-200">To empower businesses and individuals to reach for the stars by delivering innovative, reliable, and scalable software solutions that drive digital transformation and success in a connected galaxy.</p>
        </div>
        <div className="flex-1 bg-black/80 border border-white rounded-xl p-4 sm:p-8 shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Our Vision</h2>
          <p className="text-sm sm:text-base text-slate-200">To be a leading force in the IT universe, pioneering technology that connects, inspires, and elevates humanity—one solution at a time.</p>
        </div>
      </section>
      <section className="w-full max-w-xs sm:max-w-2xl px-1 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Our Story</h2>
        <ol className="relative border-l-4 border-cyan-400 ml-2 sm:ml-4">
          <li className="mb-6 sm:mb-10 ml-4 sm:ml-6">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-cyan-400 rounded-full -left-6 ring-4 ring-black/80 text-2xl shadow-lg"><span className="text-black font-bold">💡</span></span>
            <div className="bg-black/70 rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-base sm:text-lg">Founded</h3>
              <p className="text-slate-300 text-sm sm:text-base">MyTech Padu Solutions was founded with a passion for technology and a vision to help businesses conquer the digital galaxy.</p>
            </div>
          </li>
          <li className="mb-6 sm:mb-10 ml-4 sm:ml-6">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-cyan-400 rounded-full -left-6 ring-4 ring-black/80 text-2xl shadow-lg"><span className="text-black font-bold">🧑‍💻</span></span>
            <div className="bg-black/70 rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-base sm:text-lg">Growth</h3>
              <p className="text-slate-300 text-sm sm:text-base">Our team of experts brings together years of experience in software and app development, working with clients across industries to deliver stellar results.</p>
            </div>
          </li>
          <li className="ml-4 sm:ml-6">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-cyan-400 rounded-full -left-6 ring-4 ring-black/80 text-2xl shadow-lg"><span className="text-black font-bold">🌐</span></span>
            <div className="bg-black/70 rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-base sm:text-lg">Future</h3>
              <p className="text-slate-300 text-sm sm:text-base">We continue to innovate and expand, helping more businesses reach new heights in the digital universe.</p>
            </div>
          </li>
        </ol>
      </section>
      <section className="w-full max-w-xs sm:max-w-2xl px-1 sm:px-0 mt-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Our Team</h2>
        <div className="flex flex-wrap gap-4 sm:gap-8 justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white flex items-center justify-center text-2xl sm:text-3xl mb-2">👩‍💻</div>
            <span className="font-semibold text-sm sm:text-base">Aina</span>
            <span className="text-slate-400 text-xs sm:text-sm">CEO</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white flex items-center justify-center text-2xl sm:text-3xl mb-2">👨‍💻</div>
            <span className="font-semibold text-sm sm:text-base">Faiz</span>
            <span className="text-slate-400 text-xs sm:text-sm">CTO</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white flex items-center justify-center text-2xl sm:text-3xl mb-2">🧑‍🚀</div>
            <span className="font-semibold text-sm sm:text-base">Zara</span>
            <span className="text-slate-400 text-xs sm:text-sm">Lead Developer</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white flex items-center justify-center text-2xl sm:text-3xl mb-2">🧑‍🔬</div>
            <span className="font-semibold text-sm sm:text-base">Rizal</span>
            <span className="text-slate-400 text-xs sm:text-sm">Product Manager</span>
          </div>
        </div>
      </section>
    </div>
  );
} 