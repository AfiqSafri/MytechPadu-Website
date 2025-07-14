"use client";
export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-night text-white px-4 py-24">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Contact Us</h1>
      <form className="w-full max-w-md bg-black/80 rounded-lg p-8 border border-white flex flex-col gap-4 mb-8">
        <input className="bg-black border border-white rounded px-4 py-2 text-white" type="text" placeholder="Your Name" required />
        <input className="bg-black border border-white rounded px-4 py-2 text-white" type="email" placeholder="Your Email" required />
        <textarea className="bg-black border border-white rounded px-4 py-2 text-white" placeholder="Your Message" rows={4} required />
        <button className="bg-white text-black font-semibold rounded px-4 py-2 mt-2 hover:bg-slate-200 transition" type="submit">Send Message</button>
      </form>
      <div className="text-slate-300 text-center">
        <p>Email: info@mytechpadu.com</p>
        <p>Address: (Your company address here)</p>
      </div>
    </div>
  );
} 