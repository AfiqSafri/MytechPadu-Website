"use client";
import StarField from "../StarField";
export default function Services() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-night text-white px-2 sm:px-4 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none"><StarField /></div>
      <div className="nebula" />
      <div className="relative z-10 w-full flex flex-col items-center justify-center py-10 sm:py-16 mb-6 sm:mb-8 bg-black/60 border-b border-white/10 shadow-lg">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 text-center tracking-tight drop-shadow-lg">Our Services</h1>
        <p className="text-base sm:text-lg text-slate-300 text-center max-w-xs sm:max-w-2xl">Explore our main offerings and how we can help you conquer the digital galaxy.</p>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row gap-6 sm:gap-8 w-full max-w-xs sm:max-w-4xl justify-center">
        <ServiceCard
          title="App Development"
          description="We build modern, scalable mobile and web applications to launch your ideas into the digital universe."
        />
        <ServiceCard
          title="Software Solutions"
          description="Custom software tailored to your business needs, engineered to help you conquer your market."
        />
      </div>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="bg-black gempak-glow rounded-xl shadow-lg p-6 flex flex-col items-center w-full max-w-xs backdrop-blur-md border border-white">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-base text-white text-center">{description}</p>
    </div>
  );
} 