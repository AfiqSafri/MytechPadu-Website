"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between bg-night text-white">
      <main className="relative flex flex-col items-center justify-center flex-1 w-full px-2 sm:px-4 py-12 sm:py-24 gap-8 sm:gap-12">
        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-center">MyTech Padu Solutions</h1>
        <h2 className="text-lg sm:text-2xl font-medium text-center max-w-xs sm:max-w-2xl opacity-90">
          Empowering Your Digital Future<br/>
          <span className="block mt-2 text-base sm:text-xl font-light" style={{color: 'var(--primary-blue)'}}>Innovative IT & Software Development for Modern Businesses</span>
        </h2>
        <p className="text-base sm:text-lg text-center text-slate-300 max-w-2xl mt-2 mb-4">
          We are a passionate team of technology experts dedicated to delivering high-quality, scalable, and secure software solutions. From web and mobile app development to cloud integration and digital transformation, we help businesses thrive in a rapidly evolving digital landscape.
        </p>
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 w-full max-w-xs sm:max-w-4xl justify-center mt-6 sm:mt-8">
          <ServiceCard
            title="App Development"
            description="Modern, scalable web and mobile applications built with the latest technologies. We turn your ideas into powerful digital products that drive growth and engagement."
            icon="💻"
          />
          <ServiceCard
            title="Custom Software Solutions"
            description="Tailored software to solve your unique business challenges. Our solutions are engineered for reliability, security, and long-term success."
            icon="🛠️"
          />
          <ServiceCard
            title="IT Consulting & Support"
            description="Expert guidance and ongoing support for your digital journey. We help you make the right technology choices and ensure your systems run smoothly."
            icon="🤝"
          />
        </div>
      </main>
      <footer className="relative w-full flex flex-col items-center py-4 sm:py-6 bg-black/60 backdrop-blur-sm border-t border-white/10">
        <p className="text-xs sm:text-sm text-slate-300">&copy; {new Date().getFullYear()} MyTech Padu Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ServiceCard({ title, description, icon }) {
  return (
    <div className="professional-card p-6 flex flex-col items-center w-full max-w-xs">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-base text-white text-center">{description}</p>
    </div>
  );
}
