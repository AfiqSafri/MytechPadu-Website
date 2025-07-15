"use client";
import StarField from "../StarField";
export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-night text-white px-2 sm:px-4 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none"></div>
      <div className="nebula" />
      <section className="relative z-10 w-full flex flex-col items-center justify-center py-10 sm:py-16 mb-6 sm:mb-8 bg-black/60 border-b border-white/10 shadow-lg">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 text-center tracking-tight drop-shadow-lg">About Us</h1>
        <p className="text-base sm:text-lg text-slate-300 text-center max-w-xs sm:max-w-2xl">Learn more about MyTech Padu Solutions—your trusted partner for innovative IT and software development. We are committed to delivering excellence, driving digital transformation, and empowering businesses to succeed in the technology era.</p>
      </section>
      <section className="relative z-10 w-full max-w-xs sm:max-w-3xl flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-12">
        <div className="flex-1 bg-black/80 border border-white rounded-xl p-4 sm:p-8 shadow-md mb-4 md:mb-0">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Our Mission</h2>
          <p className="text-sm sm:text-base text-slate-200">To empower organizations and individuals by delivering innovative, reliable, and scalable technology solutions. We strive to accelerate digital transformation and help our clients achieve sustainable growth in a connected world.</p>
        </div>
        <div className="flex-1 bg-black/80 border border-white rounded-xl p-4 sm:p-8 shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Our Vision</h2>
          <p className="text-sm sm:text-base text-slate-200">To be a leading force in the IT industry, pioneering software and digital solutions that inspire, connect, and elevate businesses—one innovation at a time.</p>
        </div>
      </section>
      <section className="w-full max-w-xs sm:max-w-2xl px-1 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Our Story</h2>
        <ol className="relative border-l-4 border-cyan-400 ml-2 sm:ml-4">
          <li className="mb-6 sm:mb-10 ml-4 sm:ml-6">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-cyan-400 rounded-full -left-6 ring-4 ring-black/80 text-2xl shadow-lg"><span className="text-black font-bold">💡</span></span>
            <div className="bg-black/70 rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-base sm:text-lg">Founded</h3>
              <p className="text-slate-300 text-sm sm:text-base">MyTech Padu Solutions was established by passionate technologists with a vision to help businesses harness the power of digital innovation. Our journey began with a commitment to quality, creativity, and client success.</p>
            </div>
          </li>
          <li className="mb-6 sm:mb-10 ml-4 sm:ml-6">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-cyan-400 rounded-full -left-6 ring-4 ring-black/80 text-2xl shadow-lg"><span className="text-black font-bold">🧑‍💻</span></span>
            <div className="bg-black/70 rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-base sm:text-lg">Growth</h3>
              <p className="text-slate-300 text-sm sm:text-base">Our expert team brings together years of experience in software engineering, IT consulting, and digital transformation. We have delivered successful projects for clients across diverse industries, always focusing on innovation and measurable results.</p>
            </div>
          </li>
          <li className="ml-4 sm:ml-6">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-cyan-400 rounded-full -left-6 ring-4 ring-black/80 text-2xl shadow-lg"><span className="text-black font-bold">🌐</span></span>
            <div className="bg-black/70 rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-base sm:text-lg">Future</h3>
              <p className="text-slate-300 text-sm sm:text-base">We continue to innovate and expand, helping more businesses reach new heights with secure, scalable, and future-ready technology solutions.</p>
            </div>
          </li>
        </ol>
      </section>
      <section className="w-full max-w-xs sm:max-w-2xl px-1 sm:px-0 mt-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Our Team</h2>
        <p className="text-base text-slate-300 text-center mb-4">Our team is made up of dedicated professionals with deep expertise in full stack development, backend engineering, quality assurance, and IT consultation. We are passionate about building technology that makes a difference.</p>
        <div className="flex flex-wrap gap-4 sm:gap-8 justify-center">
          {[
            { icon: "🧑‍💻", name: "Fahmin", role: "Full Stack Developer" },
            { icon: "👨‍💻", name: "Afiq", role: "Backend Developer" },
            { icon: "🧑‍🔧", name: "Farhan", role: "QA" },
            { icon: "👨‍🏫", name: "Dr. Hazli", role: "Consultation" },
          ].map(member => (
            <div key={member.name} className="flex flex-col items-center bg-black/80 border border-white rounded-xl p-4 sm:p-5 shadow-lg w-36 sm:w-40">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white flex items-center justify-center text-2xl sm:text-3xl mb-2">{member.icon}</div>
              <span className="font-semibold text-sm sm:text-base">{member.name}</span>
              <span className="text-slate-400 text-xs sm:text-sm text-center">{member.role}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 