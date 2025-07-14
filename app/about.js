"use client";
export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-night text-white px-4 py-24">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">About Us</h1>
      <section className="max-w-2xl w-full mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-6 text-slate-200">To empower businesses and individuals to reach for the stars by delivering innovative, reliable, and scalable software solutions that drive digital transformation and success in a connected galaxy.</p>
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg text-slate-200">To be a leading force in the IT universe, pioneering technology that connects, inspires, and elevates humanity—one solution at a time.</p>
      </section>
      <section className="max-w-2xl w-full mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-base text-slate-300">MyTech Padu Solutions was founded with a passion for technology and a vision to help businesses conquer the digital galaxy. Our team of experts brings together years of experience in software and app development, working with clients across industries to deliver stellar results.</p>
      </section>
      <section className="max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-base text-slate-300">(Team member profiles coming soon...)</p>
      </section>
    </div>
  );
} 