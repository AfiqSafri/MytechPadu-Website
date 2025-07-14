"use client";
import StarField from "../StarField";
export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-night text-white px-2 sm:px-4 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none"><StarField /></div>
      <div className="nebula" />
      <div className="relative z-10 w-full flex flex-col items-center justify-center py-10 sm:py-16 mb-6 sm:mb-8 bg-black/60 border-b border-white/10 shadow-lg">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 text-center tracking-tight drop-shadow-lg">Privacy Policy</h1>
      </div>
      <div className="relative z-10 w-full max-w-xs sm:max-w-3xl text-slate-300 text-sm sm:text-base border border-white rounded-lg p-4 sm:p-8">
        (Privacy policy content coming soon...)
      </div>
    </div>
  );
} 