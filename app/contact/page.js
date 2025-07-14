"use client";
import StarField from "../StarField";
export default function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-night text-white px-2 sm:px-4 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none"><StarField /></div>
      <div className="nebula" />
      <div className="relative z-10 w-full flex flex-col items-center justify-center py-10 sm:py-16 mb-6 sm:mb-8 bg-black/60 border-b border-white/10 shadow-lg">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 text-center tracking-tight drop-shadow-lg">Contact Us</h1>
      </div>
      <form className="relative z-10 w-full max-w-xs sm:max-w-md bg-black/80 rounded-lg p-4 sm:p-8 border border-white flex flex-col gap-4 mb-6 sm:mb-8">
        <input className="bg-black border border-white rounded px-3 sm:px-4 py-2 text-white text-sm sm:text-base" type="text" placeholder="Your Name" required />
        <input className="bg-black border border-white rounded px-3 sm:px-4 py-2 text-white text-sm sm:text-base" type="email" placeholder="Your Email" required />
        <textarea className="bg-black border border-white rounded px-3 sm:px-4 py-2 text-white text-sm sm:text-base" placeholder="Your Message" rows={4} required />
        <button className="bg-white text-black font-semibold rounded px-3 sm:px-4 py-2 mt-2 hover:bg-slate-200 transition text-sm sm:text-base" type="submit">Send Message</button>
      </form>
      <div className="relative z-10 text-slate-300 text-center text-sm sm:text-base">
        <p>Email: info@mytechpadu.com</p>
        <p>Address: (Your company address here)</p>
      </div>
    </div>
  );
} 