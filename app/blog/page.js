"use client";
import StarField from "../StarField";
export default function Blog() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-night text-white px-2 sm:px-4 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none"><StarField /></div>
      <div className="nebula" />
      <div className="relative z-10 w-full flex flex-col items-center justify-center py-10 sm:py-16 mb-6 sm:mb-8 bg-black/60 border-b border-white/10 shadow-lg">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 text-center tracking-tight drop-shadow-lg">Blog & Insights</h1>
        <p className="text-base sm:text-lg text-slate-300 text-center max-w-xs sm:max-w-2xl">Read our latest articles, news, and insights from the digital galaxy.</p>
      </div>
      <div className="relative z-10 w-full max-w-xs sm:max-w-4xl flex flex-col gap-6 sm:gap-8 items-center">
        <div className="border border-white rounded-lg p-4 sm:p-8 w-full text-center text-slate-300">(Blog posts coming soon...)</div>
      </div>
    </div>
  );
} 